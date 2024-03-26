/*
----------------------Nivel de dificultad: bajo---------------------------------------
1. Usando un bucle "for", cree un programa que permita el ingreso de un número 
entre 1 y 100 a través de un mensaje , luego imprima a través de la consola todos
los números que están entre el número ingresado y 0 (es decir, en orden descendente) .

Supongamos que el número introducido es 5. Este sería el resultado:

5
4
3
2
1
0
*/

// let x= parseInt(prompt('Ingrese un numero de 1 a 100'))

// if ((x>0)&&(x<=100)){
//     let num =x

// for (let index = 0; index<num+1; index++) {

//     console.log(`${num-index}`)
// }

// }else(alert('El numero ingresado esta fuera de rango'))

/*
2. Usando un bucle "for", cree un programa que permita la entrada de un número a 
través de un mensaje entre 1 y 10, y muestre a través de la consola su tabla de 
multiplicar (solo los primeros 10 múltiplos).
Supongamos que el número ingresado es 5. Este sería el resultado:

1x5=5
2x5=10
3x5=15
4x5=20
5x5=25
6x5=30
7x5=35
8x5=40
9x5=45
10x5=50


*/

// let x= parseInt(prompt('Ingrese un numero del 1 a 10'))

// if ((x>0)&&(x<=10)){
//     let num =x

// for (let index = 1; index<11; index++) {

//     console.log(`${num} x ${index} =${num*index}`)
// }

// }else(alert('El numero ingresado esta fuera de rango'))

/*




3. Usando un bucle " while ", cree un programa que permita la entrada de números a 
través de un mensaje. Los números deben sumarse (acumularse) en una variable 
resultante. La entrada de números finalizará cuando el usuario ingrese un 0. 
Al final, muestre el valor de la variable suma a través de la consola.

Supongamos que ingresó 1, luego 3 y luego 0. Este sería el resultado: 4 . 
¡Consejo! Tenga cuidado, recuerde que el mensaje devuelve una cadena.


*/

// let num = parseInt(prompt("Ingrese un numero"));
// let resultado = 0;

// while (num != 0) {
//   resultado = resultado + num;
//   num = parseInt(prompt("Ingrese otro numero"));
// }

// console.log(`La suma de los numeros ingresados es ${resultado}`)

/*

4. Usando ahora un bucle "do while" y siguiendo las mismas instrucciones del 
ejercicio anterior, visualiza en la consola, el valor de la variable que acumula
 la suma de los números ingresados.

Supongamos que ingresaste 1, luego 3 y luego 0. Este sería el resultado: 4

¡Consejo! use comillas invertidas para esto.
*/

// let num = parseInt(prompt("Ingrese un numero"));
// let resultado = 0;

// do {
//     resultado = resultado + num;
//     console.log(`La suma de los numeros ingresados es ${resultado}`)
//     num = parseInt(prompt("Ingrese otro numero"));

// } while (num != 0);
// console.log(`Ingresaste O. El resultado final de la suma es ${resultado}`)

/*

5. Usando un bucle "for in", crea un objeto con al menos 5 propiedades, haz un 
programa que recorra dicho objeto y solo muestre todas las claves de sus propiedades
 en la consola.

En la consola debería verse así:

nombre

apellido

origen

estudios

​​​​​​

*/

// let mascota ={
//     nombre: 'Falucho',
//     edad : 2,
//     raza: 'gato',
//     pelaje: 'gris',
//     comida: 'pescado'
// }

// for (const key in mascota) {
//     if (Object.hasOwnProperty.call(mascota, key)) {

//         console.log(key) //imprime las primary keys

//         console.log(mascota[key]) //imprime los values de las key

//     }
// }

/*

6. ​Usando un bucle "for in", cree un programa que se ejecute a través del objeto 
creado en el ejercicio anterior y solo muestre los valores de cada una de las claves
en la consola. 

Realizado en el código del púnto anterior



-------------------------------------Nivel de dificultad: Medio------------------------------


1. Usando el bucle que consideras, vamos a utilizar la variable que almacenó la suma
 de los números en el ejercicio 3 como "número secreto". El nuevo programa permitirá
  ingresar números a través de un mensaje hasta que el número ingresado sea igual al 
  guardado en la variable del ejercicio #3.
  -Si el valor ingresado es mayor que el número "secreto", notifica al usuario a través 
de la consola ("el número ingresado es mayor que el secreto", lo mismo si el valor es menor.

-Así sucesivamente hasta que el usuario adivine el número secreto. Finalmente, muestra un 
mensaje de felicitación en pantalla y te indica cuántos intentos has realizado 
("¡Has acertado! El número secreto era <número> y has hecho <x> intentos"

*/

