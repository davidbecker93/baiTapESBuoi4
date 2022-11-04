export class TodoList {
    arrList = [];
    addList(todo) {
        this.arrList.push(todo);
    }
    saveStorage() {
        let sArrList = JSON.stringify(this.arrList);
        localStorage.setItem('arrList', sArrList);
    }
    getStorage() {
        if (localStorage.getItem('arrList')) {
            this.arrList = JSON.parse(localStorage.getItem('arrList'));
        }
    }
    clearInput() {
        document.getElementById("newTask").value = "";
    }
    delTodo(index) {
        if (index !== -1) {
            this.arrList.splice(index, 1);
        }
    }
    renderList(selector) {
        let html = this.arrList.reduce((content, list, index) => {
            return content += `
            <li>${list}
            <div class="buttons">
          <button>
          <span class="complete" onclick="complete(${index})"><i class="far fa-check-circle"></i></span>
          </button>
          <button >
          <span class="remove" onclick="remove(${index})"><i class="far fa-trash-alt" ></i></span>
          </button>
        </div>
            </li>
            `
        }, "")
        document.querySelector(selector).innerHTML = html;
    }
}