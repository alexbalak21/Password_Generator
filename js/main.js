import {getSystemTheme, applyTheme, initThemeToggle} from "./theme.js";
import {initCopyButton} from "./copy.js";
import {generatePassword} from "./generator.js";
import {initLengthButtons} from "./length.js";

const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");

async function loadSVG(id, file) {
  const container = document.getElementById(id);
  const svg = await fetch(file).then((res) => res.text());
  container.innerHTML = svg;
}

// Load icons
await loadSVG("moon", "/static/icons/moon.svg");
await loadSVG("sun", "/static/icons/sun.svg");
await loadSVG("copyIcon", "/static/icons/copy.svg");

// Theme
applyTheme(getSystemTheme());
initThemeToggle();

// Copy button (merged logic)
initCopyButton(copyBtn, output);

// Length buttons
initLengthButtons();

// Generator button
generateBtn.addEventListener("click", () => {
  output.value = generatePassword();
});

// Generate once on load
output.value = generatePassword();
