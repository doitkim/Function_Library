function realTimeView () {
    setInterval(() => {
        const realTimeView = document.getElementById("realTimeView");
        const nowDate = new Date();
        const nowYear = nowDate.getFullYear();
        const nowMonth = nowDate.getMonth()+1;
        const nowDay = nowDate.getDate();
        const nowHour = nowDate.getHours();
        const nowMinute = nowDate.getMinutes();
        const nowSec = nowDate.getSeconds();  
        realTimeView.textContent = `${nowYear}년 ${nowMonth}월 ${nowDay}일 ${nowHour}시 ${nowMinute}분 ${nowSec}초`;
        realTimeView.style.fontSize = "20px";
    }, 1000);
}


realTimeView();