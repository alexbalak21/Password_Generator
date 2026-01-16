// copy.js

export function initCopyButton(copyBtn, output) {
  const tooltip = new bootstrap.Tooltip(copyBtn, {trigger: "manual"});
  const originalHTML = copyBtn.innerHTML;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);

    // Show tooltip
    tooltip.show();

    // Visual feedback
    copyBtn.innerText = "Copied!";
    copyBtn.classList.replace("btn-success", "btn-secondary");
    copyBtn.disabled = true;

    // Restore after delay
    setTimeout(() => {
      tooltip.hide();
      copyBtn.innerHTML = originalHTML;
      copyBtn.classList.replace("btn-secondary", "btn-success");
      copyBtn.disabled = false;
    }, 700);
  });
}
