import { DOMstrings } from './domStrings'
import TasksController from './TasksController'

const doneExitBtns = `<i class="task__btn-done"></i>
<i class="task__btn-exit-edit"></i>`
const editDeleteBtns = `<i class="task__btn-edit"></i>
<i class="task__btn-delete"></i>`
const spanHeightWithOneLine = 37
const maxTextAreaHeight = 100


class TaskView {
    constructor() {
        this.updateSummary = this.updateSummary.bind(this)
        this.keyPressHandler = this.keyPressHandler.bind(this)
        this.editBtnClickHandler = this.editBtnClickHandler.bind(this)
        this.documentClickHandler = this.documentClickHandler.bind(this)
        this.clickOnExitBtnHandler = this.clickOnExitBtnHandler.bind(this)
        this.checkboxDisplayHandler = this.checkboxDisplayHandler.bind(this)
    }

    addTaskToUI(task) {
        const container = document.querySelector(DOMstrings.tasksContainer)
        const element = this.getTaskHtmlString(task)
        container.insertAdjacentHTML('beforeend', element)

        const createdElement = document.getElementById(task.id)
        this.addTaskEventListeners(createdElement)

    }

    removeTaskFromUI(id) {
        const element = document.getElementById(id)
        element.parentNode.removeChild(element)
    }

    addTaskEventListeners(element) {
        element.querySelector(DOMstrings.editBtn).addEventListener('click', this.editBtnClickHandler)
        element.querySelector(DOMstrings.deleteBtn).addEventListener('click', TasksController.deleteTask)
        element.querySelector(DOMstrings.taskCheckbox).addEventListener('animationend', (event) => {
            TasksController.deleteTask(event, true)
        });
    }


    editBtnClickHandler(event) {
        event.stopPropagation()

        const editingElement = event.target.closest(".task")
        const value = editingElement.querySelector('.task__name').textContent

        const btnsContainer = event.target.closest(DOMstrings.BtnsContainer)

        this.checkboxDisplayHandler(editingElement);

        //Replacing buttons 
        btnsContainer.innerHTML = doneExitBtns

        //Summary container
        const taskNameWrapper = document.getElementById(editingElement.id).querySelector(DOMstrings.taskNameWrapper)
        const textSpanHeight = taskNameWrapper.firstElementChild.offsetHeight;

        //Adding eventlisteners doneExitBtns
        document.querySelector(DOMstrings.doneBtn).addEventListener('click', this.updateSummary)
        document.querySelector(DOMstrings.exitEditBtn).addEventListener('click', (event) => {
            this.clickOnExitBtnHandler(event, value, taskNameWrapper, btnsContainer)
        })

        const editInput = `<textarea class="task__edit-input-text " type="text" autofocus>${value}</textarea>`
        taskNameWrapper.innerHTML = editInput


        const textArea = taskNameWrapper.firstChild
        textArea.select()

        textArea.addEventListener('input', this.inputHandler)
        document.addEventListener('click', this.documentClickHandler)
        textArea.addEventListener('keypress', this.keyPressHandler)

        ///Making textarea initial size
        let nextHeight = Math.min(maxTextAreaHeight, textSpanHeight)
        const textAreaPaddingTop = parseFloat(window.getComputedStyle(textArea, null).getPropertyValue('padding-top'))
        textArea.style.height = nextHeight + (2 * textAreaPaddingTop) + 'px'
    }

    checkboxDisplayHandler(editingTask) {
        const checkbox = editingTask.querySelector(DOMstrings.taskCheckboxContainer)
        if (checkbox.classList.contains('task__checkbox--hidden')) {
            checkbox.classList.remove('task__checkbox--hidden')
        } else {
            checkbox.classList.add('task__checkbox--hidden')
        }
    }

    clickOnExitBtnHandler(event, value, taskNameWrapper, btnsContainer) {
        const afterExitSpan = ` <span class="task__name">${value}</span>`
        const taskElement = event.target.closest('.task')

        taskNameWrapper.innerHTML = afterExitSpan
        btnsContainer.innerHTML = editDeleteBtns

        this.checkboxDisplayHandler(taskElement)

        this.addTaskEventListeners(taskElement)
        document.removeEventListener('click', this.documentClickHandler)


    }

    documentClickHandler(event) {
        const ignoringElements = ['task__edit-input-text', 'task__btn-done', 'task__btn-exit-edit']
        const className = event.target.classList[0]

        if (!ignoringElements.includes(className)) {
            this.updateSummary()
        }
    }

    inputHandler(event) {
        const value = event.target.value
        event.target.rows = 1
        event.target.style.height = 'auto'
        if (value === '') {
            event.target.style.height = spanHeightWithOneLine + 'px'
            event.target.classList.add('task__edit-input-text--invalid')

        } else {
            const scrollHeight = event.target.scrollHeight;
            let nextHeight = Math.min(maxTextAreaHeight, scrollHeight)

            event.target.style.height = nextHeight + 'px'
            event.target.classList.remove('task__edit-input-text--invalid')
        }
    }

    keyPressHandler(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (event.target.value !== '') {
                this.updateSummary(event)
            }
        }
    }

    updateSummary() {
        const input = document.querySelector(DOMstrings.inputForTaskUpdate)
        const value = input.value
        const taskElement = input.closest(".task")
        const id = taskElement.id

        const btnsContainer = taskElement.querySelector(DOMstrings.BtnsContainer)
        const taskNameWrapper = taskElement.querySelector(DOMstrings.taskNameWrapper)

        this.checkboxDisplayHandler(taskElement)

        if (value !== '') {
            document.removeEventListener('click', this.documentClickHandler)
            const afterEditSpan = ` <span class="task__name">${value}</span>`
            btnsContainer.innerHTML = editDeleteBtns
            taskNameWrapper.innerHTML = afterEditSpan
            this.addTaskEventListeners(taskElement)
            TasksController.updateTask(id, value)
        }
    }

    getTaskHtmlString(task) {
        return (`<div class="task" id="${task.id}">
        <div class="task__content-wrapper">
        <div class="task__description">
        <label class='task__checkbox'>
        <input type="checkbox" name="check">
        <svg version="1.1" class="task__checkbox_svg" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
            style="enable-background:new 0 0 100 100;" xml:space="preserve">
            <polyline class="task__checkbox_line" points="3.5,45.5 40.5,82.5 95.7,15.3 "
                stroke-linecap="round" /></svg>
    </label>
    
    <div class="task__name-wrapper">
    <span class="task__name" title="${task.summary}">${task.summary}</span>
    </div>
    </div>
    <div class="task__btns">
    <i class="task__btn-edit"></i>
    <i class="task__btn-delete"></i>
    </div>
    </div>
    <div class="line"></div></div>`)
    }

}

export default TaskView;