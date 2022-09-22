class Persona {
    constructor(nombre, peso, intensidad, actividad) {
        this.nombre = nombre
        this.peso = peso;
        this.intensidad = intensidad;
        this.actividad = actividad;
    }

    deporteIntenso() {
        let calorias = (this.peso * 3500)
        let dias11 = (calorias / 900).toFixed(0)
        console.log(`Tendrias que hacer ${dias11} dias de deporte intenso para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        return dias11
    }
    
    deporteLeve() {
        let calorias = (this.peso * 3500)
        let dias12 = (calorias / 500).toFixed(0)
        console.log(`Tendrias que hacer ${dias12} dias de deporte leve para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        return dias12
    }
    
    gimnasioIntenso() {
        let calorias = (this.peso * 3500)
        let dias21 = (calorias / 700).toFixed(0)
        console.log(`Tendrias que hacer ${dias21} dias de gimnasio intenso para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        return dias21
    }
    
    gimnasioLeve() {
        let calorias = (this.peso * 3500)
        let dias22 = (calorias / 300).toFixed(0)
        console.log(`Tendrias que hacer ${dias22} dias de gimnasio leve para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        return dias22
    }
    
}
const personas = []

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregar_persona();  
})

function agregar_persona() {
    const nombre = document.getElementById("nombre").value;
    const peso = document.getElementById("peso").value;
    const intensidad = document.getElementById("intensidad").value;
    const actividad = document.getElementById("actividad").value;

    const persona = new Persona(nombre, peso, intensidad, actividad)
    personas.push(persona)
    localStorage.setItem("personas", JSON.stringify(personas))
    formulario.reset();
}

const resultado = document.getElementById("infoUsuarios");

const mostrar_info = (persona) => {
    let aux = "";
    aux += `<p class="resultado"> ${persona.nombre} tu IMC es el siguiente: </p>`
    if (intensidad == 1 && actividad == 1) {
        `<p class="resultado"> IMC: ${persona.deporteIntenso()} </p>`
    } else if (intensidad == 1 && actividad == 2) {
        `<p class="resultado"> IMC: ${persona.gimnasioIntenso()} </p>`
    } else if (intensidad == 2 && actividad == 1) {
        `<p class="resultado"> IMC: ${persona.deporteLeve()} </p>`
    } else if (intensidad == 2 && actividad == 2) {
        `<p class="resultado"> IMC: ${persona.gimnasioLeve()} </p>`
    }
    resultado.innerHTML = aux;
}


console.log(personas)
personas.forEach(function (contexto) {
    console.log(contexto)
})

