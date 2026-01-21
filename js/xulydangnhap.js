// ===== HIỂN THỊ FORM =====
function showRegister() {
  document.querySelector(".auth-container").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.querySelector(".auth-container").classList.remove("hidden");
}

// ===== ĐĂNG KÝ =====
document.getElementById("registerForm").onsubmit = function (e) {
  e.preventDefault();

  const user = {
    name: regName.value,
    account: regAccount.value,
    password: regPassword.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Đăng ký thành công!");
  showLogin();
};

// ===== ĐĂNG NHẬP =====
document.getElementById("loginForm").onsubmit = function (e) {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Chưa có tài khoản!");
    return;
  }

  if (
    loginAccount.value === user.account &&
    loginPassword.value === user.password
  ) {
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Sai thông tin đăng nhập!");
  }
};

// ===== GOOGLE (GIẢ LẬP) =====
function loginGoogle() {
  alert("Đăng nhập Google (giả lập)");
  window.location.href = "index.html";
}

// ===== PHONE (GIẢ LẬP) =====
function loginPhone() {
  alert("Đăng nhập bằng số điện thoại (giả lập)");
  window.location.href = "index.html";
}
