export default function Sounds(){

    // time sound
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function pressButtonAudio() {
        buttonPressAudio.play()
    }

    function timeUp() {
        kitchenTimer.play()
    }   

    // background sound

    const forestAudio = new Audio("./sounds/floresta.wav")
    const fireAudio = new Audio("./sounds/lareira.wav")
    const coffeeAudio = new Audio("./sounds/cafeteria.wav")
    const rainAudio = new Audio("./sounds/chuva.wav")

    forestAudio.loop = true
    fireAudio.loop = true
    coffeeAudio.loop = true
    rainAudio.loop = true


    return {
        timeUp,
        pressButtonAudio,
        forestAudio,
        fireAudio,
        coffeeAudio,
        rainAudio
    }
}