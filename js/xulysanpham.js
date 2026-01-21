// Lấy giỏ hàng từ localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Lưu giỏ hàng vào localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Cập nhật số lượng hiển thị trên menu
function updateCartCount() {
  let cart = getCart();
  let total = 0;

  cart.forEach((item) => {
    total += item.quantity;
  });

  let cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = total;
  }
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(name, price, image) {
  let cart = getCart();

  // Kiểm tra sản phẩm đã tồn tại chưa
  let found = cart.find((item) => item.name === name);

  if (found) {
    found.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1,
    });
  }

  saveCart(cart);
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

// Khi load trang → cập nhật số giỏ hàng
document.addEventListener("DOMContentLoaded", updateCartCount);
