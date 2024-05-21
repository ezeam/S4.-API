var buttonSiguiente = document.querySelector(".siguiente");
var chisteContainer = document.querySelector(".chiste-container");
var reportChistes = [];
var buttonValora1 = document.querySelector(".valora1");
var buttonValora2 = document.querySelector(".valora2");
var buttonValora3 = document.querySelector(".valora3");
var textoChiste = "";
var estadoAlternar = false;
var objetoValoracion = {};
traerChiste();
function traerChiste() {
    fetch("https://icanhazdadjoke.com/", { headers: {
            'Accept': 'application/json'
        } })
        .then(function (res) { return res.json(); })
        .then(function (data) { return mostrarChiste(data); })
        .catch(function (error) { return console.error("Error al traer el chiste:", error); });
}
var tempPrintHtml = document.getElementById("meteo");
var iconPrintHtml = document.getElementById("iconPrint");
traerMeteo();
function traerMeteo() {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=23ebbc592b1e6b4598e259f981fa0834")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var temperature = data.main.temp;
        var tempCelsius = (temperature - 273.15).toFixed(1);
        var icon = data.weather[0].icon;
        var iconHtml = "<img src=\"https://openweathermap.org/img/wn/".concat(icon, ".png\" alt=\"Weather icon\">");
        if (tempPrintHtml) {
            tempPrintHtml.innerHTML = tempCelsius + "ºC";
        }
        if (iconPrintHtml) {
            iconPrintHtml.innerHTML = iconHtml;
        }
    });
}
function traerChisteNorris() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (res) { return res.json(); })
        .then(function (data) { return mostrarChisteNorris(data); })
        .catch(function (error) { return console.error("Error al traer el chiste de Chuck Norris:", error); });
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
    reportChistes.push(objetoValoracion);
    console.log("Array de chistes:");
    console.table(reportChistes);
}
function valoracionChistes(num) {
    var ahoraFecha = new Date();
    var valoracion = {
        joke: textoChiste,
        score: num,
        data: ahoraFecha,
    };
    objetoValoracion = valoracion;
    return valoracion;
}
