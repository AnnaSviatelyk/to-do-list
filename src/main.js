import './main.scss';
import TasksController from './js/TasksController'
import { DOMstrings } from './js/domStrings'


const tasksController = new TasksController()

console.log(tasksController);




const setUpEventListeners = () => {
    const newItemStyle = document.querySelector(DOMstrings.newItem);
    const createNewItemStyle = document.querySelector(DOMstrings.createNewItem);
    const toggleSubmitBtn = document.querySelector(DOMstrings.submitBtn);

    document.querySelector(DOMstrings.newItem).addEventListener('click', () => {
        newItemStyle.style.display = 'none';
        createNewItemStyle.style.display = 'inline-block';
        document.querySelector(DOMstrings.input).value = '';
    });

    document.querySelector(DOMstrings.submitBtn).addEventListener('click', () => {
        const summary = document.querySelector(DOMstrings.input).value;
        toggleSubmitBtn.classList.add('add-new-item__btn-add-task--disabled');

        if (summary.length) {
            tasksController.createTask(summary);
            newItemStyle.style.display = 'inline-flex';
            createNewItemStyle.style.display = 'none';
        }

    });

    document.querySelector(DOMstrings.input).addEventListener('input', () => {
        toggleSubmitBtn.classList.remove('add-new-item__btn-add-task--disabled');
    });


    document.querySelector(DOMstrings.cancelBtn).addEventListener('click', () => {
        newItemStyle.style.display = 'inline-flex';
        createNewItemStyle.style.display = 'none';
    });
}


setUpEventListeners();
