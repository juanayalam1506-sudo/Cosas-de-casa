"use client";

import { useState } from "react";
import { categorias, colecciones, subcategoriasPorCategoria, type Producto } from "@/lib/productos";

const categoriasSeleccionables = categorias.filter((c) => c !== "Todos");
const coleccionesSeleccionables = colecciones.filter((c) => c !== "Todas");

export default function NewProductForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (producto: Producto) => void;
  onCancel: () => void;
}) {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState(categoriasSeleccionables[0]);
  const [subcategoria, setSubcategoria] = useState("");
  const [coleccion, setColeccion] = useState(coleccionesSeleccionables[0]);
  const [stock, setStock] = useState("");
  const [stockObjetivo, setStockObjetivo] = useState("");
  const [precio, setPrecio] = useState("");

  const subcategoriasDisponibles = subcategoriasPorCategoria[categoria];

  const handleCategoriaChange = (nuevaCategoria: string) => {
    setCategoria(nuevaCategoria);
    setSubcategoria("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigo.trim() || !nombre.trim() || !precio.trim() || !stock.trim()) return;

    onSubmit({
      codigo: codigo.trim(),
      nombre: nombre.trim(),
      categoria,
      subcategoria: subcategoria || undefined,
      coleccion,
      stock: Number(stock),
      stockObjetivo: stockObjetivo.trim() ? Number(stockObjetivo) : undefined,
      precio: precio.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="codigo" className="mb-1 block text-sm font-medium text-black/70">
          Código
        </label>
        <input
          id="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Ej. SOF-003"
          required
          className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        />
      </div>

      <div>
        <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-black/70">
          Nombre
        </label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Sofá Milán 3 puestos"
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
        <label htmlFor="coleccion" className="mb-1 block text-sm font-medium text-black/70">
          Colección
        </label>
        <select
          id="coleccion"
          value={coleccion}
          onChange={(e) => setColeccion(e.target.value)}
          className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
        >
          {coleccionesSeleccionables.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="stock" className="mb-1 block text-sm font-medium text-black/70">
            Stock actual
          </label>
          <input
            id="stock"
            type="number"
            min={0}
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="12"
            required
            className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
          />
        </div>
        <div>
          <label htmlFor="stockObjetivo" className="mb-1 block text-sm font-medium text-black/70">
            Stock objetivo
          </label>
          <input
            id="stockObjetivo"
            type="number"
            min={0}
            value={stockObjetivo}
            onChange={(e) => setStockObjetivo(e.target.value)}
            placeholder="20"
            className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
          />
        </div>
      </div>

      <div>
        <label htmlFor="precio" className="mb-1 block text-sm font-medium text-black/70">
          Precio
        </label>
        <input
          id="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="$1.500.000"
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
