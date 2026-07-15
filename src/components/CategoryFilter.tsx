export default function CategoryFilter({
  categorias,
  activa,
  onChange,
}: {
  categorias: string[];
  activa: string;
  onChange: (categoria: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          onClick={() => onChange(categoria)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
            categoria === activa
              ? "bg-brand-gray text-white"
              : "bg-brand-pink/10 text-black/60 hover:bg-brand-pink/20"
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
