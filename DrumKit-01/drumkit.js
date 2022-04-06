function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}

function removePlaying(e){
    console.log(e);
    if(e.propertyName === "border-top-color") 
        this.classList.remove('playing');
}

//Play audio on key pressed.
window.addEventListener('keydown', playAudio);

//Remove the transition after the key is pressed.
var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlaying));

