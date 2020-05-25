import { DOMstrings } from './domStrings'
import TaskModel from './TaskModel'
import TaskView from './TaskView'


const taskModel = new TaskModel()
const taskView = new TaskView()
// CRUD // Create Read Update Delete

class TasksController {
    createTask(summary) {
        const newTask = taskModel.createTask(summary)
        //Add new task to UI

        taskView.addTaskToUI({ ...newTask })
    }

    renderTasks() {
        const tasks = taskModel.readTasks();
        tasks.forEach(cur => taskView.addTaskToUI(cur))
    }

    deleteTask(event) {
        const itemID = event.target.closest(".task").id
        taskModel.deleteTask(itemID)

        //Remove task from UI 
        taskView.removeTaskFromUI(itemID)
        taskModel.saveChangesToLocalStorage()

    }

    //Edit Task
    updateTask(id, value) {
        taskModel.updateTask(id, value)
    };

}


const tasksController = new TasksController()

export default tasksController