const comentarioSocial = document.querySelectorAll('.social__comentario');

comentarioSocial.forEach(socialComent => {
    socialComent.addEventListener('click', computarComentario);
})

function computarComentario() {
    let comentValor = this.querySelector('.contagem__comentario');
    comentValor.textContent = parseInt(comentValor.textContent) + 1;
}