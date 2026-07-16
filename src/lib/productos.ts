export type EstadoProducto = "Activo" | "Descontinuado" | "En producción";

export type Variante = {
  nombre: string;
  color: string;
};

export type TipoPatron = "rayas" | "cuadros" | "lunares";

export type PatronVariante = {
  nombre: string;
  tipo: TipoPatron;
  colores: [string, string];
};

export type Producto = {
  codigo: string;
  nombre: string;
  categoria: string;
  subcategoria?: string;
  coleccion: string;
  stock: number;
  stockObjetivo?: number;
  precio: string;
  estado?: EstadoProducto;
  coloresMadera?: Variante[];
  coloresTela?: Variante[];
  patrones?: PatronVariante[];
};

export function tieneVariantes(producto: Producto): boolean {
  return Boolean(producto.coloresMadera || producto.coloresTela || producto.patrones);
}

export type PiezaCatalogo = {
  id: string;
  nombre: string;
  categoria: string;
  subcategoria?: string;
  descripcion: string;
  desde: string;
};

export type MovimientoStock = {
  id: string;
  codigo: string;
  tipo: "entrada" | "salida";
  cantidad: number;
  fecha: string;
};

export const categorias = [
  "Todos",
  "Comedor",
  "Sillas",
  "Mesas",
  "Espejos",
  "Decoración",
  "Sofás",
  "Camas",
  "Cojines",
  "Tapetes",
  "Cortinas",
];

export const subcategoriasPorCategoria: Record<string, string[]> = {
  Sillas: ["Mecedoras", "Fijas"],
  Mesas: ["Mesas de centro", "Mesas de noche", "Mesas de comedor", "Mesas auxiliares"],
};

export function camposVariantePorCategoria(categoria: string): {
  madera: boolean;
  tela: boolean;
  patron: boolean;
} {
  if (categoria === "Sofás" || categoria === "Sillas") return { madera: true, tela: true, patron: false };
  if (["Camas", "Espejos", "Mesas", "Comedor"].includes(categoria)) {
    return { madera: true, tela: false, patron: false };
  }
  if (categoria === "Cortinas") return { madera: false, tela: true, patron: false };
  if (categoria === "Cojines" || categoria === "Tapetes") return { madera: false, tela: false, patron: true };
  return { madera: false, tela: false, patron: false };
}

export const colecciones = ["Todas", "Colección Victoria", "Colección Oslo"];

export const coleccionStyles: Record<string, string> = {
  "Colección Victoria": "bg-brand-pink/20 text-black/70",
  "Colección Oslo": "bg-brand-gray/15 text-black/70",
};

export const estadosProducto: EstadoProducto[] = ["Activo", "Descontinuado", "En producción"];

export const estadoProductoStyles: Record<EstadoProducto, string> = {
  Activo: "bg-green-100 text-green-800",
  Descontinuado: "bg-black/10 text-black/50",
  "En producción": "bg-blue-100 text-blue-800",
};

export function parsePrecio(precio: string): number {
  return Number(precio.replace(/\D/g, "")) || 0;
}

