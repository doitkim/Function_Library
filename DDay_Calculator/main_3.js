let circleOnclick = document.querySelector('#circle_frame');
circleOnclick.addEventListener("click",() => {
    // circleOnclick.style.backgroundColor = 'red';
    let backFade = document.querySelector('#dateCalcForm');
    backFade.style.opacity=1;
});

setInterval(() => {
    backFade = document.querySelector('#dateCalcForm');
    backFade.style.opacity=0; 
}, 10000);