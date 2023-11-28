// acceder a los elementos Array
document.write("<H3>ELEMENTOS DE UN ARRAY</H3>")
const numbers = [1, 2, 3, 4, 5]

document.write("El arreglo en su primera posiscion es" +numbers[0]+"<br>")

document.write("El arreglo en su primera posiscion dos" +numbers[2]+"<br>")

// usar variables para acceder a los elementos de un array

let index = 2

document.write("la variable index corresponde a: "+numbers[index]+"<br>")

//Modificar los elementos de un Array


numbers[0] = 10
numbers[2] = 30


document.write("la variable index corre: "+numbers[index]+"<br>")

// Longitud de un array
document.write("<H3>LA LONGITUD DE UN ARRAY</H3>")

const frutas = ["manzana"," pera","platano","fresa"]
document.write("El array de frutas es: "+frutas+"<br>")
document.write("El array de frutas tiene una fruta: "+frutas[2]+"<br>")
//  cortar su longitud asignando un nuevo valor a la propiedad

frutas.length = 2
document.write("El array de frutas tiene: "+frutas+"<br>")

document.write("<H3>METODOS DE ARRAY</H3></H3>")

// El método .push() nos permite añadir un elemento al final de un array
frutas.push("naranja")
document.write("El array de frutas tiene: "+frutas+"<br>")
 // ["plátano", "fresa", "naranja"]
 // el método .push() devuelve la nueva longitud del array:
frutas.length= 2 // 2

const newLength = frutas.push("naranja")
document.write("El array de frutas tiene: "+newLength+"<br>") // 3
console.log(frutas) // ["plátano", "fresa", "naranja"]

//El método .pop() elimina y devuelve el último elemento de un array
const ultimaFruta = frutas.pop()

document.write("El array de frutas tiene: "+frutas+"<br>")
document.write("El array de frutas tiene: "+ultimaFruta+"<br>")
/*El método .shift() elimina y devuelve el primer elemento de un array. 
Es lo mismo que .pop(), pero con el primer elemento en lugar del último*/
const primeraFruta = frutas.shift()

document.write("El array de frutas tiene: "+frutas+"<br>")
document.write("El array de frutas tiene: "+primeraFruta+"<br>")

/*El método .unshift() añade un elemento al principio de un array. 
Es lo mismo que .push(), pero con el primer elemento en lugar del último*/

frutas.unshift("manzana")
document.write("El array de frutas tiene: "+frutas+"<br>")


//Podemos concatenar dos arrays usando el método concat().


const number = [1, 2, 3]
const number2 = [4, 5]

const allNumbers = number.concat(number2)
document.write("El array de numeros tiene: "+allNumbers+"<br>")
