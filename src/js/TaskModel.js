import Task from './Task'

class TaskModel {
    constructor() {
        this.tasks = []

    }

    createTask(summary) {
        //Create New Task
        const newTask = new Task(summary);

        //Push new task into data structure (this.tasks array)
        this.tasks.push(newTask);
        this.saveChangesToLocalStorage();
        return newTask

    }

    readTasks() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
        return this.tasks
    }

    //Delete task
    deleteTask(id) {
        //Delete task from data structure
        const index = this.tasks.findIndex(cur => cur.id === id);

        if (index !== -1) {
            this.tasks.splice(index, 1)
        }

        this.saveChangesToLocalStorage()
    }

    //Edit Task
    updateTask(id, value) {
        const currentTask = this.tasks.find(cur => cur.id === id);
        currentTask.summary = value;
        this.saveChangesToLocalStorage()
    }


    saveChangesToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}


export default TaskModel;