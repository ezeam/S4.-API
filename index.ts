const buttonSiguiente = document.querySelector(".siguiente");
const chisteContainer = document.querySelector(".chiste-container");
const reportChistes: {}[] = [];
let buttonValora1 = document.querySelector(".valora1");
let buttonValora2 = document.querySelector(".valora2");
let buttonValora3 = document.querySelector(".valora3");
let textoChiste: string = "";
let estadoAlternar = false;
let objetoValoracion: {} = {};
let hayValoracion: boolean = false;

interface chisteInterface{
  joke: string;
}

interface norrisInterface{
  value: string;
} 

traerChiste();
function traerChiste(): void{
   fetch("https://icanhazdadjoke.com/", { headers: {
           'Accept': 'application/json'
       } })
       .then((res) => res.json())
       .then(data => mostrarChiste(data))
       .catch((error) => console.error("Error al traer el chiste:", error));
}

let tempPrintHtml: HTMLElement | null = document.getElementById("meteo");
let iconPrintHtml: HTMLElement | null = document.getElementById("iconPrint");
interface WeatherData {
  main: {
      temp: number;
  };
  weather: Array<{
      icon: string;
  }>;
}

traerMeteo();
function traerMeteo(): void {
  fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=23ebbc592b1e6b4598e259f981fa0834"
  )
      .then((response) => response.json())
      .then((data: WeatherData) => {
          let temperature: number = data.main.temp;
          let tempCelsius: string = (temperature - 273.15).toFixed(1);
          let icon: string = data.weather[0].icon;
          let iconHtml: string = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;
          if (tempPrintHtml) {
              tempPrintHtml.innerHTML = tempCelsius + "ºC";
          }
          if (iconPrintHtml) {
              iconPrintHtml.innerHTML = iconHtml;
          }
      });
}

function traerChisteNorris(): void{
  fetch("https://api.chucknorris.io/jokes/random")
       .then((res) => res.json())
       .then(data => mostrarChisteNorris(data))
       .catch((error) => console.error("Error al traer el chiste de Chuck Norris:", error));
}


function mostrarChiste(chiste: chisteInterface): void{
  const h5 = document.createElement('h5');
  h5.textContent = chiste.joke;
  textoChiste = chiste.joke;

  const div = document.createElement('div');
  div.appendChild(h5);
  chisteContainer?.appendChild(div);
  console.log(h5);
}

function mostrarChisteNorris(data: norrisInterface): void{ 
  const h5 = document.createElement('h5');
  h5.textContent = data.value;
  textoChiste = data.value;

  const div = document.createElement('div');
  div.appendChild(h5);
  chisteContainer?.appendChild(div);
  console.log(h5);
}

function siguienteChiste(): void{
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

  if(hayValoracion){
    reportChistes.push(objetoValoracion);
    console.log("Array de chistes:");
    console.table(reportChistes);
    hayValoracion = false;
  }
}

function valoracionChistes(num: number): {}{
  hayValoracion = true;
  let ahoraFecha: Date = new Date();

  const valoracion = {
    joke: textoChiste,
    score: num,
    data: ahoraFecha,
  };
  objetoValoracion = valoracion;
  return valoracion;
}




