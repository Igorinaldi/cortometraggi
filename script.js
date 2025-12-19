/!-- script menu -->/
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("hidden");
  });



  

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
