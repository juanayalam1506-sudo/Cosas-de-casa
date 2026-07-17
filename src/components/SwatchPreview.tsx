"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function SwatchPreview({
  nombre,
  swatch,
  children,
}: {
  nombre: string;
  swatch: React.ReactNode;
  children: React.ReactNode;
}) {
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
    <span
      ref={ref}
      onMouseEnter={mostrar}
      onMouseLeave={() => setAbierto(false)}
      className="inline-flex"
    >
      {children}
      {abierto &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full"
            style={{ top: posicion.top, left: posicion.left }}
          >
            <div className="rounded-lg border border-brand-gray/20 bg-white p-2 shadow-lg">
              <div className="h-20 w-20 overflow-hidden rounded-md border border-black/10">{swatch}</div>
              <p className="mt-1 max-w-20 text-center text-xs font-medium text-black/70">{nombre}</p>
            </div>
          </div>,
          document.body,
        )}
    </span>
  );
}
