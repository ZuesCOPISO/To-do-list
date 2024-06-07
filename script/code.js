document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("addButton");
    let sortButton = document.getElementById("sortButton");
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    addButton.addEventListener("click", addTask);
    sortButton.addEventListener("click", sortTasks);

    function addTask() {
        let input = taskInput.value.trim();
        if (input.length < 3) {
            alert("Please enter a task with at least 3 characters.");
            return;
        }
        input = input.charAt(0).toUpperCase() + input.slice(1);
        let li = document.createElement("li");
        li.textContent = input;
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
        li.addEventListener("click", toggleTask);
        deleteButton.addEventListener("click", deleteTask);
    }

    function toggleTask() {
        this.classList.toggle("completed");
    }

    function deleteTask(event) {
        event.stopPropagation();
        this.parentNode.remove();
    }

    function sortTasks() {
        let tasks = Array.from(taskList.children);
        tasks.sort(function(a, b) {
            return a.textContent.localeCompare(b.textContent);
        });
        tasks.forEach(function(task) {
            taskList.appendChild(task);
        });
    }
});