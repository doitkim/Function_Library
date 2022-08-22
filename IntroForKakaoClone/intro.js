const backgroundImages = [
    "../backgrounImage/1.jpg",
    "../backgrounImage/2.jpg",
    "../backgrounImage/3.jpg",
    "../backgrounImage/4.jpg",
    "../backgrounImage/5.jpg",
    "../backgrounImage/6.jpg",
    "../backgrounImage/7.jpg",
    "../backgrounImage/8.jpg",
    "../backgrounImage/9.jpg",
    "../backgrounImage/10.jpg"
];

const quotes = [
    {
        quote : "산다는것 그것은 치열한 전투이다.",
        author : "로망로랑"
    },
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author : "사무엘존슨"
    },
    {
        quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
        author : "파울로 코엘료"
    },
    {
        quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
        author : "찰리 채플린"
    },
    {
        quote : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author : "엘버트 허버드"
    },
    {
        quote : "신은 용기있는자를 결코 버리지 않는다.",
        author : "켄러"
    },
    {
        quote : "우리를 향해 열린 문을 보지 못하게 된다.",
        author : "헬렌켈러"
    },
    {
        quote : "삶이 있는 한 희망은 있다",
        author : "키케로"
    },
    {
        quote : "내가 가는 곳이 길이다.",
        author : "김승화"
    },
    {
        quote : "배가 고프면 밥을 먹자",
        author : "김승화"
    }
];

const backgroundImage = document.querySelector("#backgroundImage"); // 배경 이미지 선택자
const quoteText = document.querySelector("#quoteText"); // 명언 부분 선택자
const quoteAuthor = document.querySelector("#quoteAuthor"); // 인물 부분 선택자
const clock = document.querySelector("#clock"); // 시간 부분 선택자

function date () {
    setInterval(() => {
        const date = new Date();
        const Year = date.getFullYear();
        const Month = String(date.getMonth()+1).padStart(2,"0");
        let day = date.getDay();
        const dates = String(date.getDate()).padStart(2,"0");
        const hour = String(date.getHours()).padStart(2,"0");
        const minute = String(date.getMinutes()).padStart(2,"0");
        const second = String(date.getSeconds()).padStart(2,"0"); // 문자열로 변환 후 앞에 0 넣어줌

        switch(String(day)) {  // 요일 확인해서 출력
            case "0": day = "일"; break;
            case "1": day = "월"; break;
            case "2": day = "화"; break;
            case "3": day = "수"; break;
            case "4": day = "목"; break;
            case "5": day = "금"; break;
            case "6": day = "토"; break;
        }
        clock.innerText = `${Year}년 ${Month}월 ${dates}일 (${day}) ${hour}:${minute}:${second}`;

    }, 1000);
}
// 배경 랜덤
setInterval(() => {
        const background_rnd = Math.abs(Math.round((Math.random()*backgroundImages.length-1)));
        backgroundImage.style.backgroundImage= `url(${backgroundImages[background_rnd]})`;

}, 3600000);

// 명언 랜덤
setInterval(() => {
    const rnd = Math.abs(Math.round((Math.random()*quotes.length-1)));
    quoteText.innerText = quotes[rnd].quote;
    quoteAuthor.innerText = quotes[rnd].author;

}, 3600000);

date();

// 배경 초기화
backgroundImage.style.backgroundImage= "url(../backgrounImage/1.jpg)";
// 명언 초기화
quoteText.innerText = quotes[0].quote;
quoteAuthor.innerText = quotes[0].author;

backgroundImage.addEventListener("click", () =>{
    location.href ="https://doitkim.github.io/Function_Library/kakaoTralkCloneCoding/Login.html?";
});