export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-black">Cosas de Casa</h1>
          <p className="mt-1 text-sm text-black/50">Panel interno</p>
        </div>

        <form className="space-y-4 rounded-xl border border-brand-pink/40 bg-white p-6 shadow-sm">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-black">
              Correo
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="nombre@cosasdecasa.com"
              className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-black">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-brand-gray/30 px-3 py-2 text-sm text-black placeholder:text-black/35 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
            />
          </div>

          <button
            type="submit"
            disabled
            className="w-full cursor-not-allowed rounded-lg bg-brand-pink/60 px-4 py-2 text-sm font-medium text-white"
          >
            Iniciar sesión
          </button>

          <p className="text-center text-xs text-black/45">
            Acceso solo por invitación. El inicio de sesión se conectará próximamente.
          </p>
        </form>
      </div>
    </main>
  );
}
