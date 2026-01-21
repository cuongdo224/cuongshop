/* ===== GIỎ HÀNG (ĐẾM ICON) ===== */
let cartCount = 0;

function addToCart(name, price, image) {
  cartCount++;
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.innerText = cartCount;
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

/* ===== PROMO SLIDER ===== */
const promoImages = [
  "img/promo/promo1.jpg",
  "img/promo/promo2.jpg",
  "img/promo/promo3.jpg",
  "img/promo/promo4.jpg",
  "img/promo/promo5.jpg",
  "img/promo/promo6.jpg",
];

let promoIndex = 0;
const promoImg = document.getElementById("promoImage");

function showPromo(index) {
  if (!promoImg) return;
  promoImg.style.opacity = 0;
  setTimeout(() => {
    promoImg.src = promoImages[index];
    promoImg.style.opacity = 1;
  }, 400);
}

function nextPromo() {
  promoIndex = (promoIndex + 1) % promoImages.length;
  showPromo(promoIndex);
}

function prevPromo() {
  promoIndex = (promoIndex - 1 + promoImages.length) % promoImages.length;
  showPromo(promoIndex);
}

if (promoImg) {
  setInterval(nextPromo, 4000);
}

/* ===== COUNTDOWN KHUYẾN MÃI ===== */
const promoEndTime = new Date().getTime() + 48 * 60 * 60 * 1000;

function updatePromoCountdown() {
  const now = new Date().getTime();
  const distance = promoEndTime - now;

  const el = document.getElementById("promoCountdown");
  if (!el) return;

  if (distance <= 0) {
    el.innerText = "Đã kết thúc";
    return;
  }

  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  el.innerText = `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updatePromoCountdown, 1000);
updatePromoCountdown();
