/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.body.style.backgroundColor = "green";
let Carta = document.querySelector("#carta");
Carta.style.backgroundColor = "white";
Carta.style.width = "350px";
Carta.style.height = "550px";
Carta.classList.add("m-5");
let paloArriba = document.querySelector("#arriba");
paloArriba.style.fontSize = "100px";
let valorCarta = document.querySelector("#valor");
let paloAbajo = document.querySelector("#abajo");
paloAbajo.classList.add("float-end");
//paloAbajo.style.float = "end";
paloAbajo.style.fontSize = "100px";

let palos = ["♦", "♥", "♠", "♣"];
let valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function valorAleatorio() {
  let val = Math.floor(Math.random() * valor.length);
  return valor[val];
}

function paloAleatorio() {
  let pal = Math.floor(Math.random() * palos.length);
  return palos[pal];
}

let palitos = paloAleatorio();
paloArriba.innerHTML = palitos;
valorCarta.innerHTML = valorAleatorio();
paloAbajo.innerHTML = palitos;

window.onload = function() {};
