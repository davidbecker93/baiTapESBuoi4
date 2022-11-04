import { TodoList } from "./models/TodoList.js";

let tdList = new TodoList();

document.querySelector('#addItem').onclick = function () {
    let arrToDo = document.querySelector('#newTask').value;
    tdList.addList(arrToDo);
    tdList.saveStorage();
    tdList.renderList('#todo');
    tdList.clearInput();
};
window.remove = (index) => {
    tdList.delTodo(index);
    tdList.saveStorage();
    tdList.renderList('#todo');
}
tdList.getStorage();
tdList.renderList('#todo');