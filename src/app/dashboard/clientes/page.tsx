const clientes = [
  { nombre: "María Fernanda Ortiz", telefono: "310 555 1234", ciudad: "Villavicencio" },
  { nombre: "Carlos Andrés Peña", telefono: "312 555 5678", ciudad: "Acacías" },
  { nombre: "Laura Gómez", telefono: "300 555 9012", ciudad: "Villavicencio" },
];

export default function ClientesPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-stone-900">Clientes</h1>
          <p className="mt-1 text-sm text-stone-500">
            Datos de ejemplo — la conexión a Supabase se agregará después.
          </p>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
          Próximamente
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-stone-500">
            <tr>
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="px-4 py-3 font-medium">Teléfono</th>
              <th className="px-4 py-3 font-medium">Ciudad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {clientes.map((c) => (
              <tr key={c.nombre}>
                <td className="px-4 py-3 text-stone-900">{c.nombre}</td>
                <td className="px-4 py-3 text-stone-600">{c.telefono}</td>
                <td className="px-4 py-3 text-stone-600">{c.ciudad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
