const products = [
  {
    id: 1,
    name: "Áo thun nam",
    price: 90000,
    image: "img/aothun.jpg",
    category: "Áo",
  },
  {
    id: 2,
    name: "Áo thun nữ",
    price: 100000,
    image: "img/aothunnu.jpg",
    category: "Áo",
  },
  {
    id: 3,
    name: "Quần jean",
    price: 150000,
    image: "img/quanjean.jpg",
    category: "Quần",
  },
  {
    id: 4,
    name: "Áo nỉ",
    price: 200000,
    image: "img/aoni.jpg",
    category: "Áo",
  },
  {
    id: 5,
    name: "Áo sơ mi nữ",
    price: 180000,
    image: "img/aonu.jpg",
    category: "Áo",
  },
  {
    id: 6,
    name: "Áo sơ mi trắng",
    price: 160000,
    image: "img/aosomi.jpg",
    category: "Áo",
  },
  {
    id: 7,
    name: "Váy thời trang",
    price: 220000,
    image: "img/vaythoitrang.jpg",
    category: "Váy",
  },
];
// Hiển thị tất cả sản phẩm trong danh mục
function renderProducts() {
  let list = document.getElementById("productList");
  if (!list || typeof products === "undefined") return;

  list.innerHTML = "";

  products.forEach((p) => {
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
  });
}

// Tự động chạy khi load trang danh mục
document.addEventListener("DOMContentLoaded", renderProducts);

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
  <img src="${p.image}" />
  <h3>${p.name}</h3>
  <p>${p.price.toLocaleString()}đ</p>
  <button onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">
    Thêm vào giỏ
  </button>
</div>
`;
    }
  });
} // Load tất cả sản phẩm khi mở trang
document.addEventListener("DOMContentLoaded", filterProducts);
