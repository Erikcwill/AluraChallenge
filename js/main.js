const corFundo = document.querySelector('.principal__editor');
const corEditor = document.querySelector('.menu__secundario__colorpick')

corEditor.addEventListener('input', function(e) {
    let corEscolhida = e.target.value;
    corFundo.style.backgroundColor = corEscolhida;
})