document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    function addTask(taskText) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="editBtn">Editar</button>
        <button class="deleteBtn">Borrar</button>
      `;
      taskList.appendChild(li);
    }
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      } else {
        alert("Por favor, escribe una tarea válida.");
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("deleteBtn")) {
        event.target.parentNode.remove();
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("editBtn")) {
        const taskText = event.target.parentNode.querySelector(".taskText");
        const newText = prompt("Editar tarea:", taskText.textContent);
        if (newText !== null) {
          taskText.textContent = newText;
        }
      }
    });
  });
  
  