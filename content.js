import { form } from "./form";
import { saveProject } from "./json";

const main = document.querySelector(".main");

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
    due.innerHTML = element.dueDate.slice(0, 10);
    container.insertAdjacentText("beforeend", element.title + " ");
    container.appendChild(due);
    main.appendChild(container);
  });
}
