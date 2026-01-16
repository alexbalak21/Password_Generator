// theme.js

const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

export function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme) {
  html.setAttribute("data-bs-theme", theme);

  if (theme === "dark") {
    sun.classList.remove("d-none");
    moon.classList.add("d-none");
    themeToggle.classList.replace("btn-outline-dark", "btn-outline-light");
  } else {
    moon.classList.remove("d-none");
    sun.classList.add("d-none");
    themeToggle.classList.replace("btn-outline-light", "btn-outline-dark");
  }
}

export function initThemeToggle() {
  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-bs-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}
