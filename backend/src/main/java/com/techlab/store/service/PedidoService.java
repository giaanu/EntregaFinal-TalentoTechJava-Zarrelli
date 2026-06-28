package com.techlab.store.service;

import com.techlab.store.exception.StockInsuficienteException;
import com.techlab.store.model.*;
import com.techlab.store.repository.PedidoRepository;
import com.techlab.store.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PedidoService {

    private final PedidoRepository   pedidoRepository;
    private final UsuarioRepository  usuarioRepository;
    private final ProductoService    productoService;

    // Constructor
    public PedidoService(PedidoRepository pedidoRepository,
                         UsuarioRepository usuarioRepository,
                         ProductoService productoService) {
        this.pedidoRepository  = pedidoRepository;
        this.usuarioRepository = usuarioRepository;
        this.productoService   = productoService;
    }

    // Crear pedido
    public Pedido crearPedido(Long usuarioId, PedidoRequest request) {

    Usuario usuario = usuarioRepository.findById(usuarioId)
            .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado con ID: " + usuarioId));

    // Resolver productos completos desde la BD
    List<LineaPedido> lineasResueltas = new ArrayList<>();
    for (PedidoRequest.LineaRequest linea : request.getLineas()) {
        Producto producto = productoService.buscarPorId(linea.getProductoId());
        LineaPedido lineaResuelta = new LineaPedido(null, producto, linea.getCantidad());
        lineasResueltas.add(lineaResuelta);
    }

    // Validar stock
    for (LineaPedido linea : lineasResueltas) {
        Producto p = linea.getProducto();
        if (linea.getCantidad() > p.getStock()) {
            throw new StockInsuficienteException(
                    p.getNombre(), p.getStock(), linea.getCantidad()
            );
        }
    }

    // Crear pedido y descontar stock
    Pedido pedido = new Pedido(usuario);
    for (LineaPedido linea : lineasResueltas) {
        linea.setPedido(pedido);
        pedido.agregarLinea(linea);
        linea.getProducto().descontarStock(linea.getCantidad());
    }

    return pedidoRepository.save(pedido);
}

    // Historial por usuario
    public List<Pedido> listarPorUsuario(Long usuarioId) {
        return pedidoRepository.findByUsuarioId(usuarioId);
    }
}