// Creando un arreglo vacio
let arreglo = []
console.log(arreglo, arreglo.length)

//Creando un arreglo pre-poblado
let arregloPre = ['gato', 'perro', 'dino']
console.log(arregloPre, arregloPre.length)
//Modificando arregloPre
console.log(arregloPre[0])
arregloPre[0] = 'Oscar'
console.log(arregloPre, arregloPre.length)

//Agregar un elemnto al ultimo  indice del arreglo
arregloPre.push('Nuevo elemnto')
console.log(arregloPre)

//Agregando un elemnto en un indice o posición especifica del arreglo
arregloPre[2] = 'Especifico en una posicion'
console.log(arregloPre, `Este es el elemnto --> ${arregloPre[2]}`)

//Agregando un elemnto en una posicion inicial del arreglo con el metodo unshift
arregloPre.unshift('Pedro')
console.log(arregloPre)

//SPlice permite eliminar elemntos el metodo splice recibe dos argumentos donde le primero será el indice de inicio y el segundo el indice de finalización
console.log(`Antes --> ${arregloPre}`)
arregloPre.splice(1,2)
console.log(`Despues --> ${arregloPre}`) //Se recorren los elemntos a los indices de los antiguos elemntos y se reduce la longitud del arreglo



//  ----->    Ejercicio   <-----
/*
Agrega dos de tus animales favoritos al final del arreglo.
Elimina los dos primeros elementos del arreglo.
Reemplaza el último elemento del arreglo con la palabra “último”.*/
arreglo.push('chihuahuas','bears')
console.log(arreglo)
arreglo.splice(0,2)
console.log(arreglo)
arreglo[0] = 'ultimo'
console.log(arreglo)


// iteracion sobre un arreglo
for (let i = (arregloPre.length-1); i >=0; i--){
  console.log(arregloPre[i])
}

//iteracion de un arreglo usando forEach
arregloPre.forEach(elementos => {
  console.log(elementos)
})


// Ejercicio Foreach
//Crea un array con 6 de tus comidas favoritas.
//Con el ciclo que elijas, recorre el array, pero solo imprime los alimentos con un índice par.
let comidasFav = ['chilaquiles 🌶', 'helado 🍦', 'leche 🥛', 'pan 🥖', 'pizza 🍕', 'hot dog 🌭', 'hotcakes 🥞']
comidasFav.forEach(elementos => {
  if (comidasFav.indexOf(elementos)%2 == 0){
    console.log(elementos)
  }
})



//Ejercicio: operaciones comunes en arreglos
let total = 0
const nums = [2, 3, 6, 1, 7, 10]
nums.forEach(numeros => {
  //console.log(numeros, typeof numeros)
  total+=numeros
})
console.log(total)
let totalx2 = 0
console.log(totalx2, 'aqui totalx2')
for (let i =0; i<=(nums.length-1); i++){
  //console.log(nums[i])
  totalx2+=nums[i]
}
console.log(totalx2, 'nuevo valor de totalx2')


//Promedio de los numeros
let suma = 0
const numerosNuevos = [1, 7, 4, 11, 16, 10]
numerosNuevos.forEach( elementos => {
  console.log(`Nuevos elemntos ${elementos}`)
  suma += elementos
})
suma=suma/numerosNuevos.length
console.log(suma)


//Encuentra el número más grande
let currentLargest = 0
for (let i = 0; i<= (numerosNuevos.length-1); i++){
  console.log(numerosNuevos[i])
  if(numerosNuevos[i] > currentLargest){
    currentLargest = numerosNuevos[i]
  }
}
console.log(currentLargest, 'aqui esta currentLargest')