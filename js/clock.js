//맨 위 시계
const clock = document.querySelector(".clock");

function watch() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

watch();
setInterval(watch, 1000);

//요일 계산
const time = document.querySelector(".time");

function dates() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    const day = days[date.getDay() - 1];
    time.innerText = `${year} ${month} ${dates} ${day}`;
}

dates();

//목표 디데이
const goalForm = document.querySelector(".goalForm");
const goalTimeInput = document.querySelector(".goalTimeInput");
const goalButton = document.querySelector(".goalButton");
const goalNameInput = document.querySelector(".goalNameInput");
const goalName = document.querySelector(".goalName");
const remainTime = document.querySelector(".remainTime");

function goalDday(e) {
    e.preventDefault();
    DdayCounter();
    printingGoal();
}

function printingGoal() {
    const goal = goalNameInput.value;
    goalName.innerText = goal;
}

function updateTime() {
    const Dday = new Date(goalTimeInput.value);
    const date = new Date();
    const timeDiff = Dday - date;
    localStorage.setItem("remainTime", timeDiff);
    DdayCounter(timeDiff);
}

function DdayCounter(timeDiff) {
    const day = Math.floor(timeDiff/(1000*60*60*24));
    const hour = Math.floor((timeDiff/(1000*60*60)) % 24);
    const minute = Math.floor((timeDiff / (1000 * 60)) % 60);
    const second = Math.floor((timeDiff / 1000 % 60));
    if(timeDiff) {
        if(Number(timeDiff) > 0) {
            remainTime.classList.remove("hidden");
            remainTime.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
        }
        else {
            remainTime.classList.remove("hidden");
            remainTime.innerText = `Over`;
        }
    } else {
        remainTime.classList.add("hidden");
    }
}

setInterval(updateTime, 1000);
goalForm.addEventListener("submit", goalDday);