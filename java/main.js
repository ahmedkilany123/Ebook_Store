searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let nav = document.querySelectorAll("nav a ");

nav.forEach(function (el) {
  el.onclick = function () {
    // إزالة الصف 'active' من جميع العناصر
    nav.forEach(function (el) {
      el.classList.remove("active");
    });
    // إضافة الصف 'active' إلى العنصر الذي تم النقر عليه
    el.classList.add("active");
  };
});

let navMobile = document.querySelectorAll(".bottom-navbar a");

navMobile.forEach(function (el) {
  el.onclick = function () {
    // إزالة الصف 'active' من جميع العناصر
    navMobile.forEach(function (el) {
      el.classList.remove("active");
    });
    // إضافة الصف 'active' إلى العنصر الذي تم النقر عليه
    el.classList.add("active");
  };
});

// login
let log_icon = document.querySelector("#login-btn");
let loginBox = document.querySelector(".login-form-container");
let close = document.querySelector(".login-form-container #close-login-btn");

log_icon.onclick = function () {
  loginBox.classList.toggle("show");
};
close.onclick = function () {
  loginBox.classList.remove("show");
};

window.onscroll = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};
window.onload = () => {
  searchForm.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};
