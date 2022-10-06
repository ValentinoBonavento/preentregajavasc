class Persona {
    constructor(nombre, peso, intensidad, actividad) {
        this.nombre = nombre
        this.peso = peso;
        this.intensidad = intensidad;
        this.actividad = actividad;
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
    if(peso > 1 && peso < 200){
     if (intensidad == 1 && actividad == 1) {
        deporteIntenso()
    } else if (intensidad == 1 && actividad == 2) {
        gimnasioIntenso()
    } else if (intensidad == 2 && actividad == 1) {
        deporteLeve()
    } else if (intensidad == 2 && actividad == 2) {
        gimnasioLeve()
    }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresar valores numericos del 1 al 200!',
          })
    }
    
    function deporteIntenso() {
        let calorias = (peso * 3500)
        let dias = (calorias / 900).toFixed(0)
        console.log(`Tendrias que hacer ${dias} dias de deporte intenso para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        let aux = ""
        aux += `<p class="resultado"> Tendrias que hacer ${dias} dias de deporte intenso para perder ${peso} kilos, bajo una dieta de deficit calorico </p>`
        resultado.innerHTML = aux;     
    }
    
    function deporteLeve() {
        let calorias = (peso * 3500)
        let dias = (calorias / 500).toFixed(0)
        console.log(`Tendrias que hacer ${dias} dias de deporte leve para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        let aux = ""
        aux += `<p class="resultado"> Tendrias que hacer ${dias} dias de deporte leve para perder ${peso} kilos, bajo una dieta de deficit calorico </p>`
        resultado.innerHTML = aux;
           
    }
    
    function gimnasioIntenso() {
        let calorias = (peso * 3500)
        let dias = (calorias / 700).toFixed(0)
        console.log(`Tendrias que hacer ${dias} dias de gimnasio intenso para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        let aux = ""
        aux += `<p class="resultado"> Tendrias que hacer ${dias} dias de gimnasio intenso para perder ${peso} kilos, bajo una dieta de deficit calorico </p>`
        resultado.innerHTML = aux;      
    }
    
    function gimnasioLeve() {
        let calorias = (peso * 3500)
        let dias = (calorias / 300).toFixed(0)
        console.log(`Tendrias que hacer ${dias} dias de gimnasio leve para perder ${peso} kilos, bajo una dieta de deficit calorico`)
        let aux = ""
        aux += `<p class="resultado"> Tendrias que hacer ${dias} dias de gimnasio leve para perder ${peso} kilos, bajo una dieta de deficit calorico </p>`
        resultado.innerHTML = aux;       
    }
}

const resultado = document.getElementById("infoUsuarios");
const resultado1 = document.getElementById("minimo")
    
console.log(personas)
personas.forEach(function (contexto) {
    console.log(contexto)
})

