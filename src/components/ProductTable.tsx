import VariantesDisplay from "./VariantesDisplay";
import { coleccionStyles, estadoProductoStyles, type Producto } from "@/lib/productos";

export default function ProductTable({
  productos,
  onAjustarStock,
  onVerHistorial,
}: {
  productos: Producto[];
  onAjustarStock: (producto: Producto, delta: number) => void;
  onVerHistorial: (producto: Producto) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-230 text-left text-sm">
          <thead className="bg-brand-pink/10 text-black/60">
            <tr>
              <th className="px-4 py-3 font-medium">Código</th>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="px-4 py-3 font-medium">Categoría</th>
              <th className="px-4 py-3 font-medium">Colección</th>
              <th className="px-4 py-3 font-medium">Colores</th>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="px-4 py-3 font-medium">Precio</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray/10">
            {productos.map((p) => {
              const stockBajo = p.stock <= 5;
              const estado = p.estado ?? "Activo";

              return (
                <tr key={p.codigo}>
                  <td className="px-4 py-3 text-black/50">{p.codigo}</td>
                  <td className="px-4 py-3 text-black">{p.nombre}</td>
                  <td className="px-4 py-3 text-black/70">
                    {p.subcategoria ? `${p.categoria} · ${p.subcategoria}` : p.categoria}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        coleccionStyles[p.coleccion] ?? "bg-brand-gray/15 text-black/70"
                      }`}
                    >
                      {p.coleccion}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <VariantesDisplay producto={p} />
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${estadoProductoStyles[estado]}`}>
                      {estado}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => onAjustarStock(p, -1)}
                        disabled={p.stock <= 0}
                        aria-label="Restar stock"
                        className="flex h-6 w-6 items-center justify-center rounded-md border border-brand-gray/30 text-black/60 hover:bg-brand-pink/10 disabled:opacity-40"
                      >
                        −
                      </button>
                      <span className={`w-6 text-center font-medium ${stockBajo ? "text-red-600" : "text-black/70"}`}>
                        {p.stock}
                      </span>
                      <button
                        type="button"
                        onClick={() => onAjustarStock(p, 1)}
                        aria-label="Sumar stock"
                        className="flex h-6 w-6 items-center justify-center rounded-md border border-brand-gray/30 text-black/60 hover:bg-brand-pink/10"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-black/70">{p.precio}</td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => onVerHistorial(p)}
                      className="text-xs font-medium text-brand-pink hover:underline"
                    >
                      Historial
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
