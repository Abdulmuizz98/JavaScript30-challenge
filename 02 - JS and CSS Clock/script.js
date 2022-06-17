const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate()
{
    const now = new Date();
    //seconds logic  
    const second = now.getSeconds();
    const secondDeg = (second / 60) * 360 + 90;
    secondHand.style.transform  = `rotate(${secondDeg}deg)`
    //minutes logic  
    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + ((second / 60) * 6) + 90;
    minHand.style.transform  = `rotate(${minDeg}deg)`
    //hour logic  
    const hour = now.getHours();
    const hourDeg = (hour / 12) * 360 + ((min/60) * 30) + 90;
    hourHand.style.transform  = `rotate(${hourDeg}deg)`
}

// setDate();
setInterval(setDate, 1000);