function playAudio(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)
        return;
    audio.currentTime = 0;
    audio.play();

    //set the transition of key just as play starts
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}
function removePlaying(e)
{
    if(e.propertyName == 'transform')
        this.classList.remove('playing');
}
//play audio on key pressed
var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('onclick', playAudio));
window.addEventListener('keydown', playAudio);

//remove transition from key after the pressing of the key
keys.forEach(key => key.addEventListener('transitionend', removePlaying));