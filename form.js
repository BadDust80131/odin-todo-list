import { displayContent } from "./content";
import { removeTask, updateTask } from "./projects";
import { TODO } from "./todo-object";

const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
let container = document.querySelector(".form");
let del = document.querySelector("#delete");

let title = document.querySelector("#title");
let description = document.querySelector("#description");
let due = document.querySelector("#date");
let priority = document.querySelector("#priority");
let notes = document.querySelector("#notes");
let complete = document.querySelector("#complete");

function replaceEventListener(type, newListener, project, task) {
  const clone = container.cloneNode(true);
  container.parentNode.replaceChild(clone, container);
  container = clone;
  container.addEventListener(type, newListener);

  // Reattach the delete event listener
  del = document.querySelector("#delete");
  del.addEventListener("click", () => {
    modal.style.display = "none";
    displayContent(removeTask(project, task));
  });
}

export function form(project, task) {
  modal.style.display = "block";
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  title = document.querySelector("#title");
  description = document.querySelector("#description");
  due = document.querySelector("#date");
  priority = document.querySelector("#priority");
  notes = document.querySelector("#notes");
  complete = document.querySelector("#complete");
  del = document.querySelector("#delete");

  title.value = task.title;
  description.value = task.description;
  due.value = task.dueDate;
  priority.checked = task.priority;
  notes.value = task.notes;
  complete.checked = task.complete;
  replaceEventListener(
    "submit",
    (event) => {
      title = document.querySelector("#title");
      description = document.querySelector("#description");
      due = document.querySelector("#date");
      priority = document.querySelector("#priority");
      notes = document.querySelector("#notes");
      complete = document.querySelector("#complete");
      event.preventDefault();
      updateTask(
        project,
        task,
        new TODO(
          title.value,
          description.value,
          due.value,
          priority.checked,
          notes.value,
          complete.checked
        )
      );
    },
    project,
    task
  );
}
