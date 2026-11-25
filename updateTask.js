//Funktio päivittää valitun tehtävän statustiedon sekä päivitysajankohdan
function updateTask(taskName, newStatus) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].name == taskName) {
            tasks[i].status = newStatus;
            tasks[i].updated = tasks[i].updated = new Date().toLocaleString("fi-FI", {day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit"});
            return true;   // löytyi ja päivitettiin
        }
    }
    return false;          // tehtävää ei löytynyt
}
