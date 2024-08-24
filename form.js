const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const due = document.querySelector("#date");
const priority = document.querySelector("#priority");
const notes = document.querySelector("#notes");
const complete = document.querySelector("#complete");

export function form(project, task) {
  console.log(project, task);
  modal.style.display = "block";
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  title.value = task.title;
  description.value = task.description;
  due.value = task.dueDate.slice(0, 10);
  priority.checked = task.priority;
  notes.value = task.notes;
  complete.checked = task.complete;
}
