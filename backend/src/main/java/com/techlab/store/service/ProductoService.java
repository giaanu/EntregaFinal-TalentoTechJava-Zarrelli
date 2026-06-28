package com.techlab.store.service;

import com.techlab.store.model.Producto;
import com.techlab.store.repository.ProductoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    // Constructor
    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    // Listar todos
    public List<Producto> listarTodos() {
        return productoRepository.findAll();
    }

    // Buscar por ID
    public Producto buscarPorId(Long id) {
        return productoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado con ID: " + id));
    }

    // Crear
    public Producto crear(Producto producto) {
        return productoRepository.save(producto);
    }

    // Actualizar
    public Producto actualizar(Long id, Producto datos) {
        Producto existente = buscarPorId(id);
        existente.setNombre(datos.getNombre());
        existente.setDescripcion(datos.getDescripcion());
        existente.setPrecio(datos.getPrecio());
        existente.setImagen(datos.getImagen());
        existente.setStock(datos.getStock());
        existente.setCategoria(datos.getCategoria());
        return productoRepository.save(existente);
    }

    // Eliminar
    public void eliminar(Long id) {
        buscarPorId(id);
        productoRepository.deleteById(id);
    }
}