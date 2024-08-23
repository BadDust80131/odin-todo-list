import './style.css'
import { TODO } from "./todo-object.js"
import { saveProject, loadProject } from "./json.js"
import { displayProjects } from "./sidebar.js"
import { addProject } from "./projects.js"

const allProjects = [];
for (var i = 0; i < localStorage.length; i++){
  allProjects.push(loadProject(localStorage.key(i)));
}

displayProjects(allProjects);
