const sideBar = document.querySelector(".sidebar")
import taskImage from "./src/task.svg"

export function displayProjects(projects) {
    projects.forEach(element => {
        const projectElement = document.createElement("div");
        projectElement.className = "project"
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

        const subTask = document.createElement("div");
        subTask.className = "subtask";
        subTask.innerHTML = element[1].title;
        projectElement.appendChild(subTask);
    });
}