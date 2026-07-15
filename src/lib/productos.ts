export type EstadoProducto = "Activo" | "Descontinuado" | "En tránsito";

export type Producto = {
  codigo: string;
  nombre: string;
  categoria: string;
  subcategoria?: string;
  coleccion: string;
  stock: number;
  stockObjetivo?: number;
  precio: string;
  proveedor?: string;
  estado?: EstadoProducto;
};

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
];

export const subcategoriasPorCategoria: Record<string, string[]> = {
  Sillas: ["Mecedoras", "Fijas"],
  Mesas: ["Mesas de centro", "Mesas de noche", "Mesas de comedor", "Mesas auxiliares"],
};

export const colecciones = ["Todas", "Colección Victoria", "Colección Oslo"];

export const coleccionStyles: Record<string, string> = {
  "Colección Victoria": "bg-brand-pink/20 text-black/70",
  "Colección Oslo": "bg-brand-gray/15 text-black/70",
};

export const estadosProducto: EstadoProducto[] = ["Activo", "Descontinuado", "En tránsito"];

export const estadoProductoStyles: Record<EstadoProducto, string> = {
  Activo: "bg-green-100 text-green-800",
  Descontinuado: "bg-black/10 text-black/50",
  "En tránsito": "bg-blue-100 text-blue-800",
};

export function parsePrecio(precio: string): number {
  return Number(precio.replace(/\D/g, "")) || 0;
}

export const productos: Producto[] = [
  {
    codigo: "SOF-001",
    nombre: "Sofá Milán 3 puestos",
    categoria: "Sofás",
    coleccion: "Colección Victoria",
    stock: 12,
    stockObjetivo: 15,
    precio: "$2.450.000",
    proveedor: "Tapizados Andrade",
    estado: "Activo",
  },
  {
    codigo: "SOF-002",
    nombre: "Sofá Nórdico 2 puestos",
    categoria: "Sofás",
    coleccion: "Colección Oslo",
    stock: 3,
    stockObjetivo: 10,
    precio: "$1.980.000",
    proveedor: "Tapizados Andrade",
    estado: "Activo",
  },
  {
    codigo: "COM-001",
    nombre: "Juego de Comedor 6 puestos",
    categoria: "Comedor",
    coleccion: "Colección Victoria",
    stock: 3,
    stockObjetivo: 6,
    precio: "$3.200.000",
    proveedor: "Maderas del Llano",
    estado: "Activo",
  },
  {
    codigo: "MES-001",
    nombre: "Mesa de comedor Roble",
    categoria: "Mesas",
    subcategoria: "Mesas de comedor",
    coleccion: "Colección Victoria",
    stock: 4,
    stockObjetivo: 8,
    precio: "$1.890.000",
    proveedor: "Maderas del Llano",
    estado: "Activo",
  },
  {
    codigo: "MES-002",
    nombre: "Mesa de centro Nórdica",
    categoria: "Mesas",
    subcategoria: "Mesas de centro",
    coleccion: "Colección Oslo",
    stock: 9,
    stockObjetivo: 12,
    precio: "$780.000",
    proveedor: "Maderas del Llano",
    estado: "Activo",
  },
  {
    codigo: "MES-003",
    nombre: "Mesa de noche Roble",
    categoria: "Mesas",
    subcategoria: "Mesas de noche",
    coleccion: "Colección Victoria",
    stock: 18,
    stockObjetivo: 20,
    precio: "$420.000",
    proveedor: "Maderas del Llano",
    estado: "En tránsito",
  },
  {
    codigo: "MES-004",
    nombre: "Mesa auxiliar Redonda",
    categoria: "Mesas",
    subcategoria: "Mesas auxiliares",
    coleccion: "Colección Oslo",
    stock: 6,
    stockObjetivo: 10,
    precio: "$350.000",
    proveedor: "Maderas del Llano",
    estado: "Activo",
  },
  {
    codigo: "CAM-001",
    nombre: "Cama Nórdica Queen",
    categoria: "Camas",
    coleccion: "Colección Oslo",
    stock: 7,
    stockObjetivo: 10,
    precio: "$1.320.000",
    proveedor: "Maderas del Llano",
    estado: "Activo",
  },
  {
    codigo: "CAM-002",
    nombre: "Cama Victoria King",
    categoria: "Camas",
    coleccion: "Colección Victoria",
    stock: 2,
    stockObjetivo: 6,
    precio: "$2.100.000",
    proveedor: "Maderas del Llano",
    estado: "Activo",
  },
  {
    codigo: "SIL-001",
    nombre: "Silla Escandinava",
    categoria: "Sillas",
    subcategoria: "Fijas",
    coleccion: "Colección Oslo",
    stock: 25,
    stockObjetivo: 24,
    precio: "$310.000",
    proveedor: "Metalúrgica Andina",
    estado: "Activo",
  },
  {
    codigo: "SIL-002",
    nombre: "Mecedora Boho Rattan",
    categoria: "Sillas",
    subcategoria: "Mecedoras",
    coleccion: "Colección Victoria",
    stock: 8,
    stockObjetivo: 10,
    precio: "$890.000",
    proveedor: "Rattan y Fibras S.A.S",
    estado: "Activo",
  },
  {
    codigo: "ESP-001",
    nombre: "Espejo Redondo Latón",
    categoria: "Espejos",
    coleccion: "Colección Victoria",
    stock: 15,
    stockObjetivo: 15,
    precio: "$240.000",
    proveedor: "Vidrios y Espejos del Meta",
    estado: "Activo",
  },
  {
    codigo: "ESP-002",
    nombre: "Espejo Ovalado Nórdico",
    categoria: "Espejos",
    coleccion: "Colección Oslo",
    stock: 5,
    stockObjetivo: 12,
    precio: "$260.000",
    proveedor: "Vidrios y Espejos del Meta",
    estado: "Descontinuado",
  },
  {
    codigo: "DEC-001",
    nombre: "Cuadro Decorativo Trío",
    categoria: "Decoración",
    coleccion: "Colección Oslo",
    stock: 10,
    stockObjetivo: 15,
    precio: "$180.000",
    proveedor: "Decoraciones Llano",
    estado: "Activo",
  },
  {
    codigo: "COJ-001",
    nombre: "Set de Cojines Boho",
    categoria: "Cojines",
    coleccion: "Colección Victoria",
    stock: 30,
    stockObjetivo: 25,
    precio: "$95.000",
    proveedor: "Textiles Boho",
    estado: "Activo",
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
