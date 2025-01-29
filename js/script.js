const output = document.getElementById("output");
const generate_btn = document.getElementById("generate");
const copy_btn = document.getElementById("copy");
const copy_icon = document.getElementById("copy-icon");
const copied_info = document.getElementById("copied");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "?!@#$%^&*+";
const spec_symbols = "/()[],.:;=-_";
const length = document.getElementById("length");

function get_char(string, max) {
  let index = Math.floor(Math.random() * max);
  return string.charAt(index);
}
document.getElementById("plus").addEventListener("click", () => {
  if (length.value < 32) {
    length.value++;
    generate();
  }
});
document.getElementById("minus").addEventListener("click", () => {
  if (length.value > 1) {
    length.value--;
    generate();
  }
});

copy_btn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copy_btn.classList.replace("btn-success", "btn-outline-success");
  copy_icon.classList.replace("bi-clipboard", "bi-clipboard-check");
  copied_info.classList.add("show");

  // Revert back after 0.7 seconds
  setTimeout(() => {
    copy_btn.classList.replace("btn-outline-success", "btn-success");
    copy_icon.classList.replace("bi-clipboard-check", "bi-clipboard");
    copied_info.classList.remove("show");
  }, 700);
});

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
  for (let i = 0; i < gen_length; i++) rand += get_char(possibles, string_length);
  output.value = rand;
}
generate();
