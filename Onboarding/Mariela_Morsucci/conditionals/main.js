//alert('Estamos bien en Conditionals')
console.log("Todo bien");

/*---------------------------Difficulty Level: Low------------------------------------------------------------------

1. Starting from the following example, create a conditional block that evaluates whether the variable 
num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2.

let num1 = 8
let num2 = 5

if (num1>num2){
    console.log(num1)
}else(console.log(num2))

2.Based on exercise 1, now modify the block as follows:

If num1 is greater than num2, print num1 through the console,

if num2 is greater, print num2 and finally

if they are equal, print a string that says “The numbers are equal ” 

let num1 = 5
let num2 = 5

if (num1>num2){
    console.log(num1)
}else if (num1==num2){
    console.log('los numeros son iguales')
}else((console.log(num2)))








3. Based on exercise 1, create a conditional block that evaluates whether these variables are equal or not, 
if so, print a string through the console “The numbers are equal”, otherwise “The numbers are different”


let num1 = 8
let num2 = 8


if (num1 != num2){
    console.log('Los numeros son diferentes')
}else(console.log('Los numeros son iguales'))




4. Starting from the following example, create a conditional block that evaluates whether one of
 these variables is greater than the other; if so, display “The date [variable 1] is greater 
 than [variable 2]” by console, and, If they are the same, print “The dates are the same”
Tip! Use backticks to print via console. 


let date1 = new Date('02/09/2019')
let date2 = new Date('02/9/2019')

  
   console.log(`${date1} is less than ${date2}`)
   

 if (date1 > date2){
    console.log('The date '+ date1 +' is greater than '+date2)
   }else if (date1<date2){
    console.log(`la fecha ${date1} es menor a ${date2}`)
   }else( console.log(`Las fechas ${date2} y  ${date1} son iguales`))
   
   

                                       

5. Now try changing the value of the variables. As in the previous exercises, a string must be printed through the 
console that says if date 1 is greater than date 2 or the opposite.
    Tip! Investigate how the strings compare.

 6. In this case, create a conditional block that evaluates which of the three numbers stored in the variables 
 is the largest. Print a string through the console that says “The number [ ] is the largest”.
   
    let number1 = 10
    let number2 = 21
    let number3 = 19
   
      
    if((number1>number2) && (number1>number3)){
        console.log(`${number1} es mayor`)
    }else if (number2>number3){
        console.log(`El mayor es ${number2}`)
    }else(console.log(`El mayor es ${number3}`))





-----------------------------------------Difficulty Level: Medium------------------------------------------------------------


1. Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. 
And print on the screen in each case:
red: “The color of passion”
blue: “The color of the sea.”
green: “The color of nature”
Tip! Don't forget the break statement 

let response = prompt('Elige un color: rojo, azul, verde').toLowerCase()

switch (response) {
    case "rojo" :
        alert('el color de la pasion')
                break;
    case 'azul':
        alert('el color del mar')
        break;
    case 'verde':
        alert('el color de la naturaleza')
        break;

    default:
        alert('No ingresaste un color valido')
        break;
}


2. Using a switch, create a program that allows you to enter on the screen: 
two numerical values (number from 1 to 100)
an operation (addition, subtraction, multiplication, division)
and print on the screen in each case:
sum: first value + the second
subtraction: first value - the second
multiplication: first value * second
division: first value / second
With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
Tip! Don't forget the break statement 

let num1 = parseInt(prompt("Ingrese primer numero"));
let num2 = parseInt(prompt("Ingrese segundo numero"));
let operacion = prompt(
  "Ingresa numero de la operacion a realizar: 1.SUMA // 2.RESTA // 3. MULTIPLICACION // 4.DIVISION "
);

switch (operacion) {
  case "1":
    alert(`La suma es ${num1 + num2}`);
    break;
  case "2":
    alert(`La resta es ${num1 - num2}`);
    break;
  case "3":
    alert(`La multiplicación es ${num1 * num2}`);
    break;
  case "4":
    alert(`La división es ${num1 / num2}`);
    break;

  default:
    alert(`La operación no es válida. Recargue la página e intente nuevamente`);
    break;
}


3. Starting from the following structure, create a conditional block
that receives 2 objects representing people with the properties: 
name, age, height and print by console in the same console.log:
Which of the two people is the taller?
Which is the oldest?
Tip! You can use nested if or logical operators.

let person = {
       name = Juan,
       age = 39,
       height = 1.69
}

Example Result: "Juan is taller and older than Rosa"

let person1 = {}
person1.name= prompt('Ingrese nombre de la primera persona')
person1.age= parseInt(prompt('Ingrese edad primer persona'))
person1.height =parseFloat(prompt('Ingrese altura de la persona 1'))

console.log(person1)

let person2 = {
        name :'Juan',
        age : 39,
        height : 1.69
    }
    person2.name= prompt('Ingrese nombre de la segunda persona')
    person2.age= parseInt(prompt('Ingrese edad segunda persona'))
    person2.height = parseFloat(prompt('Ingrese altura de la persona 2'))

if (person1.height>person2.height) {
    alert(`${person1.name} es la persona mas alta`)
}else (alert(`${person2.name} es la persona mas alta`))

if (person1.age>person2.age) {
    alert(`${person1.name} es la persona mas grande`)
}else (alert(`${person2.name} es la persona mas grande`))





4. Create a program that allows you to enter on the screen:
your name, age, height and vision.
and print through the console a string “You are qualified to drive”,
For this the person must:
Be at least 18 years old.
Measure more than 110 cm.
Have a vision of at least 8 out of 10.
Tip! Remember prompt( ) to enter data on the screen.

let person1 = {}
person1.name= prompt('Ingrese nombre')
person1.age= parseInt(prompt('Ingrese edad'))
person1.height =parseInt(prompt('Ingrese altura en cm'))
person1.vision =parseInt(prompt('Ingrese vision (del 1 al 10)'))

console.log(person1)

if ((person1.age>=18)&&(person1.height>110)&&(person1.vision>=8)){
    alert('Usted esta habilitado a conduicir')
}else(alert('Usted no esta habilitado a conducir'))



5. Create a program that allows you to enter your age on the screen 
and print it on the screen if you are:
infant (0 to 12 years)
adolescent (13 to 18 years old)
older young (19 to 45 years)
elderly (over 45 years)
Is he really that old? (more than 100 show)
Tip! Remember alert( ) to display data on the screen. 

let age = parseInt(prompt('Ingresa tu edad'))

console.log(age)

if((age>0)&&(age<13)){
    alert("Eres un infante")
}else if ((age>=13)&&(age<19)){
    alert("Eres un adolescente")
}else if((age>=19)&&(age<46)){
    alert("Eres un joven adulto")
} else if((age>=46)&&(age<100)){
    alert("Eres una persona mayor")
}else if((age>=100)){
    alert("Realmente eres tan viejo??")
}else(alert('Los datos ingresados no son validos'))



6. Create a program that allows you to enter only numbers from 1 to 3 
on the screen and then any other numerical data. Print on screen:
1: “The number entered is [ ]”
2: “Twice the number entered is [ ]”
3: “Three times the number entered is [ ]”
another: “That value is not allowed”
Tip! Remember alert( ) to display data on the screen.



let num = prompt("Ingrese numero del 1 al 3");

let op = prompt('Ingresa numero de la operacion a realizar: 1. SABER NUMERO INGRESADO // 2. DOBLE DEL NUMERO // 3.TRIPLE DEL NUMERO');



if((num>=1)&&(num<=3)){
    switch (op) {
        case "1":
          alert(`El numero es ${num}`);
          break;
        case "2":
          alert(`El doble del numero es ${num*2}`);
          break;
        case "3":
          alert(`El triple del numero es  ${num*3}`);
          break;
       }
} else(alert('Ese valor no esta permitido'))




-------------------------------------Difficulty Level: High--------------------------------------------------------------

1. Create a program that allows the following data to be entered on the screen:

Customer name, Pass (vip or normal), Entrance (yes or no).
People who have your name ==> show a welcome message
or VIP pass ==> show a welcome message
If you have a ticket, ask if you want to use it
If affirmative ==> show a welcome message
If negative ==> show farewell message
And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
negative ==> show farewell message
affirmative ==> ask for available money, in case:
More than 1000 ==> show a successful sale and welcome message
Less than 1000 ==> show sales rejection message*/


let nombre = prompt("Ingrese nombre");
let pass = prompt("Ingrese pase VIP o Normal").toLowerCase();
let entrance = prompt("Tienes entrada? Si/No").toLowerCase();


console.log(pass)
console.log(entrance)


if((nombre != null)||(pass=='vip')){
    alert('Bienvenidos!!')
} 

if(entrance=='si'){
    let rta= prompt('Quieres usar tu pase? SI/NO');
    if(rta=='si'){
        alert('BIENVENIDO NUEVAMENTE, USARAS TU PASE')
    }
}else if((nombre=null)||(pass!='vip')||(entrance=='no')){
    
    let respuesta=prompt('Quieres comprar ZONA VIP PREMIUM? SI/NO').toLowerCase();
    
    if(respuesta=='si'){
        let disponible=prompt('cuanto dinero tienes disponible?')
        if (disponible>1000){
            alert('VENTA EXITOSA')
        }else(alert('VENTA RECHAZADA'))
    }
}else(alert('Gracias por Consultarnos!! Las proxima vez será'))




