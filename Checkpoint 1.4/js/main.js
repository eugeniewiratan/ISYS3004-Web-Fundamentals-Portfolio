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
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      themeButton.textContent = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeButton.textContent = "Dark Mode";
    }
  });
}

function initProjectDetails() {
  const detailButtons = document.querySelectorAll(".details-button");

  if (!detailButtons.length) {
    return;
  }

  detailButtons.forEach((button) => {
    const targetId = button.getAttribute("data-target");
    const details = document.getElementById(targetId);

    if (!details) {
      return;
    }

    button.addEventListener("click", () => {
      const isHidden = details.hasAttribute("hidden");

      if (isHidden) {
        details.removeAttribute("hidden");
        button.textContent = "Hide Details";
        button.setAttribute("aria-expanded", "true");
      } else {
        details.setAttribute("hidden", "");
        button.textContent = "Show Details";
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
}