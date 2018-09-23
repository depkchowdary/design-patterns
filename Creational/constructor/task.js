var Todos = []

/* task.js contains Task object structure prototype member, instance members ect.,  */

var Todo = function (name, description) {
    this.name = name
    this.description = description
    this.completed = false
}

Todo.prototype.complete = function () {
    console.log("completing task " + this.name)
    this.completed = true
}

Todo.prototype.save = function () {
    console.log("saving task " + this.name)
    Todos.push(this)
}

module.exports = Todo