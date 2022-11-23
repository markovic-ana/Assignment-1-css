let burger = document.querySelector(".navbar__logo-mob-burger");
let close = document.querySelector(".navbar__logo-close");
let menu = document.querySelector(".navbar__mob-nav");

burger.addEventListener("click", () => {
  menu.classList.toggle("navbar__mob-nav--show");
  burger.style.cssText = "display:none;";
  close.style.cssText =
    "display:block;filter:invert(100%);height:15px;margin-bottom:-2px;";
});

close.addEventListener("click", () => {
  menu.classList.toggle("navbar__mob-nav--show");
  burger.style.cssText = "display:block;";
  close.style.cssText = "display:none;";
});
