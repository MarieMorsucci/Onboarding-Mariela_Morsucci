console.log("Probando el link");

// let mama = alert("Por favor acordate de comprar pan")

//let estaLloviendo= prompt("Esta lloviendo?Ingrese si o no")

//confirm("Me queres?");

/*
Nivel de dificultad: bajo
Crea una variable llamada myName y almacena tu nombre en ella:
En su archivo JavaScript cree una variable llamada myName  con su nombre como valor. Pon tu nombre entre comillas, por ejemplo, "Rose". Luego agregue una línea de código 
para imprimir el nombre de la variable en la consola después del mensaje anterior. 

Guarde su archivo JavaScript en su editor. Vuelva a cargar la página HTML en su navegador. Deberías ver tu nombre impreso. Si no, investiga y soluciona 
(haz este paso también para los próximos ejercicios)
Cree una variable llamada myLastName y almacene su apellido en ella.
Crea una variable llamada myAge y guarda tu edad en ella. 
¡Consejo! No utilice comillas para los números.
Crea una variable llamada myPet y guarda el nombre de tu mascota en ella. Si no tienes mascota, puedes inventar un nombre.
Crea una variable llamada petAge y guarda la edad de la mascota en ella.
(Como en el caso anterior, puedes inventar este número si no tienes mascota).
Cree una variable llamada nombre completo y almacene la concatenación de miNombre y miApellido en ella.
Crea una variable llamada PresentationText y guarda en ella un texto compuesto por todas las variables creadas hasta el momento. */

/*
let name = 'Mariela'
let lastName = 'Morsucci'
let myAge = 34
let myPet = 'Falucho'
let petAge = 3

let completeName= name + ' ' +lastName 

let presentationText = 'Hola!! mi nombre es '+completeName + ', tengo '+myAge+' años y tengo un gato que se llama '+myPet+' que tiene '+petAge+' años.'

console.log(presentationText)
*/


/*Nivel de dificultad: Medio

a) Cree una variable sumAges, restAges, productAges, divisionAges y calcule sus respectivas operaciones con las variables myAge y agePet.
b) Cree un objeto llamado estudiante con un mínimo de 5 propiedades, muestre dicho objeto usando console.table() y también muestre cada una de las propiedades del objeto por separado a través de la consola.
c) Crea un objeto llamado pet con un mínimo de 5 propiedades, muestra dicho objeto usando console.table() y también muestra cada una de las propiedades del objeto por separado a través de la consola.
d) Cree un arreglo llamado frutas con un mínimo de 5 elementos y muestre el arreglo completo en la consola y también muestre cada uno de los elementos por separado en la consola.*/


/*A 

let sumAges = myAge + petAge
let restAges =myAge - petAge
let productAges = myAge * petAge
let divisionAges= myAge / petAge

console.log('suma: '+ sumAges+ ', resta: '+restAges+' , producto: '+productAges+ ' y division: '+divisionAges.toFixed(4)) //toFixed es para especificar el numero desp de la coma
*/

//B

// let estudiante = {nombre:'Matias', apellido:'Gomez', edad: 17 , estado: 'soltero', provincia: 'Mendoza'}


// console.table(estudiante)
// console.log(estudiante)
// console.log('el estudiante '+estudiante.nombre +' '+estudiante.apellido+' tiene '+estudiante.edad+' años, es '+estudiante.estado+' y vive en '+estudiante.provincia)


// //C
// let pet = {nombre:'Falucho', animal:'gato', edad: 3 , colorPelo: 'gris', comida: 'pescado'}

// console.table(pet)
// console.log(pet)
// console.log('mi mascota es '+pet.nombre +' y es un '+pet.animal+' tiene '+pet.edad+' años, es de color  '+pet.colorPelo+' y le gusta comer '+pet.comida )


//D)

let frutas = ['banana', 'manzana', 'pera', 'uva', 'durazno']
// console.log(frutas)

// console.log(frutas.toString())

// console.log(frutas.join(' y... '))// concatena con el separador que le pasamos en el argumento

// console.log(frutas.concat())


// console.log(frutas[2])

// frutas2= frutas.pop() //toma solamente el ultimo elemento
// console.log(frutas2.toString())


// console.log(frutas.indexOf('melon')) // da 1 si contiene el elemento o -1 si no lo contiene

// console.log(frutas.includes('manzana')) // true si ocntiene el elemento. false si no




/*Nivel de dificultad: alto

A) Utiliza un símbolo ( ) que permite ingresar una edad en pantalla y compararla con el número 18, una vez hecho esto guarda el resultado en una variable llamada IamAdult y 
muestra un mensaje en la consola que dice: "Soy un adulto" (y el valor de la variable).
B) Crea un arreglo llamado "números" con un mínimo de 5 elementos y muestra el arreglo completo y cada uno de los elementos por separado en la consola.
C) Crea un arreglo llamado "familia" con un mínimo de 5 objetos y muestra el arreglo completo y cada uno de los elementos por separado en la consola.
D) Crea una variable llamada "randomText" formando una frase con el segundo elemento del arreglo de frutas, el cuarto elemento del arreglo de números y la primera propiedad
 del quinto objeto del arreglo de familia.*/

// //A)

//  let edad= prompt('Que edad tienes?')
 
//  if (edad>=18){
//     let IamAdult= edad
//     alert('Soy un adulto de '+IamAdult+' años de edad')

//  }else{alert('Tu no eres adulto')}


//B)
/*
let numeros = [3, 6, 9, 12, 15]
console.log(numeros.toString(' y...'))

for (i=0; i<numeros.length; i++) {
    console.log('hola ' +numeros[i])

   
}

//C)
*/
let familia= ['Mariela Yasmin Morsucci', 'Antu perro bonito', 'Lolita gata negra gordita', 'Falucho gato', 'Ana Maria Leonor medica mama', 'Marito']
console.log(familia.join('....')) 

console.log(familia.shift()) //remueve primer elemento del array
console.log(familia)


console.log(familia.unshift('MarielitaChiquiiii')) //mete ese primer elemento en el array primer elemento del array
console.log(familia)



for( let i=0; i<familia.length;i++){
console.log(familia[i].split(0,4)) 
console.log(familia[i].slice(2,8)) //Corta desde la posicion 2 hasta la 8. si no se pone nada, tira toda la frase

}

/*
//D) Crea una variable llamada "randomText" formando una frase con el segundo elemento del 
//arreglo de frutas, el cuarto elemento del arreglo de números y la primera propiedad
// del quinto objeto del arreglo de familia.*/


let randomText= 'Quiero ser un '+ frutas[1].toString() + ' con ' + numeros[3].toString()+' ojos como '+familia[4].toString()

console.log(randomText)


