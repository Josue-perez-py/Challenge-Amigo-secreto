let amigos = [];
let amigosSorteados = [];
let botonAdd = document.querySelector('.button-add');
let numDeAmigosMin = 3;
let numDeAmigosMax = 6;


function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();

    if (botonAdd.textContent === 'Reiniciar') {
        reiniciar();
        return;
    }


    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if(amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        limpiarCampo();
        return;
    }

    if (amigos.length > numDeAmigosMax-1){
        alert('No se pueden agregar más de seis nombres.');
        limpiarCampo();
        return;
    } 

    amigos.push(nombre);
    mostrarAmigos();
    limpiarCampo();
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < numDeAmigosMin) {
        alert('Se necesitan al menos dos nombres para realizar un sorteo.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
    document.querySelector('.button-add').textContent = 'Reiniciar';
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.querySelector('.button-add').textContent = 'Añadir';
}

