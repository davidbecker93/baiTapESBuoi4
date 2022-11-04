export class CompleteList {
    arrCompleted = [];

    addCompleted(tdComp) {
        this.arrCompleted.push(tdComp);
    }
    saveStorage() {
        let sArrComp = JSON.stringify(this.arrCompleted);
        localStorage.setItem('arrComplete', sArrComp);
    }
    getStorage() {
        if (localStorage.getItem('arrComplete')) {
            this.arrCompleted = JSON.parse(localStorage.getItem('arrComplete'));
        }
    }
    delComp(index) {
        if (index !== -1) {
            this.arrCompleted.splice(index, 1);
        }
    }
    renderComp() {
        let html = this.arrCompleted.reduce((content, complete, index) => {
            return content += `
            <li>${complete}
            <div class="buttons">
            <button >
            <span class="remove" onclick="removeComp(${index})"><i class="far fa-trash-alt" ></i></span>
            </button>
            <button>
            <span class="complete"><i class="fas fa-check-circle"></i></span>
            </button>
            </div>
            </li>
            `
        }, "");
        document.querySelector('#completed').innerHTML = html;
    }
}