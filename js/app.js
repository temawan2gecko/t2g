const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 70000,
        disableOnInteraction: false,
    },
    effect: 'flip', // Используем эффект переворота
    flipEffect: {
        slideShadows: true,
    },
    speed: 1000,
    on: {
        slideChangeTransitionStart: function () {
            const currentSlide = this.slides[this.activeIndex];
            const targetPosition = currentSlide.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        },
    },
});

const text = "Hello World! I'm ";
const name = "Chalunin Artem"; // Полное имя
const fullText = text + name + "."; // Полный текст
const textContainer = document.getElementById("animatedText");
let index = 0;

function typeText() {
  // Генерируем случайное время задержки
  const delay = Math.random() * 100 + 50; // От 50 до 150 мс

  // Проверяем, достигли ли конца полного текста
  if (index < fullText.length) {
    if (index >= text.length && index < text.length + name.length) {
      // Печатаем имя полностью красным цветом
      textContainer.innerHTML += `<span class='red'>${name.charAt(
        index - text.length
      )}</span>`;
    } else {
      textContainer.innerHTML += fullText.charAt(index);
    }
    index++;
  } else {
    // Когда закончится полный текст, очищаем и начинаем снова
    setTimeout(() => {
      textContainer.innerHTML = ""; // Очищаем текст
      index = 0; // Сбрасываем индекс
      typeText(); // Запускаем снова
    }, 1000); // Задержка перед перезапуском
    return; // Выходим из функции
  }

  // Задаем случайную задержку для следующего символа
  setTimeout(typeText, delay);
}
typeText()
const wrapperItem = document.querySelector('.about__wrapper-item');
const title = wrapperItem.querySelector('.about__wrapper-pretitle');
const text2 = wrapperItem.querySelector('.about__wrapper-text');

wrapperItem.addEventListener('mouseenter', () => {
    title.style.opacity = '0'; // Убираем заголовок
});

wrapperItem.addEventListener('mouseleave', () => {
    title.style.opacity = '1'; // Возвращаем заголовок
});

