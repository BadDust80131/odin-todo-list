import './style.css'
import { TODO } from "./todo-object.js"
import { saveProject, loadProject } from "./json.js"

const obj = new TODO();
obj.notes = "help"

console.log(obj)

const testProject = [
  "Test Project",
  new TODO(),
  new TODO(),
  new TODO(),
]
console.log(testProject)

saveProject(testProject);
console.log(loadProject(testProject))
