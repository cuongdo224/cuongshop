/* ===== SLIDER ẢNH CÂU CHUYỆN ===== */
const storyImages = [
  "img/story/story1.jpg",
  "img/story/story2.jpg",
  "img/story/story3.jpg",
  "img/story/story4.jpg",
  "img/story/story5.jpg",
  "img/story/story6.jpg",
];

let storyIndex = 0;
const storyImg = document.getElementById("storyImage");

if (storyImg) {
  setInterval(() => {
    storyImg.style.opacity = 0;

    setTimeout(() => {
      storyIndex = (storyIndex + 1) % storyImages.length;
      storyImg.src = storyImages[storyIndex];
      storyImg.style.opacity = 1;
    }, 700);
  }, 3000);
}

/* ===== FADE KHI CUỘN ===== */
const fadeItems = document.querySelectorAll(".fade-item");

function handleScrollFade() {
  fadeItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScrollFade);
window.addEventListener("load", handleScrollFade);
