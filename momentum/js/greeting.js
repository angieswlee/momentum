const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingUser = document.querySelector("#greeting h1");
const logoutBtn = document.querySelector("#greeting button");

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function paintGreeting(username) {
    greetingUser.innerText = `Hello ${username}!`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

function onLoginSubmit(event) {
    //stop the event (원래 하던 행동을 멈춘다 - 새로고침)
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const inputedUsername = loginInput.value;
    localStorage.setItem(KEY_USERNAME, inputedUsername);
    paintGreeting(inputedUsername);
}

function handleLogout() {
    //localStorage에 저장된 key를 삭제하고 페이지 새로고침
    localStorage.removeItem(KEY_USERNAME);
    window.location.reload();

}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreeting(savedUsername);
}

logoutBtn.addEventListener("click", handleLogout);
