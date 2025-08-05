let listaNumerosSorteados =[];
// 1. Solicitar el nombre del usuario y mensaje personalizado con el nombre
let nombreUsuario = prompt("ingrese su nombre");


function asignarTexoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
asignarTexoElemento("h2",`${nombreUsuario} digite el nombre de sus amigos`);

// 3. Variables y funciones del resto de tu aplicación
let listaAmigosa = [];

function agregarAmigo(){
    if (document.getElementById("amigo").value === "") {
        asignarTexoElemento("ul", "Por favor, ingrese un nombre válido.");
    }
    else {
        let nombre = document.getElementById("amigo").value;
        listaAmigosa.push(nombre);
        console.log(`Amigo agregado: ${nombre}`);
    
    
        asignarTexoElemento("ul",`Amigo agregado:  ${nombre} <br> <br> amigos:  ${listaAmigosa}`);
        let valorCaja = document.querySelector('#amigo');
        valorCaja.value = ''; 
        
    }
}





function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * listaAmigosa.length);
    asignarTexoElemento('ul',`amigo: ${listaAmigosa[numeroGenerado]} seleccionado`);

    console.log("Número lista:", listaAmigosa.length); 
    console.log("Número generado:", numeroGenerado);
    console.log("amigui:", listaAmigosa[numeroGenerado]); 
    if(listaNumerosSorteados.length === listaAmigosa.length){
        asignarTexoElemento('ul','Ya no hay mas amigos para sortear');
    }else{

        //verifica que el numero generado no este en lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
}
}


    

function sortearAmigo() {
  generarNumeroSecreto();
}
