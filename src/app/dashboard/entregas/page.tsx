const entregas = [
  { cliente: "María Fernanda Ortiz", producto: "Sofá Milán 3 puestos", estado: "En ruta", fecha: "2026-07-16" },
  { cliente: "Carlos Andrés Peña", producto: "Mesa de comedor Roble", estado: "Programada", fecha: "2026-07-18" },
  { cliente: "Laura Gómez", producto: "Cama Nórdica Queen", estado: "Entregada", fecha: "2026-07-10" },
];

const estadoStyles: Record<string, string> = {
  "En ruta": "bg-blue-100 text-blue-800",
  Programada: "bg-amber-100 text-amber-800",
  Entregada: "bg-green-100 text-green-800",
};

export default function EntregasPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-stone-900">Entregas</h1>
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
              <th className="px-4 py-3 font-medium">Cliente</th>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 font-medium">Fecha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {entregas.map((e) => (
              <tr key={`${e.cliente}-${e.producto}`}>
                <td className="px-4 py-3 text-stone-900">{e.cliente}</td>
                <td className="px-4 py-3 text-stone-600">{e.producto}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${estadoStyles[e.estado]}`}
                  >
                    {e.estado}
                  </span>
                </td>
                <td className="px-4 py-3 text-stone-600">{e.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
