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
          <h1 className="text-xl font-semibold text-black">Inventario</h1>
          <p className="mt-1 text-sm text-black/50">
            Datos de ejemplo — la conexión a Supabase se agregará después.
          </p>
        </div>
        <span className="rounded-full bg-brand-pink/20 px-3 py-1 text-xs font-medium text-black/70">
          Próximamente
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-pink/10 text-black/60">
            <tr>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="px-4 py-3 font-medium">Categoría</th>
              <th className="px-4 py-3 font-medium">Stock actual</th>
              <th className="px-4 py-3 font-medium">Precio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray/10">
            {productos.map((p) => (
              <tr key={p.nombre}>
                <td className="px-4 py-3 text-black">{p.nombre}</td>
                <td className="px-4 py-3 text-black/70">{p.categoria}</td>
                <td className="px-4 py-3 text-black/70">
                  <span
                    className={
                      p.stock <= 5
                        ? "font-medium text-red-600"
                        : "text-black/70"
                    }
                  >
                    {p.stock}
                  </span>
                </td>
                <td className="px-4 py-3 text-black/70">{p.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
