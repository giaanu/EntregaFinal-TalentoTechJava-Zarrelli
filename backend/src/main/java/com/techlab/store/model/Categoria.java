package com.techlab.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "categorias")
public class Categoria {

    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nombre;

    // Constructor JPA
    public Categoria() {}

    // Constructor
    public Categoria(String nombre) {
        this.nombre = nombre;
    }

    // Getters
    public Long getId() { return id; }
    public String getNombre() { return nombre; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setNombre(String nombre) {
        if (nombre == null || nombre.isBlank())
            throw new IllegalArgumentException("El nombre no puede estar vacio.");
        this.nombre = nombre;
    }
}