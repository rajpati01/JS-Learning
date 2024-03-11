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

  //iterate through todoList and make HTMl element -> <p> and conbine all together
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;

    const { name, dueDate } = todoObject; // destructuring for above 2 line of code. if variable name is same as property name. this take the name property out of the object and puts in the varaible also name
    const html = `
          <div>${name}</div>
          <div> ${dueDate}</div>
            <button onclick="
              todoList.splice(${i}, 1);
              renderTodoList();
          "class="delete-todo-button">Delete</button>
          `;
    todoListHTML += html;
  }

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
