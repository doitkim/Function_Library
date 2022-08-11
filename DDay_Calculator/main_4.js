let deadline = document.getElementById("#deadLine");
let nowDate = new Date();
let preDate = new Date("2023-1-10");
let sec = (preDate - nowDate) / 1000;
let minute = sec / 60;
let hour = minute / 60;
let day = Math.round(hour / 24);
document.write(`교육 종료일 : ${day}일 남았습니다.<br>`);