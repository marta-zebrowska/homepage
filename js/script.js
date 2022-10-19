console.log("Cześć wszystkim developerom ;)");

let main__button = document.querySelector(".main__button");
let main__header = document.querySelector(".main__header");
let main__newText = document.querySelector(".main__newText");

main__button.addEventListener("click", () => {
  main__header.classList.toggle("hide");

  main__newText.innerText = main__header.classList.contains("hide")
    ? "Pokaż"
    : "Ukryj";
});