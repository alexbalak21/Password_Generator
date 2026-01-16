export function initCopyButton(copyBtn, output) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
  });
}
