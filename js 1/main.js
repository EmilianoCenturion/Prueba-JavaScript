/* La consola de JavaScript es una herramienta de depuracion en el navegador web 
Permite ejecutar comandos en JS, ver mensajes de registro y errores, y hacer pruebas interactivas de codigo
*/
console.log("Hola mundo") // Mensaje por consola

/*

Introduccion a las variables

Las variables almacenan datos que pueden ser reutilizados y modificados

- var: Usado historicamente para declarar variables, pero con limitaciones como el hositing, el scope, etc

- let: Introducido en ES6. Permite declarar variables que pueden cambiar y tienen alcance de bloques, lo que mejora el control sobre donde y cuando se puede acceder a la variable

- const: Introducido en ES6. Se utiliza para declarar variables que no se deben reasignar. El valor en const puede ser modificado si es un objeto o array, pero la referencia no puede cambiar
*/

var nombre = 'Anibal';// Variable var, con alcance global o funcion, no tiene bloque

let edad = 35; // Declaracion moderna, con alcance de bloque

const pi =  3.1416; // Declaramos una constante, cuyo valor no puede cambiar una vez asignado y no permite reasignacion

console.log(nombre);
console.log(edad);
console.log(pi);

/* 
==================================
    Tipos de datos primitivos    
==================================

- Numeros:      Valores numericos
- Cadenas:      Texto encerrado en comillas simples o dobles
- Booleanos:    true o false
- null:         Representa un valor intencionalmente vacio
- undefined:    Una variable que fue declarada pero no tiene valor
*/

let numero = 42;

let texto = 'Hola';
 
let verdadero = true;

let vacio = null

let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);

/* 
=================================
           Operadores
==================================

https://www.w3schools.com/js/js_operators.asp

- Aritmeticos:      Usados para realizar operaciones matematicas sobre valores numericos
- De asignacion:    Asignan valores a las variables
- De comparacion:   Se usan para comparar valores y devuelven un resultado booleano (true o false)
- Logicos:          Se usan para combinar expresiones booleanas
- De tipo:          Permiten verificar el tipo de un valor o su relacion con clases/constructores
*/

// Operadores aritmeticos

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Operadores de asignacio 

let x = 10;
console.log(x);

x += 5;
console.log(x);

x-= 2;
console.log(x);

// Operadores de comparacion   

let c = 5;
let d = '5';

console.log(c == d); // true, porque compara solo el valor
console.log(c === d); // false, porque compara el valor y el tipo

// Operadores logicos

let e = true;
let f = false;

console.log(e && f);
console.log(e || f);
console.log(!e);

// Operadores de tipo

console.log(typeof 42); // devuelve el tipo de dato de una variable
console.log(typeof "Holis");
console.log([] instanceof Array); // verifica si un objeto es instacia de una clase

// Operadores de incremento y decremento 

let g = 10;
console.log(g);

g++;
console.log(g);

g--;
console.log(g);

