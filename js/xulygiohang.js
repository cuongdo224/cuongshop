// ===== CART LOCALSTORAGE =====
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let cart = getCart();
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  let countEl = document.getElementById("cartCount");
  if (countEl) countEl.innerText = total;
}

// ===== ADD TO CART =====
function addToCart(name, price, img) {
  let cart = getCart();
  let product = cart.find((p) => p.name === name);

  if (product) {
    product.quantity++;
  } else {
    cart.push({ name, price, img, quantity: 1 });
  }

  saveCart(cart);
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

// ===== DISPLAY CART =====
function loadCart() {
  let cart = getCart();
  let table = document.getElementById("cartBody");
  let total = 0;

  table.innerHTML = "";

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    table.innerHTML += `
            <tr>
                <td><img src="${item.img}" width="60"></td>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()}đ</td>
                <td>
                    <button onclick="changeQty(${index}, -1)">-</button>
                    ${item.quantity}
                    <button onclick="changeQty(${index}, 1)">+</button>
                </td>
                <td>${itemTotal.toLocaleString()}đ</td>
                <td>
                    <button onclick="removeItem(${index})">❌</button>
                </td>
            </tr>
        `;
  });

  document.getElementById("cartTotal").innerText = total.toLocaleString() + "đ";
}

// ===== CHANGE QUANTITY =====
function changeQty(index, amount) {
  let cart = getCart();
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  loadCart();
}

// ===== REMOVE ITEM =====
function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  loadCart();
}

// ===== CHECKOUT =====
function checkout() {
  if (getCart().length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }

  alert("Thanh toán thành công!\nCảm ơn bạn đã mua hàng tại CUONG SHOP.");
  localStorage.removeItem("cart");
  loadCart();
  updateCartCount();
}

// ===== MENU MOBILE =====
function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Load cart count when page loads
document.addEventListener("DOMContentLoaded", updateCartCount);
/* ===== THÊM SẢN PHẨM VÀO GIỎ ===== */
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Đã thêm sản phẩm vào giỏ hàng");
}

/* ===== CẬP NHẬT SỐ LƯỢNG ICON GIỎ ===== */
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQty = 0;

  cart.forEach((item) => (totalQty += item.quantity));

  let count = document.getElementById("cartCount");
  if (count) count.innerText = totalQty;
}

/* ===== LOAD GIỎ HÀNG ===== */
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBody = document.getElementById("cartBody");
  let cartTotal = document.getElementById("cartTotal");

  if (!cartBody) return;

  cartBody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartBody.innerHTML += `
          <tr>
            <td><img src="${item.image}" class="cart-img"></td>
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()}đ</td>
            <td>
              <button onclick="changeQty(${index}, -1)">-</button>
              ${item.quantity}
              <button onclick="changeQty(${index}, 1)">+</button>
            </td>
            <td>${itemTotal.toLocaleString()}đ</td>
            <td>
              <button onclick="removeItem(${index})">❌</button>
            </td>
          </tr>
        `;
  });

  if (cartTotal) {
    cartTotal.innerText = total.toLocaleString() + "đ";
  }

  updateCartCount();
}

/* ===== TĂNG / GIẢM SỐ LƯỢNG ===== */
function changeQty(index, amount) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

/* ===== XÓA SẢN PHẨM ===== */
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

/* ===== TỰ LOAD KHI VÀO TRANG ===== */
document.addEventListener("DOMContentLoaded", loadCart);
