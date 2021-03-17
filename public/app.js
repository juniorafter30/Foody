const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const showMore = document.querySelector("#showMore");
const menuMore = document.querySelector("#menuMore");

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

showMore.addEventListener("click", () => {
  menuMore.classList.toggle("hidden");
});
