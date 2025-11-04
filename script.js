const contactBtn = document.getElementById("contactBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

function openPopup() {
  popup.style.display = "flex";
  popup.setAttribute('aria-hidden', 'false');
  closePopup.focus();
}

function closeThePopup() {
  popup.style.display = "none";
  popup.setAttribute('aria-hidden', 'true');
  contactBtn.focus();
}

contactBtn.addEventListener("click", () => {
  openPopup();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

closePopup.addEventListener("click", closeThePopup);
window.addEventListener("click", e => { if (e.target === popup) closeThePopup(); });
window.addEventListener("keydown", e => { if (e.key === "Escape" && popup.style.display === "flex") closeThePopup(); });
