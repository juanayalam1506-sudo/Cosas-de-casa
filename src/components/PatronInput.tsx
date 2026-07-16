"use client";

import type { PatronVariante, TipoPatron } from "@/lib/productos";

const tipos: TipoPatron[] = ["rayas", "cuadros", "lunares"];

export default function PatronInput({
  valores,
  onChange,
}: {
  valores: PatronVariante[];
  onChange: (valores: PatronVariante[]) => void;
}) {
  const actualizar = (i: number, patron: PatronVariante) => {
    onChange(valores.map((v, idx) => (idx === i ? patron : v)));
  };

  const agregar = () =>
    onChange([...valores, { nombre: "", tipo: "rayas", colores: ["#C8A46E", "#F2ECE1"] }]);
  const quitar = (i: number) => onChange(valores.filter((_, idx) => idx !== i));

  return (
    <div>
      <p className="mb-1 text-sm font-medium text-black/70">Diseños</p>
      <div className="space-y-2">
        {valores.map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="color"
              value={v.colores[0]}
              onChange={(e) => actualizar(i, { ...v, colores: [e.target.value, v.colores[1]] })}
              className="h-8 w-8 shrink-0 cursor-pointer rounded border border-brand-gray/30"
            />
            <input
              type="color"
              value={v.colores[1]}
              onChange={(e) => actualizar(i, { ...v, colores: [v.colores[0], e.target.value] })}
              className="h-8 w-8 shrink-0 cursor-pointer rounded border border-brand-gray/30"
            />
            <select
              value={v.tipo}
              onChange={(e) => actualizar(i, { ...v, tipo: e.target.value as TipoPatron })}
              className="rounded-lg border border-brand-gray/30 px-2 py-1.5 text-sm text-black focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
            >
              {tipos.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <input
              value={v.nombre}
              onChange={(e) => actualizar(i, { ...v, nombre: e.target.value })}
              placeholder="Ej. Bohemio"
              className="flex-1 rounded-lg border border-brand-gray/30 px-3 py-1.5 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
            />
            <button
              type="button"
              onClick={() => quitar(i)}
              aria-label="Quitar diseño"
              className="text-black/40 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={agregar} className="mt-2 text-xs font-medium text-brand-pink hover:underline">
        + Agregar diseño
      </button>
    </div>
  );
}
