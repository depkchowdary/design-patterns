var repo = require('./todoRepository')

var Todo = function (data) {
    this.name = data.name
    this.description = data.description
    this.completed = false
}

Todo.prototype.complete = function () {
    console.log("completing task " + this.name)
    this.completed = true
}

Todo.prototype.save = function () {
    console.log("saving task " + this.name)
    repo.save(this)
}

module.exports = Todo