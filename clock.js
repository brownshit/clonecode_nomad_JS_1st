//making clock...
const clock = document.querySelector("h2#clock");

//interval : 시간간격을 두고 실행 
//timeout?

function getClock(){
    const date = new Date();
    
    //padStart는 string 에만 사용이 가능하다.
    const hours = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    //console.log(`${hours}:${minute}:${second}`);
    clock.innerText = `${hours}:${minute}:${second}`;//${}

}
getClock();
setInterval(getClock, 1000)//실행하려는 함수, 함수간격 millisecond
//setTimeout(sayHello, 5000); //5초뒤 실행

//padstart(자릿수, 자릿수가 맞지않으면 채우는 수)
/* 
"hello".padStart(20, "liajsldkf")
'liajsldkfliajslhello'
*/
