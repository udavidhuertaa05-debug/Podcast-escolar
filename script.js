let noticiaActual = 0;

function cambiarNoticia(numero) {
    const noticias = document.querySelectorAll(".noticia");
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    noticias.forEach(noticia => {
        noticia.classList.remove("activa");
    });

    noticiaActual = numero;
    noticias[noticiaActual].classList.add("activa");

    document.getElementById("contador").textContent =
        (noticiaActual + 1) + " / " + noticias.length;
}

function siguiente() {
    cambiarNoticia((noticiaActual + 1) % 3);
}

function anterior() {
    cambiarNoticia((noticiaActual + 2) % 3);
}
