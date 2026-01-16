import {getSystemTheme, applyTheme, initThemeToggle} from "./theme.js";
import {initCopyTooltip} from "./tooltip.js";
import {generatePassword} from "./generator.js";
import {initLengthButtons} from "./length.js";

const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");

// Theme
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
