document.addEventListener("DOMContentLoaded", () => {
  // Анимация текста (оставляем как было)
  const texts = [
    "✅ Автоматизация рутинных задач",
    "💬 Поддержка клиентов 24/7",
    "🔗 Интеграция с CRM и API",
    "📈 Рост продаж через чат-ботов",
    "⚙️ Индивидуальные сценарии",
    "🤖 Нейросети и AI внутри",
    "💰 Сокращение затрат на персонал",
    "📊 Увеличение конверсии"
  ];

  let textIndex = 0;
  const el = document.getElementById("advantageText");
  function showNextText() {
    el.classList.remove("fade-in");
    el.classList.add("fade-out");

    setTimeout(() => {
      el.innerText = texts[textIndex];
      el.classList.remove("fade-out");
      el.classList.add("fade-in");

      textIndex = (textIndex + 1) % texts.length;
    }, 400);
  }
  setInterval(showNextText, 2500);

  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");

  let currentSlide = 0;
  let autoTimer;

  function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  }

  prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  goToSlide(0);
});
