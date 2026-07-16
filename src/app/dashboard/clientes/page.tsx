const clientes = [
  { nombre: "María Fernanda Ortiz", telefono: "310 555 1234", ciudad: "Villavicencio" },
  { nombre: "Carlos Andrés Peña", telefono: "312 555 5678", ciudad: "Acacías" },
  { nombre: "Laura Gómez", telefono: "300 555 9012", ciudad: "Villavicencio" },
];

export default function ClientesPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-black">Clientes</h1>

      <div className="mt-6 overflow-hidden rounded-xl border border-brand-gray/20 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-pink/10 text-black/60">
            <tr>
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="px-4 py-3 font-medium">Teléfono</th>
              <th className="px-4 py-3 font-medium">Ciudad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray/10">
            {clientes.map((c) => (
              <tr key={c.nombre}>
                <td className="px-4 py-3 text-black">{c.nombre}</td>
                <td className="px-4 py-3 text-black/70">{c.telefono}</td>
                <td className="px-4 py-3 text-black/70">{c.ciudad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
