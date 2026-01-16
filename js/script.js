const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

const output = document.getElementById("output");
const generate_btn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const tooltip = new bootstrap.Tooltip(copyBtn, {trigger: "manual"});

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "?!@#$%^&*+";
const spec_symbols = "/()[],.:;=-_";
const length = document.getElementById("length");

// ----------------------
// RANDOM CHARACTER PICKER
// ----------------------
function get_char(string, max) {
  let index = Math.floor(Math.random() * max);
  return string.charAt(index);
}

// ----------------------
// LENGTH BUTTONS
// ----------------------
document.getElementById("plus").addEventListener("click", () => {
  if (length.value < 64) length.value++;
});

document.getElementById("minus").addEventListener("click", () => {
  if (length.value > 1) length.value--;
});

// ----------------------
// COPY BUTTON + TOOLTIP
// ----------------------
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);

  tooltip.show();
  copyBtn.innerText = "Copied";
  copyBtn.classList.replace("btn-success", "btn-secondary");
  copyBtn.setAttribute("disabled", "true");

  setTimeout(() => {
    tooltip.hide();
    copyBtn.innerText = "Copy";
    copyBtn.classList.replace("btn-secondary", "btn-success");
    copyBtn.removeAttribute("disabled");
  }, 700);
});

// ----------------------
// SYSTEM THEME DETECTION
// ----------------------
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// ----------------------
// APPLY THEME + ICON
// ----------------------
function applyTheme(theme) {
  html.setAttribute("data-bs-theme", theme);

  if (theme === "dark") {
    // Dark mode → show sun (switch to light)
    sun.classList.remove("d-none");
    moon.classList.add("d-none");
    themeToggle.classList.replace("btn-outline-dark", "btn-outline-light");
  } else {
    // Light mode → show moon (switch to dark)
    moon.classList.remove("d-none");
    sun.classList.add("d-none");
    themeToggle.classList.replace("btn-outline-light", "btn-outline-dark");
  }
}

// ----------------------
// INITIAL THEME SETUP
// ----------------------
applyTheme(getSystemTheme());

// ----------------------
// THEME TOGGLE BUTTON
// ----------------------
themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-bs-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
});

// ----------------------
// PASSWORD GENERATOR
// ----------------------
generate_btn.addEventListener("click", generate);

function generate() {
  let rand = "";
  let possibles = "";

  if (document.getElementById("Lowercase").checked) possibles += lowercase;
  if (document.getElementById("Uppercase").checked) possibles += uppercase;
  if (document.getElementById("Numbers").checked) possibles += numbers;
  if (document.getElementById("Symbols").checked) possibles += symbols;
  if (document.getElementById("spec_symbols").checked) possibles += spec_symbols;

  const gen_length = length.value;
  const string_length = possibles.length;

  for (let i = 0; i < gen_length; i++) {
    rand += get_char(possibles, string_length);
  }

  output.value = rand;
}

// Generate one on load
generate();
