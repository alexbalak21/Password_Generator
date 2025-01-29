const output = document.getElementById("output");
const generate_btn = document.getElementById("generate");

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
  if (length.value < 32) length.value++;
});
document.getElementById("minus").addEventListener("click", () => {
  if (length.value > 1) length.value--;
});

document
  .getElementById("copy")
  .addEventListener("click", () => navigator.clipboard.writeText(output.value));
generate_btn.addEventListener("click", generate);

function generate() {
  let rand = "";
  let possibles = "";
  if (document.getElementById("Lowercase").checked) possibles += lowercase;
  if (document.getElementById("Uppercase").checked) possibles += uppercase;
  if (document.getElementById("Numbers").checked) possibles += numbers;
  if (document.getElementById("Symbols").checked) possibles += symbols;
  if (document.getElementById("spec_symbols").checked)
    possibles += spec_symbols;
  const gen_length = length.value;
  const string_length = possibles.length;
  for (let i = 0; i < gen_length; i++)
    rand += get_char(possibles, string_length);
  output.value = rand;
}
generate();
