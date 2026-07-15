"use client";

import { useState } from "react";
import ProductCard, { type Producto } from "@/components/ProductCard";
import CustomOrderCard, { type PedidoPersonalizado } from "@/components/CustomOrderCard";
import CategoryFilter from "@/components/CategoryFilter";

const categorias = ["Todos", "Mecedoras", "Sala", "Comedor", "Alcoba", "Decoración"];

const coleccion: Producto[] = [
  { nombre: "Mecedora Boho Rattan", categoria: "Mecedoras", stock: 8, precio: "$890.000" },
  { nombre: "Sofá Milán 3 puestos", categoria: "Sala", stock: 12, precio: "$2.450.000" },
  { nombre: "Mesa de comedor Roble", categoria: "Comedor", stock: 4, precio: "$1.890.000" },
  { nombre: "Cama Nórdica Queen", categoria: "Alcoba", stock: 7, precio: "$1.320.000" },
  { nombre: "Silla Escandinava", categoria: "Comedor", stock: 25, precio: "$310.000" },
  { nombre: "Closet Modular 3 puertas", categoria: "Alcoba", stock: 2, precio: "$2.100.000" },
  { nombre: "Espejo Redondo Latón", categoria: "Decoración", stock: 15, precio: "$240.000" },
];

const personalizados: PedidoPersonalizado[] = [
  {
    cliente: "María Fernanda Ortiz",
    descripcion: "Sofá 3 puestos a medida, tela boucle crema",
    estado: "En producción",
    entrega: "2026-08-05",
  },
  {
    cliente: "Carlos Andrés Peña",
    descripcion: "Mesa de centro en roble, medida especial 110x60",
    estado: "Cotizado",
    entrega: "Por definir",
  },
  {
    cliente: "Laura Gómez",
    descripcion: "Restauración y tapizado de mecedora antigua",
    estado: "Listo",
    entrega: "2026-07-12",
  },
];

export default function InventarioPage() {
  const [tab, setTab] = useState<"coleccion" | "personalizado">("coleccion");
  const [categoria, setCategoria] = useState("Todos");

  const productosFiltrados =
    categoria === "Todos" ? coleccion : coleccion.filter((p) => p.categoria === categoria);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-black">Inventario</h1>
          <p className="mt-1 text-sm text-black/50">
            Datos de ejemplo — la conexión a Supabase se agregará después.
          </p>
        </div>
        <span className="rounded-full bg-brand-pink/20 px-3 py-1 text-xs font-medium text-black/70">
          Próximamente
        </span>
      </div>

      <div className="mt-6 flex gap-6 border-b border-brand-gray/15">
        <button
          type="button"
          onClick={() => setTab("coleccion")}
          className={`border-b-2 pb-3 text-sm font-medium ${
            tab === "coleccion" ? "border-brand-pink text-black" : "border-transparent text-black/40"
          }`}
        >
          Colección
        </button>
        <button
          type="button"
          onClick={() => setTab("personalizado")}
          className={`border-b-2 pb-3 text-sm font-medium ${
            tab === "personalizado" ? "border-brand-pink text-black" : "border-transparent text-black/40"
          }`}
        >
          Personalizado
        </button>
      </div>

      {tab === "coleccion" ? (
        <div className="mt-6">
          <CategoryFilter categorias={categorias} activa={categoria} onChange={setCategoria} />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productosFiltrados.map((p) => (
              <ProductCard key={p.nombre} producto={p} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personalizados.map((p) => (
            <CustomOrderCard key={`${p.cliente}-${p.descripcion}`} pedido={p} />
          ))}
        </div>
      )}
    </div>
  );
}
