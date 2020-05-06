import Task from './Task'
import { DOMstrings } from './domStrings'
// CRUD // Create Read Update Delete

class TasksController {
    constructor() {
        this.tasks = []
    }

    createTask(summary) {
        //Create New Task
        const newTask = new Task(summary);

        //Push new task into data structure (this.tasks array)
        this.tasks.push(newTask);

        //Add new task to UI
        const container = DOMstrings.tasksContainer
        const element = `<div class="task" id="${newTask.id}">
        <div class="task__content-wrapper">
        <div class="task__hover"></div>
        <div class="task__description">
        <div class="task__checkbox"></div>
        <span class="task__name">${summary}</span>
        </div>
        <div class="task__btns">
        <i class="task__btn-edit"></i>
        <i class="task__btn-delete"></i>
        </div>
        </div>
        <div class="line"></div></div>`
        document.querySelector(container).insertAdjacentHTML('beforeend', element);

        document.getElementById(newTask.id).querySelector(".task__btn-delete").addEventListener('click', (event) => {
            this.deleteTask(event);
        });
    }

    // readTask() {}

    deleteTask(event) {
        const itemID = event.target.parentNode.parentNode.parentNode.id;

        //Delete task from data structure
        const index = this.tasks.findIndex(cur => cur.id === itemID);

        if (index !== -1) {
            this.tasks.splice(index, 1)
        }

        //Remove task from UI 
        const element = document.getElementById(itemID);
        element.parentNode.removeChild(element);

    }

    // updateTask(id, summary) { }
}




export default TasksController;