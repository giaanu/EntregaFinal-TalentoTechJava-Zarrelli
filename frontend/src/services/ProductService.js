const API_URL = "http://localhost:8080/api";

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/productos`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
};

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/productos/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener producto:", error);
        return null;
    }
};