var buttonSiguiente = document.querySelector("siguiente");
var chisteContainer = document.querySelector(".chiste-container");
var reportChistes = [];
var buttonValora1 = document.querySelector("valora1");
var buttonValora2 = document.querySelector("valora2");
var buttonValora3 = document.querySelector("valora3");
/*if(!buttonSiguiente){
  throw new Error("Botón no está definido");
}*/
traerChiste();
function traerChiste() {
    fetch("https://icanhazdadjoke.com/", { headers: {
            'Accept': 'application/json'
        } })
        .then(function (res) { return res.json(); })
        .then(function (data) { return mostrarChiste(data); })
        .catch(function (error) { return console.error("Error al traer el chiste:", error); });
}
function mostrarChiste(chiste) {
    var h5 = document.createElement('h5');
    h5.textContent = chiste.joke;
    var div = document.createElement('div');
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
        var valoracion = {
            joke: chiste.joke,
            score: 1,
            //data: 
        };
        reportChistes.push(valoracion);
    }
}
