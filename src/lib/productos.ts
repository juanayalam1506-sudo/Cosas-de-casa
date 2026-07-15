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

export const productos: Producto[] = [];

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
