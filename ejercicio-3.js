// Quiero que trabajes con estructuras de control de flujo.
// Esta forma complicada de decirlo significa que, al igual que en los juegos, la historia que desarrolles
// debe adaptarse a las respuestas dadas por quien está jugando.
// Para ello, necesitarás algunas estructuras capaces de alterar el flujo de la aplicación,
// como for, while, if y else.
// Todas estas pueden cumplir con este objetivo, dada una cierta condición.

// El if y el else, que ya te he mostrado en los últimos días, son capaces de crear ramificaciones dentro
// de la aplicación para que se tome una u otra acción, dependiendo de la condición proporcionada.

// Los bucles (como for y while) son capaces de transformar una tarea repetitiva en pocas líneas de código,
// sin importar cuántas veces necesites repetir esa tarea.

// Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

// Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.

// Si está en el área de Front-End, si quiere aprender React o aprender Vue.

// Si está en el área de Back-End, podrá aprender C# o aprender Java.

// Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre
// seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack.
// Debes mostrar en pantalla un mensaje específico para cada elección.

// Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.
// Aquí, la persona puede responder N tecnologías, una a la vez.
// Entonces, mientras continúe respondiendo **ok** a la pregunta:
// "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt,
// para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando
// algo sobre la tecnología ingresada.

// Lo importante es que la persona que esté jugando siempre pueda elegir
// qué decisión tomar para aprender y desarrollarse en el área de programación.

// Además, también es esencial que, al final del juego, pueda ingresar tantas
// tecnologías como desee en la lista de aprendizaje.


//AGREGO DEPENDENCIA READLINE-SYNC PARA EJECUTAR PROGRAMA POR CONSOLA
const readline = require('readline-sync')

// BIENVENIDA AL JUEGO
console.log("¡Bienvenido/a al juego de decisiones para tu camino en la programación!")

// PRIMERA ELECCION: FRONT-END O BACK-END
let areaDeProgramacion = readline.question("¿Quieres seguir hacia el area de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End'): ")

if (areaDeProgramacion === "Front-End") {
    const tecnologiaFront = readline.question("¿Quieres aprender React o aprender Vue? (Escribe 'React' o 'Vue'): ")
    if (tecnologiaFront === "React") {
        alert("¡Genial! React es muy demandado y tiene una gran comunidad.")
    } else if (tecnologiaFront === "Vue") {
        console.log("¡Excelente eleccion! Vue es simple y poderoso.")
    } else {
        console.log("Parece que no elegiste una tecnologia valida de Front-End.")
    }
} else if (areaDeProgramacion === "Back-End") {
    const tecnologiaBack = readline.question("¿Quieres aprender C# o aprender Java? (Escribe 'C#' o 'Java'): ")
    if (tecnologiaBack === "C#") {
        console.log("¡Fantastico! C# es muy utilizado en empresas y en desarrollo de videojuegos.")
    } else if (tecnologiaBack === "Java") {
        console.log("¡Buena eleccion! Java es robusto y ampliamente utilizado en el mercado.")
    } else {
        console.log("Parece que no elegiste una tecnología valida de Back-End.")
    }
} else {
    console.log("No elegiste un area valida...")
}

// SEGUNDA ELECCION: ESPECIALIZARSE O SER FULL-STACK
const especializacion = readline.question("¿Quieres seguir especializandote en el area elegida o convertirte en Fullstack? (Escribe 'especializarme' o 'Fullstack'): ")

if (especializacion === "especializarme") {
    console.log(`¡Excelente! Sigue profundizando tus conocimientos en el area de ${areaDeProgramacion}.`)
} else if (especializacion === "Fullstack") {
    console.log("¡Wow! Ser Fullstack te abrira muchas oportunidades y te permitira trabajar en proyectos completos.")
} else {
    console.log("No elegiste una opcion valida, pero seguro encontrarás tu camino.")
}

// TERCER PASO: LISTA DE TECNOLOGÍAS QUE QUIERE APRENDER
const tecnologias = [];
let continuarJuego = true;

while (continuarJuego) {
    const nuevaTecnologia = readline.question("¿Que tecnologia te gustaria aprender?: ")
    tecnologias.push(nuevaTecnologia)

    console.log(`¡Que interesante aprender ${nuevaTecnologia}! Seguro que te sera muy util.`)

    const respuesta = readline.question("¿Hay alguna otra tecnologia que te gustaria aprender? (Escribe 'ok' para continuar o cualquier otra cosa para terminar): ")

    if (respuesta.toLowerCase() !== "ok") {
        continuarJuego = false
    }
}

// MOSTRAR TODAS LAS TECNOLOGIAS INGRESADAS
console.log("¡Qur buen plan de estudios te estas armando! Aqui estan las tecnologias que quieres aprender: ")
console.log("Lista de tecnologias que te gustaria aprender: ")

for (let i = 0; i < tecnologias.length; i++) {
    console.log(`- ${tecnologias[i]}`)
}
