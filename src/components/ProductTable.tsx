import { coleccionStyles, type Producto } from "@/lib/productos";

export default function ProductTable({ productos }: { productos: Producto[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-brand-pink/10 text-black/60">
            <tr>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="px-4 py-3 font-medium">Categoría</th>
              <th className="px-4 py-3 font-medium">Colección</th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="px-4 py-3 font-medium">Precio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray/10">
            {productos.map((p) => {
              const stockBajo = p.stock <= 5;

              return (
                <tr key={p.nombre}>
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
                    <span className={stockBajo ? "font-medium text-red-600" : "text-black/70"}>{p.stock}</span>
                  </td>
                  <td className="px-4 py-3 text-black/70">{p.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
