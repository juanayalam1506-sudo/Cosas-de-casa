import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-stone-900">Resumen</h1>
      <p className="mt-1 text-sm text-stone-500">
        Datos de ejemplo — todavía sin conectar a la base de datos.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Productos en inventario" value="128" />
        <StatCard label="Stock bajo" value="6" />
        <StatCard label="Clientes registrados" value="342" />
        <StatCard label="Entregas pendientes" value="9" />
      </div>
    </div>
  );
}
