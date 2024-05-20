const buttonSiguiente = document.querySelector(".siguiente");
const chisteContainer = document.querySelector(".chiste-container");
const reportChistes: {}[] = [];
let buttonValora1 = document.querySelector(".valora1");
let buttonValora2 = document.querySelector(".valora2");
let buttonValora3 = document.querySelector(".valora3");
let textoChiste: string = "";
let estadoAlternar = false;

interface chisteInterface{
  joke: string;
}

interface norrisInterface{
  value: string;
}

traerChiste();
function traerChiste() {
   fetch("https://icanhazdadjoke.com/", { headers: {
           'Accept': 'application/json'
       } })
       .then((res) => res.json())
       .then(data => mostrarChiste(data))
       .catch((error) => console.error("Error al traer el chiste:", error));
}

traerMeteo();
function traerMeteo() {
   fetch("https://api.open-meteo.com/v1/forecast?latitude=41.3851&longitude=2.1734&hourly=temperature_2m", 
   { headers: {
           'Accept': 'application/json'
       } })
       .then((res) => res.json())
       .then(data => mostrarMeteo(data))
       .catch((error) => console.error("Error al traer el meteo:", error));       
}

function traerChisteNorris(){
  fetch("https://api.chucknorris.io/jokes/random")
       .then((res) => res.json())
       .then(data => mostrarChisteNorris(data))
       .catch((error) => console.error("Error al traer el chiste de Chuck Norris:", error));
}

function mostrarMeteo(data: any) {
  if (data.hourly && data.hourly.temperature_2m) {
    const temperaturas = data.hourly.temperature_2m;
    const meteoElemento = document.getElementById("meteo");
    if (meteoElemento) {
        meteoElemento.innerHTML = `Temperatura actual: ${temperaturas[0]} °C`;
    } else {
        console.error('El elemento en el que intentas imprimir no existe');
    }
  } else {
    console.log('Datos de temperatura no disponibles.');
  }
}

function mostrarChiste(chiste: chisteInterface){
  const h5 = document.createElement('h5');
  h5.textContent = chiste.joke;
  textoChiste = chiste.joke;

  const div = document.createElement('div');
  div.appendChild(h5);
  chisteContainer?.appendChild(div);
  console.log(h5);
}

function mostrarChisteNorris(data: norrisInterface){ 
  const h5 = document.createElement('h5');
  h5.textContent = data.value;
  textoChiste = data.value;

  const div = document.createElement('div');
  div.appendChild(h5);
  chisteContainer?.appendChild(div);
  console.log(h5);
}

function siguienteChiste(){
  let cont: number = 0;
  if (buttonValora1 instanceof HTMLButtonElement) {
    buttonValora1.disabled = false;
  }
  if (buttonValora2 instanceof HTMLButtonElement) {
    buttonValora2.disabled = false;
  }
  if (buttonValora3 instanceof HTMLButtonElement) {
    buttonValora3.disabled = false;
  }

  if(chisteContainer){
    chisteContainer.innerHTML = '';
  }
  else{
    alert ("El espacio que buscas en el HTML para imprimir no existe");
  } 
  
  if (estadoAlternar) {
    traerChiste();
} else {
    traerChisteNorris();
}
estadoAlternar = !estadoAlternar;
}

function valoracionChistes(num: number){
  if (buttonValora1 instanceof HTMLButtonElement) {
    buttonValora1.disabled = true;
  }
  if (buttonValora2 instanceof HTMLButtonElement) {
    buttonValora2.disabled = true;
  }
  if (buttonValora3 instanceof HTMLButtonElement) {
    buttonValora3.disabled = true;
  }

  let ahoraFecha: Date = new Date();

  const valoracion = {
    joke: textoChiste,
    score: num,
    data: ahoraFecha,
  };
  reportChistes.push(valoracion);
  console.log("Array de chistes:");
  console.table(reportChistes); 
}



