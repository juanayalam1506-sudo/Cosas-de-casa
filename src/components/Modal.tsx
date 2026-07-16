"use client";

import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="flex max-h-[85vh] w-full max-w-md flex-col rounded-xl bg-white p-6 shadow-lg">
        <div className="flex shrink-0 items-center justify-between">
          <h2 className="text-lg font-semibold text-black">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="text-black/40 hover:text-black"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
