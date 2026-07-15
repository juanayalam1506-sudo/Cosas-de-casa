"use client";

import { useMemo, useState } from "react";
import { capacidadPorFranja, type Entrega } from "@/lib/entregas";

const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const capacidadDia = capacidadPorFranja * 2;

function estadoColor(cantidad: number) {
  if (cantidad === 0) return "bg-white text-black/30 border-brand-gray/15";
  const ratio = cantidad / capacidadDia;
  if (ratio <= 0.5) return "bg-green-100 text-green-800 border-green-200";
  if (ratio < 1) return "bg-amber-100 text-amber-800 border-amber-200";
  return "bg-red-100 text-red-800 border-red-200";
}

function toKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function DeliveryCalendar({
  entregas,
  fechaSeleccionada,
  onSelectFecha,
}: {
  entregas: Entrega[];
  fechaSeleccionada: string | null;
  onSelectFecha: (fecha: string | null) => void;
}) {
  const [mesActual, setMesActual] = useState(() => {
    const hoy = new Date();
    return new Date(hoy.getFullYear(), hoy.getMonth(), 1);
  });

  const conteoPorDia = useMemo(() => {
    const mapa = new Map<string, number>();
    for (const e of entregas) {
      mapa.set(e.fecha, (mapa.get(e.fecha) ?? 0) + 1);
    }
    return mapa;
  }, [entregas]);

  const primerDiaSemana = (new Date(mesActual.getFullYear(), mesActual.getMonth(), 1).getDay() + 6) % 7;
  const diasEnMes = new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 0).getDate();

  const celdas: (Date | null)[] = [
    ...Array(primerDiaSemana).fill(null),
    ...Array.from({ length: diasEnMes }, (_, i) => new Date(mesActual.getFullYear(), mesActual.getMonth(), i + 1)),
  ];

  return (
    <div className="rounded-xl border border-brand-gray/20 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() - 1, 1))}
          aria-label="Mes anterior"
          className="rounded-lg px-2 py-1 text-sm text-black/50 hover:bg-black/5"
        >
          ‹
        </button>
        <p className="text-sm font-medium text-black">
          {meses[mesActual.getMonth()]} {mesActual.getFullYear()}
        </p>
        <button
          type="button"
          onClick={() => setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 1))}
          aria-label="Mes siguiente"
          className="rounded-lg px-2 py-1 text-sm text-black/50 hover:bg-black/5"
        >
          ›
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-black/40">
        {diasSemana.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {celdas.map((fecha, i) => {
          if (!fecha) return <div key={`vacio-${i}`} />;
          const key = toKey(fecha);
          const cantidad = conteoPorDia.get(key) ?? 0;
          const seleccionado = fechaSeleccionada === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelectFecha(seleccionado ? null : key)}
              className={`flex aspect-square flex-col items-center justify-center rounded-lg border text-xs font-medium transition-colors ${estadoColor(cantidad)} ${
                seleccionado ? "ring-2 ring-brand-pink" : ""
              }`}
            >
              <span>{fecha.getDate()}</span>
              {cantidad > 0 && <span className="text-[10px] opacity-70">{cantidad}</span>}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-black/50">
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full border border-green-200 bg-green-100" /> Disponible
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full border border-amber-200 bg-amber-100" /> Ocupado
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full border border-red-200 bg-red-100" /> Lleno
        </span>
      </div>
    </div>
  );
}
