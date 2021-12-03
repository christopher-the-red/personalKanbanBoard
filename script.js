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
