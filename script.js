/!-- script menu -->/
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // evita che il click venga intercettato dal document
  menu.classList.toggle("hidden");
});

menu.addEventListener("click", (e) => {
  e.stopPropagation(); // click dentro il menu non lo chiude
});

document.addEventListener("click", () => {
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});




/<!--script modale dettaglio corto-->/
const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const description = document.getElementById("modal-description");
const year = document.getElementById("modal-year");
const duration = document.getElementById("modal-duration");
const link = document.getElementById("modal-link");

document.querySelectorAll(".open-modal").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");

    title.textContent = card.dataset.title;
    description.textContent = card.dataset.description;
    year.textContent = card.dataset.year;
    duration.textContent = card.dataset.duration;
    link.href = card.dataset.link;

    modal.classList.add("active");
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const footer = document.getElementById("footer");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      scrollBtn.classList.add("above-footer");
    } else {
      scrollBtn.classList.remove("above-footer");
    }
  },
  {
    root: null,
    threshold: 0
  }
);

observer.observe(footer);

