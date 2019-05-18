// cuestion de los bundlers (parcel o webpack), nos da los paths que se usan en el bundle (porque los bundlers los cambian)
import piedraPath from './imgs/piedra.png'
import papelPath from './imgs/papel.png'
import tijeraPath from './imgs/tijera.png'


// ======== Hash maps =====
//ponemos los paths en un mapa
const images = {
  piedra: piedraPath, 
  papel: papelPath, 
  tijera: tijeraPath
}

// llevamos los scores
const score = {
  user: 0,
  computer: 0,
  tie: 0
}

// ==== objetos del DOM =======
// imagenes/botones
const piedra = document.getElementById('piedra')
const papel = document.getElementById('papel')
const tijera = document.getElementById('tijera')

// divs con el texto del contador
const contadorJugador = document.getElementById('contadorJugador')
const contadorMaquina = document.getElementById('contadorMaquina')

// divs con la imagen seleccionada por cada jugardor
const userSelectionDiv = document.getElementById("jugador")
const machineSelectionDiv = document.getElementById("maquina")


//====== Funciones =======

const randIndex =  (limit) => parseInt(Math.random()*(limit+0.9999)) 

const choices = ['piedra', 'papel', 'tijera']

const doComputerChoice = () => choices[randIndex(2)]

const selectWinner = (userChoice, computerChoice) => {
  // caso de empate
  if(userChoice === computerChoice) {
    return 'tie'
  }

  // casos donde el usuario gana
  if(userChoice === 'piedra' && computerChoice === 'tijera') {
    return 'user'
  }

  if(userChoice === 'papel' && computerChoice === 'piedra') {
    return 'user'
  }

  if(userChoice === 'tijera' && computerChoice === 'papel') {
    return 'user'
  }

  // si el usuario no gana, ni empata entonces pierde
  return 'computer'
}

const updateScore = (winner) => {
  score[winner] = score[winner] + 1;
  contadorJugador.innerText = score.user
  contadorMaquina.innerText = score.computer
}

const updateSelections = (userChoice, computerChoice) => {
  // actualiza los divs con la imagenes seleccionadas
  userSelectionDiv.innerHTML = `<img src=${images[userChoice]}>`
  machineSelectionDiv.innerHTML = `<img src=${images[computerChoice]}>`
}

const runGame = (userChoice) => {
  const computerChoice = doComputerChoice()
  const winner = selectWinner(userChoice, computerChoice)
  updateScore(winner)
  updateSelections(userChoice, computerChoice)
}


// ===== listeners ====
piedra.addEventListener('click', () => {
  runGame('piedra')
})
papel.addEventListener('click', () => {
  runGame('papel')
})
tijera.addEventListener('click', () => {
  runGame('tijera')
})










