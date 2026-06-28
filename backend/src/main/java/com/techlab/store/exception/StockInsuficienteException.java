package com.techlab.store.exception;

public class StockInsuficienteException extends RuntimeException {

    // Constructor con mensaje descriptivo
    public StockInsuficienteException(String nombreProducto, int stockDisponible, int cantidadPedida) {
        super(String.format(
            "Stock insuficiente para '%s'. Disponible: %d u. | Pedido: %d u.",
            nombreProducto, stockDisponible, cantidadPedida
        ));
    }
}