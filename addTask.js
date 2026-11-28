//Funktiolla listätään uusi tehtävä taulukkoon
let alku=1;
document.getElementById("tasksList").innerHTML = "";
function addTask() {
let task=document.getElementById("taskName").value;       
if(!task.trim()){
 return;
}
else{
let ajanhetki = new Date(); 
let aika = ajanhetki.getDate()+ "." + (ajanhetki.getMonth()+1)+ "." + ajanhetki.getFullYear() + "  " +ajanhetki.getHours() + ":" + ajanhetki.getMinutes();
task={ 
    name: task,
    status:"Not Started",
    luontiaika:aika,

};
tasks.push(task)

let i =alku
  while(alku===i){
      document.getElementById("tasksList").innerHTML +=
      `<div class="tasks">
       ${alku} ${task.name} ${aika} ${task.status}
       </div>`
      i++;
}
alku++;
document.getElementById("taskName").value="";
        
}
}

