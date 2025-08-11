let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
document.getElementById("reiniciar").removeAttribute("disabled");

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("P",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "veces"}`);
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
document.querySelector("#valorUsuario").value = "";
  
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumeroSorteados);
//si ya sorteamos todos los numeros
if (listaNumeroSorteados.length == numeroMaximo){
asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
}  else {



//Si el numero generado esta incluido en la lista   
if (listaNumeroSorteados.includes(numeroGenerado)) {
return generarNumeroSecreto();
} else {
listaNumeroSorteados.push(numeroGenerado)
    return numeroGenerado;
}
}  
}
function condicionesIniciales() {
asignarTextoElemento("h1","juego del numero secreto!");
asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`)
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}
console.log("reiniciarJuego fue llamada");
function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio 
   //inicializar el numerod de intentos
   condicionesIniciales();
     //deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');
     
}

condicionesIniciales();


