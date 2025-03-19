// ¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? 
// Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!

// Debes crear un pequeño programa que comience con un valor específico predefinido 
// entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

// A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, 
// si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

// Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

 
// Después de que el programa esté funcionando, intenta usar un número aleatorio en 
// lugar de uno predefinido.

const readline = require('readline-sync')

const numeroAdivinado = 8
let intento = ''
let acierto = false

for(let contador = 0; contador < 3; contador ++) {
    intento = readline.question('Intenta adivinar el numero del 1 al 10: ')
    if(intento == numeroAdivinado) {
        console.log(`¡Felicidades, acertaste! El numero es ${numeroAdivinado}`)
        acierto = true
        break
    }
    console.log('Incorrecto, vuelve a intentarlo')
}

if(!acierto) {
    console.log(`Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinado}!`)
}