import type { MovimientoStock } from "@/lib/productos";

export default function StockHistory({ movimientos }: { movimientos: MovimientoStock[] }) {
  if (movimientos.length === 0) {
    return <p className="text-sm text-black/40">Todavía no hay movimientos registrados para este producto.</p>;
  }

  return (
    <ul className="max-h-80 space-y-2 overflow-y-auto">
      {movimientos.map((m) => (
        <li
          key={m.id}
          className="flex items-center justify-between rounded-lg border border-brand-gray/15 px-3 py-2 text-sm"
        >
          <span className={m.tipo === "entrada" ? "font-medium text-green-700" : "font-medium text-red-600"}>
            {m.tipo === "entrada" ? "+" : "−"}
            {m.cantidad}
          </span>
          <span className="text-black/60">{m.tipo === "entrada" ? "Entrada" : "Salida"}</span>
          <span className="text-black/40">{m.fecha}</span>
        </li>
      ))}
    </ul>
  );
}
