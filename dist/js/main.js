// Select DOM Items
const MENUBUTTON = document.querySelector(".menu-btn");
const MENU = document.querySelector(".menu");
const MENU_NAV = document.querySelector(".menu-nav");
const MENU_BRANDING = document.querySelector(".menu-branding");
const NAV_ITEMS = document.querySelectorAll(".nav-item");

//Set Intitial State of Menu
let showMenu = false;

MENUBUTTON.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    MENUBUTTON.classList.add("close");
    MENU.classList.add("show");
    MENU_NAV.classList.add("show");
    MENU_BRANDING.classList.add("show");
    NAV_ITEMS.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    MENUBUTTON.classList.remove("close");
    MENU.classList.remove("show");
    MENU_NAV.classList.remove("show");
    MENU_BRANDING.classList.remove("show");
    NAV_ITEMS.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}
