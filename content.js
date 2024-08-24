import { form } from "./form";
import { saveProject } from "./json";
import { addTask } from "./projects";
import { TODO } from "./todo-object";

const main = document.querySelector(".main");
let input = document.querySelector(".share");

export function displayContent(project) {
  main.innerHTML = project[0];
  project.slice(1).forEach((element) => {
    const container = document.createElement("div");
    container.addEventListener("click", () => {
      form(project, element);
    });
    const complete = document.createElement("input");
    complete.type = "checkbox";
    complete.checked = element.complete;
    complete.addEventListener("click", () => {
      element.complete = complete.checked;
      saveProject(project);
    });
    container.appendChild(complete);
    const due = document.createElement("span");
    due.innerHTML = element.dueDate;
    container.insertAdjacentText("beforeend", element.title + " ");
    container.appendChild(due);
    main.appendChild(container);
  });
  input = document.querySelector(".share");
  const button = document.createElement("button");
  button.innerHTML = "+";
  button.addEventListener("click", () => {
    if (input.value != "") {
      displayContent(addTask(project, new TODO(input.value)));
    }
  });
  main.appendChild(button);
}
