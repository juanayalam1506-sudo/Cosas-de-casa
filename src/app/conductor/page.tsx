"use client";

import { useState } from "react";
import DeliveryCalendar from "@/components/DeliveryCalendar";
import DeliveryCard from "@/components/DeliveryCard";
import { entregas } from "@/lib/entregas";

// Placeholder mientras no hay autenticación real: simula la sesión del conductor.
const CONDUCTOR_ACTUAL = "Andrés Ruiz";

export default function ConductorPage() {
  const misEntregas = entregas.filter((e) => e.conductor === CONDUCTOR_ACTUAL);
  const primeraFecha = [...misEntregas].sort((a, b) => a.fecha.localeCompare(b.fecha))[0]?.fecha ?? null;
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string | null>(primeraFecha);

  const entregasDelDia = misEntregas.filter((e) => e.fecha === fechaSeleccionada);

  return (
    <div>
      <h1 className="text-xl font-semibold text-black">Mis entregas</h1>
      <p className="mt-1 text-sm text-black/50">
        {CONDUCTOR_ACTUAL} · datos de ejemplo, sin conectar a Supabase todavía.
      </p>

      {misEntregas.length === 0 ? (
        <p className="pt-6 text-sm text-black/40">No tienes entregas asignadas.</p>
      ) : (
        <div className="mt-4 space-y-4">
          <DeliveryCalendar
            entregas={misEntregas}
            selectedFecha={fechaSeleccionada}
            onSelectDay={setFechaSeleccionada}
          />

          <div className="space-y-3">
            {entregasDelDia.length === 0 ? (
              <p className="text-sm text-black/40">Selecciona un día con entrega para ver el detalle.</p>
            ) : (
              entregasDelDia.map((e) => <DeliveryCard key={`${e.cliente}-${e.producto}`} entrega={e} />)
            )}
          </div>
        </div>
      )}
    </div>
  );
}
