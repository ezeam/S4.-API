"use strict";
const buttonSiguiente = document.querySelector("siguiente");
const chisteContainer = document.querySelector(".chiste-container");
const reportChistes = [];
const buttonValora1 = document.querySelector("valora1");
const buttonValora2 = document.querySelector("valora2");
const buttonValora3 = document.querySelector("valora3");
/*if(!buttonSiguiente){
  throw new Error("Botón no está definido");
}*/
traerChiste();
 function traerChiste() {
    fetch("https://icanhazdadjoke.com/", { headers: {
            'Accept': 'application/json'
        } })
        .then((res) => res.json())
        .then(data => mostrarChiste(data))
        .catch((error) => console.error("Error al traer el chiste:", error));
}
/*console.log("Objeto chiste: ", objetoChiste);*/
function mostrarChiste(chiste) {
    const h5 = document.createElement('h5');
    h5.textContent = chiste.joke;
    const div = document.createElement('div');
    div.appendChild(h5);
    chisteContainer === null || chisteContainer === void 0 ? void 0 : chisteContainer.appendChild(div);
    console.log(h5);
}
console.table(reportChistes);
function siguienteChiste() {
    if (chisteContainer) {
        chisteContainer.innerHTML = '';
    }
    else {
        alert("chisteContainer no está definido");
    }
    traerChiste();
}
function valoracionChistes(chiste) {
    if (buttonValora1) {
        console.log("¿Entras?");
        const valoracion = {
            joke: chiste.joke,
            score: 1,
            //data: 
        };
        reportChistes.push(valoracion);
    }
}
