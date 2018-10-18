var Task = function(data){
    this.name = data.name;
    this.priority = data.priority
    this.project = data.project
    this.user = data.user
    this.complete = data.complete
}

var TaskService = function() {
    return {
        complete: function(task){
            task.complete = true;
            console.log("Task: "+task.name+" is completed" )
        },
        setCompleteDate: function(task){
            if(task.complete){
                task.completedOn = new Date()
                console.log("Task: " + task.name + " is completed on "+task.completedOn)
            }
        },
        notifyComplete: function(task, user){
            console.log(`Notifying that Task: ${task.name} is completed by ${user}`)
        },
        saveTask: function(task) {
            console.log(`saving task: ${task.name}`)
        }
    }
    
}();

var data = {
    name: "A test task",
    priority: 22,
    project: "A project placeholder",
    user : "Deep",
    complete: false
}


var task1 = new Task(data)

/* TaskService.complete(task1)
if(task1.complete){
    TaskService.setCompleteDate(task1)
    TaskService.notifyComplete(task1, task1.user)
    TaskService.saveTask(task1)
}  */


/* The above code is bit tiresome to write for every task. It is always better to have a unified orchestration function. All these orchestration functions forms 
a wrapper which facades out the complexity of the underlying service function */


var TaskServiceWrapper = function(){
    return{
        completeAndNotify: function(task){
            TaskService.complete(task)
            if (task.complete) {
                TaskService.setCompleteDate(task)
                TaskService.notifyComplete(task, task.user)
                TaskService.saveTask(task)
            } 
        }
    }
}();

TaskServiceWrapper.completeAndNotify(task1)

/* Obviously, this can be combined with module pattern to hide the core functionality of the underlying function using a service wrapper layer */

/* Task: A test task is completed
Task: A test task is completed on Thu Oct 18 2018 21:30:19 GMT+0530 (India Standard Time)
Notifying that Task: A test task is completed by Deep
saving task: A test task */

