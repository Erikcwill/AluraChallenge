console.log(corEditor.value)

const botaoSalvar = document.querySelector(".salvar__projeto")

botaoSalvar.addEventListener('click', () => {
    if (typeof(Storage) !== "undefined") {
        console.log('Sim, suportado!')
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
    } else {
        console.log('Não, desculpe!')
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': input__projeto.value,
            'descricaoDoProjeto': input__descricao.value,
            'linguagem': linguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText,
            'cor': corEditor.value,
        }
    }


    return projeto
}

let numeroId = 1

if (localStorage.length > 0) {
    numeroId = localStorage.length
}

function atribuiId() {
    if (localStorage.length == 0) {
        return 0
    } else {
        if (localStorage.length == numeroId) {
            let novoId = numeroId
            numeroId++
            return novoId
        }
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}