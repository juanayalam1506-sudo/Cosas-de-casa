export default function ProductImagePlaceholder() {
  return (
    <div className="flex aspect-square items-center justify-center rounded-t-xl bg-brand-pink/10">
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 text-brand-gray/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 24V14a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10M8 24h32v8a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-8ZM8 24a4 4 0 0 0-4 4v6M40 24a4 4 0 0 1 4 4v6"
        />
      </svg>
    </div>
  );
}
