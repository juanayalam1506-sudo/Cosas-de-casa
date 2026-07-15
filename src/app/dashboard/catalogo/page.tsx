"use client";

import { useState } from "react";
import CollectionItemCard from "@/components/CollectionItemCard";
import CatalogItemCard from "@/components/CatalogItemCard";
import CategoryFilter from "@/components/CategoryFilter";
import { colecciones, productos, piezasCatalogo } from "@/lib/productos";

export default function CatalogoPage() {
  const [tab, setTab] = useState<"colecciones" | "personalizable">("colecciones");
  const [coleccionActiva, setColeccionActiva] = useState("Todas");

  const productosFiltrados =
    coleccionActiva === "Todas"
      ? productos
      : productos.filter((p) => p.coleccion === coleccionActiva);

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-black">Catálogo</h1>
        <p className="mt-1 text-sm text-black/50">
          Lo que se le muestra al cliente: colecciones y opciones personalizables.
        </p>
      </div>

      <div className="mt-6 flex gap-6 border-b border-brand-gray/15">
        <button
          type="button"
          onClick={() => setTab("colecciones")}
          className={`border-b-2 pb-3 text-sm font-medium ${
            tab === "colecciones" ? "border-brand-pink text-black" : "border-transparent text-black/40"
          }`}
        >
          Colecciones
        </button>
        <button
          type="button"
          onClick={() => setTab("personalizable")}
          className={`border-b-2 pb-3 text-sm font-medium ${
            tab === "personalizable" ? "border-brand-pink text-black" : "border-transparent text-black/40"
          }`}
        >
          Personalizable
        </button>
      </div>

      {tab === "colecciones" ? (
        <div className="mt-6">
          <CategoryFilter categorias={colecciones} activa={coleccionActiva} onChange={setColeccionActiva} />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productosFiltrados.map((p) => (
              <CollectionItemCard key={p.nombre} producto={p} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {piezasCatalogo.map((pieza) => (
            <CatalogItemCard key={pieza.nombre} pieza={pieza} />
          ))}
        </div>
      )}
    </div>
  );
}
