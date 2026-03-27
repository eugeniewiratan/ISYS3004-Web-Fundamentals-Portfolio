document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initProjectDetails();
});

function initThemeToggle() {
  const themeButton = document.getElementById("theme-toggle");

  if (!themeButton) {
    return;
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
}

function initProjectDetails() {
  const detailButtons = document.querySelectorAll(".details-button");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const details = document.getElementById(targetId);

      if (!details) {
        return;
      }

      const isHidden = details.hasAttribute("hidden");

      if (isHidden) {
        details.removeAttribute("hidden");
        button.textContent = "Hide Details";
      } else {
        details.setAttribute("hidden", "");
        button.textContent = "Show Details";
      }
    });
  });
}