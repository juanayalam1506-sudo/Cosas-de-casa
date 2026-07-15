"use client";

import { useState } from "react";
import type { Entrega } from "@/lib/entregas";

const DIAS_SEMANA = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function parseFecha(fecha: string) {
  const [year, month, day] = fecha.split("-").map(Number);
  return { year, month, day };
}

export default function DeliveryCalendar({
  entregas,
  selectedFecha,
  onSelectDay,
}: {
  entregas: Entrega[];
  selectedFecha: string | null;
  onSelectDay: (fecha: string) => void;
}) {
  const hoy = new Date().toISOString().slice(0, 10);
  const fechaInicial = entregas[0]?.fecha ?? hoy;
  const inicial = parseFecha(fechaInicial);
  const [vista, setVista] = useState({ year: inicial.year, month: inicial.month });

  const entregasPorDia = new Map<string, Entrega[]>();
  for (const e of entregas) {
    const lista = entregasPorDia.get(e.fecha) ?? [];
    lista.push(e);
    entregasPorDia.set(e.fecha, lista);
  }

  const primerDiaMes = new Date(vista.year, vista.month - 1, 1);
  const diasEnMes = new Date(vista.year, vista.month, 0).getDate();
  const inicioSemana = primerDiaMes.getDay();
  const nombreMes = primerDiaMes.toLocaleDateString("es-CO", { month: "long", year: "numeric" });

  const celdas: (number | null)[] = [
    ...Array(inicioSemana).fill(null),
    ...Array.from({ length: diasEnMes }, (_, i) => i + 1),
  ];

  const cambiarMes = (delta: number) => {
    const fecha = new Date(vista.year, vista.month - 1 + delta, 1);
    setVista({ year: fecha.getFullYear(), month: fecha.getMonth() + 1 });
  };

  return (
    <div className="rounded-xl border border-brand-gray/20 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => cambiarMes(-1)}
          className="rounded-lg px-2 py-1 text-sm text-black/50 hover:bg-brand-pink/10"
          aria-label="Mes anterior"
        >
          ‹
        </button>
        <p className="text-sm font-semibold capitalize text-black">{nombreMes}</p>
        <button
          type="button"
          onClick={() => cambiarMes(1)}
          className="rounded-lg px-2 py-1 text-sm text-black/50 hover:bg-brand-pink/10"
          aria-label="Mes siguiente"
        >
          ›
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 text-center text-xs text-black/40">
        {DIAS_SEMANA.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {celdas.map((dia, i) => {
          if (dia === null) return <div key={`vacio-${i}`} />;

          const fecha = `${vista.year}-${String(vista.month).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
          const tieneEntrega = entregasPorDia.has(fecha);
          const seleccionado = fecha === selectedFecha;
          const esHoy = fecha === hoy;

          return (
            <button
              key={fecha}
              type="button"
              onClick={() => onSelectDay(fecha)}
              disabled={!tieneEntrega}
              className={`rounded-lg py-2 text-sm ${
                seleccionado
                  ? "bg-brand-pink font-semibold text-white"
                  : tieneEntrega
                    ? "bg-brand-pink/15 font-medium text-black hover:bg-brand-pink/25"
                    : "text-black/30"
              } ${esHoy ? "ring-2 ring-inset ring-brand-gray" : ""}`}
            >
              {dia}
            </button>
          );
        })}
      </div>
    </div>
  );
}
