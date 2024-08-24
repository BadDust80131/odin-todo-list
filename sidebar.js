const sideBar = document.querySelector(".my-projects");
import { displayContent } from "./content";
import { addProject, removeProject } from "./projects";
import taskImage from "./src/tag.svg";
import { TODO } from "./todo-object";

export function displayProjects(projects) {
  sideBar.innerHTML = "";

  sideBar.insertAdjacentHTML("beforeend", "<p>My Projects</p>");
  const button = document.createElement("button");
  button.innerHTML = "+";
  button.addEventListener("click", () => {
    addProject([input.value, new TODO()]);
  });
  sideBar.appendChild(button);
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "-";
  removeButton.addEventListener("click", () => {
    removeProject(input.value);
  });
  sideBar.appendChild(removeButton);

  const input = document.createElement("input");
  input.type = "text";
  sideBar.appendChild(input);

  projects.forEach((element) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";
    projectElement.addEventListener("click", () => {
      displayContent(element);
    });
    sideBar.appendChild(projectElement);

    const projectTitle = document.createElement("div");
    projectTitle.className = "project-title";
    projectElement.appendChild(projectTitle);

    const image = document.createElement("img");
    image.src = taskImage;
    projectTitle.appendChild(image);

    const title = document.createElement("p");
    title.innerHTML = element[0];
    projectTitle.insertAdjacentElement("beforeend", title);

    const subTask = document.createElement("div");
    subTask.className = "subtask";
    let subTaskText = "";
    for (let i = 1; i < element.length; i++) {
      subTaskText += element[i].title + "<br>";
    }
    subTask.innerHTML = subTaskText;
    projectElement.appendChild(subTask);
  });
}
