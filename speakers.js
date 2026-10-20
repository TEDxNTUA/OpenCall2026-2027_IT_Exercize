const speakerCards = document.querySelectorAll(".speaker-card");
const filterButtons = document.querySelectorAll(".filter-btn");
const speakerModal = document.querySelector(".speaker-modal");
const modalTitle = document.querySelector("#speaker-modal-title");
const modalRole = document.querySelector(".modal-role");
const modalTalk = document.querySelector(".modal-talk");
const modalCloseButton = document.querySelector(".modal-close");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    speakerCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
  });
});

speakerCards.forEach((card) => {
  const detailsButton = card.querySelector(".speaker-details-btn");

  detailsButton.addEventListener("click", () => {
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalRole.textContent = card.querySelector(".role").textContent;
    modalTalk.textContent = card.querySelector("p:not(.role)").textContent;
    speakerModal.showModal();
  });
});

modalCloseButton.addEventListener("click", () => {
  speakerModal.close();
});

speakerModal.addEventListener("click", (event) => {
  if (event.target === speakerModal) {
    speakerModal.close();
  }
});
