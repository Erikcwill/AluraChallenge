const listaProjetos = document.querySelector('.principal__comunidade')

new function() {
    mostraProjetos()
}

function mostraProjetos() {
    if (localStorage.length <= 0) {
        return
    }
    let projetos = []
    for (let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        const cartao = criaCartao(projeto)
        listaProjetos.innerHTML += cartao
        const codigoHtml = listaProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function criaCartao(projeto) {
    const cartao = `<div class="espaco__editor__comunidade">
            <div class="principal__editor editor__comunidade" style="background-color:${projeto.detalhesDoProjeto.cor}" id="principal__editor">
                <div class="principal__editor__area__codigo" data-id="${projeto.id}">
                    <div class="bolinhas__editor"></div>
                    <code class="preview hljs ${projeto.detalhesDoProjeto.linguagem}"></code>
                    </div>
                </div>
                <div class="infos__projetos__comunidade">
                    <div class="infos__projetos__espaco">
                        <h3 class="infos__projetos__titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}  </h3>
                        <p class="infos__projetos__descricao">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                    </div>


                    <ul class="menu__social__lista ">
                        <li class="menu__social social__comentario" >
                            <div class="comentario"></div>
                            <p class="contagem__comentario">0</p>
                        </li>
                        <li class="menu__social social__gostei" >
                            <div class="gostei" data-gostei="false"></div>
                            <p class="contagem__gostei">0</p>
                        </li>
                        <li class="menu__social social__mais">@Erick_William

                        </li>
                    </ul>
                    <li class="projeto__espaco">
                        <span class="linguagem--${projeto.detalhesDoProjeto.linguagem}"></span>
                    </li>
                    <div class="menu__social--suspenso">
                        <div class='perfil__comentario'></div>
                        <textarea id="input__comentario" class="caixa__busca__estilo" placeholder="Deixe um comentário"></textarea>
                    </div>
                </div>
                `
    return cartao
}