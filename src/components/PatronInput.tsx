"use client";

import { fileToDataUrl } from "@/lib/files";
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

  const subirFoto = async (i: number, file: File | undefined) => {
    if (!file) return;
    actualizar(i, { ...valores[i], foto: await fileToDataUrl(file) });
  };

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
            <div className="relative h-8 w-8 shrink-0">
              <label
                title="Foto de referencia"
                className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded border border-dashed border-brand-gray/40 hover:border-brand-pink hover:text-brand-pink"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => subirFoto(i, e.target.files?.[0])}
                  className="hidden"
                />
                {v.foto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={v.foto} alt={v.nombre || "Foto de referencia"} className="h-full w-full object-cover" />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-black/30"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                )}
              </label>
              {v.foto && (
                <button
                  type="button"
                  onClick={() => actualizar(i, { ...v, foto: undefined })}
                  aria-label="Quitar foto"
                  className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black/60 text-[8px] text-white hover:bg-red-600"
                >
                  ✕
                </button>
              )}
            </div>
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
