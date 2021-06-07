(() => {
    const menuExportacao = document.getElementById("botao__menu__exportacao");
    const conteudoExportado = document.querySelector(".menu__exportacao__container");

    menuExportacao.addEventListener("click", () => {
        conteudoExportado.classList.toggle("export--open");
    });

    const botaoExportarImg = document.getElementById("botao__exportar__imagem");
    const botaoExportarCodigo = document.getElementById("botao__exportar__codigo");

    botaoExportarImg.addEventListener("click", () => {
        const canvas = document.getElementById("principal__editor");
        const extensao = document.getElementById("tipo__imagem").value;
        const codigoArquivo = canvas.querySelector("code").innerText;
        const nomeArquivo = document.querySelector("#input__projeto").value;

        if (nomeArquivo.length > 0 && codigoArquivo.length > 0) {
            const arquivoFinal = `${nomeArquivo}.${extensao}`;
            domtoimage.toBlob(canvas).then(function(blob) {
                window.saveAs(blob, arquivoFinal);
            });

        }
    });

    botaoExportarCodigo.addEventListener("click", () => {
        const canvas = document.getElementById("principal__editor");
        const extensao = document.getElementById("tipo__codigo").value;
        const codigoArquivo = canvas.querySelector("code").innerText;
        const nomeArquivo = document.querySelector("#input__projeto").value;


        if (nomeArquivo.length > 0 && codigoArquivo.length > 0) {
            const blob = new Blob([codigoArquivo], {
                type: "text/plain;charset=utf-8",
            });
            const arquivoFinal = `${nomeArquivo}.${extensao}`;
            window.saveAs(blob, arquivoFinal);
        }
    });
})();