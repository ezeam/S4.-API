const buttonSiguiente = document.querySelector("siguiente");
const chisteContainer = document.querySelector(".chiste-container");
const reportChistes: {}[] = [];
let buttonValora1 = document.querySelector(".valora1");
let buttonValora2 = document.querySelector(".valora2");
let buttonValora3 = document.querySelector(".valora3");

let textoChiste: string = "";


interface chisteInterface{
  joke: string;
}

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

traerMeteo();
function traerMeteo() {
   fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m", 
   { headers: {
           'Accept': 'application/json'
       } })
       .then(function(res) {
        res.json()
        console.log(res)
       } )
       //.then(data => mostrarMeteo(data))
       .catch((error) => console.error("Error al traer el meteo:", error));       
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

function siguienteChiste(){
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
    alert ("chisteContainer no está definido");
  }  
  traerChiste();
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

  let now: Date = new Date();

  const valoracion = {
    joke: textoChiste,
    score: num,
    data: now,
  };
  reportChistes.push(valoracion);
  console.log("Array de chistes:");
  console.table(reportChistes); 
}


