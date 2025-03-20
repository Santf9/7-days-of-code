// ¿Sabes cuando vas al supermercado con una lista de compras y terminas 
// yendo y volviendo por los mismos pasillos hasta completar la lista?

// Necesitas una manzana y vas al área de frutas. El siguiente ítem es una leche 
// y te diriges a los lácteos. Pero luego anotaste una pera, y necesitas regresar 
// de nuevo al área de frutas.

// ¡Después de resolver el desafío de hoy, con certeza no harás más eso!

// Al igual que nuestra lista de compras, es muy común que los programas 
// trabajen con listas de string, números y objetos.
 
// Piensa en cada catálogo de e-commerce que has visto, en la lista de eventos 
// de tu Google Calendar, o incluso en tu bandeja de entrada de correos electrónicos. 
// Todos estos sitios utilizan listas para mostrar información de una manera 
// simple y fácil de entender.

// Además, puedes aprovechar las listas para hacer filtros, ordenaciones 
// y otras funcionalidades muy útiles.
// En este punto, ya debes haber notado que trabajar con estas colecciones 
// es algo que necesitarás dominar, ¿verdad?

// Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa 
// en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, 
// y debes poder responder con "sí" o "no".

// A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, 
// como por ejemplo "zanahoria".


// Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas 
// opciones ya predefinidas, como frutas, lácteos, congelados, 
// dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

// Por último, en caso de que ya no quieras agregar nada más a la lista 
// de compras y respondas "no" a la primera pregunta, se mostrará una lista 
// con todos los ítems agrupados, de la siguiente manera:

// Si añades a tu lista:
// banana, leche en polvo, tomate, 
// leche vegetal, chicle, gominola, 
// manzana, uva, aguacate y leche de vaca.

// El programa debería imprimir, por ejemplo:

// Lista de compras:
// Frutas: banana, tomate, manzana, uva, aguacate
// Lácteos: leche vegetal, leche de vaca, leche en polvo
// Congelados: 
// Dulces: chicle y gominola

//Dependencia readline para imprimir unicamente por consola
const readline = require('readline-sync')

let frutas = []
let verduras = []
let lacteos = []
let dulces = []
let congelados = []
let comida = ''
let categoria = ''

let agregar = 'si' //Valor inicial en "Si" porque la primera vez siempre va a entrar en el while

while(agregar !== 'no') {
    agregar = readline.question('Desea agregar un alimento a tu lista de compras? Responde Si o No: ')
    
    while(agregar !== 'no' && agregar !== 'si') { //Mientras el texto leído sea diferente de "sí" y de "no", mostrar que no fue reconocido y preguntar nuevamente
        console.log('Operacion no reconocida!')
        agregar = readline.question('Desea agregar un nuevo alimento a tu lista de compras? Responde Si o No: ')

    }

    if(agregar === 'si') {
        comida = readline.question('Que comida desea agregar?: ')
        categoria = readline.question('En que categoria encaja esta comida?: ').toLowerCase()
       
        if(categoria === 'frutas') {
            frutas.push(comida)
        } else if(categoria === 'verduras') {
            verduras.push(comida) 
        
        } else if(categoria === 'lacteos') {
            lacteos.push(comida)
        
        } else if(categoria === 'dulces') {
            dulces.push(comida)
        
        } else if(categoria === 'congelados') {
            congelados.push(comida)
            
        } else {
            console.log('Esa categoria no esta definida')
        } 
        
        if(agregar === 'no') {
            console.log('Terminaste de agregar alimentos')
        }
    }    
}

console.log(`Su lista de compras es:\n LISTA DE COMPRAS\n FRUTAS:${frutas}\n LACTEOS:${lacteos}\n DULCES:${dulces}\n CONGELADOS:${congelados}`)