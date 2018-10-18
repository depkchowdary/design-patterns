/* Decarator design patterns lets you decarate the certain special objects with extra features(Methods and properties) 
With the disadvantage from simple decaration, below solution can be implemented. This is called prototypical inheritance.
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


//urgentTask object constructor function. Observe that this puts a call to Task constructor. 
var urgentTask = function(name, description, priority){
    this.priority = priority
    Task.call(this, name, description)
}

//Urgent task prototype
urgentTask.prototype = Object.create(Task.prototype)

urgentTask.prototype.notify = function(){
    console.log("Calling notify service")
}

urgentTask.prototype.save = function () {
    console.log("Doing special stuff before saving task " + this.name)
    this.notify()
    Task.prototype.save.call(this)
} 

var ut = new urgentTask("pick up milk", "A urgent task to pickup milk", 1)
ut.complete();
/* completing task pick up milk */
ut.save()
/* Doing special stuff before saving task pick up milk
saving task pick up milk */

console.log(ut) 
/* Task {
  priority: 1,
  name: 'pick up milk',
  description: 'A urgent task to pickup milk',
  completed: false } */
