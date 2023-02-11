const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//toDos가 빈값으로 시작되면, 매번 새로고침시마다,
//localStorage의 data들이 사라지게 된다는 점에 유의할것.

//localstorage가 DB가 아니라 toDos가 DB이다. localstorage는 값 저장용도.

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(toDos) 는 스트링형식으로 저장.
    //현재 localStorage에 넣고있다.

    //JSON.parse로는 string을 array(list)로 변환이 가능하다.
}

function deleteToDo(event){
    console.log(event.target.parentElement.innerText);
    //parentElement는 이벤드가 발생된 target의 부모이다.
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();

    console.log(typeof li.id);
    //존나 중요한 한줄...
    //delete 실행 시 filter해서 toDos를 새로운 요소로 new update... 
    toDos = toDos.filter(toDo=> toDo.id !==parseInt(li.id));
    //toDo.id == number,
    //li.id == string
    saveToDos();
}

function paintToDo(newToDoObj){     //get Object...
    const li = document.createElement("li");
    li.id = newToDoObj.id;      //li의 id를 Date.now()로 설정해버렸디.
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const btn = document.createElement("button");
    btn.innerText = "x";

    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    //console.log(li);
    toDoList.appendChild(li);
}

//삭제버튼 추가

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    //value storage in newToDo
    //console.log(toDoInput.value);
    toDoInput.value = "";
    //console.log(newToDo, toDoInput.value);
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),      //id로 각 li item을 구별하게,,,
    };

    toDos.push(newToDoObj);     //Object를 저장한다.
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item){    //item은 현재 처리되는있는 정보 제공
    console.log("this is the turn of",item);
}

*/

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    //js에서 사용할수 있게 array로 convert했다.
    toDos = parsedToDos;        //toDos update

    console.log(parsedToDos);   //it is array
    
    parsedToDos.forEach(paintToDo); //item들을 넘김
    //위와 동일코드
    //parsedToDos.forEach((item) => console.log("this is the turn of",item));
    //화살표 함수
        //forEach is most important
    //forEach만 쓰고...이건 parsedToDos에 대해
    //function을 실행하게 해준다.

    //.filter 함수...
    //it gives you a new array exclude member that you wanna delete...

        
}