import { CompleteList } from "./models/CompleteList.js";
import { TodoList } from "./models/TodoList.js";

let tdList = new TodoList();
let tdComp = new CompleteList();

document.querySelector('#addItem').onclick = function () {
    let arrToDo = document.querySelector('#newTask').value;
    tdList.addList(arrToDo);
    tdList.saveStorage();
    tdList.renderList();
    tdList.clearInput();
};
window.remove = (index) => {
    tdList.delTodo(index);
    tdList.saveStorage();
    tdList.renderList();
};
window.removeComp = (index) => {
    tdComp.delComp(index);
    tdComp.saveStorage();
    tdComp.renderComp();
}
window.complete = (index) => {
    tdComp.addCompleted(tdList.arrList[index]);
    tdComp.saveStorage()
    tdComp.renderComp();
    tdList.delTodo(index);
    tdList.saveStorage();
    tdList.renderList();
};
window.onload = () => {
    tdList.getStorage();
    tdList.renderList();
    tdComp.getStorage();
    tdComp.renderComp();
};
document.querySelector('#two').onclick = () => {
    tdList.sortAZ();
    tdList.renderList();
    tdComp.sortAZ();
    tdComp.renderComp();
}
document.querySelector('#three').onclick = () => {
    tdList.sortZA();
    tdList.renderList();
    tdComp.sortZA()
    tdComp.renderComp();
}