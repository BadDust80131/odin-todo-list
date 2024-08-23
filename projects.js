import { TODO } from "./todo-object";
import { saveProject, loadProject } from "./json.js"
import { displayProjects } from "./sidebar.js"

export function addProject(project = ["teasdsstdfgdfdsfsd", new TODO(), new TODO(), new TODO()]) {
    saveProject(project)
    const allProjects = [];
    for (var i = 0; i < localStorage.length; i++){
    allProjects.push(loadProject(localStorage.key(i)));
    }
    displayProjects(allProjects);
}