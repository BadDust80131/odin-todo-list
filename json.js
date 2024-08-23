import { TODO } from "./todo-object";

export function saveProject(project) {
    localStorage.setItem(project[0],JSON.stringify(project));
}

export function loadProject(project) {
    let returnArray = [];
    let obj = JSON.parse(localStorage.getItem(project[0]));
    returnArray.push(obj[0]);
    for (let i = 1; i < obj.length; i++) {
        let temp = new TODO();
        temp.title = obj[i].title;
        temp.description = obj[i].description;
        temp.dueDate = obj[i].dueDate;
        temp.priority = obj[i].priority;
        temp.notes = obj[i].notes;
        temp.complete = obj[i].complete;
        returnArray.push(temp);
    }
    return returnArray
}