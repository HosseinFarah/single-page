document.querySelectorAll("div").forEach((el) => {
  el.style.display = "none";
});

function paginate(page) {
  document.querySelectorAll("div").forEach((el) => {
    el.style.display = "none";
  });
  document.querySelector(`#${page}`).style.display = "block";
}

document.querySelectorAll("button").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        paginate(e.target.dataset.page);
    });
});