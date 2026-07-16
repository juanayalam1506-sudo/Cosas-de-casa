import Image from "next/image";

export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image src="/logo.png" alt="Cosas de Casa" fill className="object-contain" />
    </div>
  );
}
