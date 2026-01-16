import {getSystemTheme, applyTheme, initThemeToggle} from "./theme.js";
import {initCopyTooltip} from "./tooltip.js";
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

await loadSVG("moon", "icons/moon.svg");
await loadSVG("sun", "icons/sun.svg");
await loadSVG("copyIcon", "icons/copy.svg");

applyTheme(getSystemTheme());
initThemeToggle();

// Tooltip
initCopyTooltip(copyBtn, output);

// Length buttons
initLengthButtons();

// Generator
generateBtn.addEventListener("click", () => {
  output.value = generatePassword();
});

// Generate once on load
output.value = generatePassword();
