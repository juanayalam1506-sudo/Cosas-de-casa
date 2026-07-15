export type Producto = {
  nombre: string;
  categoria: string;
  coleccion: string;
  stock: number;
  precio: string;
};

export type PiezaCatalogo = {
  nombre: string;
  categoria: string;
  descripcion: string;
  desde: string;
};

export const categorias = ["Todos", "Mecedoras", "Sala", "Comedor", "Alcoba", "Decoración"];
export const colecciones = ["Todas", "Colección Victoria", "Colección Escandinava", "Colección Boho"];

export const productos: Producto[] = [
  { nombre: "Mecedora Boho Rattan", categoria: "Mecedoras", coleccion: "Colección Boho", stock: 8, precio: "$890.000" },
  { nombre: "Sofá Milán 3 puestos", categoria: "Sala", coleccion: "Colección Victoria", stock: 12, precio: "$2.450.000" },
  { nombre: "Mesa de comedor Roble", categoria: "Comedor", coleccion: "Colección Escandinava", stock: 4, precio: "$1.890.000" },
  { nombre: "Cama Nórdica Queen", categoria: "Alcoba", coleccion: "Colección Escandinava", stock: 7, precio: "$1.320.000" },
  { nombre: "Silla Escandinava", categoria: "Comedor", coleccion: "Colección Escandinava", stock: 25, precio: "$310.000" },
  { nombre: "Closet Modular 3 puertas", categoria: "Alcoba", coleccion: "Colección Victoria", stock: 2, precio: "$2.100.000" },
  { nombre: "Espejo Redondo Latón", categoria: "Decoración", coleccion: "Colección Boho", stock: 15, precio: "$240.000" },
];

export const piezasCatalogo: PiezaCatalogo[] = [
  {
    nombre: "Mecedora a medida",
    categoria: "Mecedoras",
    descripcion: "Elige el tipo de madera, tapizado y color.",
    desde: "$750.000",
  },
  {
    nombre: "Sofá modular personalizado",
    categoria: "Sala",
    descripcion: "Configura tamaño, tela y color a tu gusto.",
    desde: "$2.200.000",
  },
  {
    nombre: "Mesa de comedor a medida",
    categoria: "Comedor",
    descripcion: "Elige madera, forma y medidas especiales.",
    desde: "$1.500.000",
  },
  {
    nombre: "Restauración y tapizado",
    categoria: "Decoración",
    descripcion: "Dale una segunda vida a un mueble que ya tienes.",
    desde: "$350.000",
  },
];
