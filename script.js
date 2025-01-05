function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const newTodo = document.createElement('li');
        newTodo.innerHTML = `<input type="checkbox" onclick="toggleComplete(this)"> ${todoText} <button onclick="removeTodo(this)">✖</button>`;
        todoList.appendChild(newTodo);
        todoInput.value = '';
    }
}

function removeTodo(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}

function toggleComplete(checkbox) {
    const todoItem = checkbox.parentElement;
    todoItem.classList.toggle('completed');
}
