package com.techlab.store.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "usuarios")
public class Usuario {
    
    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Pedido> pedidos = new ArrayList<>();

    // Constructor vacio
    public Usuario() {}

    // Constructor
    public Usuario(String nombre, String email) {
        this.nombre = nombre;
        this.email = email;
    }

    // Getters
    public Long getId() { return id; }
    public String getNombre() { return nombre; }
    public String getEmail() { return email; }
    public List<Pedido> getPedidos() { return pedidos; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setNombre(String nombre) {
        if(nombre == null || nombre.isBlank())
            throw new IllegalArgumentException("El nombre no puede estar vacio.");
        this.nombre = nombre;
    }
    public void setEmail(String email) {
        if (email == null || email.isBlank())
            throw new IllegalArgumentException("El email no puede estar vacio");
        this.email = email;
    }
}
