// randIndex :: Int -> Int
// limit debe ser un entero
function randIndex(limit)  {
  const randNum = Math.random()// genera un número aleatorio entre 0 y 1
  const limit_ = limit+0.9999 // genera el máximo numero "posible" antes del siguiente entero
  const randResult = randNum*limit_ // multiplica el numero aleatorio por el limite, lo que genera un número entre 0 y limit_
  return parseInt(randResult) // convierte el flotante (Float)  en entero (Int) 
  // todo lo de arriba también se puede escribir como:
  // return parseInt(Math.random()*(limit+0.9999)) // no siempre es necesario generar tantas variables, pero a veces es más claro
}

const choices = ['piedra', 'papel', 'tijeras']

console.log('Este numero siempre sera un índice aleatorio que pueden usar para que la máquina seleccione un índice al azar', randIndex(2))
console.log(choices[randIndex(choices.length - 1)])