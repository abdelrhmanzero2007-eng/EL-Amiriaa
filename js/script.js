let heder = document.querySelector(".header");
let xMark = document.querySelector(".fa-xmark");
let barsIcon = document.querySelector(".fa-bars");
let bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
  heder.classList.toggle("actev");
  xMark.classList.toggle("actev");
  barsIcon.classList.toggle("actev");
  bars.classList.toggle("actev");
});
