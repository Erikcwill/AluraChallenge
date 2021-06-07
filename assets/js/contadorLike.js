const listaSocialLike = document.querySelectorAll('.social__gostei');

listaSocialLike.forEach(socialLike => {
    socialLike.addEventListener('click', computarLike);
})



function computarLike() {
    let gosteiImg = this.querySelector('.gostei');
    let gosteiValor = this.querySelector('.contagem__gostei');


    if (gosteiImg.getAttribute('data-gostei') == 'false') {
        gosteiImg.classList.add("gostei--ativo")
        gosteiValor.textContent = parseInt(gosteiValor.textContent) + 1;

        /*Anulei esses códigos para que eu pudesse demonstrar a sessão de destaques, deixando com que o numero de likes aumentasse*/
        /*A remoção desses comentários libera a condição de else para que o like diminua e o simbolo volte ao normal*/

        /*gosteiImg.setAttribute('data-gostei', 'true');*/
    } else {
        /*gosteiImg.classList.remove("gostei--ativo")
        gosteiValor.textContent = parseInt(gosteiValor.textContent) - 1;
        gosteiImg.setAttribute('data-gostei', 'false');*/
    }
}