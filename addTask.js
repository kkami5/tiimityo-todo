//Funktiolla listätään uusi tehtävä taulukkoon
let alku=1;
document.getElementById("tasksList").innerHTML = "";
function addTask() {
let task=document.getElementById("taskName").value;       
let ajanhetki = new Date(); 
let aika = ajanhetki.getDate()+ "." + (ajanhetki.getMonth()+1)+ "." + ajanhetki.getFullYear() + "  " +ajanhetki.getHours() + ":" + ajanhetki.getMinutes();
if(!task.trim()){
 return;
}
else{
task={ 
    name: task,
    status:"Not Started",
    luontiaika:aika,

};
tasks.push(task)

let i =alku
  while(alku===i){
      //document.getElementById("tasksList").innerHTML+= alku + " " + task.name + "   " + "   " + aika + "  "+ task.status + "<br>";
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

