//FUNCIONES
function aleatorio(max, min){
  return Math.floor(Math.random()*(max - min + 1) + min)
}

function eleccion(jugada){
  if (jugada == 1) {
  resultado = "Piedra (*_*)"
} else if (jugada == 2) {
  resultado = "Papel (*_*)"
} else if (jugada == 3) {
  resultado = "Tijera (*_*)"
} else {
  resultado = "Elección incorrecta :("
}
  return resultado
}

//VARIABLES
let user = 0
let pc = 0
let triunfos = 0
let perdidas = 0

//1. Piedra  2. Papel  3. Tijera

//CICLO WHILE
while (triunfos<3 && perdidas<3){
let pc = aleatorio(1, 3) 
  
user = prompt("Welcome! \n Elije las siguientes opciones: \n 1. Piedra \n 2. Papel \n 3. Tijera ")

alert("Tu elegistes " + eleccion(user))
alert("PC eligió " + eleccion(pc))

//COMBATE
if (pc == user){
  alert("EMPATE")
} else if (user == 1 && pc == 3 || user == 2 && pc == 1 || user == 3 && pc == 2 ){
  alert("GANASTE")
  triunfos++
} else{
  alert("PERDISTE")
  perdidas++
}
}

alert("Ganastes " + triunfos + " veces." + " Perdistes " + perdidas + " veces.")


