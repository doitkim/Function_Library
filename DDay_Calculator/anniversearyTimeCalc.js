function anniversearyTimeCalc () {
    const dataMainView = document.querySelector('#dateCalcForm');
    const nowDate = new Date();
    const postDate = new Date("2022-07-12");
    const sec = (nowDate - postDate)/1000;
    const minute = sec/60;
    const hour = minute/60;
    const day = Math.round(hour/24);

    document.write(`<li>100일째 되는 날: D-${100-day}일</li>`);
    document.write(`<li>200일째 되는 날: D-${200-day}일</li>`);
    document.write(`<li>300일째 되는 날: D-${300-day}일</lir>`);
    document.write(`<li>벌써 일년: D-${365-day}일</lir>`);
    
}

anniversearyTimeCalc();