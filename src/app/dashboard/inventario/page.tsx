"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import InventorySummary from "@/components/InventorySummary";
import Modal from "@/components/Modal";
import NewProductForm from "@/components/NewProductForm";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import {
  categorias,
  parsePrecio,
  productos as productosIniciales,
  subcategoriasPorCategoria,
  type Producto,
} from "@/lib/productos";

type Orden = "nombre" | "precio-asc" | "precio-desc" | "stock-asc" | "stock-desc";

export default function InventarioPage() {
  const [productos, setProductos] = useState<Producto[]>(productosIniciales);
  const [categoria, setCategoria] = useState("Todos");
  const [subcategoria, setSubcategoria] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<Orden>("nombre");
  const [vista, setVista] = useState<"tarjetas" | "tabla">("tarjetas");
  const [formAbierto, setFormAbierto] = useState(false);

  const subcategoriasDisponibles = subcategoriasPorCategoria[categoria];

  const handleCategoriaChange = (nuevaCategoria: string) => {
    setCategoria(nuevaCategoria);
    setSubcategoria("Todas");
  };

  const productosFiltrados = useMemo(() => {
    const filtrados = productos.filter((p) => {
      if (categoria !== "Todos" && p.categoria !== categoria) return false;
      if (subcategoriasDisponibles && subcategoria !== "Todas" && p.subcategoria !== subcategoria) return false;
      if (busqueda.trim() && !p.nombre.toLowerCase().includes(busqueda.trim().toLowerCase())) return false;
      return true;
    });

    const ordenados = [...filtrados];
    switch (orden) {
      case "precio-asc":
        ordenados.sort((a, b) => parsePrecio(a.precio) - parsePrecio(b.precio));
        break;
      case "precio-desc":
        ordenados.sort((a, b) => parsePrecio(b.precio) - parsePrecio(a.precio));
        break;
      case "stock-asc":
        ordenados.sort((a, b) => a.stock - b.stock);
        break;
      case "stock-desc":
        ordenados.sort((a, b) => b.stock - a.stock);
        break;
      default:
        ordenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    return ordenados;
  }, [productos, categoria, subcategoria, subcategoriasDisponibles, busqueda, orden]);

  const agregarProducto = (producto: Producto) => {
    setProductos((actual) => [...actual, producto]);
    setFormAbierto(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-black">Inventario</h1>
          <p className="mt-1 text-sm text-black/50">
            Stock de lo que se vende regularmente. Todavía sin conectar a Supabase.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setFormAbierto(true)}
          className="rounded-lg bg-brand-pink px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-pink/90"
        >
          + Agregar producto
        </button>
      </div>

      <InventorySummary productos={productos} />

      <div className="mt-6 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full max-w-xs rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
          />

          <div className="flex items-center gap-2">
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value as Orden)}
              className="rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
            >
              <option value="nombre">Nombre (A-Z)</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="stock-asc">Stock: menor a mayor</option>
              <option value="stock-desc">Stock: mayor a menor</option>
            </select>

            <div className="flex rounded-lg border border-brand-gray/30 p-0.5">
              <button
                type="button"
                onClick={() => setVista("tarjetas")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  vista === "tarjetas" ? "bg-brand-gray text-white" : "text-black/60 hover:bg-brand-pink/10"
                }`}
              >
                Tarjetas
              </button>
              <button
                type="button"
                onClick={() => setVista("tabla")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  vista === "tabla" ? "bg-brand-gray text-white" : "text-black/60 hover:bg-brand-pink/10"
                }`}
              >
                Tabla
              </button>
            </div>
          </div>
        </div>

        <CategoryFilter categorias={categorias} activa={categoria} onChange={handleCategoriaChange} />
        {subcategoriasDisponibles && (
          <CategoryFilter
            categorias={["Todas", ...subcategoriasDisponibles]}
            activa={subcategoria}
            onChange={setSubcategoria}
          />
        )}

        {productosFiltrados.length === 0 ? (
          <p className="pt-6 text-sm text-black/40">Ningún producto coincide con la búsqueda o el filtro.</p>
        ) : vista === "tarjetas" ? (
          <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productosFiltrados.map((p) => (
              <ProductCard key={p.nombre} producto={p} />
            ))}
          </div>
        ) : (
          <div className="pt-3">
            <ProductTable productos={productosFiltrados} />
          </div>
        )}
      </div>

      <Modal open={formAbierto} onClose={() => setFormAbierto(false)} title="Agregar producto">
        <NewProductForm onSubmit={agregarProducto} onCancel={() => setFormAbierto(false)} />
      </Modal>
    </div>
  );
}
