/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.body.style.backgroundColor = "green";
let Carta = document.querySelector("#carta");
Carta.style.backgroundColor = "white";
Carta.style.width = "300px";
Carta.style.height = "465px";
Carta.classList.add("border-primary");
Carta.classList.add("rounded");
Carta.classList.add("m-5");
let paloArriba = document.querySelector("#arriba");
paloArriba.style.fontSize = "100px";
paloArriba.classList.add("mx-3");
let valorCarta = document.querySelector("#valor");
valorCarta.style.fontSize = "100px";
valorCarta.style.textAlign = "center";
let paloAbajo = document.querySelector("#abajo");
paloAbajo.classList.add("float-end");
paloAbajo.style.fontSize = "100px";
paloAbajo.style.transform = "rotate(180deg)";
paloAbajo.classList.add("mx-3");

let palos = ["♦", "♥", "♠", "♣"];
let valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

Carta.addEventListener("click", function() {
  function valorAleatorio() {
    let val = Math.floor(Math.random() * valor.length);

    return valor[val];
  }

  function paloAleatorio() {
    let pal = Math.floor(Math.random() * palos.length);
    if (pal == 0 || pal == 1) {
      paloArriba.style.color = "red";
      paloAbajo.style.color = "red";
    }
    if (pal == 2 || pal == 3) {
      paloArriba.style.color = "black";
      paloAbajo.style.color = "black";
    }
    console.log(pal);
    return palos[pal];
  }

  let palitos = paloAleatorio();
  paloArriba.innerHTML = palitos;
  valorCarta.innerHTML = valorAleatorio();
  paloAbajo.innerHTML = palitos;
});

//window.onload = function() {};
