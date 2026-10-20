/* ---------- Φίλτρο ομιλητών ---------- */
const themeToggle = document.querySelector(".theme-toggle");

function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", isDark ? "Ενεργοποίηση φωτεινής λειτουργίας" : "Ενεργοποίηση σκοτεινής λειτουργίας");
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
}

setTheme(localStorage.getItem("theme") === "dark");

themeToggle?.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  setTheme(isDark);
});

function filterSpeeches(category) {
  const speeches = document.querySelectorAll(".speech");

  speeches.forEach(function (speech) {
    if (category === "all" || speech.classList.contains(category)) {
      speech.classList.remove("hidden");
    } else {
      speech.classList.add("hidden");
    }
  });
}