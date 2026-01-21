function filterProducts() {
  let category = document.getElementById("categoryFilter").value;
  let keyword = document.getElementById("searchInput").value.toLowerCase();
  let list = document.getElementById("productList");

  if (!list) return;

  list.innerHTML = "";

  products.forEach((p) => {
    let matchCategory = category === "all" || p.category === category;

    let matchKeyword = p.name.toLowerCase().includes(keyword);

    if (matchCategory && matchKeyword) {
      list.innerHTML += `
              <div class="product">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.price.toLocaleString()}đ</p>
                <button onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">
                  Thêm vào giỏ
                </button>
              </div>
            `;
    }
  });
}

// Load tất cả sản phẩm khi mở trang
document.addEventListener("DOMContentLoaded", filterProducts);
