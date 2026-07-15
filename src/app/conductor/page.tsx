"use client";

import { useState } from "react";
import DeliveryCalendar from "@/components/DeliveryCalendar";
import DeliveryCard from "@/components/DeliveryCard";
import { entregas as todasLasEntregas, type Entrega } from "@/lib/entregas";

// Placeholder mientras no hay autenticación real: simula la sesión del conductor.
const CONDUCTOR_ACTUAL = "Andrés Ruiz";

export default function ConductorPage() {
  const [misEntregas, setMisEntregas] = useState<Entrega[]>(() =>
    todasLasEntregas.filter((e) => e.conductor === CONDUCTOR_ACTUAL),
  );
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string | null>(
    () => [...todasLasEntregas].sort((a, b) => a.fecha.localeCompare(b.fecha))[0]?.fecha ?? null,
  );

  const pendientes = misEntregas.filter((e) => e.estado !== "Entregada");
  const proximaEntrega = [...pendientes].sort((a, b) => a.fecha.localeCompare(b.fecha))[0] ?? null;
  const entregasDelDia = misEntregas.filter((e) => e.fecha === fechaSeleccionada);

  const marcarEntregada = (entrega: Entrega) => {
    setMisEntregas((prev) =>
      prev.map((e) =>
        e.cliente === entrega.cliente && e.producto === entrega.producto
          ? { ...e, estado: "Entregada" as const }
          : e,
      ),
    );
  };

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
          <div className="rounded-xl bg-brand-pink/10 px-4 py-2 text-sm font-medium text-black/70">
            {pendientes.length === 0
              ? "No tienes entregas pendientes"
              : `${pendientes.length} pendiente${pendientes.length === 1 ? "" : "s"}`}
          </div>

          {proximaEntrega && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/40">
                Próxima entrega
              </p>
              <DeliveryCard
                entrega={proximaEntrega}
                onMarkDelivered={() => marcarEntregada(proximaEntrega)}
              />
            </div>
          )}

          <DeliveryCalendar
            entregas={misEntregas}
            selectedFecha={fechaSeleccionada}
            onSelectDay={setFechaSeleccionada}
          />

          <div className="space-y-3">
            {entregasDelDia.length === 0 ? (
              <p className="text-sm text-black/40">Selecciona un día con entrega para ver el detalle.</p>
            ) : (
              entregasDelDia.map((e) => (
                <DeliveryCard
                  key={`${e.cliente}-${e.producto}`}
                  entrega={e}
                  onMarkDelivered={() => marcarEntregada(e)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
