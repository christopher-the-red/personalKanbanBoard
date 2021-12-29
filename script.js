const task = document.querySelector('.task');
const buttons = document.querySelectorAll("[data-target]");
const close_buttons = document.querySelectorAll(".btn-close-window");

//Allow the New Task Button to open the New Task Creation Window.
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.target).classList.remove("active");
    overlay.classList.remove("active");
  });
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

const new_task_submit = document.getElementById("new-task-submit");
if(new_task_submit) {
  new_task_submit.addEventListener('click', createTask);
}

function createTask() {
  const task_div = document.createElement("div");
  const input_value = document.getElementById("new-task-name").value;

  //Take the text from the above input and create a task with that text.
  const text = document.createTextNode(input_value);

  task_div.appendChild(text);
  //Add the proper class (task in this case) to the newly created task.
  task_div.classList.add("task");

  //Assign an id to the newly created task.
  task_div.id = "task";

  //Add the draggable attribute to the newly created task and set it to true to allow drag and drop.
  if(task_div){
    task_div.setAttribute("draggable", "true");
    task_div.setAttribute("contenteditable", "true");
    task_div.setAttribute("ondragstart", "drag(event)");
  }

  //Add the new task to the To Do section of the Kanban Board.
  const todo = document.getElementById("todo");
  todo.appendChild(task_div);

  document.getElementById("new-task-name").value = "";
  new_task_form.classList.remove("active");
  overlay.classList.remove("active");
}
