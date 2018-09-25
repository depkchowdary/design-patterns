var repo = require('./taskRepository')();

var Todo = function (data) {
    this.name = data.name
    this.description = data.description
    this.completed = false
    this.users =  []
}

Todo.prototype.complete = function () {
    console.log("completing task " + this.name)
    repo.save()
    this.completed = true
}

Todo.prototype.save = function () {
    console.log("saving task " + this.name)
    repo.save(this)
}

Todo.prototype.addUser = function(user){
    console.log('added' + ' '+ user.fullName()+ 'to task'+ ' '+ this.name )
    repo.save(this)
    this.users.push(user)
}

module.exports = Todo