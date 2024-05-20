var buttonSiguiente = document.querySelector(".siguiente");
var chisteContainer = document.querySelector(".chiste-container");
var reportChistes = [];
var buttonValora1 = document.querySelector(".valora1");
var buttonValora2 = document.querySelector(".valora2");
var buttonValora3 = document.querySelector(".valora3");
var textoChiste = "";
var estadoAlternar = false;
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
    fetch("https://api.open-meteo.com/v1/forecast?latitude=41.3851&longitude=2.1734&hourly=temperature_2m", { headers: {
            'Accept': 'application/json'
        } })
        .then(function (res) { return res.json(); })
        .then(function (data) { return mostrarMeteo(data); })
        .catch(function (error) { return console.error("Error al traer el meteo:", error); });
}
function traerChisteNorris() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (res) { return res.json(); })
        .then(function (data) { return mostrarChisteNorris(data); })
        .catch(function (error) { return console.error("Error al traer el chiste de Chuck Norris:", error); });
}
function mostrarMeteo(data) {
    if (data.hourly && data.hourly.temperature_2m) {
        var temperaturas = data.hourly.temperature_2m;
        var meteoElemento = document.getElementById("meteo");
        if (meteoElemento) {
            meteoElemento.innerHTML = "Temperatura actual: ".concat(temperaturas[0], " \u00B0C");
        }
        else {
            console.error('El elemento en el que intentas imprimir no existe');
        }
    }
    else {
        console.log('Datos de temperatura no disponibles.');
    }
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
function mostrarChisteNorris(data) {
    var h5 = document.createElement('h5');
    h5.textContent = data.value;
    textoChiste = data.value;
    var div = document.createElement('div');
    div.appendChild(h5);
    chisteContainer === null || chisteContainer === void 0 ? void 0 : chisteContainer.appendChild(div);
    console.log(h5);
}
function siguienteChiste() {
    var cont = 0;
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
        alert("El espacio que buscas en el HTML para imprimir no existe");
    }
    if (estadoAlternar) {
        traerChiste();
    }
    else {
        traerChisteNorris();
    }
    estadoAlternar = !estadoAlternar;
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
    var ahoraFecha = new Date();
    var valoracion = {
        joke: textoChiste,
        score: num,
        data: ahoraFecha,
    };
    reportChistes.push(valoracion);
    console.log("Array de chistes:");
    console.table(reportChistes);
}
