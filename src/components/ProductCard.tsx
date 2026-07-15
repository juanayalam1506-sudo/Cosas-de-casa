import ProductImagePlaceholder from "./ProductImagePlaceholder";
import { coleccionStyles, estadoProductoStyles, type Producto } from "@/lib/productos";

function colorBarraStock(stock: number, objetivo: number) {
  if (stock <= 5) return "bg-red-500";
  if (stock / objetivo < 0.5) return "bg-amber-500";
  return "bg-green-500";
}

export default function ProductCard({
  producto,
  onAjustarStock,
  onVerHistorial,
}: {
  producto: Producto;
  onAjustarStock: (delta: number) => void;
  onVerHistorial: () => void;
}) {
  const stockBajo = producto.stock <= 5;
  const objetivo = producto.stockObjetivo ?? 20;
  const porcentaje = Math.min(100, Math.round((producto.stock / objetivo) * 100));
  const estado = producto.estado ?? "Activo";

  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <ProductImagePlaceholder coleccion={producto.coleccion} />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-brand-pink">
            {producto.subcategoria ? `${producto.categoria} · ${producto.subcategoria}` : producto.categoria}
          </span>
          <div className="flex items-center gap-1">
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${estadoProductoStyles[estado]}`}>
              {estado}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                coleccionStyles[producto.coleccion] ?? "bg-brand-gray/15 text-black/70"
              }`}
            >
              {producto.coleccion}
            </span>
          </div>
        </div>
        <h3 className="mt-1 text-sm font-semibold text-black">{producto.nombre}</h3>
        <p className="text-xs text-black/40">{producto.codigo}</p>
        {producto.proveedor && <p className="mt-1 text-xs text-black/50">Proveedor: {producto.proveedor}</p>}

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-black/70">{producto.precio}</span>
          <span className={stockBajo ? "text-xs font-medium text-red-600" : "text-xs font-medium text-black/50"}>
            {stockBajo ? `Stock bajo (${producto.stock})` : `Stock: ${producto.stock}`}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
          <div
            className={`h-full rounded-full ${colorBarraStock(producto.stock, objetivo)}`}
            style={{ width: `${porcentaje}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onAjustarStock(-1)}
              disabled={producto.stock <= 0}
              aria-label="Restar stock"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-brand-gray/30 text-black/60 hover:bg-brand-pink/10 disabled:opacity-40"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-medium text-black">{producto.stock}</span>
            <button
              type="button"
              onClick={() => onAjustarStock(1)}
              aria-label="Sumar stock"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-brand-gray/30 text-black/60 hover:bg-brand-pink/10"
            >
              +
            </button>
          </div>
          <button type="button" onClick={onVerHistorial} className="text-xs font-medium text-brand-pink hover:underline">
            Ver historial
          </button>
        </div>
      </div>
    </div>
  );
}
