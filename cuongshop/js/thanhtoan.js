

const paymentRadios = document.querySelectorAll("input[name='payment']");
const walletBox = document.getElementById("walletBox");
const bankBox = document.getElementById("bankBox");

// Hiển thị lựa chọn con
paymentRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    walletBox.style.display = "none";
    bankBox.style.display = "none";

    if (radio.value === "wallet") {
      walletBox.style.display = "block";
    }

    if (radio.value === "bank") {
      bankBox.style.display = "block";
    }
  });
});

function confirmPayment() {
  let method = document.querySelector("input[name='payment']:checked").value;

  let message = "";

  if (method === "cash") {
    message = "Bạn đã chọn thanh toán bằng tiền mặt khi nhận hàng.";
  }

  if (method === "wallet") {
    message = "Bạn đã chọn thanh toán bằng ví điện tử.";
  }

  if (method === "bank") {
    message = "Bạn đã chọn thanh toán qua ngân hàng.";
  }

  alert(message + "\nThanh toán thành công (giả lập).");

  // Xóa giỏ hàng sau thanh toán
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
