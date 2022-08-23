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

let todos = []; // 배열 생성


// 비밀번호 찾기 기능 구현
function findPW(){
    const idInput = document.createElement("input");
    const idinputCommit = document.createElement("button");
    if(findPassword.children.length === 3){
        
    }
    else {
        idInput.id = "checkID";
        idInput.placeholder ="가입하신 아이디";
        idinputCommit.innerText = "조회";
        idinputCommit.id = "checkSubmit";
        find_password.appendChild(idInput);
        find_password.appendChild(idinputCommit);
        idinputCommit.innerText="제출";
        
        idinputCommit.addEventListener("click", () =>{
            if(idInput.value === localStorage.getItem("username")) {
                const afterPW = prompt("변경하실 비밀번호를 쓰세요");
                localStorage.setItem("userpassword",afterPW);
                console.log(localStorage);
            }
            else {
                alert("회원가입 필요");
            }
        });
    }
   
} 

findPassword.addEventListener("click", findPW);

// 회원 정보 출력 기능
function paintGreetings () {
    loginFrom.innerText = `어서오세요 ${localStorage.getItem("username")}님`; // 로그인시 폼태그의 내용 대체
    const chatListBox = document.createElement("div"); // 채팅 목록 박스 레이아웃 생성
    chatListBox.id = "chatListBox"; // 채팅 목록 박스 div 아이디 부여
    const chatListAddBtn = document.createElement("button"); // 채팅 리스트 추가 버튼 생성
    const chatListAddTextField = document.createElement("input"); // 채팅 리스트 작성 필드 생성
    chatListAddTextField.type ="text"; // 채팅 리스트 텍스트 필드 속성 부여
    chatListAddTextField.id = "chatListTextField"; // 채팅 리스트 텍스트 필드 아이디 부여
    chatListBox.appendChild(chatListAddTextField); // 채팅 목록 박스 레이아웃 div에 채팅 텍스트 필드 자식 추가
    const listBox = document.createElement("div"); // 리스트 추가될 공간 생성
    listBox.id = "listBox";
    chatListBox.appendChild(listBox); // 채팅리스트박스에 리스트 박스 자식 추가
    // chatListAddBtn.innerText = "항목 추가"; // 채팅리스트 버튼 내용 추가
    chatListAddBtn.id = "chatListAddBtn";
    chatListAddBtn.addEventListener("click", (event) => { // 버튼 클릭 시 submit 기본 동작인 새로고침을 막고 로컬 스토리지에 저장
        event.preventDefault();
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = " ❌";
        li.innerText = chatListAddTextField.value;
        listBox.appendChild(li);
        li.appendChild(span);
        const newTodo = chatListAddTextField.value; // 입력값 저장
        const newTodoObj = { // 객체 생성
            text : newTodo,
            id : Date.now(),
        };
        todos.push(newTodoObj);
        console.log(todos);
        localStorage.setItem("todolist",JSON.stringify(todos)); // 로컬스토리지에 텍스트필드에서 입력 받은 값 키 밸류로 저장
        location.reload();
    });
    chatListBox.appendChild(chatListAddBtn);

    loginFrom.appendChild(chatListBox); 
    const div = document.createElement("div");
    div.classList.add('logoutBox')
    const button = document.createElement("button");
    button.innerText="로그아웃";
    button.id = "logout";
    loginFrom.append(div);
    div.appendChild(button);
    findPassword.outerText =''; // 비밀번호 찾기 항목 삭제
    
    // 인트로 화면으로 가기 위한 자물쇠 버튼 구현
    const gointro = document.createElement("div");
    gointro.innerText ='🔒︎';
    gointro.id = "gointro";
    div.append(gointro);
    gointro.addEventListener("click", () =>{
        location.href = "../IntroForKakaoClone/intro.html";
    });
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
const savedUserpw = localStorage.getItem("userpassword");

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

function deleteToDo(event) {
    const li = event.target.parentElement; // 삭제 버튼 클릭한 대상의 이벤트 정보 중에 부모 정보를 li 변수에 저장
    li.remove(); // 값의 부모인 리스트를 선택하여 삭제
    todos = todos.filter((todo) => todo.id !== parseInt(li.id)); 
    localStorage.setItem("todolist", JSON.stringify(todos)); // 로컬 저장소에 키와 배열의 값 저장
  }

function printTodo (todos) {
    const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = " ❌";
        li.id = todos["id"];
        li.innerText = todos["text"];
        listBox.appendChild(li);
        li.appendChild(span);
        span.addEventListener("click", deleteToDo);
}

// 로컬 저장소에 정보가 있으면 불러옴
const savedToDos = localStorage.getItem("todolist");
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(printTodo);

}
