const menu = document.querySelector(".menu-bar");

menu.addEventListener("click", () => {
  const header = document.querySelector("ul.header--responsive");
  const navIcon = document.querySelectorAll(".nav-icon");

  header.classList.toggle("show");

  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".header").addClass("navbar-fixed");
  } else {
    $(".header").removeClass("navbar-fixed");
  }
});
