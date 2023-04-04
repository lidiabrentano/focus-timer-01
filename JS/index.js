import { AlertError } from "./alert-error.js"
import Sounds from "./sounds.js"
import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonAddTime,
    buttonReduceTime,
    buttonForestSound,
    buttonRainSound,
    buttonCoffeeSound,
    buttonFireSound
} from "./elements.js"

const sounds = Sounds()

let timerTimeOut

// Sound events

buttonForestSound.addEventListener("click", function(){
    if(buttonForestSound.classList.contains("On")) {
        sounds.forestAudio.pause()
        buttonForestSound.classList.remove("On")
    } else {
        buttonForestSound.classList.add("On")
        sounds.forestAudio.play()

        sounds.rainAudio.pause()
        buttonRainSound.classList.remove("On")

        sounds.coffeeAudio.pause()
        buttonCoffeeSound.classList.remove("On")

        sounds.fireAudio.pause()
        buttonFireSound.classList.remove("On")
    } 
})

buttonRainSound.addEventListener("click", function(){
    if(buttonRainSound.classList.contains("On")) {
        sounds.rainAudio.pause()
        buttonRainSound.classList.remove("On")
    } else {
        buttonRainSound.classList.add("On")
        sounds.rainAudio.play()

        sounds.forestAudio.pause()
        buttonForestSound.classList.remove("On")

        sounds.coffeeAudio.pause()
        buttonCoffeeSound.classList.remove("On")

        sounds.fireAudio.pause()
        buttonFireSound.classList.remove("On")
    } 
})

buttonCoffeeSound.addEventListener("click", function(){
    if(buttonCoffeeSound.classList.contains("On")) {
        sounds.coffeeAudio.pause()
        buttonCoffeeSound.classList.remove("On")
    } else {
        buttonCoffeeSound.classList.add("On")
        sounds.coffeeAudio.play()

        sounds.forestAudio.pause()
        buttonForestSound.classList.remove("On")

        sounds.rainAudio.pause()
        buttonRainSound.classList.remove("On")

        sounds.fireAudio.pause()
        buttonFireSound.classList.remove("On")
    } 
})

buttonFireSound.addEventListener("click", function(){
    if(buttonFireSound.classList.contains("On")) {
        sounds.fireAudio.pause()
        buttonFireSound.classList.remove("On")
    } else {
        buttonFireSound.classList.add("On")
        sounds.fireAudio.play()

        sounds.forestAudio.pause()
        buttonForestSound.classList.remove("On")

        sounds.rainAudio.pause()
        buttonRainSound.classList.remove("On")

        sounds.coffeeAudio.pause()
        buttonCoffeeSound.classList.remove("On")
    }
})

// controls events

buttonAddTime.addEventListener("click", function(){
    sounds.pressButtonAudio()
    addTime()
})

buttonReduceTime.addEventListener("click", function(){
    sounds.pressButtonAudio()
    reduceTime()
})

buttonPlay.addEventListener("click", function(){    
    sounds.pressButtonAudio()
    countdown()
})

buttonStop.addEventListener("click", function(){
    clearTimeout(timerTimeOut)
    sounds.pressButtonAudio()
})


// funções timer

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
    timerTimeOut = setTimeout(function(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if(minutes <= 0 && seconds <= 0){
            sounds.timeUp()
            AlertError.open()
            return
        }

        if(seconds <= 0 ){
            seconds = 60
            updateDisplay(--minutes, seconds)
        }

        updateDisplay(minutes, --seconds)

        countdown()
    }, 1000)
}

function reduceTime(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    
    if(minutes <= 0){
        AlertError.open()
        return
    }

    AlertError.close()
    
    let remainder = minutes % 5
    if(remainder == 0) {
        updateDisplay(minutes - 5, seconds)
    } else {
        updateDisplay(minutes - remainder, seconds)
    }
}

function addTime (){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    AlertError.close()

    let remainder = minutes % 5
    let oppositeRemainder = 5 - remainder

    if(remainder == 0) {
        updateDisplay(minutes + 5, seconds)
    } else {
        updateDisplay(minutes + oppositeRemainder, seconds)
    }
    
}