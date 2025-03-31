function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".article-card");
    let currentIndex = 0;

    function showNextArticle() {
        cards[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add("active");
    }

    function showPrevArticle() {
        cards[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        cards[currentIndex].classList.add("active");
    }

    // Initial article display
    cards[currentIndex].classList.add("active");

    // Add swipe functionality (mobile-friendly)
    let touchStartX = 0;

    document.querySelector(".articles-container").addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].clientX;
    });

    document.querySelector(".articles-container").addEventListener("touchend", (e) => {
        let touchEndX = e.changedTouches[0].clientX;
        if (touchEndX < touchStartX - 50) {
            showNextArticle(); // Swipe left
        } else if (touchEndX > touchStartX + 50) {
            showPrevArticle(); // Swipe right
        }
    });

    // Auto-slide every 5 seconds
    setInterval(showNextArticle, 5000);
});
