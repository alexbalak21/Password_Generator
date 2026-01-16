export function initCopyTooltip(copyBtn, output) {
  const tooltip = new bootstrap.Tooltip(copyBtn, {trigger: "manual"});
  const btnContent = copyBtn.innerHTML;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);

    tooltip.show();
    copyBtn.innerText = "Copied !";
    copyBtn.classList.replace("btn-success", "btn-secondary");
    copyBtn.setAttribute("disabled", "true");

    setTimeout(() => {
      tooltip.hide();
      copyBtn.innerHTML = btnContent;
      copyBtn.classList.replace("btn-secondary", "btn-success");
      copyBtn.removeAttribute("disabled");
    }, 700);
  });
}
