import Task from './Task'
import { DOMstrings } from './domStrings'
// CRUD // Create Read Update Delete

class TasksController {
    constructor() {
        this.tasks = []
    }

    createTask(summary) {
        const container = DOMstrings.tasksContainer
        const element = `<div class="task">
        <div class="task__content-wrapper">
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
    }

    // readTask() { }

    // updateTask(id, summry) { }

    // deleteTask() { }

}



export default TasksController;