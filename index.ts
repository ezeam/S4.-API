const buttonSiguiente = document.querySelector("siguiente");
const chisteContainer = document.querySelector(".chiste-container");
const reportChistes: {}[] = [];
const buttonValora1 = document.querySelector("valora1");
const buttonValora2 = document.querySelector("valora2");
const buttonValora3 = document.querySelector("valora3");
let objetoChiste;

//AL PASAR CHISTE COMO PARÁMETRO DE LA FUNCIÓN valoracionChistes ME DICE QUE NO EXISTE. HABRÍA QUE GUARDAR EL OBJETO QUE PASA LA FUNCIÓN traerChiste EN UNA VARIABLE GLOBAL

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

function mostrarChiste(chiste: chisteInterface){
  const h5 = document.createElement('h5');
  h5.textContent = chiste.joke;

  const div = document.createElement('div');
  div.appendChild(h5);
  chisteContainer?.appendChild(div);
  console.log(h5);
}
console.table(reportChistes);

function siguienteChiste(){
  if(chisteContainer){
    chisteContainer.innerHTML = '';
  }
  else{
    alert ("chisteContainer no está definido");
  }  
  traerChiste();
}

function valoracionChistes(chiste: chisteInterface){
  if(buttonValora1){
    console.log("¿Entras?");
    const valoracion = {
      joke: chiste.joke,
      score: 1,
      //data: 
    };
    reportChistes.push(valoracion);
  }
}

