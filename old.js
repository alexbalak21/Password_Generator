//TESTING LOCAL STORAGE
localStorage.setItem("key", "Some kind of value")

const passwords = ["abc", "def", "gh"]
localStorage.setItem("passwords", JSON.stringify(passwords))

function isDarkMode() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
}

if (isDarkMode()) {
  console.log("Dark mode is enabled")
} else {
  console.log("Dark mode is not enabled")
}
