valorTema = document.getElementById("tema")

valorTema.addEventListener('change', () => {
    const current = document.querySelector(".styles .current");
    const currentStyle = current.textContent;
    const nextStyle = tema.value;


    if (currentStyle !== nextStyle) {
        document.querySelector(`link[title="${nextStyle}"]`).removeAttribute("disabled");
        console.log(nextStyle)
        document.querySelector(`link[title="${currentStyle}"]`).setAttribute("disabled", "disabled");

        current.classList.remove("current");
        document.getElementById(nextStyle).classList.add("current");

    }
})