// //let numSecreto = resultado
// let numSecreto = Math.ceil(Math.random()*10)
// console.log(numSecreto)
// let i=0
// let num;

// do {
//     num = prompt('Adivine el numero del 1 al 10!! ')
//     i=i+1
//     if(num>numSecreto){
//         alert('El numero es mayor al secreto')
//     }else if(num<numSecreto){
//         (alert('El numero es menor al secreto'))
//     }

// } while (num!=numSecreto)

// alert(`Has acertado!! El numero secreto era ${numSecreto} y acertaste en tu intento numero ${i}`)

/*

--------------------------------------------------------

2. Usando el bucle que consideres correcto, crea un programa que reciba un número 
a través de un mensaje y muestre todos sus divisores (divisores)  a través de la 
consola.

- Consejo : DIVISORES/DIVISORES: son todos números naturales que dividen exactamente
 a otro número natural. Ejemplo: “Los divisores de '15' son: 1, 3, 5 y 15. 
 (La división de '15' entre cualquiera de estos números es exacta)

- Supongamos que se ingresó 50. Este sería el resultado 50, 25, 10, 5, 2, 1 ¡
Consejo! recordar o investigar al operador %
*/

// let num=prompt('Ingrese un numero')
// let divisores=[];

// for (let index = 1; index < num+1; index++) {
//     if(num%index ==0){
//     divisores.push(index);
//     }
// }

// console.log(`Los divisores de ${num} son ${divisores.join(', ')}`)

/*
-----------------------------------------------

3. Teniendo en cuenta la función de timbre, crea un bucle (el que consideres) que muestre una
 cadena a través de la consola que a su vez concatene la cadena que devuelve la función tantas 
 veces como el número que el usuario ingresa en el teclado.

Por ejemplo, si el usuario ingresa el número 5, el resultado debería ser:
Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

función Campana() {

     console.log("Ding Dong");

     devuelve "Ding Dong",

}

*/

// function campana(){
//     return ('Ding Dong')
// }

// let num=prompt('Ingrese cuantas veces tocara la campana');
// let sum=[];

// for (let index = 0; index < num; index++) {
//     sum.push(campana());
// }

// console.log(sum.join(', '))

/*
---------------------------------------------------------------------------------------

4. Partiendo de las constantes dateLimit y fechas , haz un bucle (el que consideres)
 que muestre en la consola las fechas del array que sean mayores o iguales a la 
 fecha almacenada en la constante dateLimite .

- límite de fecha constante = "1997-8-3"

- fechas constantes = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]


*/
// let dateLimit = new Date("1997-8-3")
// let fechas = [new Date("1997-8-3"),new Date("1998-03-02"),new Date("1973-07-15"),new Date("2024-10-31"),new Date("2081-1-9")]
// let array=[]

// for (let index = 0; index < fechas.length; index++) {
//     if(fechas[index]>=dateLimit){
//         array.push(fechas[index])

//     }
//   //console.log(fechas[index]);

// }

// console.log(array.join(' \n  '));

/*

------------------------------------------------------------------------

5. Usando un bucle "for of", cree una matriz de cadenas con colores e imprima 
cada uno de los colores incluidos en la matriz a través de la consola.

En la consola debería verse así (por ejemplo):

Rojo

Verde

Azul

Violeta

Marrón

Negro

Blanco

*/

// let colores = ['Rojo', 'Verde','Azul', 'Violeta','Marron','Negro','Blanco']
// for (const iterator of colores) {
//     console.log(iterator)
// }

/*

---------------------------------------------------------------

6. Ahora toma como referencia el bucle del ejercicio anterior y colócalo dentro 
de una función para que realice la misma tarea pero pueda reutilizarse tantas 
veces como sea necesario sin tener que reescribir el código del bucle.

*/

