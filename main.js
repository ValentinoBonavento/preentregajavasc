class Persona {
    constructor(peso, intensidad, actividad) {
        this.peso = peso;
        this.intensidad = intensidad;
        this.actividad = actividad;
    }
}
const arrayPersonas = []

let pesoPerder = prompt("Cuantos kilos quieres perder")
while (isNaN(pesoPerder) || pesoPerder < 1 || pesoPerder > 70) {
    alert("Ingresar valores numericos entre el 1 y 70")
    pesoPerder = prompt("Cuantos kilos quieres perder")
}

let intensidad = prompt("Elige la intensidad de la actividad fisica \n1) Intensa\n2) Leve")
while (intensidad != 1 && intensidad != 2) {
    alert("Ingresar 1 o 2")
    intensidad = prompt("Elige la intensidad de la actividad fisica \n1) Intensa\n2) Leve")
}
let actividad = prompt("Que tipo de actividad desea realizar \n 1) Deporte\n 2) Gimnasio")
while (actividad != 1 && actividad != 2) {
    alert("Ingresar 1 o 2")
    actividad = prompt("Que tipo de actividad desea realizar \n 1) Deporte\n 2) Gimnasio")
} if (intensidad == 1 && actividad == 1) {
    deporteIntenso()
} else if (intensidad == 1 && actividad == 2) {
    gimansioIntenso()
} else if (intensidad == 2 && actividad == 1) {
    deporteLeve()
} else if (intensidad == 2 && actividad == 2) {
    gimnasioLeve()
}

// quemar unas 3500 calorías para perder un kilogramo de grasa
function deporteIntenso(){
    let calorias = (pesoPerder * 3500)
    let caloriasDiarias = (calorias/900).toFixed(0)
    console.log(`Tendrias que hacer ${caloriasDiarias} dias de deporte intenso para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`)
    alert(`Tendrias que hacer ${caloriasDiarias} dias de deporte intenso para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`)
}
function deporteLeve(){
    let calorias = (pesoPerder * 3500)
    let caloriasDiarias = (calorias/500).toFixed(0)
    console.log(`Tendrias que hacer ${caloriasDiarias} dias de deporte leve para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`)
    alert(`Tendrias que hacer ${caloriasDiarias} dias de deporte leve para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`) 
}
function gimansioIntenso(){
    let calorias = (pesoPerder * 3500)
    let caloriasDiarias = (calorias/700).toFixed(0)
    console.log(`Tendrias que hacer ${caloriasDiarias} dias de gimnasio intenso para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`)
    alert(`Tendrias que hacer ${caloriasDiarias} dias de gimnasio intenso para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`)

}
function gimnasioLeve(){
    let calorias = (pesoPerder * 3500)
    let caloriasDiarias = (calorias/300).toFixed(0)
    console.log(`Tendrias que hacer ${caloriasDiarias} dias de gimnasio leve para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`)
    alert(`Tendrias que hacer ${caloriasDiarias} dias de gimnasio leve para perder ${pesoPerder} kilos, bajo una dieta de deficit calorico`)
}


const especificaciones = new Persona(pesoPerder, intensidad, actividad)
arrayPersonas.push(especificaciones)
console.log(arrayPersonas)
arrayPersonas.forEach(function(contexto){
console.log(contexto)
})

