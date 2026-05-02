document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit",(event) => {
    event.preventDefault();

    const task = document.getElementById("new-task-description").value;

    buildToDo(task);

    form.reset();
  });

  function buildToDo(task) {
    const taskList = document.getElementById("tasks");

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);
  }
});
