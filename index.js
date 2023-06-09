/* TOGGLES ICON NAVBAR */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Scroll active link */
let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/* SCROLL REVEAL */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".Home-design, .heading2", { origin: "top" });

/*sticky navbar*/
let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);

/* REMOVE TOGGLE NAVBAR WHEN CLICK ON LINK */
navbar.onclick = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
