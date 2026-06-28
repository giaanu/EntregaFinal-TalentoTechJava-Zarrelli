package com.techlab.store.controller;

import com.techlab.store.model.Usuario;
import com.techlab.store.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    // Constructor
    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    // GET /api/usuarios
    @GetMapping
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    // GET /api/usuarios/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable Long id) {
        return usuarioRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/usuarios
    @PostMapping
    public ResponseEntity<Usuario> crear(@RequestBody Usuario usuario) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(usuarioRepository.save(usuario));
    }
}