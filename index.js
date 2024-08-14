const player = document.querySelector("#dvd");
const svgStyle = document.querySelector("#dvd defs style");
const svgContent = document.querySelector("#dvd defs style").textContent;
const xSize = 250;
const ySize = 110.094;
const colores = ["#ff0000", "#ff4000", "#ff8000", "#ffbf00", "#ffff00", "#bfff00", "#80ff00", "#40ff00", "#00ff00", "#00ff40", "#00ff80", "#00ffbf", "#00ffff", "#00bfff", "#0080ff", "#0040ff", "#0000ff", "#4000ff", "#8000ff", "#bf00ff", "#ff00ff", "#ff00bf", "#ff0080", "#ff0040", "#ff0000"];
const v = 5;

let colorAnterior;

console.log(svgContent);


// La posicion inicial sera la mitad del alto y el ancho del viewport
// Menos la mitad del tamaño de mi player asi queda bien en el centro
const xInicial = (window.innerWidth / 2) - (xSize / 2);
const yInicial = (window.innerHeight / 2)  - (ySize / 2);

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
  if(x < (window.innerWidth - xSize) && !derecho) {
    x ++;
  } else if(x > 0){
    derecho = true;
    x--;
  } else {
    derecho = false;
  }

  if(y < (window.innerHeight - ySize) && !abajo) {
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

  if((x >= (window.innerWidth - xSize)) || x <= 0 || (y >= (window.innerHeight - ySize)) || y <= 0) {
    cambiarColor();
  }
}

setInterval(movimiento, v);

function cambiarColor() {
  let indiceAleatorio = Math.floor(Math.random() * colores.length);
  let colorAleatorio = colores[indiceAleatorio];
  
  console.log(colorAleatorio);

  
  if(colorAleatorio !== colorAnterior) {
    svgStyle.textContent = ".cls-1{fill:" + colorAleatorio + ";fill-rule:evenodd;}"
    colorAnterior = colorAleatorio;
  } else {
    cambiarColor();
  }
}