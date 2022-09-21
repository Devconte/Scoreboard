let homeStore = document.getElementById("home-score")
let homeScore = 0

function addOneHome() {
    homeScore += 1
    homeStore.textContent = homeScore
}
function addTwoHome() {
    homeScore += 2
    homeStore.textContent = homeScore
}
function addThreeHome() {
    homeScore += 3
    homeStore.textContent = homeScore
}


let guestStore = document.getElementById("guest-score")
let guestScore = 0

function addOneGuest() {
    guestScore += 1
    guestStore.textContent = guestScore
}
function addTwoGuest() {
    guestScore += 2
    guestStore.textContent = guestScore
}
function addThreeGuest() {
    guestScore += 3
    guestStore.textContent = guestScore
}

function newGame() {
    guestStore.textContent = 0
    homeStore.textContent = 0
}
