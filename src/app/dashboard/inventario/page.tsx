"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import InventorySummary from "@/components/InventorySummary";
import Modal from "@/components/Modal";
import NewProductForm from "@/components/NewProductForm";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import StockHistory from "@/components/StockHistory";
import {
  categorias,
  parsePrecio,
  productos as productosIniciales,
  subcategoriasPorCategoria,
  type EstadoProducto,
  type MovimientoStock,
  type Producto,
} from "@/lib/productos";

type Orden = "nombre" | "precio-asc" | "precio-desc" | "stock-asc" | "stock-desc";

function productosACSV(productos: Producto[]): string {
  const columnas = [
    "Código",
    "Nombre",
    "Categoría",
    "Subcategoría",
    "Colección",
    "Estado",
    "Stock",
    "Stock objetivo",
    "Precio",
  ];
  const filas = productos.map((p) => [
    p.codigo,
    p.nombre,
    p.categoria,
    p.subcategoria ?? "",
    p.coleccion,
    p.estado ?? "Activo",
    String(p.stock),
    p.stockObjetivo !== undefined ? String(p.stockObjetivo) : "",
    p.precio,
  ]);
  return [columnas, ...filas]
    .map((fila) => fila.map((valor) => `"${valor.replace(/"/g, '""')}"`).join(","))
    .join("\n");
}

