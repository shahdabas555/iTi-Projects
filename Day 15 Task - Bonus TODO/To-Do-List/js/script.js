"use strict" 

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    let task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);

    taskInput.value = "";
    renderTasks();
}

function deleteTask(id) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
    renderTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = getTasks();

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="task-actions">
                <i class="fas fa-pen" onclick="editTask(${task.id})"></i>
                <i class="fas fa-trash" onclick="deleteTask(${task.id})"></i>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function editTask(id) {
    let tasks = getTasks();
    let task = tasks.find(t => t.id === id);
    if(task) {
        let newText = prompt("Edit task:", task.text);
        if(newText) {
            task.text = newText.trim();
            saveTasks(tasks);
            renderTasks();
        }
    }
}