export function initLengthButtons() {
  const length = document.getElementById("length");

  document.getElementById("plus").addEventListener("click", () => {
    if (length.value < 64) length.value++;
  });

  document.getElementById("minus").addEventListener("click", () => {
    if (length.value > 1) length.value--;
  });
}
