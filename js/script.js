console.log("Cześć wszystkim developerom ;)");

let button = document.querySelector(".js-button");
let header = document.querySelector(".js-header");
let newText = document.querySelector(".js-newText");

button.addEventListener("click", () => {
  header.classList.toggle("hide");

  newText.innerText = header.classList.contains("hide")
    ? "Pokaż"
    : "Ukryj";
});
