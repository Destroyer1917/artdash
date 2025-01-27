// Таймер
const countdownDate = new Date("July 5, 2025 00:00:00").getTime();

const updateTimer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(updateTimer);
    document.getElementById("timer").innerHTML = "Событие наступило!";
  }
}, 1000);

// Открытие конверта и показ приглашения
document.getElementById("envelope").onclick = function() {
  document.querySelector(".envelope-image").style.opacity = "0"; // Исчезает картинка конверта
  
  setTimeout(function() {
    document.getElementById("invitation").style.display = "block";
    document.getElementById("invitation").style.opacity = "1";
    document.getElementById("invitation").style.transform = "scale(1)";
  }, 500); // Показ пригласительного через полсекунды
};

// Лепестки
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomDelay = Math.random() * 5 + "s"; // случайная задержка для лепестка
  
  petal.style.left = randomX + "px";
  petal.style.animationDelay = randomDelay;
  
  document.getElementById("petals-container").appendChild(petal);

  // Удаляем лепесток после его анимации
  setTimeout(function() {
    petal.remove();
  }, 20000); // время, после которого лепесток исчезнет
}

// Генерация лепестков
setInterval(createPetal, 500); // добавляем лепесток каждые 500 мс