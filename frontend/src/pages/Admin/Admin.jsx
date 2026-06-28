import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8080/api";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [tab, setTab] = useState("productos");
    const [editando, setEditando] = useState(null);
    const [nuevoStock, setNuevoStock] = useState("");
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        fetchProductos();
        fetchUsuarios();
    }, []);

    const fetchProductos = async () => {
        const res = await fetch(`${API_URL}/productos`);
        const data = await res.json();
        setProductos(data);
    };

    const fetchUsuarios = async () => {
        const res = await fetch(`${API_URL}/usuarios`);
        const data = await res.json();
        setUsuarios(data);
    };

    const actualizarStock = async (producto) => {
        const body = { ...producto, stock: parseInt(nuevoStock) };
        const res = await fetch(`${API_URL}/productos/${producto.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (res.ok) {
            setMensaje(`✓ Stock de ${producto.nombre} actualizado.`);
            setEditando(null);
            setNuevoStock("");
            fetchProductos();
            setTimeout(() => setMensaje(""), 3000);
        }
    };

    return (
        <div style={{ padding: "2rem", color: "#e0e0e0", maxWidth: "900px", margin: "0 auto" }}>
            <h1 style={{ color: "#00ADB5", textAlign: "center", marginBottom: "2rem" }}>Administración</h1>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
                <button
                    onClick={() => setTab("productos")}
                    style={{
                        padding: "10px 24px", borderRadius: "8px", border: "none", cursor: "pointer",
                        backgroundColor: tab === "productos" ? "#00ADB5" : "#1a1a2e",
                        color: "white", fontFamily: "inherit", fontSize: "1rem"
                    }}>
                    Productos y Stock
                </button>
                <button
                    onClick={() => setTab("usuarios")}
                    style={{
                        padding: "10px 24px", borderRadius: "8px", border: "none", cursor: "pointer",
                        backgroundColor: tab === "usuarios" ? "#00ADB5" : "#1a1a2e",
                        color: "white", fontFamily: "inherit", fontSize: "1rem"
                    }}>
                    Usuarios
                </button>
            </div>

            {mensaje && <p style={{ textAlign: "center", color: "#00ADB5", marginBottom: "1rem" }}>{mensaje}</p>}

            {tab === "productos" && (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ borderBottom: "2px solid #00ADB5" }}>
                            <th style={{ padding: "10px", textAlign: "left" }}>Producto</th>
                            <th style={{ padding: "10px", textAlign: "center" }}>Precio</th>
                            <th style={{ padding: "10px", textAlign: "center" }}>Stock</th>
                            <th style={{ padding: "10px", textAlign: "center" }}>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(p => (
                            <tr key={p.id} style={{ borderBottom: "1px solid #2a2a2a" }}>
                                <td style={{ padding: "10px" }}>{p.nombre}</td>
                                <td style={{ padding: "10px", textAlign: "center" }}>${p.precio?.toLocaleString("es-AR")}</td>
                                <td style={{ padding: "10px", textAlign: "center" }}>
                                    {editando === p.id ? (
                                        <input
                                            type="number"
                                            value={nuevoStock}
                                            onChange={(e) => setNuevoStock(e.target.value)}
                                            style={{ width: "70px", padding: "4px", borderRadius: "4px", border: "1px solid #00ADB5", background: "#0d1117", color: "white", textAlign: "center" }}
                                        />
                                    ) : (
                                        <span style={{ color: p.stock < 3 ? "#ff6b6b" : "#e0e0e0" }}>{p.stock} u.</span>
                                    )}
                                </td>
                                <td style={{ padding: "10px", textAlign: "center" }}>
                                    {editando === p.id ? (
                                        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                                            <button onClick={() => actualizarStock(p)}
                                                style={{ padding: "6px 12px", backgroundColor: "#00ADB5", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                                                Guardar
                                            </button>
                                            <button onClick={() => { setEditando(null); setNuevoStock(""); }}
                                                style={{ padding: "6px 12px", backgroundColor: "#444", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                                                Cancelar
                                            </button>
                                        </div>
                                    ) : (
                                        <button onClick={() => { setEditando(p.id); setNuevoStock(p.stock); }}
                                            style={{ padding: "6px 12px", backgroundColor: "#1a1a2e", color: "#00ADB5", border: "1px solid #00ADB5", borderRadius: "6px", cursor: "pointer" }}>
                                            Editar stock
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {tab === "usuarios" && (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ borderBottom: "2px solid #00ADB5" }}>
                            <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
                            <th style={{ padding: "10px", textAlign: "left" }}>Nombre</th>
                            <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(u => (
                            <tr key={u.id} style={{ borderBottom: "1px solid #2a2a2a" }}>
                                <td style={{ padding: "10px" }}>{u.id}</td>
                                <td style={{ padding: "10px" }}>{u.nombre}</td>
                                <td style={{ padding: "10px" }}>{u.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Link to="/" style={{ padding: "10px 24px", backgroundColor: "#00ADB5", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
                    ← Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default Admin;