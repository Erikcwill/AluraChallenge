    const areaDoCodigo = document.querySelector('.principal__editor__area__codigo')
    const linguagem = document.querySelector('#linguagem')
    const botao = document.querySelector('.highlight')

    botao.addEventListener('click', () => {
        const codigo = areaDoCodigo.querySelector('code')
        hljs.highlightElement(codigo)
    })

    linguagem.addEventListener('change', () => {
        console.log(linguagem.value)
        mudaLinguagem()
    })

    function mudaLinguagem() {
        const codigo = { 'texto': areaDoCodigo.querySelector('code').innerText }
        areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label='editor'></code>`
        areaDoCodigo.firstChild.innerText = codigo.texto
    }