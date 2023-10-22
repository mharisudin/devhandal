const btnHome = document.querySelector('#btnHome')
const btnGuest = document.querySelector('#btnGuest')
const btnReset = document.querySelector('#reset')
const displayHome = document.querySelector('#scoreHome')
const displayGuest = document.querySelector('#scoreGuest')

const maxPointSelect = document.querySelector('#maxPoint')

let homeScore = 0
let guestScore = 0
let maxPoint = 5
let isGameOver = false

function reset() {
    isGameOver = false
    homeScore = 0
    guestScore = 0
    displayHome.textContent = 0
    displayGuest.textContent = 0
}

maxPointSelect.addEventListener('change', () => {
    maxPoint = parseInt(maxPointSelect.value)
    reset()
})

btnHome.addEventListener('click', () => {
    if (!isGameOver) {
        homeScore += 1
        if (homeScore === maxPoint) {
            isGameOver = true
            alert('Home Win')
            displayHome.style.color = 'green'
        }
        displayHome.textContent = homeScore
    }
})
btnGuest.addEventListener('click', () => {
    if (!isGameOver) {
        guestScore += 1
        if (guestScore === maxPoint) {
            isGameOver = true
            alert('Guest Win')
        }
        displayGuest.textContent = guestScore
    }
})

btnReset.addEventListener('click', reset)