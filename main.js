import './style.css'
import { TODO } from "./todo-object.js"
import { saveProject, loadProject } from "./json.js"
import { displayProjects } from "./sidebar.js"

// const obj = new TODO();
// obj.notes = "help"
// console.log(obj)

const allProjects = [];

for (var i = 0; i < localStorage.length; i++){
  allProjects.push(loadProject(localStorage.key(i)));
}

displayProjects(allProjects);
