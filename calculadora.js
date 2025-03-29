const readline = require('readline-sync')

function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return b === 0 ? "Error: No se puede dividir por cero." : a / b
}


function calculadora() {
    let opcion

    do {
        opcion = readline.question("Elige una opcion:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Salir\n ")

        if (opcion === "5") {
            console.log("Hasta la próxima")
            break
        }

        let num1 = parseFloat(readline.question("Ingrese el primer numero:"))
        let num2 = parseFloat(readline.question("Ingrese el segundo numero:"))
        let resultado
        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2)
                break
            case "2":
                resultado = restar(num1, num2)
                break
            case "3":
                resultado = multiplicar(num1, num2)
                break
            case "4":
                resultado = dividir(num1, num2)
                break
            default:
                console.log("Opcion no valida. Intentalo de nuevo.")
                continue
        }

        console.log(`EL RESULTADO ES: ${resultado}`)        
    } while (true)
}

calculadora()
