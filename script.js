const parter = ["GoogleOnPoint", "MachineOnPoint"]

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
  // console.log(main)
}