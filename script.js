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
