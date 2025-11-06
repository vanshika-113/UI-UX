const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDesc").value.trim();

  if (title === "" || desc === "") {
    alert("Please enter both title and description!");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskTitle = document.createElement("h3");
  taskTitle.textContent = title;

  const taskDesc = document.createElement("p");
  taskDesc.textContent = desc;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Mark as Completed";
  completeBtn.addEventListener("click", () => toggleComplete(taskDiv, completeBtn));

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editTask(taskDiv, taskTitle, taskDesc, editBtn));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => taskDiv.remove());

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn); 

  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDesc);
  taskDiv.appendChild(btnContainer);

  taskList.appendChild(taskDiv);

  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
}

function toggleComplete(taskDiv, button) {
  taskDiv.classList.toggle("completed");
  button.textContent = taskDiv.classList.contains("completed")
    ? "Mark as Incomplete"
    : "Mark as Completed";
}

function editTask(taskDiv, taskTitle, taskDesc, editBtn) {
  if (editBtn.textContent === "Edit") {
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = taskTitle.textContent;

    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.value = taskDesc.textContent;

    taskDiv.replaceChild(titleInput, taskTitle);
    taskDiv.replaceChild(descInput, taskDesc);

    editBtn.textContent = "Save";
  } else {
    const inputs = taskDiv.getElementsByTagName("input");
    const newTitle = inputs[0].value.trim();
    const newDesc = inputs[1].value.trim();

    const newTitleEl = document.createElement("h3");
    newTitleEl.textContent = newTitle;

    const newDescEl = document.createElement("p");
    newDescEl.textContent = newDesc;

    taskDiv.replaceChild(newTitleEl, inputs[0]);
    taskDiv.replaceChild(newDescEl, inputs[1]);

    editBtn.textContent = "Edit";
  }
}