export const productos: Producto[] = [
  {
    codigo: "SOF-001",
    nombre: "Sofá",
    categoria: "Sofás",
    coleccion: "Colección Victoria",
    stock: 12,
    stockObjetivo: 15,
    precio: "$2.450.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Roble", color: "#B98655" }],
    coloresTela: [
      { nombre: "Terracota", color: "#C97B5A" },
      { nombre: "Beige", color: "#D9C7B8" },
      { nombre: "Gris", color: "#9CA3AF" },
    ],
  },
  {
    codigo: "SOF-002",
    nombre: "Sofá",
    categoria: "Sofás",
    coleccion: "Colección Oslo",
    stock: 3,
    stockObjetivo: 10,
    precio: "$1.980.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Nogal", color: "#6B4A33" }],
    coloresTela: [
      { nombre: "Gris claro", color: "#B8BEC7" },
      { nombre: "Verde salvia", color: "#8A9A82" },
    ],
  },
  {
    codigo: "COM-001",
    nombre: "Comedor",
    categoria: "Comedor",
    coleccion: "Colección Victoria",
    stock: 3,
    stockObjetivo: 6,
    precio: "$3.200.000",
    estado: "Activo",
    coloresMadera: [
      { nombre: "Roble", color: "#B98655" },
      { nombre: "Nogal", color: "#6B4A33" },
    ],
  },
  {
    codigo: "MES-001",
    nombre: "Mesa de comedor",
    categoria: "Mesas",
    subcategoria: "Mesas de comedor",
    coleccion: "Colección Victoria",
    stock: 4,
    stockObjetivo: 8,
    precio: "$1.890.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Roble", color: "#B98655" }],
  },
  {
    codigo: "MES-002",
    nombre: "Mesa de centro",
    categoria: "Mesas",
    subcategoria: "Mesas de centro",
    coleccion: "Colección Oslo",
    stock: 9,
    stockObjetivo: 12,
    precio: "$780.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Nogal claro", color: "#A9794F" }],
  },
  {
    codigo: "MES-003",
    nombre: "Mesa de noche",
    categoria: "Mesas",
    subcategoria: "Mesas de noche",
    coleccion: "Colección Victoria",
    stock: 18,
    stockObjetivo: 20,
    precio: "$420.000",
    estado: "En producción",
    coloresMadera: [{ nombre: "Roble", color: "#B98655" }],
  },
  {
    codigo: "MES-004",
    nombre: "Mesa auxiliar",
    categoria: "Mesas",
    subcategoria: "Mesas auxiliares",
    coleccion: "Colección Oslo",
    stock: 6,
    stockObjetivo: 10,
    precio: "$350.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Natural", color: "#C8A46E" }],
  },
  {
    codigo: "CAM-001",
    nombre: "Cama",
    categoria: "Camas",
    coleccion: "Colección Oslo",
    stock: 7,
    stockObjetivo: 10,
    precio: "$1.320.000",
    estado: "Activo",
    coloresMadera: [
      { nombre: "Roble claro", color: "#C8A46E" },
      { nombre: "Nogal", color: "#6B4A33" },
    ],
  },
  {
    codigo: "CAM-002",
    nombre: "Cama",
    categoria: "Camas",
    coleccion: "Colección Victoria",
    stock: 2,
    stockObjetivo: 6,
    precio: "$2.100.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Nogal oscuro", color: "#5C3A21" }],
  },
  {
    codigo: "SIL-001",
    nombre: "Silla",
    categoria: "Sillas",
    subcategoria: "Fijas",
    coleccion: "Colección Oslo",
    stock: 25,
    stockObjetivo: 24,
    precio: "$310.000",
    estado: "Activo",
    coloresMadera: [
      { nombre: "Natural", color: "#C8A46E" },
      { nombre: "Nogal", color: "#6B4A33" },
    ],
    coloresTela: [{ nombre: "Mostaza", color: "#C9A227" }],
  },
  {
    codigo: "SIL-002",
    nombre: "Mecedora",
    categoria: "Sillas",
    subcategoria: "Mecedoras",
    coleccion: "Colección Victoria",
    stock: 8,
    stockObjetivo: 10,
    precio: "$890.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Rattan natural", color: "#C9A66B" }],
    coloresTela: [{ nombre: "Crudo", color: "#E7DCC6" }],
  },
  {
    codigo: "ESP-001",
    nombre: "Espejo",
    categoria: "Espejos",
    coleccion: "Colección Victoria",
    stock: 15,
    stockObjetivo: 15,
    precio: "$240.000",
    estado: "Activo",
    coloresMadera: [{ nombre: "Latón", color: "#B08D57" }],
  },
  {
    codigo: "ESP-002",
    nombre: "Espejo",
    categoria: "Espejos",
    coleccion: "Colección Oslo",
    stock: 5,
    stockObjetivo: 12,
    precio: "$260.000",
    estado: "Descontinuado",
    coloresMadera: [
      { nombre: "Natural", color: "#C8A46E" },
      { nombre: "Negro", color: "#2B2B2B" },
    ],
  },
  {
    codigo: "DEC-001",
    nombre: "Decoración",
    categoria: "Decoración",
    coleccion: "Colección Oslo",
    stock: 10,
    stockObjetivo: 15,
    precio: "$180.000",
    estado: "Activo",
  },
  {
    codigo: "COJ-001",
    nombre: "Cojín",
    categoria: "Cojines",
    coleccion: "Colección Victoria",
    stock: 30,
    stockObjetivo: 25,
    precio: "$95.000",
    estado: "Activo",
    patrones: [
      { nombre: "Bohemio a rayas", tipo: "rayas", colores: ["#C97B5A", "#D9C7B8"] },
      { nombre: "Cuadros verdes", tipo: "cuadros", colores: ["#8A9A82", "#F2ECE1"] },
      { nombre: "Lunares", tipo: "lunares", colores: ["#D9C7B8", "#6B4A33"] },
    ],
  },
  {
    codigo: "TAP-001",
    nombre: "Tapete",
    categoria: "Tapetes",
    coleccion: "Colección Oslo",
    stock: 12,
    stockObjetivo: 15,
    precio: "$420.000",
    estado: "Activo",
    patrones: [
      { nombre: "Rayas terracota", tipo: "rayas", colores: ["#C97B5A", "#D9C7B8"] },
      { nombre: "Cuadros gris", tipo: "cuadros", colores: ["#9CA3AF", "#F2ECE1"] },
      { nombre: "Lunares beige", tipo: "lunares", colores: ["#D9C7B8", "#8A9A82"] },
    ],
  },
  {
    codigo: "COR-001",
    nombre: "Cortina",
    categoria: "Cortinas",
    coleccion: "Colección Victoria",
    stock: 20,
    stockObjetivo: 25,
    precio: "$150.000",
    estado: "Activo",
    coloresTela: [
      { nombre: "Lino natural", color: "#E7DCC6" },
      { nombre: "Verde salvia", color: "#8A9A82" },
    ],
  },
];

export const piezasCatalogo: PiezaCatalogo[] = [
  {
    id: "mecedora-a-medida",
    nombre: "Mecedora a medida",
    categoria: "Sillas",
    subcategoria: "Mecedoras",
    descripcion: "Elige el tipo de madera, tapizado y color.",
    desde: "$750.000",
  },
  {
    id: "sofa-modular-personalizado",
    nombre: "Sofá modular personalizado",
    categoria: "Sofás",
    descripcion: "Configura tamaño, tela y color a tu gusto.",
    desde: "$2.200.000",
  },
  {
    id: "mesa-comedor-a-medida",
    nombre: "Mesa de comedor a medida",
    categoria: "Mesas",
    subcategoria: "Mesas de comedor",
    descripcion: "Elige madera, forma y medidas especiales.",
    desde: "$1.500.000",
  },
  {
    id: "restauracion-y-tapizado",
    nombre: "Restauración y tapizado",
    categoria: "Decoración",
    descripcion: "Dale una segunda vida a un mueble que ya tienes.",
    desde: "$350.000",
  },
];
