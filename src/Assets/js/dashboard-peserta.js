// Dropdown Sidebar
document.querySelectorAll(".side-class .sideClass-link").forEach((el) => {
  el.addEventListener("click", function (e) {
    document
      .querySelectorAll(".side-class")
      .forEach((el) => el.classList.toggle("active"));
    document
      .querySelectorAll(".side-class .sideClass-link")
      .forEach((el) => el.classList.toggle("active"));
  });
});

// Assigment class

document.querySelectorAll(".assigment-list .action .btn >").forEach((el) => {
  el.addEventListener("click", function () {
    this.closest(".assigment-list").classList.toggle("active");
  });
});
