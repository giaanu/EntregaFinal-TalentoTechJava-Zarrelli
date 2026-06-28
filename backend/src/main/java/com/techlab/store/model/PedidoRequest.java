package com.techlab.store.model;

import java.util.List;

public class PedidoRequest {

    private List<LineaRequest> lineas;

    public List<LineaRequest> getLineas() { return lineas; }
    public void setLineas(List<LineaRequest> lineas) { this.lineas = lineas; }

    public static class LineaRequest {
        private Long productoId;
        private int cantidad;

        public Long getProductoId() { return productoId; }
        public void setProductoId(Long productoId) { this.productoId = productoId; }
        public int getCantidad() { return cantidad; }
        public void setCantidad(int cantidad) { this.cantidad = cantidad; }
    }
}