const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

export function form(project, task) {
  console.log(project, task);
  modal.style.display = "block";
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
