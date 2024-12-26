let amigos = [];
let amigo = document.getElementById('input_nome');

function adicionar() {
    
    if (amigo.value == '') {
        exibirNaTela('ATENÇÃO: Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo.value)) {
        exibirNaTela('ATENÇÃO: Nome já adicionado!');
        amigo.value = '';
        return;
    }

    let lista = document.getElementById('nome_amigos');

    amigos.push(amigo.value);

    if (lista.textContent == 'Lista vazía!') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
    exibirNaTela('Adicionar nome na lista.');
}

function sortear() {
    if (amigos.length < 4) {
        exibirNaTela('ATENÇÃO: Adicione pelo menos 4 nomes!');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('resultado_sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
    exibirNoDom('exibir');
    exibirNaTela('Adicionar nome na lista.');
}

function exibirNaTela(texto) {
    document.getElementById('texto_alerta').innerHTML = `<label class="titulo_formulario">${texto}</label>`;
}

function exibirNoDom(status) {
    if (status == 'limpar'){
        document.getElementById('sorteio').innerHTML = '';
    } else {
        document.getElementById('sorteio').innerHTML = `<p class="titulo_sorteio">Nomes sorteados:</p><div class="lista_sorteio"><p id="resultado_sorteio"></p></div>`;
    }
}

function reiniciar() {
    exibirNaTela('Adicionar nome na lista.');
    amigos = [];
    amigo.value = '';
    document.getElementById('nome_amigos').innerHTML = 'Lista vazía!';
    document.getElementById('resultado_sorteio').innerHTML = '';
    exibirNoDom('limpar');
    
}