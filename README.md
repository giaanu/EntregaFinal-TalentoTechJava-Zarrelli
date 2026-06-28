# 🖥️ TechLab Store — Entrega Final Backend Java

Proyecto integrador del curso **Backend en Java** de **Talento Tech**.  
Sistema de e-commerce de tecnología desarrollado con Spring Boot + MySQL, integrado con un frontend en React.

---

## 🚀 Stack tecnológico

### Backend
- Java 21
- Spring Boot 4.1.0
- Spring Web (API REST)
- Spring Data JPA
- MySQL 9.7
- Maven

### Frontend
- React 18
- Vite 7
- React Router DOM
- Context API

---

## 📁 Estructura del proyecto

```
EntregaFinal-TalentoTechJava-Zarrelli/
├── backend/                          # API REST Spring Boot
│   └── src/main/java/com/techlab/store/
│       ├── model/                    # Entidades JPA
│       ├── repository/               # Repositorios
│       ├── service/                  # Lógica de negocio
│       ├── controller/               # Endpoints REST
│       └── exception/                # Manejo de errores
└── frontend/                         # App React (Ocarina Store)
    └── src/
        ├── components/               # Componentes reutilizables
        ├── pages/                    # Páginas principales
        ├── contexts/                 # Context API (carrito)
        └── services/                 # Fetch a la API
```

---

## 🗄️ Modelo de datos

| Entidad | Descripción |
|---|---|
| `Producto` | id, nombre, descripcion, precio, imagen, stock, categoria |
| `Categoria` | id, nombre |
| `Usuario` | id, nombre, email |
| `Pedido` | id, usuario, lineas, total, estado, fecha |
| `LineaPedido` | id, pedido, producto, cantidad, subtotal |
| `EstadoPedido` | PENDIENTE, CONFIRMADO, ENVIADO, ENTREGADO, CANCELADO |

---

## 🔗 Endpoints disponibles

### Productos
```
GET    /api/productos
GET    /api/productos/{id}
POST   /api/productos
PUT    /api/productos/{id}
DELETE /api/productos/{id}
```

### Categorías
```
GET    /api/categorias
POST   /api/categorias
```

### Usuarios
```
GET    /api/usuarios
GET    /api/usuarios/{id}
POST   /api/usuarios
```

### Pedidos
```
POST   /api/pedidos?usuarioId={id}
GET    /api/usuarios/{id}/pedidos
```

---

## ⚙️ Cómo levantar el proyecto

### Requisitos previos
- Java 17+
- Maven
- MySQL 8+
- Node.js 18+

### 1. Base de datos

```sql
CREATE DATABASE techlabdb;
```

### 2. Backend

```bash
cd backend
./mvnw spring-boot:run
```

El servidor levanta en `http://localhost:8080`

> La primera vez carga automáticamente categorías, productos y un usuario de ejemplo.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

La app levanta en `http://localhost:5173`

---

## 🧪 Reglas de negocio

- Al crear un pedido se valida el stock de cada producto antes de confirmar
- Si el stock es insuficiente → `StockInsuficienteException` → HTTP 400
- Al confirmar el pedido se descuenta el stock automáticamente
- El estado inicial de todo pedido es `PENDIENTE`
- Se puede consultar el historial de pedidos por usuario

---

## 👨‍💻 Autor

**Gianluca Zarrelli**  
Curso Backend en Java — Talento Tech  
2026