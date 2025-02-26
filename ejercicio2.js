// Desarrollar un programa simulando una de esas aplicaciones. 
// Debe pedir al usuario responder 3 preguntas:

// - ¿Cuál es tu nombre?
// - ¿Cuántos años tienes?
// - ¿Qué lenguaje de programación estás estudiando?

// A medida que se hagan las preguntas, la persona que esté usando el programa 
// debe responder cada una de ellas.

// Al final, el sistema mostrará el mensaje:

// "Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

// Observa que cada información entre [] es una de las respuestas dadas 
// por la persona.

//AGREGO DEPENDENCIA READLINE-SYNC PARA EJECUTAR PROGRAMA POR CONSOLA
const readline = require('readline-sync')

let nombre = readline.question('Cual es tu nombre?:')
let edad = readline.question('Cual es tu edad?:')
let lenguaje = readline.question('Que lenguaje estas estudiando?:')

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`)

//Tengo otro ejercicio adicional para ti.
//Vas a complementar el código para que, después de mostrar el mensaje anterior, 
//el programa pregunte:

//¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

//Y luego, dependiendo de la respuesta, debería mostrar 
// uno de los siguientes mensajes:

// 1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.

// 2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?

// Pregunta adicional opcional
let respuesta = readline.question(`¿Te gusta estudiar ${lenguaje}? Responde con el numero 1 para SI o 2 para NO:`);

// Evaluar la respuesta del usuario
if (respuesta == "1") {
    console.log("Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == "2") {
    console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    console.log("Por favor, responde con 1 o 2.");
}