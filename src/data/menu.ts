export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  ingredients: string[];
  spiceLevel?: number;
  variant: "stencil" | "image";
  badge: string;
  eta: string;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "doble-doble",
    name: "Doble Doble",
    price: 40,
    category: "2 carnes",
    description:
      "Dos carnes aplastadas, doble queso americano y cebolla caramelizada. La que pide todo el barrio.",
    ingredients: ["Queso americano", "Cebolla en plancha", "Salsa casa"],
    variant: "stencil",
    badge: "Más pedida",
    eta: "~8 min",
  },
  {
    id: "bacon-cheese",
    name: "Bacon Cheese",
    price: 32,
    category: "Con tocino",
    description:
      "Tocino crocante sobre queso derretido, mostaza tostada en la plancha y pepinillo encurtido en casa.",
    ingredients: ["Tocino", "Mostaza tostada", "Pepinillo"],
    variant: "stencil",
    badge: "Bacon",
    eta: "~7 min",
  },
  {
    id: "classic-cheese",
    name: "Classic Cheese",
    price: 25,
    category: "La base",
    description:
      "Una carne, un queso, pan con mantequilla. El punto de partida y el examen de cualquier plancha.",
    ingredients: ["Pan mantequilla", "Queso", "Sin vueltas"],
    variant: "stencil",
    badge: "Classic",
    eta: "~5 min",
  },
  {
    id: "torito",
    name: "Torito",
    price: 30,
    category: "Picante",
    description: "Chile picante asado, queso y salsa de la casa. Pica de verdad, no de adorno.",
    ingredients: ["Chile asado", "Queso"],
    spiceLevel: 3,
    variant: "stencil",
    badge: "Picante",
    eta: "~7 min",
  },
  {
    id: "triple-smash",
    name: "Triple Smash",
    price: 60,
    category: "Para compartir",
    description:
      "Triple carne, triple queso, doble pan. Para los que llegan con hambre de turno doble.",
    ingredients: ["3 carnes", "3 quesos", "Reto de la casa"],
    variant: "stencil",
    badge: "Reto",
    eta: "~12 min",
  },
  {
    id: "la-trama",
    name: "La Trama",
    price: 45,
    category: "Especial",
    description:
      "Tocino y queso derretido hasta el borde, envuelta en papel aluminio. Solo mientras dure la tanda del día.",
    ingredients: ["Tocino", "Queso derretido"],
    variant: "image",
    badge: "Edición limitada",
    eta: "Quedan pocas",
  },
];
