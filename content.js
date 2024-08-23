const main = document.querySelector(".main")

export function displayContent(project) {
    main.innerHTML = project[0];
    project.slice(1).forEach(element => {
        const temp = document.createElement("div")
        temp.innerHTML = element.title
        main.appendChild(temp);
    });
    
}