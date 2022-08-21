const loginFrom = document.querySelector("#loginForm"); // id 가 loginForm인 태그 선택
const userID = document.querySelector("#userID"); // id 가 userID인 태그 선택
const userPW = document.querySelector("#userPW"); // id 가 userPW인 태그 선택
const findPassword = document.querySelector("#find_password");

// 토글을 이용하여 체크박스 기능을 넓게 사용
const autoCheckWrap = document.querySelector("#autoCheckWrap");
const checkbox = document.querySelector("#checkbox");

autoCheckWrap.addEventListener ('click', () =>{
    checkbox.toggleAttribute('checked'); // 채크박스 범위 체크 토글 기능
}) 

// 회원 정보 출력 기능
function paintGreetings () {
    loginFrom.innerText = `어서오세요 ${localStorage.getItem("username")}님`; // 로그인시 폼태그의 내용 대체
    const div = document.createElement("div");
    div.classList.add('logoutBox')
    const button = document.createElement("button");
    button.innerText="로그아웃";
    button.id = "logout";
    loginFrom.append(div);
    div.appendChild(button);
    findPassword.outerText =''; // 비밀번호 찾기 내용 대체
}

// 회원 정보 로컬 스토리지에 저장
function login(event){
    event.preventDefault(); // submit은 기본 동작시 새로고침 되므로 이를 막기 위해 사용
    localStorage.setItem("username",userID.value);
    localStorage.setItem("userpwassword",userPW.value);       
    paintGreetings();
    location.reload();
}

// 저장된 정보 확인해서 정보가 없으면 저장하고 있으면 로그인 유지
const savedUsername = localStorage.getItem("username");


if(savedUsername == null){
    loginFrom.addEventListener("submit", login);
}
else {
    paintGreetings();
    const logout = document.querySelector("#logout");
    logout.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
}

// else {
//     loginFrom.innerText = '로그아웃되었습니다.';
//     localStorage.clear();

// }
