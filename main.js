import './style.css'
import { TODO } from "./todo-object.js"
import { saveProject, loadProject } from "./json.js"
import { displayProjects } from "./sidebar.js"

const obj = new TODO();
obj.notes = "help"

console.log(obj)

const testProject = [
  "Test Project",
  new TODO(),
  new TODO(),
  new TODO(),
]

const testProject2 = [
  "Test Project2",
  new TODO(),
  new TODO(),
  new TODO(),
]

const allProjects = [
  testProject,
  testProject2,
]


saveProject(testProject);
saveProject(testProject2);

displayProjects(allProjects);
