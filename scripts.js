
function addTask() {
    const newTaskInput = document.getElementById("newTask");
  const taskText = newTaskInput.value.trim();
  

    if (taskText !== "") {
      const tasksList = document.getElementById("tasks");

      const li = document.createElement("li");
      li.innerHTML = `
      <button class="delete" onclick="deleteTask(this)"> <input type="checkbox" id = "check"></button>
        <span>${taskText}</span>
        <span class="buttons">
       
          <button class="edit" onclick="editTask(this)">Edit</button>
        </span>
      `;
      li.style.backgroundColor= " red"
      li.style.width = "36rem"
      li.style.textAlign="center"
      li.style.padding = "20px"
      li.style.listStyleType = "none"
      li.style.marginBottom = "10px"
      li.style.borderRadius = "20px"

    

      tasksList.appendChild(li);

      newTaskInput.value = ""; // Clear input field after adding a task
    }
  }

  function editTask(button) {
    const li = button.closest("li");
    const taskText = li.querySelector("span");
    const newTaskText = prompt("Edit task:", taskText.innerTEXT);
    if (newTaskText !== null) {
      taskText.innerTEXT = newTaskText;
  
    }
    else {
      alert('goo')
    }
    
}

  function deleteTask(button) {
    const li = button.closest("li");
    li.remove();
    alert('congratulatios on completing Task')
}
  
