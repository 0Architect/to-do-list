//Import utility functions

const taskInput = document.getElementById("task");
  const addBtn = document.getElementById("add-btn");
  const taskList = document.getElementById("task-list");
  const removeItem = (event) =>{
    const targetItem = event.target;
    if(targetItem.classList.contains('trash-icon')){
        const parent = targetItem.parentNode;
        parent.remove();
}}

const AddItem = () =>{
    const taskText = taskInput.value;
    if (taskText !== "") {
        const container = document.createElement('div');
        container.classList.add('li-container');
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        container.appendChild(taskItem);
        taskList.appendChild(container);
        taskInput.value = "";
    }
}
// Select elements

addBtn.addEventListener("click", AddItem);

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addBtn.click();
    }
  });

// Mark task as completed
taskList.addEventListener("click", function (event) {
    const taskItem = event.target;
    if(taskItem.tagName === "LI"){
        const daddy = taskItem.parentNode;
        taskItem.classList.toggle("completed");

        const trashElements = daddy.querySelectorAll("span"); 

        let trashChecker = false;
        let trashBro = null;

        for (let i = 0; i < trashElements.length; i++) {
        const childElement = trashElements[i];
        if (daddy.contains(childElement)) {
            trashChecker = true;
            trashBro = childElement;
            break;
            }
        }

        if(trashChecker){
            daddy.removeChild(trashBro);
        }
        else{
        const trash_icon = document.createElement("span");
        trash_icon.classList.add("material-symbols-outlined");
        trash_icon.classList.add("trash-icon");
        trash_icon.innerHTML = "delete";
        daddy.appendChild(trash_icon);
        }
    }
});

taskList.addEventListener("click",removeItem(e));
