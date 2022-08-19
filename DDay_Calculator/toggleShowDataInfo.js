function toggleShowDataInfo(){
    const circleOnclick = document.querySelector('#circle_frame');
    circleOnclick.addEventListener("click",() => {
    const backFade = document.querySelector('#dateCalcForm');
    backFade.style.opacity=1;
    });

    setInterval(() => {
        backFade = document.querySelector('#dateCalcForm');
        backFade.style.opacity=0;
    }, 10000);
}

toggleShowDataInfo();

