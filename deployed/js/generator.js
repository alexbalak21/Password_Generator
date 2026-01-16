const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "?!@#$%^&*+";
const spec_symbols = "/()[],.:;=-_";

function getChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

export function generatePassword() {
  let possibles = "";

  if (document.getElementById("Lowercase").checked) possibles += lowercase;
  if (document.getElementById("Uppercase").checked) possibles += uppercase;
  if (document.getElementById("Numbers").checked) possibles += numbers;
  if (document.getElementById("Symbols").checked) possibles += symbols;
  if (document.getElementById("spec_symbols").checked) possibles += spec_symbols;

  const length = Number(document.getElementById("length").value);
  let result = "";

  for (let i = 0; i < length; i++) {
    result += getChar(possibles);
  }

  return result;
}
