const parter = ["GoogleOnPoint", "MachineOnPoint"]

// window.onload = OnProfile()

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

function OnProfile() {
  const profiler = document.getElementById("urlprofile");
  const urla = profiler.querySelectorAll("a");
  const icon = profiler.querySelectorAll("i");
  fetch("../notation/prourl.json").then(
    response => response.json()).then(
      data => {
        for (let i = 0; i < urla.length; i++) {
          const prolink = urla[i]
          const proicon = icon[i]
          prolink.href = data[Object.keys(data)[i]].url;
          proicon.className = data[Object.keys(data)[i]].class;
        }
      }).catch(error => {
        console.error(error);
      })
}

function Hallo(params) {
  OnProfile()
}