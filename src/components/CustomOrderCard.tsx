import ProductImagePlaceholder from "./ProductImagePlaceholder";

export type PedidoPersonalizado = {
  cliente: string;
  descripcion: string;
  estado: "Cotizado" | "En producción" | "Listo";
  entrega: string;
};

const estadoStyles: Record<PedidoPersonalizado["estado"], string> = {
  Cotizado: "bg-brand-pink/25 text-black/70",
  "En producción": "bg-blue-100 text-blue-800",
  Listo: "bg-green-100 text-green-800",
};

export default function CustomOrderCard({ pedido }: { pedido: PedidoPersonalizado }) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
      <ProductImagePlaceholder />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-black">{pedido.cliente}</h3>
          <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium ${estadoStyles[pedido.estado]}`}>
            {pedido.estado}
          </span>
        </div>
        <p className="mt-1 text-sm text-black/60">{pedido.descripcion}</p>
        <p className="mt-2 text-xs text-black/40">Entrega estimada: {pedido.entrega}</p>
      </div>
    </div>
  );
}
