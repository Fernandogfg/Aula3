let shoppingCart = [
  {
    product: "Leite - Barnabé",
    measure: "Litro",
    qty: 5,
    price: 7.8,
  },
  {
    product: "Alcatra - Fribov",
    measure: "Kg",
    qty: 1.896,
    price: 40,
  },
  {
    product: "Refrigerante - Toca Polar",
    measure: "Pet - 2 Litros",
    qty: 3,
    price: 8.99,
  },
  {
    product: "Arroz - Tio Chicão",
    measure: "Pacote - 1Kg",
    qty: 4,
    price: 5.99,
  },
  {
    product: "Peito de Frango - Hot Chicken",
    measure: "Kg",
    qty: 5,
    price: 16.99,
  },
];
let total = shoppingCart.reduce(
  (acumulativo, produto) => acumulativo + produto.qty * produto.price,
  0
);
console.log(total);
