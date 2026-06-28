package com.techlab.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "productos")
public class Producto {

    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String descripcion;

    @Column(nullable = false)
    private double precio;

    private String imagen;

    @Column(nullable = false)
    private int stock;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    // Constructor vacio
    public Producto() {}

    // Constructor
    public Producto(String nombre, String descripcion, double precio, String imagen, int stock, Categoria categoria){

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
        this.categoria = categoria;

    }
    
    // Getters
    public Long      getId()          { return id; }
    public String    getNombre()      { return nombre; }
    public String    getDescripcion() { return descripcion; }
    public double    getPrecio()      { return precio; }
    public String    getImagen()      { return imagen; }
    public int       getStock()       { return stock; }
    public Categoria getCategoria()   { return categoria; }

    // Setters
    public void setId(Long id)                   { this.id = id; }
    public void setNombre(String nombre) {
        if (nombre == null || nombre.isBlank())
            throw new IllegalArgumentException("El nombre no puede estar vacío.");
        this.nombre = nombre;
    }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public void setPrecio(double precio) {
        if (precio <= 0)
            throw new IllegalArgumentException("El precio debe ser mayor a 0.");
        this.precio = precio;
    }
    public void setImagen(String imagen)           { this.imagen = imagen; }
    public void setStock(int stock) {
        if (stock < 0)
            throw new IllegalArgumentException("El stock no puede ser negativo.");
        this.stock = stock;
    }
    public void setCategoria(Categoria categoria)  { this.categoria = categoria; }

    // Descuenta stock al confirmar pedido
    public void descontarStock(int cantidad) {
        this.stock -= cantidad;
    }
}
