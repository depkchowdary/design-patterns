/* Task object with core functionality */

var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority
    this.project = data.project
    this.user = data.user
    this.complete = data.complete
}

Task.prototype.completed = function () {
    console.log("completing task " + this.name)
    this.complete = true
}

Task.prototype.save = function () {
    console.log("saving task " + this.name)
}

module.exports = Task