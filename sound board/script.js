//get all the buttons as an array
let btns = Array.prototype.slice.call(document.querySelectorAll('.btn'))
//get the sound names 
let soundNames = btns.map(sound => sound.classList[1])
//get the actual sounds.
let sounds = soundNames.map(soundName => new Audio('sounds/'+soundName+'.mp3'))
//add the event listeners
btns.forEach( (btn,idx) => btn.addEventListener('click',() => {
stopAll()
sounds[idx].play()
})
)
//function that stops all sounds.
function stopAll(){
    sounds.forEach(sound => {
        sound.pause()
        sound.currentTime = 0
    });
}
