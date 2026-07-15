import ProductImagePlaceholder from "./ProductImagePlaceholder";
import type { Producto } from "@/lib/productos";

export default function CollectionItemCard({ producto }: { producto: Producto }) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <ProductImagePlaceholder />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-brand-pink">
            {producto.subcategoria ? `${producto.categoria} · ${producto.subcategoria}` : producto.categoria}
          </span>
          <span className="text-xs text-black/40">{producto.coleccion}</span>
        </div>
        <h3 className="mt-1 text-sm font-semibold text-black">{producto.nombre}</h3>
        <p className="mt-2 text-sm text-black/70">{producto.precio}</p>
      </div>
    </div>
  );
}
