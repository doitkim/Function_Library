// To Do List 내용 입력에 필요한 선택자 지정
const content = document.querySelector('#content');

let i = 0;

//지정된 선택자에 리스트 추가 함수 작성
function addNewTodo() {
    
    const li = document.createElement('button');
    li.setAttribute("id",`${i}`);
    li.setAttribute("onclick",`test()`);
    i++;
    let todolist_index = document.getElementById('todolist_add_text').value;
    if(todolist_index ===''){
        alert('입력되지 않았습니다.');
    }
    else if (content.children.length > 7){
        alert('할 일을 추가할 수 없습니다.');
        i = 0;
    }
    
    else {
        li.textContent = `${i}.`+todolist_index;
        content.append(li);
    }    
}

function removeTodo() {
    if (content.children[0] === undefined){
        alert('목록이 없습니다.');
        i = 0;
    }
    else {
        content.removeChild(content.children[content.children.length-1]);
    }
}


// function testTodo() {
//     if (content.children[0] === undefined){
//         alert('목록이 없습니다.');
//     }
//     else {
//         content.children.
//     }
// }

function test() {
    content.removeChild(content.children[0]);
}

