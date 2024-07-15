//finding all element 
const container = document.querySelector(".container");
const todoForm= document.querySelector(".todoForm");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");

//showMessage
const showMessage = (text, status) =>{
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    }, 1000);
}

//gettodosFromLocalStorage
const getTodosFromLocalStorage = () =>{
    return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")):[];
}

//create todo
const createTodo = (todoId, todoValue)=>{
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
        <span> ${todoValue} </span>
        <span> <button class="btnx" id="deleteButton"> X </button> </span>
    `;

    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click", deleteTodo);
    
}

// Delete Todo 

const deleteTodo = (event) =>{
    const selectedTodo = event.target.parentElement.parentElement;
    todoLists.removeChild(selectedTodo);
    showMessage("Deleted Todo", "danger");

    
    let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));
}


//addTodo Function
const addTodo = (event)=>{
    event.preventDefault();
    const todoValue = todoInput.value;

    //unique id 
    const todoId = Date.now().toString();
    
    createTodo(todoId, todoValue);

    showMessage("successfully created", "success");

    //adding todo in local storage
    const todos = getTodosFromLocalStorage();
    todos.push({todoId, todoValue});
    localStorage.setItem("mytodos", JSON.stringify(todos));

    todoInput.value = "";
}

// Load Todos 

const loadTodos = () =>{
    const todos = getTodosFromLocalStorage();
    todos.map((todo) => createTodo(todo.todoId,  todo.todoValue));
}

//Adding Listener
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);