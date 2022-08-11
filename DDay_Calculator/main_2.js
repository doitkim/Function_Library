function toDayCalculator () {
    let dataMainView = document.querySelector('#dateCalcForm');
    let nowDate = new Date();
    let postDate = new Date("2022-07-12");
    let sec = (nowDate - postDate)/1000;
    let minute = sec/60;
    let hour = minute/60;
    let day = Math.round(hour/24);
    NowYear = nowDate.getFullYear();
    NowMonth = nowDate.getMonth()+1;
    NowDay = nowDate.getDate();
    // document.write(`과거 : ${postDate.getFullYear()}년 ${postDate.getMonth()+1}월 ${postDate.getDate()}일<br><br>`);
    // document.write(`현재 : ${NowYear}년 ${NowMonth}월 ${NowDay}일<br><br>`);
    

    
    document.write(`<li>50일 : ${50-day}일</li>`);
    document.write(`<li>70일 : ${70-day}일</li>`);
    document.write(`<li>100일 : ${100-day}일</li>`);
    document.write(`<li>200일 : ${200-day}일</li>`);
    document.write(`<li>300일 : ${300-day}일</lir>`);
    
    switch (day != 0){

        case day = 100:
            alert(`우리 100일이에요.`);
        case day = 200:
            alert(`우리 200일이에요.`);
        case day = 300:
            alert(`우리 300일이에요.`);
    }
}

toDayCalculator();