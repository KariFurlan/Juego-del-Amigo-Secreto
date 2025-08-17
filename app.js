// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Ingresar un nombre válido");
        return;
    }

    if (listaDeAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya existe");
        inputAmigo.value = "";
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    //mostrarListaAmigos();
    inputAmigo.value = "";
    mostrarListaAmigos();
    //inputAmigo.focus();
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    listaDeAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function actualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigo");
    listaAmigoUl.innerHTML = "";

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Debe agregar nombres para sortear un amigo");
        return
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;

    setTimeout(reiniciarJuego, 5000);
}

function reiniciarJuego() {
    listaDeAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    //document.getElementById("amigo").value = "";
    alert("Se reinició el juego, podes comenzar de nuevo");
    
}
