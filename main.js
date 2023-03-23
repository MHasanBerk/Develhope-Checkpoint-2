let tasks = [];

let input = document.getElementById("task");
let button = document.getElementById("button");
let remove = document.getElementById("remove");

const body = document.querySelector("body");

const ul = document.createElement("ul");
body.appendChild(ul);

button.addEventListener("click",saveTask);
remove.addEventListener("click",clear);


function saveTask(save){
    tasks.push(input.value);
    localStorage.setItem("task",JSON.stringify(tasks));
    let h3 = document.createElement("h3");
    h3.innerHTML = input.value;
    input.value = "";
    ul.appendChild(h3);
    let obj = JSON.parse(localStorage.getItem("task"));
    save.preventDefault();
    console.log(obj);
}

function clear(){
    ul.remove();
}