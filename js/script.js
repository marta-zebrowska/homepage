const button = document.querySelector(".js-button");
const header = document.querySelector(".js-header");

const toggleHeader = () => {
  header.classList.toggle("hide");
};

const changeText = () => {
  const newText = document.querySelector(".js-newText");

  newText.innerText = header.classList.contains("hide") ? "Pokaż" : "Ukryj";
};

const init = () => {
  console.log("Cześć wszystkim developerom ;)");

  button.addEventListener("click", toggleHeader);
  button.addEventListener("click", changeText);
  };

init ();