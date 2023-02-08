let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let taskDiv = document.querySelector(".tasks");

//Empty Array TO Store The Tasks
let arrayOfTasks=[]; 

//check if there tasks in local storage
if(localStorage.getItem("tasks")){
    arrayOfTasks=JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorage();

//Add Task
submit.onclick = function(){
    if(input.value !== ""){
        addTaskToArray(input.value); //Add Task To Array Of Tasks
        input.value = ""; //Empty Input Field
    }
};

taskDiv.addEventListener("click",(e) =>{
    //Delete Button
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove(); //from page
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));//from local storage
    }
})

function addTaskToArray(taskText) {
    //Task Data
    const task ={
        id: Date.now(),
        title:taskText,
        completed:false,
    };
    //Push Task TO Array Of Tasks 
    arrayOfTasks.push(task); 
    //Add tasks to page
    addElementsToPageFrom(arrayOfTasks);  
    //Add tasks to local storage  
    addDataToLocalStorageFrom(arrayOfTasks);
  
}

function addElementsToPageFrom(arrayOfTasks){
    //Empty the tasks div
    taskDiv.innerHTML="";
    //Looping array of tasks 
    arrayOfTasks.forEach((task) => {
        //Create MAin Div
        let div = document.createElement("div");
        div.className = "task";
        //Check if task is done
        if(task.completed === true){
            div.className = "task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.title));
        console.log(div);
        //Create Delete Button
        let span = document.createElement("span");
        span.className="del";
        span.appendChild(document.createTextNode("Delete"));
        //Append Button to main div
        div.appendChild(span);
        //Add task div to tasks container
        taskDiv.appendChild(div);
    });
}

function addDataToLocalStorageFrom(arrayOfTasks){
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("tasks");
    if(data){
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}

function deleteTaskWith(taskId){
    arrayOfTasks = arrayOfTasks.filter((task)=> task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
      if (arrayOfTasks[i].id == taskId) {
        arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
      }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
  }
