//js를 작성하기 전에, 해당 기능을 적용할 html을 불러오는 작업
const clock = document.querySelector("h2#clock");

function setClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minuites = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minuites} : ${seconds}`
}

//get clock and call clock every second
setClock();
setInterval(setClock, 1000);