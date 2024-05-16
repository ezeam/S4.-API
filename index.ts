const button = document.querySelector("button");
let chisteContainer = document.querySelector(".chiste-container");



function traerChiste(){
  fetch("https://icanhazdadjoke.com/", {headers: {
    'Accept': 'application/json'
  }})
  
  .then((res) => res.json())
  .then(data => mostrarChiste(data))
}
traerChiste();

function mostrarChiste(chiste: any){
  const h5 = document.createElement('h5');
  h5.textContent = chiste.joke;

  const div = document.createElement('div');
  div.appendChild(h5);
  chisteContainer?.appendChild(div);
  console.log(h5);
}
function siguienteChiste(){
  chisteContainer.innerHTML = '';
  traerChiste()
}