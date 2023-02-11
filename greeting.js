//anchor 요소.링크로 연결해주는
//form의 기본동작은 submit
//link의 기본동작은 클릭시 다른 페이지로 이동하는것

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";      //대문자로 표기된 변수는 string 저장할때
const USERNAME_KEY = "username";

console.log(document);

function onLoginSubmit(event){
    event.preventDefault();     //페이지가 새로고침되는 기본동작 막기
    //이름입력된후, hidden실행해서 없애주기
    const username = loginInput.value;  //입력된 이름 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    console.log(greeting);
    //greeting.innerText = "Hello "+username;

    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;   //`` not '', ""
    //innerText는 <></>사이에 텍스트를 넣는다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const SavedUsename = localStorage.getItem(USERNAME_KEY);
console.log(SavedUsename);

if(SavedUsename == null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(SavedUsename);
}