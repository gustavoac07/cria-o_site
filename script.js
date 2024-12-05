// Função para mover o carrossel de imagens e vídeos
let imageIndex = 0;
const imageItems = document.querySelectorAll('#image-carousel .carousel-image');
const totalImageItems = imageItems.length;

function moveSlide(step) {
    imageIndex += step;
    if (imageIndex < 0) imageIndex = totalImageItems - 1;
    if (imageIndex >= totalImageItems) imageIndex = 0;

    const offset = -imageIndex * 100; // Calculando o deslocamento das imagens
    document.querySelector('#image-carousel .carousel-images').style.transform = `translateX(${offset}%)`;
}

// Função para rotação automática
function autoRotate() {
    moveSlide(1); // Girar o carrossel de imagens
}

// Configurar a rotação automática para cada 5 segundos
setInterval(autoRotate, 5000);

