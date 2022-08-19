function deadLineTimeCalc (pre) {
    const deadline = document.getElementById("#deadLine");
    const nowDate = new Date();
    const preDate = new Date(pre);
    const sec = (preDate - nowDate) / 1000;
    const minute = sec / 60;
    const hour = minute / 60;
    const day = Math.round(hour/24);
    document.write(`교육 종료일 : ${day}일 남았습니다.<br>`);
}

deadLineTimeCalc("2023-01-10");