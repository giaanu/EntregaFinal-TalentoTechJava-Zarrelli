package com.techlab.store.service;

import com.techlab.store.model.Categoria;
import com.techlab.store.repository.CategoriaRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    // Constructor
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    // Listar todas
    public List<Categoria> listarTodas() {
        return categoriaRepository.findAll();
    }

    // Crear
    public Categoria crear(Categoria categoria) {
        if (categoriaRepository.existsByNombre(categoria.getNombre()))
            throw new IllegalArgumentException("Ya existe una categoría con ese nombre.");
        return categoriaRepository.save(categoria);
    }
}