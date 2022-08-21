function elapsedTimeCalc (post) {
    const dataMainView = document.querySelector('#dateSpace');
    const nowDate = new Date();
    const postDate = new Date(post);
    const sec = (nowDate - postDate)/1000;
    const minute = sec/60;
    const hour = minute/60;
    const day = Math.round(hour/24);

    document.write(`+${day}일`);
}

elapsedTimeCalc("2022-07-12");