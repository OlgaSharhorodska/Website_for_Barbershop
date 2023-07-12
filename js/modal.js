const btnOpen = document.querySelector("[data-modal-open]");
const btnClose = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");
btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-hidden");
}
