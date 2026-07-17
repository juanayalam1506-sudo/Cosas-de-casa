import SwatchPreview from "./SwatchPreview";
import type { Variante } from "@/lib/productos";

export default function ColorSwatches({ variantes }: { variantes?: Variante[] }) {
  if (!variantes || variantes.length === 0) return <span className="text-xs text-black/30">—</span>;

  return (
    <div className="flex items-center gap-1">
      {variantes.map((v) => (
        <SwatchPreview
          key={v.nombre}
          nombre={v.nombre}
          swatch={
            v.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={v.foto} alt={v.nombre} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full" style={{ backgroundColor: v.color }} />
            )
          }
        >
          {v.foto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={v.foto}
              alt={v.nombre}
              className="h-4 w-4 shrink-0 cursor-default rounded-full border border-black/15 object-cover"
            />
          ) : (
            <span
              className="h-4 w-4 shrink-0 cursor-default rounded-full border border-black/15"
              style={{ backgroundColor: v.color }}
            />
          )}
        </SwatchPreview>
      ))}
    </div>
  );
}
