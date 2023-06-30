const collapsibles = document.querySelectorAll(".collapsible");
const smallImages = document.querySelectorAll(".small-img");
const largeImage = document.querySelector(".large-img");

collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});

smallImages.forEach((item) => {
  item.addEventListener("click", function () {
    largeImage.innerHTML = this.innerHTML;
  });
});
