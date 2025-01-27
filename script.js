document.getElementById('envelope').addEventListener('click', function() {
    // Анимация открытия конверта
    document.querySelector('.flap.top').style.transform = 'rotateX(180deg)';
    document.querySelector('.flap.bottom').style.transform = 'rotateX(-180deg)';
    document.querySelector('.envelope').style.transform = 'scale(0.5)';
    
    // Показ приглашения с анимацией
    setTimeout(function() {
        document.getElementById('invitation').style.display = 'block';
        document.getElementById('invitation').style.opacity = '1';
        document.getElementById('invitation').style.transform = 'scale(1)';
    }, 800); // Задержка для завершения анимации конверта
});
.envelope {
    width: 200px; /* Подберите размеры изображения */
    height: 150px; /* Подберите размеры изображения */
    background-image: url('IMG_0470.png'); /* Путь к изображению */
    background-size: cover; /* Чтобы изображение растягивалось */
    background-position: center; /* Центрируем изображение */
    margin: 0 auto; /* Центрируем конверт */
    position: relative;
    cursor: pointer;
    transition: transform 1s ease;
}