

let ranNumb = Math.floor(Math.random() * 5000) +1;

const sb = document.getElementById("submit");
 sb.addEventListener('click', function (event) {
   alert ("Your ticket number is " + ranNumb);
});

function responseNumb() {
  alert("Checking your ticket");
  let tickNumber = document.getElementById("ticketNumb").value;
  if (tickNumber > 4500 && tickNumber < 5000){
    alert("Flight has been delayed indefinatly due to cockpit failure.");
  } else if (tickNumber > 4000 && tickNumber < 4500){
    alert("Flight delayed 3754.39 years.");
  } else if (tickNumber > 3500 && tickNumber < 4000){
    alert("Flight is ready to board in one week.");
  } else if (tickNumber > 3000 && tickNumber < 3500){
    alert("Your flight has been delayed due to bad weather. We are planning a new launch day now.");
  } else if (tickNumber > 2500 && tickNumber < 3000) {
    alert("Your flight has been delayed three months. Your seating is unchanged.");
  } else if (tickNumber > 2000 && tickNumber < 2500){
    alert("Flight left 30 minutes ago.");
  } else if (tickNumber > 1500 && tickNumber < 2000){
    alert("Launch date moved forward two weeks.");
  } else if (tickNumber > 1000 && tickNumber < 1500){
    alert("All systems ready for tomorrows launch!");
  } else if (tickNumber > 0 && tickNumber < 1000){
    alert("Flight in progress.");
  } else if (tickNumber < 0 || tickNumber > 5000){
    alert("Invalid ticket number. Please try again.");
  } else {
    alert("You are the last survivor of the human race. Thank you for giving us your location.")
  }
}

document.getElementById("submit_2").onclick = responseNumb;
