const parter = ["GoogleOnPoint", "MachineOnPoint"]

function OnAll() {
  for (let index = 0; index < parter.length; index++){
    const pointer = parter[index];
    const styleri = document.getElementById(`${pointer}`);
    if (styleri.style.display === "none") {
      styleri.style.display = "block"
    } else {
      styleri.style.display = "block"
    }
  }
}

function HideOn(params) {
  for (let index = 0; index < parter.length; index++) {
    const pointer = parter[index];
    if (pointer != params){
      let elemental = document.getElementById(`${pointer}`)
      if (elemental.style.display === "block") {
        elemental.style.display = "none";
      }
    }
    
  }
}

function ProjectOn(pinpoint) {
  let main = document.getElementById(pinpoint).style.display;
  if (main === "none"){
    document.getElementById(pinpoint).style.display = "block";
  }
  HideOn(pinpoint);
}