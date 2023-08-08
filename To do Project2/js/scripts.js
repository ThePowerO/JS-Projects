// Elements Selection
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

// Functions
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const todoFinishBtn = document.createElement("button")
    todoFinishBtn.classList.add("finish-todo")
    todoFinishBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(todoFinishBtn)

    const todoEditBtn = document.createElement("button")
    todoEditBtn.classList.add("edit-todo")
    todoEditBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(todoEditBtn)

    const todoRemoveBtn = document.createElement("button")
    todoRemoveBtn.classList.add("remove-todo")
    todoRemoveBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(todoRemoveBtn)

    todoList.appendChild(todo)

    todoInput.value = "";
    todoInput.focus();
};

const hideandshow = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")
        console.log(todoTitle, text);


// Events
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue)
    };
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }
});
