import { makeid } from './helpers'



// class Task descr id summary priority

class Task {
    constructor(summary) {
        this.summary = summary;
        this.id = makeid(5);
    }
}

export default Task