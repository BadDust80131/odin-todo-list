// import { TODO } from "./todo-object";
import { saveProject, loadProject } from "./json.js";
import { displayProjects } from "./sidebar.js";

export function addProject(project = ["Example 462"]) {
  saveProject(project);
  const allProjects = [];
  for (let i = 0; i < localStorage.length; i++) {
    allProjects.push(loadProject(localStorage.key(i)));
  }
  displayProjects(allProjects);
}

export function removeProject(projectName) {
  const allProjects = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != projectName) {
      allProjects.push(loadProject(localStorage.key(i)));
    }
  }
  localStorage.clear();
  for (let i = 0; i < allProjects.length; i++) {
    saveProject(allProjects[i]);
  }
  displayProjects(allProjects);
}
