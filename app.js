document.addEventListener("DOMContentLoaded", function() {
    const newTaskInput = document.getElementById("new-task-input");
    const todoSection = document.getElementById("todo-sec");
    const doneSection = document.getElementById("done-sec");

    function createTaskElement(taskText) {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-icons");

        const taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.value = taskText;
        taskInput.setAttribute("disabled", true);

        const iconContainer = document.createElement("div");
        iconContainer.classList.add("right-icons", "icon");

        const checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-solid", "fa-check");
        checkIcon.addEventListener("click", function() {
            moveTaskToDone(moveTaskToDone(this.parentNode));
          });          


        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-trash");
        deleteIcon.addEventListener("click", function() {
            taskContainer.remove();
        });

        iconContainer.appendChild(checkIcon);
        iconContainer.appendChild(deleteIcon);

        taskContainer.appendChild(taskInput);
        taskContainer.appendChild(iconContainer);

        return taskContainer;
    }

    function moveTaskToDone(taskElement) {
        const taskText = taskElement.querySelector("input").value;
        const doneTaskElement = createTaskElement(taskText); 
        doneSection.appendChild(doneTaskElement);
        taskElement.remove(); // ...
      }      
    

    document.querySelector("i.fa-plus").addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const taskElement = createTaskElement(taskText);
            todoSection.appendChild(taskElement);
            newTaskInput.value = "";
        }
    });

    document.querySelector("i.fa-arrow-rotate-left").addEventListener("click", function() {
        const doneTaskElement = this.parentNode.parentNode;
        const taskText = doneTaskElement.querySelector("input").value;
        const todoTaskElement = createTaskElement(taskText);
        todoSection.appendChild(todoTaskElement);
        doneTaskElement.remove();
    });
});
