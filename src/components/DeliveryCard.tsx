import { estadoStyles, type Entrega } from "@/lib/entregas";

export default function DeliveryCard({ entrega }: { entrega: Entrega }) {
  return (
    <div className="rounded-xl border border-brand-gray/20 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-black">{entrega.producto}</h3>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${estadoStyles[entrega.estado]}`}>
          {entrega.estado}
        </span>
      </div>
      <p className="mt-1 text-sm text-black/70">{entrega.cliente}</p>
      <p className="mt-2 text-xs text-black/50">{entrega.direccion}</p>
      <p className="mt-1 text-xs text-black/40">{entrega.fecha}</p>
    </div>
  );
}
