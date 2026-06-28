package com.techlab.store.controller;

import com.techlab.store.model.Categoria;
import com.techlab.store.service.CategoriaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {

    private final CategoriaService categoriaService;

    // Constructor
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    // GET /api/categorias
    @GetMapping
    public List<Categoria> listar() {
        return categoriaService.listarTodas();
    }

    // POST /api/categorias
    @PostMapping
    public ResponseEntity<Categoria> crear(@RequestBody Categoria categoria) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(categoriaService.crear(categoria));
    }
}