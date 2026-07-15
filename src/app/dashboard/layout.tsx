import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-8">{children}</div>
    </div>
  );
}
