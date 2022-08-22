const clock = document.querySelector("h2#clock");

// 시간 받아서 문자열로 형변환 뒤 두자리 숫자 형식으로 재구성
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const mimutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${mimutes}:${seconds}`);
}

//페이지 오픈시 즉시 한번 실행
getClock();

// 설정 시간마다 함수 실행
setInterval(getClock,1000);

// 5초 뒤에 실행
// setTimeout(sayhello, 5000); 

 
