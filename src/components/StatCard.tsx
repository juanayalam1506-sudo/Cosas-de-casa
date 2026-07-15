export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-brand-pink/40 bg-white p-5 shadow-sm">
      <p className="text-sm text-black/60">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-black">{value}</p>
    </div>
  );
}
