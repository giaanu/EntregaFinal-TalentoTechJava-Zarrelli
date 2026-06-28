package com.techlab.store.controller;

import com.techlab.store.model.Producto;
import com.techlab.store.service.ProductoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    private final ProductoService productoService;

    // Constructor
    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    // GET /api/productos
    @GetMapping
    public List<Producto> listar() {
        return productoService.listarTodos();
    }

    // GET /api/productos/{id}
    @GetMapping("/{id}")
    public Producto buscarPorId(@PathVariable Long id) {
        return productoService.buscarPorId(id);
    }

    // POST /api/productos
    @PostMapping
    public ResponseEntity<Producto> crear(@RequestBody Producto producto) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(productoService.crear(producto));
    }

    // PUT /api/productos/{id}
    @PutMapping("/{id}")
    public Producto actualizar(@PathVariable Long id, @RequestBody Producto producto) {
        return productoService.actualizar(id, producto);
    }

    // DELETE /api/productos/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        productoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}