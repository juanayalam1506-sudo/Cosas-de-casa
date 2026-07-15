export default function ConductorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="bg-brand-gray px-5 py-4 text-white">
        <p className="text-sm font-semibold">Cosas de Casa</p>
        <p className="text-xs text-white/60">Panel del conductor</p>
      </header>
      <div className="mx-auto w-full max-w-md flex-1 p-4">{children}</div>
    </div>
  );
}
