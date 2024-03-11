const todoList = [
  {
    name: "make dinner",
    dueDate: "2023-06-24",
  },
  {
    name: "wash dishes",
    dueDate: "2023-06-24",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  //using forEach() method insted of regular for loop
  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
              <div>${name}</div>
              <div> ${dueDate}</div>
                <button onclick="
                  todoList.splice(${index}, 1);
                  renderTodoList();
              "class="delete-todo-button">Delete</button>
              `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  // value property represent the text in the textbox

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name, // shorthand property for above line of code
    dueDate,
  });

  inputElement.value = "";
  renderTodoList();
}