// function colours(){
//     let colores = ['Rojo', 'Verde','Azul', 'Violeta','Marron','Negro','Blanco']
//     for (const iterator of colores) {
//          console.log(iterator)
//     }
// }

// colours();
// colours();
/*

----------------------------------------

7. Usando un bucle "for of", crea un arreglo con 5 números y haz un programa que 
recorra ese arreglo y muestre el doble de cada uno de los elementos, en la
 consola.

En la consola debería verse así:

el número es 5 y su doble es 10
el número es 7 y su doble es 14
el número es 1 y su doble es 2
el número es 3 y su doble es 6
el número es 50 y su doble es 100

*/

// let arrayNum = [5,6,7,8,9]
// for (const iterator of arrayNum) {
//     console.log(`El número es ${iterator} y su doble es ${iterator*2}`)
// }

// //cada elemento del array es el generico iterator

//
/*


---------------------------------------------------------------------------------------
8. Usando el bucle que creas correcto crea un array con al menos 4 objetos con 
4 propiedades, cada uno de esos objetos creados debe representar a un miembro de un grupo 
familiar
(pueden ser personas ficticias).

Luego haz un programa (al decir programa la intención es que no sea solo el bucle, sino una función
     que contenga el bucle) que muestre un mensaje de presentación para cada elemento del array a través
     de la consola.

En la consola debería verse como el ejemplo.

- Hola, soy María López (madre) y tengo 40 años.
Hola, soy Juan Perez (padre) y tengo 38 años.
Hola, soy Romina Perez (hija) y tengo 13 años.
Hola, soy Tomás Perez (hijo) y tengo 10 años.

- Modelo de objetos

-{nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre'}

*/

// let obj1 = { nombre: "Juan", apellido: "Pérez", edad: 38, miembro: "padre" };
// let obj2 = { nombre: "Marta", apellido: "Lopez", edad: 36, miembro: "madre" };
// let obj3 = { nombre: "Romina", apellido: "Pérez", edad: 18, miembro: "hija" };
// let obj4 = { nombre: "Dante", apellido: "Pérez", edad: 14, miembro: "hijo" };

// let array = [];
// array.push(obj1, obj2, obj3, obj4);
// console.log(array);

// for (const iterator of array) {
//   //console.log(iterator);
//   for (const key in iterator) {
//     if (Object.hasOwnProperty.call(iterator, key)) {
//       console.log(
//         `Hola, soy ${iterator.nombre} ${iterator.apellido}, soy ${iterator.miembro} y tengo ${iterator.edad} años `
//       );
//     }
//   }
// }

//Me meto primero en el for of para recorrer el array y desp en un for in para recorrer el objeto
/*

--------------------------------------Nivel de dificultad: alto---------------------
 
1. Utilizando el bucle que consideres, crea un programa que permita el ingreso de números en la pantalla 
a través de un aviso y calcula la suma de los números pares por un lado y los números impares por el otro.

La entrada de datos finaliza cuando el usuario ingresa un 0. 

En la consola debería verse así (por ejemplo):

Número par: 38

Números impares 30

*/

// let num = parseInt(prompt("Ingrese un numero"));
// let sumPar = 0;
// let sumImpar = 0;
// while (num != 0) {
//   if (num % 2 == 0) {
//     sumPar = sumPar + num;
//   } else if (num % 2 == 1) {
//     sumImpar = sumImpar + num;
//   }

//   num = parseInt(prompt("Ingrese otro numero"));
// }

// console.log(
//   `Ingresaste O. El resultado final de la suma de numeros pares es ${sumPar} e impares ${sumImpar}`
// );


/*

2. Usando el bucle que creas que es correcto, crea una matriz de 10 números y 
crea un programa que imprima el número más grande de la matriz en la pantalla
*/

let array=[]; 
let posMayor; 
for (let index = 0; index < 10; index++) {
    num= parseInt(prompt('Ingrese un numero'))
    array.push(num)
}
console.log(array)

let numMayor=0;

//function maximoValor(n){
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > numMayor) {
            numMayor = array[i]
            posMayor = i
             
        }
          
        console.log(numMayor)
      }

console.log(`El numero mas grande de la matriz es el valor ${array[posMayor]} en la posicion ${posMayor}` )