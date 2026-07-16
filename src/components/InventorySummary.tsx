import { parsePrecio, type Producto } from "@/lib/productos";

export default function InventorySummary({ productos }: { productos: Producto[] }) {
  const totalObjetos = productos.length;
  const valorTotal = productos.reduce((acc, p) => acc + p.stock * parsePrecio(p.precio), 0);
  const stockBajo = productos.filter((p) => p.stock <= 5).length;

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-brand-gray/20 bg-white p-4 shadow-sm">
        <p className="text-sm text-black/50">Objetos en inventario</p>
        <p className="mt-1 text-2xl font-semibold text-black">{totalObjetos}</p>
      </div>
      <div className="rounded-xl border border-brand-gray/20 bg-white p-4 shadow-sm">
        <p className="text-sm text-black/50">Valor total de inventario</p>
        <p className="mt-1 text-2xl font-semibold text-black">${valorTotal.toLocaleString("es-CO")}</p>
      </div>
      <div className="rounded-xl border border-brand-gray/20 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <p className="text-sm text-black/50">Stock bajo</p>
        </div>
        <p className="mt-1 text-2xl font-semibold text-black">{stockBajo}</p>
      </div>
    </div>
  );
}
