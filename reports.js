//Funktio koostaa tiedon, kuinka moni tehtävistä on
//Not started
//In progress ja
//Done tilassa
//Tieto palautetaan sitä kutsuneelle taholle
function showReportByStatus(allTasks) {
    let notStarted = 0;
    let inProgress = 0;
    let done = 0;

    for (let i = 0; i < allTasks.length; i++) {
        let task = allTasks[i];

        if (task.status == "Not Started") {
            notStarted++;
        } else if (task.status == "In Progress") {
            inProgress++;
        } else if (task.status == "Done") {
            done++;
        }
    }

    let message = "Mukavasti menee";

    if (allTasks.length > 0) {
        if (notStarted > allTasks.length * 0.5) {
            message = "Sinulla on liikaa tekemättömiä tehtäviä";
        } else if (done > allTasks.length * 0.8) {
            message = "Olet ollut ahkera";
        }
    }

    let reportText = "Not started: " + notStarted + "<br>";
    reportText += "In progress: " + inProgress + "<br>";
    reportText += "Done: " + done + "<br><br>";
    reportText += message;

    return reportText;
}
