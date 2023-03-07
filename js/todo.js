const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

let toDos = [];

function savedTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function todoHandler(e) {
    e.preventDefault();
    const whatTodo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        id: Date.now(),
        text: whatTodo,
    }
    paintTodo(todoObj);
    toDos.push(todoObj);
    savedTodos();
}

function deleteHandler(e) {
    const todo = e.target.parentNode;
    todo.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(todo.id));
    savedTodos();
}

function paintTodo(whatTodo) {
    const li = document.createElement("li");
    li.id = whatTodo.id;
    li.classList.add("liCreated");
    const checkInput = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", deleteHandler);
    checkInput.type = "checkbox"
    span.innerText = whatTodo.text;
    button.innerText = "X";
    li.appendChild(checkInput);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", todoHandler);

const savedTodo = localStorage.getItem("todos");

if(savedTodo !== null) {
    const parsedToDos = JSON.parse(savedTodo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
