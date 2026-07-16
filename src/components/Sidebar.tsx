"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

// Catálogo, Clientes y Entregas quedan suspendidas del menú mientras nos
// centramos en dejar Inventario listo para la empresa.
const links = [{ href: "/dashboard/inventario", label: "Inventario" }];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 shrink-0 flex-col bg-brand-gray text-white">
      <div className="flex items-center gap-3 px-5 py-6">
        <Logo />
        <p className="text-lg font-semibold">Cosas de Casa</p>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {links.map((link) => {
          const active = pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-brand-pink text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/15 px-5 py-4">
        <p className="text-xs text-white/50">Sesión de ejemplo</p>
      </div>
    </aside>
  );
}
