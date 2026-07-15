const productos = [
  { nombre: "Sofá Milán 3 puestos", categoria: "Sala", stock: 12, precio: "$2.450.000" },
  { nombre: "Mesa de comedor Roble", categoria: "Comedor", stock: 4, precio: "$1.890.000" },
  { nombre: "Cama Nórdica Queen", categoria: "Alcoba", stock: 7, precio: "$1.320.000" },
  { nombre: "Silla Escandinava", categoria: "Comedor", stock: 25, precio: "$310.000" },
  { nombre: "Closet Modular 3 puertas", categoria: "Alcoba", stock: 2, precio: "$2.100.000" },
];

export default function InventarioPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-stone-900">Inventario</h1>
          <p className="mt-1 text-sm text-stone-500">
            Datos de ejemplo — la conexión a Supabase se agregará después.
          </p>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
          Próximamente
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-stone-500">
            <tr>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="px-4 py-3 font-medium">Categoría</th>
              <th className="px-4 py-3 font-medium">Stock actual</th>
              <th className="px-4 py-3 font-medium">Precio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {productos.map((p) => (
              <tr key={p.nombre}>
                <td className="px-4 py-3 text-stone-900">{p.nombre}</td>
                <td className="px-4 py-3 text-stone-600">{p.categoria}</td>
                <td className="px-4 py-3 text-stone-600">
                  <span
                    className={
                      p.stock <= 5
                        ? "font-medium text-red-600"
                        : "text-stone-600"
                    }
                  >
                    {p.stock}
                  </span>
                </td>
                <td className="px-4 py-3 text-stone-600">{p.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
