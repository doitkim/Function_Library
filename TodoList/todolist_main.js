// To Do List 내용 입력에 필요한 선택자 지정
const content = document.querySelector('#content');

let i = 0;

//지정된 선택자에 리스트 추가 함수 작성
function addNewTodo() {
    
    const li = document.createElement('button');
    li.setAttribute("id",`${i}`);
    li.setAttribute("onclick",'doneTodo('+i+')');
    i++;
    let todolist_index = document.getElementById('todolist_add_text').value;
    if(todolist_index ===''){
        alert('작성해주세요.');
    }
    else if (content.children.length > 7){
        alert('최대 8개까지 작성 가능합니다.');
        i = 0;
    }
    
    else {
        li.textContent = todolist_index;
        content.append(li);
    }    
}

function doneTodo(id) {

    document.getElementById(`${id}`).classList.toggle('done');
}

function dekTodo() {
    if(confirm(`완전 삭제하시겠습니까?`)){
        content.replaceChildren();
        alert(`삭제 완료`);
    }
    else {
        alert('삭제가 취소되었습니다.');
    }
    
}

