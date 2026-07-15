const entregas = [
  { cliente: "María Fernanda Ortiz", producto: "Sofá Milán 3 puestos", estado: "En ruta", fecha: "2026-07-16" },
  { cliente: "Carlos Andrés Peña", producto: "Mesa de comedor Roble", estado: "Programada", fecha: "2026-07-18" },
  { cliente: "Laura Gómez", producto: "Cama Nórdica Queen", estado: "Entregada", fecha: "2026-07-10" },
];

const estadoStyles: Record<string, string> = {
  "En ruta": "bg-blue-100 text-blue-800",
  Programada: "bg-brand-pink/25 text-black/70",
  Entregada: "bg-green-100 text-green-800",
};

export default function EntregasPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-black">Entregas</h1>
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
              <th className="px-4 py-3 font-medium">Cliente</th>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 font-medium">Fecha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray/10">
            {entregas.map((e) => (
              <tr key={`${e.cliente}-${e.producto}`}>
                <td className="px-4 py-3 text-black">{e.cliente}</td>
                <td className="px-4 py-3 text-black/70">{e.producto}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${estadoStyles[e.estado]}`}
                  >
                    {e.estado}
                  </span>
                </td>
                <td className="px-4 py-3 text-black/70">{e.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
