//Funktio päivittää tehtävälistan (task list)
function refreshList() {
    let tasksList = document.getElementById("tasksList");
    let taskText = "";

    if (tasks.length == 0) {
        taskText = "No tasks yet";

    } else {
        for (let i = 0; i < tasks.length; i++) {
        let task = task [i];
        taskText += task.name + " - " + task.status + "<br>";
        }
    }

    tasksList.innerHTML = taskText;
}
