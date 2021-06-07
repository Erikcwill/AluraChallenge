carregarHighlight();

function carregarHighlight() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('code').forEach((block) => {
            hljs.highlightElement(block);
        });
    });

}