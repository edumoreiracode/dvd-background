const player = document.querySelector(".player");
const playerSize = 100;
const colores = ["red", "green", "blue", "yellow", "pink", "violet", "gray", "orange"];

// La posicion inicial sera la mitad del alto y el ancho del viewport
// Menos la mitad del tamaño de mi player asi queda bien en el centro
const xInicial = (window.innerWidth / 2) - (playerSize / 2);
const yInicial = (window.innerHeight / 2)  - (playerSize / 2);

let x = xInicial;
let y = yInicial;

// Posiciono al player
player.style.top = yInicial + "px";
player.style.left = xInicial + "px";
cambiarColor();
console.log("El color de inicio es" + player.style.backgroundColor);


// Variable que controla el sentido de direccion horizontal
let derecho = false;
let abajo = false;

function movimiento() {
  // El player comenzara moviendose hacia la derecha
  // Cuando llegue al borde derecho de la pantalla la var "derecho" cambiara a "true"
  // Esto para que la condicion anterior no se cumpla y el player pueda ir libremente hacia la izquierda
  // Cuando llegue al borde izquierdo la var "derecho" cambiara a "false" iniciandose nuevamente el ciclo
  if(x < (window.innerWidth - playerSize) && !derecho) {
    x ++;
  } else if(x > 0){
    derecho = true;
    x--;
  } else {
    derecho = false;
  }

  if(y < (window.innerHeight - playerSize) && !abajo) {
    y ++;
  } else if(y > 0){
    abajo = true;
    y--;
  } else {
    abajo = false;
  }

  // y -= 1;
  player.style.top = y + "px";
  player.style.left = x + "px";

  if((x >= (window.innerWidth - playerSize)) || x <= 0 || (y >= (window.innerHeight - playerSize)) || y <= 0) {
    cambiarColor();
  }
}

setInterval(movimiento, 10);

function cambiarColor() {
  let indiceAleatorio = Math.floor(Math.random() * colores.length);
  let colorAleatorio = colores[indiceAleatorio];
  console.log(colorAleatorio);

  if(colorAleatorio !== player.style.backgroundColor) {
    player.style.backgroundColor = colorAleatorio;
  } else {
    cambiarColor();
  }
}