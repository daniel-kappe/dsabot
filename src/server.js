import express from "express";
import {D6, D20, D100} from "./backend/dice";

const app = express();

app.get("/", (request, response) => {
  const rolls = D100.rollDice(100000);
  let rollString = '';
  for (var i = 0; i < 100; i++) {
    rollString += `${i + 1} => ${rolls.filter(number => number == i + 1).length}<br>`;
  }
  return response.status(200).send(`Hello World!<p>${rollString}</p>`);
})

app.listen(3000, () => {
  console.log("Server running on 'http://localhost:3000'")
});
