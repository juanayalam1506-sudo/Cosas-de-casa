"use client";

import { useState } from "react";
import CollectionItemCard from "@/components/CollectionItemCard";
import CatalogItemCard from "@/components/CatalogItemCard";
import CategoryFilter from "@/components/CategoryFilter";
import Modal from "@/components/Modal";
import NewCatalogItemForm from "@/components/NewCatalogItemForm";
import {
  colecciones,
  productos,
  piezasCatalogo as piezasCatalogoIniciales,
  type PiezaCatalogo,
} from "@/lib/productos";

export default function CatalogoPage() {
  const [tab, setTab] = useState<"colecciones" | "personalizable">("colecciones");
  const [coleccionActiva, setColeccionActiva] = useState("Todas");
  const [piezasCatalogo, setPiezasCatalogo] = useState(piezasCatalogoIniciales);
  const [formAbierto, setFormAbierto] = useState(false);

  const productosFiltrados =
    coleccionActiva === "Todas"
      ? productos
      : productos.filter((p) => p.coleccion === coleccionActiva);

  const agregarPieza = (pieza: Omit<PiezaCatalogo, "id">) => {
    setPiezasCatalogo((actual) => [...actual, { ...pieza, id: crypto.randomUUID() }]);
    setFormAbierto(false);
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-black">Catálogo</h1>
        <p className="mt-1 text-sm text-black/50">
          Lo que se le muestra al cliente: colecciones y opciones personalizables.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-b border-brand-gray/15">
        <div className="flex gap-6">
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

        {tab === "personalizable" && (
          <button
            type="button"
            onClick={() => setFormAbierto(true)}
            className="mb-3 rounded-lg bg-brand-pink px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-pink/90"
          >
            + Nueva pieza
          </button>
        )}
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
            <CatalogItemCard key={pieza.id} pieza={pieza} />
          ))}
        </div>
      )}

      <Modal open={formAbierto} onClose={() => setFormAbierto(false)} title="Nueva pieza personalizada">
        <NewCatalogItemForm onSubmit={agregarPieza} onCancel={() => setFormAbierto(false)} />
      </Modal>
    </div>
  );
}
