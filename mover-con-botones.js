// Obtencion de la etiqueta del player
let player = document.querySelector(".player");
  
// Posicion inicial del player 
const xInicial = 200;
const yInicial = 400;

// Velocidad a la que se movera
let v = 20;

// Varibles que contendran la pos actual del player
let x = xInicial;
let y = yInicial;

// Con esto posiciono el player en el escenarion con los valores iniciales 
player.style.top = yInicial + "px";
player.style.left = xInicial + "px";

// Esta sera una prueba
// let teclaPresionada = false;

// document.addEventListener("keydown", function(event) {
//   if (event.key === "a") {
//     teclaPresionada = true;
//     console.log("La tecla A está siendo presionada.");
//   }
// });

// document.addEventListener("keyup", function(event) {
//   if (event.key === "a") {
//     teclaPresionada = false;
//     console.log("La tecla A ha sido levantada.");
//   }
// });


// --------------------------------------------------------



document.addEventListener('keydown', function(event) {
  // if (event.key === 'ArrowUp') {
  //   y -= v;
  // } else if (event.key === 'ArrowDown') {
  //   y += v;
  // } else if (event.key === 'ArrowLeft') {
  //   x -= v;
  // } else if (event.key === 'ArrowRight') {
  //   x += v;
  // }

  if (event.key === 'ArrowUp') {
    y -= v;
  } else if (event.key === 'ArrowDown') {
    y += v;
  } else if (event.key === 'ArrowLeft') {
    x -= v;
  } else if (event.key === 'ArrowRight') {
    x += v;
  }

  if (event.key === 'ArrowUp' && event.key === 'ArrowLeft') {
    y -= v;
    x -= v;
  } else if (event.key === 'ArrowDown') {
    y += v;
  } else if (event.key === 'ArrowLeft') {
    x -= v;
  } else if (event.key === 'ArrowRight') {
    x += v;
  }

  // if (event.key === " ") {
  //   for
  //   setInterval(saltar, 10);
  // }

  player.style.top = y + "px";
  player.style.left = x + "px";
});

// document.addEventListener('keyup', function(event) {
//   teclaPresionada = false;
// });

// while(teclaPresionada) {

// }




// -------------------------------------------------------------

// Aqui depende de la tecla presionada movemos el player a un lado u otro
// document.addEventListener('keydown', function(event) {

//   if (event.key === 'ArrowUp') {
//     console.log('Flecha arriba presionada');
//     y -= v;
//     player.style.top = y + "px";

//   } else if (event.key === 'ArrowDown') {
//     console.log('Flecha abajo presionada');
//     y += v;
//     player.style.top = y + "px";
    
//   } else if (event.key === 'ArrowLeft') {
//     console.log('Flecha izquierda presionada');
//     x -= v;
//     player.style.left = x + "px";

//   } else if (event.key === 'ArrowRight') {
//     console.log('Flecha derecha presionada');
//     x += v;
//     player.style.left = x + "px";
//   }
// });

saltar = ()=>{

}