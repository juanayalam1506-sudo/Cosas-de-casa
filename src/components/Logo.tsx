export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className={`flex shrink-0 items-center justify-center rounded-full bg-brand-pink ${className}`}>
      <svg viewBox="0 0 48 48" className="h-1/2 w-1/2 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 24V14a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10M8 24h32v8a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-8Z"
        />
      </svg>
    </div>
  );
}
