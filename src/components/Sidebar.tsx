"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Resumen" },
  { href: "/dashboard/inventario", label: "Inventario" },
  { href: "/dashboard/clientes", label: "Clientes" },
  { href: "/dashboard/entregas", label: "Entregas" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 shrink-0 flex-col bg-stone-900 text-stone-100">
      <div className="px-5 py-6">
        <p className="text-lg font-semibold">Cosas de Casa</p>
        <p className="text-xs text-stone-400">Panel interno</p>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {links.map((link) => {
          const active =
            link.href === "/dashboard"
              ? pathname === link.href
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-amber-700 text-white"
                  : "text-stone-300 hover:bg-stone-800 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-stone-800 px-5 py-4">
        <p className="text-xs text-stone-500">Sesión de ejemplo</p>
      </div>
    </aside>
  );
}
