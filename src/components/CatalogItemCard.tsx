import ProductImagePlaceholder from "./ProductImagePlaceholder";
import type { PiezaCatalogo } from "@/lib/productos";

export default function CatalogItemCard({ pieza }: { pieza: PiezaCatalogo }) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <ProductImagePlaceholder />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-brand-pink">{pieza.categoria}</span>
          <span className="shrink-0 rounded-full bg-brand-gray/10 px-2 py-1 text-xs font-medium text-black/60">
            Personalizable
          </span>
        </div>
        <h3 className="mt-1 text-sm font-semibold text-black">{pieza.nombre}</h3>
        <p className="mt-1 text-sm text-black/60">{pieza.descripcion}</p>
        <p className="mt-2 text-sm font-medium text-black/70">Desde {pieza.desde}</p>
      </div>
    </div>
  );
}
