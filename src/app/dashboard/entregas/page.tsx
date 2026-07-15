import Link from "next/link";
import { entregas, estadoDot, estadoStyles, type Entrega } from "@/lib/entregas";

export const dynamic = "force-dynamic";

export default function EntregasPage() {
  const hoy = new Date().toISOString().slice(0, 10);
  const entregasOrdenadas = [...entregas].sort((a, b) => a.fecha.localeCompare(b.fecha));

  const conteos = entregas.reduce(
    (acc, e) => {
      acc[e.estado] += 1;
      return acc;
    },
    { Programada: 0, "En ruta": 0, Entregada: 0 } as Record<Entrega["estado"], number>,
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-black">Entregas</h1>
          <p className="mt-1 text-sm text-black/50">
            Datos de ejemplo — la conexión a Supabase se agregará después.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/entregas/calendario"
            className="rounded-full bg-brand-gray px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-gray/90"
          >
            Ver en calendario
          </Link>
          <span className="rounded-full bg-brand-pink/20 px-3 py-1 text-xs font-medium text-black/70">
            Próximamente
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(Object.keys(conteos) as Entrega["estado"][]).map((estado) => (
          <div key={estado} className="rounded-xl border border-brand-gray/20 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${estadoDot[estado]}`} />
              <p className="text-sm text-black/50">{estado}</p>
            </div>
            <p className="mt-1 text-2xl font-semibold text-black">{conteos[estado]}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-brand-pink/10 text-black/60">
              <tr>
                <th className="px-4 py-3 font-medium">Cliente</th>
                <th className="px-4 py-3 font-medium">Producto</th>
                <th className="px-4 py-3 font-medium">Dirección</th>
                <th className="px-4 py-3 font-medium">Estado</th>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Observación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-gray/10">
              {entregasOrdenadas.map((e) => {
                const esHoy = e.fecha === hoy;

                return (
                  <tr key={`${e.cliente}-${e.producto}`} className={esHoy ? "bg-brand-pink/5" : undefined}>
                    <td className="px-4 py-3 text-black">{e.cliente}</td>
                    <td className="px-4 py-3 text-black/70">{e.producto}</td>
                    <td className="px-4 py-3 text-black/70">{e.direccion}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${estadoStyles[e.estado]}`}
                      >
                        {e.estado}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black/70">
                      {e.fecha}
                      {esHoy && (
                        <span className="ml-2 rounded-full bg-brand-pink/20 px-2 py-0.5 text-xs font-medium text-black/70">
                          Hoy
                        </span>
                      )}
                    </td>
                    <td className="max-w-[220px] truncate px-4 py-3 text-black/50" title={e.observacion}>
                      {e.observacion ?? "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
