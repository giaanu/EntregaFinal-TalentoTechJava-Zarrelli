package com.techlab.store.controller;

import com.techlab.store.model.LineaPedido;
import com.techlab.store.model.Pedido;
import com.techlab.store.service.PedidoService;
import com.techlab.store.model.PedidoRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PedidoController {

    private final PedidoService pedidoService;

    // Constructor
    public PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    // POST /api/pedidos
    @PostMapping("/pedidos")
    public ResponseEntity<Pedido> crear(@RequestParam Long usuarioId,
                                    @RequestBody PedidoRequest request) {
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(pedidoService.crearPedido(usuarioId, request));
    }

    // GET /api/usuarios/{id}/pedidos
    @GetMapping("/usuarios/{id}/pedidos")
    public List<Pedido> listarPorUsuario(@PathVariable Long id) {
        return pedidoService.listarPorUsuario(id);
    }
}