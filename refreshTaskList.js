//Funktio päivittää tehtävälistan (task list)
function refreshList() {
    let tasksList = document.getElementById("tasksList");
    let taskText = "";

    if (tasks.length == 0) {
        taskText = "No tasks yet";

    } else {
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];

            taskText += task.name + " - " + task.status;

            if (task.updated) {
                taskText += " - Changed: " + task.updated;
            }

            taskText += "<br>";
        }
    }

    tasksList.innerHTML = taskText;
}
