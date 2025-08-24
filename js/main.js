const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const overlayMenu = document.querySelector(".overlay");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
         overlayMenu.classList.remove("is-active");
      }
   }
});

// Add the Darkmode Theme on Switch
let darkmode = localStorage.getItem("darkmode");
const darkSwitch = document.getElementById("switch");

// Eneble and disable darkmode function
const enableDarkmode = () => {
   localStorage.setItem("darkmode", "active");
   document.body.classList.add("darkmode");
};

const disableDarkmode = () => {
   localStorage.setItem("darkmode", null);
   document.body.classList.remove("darkmode");
};

// Check if the darkmode currently active
if (darkmode === "active") enableDarkmode();

// Initialize darkmode with localStorage
darkSwitch.addEventListener("click", () => {
   darkmode = localStorage.getItem("darkmode");
   darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
