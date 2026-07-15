import { estadoStyles, type Entrega } from "@/lib/entregas";

export default function DeliveryCard({
  entrega,
  onMarkDelivered,
}: {
  entrega: Entrega;
  onMarkDelivered?: () => void;
}) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entrega.direccion)}`;

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
      {entrega.observacion && (
        <p className="mt-3 rounded-lg bg-brand-pink/10 px-3 py-2 text-xs text-black/70">
          <span className="font-medium">Observación:</span> {entrega.observacion}
        </p>
      )}

      {onMarkDelivered && (
        <div className="mt-3 flex gap-2">
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-brand-gray/20 px-3 py-2 text-center text-xs font-medium text-black/70 hover:bg-brand-pink/10"
          >
            Cómo llegar
          </a>
          {entrega.estado !== "Entregada" && (
            <button
              type="button"
              onClick={onMarkDelivered}
              className="flex-1 rounded-lg bg-brand-pink px-3 py-2 text-xs font-medium text-white hover:bg-brand-pink/90"
            >
              Marcar como entregada
            </button>
          )}
        </div>
      )}
    </div>
  );
}
