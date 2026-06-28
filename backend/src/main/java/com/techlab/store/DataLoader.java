package com.techlab.store;

import com.techlab.store.model.Categoria;
import com.techlab.store.model.Producto;
import com.techlab.store.model.Usuario;
import com.techlab.store.repository.CategoriaRepository;
import com.techlab.store.repository.ProductoRepository;
import com.techlab.store.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final CategoriaRepository categoriaRepository;
    private final ProductoRepository  productoRepository;
    private final UsuarioRepository   usuarioRepository;

    // Constructor
    public DataLoader(CategoriaRepository categoriaRepository,
                      ProductoRepository productoRepository,
                      UsuarioRepository usuarioRepository) {
        this.categoriaRepository = categoriaRepository;
        this.productoRepository  = productoRepository;
        this.usuarioRepository   = usuarioRepository;
    }

    @Override
    public void run(String... args) {

        // Solo carga datos si la BD está vacía
        if (categoriaRepository.count() > 0) {
            System.out.println("── Datos ya existentes, omitiendo carga ──");
            return;
        }

        // Categorías
        Categoria cpu = categoriaRepository.save(new Categoria("CPU"));
        Categoria gpu = categoriaRepository.save(new Categoria("GPU"));
        Categoria ram = categoriaRepository.save(new Categoria("RAM"));
        Categoria ssd = categoriaRepository.save(new Categoria("SSD"));

        // Productos
        productoRepository.save(new Producto("AMD Ryzen 5 7600X",     "Procesador de escritorio", 399999,  "/img/cpu.jpg", 5,  cpu));
        productoRepository.save(new Producto("RTX 4070 ROG Strix",    "Placa de video Asus ROG",  1779999, "/img/gpu.jpg", 3,  gpu));
        productoRepository.save(new Producto("Corsair Vengeance DDR5", "Memoria RAM 16GB",         220000,  "/img/ram.jpg", 10, ram));
        productoRepository.save(new Producto("Samsung 990 Pro 1TB",   "SSD NVMe M.2",             180000,  "/img/ssd.jpg", 8,  ssd));

        // Usuario de prueba
        usuarioRepository.save(new Usuario("Gianluca", "gianluca@techlab.com"));

        System.out.println("── Datos de ejemplo cargados ──");
    }
}