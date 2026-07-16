import ColorSwatches from "./ColorSwatches";
import PatternSwatches from "./PatternSwatches";
import { tieneVariantes, type Producto } from "@/lib/productos";

export default function VariantesDisplay({ producto }: { producto: Producto }) {
  if (!tieneVariantes(producto)) return <span className="text-xs text-black/30">—</span>;

  return (
    <div className="space-y-1">
      {producto.coloresMadera && (
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-black/40">Madera</span>
          <ColorSwatches variantes={producto.coloresMadera} />
        </div>
      )}
      {producto.coloresTela && (
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-black/40">Tela</span>
          <ColorSwatches variantes={producto.coloresTela} />
        </div>
      )}
      {producto.patrones && (
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-black/40">Diseño</span>
          <PatternSwatches patrones={producto.patrones} />
        </div>
      )}
    </div>
  );
}
