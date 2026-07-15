import ProductImagePlaceholder from "./ProductImagePlaceholder";

export type Producto = {
  nombre: string;
  categoria: string;
  stock: number;
  precio: string;
};

export default function ProductCard({ producto }: { producto: Producto }) {
  const stockBajo = producto.stock <= 5;

  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <ProductImagePlaceholder />
      <div className="p-4">
        <span className="text-xs font-medium text-brand-pink">{producto.categoria}</span>
        <h3 className="mt-1 text-sm font-semibold text-black">{producto.nombre}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-black/70">{producto.precio}</span>
          <span className={stockBajo ? "text-xs font-medium text-red-600" : "text-xs font-medium text-black/50"}>
            {stockBajo ? `Stock bajo (${producto.stock})` : `Stock: ${producto.stock}`}
          </span>
        </div>
      </div>
    </div>
  );
}
