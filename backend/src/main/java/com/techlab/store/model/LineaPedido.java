package com.techlab.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "lineas_pedido")
public class LineaPedido {

    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pedido_id", nullable = false)
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    private int cantidad;
    private double subtotal;

    // Constructor vacío
    public LineaPedido() {}

    // Constructor
    public LineaPedido(Pedido pedido, Producto producto, int cantidad) {
        this.pedido   = pedido;
        this.producto = producto;
        this.cantidad = cantidad;
        this.subtotal = producto.getPrecio() * cantidad;
    }

    // Getters
    public Long     getId()       { return id; }
    public Pedido   getPedido()   { return pedido; }
    public Producto getProducto() { return producto; }
    public int      getCantidad() { return cantidad; }
    public double   getSubtotal() { return subtotal; }

    // Setters
    public void setId(Long id)             { this.id = id; }
    public void setPedido(Pedido pedido)   { this.pedido = pedido; }
    public void setProducto(Producto producto) { this.producto = producto; }
    public void setCantidad(int cantidad)  { this.cantidad = cantidad; }
    public void setSubtotal(double subtotal) { this.subtotal = subtotal; }
}