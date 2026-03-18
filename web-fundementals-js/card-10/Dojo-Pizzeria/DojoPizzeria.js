function pizzaOven(crust, sauce, cheeses, toppings) {
  var pizza = {};
  pizza.crust = crust;
  pizza.sauce = sauce;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var p1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"],
);
var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"],
);
var p3 = pizzaOven(
  "thin crust",
  "pesto",
  ["gouda", "parmesan"],
  ["sun-dried tomatoes", "artichokes"],
);
var p4 = pizzaOven(
  "stuffed",
  "bbq",
  ["cheddar", "gouda"],
  ["pulled chicken", "red onion", "cilantro"],
);

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// Bonus

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// do the same as pick but for arrays (cheeses , toppings)
const pickMany = (arr, min, max) => {
  var count = min + Math.floor(Math.random() * (max - min + 1));
  var shuffled = arr.slice().sort(function () {
    return Math.random() - 0.5;
  });
  return shuffled.slice(0, count);
};

function randomPizza() {
  var crusts = [
    "deep dish",
    "hand tossed",
    "thin crust",
    "stuffed",
    "flatbread",
  ];
  var sauces = ["traditional", "marinara", "pesto", "bbq", "white garlic"];
  var cheeses = [
    "mozzarella",
    "feta",
    "gouda",
    "parmesan",
    "cheddar",
    "ricotta",
  ];
  var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "sun-dried tomatoes",
    "artichokes",
    "pulled chicken",
    "bacon",
    "jalapeños",
  ];

  return pizzaOven(
    pick(crusts),
    pick(sauces),
    pickMany(cheeses, 1, 3),
    pickMany(toppings, 2, 4),
  );
}

var random1 = randomPizza();
var random2 = randomPizza();

console.log("random pizza 1 :", random1);
console.log("random pizza 1 :", random2);
