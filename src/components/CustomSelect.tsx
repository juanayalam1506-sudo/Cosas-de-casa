"use client";

import { useEffect, useRef, useState } from "react";

export type OpcionSelect<T extends string> = {
  value: T;
  label: string;
};

export default function CustomSelect<T extends string>({
  value,
  onChange,
  options,
  disabled,
}: {
  value: T;
  onChange: (value: T) => void;
  options: OpcionSelect<T>[];
  disabled?: boolean;
}) {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const seleccionado = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setAbierto((v) => !v)}
        className="flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-gray/20 bg-white px-4 py-2 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 disabled:opacity-40"
      >
        {seleccionado?.label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3.5 w-3.5 shrink-0 text-black/40 transition-transform ${abierto ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {abierto && (
        <ul className="absolute right-0 z-10 mt-2 w-56 overflow-hidden rounded-xl border border-brand-gray/15 bg-white py-1 shadow-lg">
          {options.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                onClick={() => {
                  onChange(o.value);
                  setAbierto(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  o.value === value ? "bg-brand-pink/10 font-medium text-brand-pink" : "text-black/70 hover:bg-black/5"
                }`}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
