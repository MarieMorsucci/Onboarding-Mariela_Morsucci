/*
-------------------------nivel  dificultad: bajo------------------------------------------------------
1. Declaración de funciones
Este primer ejercicio es para aprender a declarar una función. 
En este caso debes declarar una función nombrada llamada 
"agregar" que dentro de su cuerpo, debe ejecutar una 
instrucción que muestre el resultado de 100 x 20 en la consola .



function agregar() {
alert(`El resultado de la funcion es ${20*40}` )
}

agregar();

---------------------------------

2.Llamar/ejecutar funciones.
Ya tenemos la declaración, el siguiente paso es llamar/ejecutar 
la función "agregar". Ejecútalo y comprueba que el resultado se 
muestra en la consola.

-------------------------------

3.Añadiendo parámetros.
Ahora es el momento de agregar parámetros a nuestra función. 
Agrega dos parámetros y llámalos como quieras. Recuerda indicar 
dentro del cuerpo de la función donde irán esos parámetros.

---------------------------


4.Usando argumentos.
Ya hemos agregado parámetros a la declaración de nuestra función,
el siguiente paso es "pasarle argumentos". Para hacer esto, 
cree dos variables como la siguiente en el ejemplo:
sea ​​número1 = 100;
sea ​​número2 = 20;



function multiplicacion(num1, num2){
alert(`la multiplicacion del numero 1 y 2 es ${num1*num2}`)
}

multiplicacion(100,20)

---------------------------------------
5.Agregando el <retorno>.
Con nuestra función nombrada configurada correctamente, es hora de 
cambiar el console.log del cuerpo de la función. 
Cree una variable de resultado dentro del cuerpo de la función que 
almacenará el resultado de 100 x 20 y haga que la función devuelva 
esa variable.


function multiplicacion(num1, num2){
return(`la multiplicacion del numero 1 y 2 es ${num1*num2} y el resultado es con retorno`)
}

alert(multiplicacion(100,20))

-------------------------------


6. Convierta la función nombrada del ejercicio anterior en una 
función anónima y llámela/ejecútela.


let productoAnonimo = function(num1, num2){
    return alert(`El producto con funcion anonima es ${num1*num2}`);
}

productoAnonimo(20,20)





-----------------------Nivel de dificultad: Medio-------------------------------------

1. Cree una función con nombre llamada "saludar" que
recibe un parámetro de cadena que representa un nombre, y
muestra un saludo personalizado usando el nombre proporcionado en la
consola.
Llame/ejecute la función con su propio nombre para verificar que 
funciona correctamente.


function saludo(nombre){
    return(alert(`Hola ${nombre} que bueno que estas aprendiendo progra`))
}

saludo('Marie');
saludo('Pedro')

-------------------------------

2. Crea una función anónima que recibe dos parámetros numéricos y

devuelve el resultado de la multiplicación de ambos.

Llama/ejecuta la función con dos valores diferentes y muestra el resultado a través de la consola.

function producto(num1, num2){
    return(num1*num2)
}

alert('Primer multiplicacion: ' + producto(3,6))
alert('Segundo multiplicacion: '+ producto(5,8))

---------------------------

3. Cree una función con nombre llamada "área" que

recibe dos parámetros numéricos, uno que representa la base y el otro
la altura de un triángulo.

devolver su área.


function areaTriangulo(b,h){
    return(0.5*b*h)
}

alert(`El area del Triangulo es ${areaTriangulo(5,10)} cm2`)

---------------

4. Cree otra función con nombre llamada "perímetro" que
recibe tres parámetros numéricos que representan cada uno de los 
lados de un triángulo, y devuelve el perímetro del triángulo.
¡Consejo! Recuerda las fórmulas para el área y el perímetro de los 
triángulos.


function perimetroTriang(b1,b2,b3){
    return (b1+b2+b3)
}

let p=perimetroTriang(10,10,10)
alert(`El perimetro del triangulo es `+ p)
-------------------------------------------------------

5. Crea una  función que :
-toma dos parámetros numéricos que representan el precio y la cantidad 
de un producto,

- y devuelve el precio total de la compra.
- Si el número de productos es mayor o igual a 10, ==> 
    se aplica un descuento del 10% sobre el precio total.

- Si el número de productos es mayor o igual a 20, ==> 
    se aplica un descuento del 20% sobre el precio total.

- Llame/ejecute la función con diferentes valores de precio y cantidad
 para verificar que funciona correctamente


function compra(px,qx){
    let precio;
    
    if (qx<10){
        precio=qx*px
    }else if((qx>=10)&&(qx<20)){
        precio=0.9*qx*px
    }else(precio=0.8*qx*px)

    return precio
}

let px=prompt('Ingrese precio')
let qx=prompt('Ingrese cantidad a comprar')


alert(`Usted debe abonar $${compra(px,qx)} por su compra`)



6. Cree una función con nombre llamada isAnAdult que

- recibe un parámetro numérico que representa la edad de una persona,

- devuelve un mensaje indicando si la persona es Adulto o no.

        Si la Edad es mayor o igual a 18 "Eres mayor de edad"

        Si la Edad es menor de 18 "No eres adulto"

- Llama a la función con diferentes valores de edad para verificar que
 funciona correctamente.


function isAnAdult(age){
    if(age>=18){
        alert('Eres mayor de edad')
    }else(alert('Tu no eres mayor de edad'))
} 

isAnAdult(15);
isAnAdult(18);
isAnAdult(25);


---------------------------Nivel de dificultad: alto-------------------------


1. Crea una función (declarala como quieras) que:

- toma un parámetro numérico que representa el ingreso anual de una 
persona , y

- les devuelve el impuesto que deben pagar .

    Si Ingresos menores o iguales a $10,000, ==> impuesto del 10% de los ingresos.

    Si Ingresos mayores a $10,000 y menores o iguales a $20,000, ==> impuesto del 15% de los ingresos.

    Si Ingresos mayores a $20,000, ==> impuesto del 20% de los ingresos.

- Utilice condicionales anidados para implementar esta función.

- Llame/ejecute la función con diferentes valores de entrada para verificar que funciona correctamente.


function taxes(balance){
    if(balance<=10000){
        tax=0.1*balance
    }else if((balance >10000)&&(balance <= 20000)){
        tax=0.15*balance
    }else(tax=0.2*balance)
    return tax;
}

alert(`Los impuestos a pagar son ${taxes(8000)}`);
alert(`Los impuestos a pagar son ${taxes(10000)}`);
alert(`Los impuestos a pagar son ${taxes(15000)}`);
alert(`Los impuestos a pagar son ${taxes(22000)}`);

-------------------------------

2.  Cree una función (declárela como desee) para verificar un día que

- recibe un parámetro numérico y

- devuelve un mensaje indicando si es día hábil o no.

        Si el número es 1, 2, 3, 4, 5, mensaje: "Es un día hábil".

        Si el número es 6 o 7, mensaje: "Es fin de semana".

- Utilice la estructura de control de interruptores anidados para implementar esta 
función.

- Llame a la función con diferentes valores de día para verificar que funciona 
correctamente.



function diaHabil(num){
    if ((num>=1)&&(num<=5)) {
        rta= alert(' Es un día hábil')
        
    } else if((num>5)&&(num<8)){
        rta=alert('Es fin de semana')
    }else (rta= alert('El numero ingresado no es valido'))
    
    return rta;
}

num=parseInt(prompt('Ingrese numero de dia de la semana'))
diaHabil(num);

---------------------------------------------------------------------

3.Crea un programa usando una función (declárala como quieras) que toma un parámetro
 que representa Información Personal (ingrésala por teclado). 

- Primero se debe ingresar el Nombre , y

        si viene vacío ==> el programa debe detenerse y mostrar una consola. error 
        con el mensaje "El nombre no puede estar vacío"

- Luego se le debe pedir al usuario que ingrese el Apellido y se debe validar como 
   Nombre en el paso anterior.

- Finalmente se debe solicitar al usuario que ingrese la edad y también se debe 
validar .

- Una vez verificados todos los datos, la función debe guardar todos esos datos en un
 objeto con 3 propiedades : nombre, apellido y edad y mostrarlo a través de la 
 consola.

Para finalizar, la función debe ser llamada/ejecutada y probada con diferentes 
valores.



if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    return false;
  }


function objectPersona(name, lastname, age) {
  if (
    name == null ||
    name.length == 0 ||
    /^\s+$/.test(name) ||
    lastname == null ||
    lastname.length == 0 ||
    /^\s+$/.test(lastname) ||
    age == null ||
    /^\s+$/.test(age)
  ) {
    console.error("Los campos ingresados no pueden estar vacios. Recargue y complete todos los campos");
  } else {
    let persona = {
      nombre: name,
      apellido: lastname,
      edad: age,
    };
    return persona;
  }
}

let name = prompt("Ingrese su nombre");
let lastname = prompt("Ingrese su apellido");
let age = prompt("Ingrese su edad");

console.log(objectPersona(name, lastname, age));
-----------------------------------------------------------

4. Crea un programa que se compone de 3 funciones (declaralas como quieras):

- Primera función de saludo: que toma un parámetro que representa un nombre y 
devuelve una cadena “Hola, mi nombre es [parámetro]”

- 2da función:calcularAge: que toma dos parámetros que representan el año de 
nacimiento y el año actual. Esta función devolverá el resultado del año actual 
menos el año de nacimiento.

- 3ª función: presente: llamar/ejecutar las otras dos funciones y ejecutar una 
alerta con la presentación del usuario

Los datos del usuario deben ser ingresados ​​en pantalla y el resultado final 
también se muestra en pantalla.
*/


function saludo(nombre){
    return(nombre)
}

function calcularAge(anioAct,anioNac){
    if(anioNac>anioAct){
        console.error('Has ingresado mal las fechas. Por favor recarga la pagina e ingresa los datos nuevamente')
    }else{
        let age=anioAct-anioNac
        return(age)
    }
   }

function presente(){
    let hola= saludo(nombre); //encasillo en una variable a la fc. Tengo que ingresar por parametros lo que me va a llegar desde el prompt
   let edad= calcularAge(anioAct,anioNac);
   return alert(`Hola ${hola}`)+ alert(`Tu edad es de ${edad}`)
}

let nombre=prompt('Ingrese nombre')
let anioAct=prompt('Ingrese año actual')
let anioNac=prompt('Ingresa año de nacimiento')
presente(nombre,anioAct,anioNac)
