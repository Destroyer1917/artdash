// Получаем элементы
const envelope = document.querySelector('.envelope');
const topFlap = document.querySelector('.top');
const bottomFlap = document.querySelector('.bottom');
const invitation = document.querySelector('.invitation');

// Таймер
const countdown = () => {
    const weddingDate = new Date("July 5, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// Обновляем таймер каждую секунду
setInterval(countdown, 1000);

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