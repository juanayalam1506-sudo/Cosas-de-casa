"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { categorias, productos, subcategoriasPorCategoria } from "@/lib/productos";

export default function InventarioPage() {
  const [categoria, setCategoria] = useState("Todos");
  const [subcategoria, setSubcategoria] = useState("Todas");

  const subcategoriasDisponibles = subcategoriasPorCategoria[categoria];

  const handleCategoriaChange = (nuevaCategoria: string) => {
    setCategoria(nuevaCategoria);
    setSubcategoria("Todas");
  };

  const productosFiltrados = productos.filter((p) => {
    if (categoria !== "Todos" && p.categoria !== categoria) return false;
    if (subcategoriasDisponibles && subcategoria !== "Todas" && p.subcategoria !== subcategoria) return false;
    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-black">Inventario</h1>
          <p className="mt-1 text-sm text-black/50">
            Stock de lo que se vende regularmente. Datos de ejemplo — la conexión a Supabase se
            agregará después.
          </p>
        </div>
        <span className="rounded-full bg-brand-pink/20 px-3 py-1 text-xs font-medium text-black/70">
          Próximamente
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <CategoryFilter categorias={categorias} activa={categoria} onChange={handleCategoriaChange} />
        {subcategoriasDisponibles && (
          <CategoryFilter
            categorias={["Todas", ...subcategoriasDisponibles]}
            activa={subcategoria}
            onChange={setSubcategoria}
          />
        )}

        <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productosFiltrados.map((p) => (
            <ProductCard key={p.nombre} producto={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
