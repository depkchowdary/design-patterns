/* Decarator design patterns lets you decarate the certain special objects with extra features(Methods and properties) 
Below is simple decaration of urgentTask constructed from Task with Priority and notify functions. However, this has the obvious disadvantage of decarating every urgent 
task ever created.
*/

var Task = function (name, description) {
    this.name = name
    this.description = description
    this.completed = false
}

Task.prototype.complete = function () {
    console.log("completing task " + this.name)
    this.completed = true
}

Task.prototype.save = function () {
    console.log("saving task " + this.name)
}

var normalTask = new Task("A normal task", "Task description")

normalTask.complete()

normalTask.save()

var urgentTask = new Task("Urgent Task", "Urgent Task to do by EOD")

urgentTask.priority = 3

urgentTask.notify = function(){
    console.log(this.name + "task created")
}

urgentTask.save = function(){
    this.notify()
    Task.prototype.save.call(this)
}

urgentTask.save();