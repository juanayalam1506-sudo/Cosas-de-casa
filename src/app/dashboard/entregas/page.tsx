"use client";

import { useMemo, useState } from "react";
import DeliveryCalendar from "@/components/DeliveryCalendar";
import { entregas, estadoStyles, franjas, formatearHora, obtenerFranja } from "@/lib/entregas";

export default function EntregasPage() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string | null>(null);

  const entregasFiltradas = useMemo(() => {
    const base = fechaSeleccionada ? entregas.filter((e) => e.fecha === fechaSeleccionada) : entregas;
    return [...base].sort((a, b) => (a.fecha === b.fecha ? a.hora.localeCompare(b.hora) : a.fecha.localeCompare(b.fecha)));
  }, [fechaSeleccionada]);

  const entregasPorFranja = useMemo(() => {
    if (!fechaSeleccionada) return null;
    const delDia = entregas.filter((e) => e.fecha === fechaSeleccionada);
    return {
      mañana: delDia.filter((e) => obtenerFranja(e.hora) === "mañana").length,
      tarde: delDia.filter((e) => obtenerFranja(e.hora) === "tarde").length,
    };
  }, [fechaSeleccionada]);

  return (
    <div>
      <h1 className="text-xl font-semibold text-black">Entregas</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        <DeliveryCalendar
          entregas={entregas}
          fechaSeleccionada={fechaSeleccionada}
          onSelectFecha={setFechaSeleccionada}
        />

        <div>
          {fechaSeleccionada && entregasPorFranja && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-4 text-sm text-black/60">
                <span>
                  {franjas.mañana.label} ({formatearHora(franjas.mañana.inicio)} – {formatearHora(franjas.mañana.fin)}):{" "}
                  {entregasPorFranja.mañana}
                </span>
                <span>
                  {franjas.tarde.label} ({formatearHora(franjas.tarde.inicio)} – {formatearHora(franjas.tarde.fin)}):{" "}
                  {entregasPorFranja.tarde}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setFechaSeleccionada(null)}
                className="text-sm font-medium text-brand-pink hover:underline"
              >
                Ver todas
              </button>
            </div>
          )}

          <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-pink/10 text-black/60">
                <tr>
                  <th className="px-4 py-3 font-medium">Cliente</th>
                  <th className="px-4 py-3 font-medium">Producto</th>
                  <th className="px-4 py-3 font-medium">Estado</th>
                  <th className="px-4 py-3 font-medium">Fecha</th>
                  <th className="px-4 py-3 font-medium">Hora</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray/10">
                {entregasFiltradas.map((e) => (
                  <tr key={e.id}>
                    <td className="px-4 py-3 text-black">{e.cliente}</td>
                    <td className="px-4 py-3 text-black/70">{e.producto}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${estadoStyles[e.estado]}`}>
                        {e.estado}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black/70">{e.fecha}</td>
                    <td className="px-4 py-3 text-black/70">{formatearHora(e.hora)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
