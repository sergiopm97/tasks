let taskInput = document.querySelector(".task-input");
let taskButton = document.querySelector(".submit-button");
let taskList = document.querySelector(".task-container");

taskButton.addEventListener("click", (state) => {

    state.preventDefault();

    if (taskInput.value !== "") {

        const taskContent = taskInput.value;

        let taskContainer = document.createElement("div");
        let taskText = document.createElement("p");
        let taskRemover = document.createElement("button");

        taskText.textContent = taskContent;
        taskText.className = "task-content";

        taskRemover.textContent = "X";
        taskRemover.className = "task-remover";

        taskContainer.appendChild(taskText);
        taskContainer.appendChild(taskRemover);
        taskContainer.className = "task-block";

        taskList.appendChild(taskContainer);
        taskInput.value = "";

        taskRemover.addEventListener("click", () => {
            taskRemover.parentElement.remove();
        })
    }
})