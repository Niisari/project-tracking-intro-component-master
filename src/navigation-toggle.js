const iconHamburger = document.querySelector(".icon__hamburger");
const iconClose = document.querySelector(".icon__close");
const nav = document.querySelector(".hero__navigation");

const toggleMenu = () => {
  const isOpen = nav.classList.toggle("show");

  iconHamburger.classList.toggle("icon__hamburger--active");
  iconClose.classList.toggle("icon__close--active");

  iconHamburger.setAttribute("aria-expanded", isOpen);

  // Toggle visibility
  iconHamburger.hidden = isOpen;
  iconClose.hidden = !isOpen;
};

iconHamburger.addEventListener("click", toggleMenu);
iconClose.addEventListener("click", toggleMenu);

// ESC key to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("show")) {
    toggleMenu();
    iconHamburger.focus();
  }
});