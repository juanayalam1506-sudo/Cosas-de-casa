"use client";

import type { Variante } from "@/lib/productos";

export default function VarianteColorInput({
  etiqueta,
  valores,
  onChange,
}: {
  etiqueta: string;
  valores: Variante[];
  onChange: (valores: Variante[]) => void;
}) {
  const actualizar = (i: number, campo: keyof Variante, valor: string) => {
    onChange(valores.map((v, idx) => (idx === i ? { ...v, [campo]: valor } : v)));
  };

  const agregar = () => onChange([...valores, { nombre: "", color: "#C8A46E" }]);
  const quitar = (i: number) => onChange(valores.filter((_, idx) => idx !== i));

  return (
    <div>
      <p className="mb-1 text-sm font-medium text-black/70">{etiqueta}</p>
      <div className="space-y-2">
        {valores.map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="color"
              value={v.color}
              onChange={(e) => actualizar(i, "color", e.target.value)}
              className="h-8 w-8 shrink-0 cursor-pointer rounded border border-brand-gray/30"
            />
            <input
              value={v.nombre}
              onChange={(e) => actualizar(i, "nombre", e.target.value)}
              placeholder="Ej. Roble"
              className="flex-1 rounded-lg border border-brand-gray/30 px-3 py-1.5 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
            />
            <button
              type="button"
              onClick={() => quitar(i)}
              aria-label="Quitar color"
              className="text-black/40 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={agregar} className="mt-2 text-xs font-medium text-brand-pink hover:underline">
        + Agregar color
      </button>
    </div>
  );
}
