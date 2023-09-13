let homeScoreEl = document.querySelector("#home-score");
let guestScoreEl = document.querySelector("#guest-score");

let homeScore = 0
let guestScore = 0 

function add(points, team) {
  if(team === "home") {
    homeScore += points
    homeScoreEl.textContent = homeScore
  } else {  
    guestScore += points
    guestScoreEl.textContent = guestScore
  }
}

