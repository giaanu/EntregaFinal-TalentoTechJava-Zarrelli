package com.techlab.store.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pedidos")
public class Pedido {

    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    private List<LineaPedido> lineas = new ArrayList<>();

    private double total;

    @Enumerated(EnumType.STRING)
    private EstadoPedido estado;

    private LocalDateTime fecha;

    // Constructor vacío
    public Pedido() {}

    // Constructor
    public Pedido(Usuario usuario) {
        this.usuario = usuario;
        this.total   = 0;
        this.estado  = EstadoPedido.PENDIENTE;
        this.fecha   = LocalDateTime.now();
    }

    // Getters
    public Long              getId()      { return id; }
    public Usuario           getUsuario() { return usuario; }
    public List<LineaPedido> getLineas()  { return lineas; }
    public double            getTotal()   { return total; }
    public EstadoPedido      getEstado()  { return estado; }
    public LocalDateTime     getFecha()   { return fecha; }

    // Setters
    public void setId(Long id)               { this.id = id; }
    public void setUsuario(Usuario usuario)  { this.usuario = usuario; }
    public void setTotal(double total)       { this.total = total; }
    public void setEstado(EstadoPedido estado) { this.estado = estado; }
    public void setFecha(LocalDateTime fecha)  { this.fecha = fecha; }

    // Agrega línea y recalcula total
    public void agregarLinea(LineaPedido linea) {
        lineas.add(linea);
        this.total += linea.getSubtotal();
    }
}