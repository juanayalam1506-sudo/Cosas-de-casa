export type Franja = "mañana" | "tarde";

export type Entrega = {
  id: string;
  cliente: string;
  producto: string;
  estado: "En ruta" | "Programada" | "Entregada";
  fecha: string;
  franja: Franja;
};

export const franjas: Record<Franja, { label: string; inicio: string; fin: string }> = {
  mañana: { label: "Mañana", inicio: "9:00 a.m.", fin: "12:30 p.m." },
  tarde: { label: "Tarde", inicio: "2:00 p.m.", fin: "4:30 p.m." },
};

export const capacidadPorFranja = 3;

export const estadoStyles: Record<Entrega["estado"], string> = {
  "En ruta": "bg-blue-100 text-blue-800",
  Programada: "bg-brand-pink/25 text-black/70",
  Entregada: "bg-green-100 text-green-800",
};

export const entregas: Entrega[] = [
  { id: "1", cliente: "Laura Gómez", producto: "Cama Nórdica Queen", estado: "Entregada", fecha: "2026-07-10", franja: "mañana" },
  { id: "2", cliente: "María Fernanda Ortiz", producto: "Sofá Milán 3 puestos", estado: "En ruta", fecha: "2026-07-16", franja: "mañana" },
  { id: "3", cliente: "Diana Castañeda", producto: "Silla Escandinava x4", estado: "Programada", fecha: "2026-07-16", franja: "mañana" },
  { id: "4", cliente: "Julián Rodríguez", producto: "Espejo Redondo Latón", estado: "Programada", fecha: "2026-07-16", franja: "mañana" },
  { id: "5", cliente: "Paula Ramírez", producto: "Mecedora Boho Rattan", estado: "Programada", fecha: "2026-07-16", franja: "tarde" },
  { id: "6", cliente: "Andrés Felipe Rojas", producto: "Set de Cojines Boho", estado: "Programada", fecha: "2026-07-16", franja: "tarde" },
  { id: "7", cliente: "Camila Torres", producto: "Mesa de centro Nórdica", estado: "Programada", fecha: "2026-07-16", franja: "tarde" },
  { id: "8", cliente: "Sebastián Rojas", producto: "Mesa de noche Roble", estado: "Programada", fecha: "2026-07-18", franja: "mañana" },
  { id: "9", cliente: "Carlos Andrés Peña", producto: "Mesa de comedor Roble", estado: "Programada", fecha: "2026-07-18", franja: "tarde" },
  { id: "10", cliente: "Mariana Duarte", producto: "Sofá modular personalizado", estado: "Programada", fecha: "2026-07-20", franja: "mañana" },
  { id: "11", cliente: "Esteban Gil", producto: "Set de Cojines Boho", estado: "Programada", fecha: "2026-07-20", franja: "mañana" },
  { id: "12", cliente: "Natalia Vargas", producto: "Espejo Redondo Latón", estado: "Programada", fecha: "2026-07-20", franja: "tarde" },
  { id: "13", cliente: "Felipe Cárdenas", producto: "Mesa de comedor Roble", estado: "Programada", fecha: "2026-07-20", franja: "tarde" },
];
