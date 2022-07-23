// target the form id, to listen to the entire form
// rather than just the button
var formEl = document.querySelector("#task-form");
// target the #tasks-to-do ul element
var tasksToDoEl = document.querySelector("#tasks-to-do");

// important to place this function BEFORE the event listener!!
var taskFormHandler = function() {

    event.preventDefault();

    // select `input` text tag with name="task-name" and grab the value
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // select `select` tag with name="task-type" and grab the value
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset();

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    // create new list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);