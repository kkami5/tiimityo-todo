//Funktiolla listätään uusi tehtävä taulukkoon
let alku=1;
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
document.getElementById("tasksList").innerHTML = "";
let i =alku
  while(alku===i){
      document.getElementById("tasksList").innerHTML+= alku + " " + task.name + "   " + "   " + aika + "  "+ task.status + "<br>";
      i++;
}
alku++;

        document.getElementById("taskName").value = "";
}
}

