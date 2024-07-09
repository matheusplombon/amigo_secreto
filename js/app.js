let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo.value)) {
        alert('Nome ja adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent === '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';  // Limpa o campo de entrada
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }


    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa o conteúdo anterior

    for (let i = 0; i < amigos.length; i++) {
        // Para o último elemento, sortear com o primeiro da lista
        let proximo = (i + 1) % amigos.length;
        sorteio.innerHTML += amigos[i] + ' --> ' + amigos[proximo] + '<br>';
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}
