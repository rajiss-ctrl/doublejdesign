// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

// Scroll navbar effect
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  if (window.scrollY > hero.offsetHeight - 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Testimonials carousel
const contents = document.querySelectorAll('.content');
let index = 0;
setInterval(() => {
  contents[index].classList.remove('active');
  index = (index + 1) % contents.length;
  contents[index].classList.add('active');
}, 4000);

// Gallery modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));

// Form handling
document.getElementById("quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thanks ${name}, your request has been submitted!`);
  e.target.reset();
});
