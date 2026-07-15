"use client";

import { useState } from "react";
import Link from "next/link";
import DeliveryCalendar from "@/components/DeliveryCalendar";
import DeliveryCard from "@/components/DeliveryCard";
import { entregas } from "@/lib/entregas";

export default function EntregasCalendarioPage() {
  const primeraFecha = [...entregas].sort((a, b) => a.fecha.localeCompare(b.fecha))[0]?.fecha ?? null;
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string | null>(primeraFecha);

  const entregasDelDia = entregas.filter((e) => e.fecha === fechaSeleccionada);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-black">Calendario de entregas</h1>
          <p className="mt-1 text-sm text-black/50">
            Datos de ejemplo — la conexión a Supabase se agregará después.
          </p>
        </div>
        <Link
          href="/dashboard/entregas"
          className="rounded-full bg-brand-pink/20 px-3 py-1.5 text-xs font-medium text-black/70 hover:bg-brand-pink/30"
        >
          Ver tabla
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        <DeliveryCalendar
          entregas={entregas}
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
    </div>
  );
}
