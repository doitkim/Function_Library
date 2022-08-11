function toDayCalculator () {
    let dataMainView = document.querySelector('#dateSpace');
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
    document.write(`+${day}일`);
}
toDayCalculator();