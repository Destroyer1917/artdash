// Получаем элементы
const envelope = document.querySelector('.envelope');
const topFlap = document.querySelector('.top');
const bottomFlap = document.querySelector('.bottom');
const invitation = document.querySelector('.invitation');

// Функция для открытия конверта
envelope.addEventListener('click', function() {
    // Анимация раскрытия верхней и нижней части конверта
    topFlap.style.transform = 'rotateX(-180deg)';
    bottomFlap.style.transform = 'rotateX(180deg)';

    // Показать приглашение с анимацией
    setTimeout(function() {
        invitation.style.display = 'block';  // Показываем приглашение
        invitation.style.opacity = '1';  // Анимация плавного появления
        invitation.style.transform = 'scale(1)';
    }, 500); // Задержка для того, чтобы конверт раскрылся перед показом приглашения
});