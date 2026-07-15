export type Producto = {
  nombre: string;
  categoria: string;
  subcategoria?: string;
  coleccion: string;
  stock: number;
  precio: string;
};

export type PiezaCatalogo = {
  id: string;
  nombre: string;
  categoria: string;
  subcategoria?: string;
  descripcion: string;
  desde: string;
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

export const productos: Producto[] = [
  { nombre: "Sofá Milán 3 puestos", categoria: "Sofás", coleccion: "Colección Victoria", stock: 12, precio: "$2.450.000" },
  {
    nombre: "Mesa de comedor Roble",
    categoria: "Mesas",
    subcategoria: "Mesas de comedor",
    coleccion: "Colección Oslo",
    stock: 4,
    precio: "$1.890.000",
  },
  {
    nombre: "Mesa de centro Nórdica",
    categoria: "Mesas",
    subcategoria: "Mesas de centro",
    coleccion: "Colección Oslo",
    stock: 9,
    precio: "$680.000",
  },
  {
    nombre: "Mesa de noche Roble",
    categoria: "Mesas",
    subcategoria: "Mesas de noche",
    coleccion: "Colección Victoria",
    stock: 14,
    precio: "$390.000",
  },
  { nombre: "Cama Nórdica Queen", categoria: "Camas", coleccion: "Colección Oslo", stock: 7, precio: "$1.320.000" },
  {
    nombre: "Silla Escandinava",
    categoria: "Sillas",
    subcategoria: "Fijas",
    coleccion: "Colección Oslo",
    stock: 25,
    precio: "$310.000",
  },
  {
    nombre: "Mecedora Boho Rattan",
    categoria: "Sillas",
    subcategoria: "Mecedoras",
    coleccion: "Colección Oslo",
    stock: 8,
    precio: "$890.000",
  },
  { nombre: "Espejo Redondo Latón", categoria: "Espejos", coleccion: "Colección Oslo", stock: 15, precio: "$240.000" },
  { nombre: "Set de Cojines Boho", categoria: "Cojines", coleccion: "Colección Oslo", stock: 30, precio: "$120.000" },
  { nombre: "Jarrón Cerámico Artesanal", categoria: "Decoración", coleccion: "Colección Oslo", stock: 20, precio: "$95.000" },
  { nombre: "Juego de Comedor 6 Puestos", categoria: "Comedor", coleccion: "Colección Victoria", stock: 3, precio: "$3.200.000" },
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
