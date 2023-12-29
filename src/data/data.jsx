import focaccia from "./pizzas/focaccia.jpg";
import m from "./pizzas/margherita.jpg";
import f from "./pizzas/funghi.jpg";
import s from "./pizzas/spinaci.jpg";
import sa from "./pizzas/salamino.jpg";
import pro from "./pizzas/prosciutto.jpg";

const pizzaData = [
  {
    id: 100001,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    id: 100002,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella mozarella, and pepperoni",
    price: 10,
    photoName: m,
    soldOut: false,
  },
  {
    id: 100003,
    name: "Pizza Spinaci",
    ingredients:
      "Tomato, mozarella, spinach, and ricotta cheese mozarella, and pepperoni",
    price: 12,
    photoName: s,
    soldOut: false,
  },
  {
    id: 100004,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: f,
    soldOut: false,
  },
  {
    id: 100005,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni mozarella, and pepperoni",
    price: 15,
    photoName: sa,
    soldOut: true,
  },
  {
    id: 100006,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: pro,
    soldOut: false,
  },
  {
    id: 100007,
    name: "Focaccia 3",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 90,
    photoName: focaccia,
    soldOut: false,
  },
  {
    id: 100008,
    name: "APizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: s,
    soldOut: false,
  },
  {
    id: 100009,
    name: "APizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 100,
    photoName: s,
    soldOut: false,
  },
];

export default pizzaData;
