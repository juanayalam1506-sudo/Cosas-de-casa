import { entregas, estadoStyles } from "@/lib/entregas";

export default function EntregasPage() {
  const entregasOrdenadas = [...entregas].sort((a, b) => a.fecha.localeCompare(b.fecha));

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
            {entregasOrdenadas.map((e) => (
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
