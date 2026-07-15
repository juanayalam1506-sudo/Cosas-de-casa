import ProductImagePlaceholder from "./ProductImagePlaceholder";
import { coleccionStyles, type Producto } from "@/lib/productos";

function colorBarraStock(stock: number, objetivo: number) {
  if (stock <= 5) return "bg-red-500";
  if (stock / objetivo < 0.5) return "bg-amber-500";
  return "bg-green-500";
}

export default function ProductCard({ producto }: { producto: Producto }) {
  const stockBajo = producto.stock <= 5;
  const objetivo = producto.stockObjetivo ?? 20;
  const porcentaje = Math.min(100, Math.round((producto.stock / objetivo) * 100));

  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <ProductImagePlaceholder coleccion={producto.coleccion} />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-brand-pink">
            {producto.subcategoria ? `${producto.categoria} · ${producto.subcategoria}` : producto.categoria}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
              coleccionStyles[producto.coleccion] ?? "bg-brand-gray/15 text-black/70"
            }`}
          >
            {producto.coleccion}
          </span>
        </div>
        <h3 className="mt-1 text-sm font-semibold text-black">{producto.nombre}</h3>
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
      </div>
    </div>
  );
}
