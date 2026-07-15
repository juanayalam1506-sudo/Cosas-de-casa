"use client";

import { useState } from "react";
import { categorias, subcategoriasPorCategoria, type PiezaCatalogo } from "@/lib/productos";

const categoriasSeleccionables = categorias.filter((c) => c !== "Todos");

export default function NewCatalogItemForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (pieza: Omit<PiezaCatalogo, "id">) => void;
  onCancel: () => void;
}) {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState(categoriasSeleccionables[0]);
  const [subcategoria, setSubcategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [desde, setDesde] = useState("");

  const subcategoriasDisponibles = subcategoriasPorCategoria[categoria];

  const handleCategoriaChange = (nuevaCategoria: string) => {
    setCategoria(nuevaCategoria);
    setSubcategoria("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !desde.trim()) return;
    onSubmit({
      nombre: nombre.trim(),
      categoria,
      subcategoria: subcategoria || undefined,
      descripcion: descripcion.trim(),
      desde: desde.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-black/70">
          Nombre
        </label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Mecedora a medida"
          required
          className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        />
      </div>

      <div>
        <label htmlFor="categoria" className="mb-1 block text-sm font-medium text-black/70">
          Categoría
        </label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => handleCategoriaChange(e.target.value)}
          className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        >
          {categoriasSeleccionables.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {subcategoriasDisponibles && (
        <div>
          <label htmlFor="subcategoria" className="mb-1 block text-sm font-medium text-black/70">
            Subcategoría
          </label>
          <select
            id="subcategoria"
            value={subcategoria}
            onChange={(e) => setSubcategoria(e.target.value)}
            className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
          >
            <option value="">Sin especificar</option>
            {subcategoriasDisponibles.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="descripcion" className="mb-1 block text-sm font-medium text-black/70">
          Descripción
        </label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows={3}
          placeholder="Qué se puede personalizar (materiales, tamaño, color...)"
          className="w-full resize-none rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        />
      </div>

      <div>
        <label htmlFor="desde" className="mb-1 block text-sm font-medium text-black/70">
          Precio desde
        </label>
        <input
          id="desde"
          value={desde}
          onChange={(e) => setDesde(e.target.value)}
          placeholder="$750.000"
          required
          className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2 text-sm font-medium text-black/60 hover:bg-black/5"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-lg bg-brand-pink px-4 py-2 text-sm font-medium text-white hover:bg-brand-pink/90"
        >
          Agregar
        </button>
      </div>
    </form>
  );
}
