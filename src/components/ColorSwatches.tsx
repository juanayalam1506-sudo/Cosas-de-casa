import type { Variante } from "@/lib/productos";

export default function ColorSwatches({ variantes }: { variantes?: Variante[] }) {
  if (!variantes || variantes.length === 0) return <span className="text-xs text-black/30">—</span>;

  return (
    <div className="flex items-center gap-1">
      {variantes.map((v) => (
        <span
          key={v.nombre}
          title={v.nombre}
          className="h-4 w-4 shrink-0 rounded-full border border-black/15"
          style={{ backgroundColor: v.color }}
        />
      ))}
    </div>
  );
}
