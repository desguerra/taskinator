// target the form id, to listen to the entire form
// rather than just the button
var formEl = document.querySelector("#task-form");
// target the #tasks-to-do ul element
var tasksToDoEl = document.querySelector("#tasks-to-do");

// important to place this function BEFORE the event listener!!
var createTaskHandler = function() {

    event.preventDefault();

    // create new list element
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    // append li element to page inside the correct ul element
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);