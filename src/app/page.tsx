export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-stone-900">Cosas de Casa</h1>
          <p className="mt-1 text-sm text-stone-500">Panel interno</p>
        </div>

        <form className="space-y-4 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
              Correo
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="nombre@cosasdecasa.com"
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-stone-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <button
            type="submit"
            disabled
            className="w-full cursor-not-allowed rounded-lg bg-amber-700/50 px-4 py-2 text-sm font-medium text-white"
          >
            Iniciar sesión
          </button>

          <p className="text-center text-xs text-stone-400">
            Acceso solo por invitación. El inicio de sesión se conectará próximamente.
          </p>
        </form>
      </div>
    </main>
  );
}
