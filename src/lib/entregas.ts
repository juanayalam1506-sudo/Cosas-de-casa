export type Entrega = {
  cliente: string;
  producto: string;
  direccion: string;
  conductor: string;
  estado: "Programada" | "En ruta" | "Entregada";
  fecha: string;
  observacion?: string;
};

export const estadoStyles: Record<Entrega["estado"], string> = {
  "En ruta": "bg-blue-100 text-blue-800",
  Programada: "bg-brand-pink/25 text-black/70",
  Entregada: "bg-green-100 text-green-800",
};

export const entregas: Entrega[] = [
  {
    cliente: "María Fernanda Ortiz",
    producto: "Sofá Milán 3 puestos",
    direccion: "Cra 34 #12-05, Villavicencio",
    conductor: "Andrés Ruiz",
    estado: "En ruta",
    fecha: "2026-07-16",
    observacion: "Edificio con portería; anunciarse como entrega de Cosas de Casa.",
  },
  {
    cliente: "Carlos Andrés Peña",
    producto: "Mesa de comedor Roble",
    direccion: "Cll 8 #22-40, Acacías",
    conductor: "Andrés Ruiz",
    estado: "Programada",
    fecha: "2026-07-18",
    observacion: "Cliente pidió llamar 30 minutos antes de llegar.",
  },
  {
    cliente: "Laura Gómez",
    producto: "Cama Nórdica Queen",
    direccion: "Cra 40 #15-22, Villavicencio",
    conductor: "Jhon Torres",
    estado: "Entregada",
    fecha: "2026-07-10",
  },
  {
    cliente: "Diana Salcedo",
    producto: "Mecedora Boho Rattan",
    direccion: "Cll 33 #19-10, Villavicencio",
    conductor: "Andrés Ruiz",
    estado: "Programada",
    fecha: "2026-07-19",
    observacion: "Producto frágil (rattan): manejar con cuidado al bajarlo del camión.",
  },
];
