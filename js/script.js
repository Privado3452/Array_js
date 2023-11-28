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

const frutas = ["manzana","pera","platano","fresa"]
document.write("El array de frutas es: "+frutas+"<br>")
