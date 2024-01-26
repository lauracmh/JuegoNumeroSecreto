let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let maximo = 5;
condicionesIniciales();


function asignarTextoElementoHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === numeroUsuario){
        asignarTextoElementoHTML('p',`¡Acertaste el número secreto en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroUsuario < numeroSecreto){
            asignarTextoElementoHTML('p','El número secreto es mayor');
        }
        else{asignarTextoElementoHTML('p','El número secreto es menor');}
    }
    intentos++;
    limpiarCaja();
    return;
    
}

function generarNumeroAleatorio() {
    let aleatorio = Math.floor(Math.random()*maximo)+1;

    if(numerosSorteados.length == maximo){
        asignarTextoElementoHTML('p','Ya se sortearon todos los números posibles');
    }


    if (numerosSorteados.includes(aleatorio)){
        return generarNumeroAleatorio();
    }else{
        numerosSorteados.push(aleatorio);
        return aleatorio;
    }
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales(){
    asignarTextoElementoHTML('h1','Juego del Número Secreto');
    asignarTextoElementoHTML('p',`Indica un número entre 1 y ${maximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroAleatorio();
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}



