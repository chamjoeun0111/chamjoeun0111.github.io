const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginInput");
const welcome = document.querySelector(".welcome");

function loginHandler(e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    printing(username);
}

function printing(username) {
    welcome.innerText = `Hello ${username}!`;
    loginForm.classList.add("hidden");
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
    loginForm.addEventListener('submit', loginHandler);
    welcome.classList.remove("hidden");
} else {
    printing(savedUsername);
}