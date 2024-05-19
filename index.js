var buttonSiguiente = document.querySelector("siguiente");
var chisteContainer = document.querySelector(".chiste-container");
var reportChistes = [];
var buttonValora1 = document.querySelector(".valora1");
var buttonValora2 = document.querySelector(".valora2");
var buttonValora3 = document.querySelector(".valora3");
var textoChiste = "";
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
traerMeteo();
function traerMeteo() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m", { headers: {
            'Accept': 'application/json'
        } })
        .then(function (res) {
        res.json();
        console.log(res);
    })
        //.then(data => mostrarMeteo(data))
        .catch(function (error) { return console.error("Error al traer el meteo:", error); });
}
function mostrarChiste(chiste) {
    var h5 = document.createElement('h5');
    h5.textContent = chiste.joke;
    textoChiste = chiste.joke;
    var div = document.createElement('div');
    div.appendChild(h5);
    chisteContainer === null || chisteContainer === void 0 ? void 0 : chisteContainer.appendChild(div);
    console.log(h5);
}
function siguienteChiste() {
    if (buttonValora1 instanceof HTMLButtonElement) {
        buttonValora1.disabled = false;
    }
    if (buttonValora2 instanceof HTMLButtonElement) {
        buttonValora2.disabled = false;
    }
    if (buttonValora3 instanceof HTMLButtonElement) {
        buttonValora3.disabled = false;
    }
    if (chisteContainer) {
        chisteContainer.innerHTML = '';
    }
    else {
        alert("chisteContainer no está definido");
    }
    traerChiste();
}
function valoracionChistes(num) {
    if (buttonValora1 instanceof HTMLButtonElement) {
        buttonValora1.disabled = true;
    }
    if (buttonValora2 instanceof HTMLButtonElement) {
        buttonValora2.disabled = true;
    }
    if (buttonValora3 instanceof HTMLButtonElement) {
        buttonValora3.disabled = true;
    }
    var now = new Date();
    var valoracion = {
        joke: textoChiste,
        score: num,
        data: now,
    };
    reportChistes.push(valoracion);
    console.log("Array de chistes:");
    console.table(reportChistes);
}
