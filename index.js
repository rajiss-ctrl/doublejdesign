const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroHeight = hero.offsetHeight;
  if (window.scrollY > heroHeight - 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


const contents = document.querySelectorAll('.content');
    let index = 0;

    setInterval(() => {
      contents[index].classList.remove('active');
      index = (index + 1) % contents.length;
      contents[index].classList.add('active');
    }, 4000); // 4 seconds per slide


    