export default function InventarioPage() {
  const [productos, setProductos] = useState<Producto[]>(productosIniciales);
  const [movimientos, setMovimientos] = useState<MovimientoStock[]>([]);
  const [categoria, setCategoria] = useState("Todos");
  const [subcategoria, setSubcategoria] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<Orden>("nombre");
  const [vista, setVista] = useState<"tarjetas" | "tabla">("tarjetas");
  const [soloReabastecer, setSoloReabastecer] = useState(false);
  const [formAbierto, setFormAbierto] = useState(false);
  const [historialProducto, setHistorialProducto] = useState<Producto | null>(null);

  const subcategoriasDisponibles = subcategoriasPorCategoria[categoria];

  const handleCategoriaChange = (nuevaCategoria: string) => {
    setCategoria(nuevaCategoria);
    setSubcategoria("Todas");
  };

  const productosFiltrados = useMemo(() => {
    const filtrados = productos.filter((p) => {
      if (categoria !== "Todos" && p.categoria !== categoria) return false;
      if (subcategoriasDisponibles && subcategoria !== "Todas" && p.subcategoria !== subcategoria) return false;
      if (soloReabastecer && (p.stock > 5 || p.estado === "Descontinuado")) return false;
      const termino = busqueda.trim().toLowerCase();
      if (termino && !p.nombre.toLowerCase().includes(termino) && !p.codigo.toLowerCase().includes(termino)) {
        return false;
      }
      return true;
    });

    if (soloReabastecer) {
      return [...filtrados].sort((a, b) => a.stock - b.stock);
    }

    const ordenados = [...filtrados];
    switch (orden) {
      case "precio-asc":
        ordenados.sort((a, b) => parsePrecio(a.precio) - parsePrecio(b.precio));
        break;
      case "precio-desc":
        ordenados.sort((a, b) => parsePrecio(b.precio) - parsePrecio(a.precio));
        break;
      case "stock-asc":
        ordenados.sort((a, b) => a.stock - b.stock);
        break;
      case "stock-desc":
        ordenados.sort((a, b) => b.stock - a.stock);
        break;
      default:
        ordenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    return ordenados;
  }, [productos, categoria, subcategoria, subcategoriasDisponibles, busqueda, orden, soloReabastecer]);

  const agregarProducto = (producto: Producto) => {
    setProductos((actual) => [...actual, producto]);
    setFormAbierto(false);
  };

  const cambiarEstado = (producto: Producto, nuevoEstado: EstadoProducto) => {
    setProductos((actual) =>
      actual.map((p) => (p.codigo === producto.codigo ? { ...p, estado: nuevoEstado } : p)),
    );
  };

  const ajustarStock = (producto: Producto, delta: number) => {
    setProductos((actual) =>
      actual.map((p) => (p.codigo === producto.codigo ? { ...p, stock: Math.max(0, p.stock + delta) } : p)),
    );
    setMovimientos((actual) => [
      {
        id: crypto.randomUUID(),
        codigo: producto.codigo,
        tipo: delta > 0 ? "entrada" : "salida",
        cantidad: Math.abs(delta),
        fecha: new Date().toISOString().slice(0, 10),
      },
      ...actual,
    ]);
  };

  const exportarCSV = () => {
    const csv = productosACSV(productosFiltrados);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "inventario.csv";
    enlace.click();
    URL.revokeObjectURL(url);
  };

  const historialDelProducto = historialProducto
    ? movimientos.filter((m) => m.codigo === historialProducto.codigo)
    : [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-black">Inventario</h1>
          <p className="mt-1 text-sm text-black/50">Stock de lo que se vende regularmente.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={exportarCSV}
            className="rounded-lg border border-brand-gray/30 px-3 py-1.5 text-sm font-medium text-black/70 hover:bg-brand-pink/10"
          >
            Exportar CSV
          </button>
          <button
            type="button"
            onClick={() => setFormAbierto(true)}
            className="rounded-lg bg-brand-pink px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-pink/90"
          >
            + Agregar producto
          </button>
        </div>
      </div>

      <InventorySummary productos={productos} />

      <div className="mt-6 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre o código..."
            className="w-full max-w-xs rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
          />

          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black/70">
              <input
                type="checkbox"
                checked={soloReabastecer}
                onChange={(e) => setSoloReabastecer(e.target.checked)}
                className="accent-brand-pink"
              />
              Solo por reabastecer
            </label>

            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value as Orden)}
              disabled={soloReabastecer}
              className="rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink disabled:opacity-40"
            >
              <option value="nombre">Nombre (A-Z)</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="stock-asc">Stock: menor a mayor</option>
              <option value="stock-desc">Stock: mayor a menor</option>
            </select>

            <div className="flex rounded-lg border border-brand-gray/30 p-0.5">
              <button
                type="button"
                onClick={() => setVista("tarjetas")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  vista === "tarjetas" ? "bg-brand-gray text-white" : "text-black/60 hover:bg-brand-pink/10"
                }`}
              >
                Tarjetas
              </button>
              <button
                type="button"
                onClick={() => setVista("tabla")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  vista === "tabla" ? "bg-brand-gray text-white" : "text-black/60 hover:bg-brand-pink/10"
                }`}
              >
                Tabla
              </button>
            </div>
          </div>
        </div>

        <CategoryFilter categorias={categorias} activa={categoria} onChange={handleCategoriaChange} />
        {subcategoriasDisponibles && (
          <CategoryFilter
            categorias={["Todas", ...subcategoriasDisponibles]}
            activa={subcategoria}
            onChange={setSubcategoria}
          />
        )}

        {productosFiltrados.length === 0 ? (
          <p className="pt-6 text-sm text-black/40">Ningún producto coincide con la búsqueda o el filtro.</p>
        ) : vista === "tarjetas" ? (
          <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productosFiltrados.map((p) => (
              <ProductCard
                key={p.codigo}
                producto={p}
                onAjustarStock={(delta) => ajustarStock(p, delta)}
                onVerHistorial={() => setHistorialProducto(p)}
                onCambiarEstado={(nuevoEstado) => cambiarEstado(p, nuevoEstado)}
              />
            ))}
          </div>
        ) : (
          <div className="pt-3">
            <ProductTable
              productos={productosFiltrados}
              onAjustarStock={ajustarStock}
              onVerHistorial={setHistorialProducto}
              onCambiarEstado={cambiarEstado}
            />
          </div>
        )}
      </div>

      <Modal open={formAbierto} onClose={() => setFormAbierto(false)} title="Agregar producto">
        <NewProductForm onSubmit={agregarProducto} onCancel={() => setFormAbierto(false)} />
      </Modal>

      <Modal
        open={historialProducto !== null}
        onClose={() => setHistorialProducto(null)}
        title={historialProducto ? `Historial · ${historialProducto.nombre}` : "Historial"}
      >
        <StockHistory movimientos={historialDelProducto} />
      </Modal>
    </div>
  );
}
