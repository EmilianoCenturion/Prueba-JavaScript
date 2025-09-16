/*===================================
    Arrays  y Objetos en JavaScript
=====================================
En JavaScript, los arrays y objetos son estructuras de datos fundamentales.

- Los arrays se utilizan para almacenar una lista ORDENADA de elementos
    - Cada elemento de neustro array tiene una posicion o indice
    - Pueden contener cualquier tipo de dato (numeros, strings, booleanos, otros arrays, objetos, funciones, etc)
    - Los elementos no tienen que ser del mismo tipo


- Los objetos son ideales para almacenar o agrupar datos con propiedades clave-valor
    - Los objetos son colecciones con pares clave-valor
    - Las claves son cadenas que identifican cada valor, esto permite un acceso rapido y estructurado a los datos
    - los objetos son utiles cuando queremos representar una entidad con multiples propiedades
    - Accedemos a las propiedades de un objeto a traves de la notacion de punto (objeto.propiedad) o la notacion de corchete (objeto["propiedad"])


Uso principal:  
    - Array como lista ordenada de elementos
    - Objeto como coleccion de pares clave valor

Acceso a datos:
    - Accedemos al array por su indice (array[0])
    - Accedemos al objeto por su clave (objeto.clave / objeto["clave"])

Metodos:
    - En arrays contamos con push(), pop(), map()
    - Metodos personalizados y funciones

Iteracion:
    - forEach(), map(), etc
    - for...in, Object.keys(), Object.values()
*/

// Array
let frutas = ["manzana", "banana", "pera"];

console.log(frutas[0]); //manzana

// Objeto
let estudiante = {
    nombre: "Rodrigo",
    edad: 32,
    ciudad: "Cordoba",
    saludar: function() {
        return `Hola, me llamo ${this.nombre}, soy cantante de cuarteto de ${this.ciudad}`
    }
}

console.log(estudiante)

// Notacion de punto
console.log(estudiante.nombre);

// Notacion de corchetes
console.log(estudiante["ciudad"])

// Accedemos a sus metodos, funciones internas del objeto
console.log(estudiante.saludar())

// Agreganmos una propiedad
estudiante.estilo = "Cuarteto";

// Eliminamos una propiedad
delete estudiante.edad;

/*
==================================
        Metodos de strings
==================================
*/

let saludo = "Hola desde la 334"
for (let i = 0; i < saludo.length; i++){
    console.log(saludo[i])
}

// length: devuelve la longitud del string
console.log("Hola mundo", length)

// charAtIndex: devuelve el caracter en la posicion especificada
console.log("Hola".charAt(3));

// concat: concatenar (unir) strings
console.log("Hola".concat(" ", "Mundo"));
let saludo2 = "Aguante bocaaaaaaaa"
console.log(saludo.concat(" " ,saludo2));

// includes: devuelve true si la subcadena se encuentra en el string 

console.log("JavaScript".includes("script")); // false
console.log("JavaScript".includes("Script")); // true

// startsWith: comprueba si el string comienza con la subcadena

console.log("Hola mundo".startsWith/("Hola")); // true

// endsWith: comprueba si el string termina con el substring

console.log("Hola mundo".endsWith("mundo")); // true

// indexOf: devuelve el indice de la primera aparicion de un substring
console.log("banana".indexOf("a"));

// lastIndexOf: devuelve el indice de la ultima aparicion del substring
console.log("banana".lastIndexOf("a"));

// replace
console.log("Hola mundo".replace("mundo", "division 334"));

// replaceAll: reemplaza todas las aparciones
console.log("1, 2, 3".replaceAll(",", ";"));

// toLowerCase: convierte a minusculas
console.log("AGUANTE JAVASCRIPT VIEJO! NO ME IMPORTA NADA!!".toLowerCase());

// toUpperCase: convierte a mayusculas
console.log("holis, uwu, T.T".toUpperCase());

// trim: elimina espacios en blanco al inicio y al final
console.log("     holis                                   ".trim());

// trimStart: elimina espacios al inicio
console.log("                 holis          ".trimStart());

// trimEnd: elimina espacios al final

console.log("         holis              ".trimEnd());

// slice: extrae parte del string 
console.log("JavaScript".slice(0, 4));
console.log("JavaScript".slice(-4)); // ript


// substring: extrar parte del string, muy parecido a slice, pero no acepta negativos
console.log("JavaScript".substring(4, 10));

// split: divide el string en un array
console.log("rojo,verde,azul".split(","));
console.log("rojo, verde, azul".split(", "));
console.log("Holus".split(""));

// repeat: repite el string
console.log("ji".repeat(3));

// match(regex): devuelve coincidencias con una expresion regular
console.log("abc123".match(/\d+/g));

/* 
==================================
        Metodos de arrays
==================================
*/

//let frutas = ["manzana", "banana", "pera"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// length: devuelve la longitud de un array
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].length);
console.log(frutas.length);

// push: agrega un elemento al final del array

frutas.push("pomelo");
console.log(frutas);
frutas.push("anana", "frambuesa", "sandia");

// pop: elimina el ultimo elemento y lo devuelve
console.log(frutas.pop())

// unshift: agrega un elemento al inicio del array 
frutas.unshift("cereza")

// shif: elimina el primer elemento y lo devuelve
console.log(frutas.shift());

// concat: concatena arrays:
let ingredientes = ["avena, semillas, maca"];
console.log(frutas.concat(ingredientes));
console.log([1, 2].concat(3, 4));

// join: une los elementos en un string
console.log([1, 2, 3].join("-"));

// slice: extrae una copia parcial del array
console.log([1, 2, 3, 4].slice(1, 3));

// splice: modifica el array in situ, puede borrar y agregar
const arr = [1, 2, 3];
arr.splice(1, 0, "dos"); // primer parametro (obligatorio) posicion en la que vamos a eliminar o añadir algo, segundo parametro es la cantidad de elementos a eliminar desde esa posicion, el tercer parametro son los elementos que queres insertar en esa posicion
console.log(arr); // [1, 'dos', 2, 3]

const verduras = ["tomate", "lechuga", "albahaca"];
verduras.splice(1, 0, "rucula");
console.log(verduras);

// indexOf: devuelve la primer posicion del elemento
console.log([1, 2, 3].indexOf(2));
console.log([1, 2, 3].indexOf(4)); // si no se encuentra, devuelve -1

// lastIndeOf: devuelve la ultima poscion del elemento 
console.log([1,2,3,4,5,2,3,4,5,1,2].lastIndexOf(4));

// includes: devuelve true si el elemento existe
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
