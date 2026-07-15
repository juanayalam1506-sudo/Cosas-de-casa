export type Franja = "mañana" | "tarde";

export type Entrega = {
  id: string;
  cliente: string;
  producto: string;
  estado: "En ruta" | "Programada" | "Entregada";
  fecha: string;
  hora: string;
};

export const franjas: Record<Franja, { label: string; inicio: string; fin: string }> = {
  mañana: { label: "Mañana", inicio: "09:00", fin: "12:30" },
  tarde: { label: "Tarde", inicio: "14:00", fin: "16:30" },
};

export const capacidadPorFranja = 3;

export const estadoStyles: Record<Entrega["estado"], string> = {
  "En ruta": "bg-blue-100 text-blue-800",
  Programada: "bg-brand-pink/25 text-black/70",
  Entregada: "bg-green-100 text-green-800",
};

export function obtenerFranja(hora: string): Franja | null {
  if (hora >= franjas.mañana.inicio && hora <= franjas.mañana.fin) return "mañana";
  if (hora >= franjas.tarde.inicio && hora <= franjas.tarde.fin) return "tarde";
  return null;
}

export function formatearHora(hora: string): string {
  const [horas, minutos] = hora.split(":").map(Number);
  const periodo = horas >= 12 ? "p.m." : "a.m.";
  const horas12 = horas % 12 === 0 ? 12 : horas % 12;
  return `${horas12}:${String(minutos).padStart(2, "0")} ${periodo}`;
}

export const entregas: Entrega[] = [
  { id: "1", cliente: "Laura Gómez", producto: "Cama Nórdica Queen", estado: "Entregada", fecha: "2026-07-10", hora: "09:30" },
  { id: "2", cliente: "María Fernanda Ortiz", producto: "Sofá Milán 3 puestos", estado: "En ruta", fecha: "2026-07-16", hora: "09:15" },
  { id: "3", cliente: "Diana Castañeda", producto: "Silla Escandinava x4", estado: "Programada", fecha: "2026-07-16", hora: "10:15" },
  { id: "4", cliente: "Julián Rodríguez", producto: "Espejo Redondo Latón", estado: "Programada", fecha: "2026-07-16", hora: "11:15" },
  { id: "5", cliente: "Paula Ramírez", producto: "Mecedora Boho Rattan", estado: "Programada", fecha: "2026-07-16", hora: "14:15" },
  { id: "6", cliente: "Andrés Felipe Rojas", producto: "Set de Cojines Boho", estado: "Programada", fecha: "2026-07-16", hora: "15:00" },
  { id: "7", cliente: "Camila Torres", producto: "Mesa de centro Nórdica", estado: "Programada", fecha: "2026-07-16", hora: "15:45" },
  { id: "8", cliente: "Sebastián Rojas", producto: "Mesa de noche Roble", estado: "Programada", fecha: "2026-07-18", hora: "09:30" },
  { id: "9", cliente: "Carlos Andrés Peña", producto: "Mesa de comedor Roble", estado: "Programada", fecha: "2026-07-18", hora: "14:30" },
  { id: "10", cliente: "Mariana Duarte", producto: "Sofá modular personalizado", estado: "Programada", fecha: "2026-07-20", hora: "09:00" },
  { id: "11", cliente: "Esteban Gil", producto: "Set de Cojines Boho", estado: "Programada", fecha: "2026-07-20", hora: "10:00" },
  { id: "12", cliente: "Natalia Vargas", producto: "Espejo Redondo Latón", estado: "Programada", fecha: "2026-07-20", hora: "14:00" },
  { id: "13", cliente: "Felipe Cárdenas", producto: "Mesa de comedor Roble", estado: "Programada", fecha: "2026-07-20", hora: "15:00" },
];
