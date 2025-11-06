const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");
addTaskBtn.addEventListener("click",addTask);
function addTask(){
    const title=document.getElementById("taskTitle").value.trim();
    const desc=document.getElementById("taskDesc").value.trim();
    if(title==="" || desc===""){
        alert("Please enter both title and description.");
        return;
    }
    const taskDiv=document.createElement("div");
    taskDiv.classList.add("task");
    const taskTitle=document.createElement("h3");
    taskTitle.textContent=title;
    const taskDesc=document.createElement("p");
    taskDesc.textContent=desc;
    const btnContainer=document.createElement("div");
    btnContainer.classList.add("task-buttons");
    const completeBtn=document.createElement("button");
    completeBtn.textContent="Mark as Completed";
    completeBtn.addEventListener("click",()=>toggleComplete(taskDiv,completeBtn));
    const editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    editBtn.addEventListener("click",()=>editTask(taskDiv,taskTitle,taskDesc,editBtn));
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.addEventListener("click",()=>taskDiv.remove());
    


}