// import { TODO } from "./todo-object";
import { displayContent } from "./content.js";
import { saveProject, loadProject } from "./json.js";
import { displayProjects } from "./sidebar.js";

const main = document.querySelector(".main");

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
  if (main.innerHTML.includes(projectName)) {
    main.innerHTML = "";
  }
}

export function updateTask(project, task, newTask) {
  displayContent(addTask(removeTask(project, task), newTask));
}

export function removeTask(project, task) {
  const allTasks = [project[0]];
  for (let i = 1; i < project.length; i++) {
    if (project[i] != task) {
      allTasks.push(project[i]);
    }
  }
  removeProject(project[0]);
  addProject(allTasks);

  return allTasks;
}

export function addTask(project, task) {
  project.push(task);
  removeProject(project[0]);
  addProject(project);
  return project;
}
