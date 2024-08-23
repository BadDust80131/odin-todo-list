const sideBar = document.querySelector(".my-projects")
import { displayContent } from "./content";
import { addProject } from "./projects";
import taskImage from "./src/tag.svg"


export function displayProjects(projects) {
    sideBar.innerHTML =  '<p>My Projects</p>';
    projects.forEach(element => {
        const projectElement = document.createElement("div");
        projectElement.className = "project"
        projectElement.addEventListener("click", () => {
            displayContent(element)
        })
        sideBar.appendChild(projectElement);

        const projectTitle = document.createElement("div");
        projectTitle.className = "project-title";
        projectElement.appendChild(projectTitle);

        const image = document.createElement("img");
        image.src = taskImage;
        projectTitle.appendChild(image);

        const title = document.createElement("p")
        title.innerHTML = element[0]
        projectTitle.insertAdjacentElement('beforeend', title)

        // const subTask = document.createElement("div");
        // subTask.className = "subtask";
        // let subTaskText = "";
        // for (let i = 1; i < element.length; i++) {
        //     subTaskText += element[i].title + "<br>"
        // }
        // subTask.innerHTML = subTaskText;
        // projectElement.appendChild(subTask);
    });
}