"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { categorias, productos } from "@/lib/productos";

export default function InventarioPage() {
  const [categoria, setCategoria] = useState("Todos");

  const productosFiltrados =
    categoria === "Todos" ? productos : productos.filter((p) => p.categoria === categoria);

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

      <div className="mt-6">
        <CategoryFilter categorias={categorias} activa={categoria} onChange={setCategoria} />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productosFiltrados.map((p) => (
            <ProductCard key={p.nombre} producto={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
