import './main.scss';
import TasksController from './js/TasksController'
import { DOMstrings } from './js/domStrings'
import { getCurrentTime } from './js/helpers'


const init = () => {
    const newItemStyle = document.querySelector(DOMstrings.newItem);
    const createNewItemStyle = document.querySelector(DOMstrings.createNewItem);
    const toggleSubmitBtn = document.querySelector(DOMstrings.submitBtn);


    //
    TasksController.renderTasks()

    //Click on add new item
    document.querySelector(DOMstrings.newItem).addEventListener('click', () => {
        newItemStyle.style.display = 'none';
        createNewItemStyle.style.display = 'inline-block';
        document.querySelector(DOMstrings.input).value = '';
    });

    //Click on submit btn
    const addTask = (summary) => {
        if (summary.length) {
            TasksController.createTask(summary);
            newItemStyle.style.display = 'inline-flex';
            createNewItemStyle.style.display = 'none';
        }
    }

    document.querySelector(DOMstrings.submitBtn).addEventListener('click', () => {
        const summary = document.querySelector(DOMstrings.input).value;
        toggleSubmitBtn.classList.add('add-new-item__btn-add-task--disabled');
        addTask(summary);
    });

    //Press on enter
    document.querySelector(DOMstrings.input).addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            const summary = event.target.value
            addTask(summary);
        }
    });

    //Input change

    document.querySelector(DOMstrings.input).addEventListener('input', () => {
        toggleSubmitBtn.classList.remove('add-new-item__btn-add-task--disabled');
    });


    //Click on cancel btn
    document.querySelector(DOMstrings.cancelBtn).addEventListener('click', () => {
        newItemStyle.style.display = 'inline-flex';
        createNewItemStyle.style.display = 'none';
    });

    const { day, month, year, hours, minutes } = getCurrentTime();
    document.querySelector(DOMstrings.date).textContent = `${day} ${month}, ${year}`;
    document.querySelector(DOMstrings.time).textContent = `${hours}:${minutes}`;

};


init();
