import type { CSSProperties } from "react";
import type { PatronVariante } from "@/lib/productos";

function estiloPatron(patron: PatronVariante): CSSProperties {
  const [c1, c2] = patron.colores;

  switch (patron.tipo) {
    case "rayas":
      return {
        backgroundImage: `repeating-linear-gradient(45deg, ${c1}, ${c1} 3px, ${c2} 3px, ${c2} 6px)`,
      };
    case "lunares":
      return {
        backgroundColor: c1,
        backgroundImage: `radial-gradient(${c2} 28%, transparent 30%)`,
        backgroundSize: "6px 6px",
      };
    case "cuadros":
      return {
        backgroundColor: c1,
        backgroundImage: `linear-gradient(45deg, ${c2} 25%, transparent 25%, transparent 75%, ${c2} 75%), linear-gradient(45deg, ${c2} 25%, transparent 25%, transparent 75%, ${c2} 75%)`,
        backgroundSize: "6px 6px",
        backgroundPosition: "0 0, 3px 3px",
      };
  }
}

export default function PatternSwatches({ patrones }: { patrones?: PatronVariante[] }) {
  if (!patrones || patrones.length === 0) return <span className="text-xs text-black/30">—</span>;

  return (
    <div className="flex items-center gap-1">
      {patrones.map((p) =>
        p.foto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p.nombre}
            src={p.foto}
            alt={p.nombre}
            title={p.nombre}
            className="h-4 w-4 shrink-0 rounded-full border border-black/15 object-cover"
          />
        ) : (
          <span
            key={p.nombre}
            title={p.nombre}
            className="h-4 w-4 shrink-0 rounded-full border border-black/15"
            style={estiloPatron(p)}
          />
        ),
      )}
    </div>
  );
}
