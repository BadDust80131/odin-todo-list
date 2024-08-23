import { TODO } from "./todo-object";
import { saveProject, loadProject } from "./json.js"
import { displayProjects } from "./sidebar.js"

export function addProject(project = ["testdsfsd", new TODO(), new TODO(), new TODO()]) {
    console.log(project)
    const allProjects = [];
    for (var i = 0; i < localStorage.length; i++){
    allProjects.push(loadProject(localStorage.key(i)));
    }
    saveProject(project)
    allProjects.push(project)
    displayProjects(allProjects);
}