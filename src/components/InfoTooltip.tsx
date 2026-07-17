"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function InfoTooltip({ texto }: { texto: string }) {
  const [abierto, setAbierto] = useState(false);
  const [posicion, setPosicion] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLSpanElement>(null);

  const mostrar = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setPosicion({ top: rect.top - 8, left: rect.left + rect.width / 2 });
    }
    setAbierto(true);
  };

  return (
    <span ref={ref} onMouseEnter={mostrar} onMouseLeave={() => setAbierto(false)} className="relative inline-flex">
      <span className="flex h-4 w-4 cursor-default items-center justify-center rounded-full border border-brand-gray/30 text-[10px] font-semibold text-black/40 hover:border-brand-pink hover:text-brand-pink">
        i
      </span>
      {abierto &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full"
            style={{ top: posicion.top, left: posicion.left }}
          >
            <div className="max-w-56 rounded-lg border border-brand-gray/20 bg-white p-2 text-xs whitespace-nowrap text-black/70 shadow-lg">
              {texto}
            </div>
          </div>,
          document.body,
        )}
    </span>
  );
}
