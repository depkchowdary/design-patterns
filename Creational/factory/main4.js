/* A simplified repository factory object creation pattern using cache and dot notation pattern */


var repo = require('./repoFactory2')
var Task = require('./task')
var User = require('./user')
var Project = require('./project')


console.log(repo.task.get(1))

var authetication = new Task(repo.task.get(1))

var user = new User(repo.user.get(2))
var project = new Project(repo.project.get("Matrix"))

authetication.addUser(user)
project.addTask(authetication)

var otherUser = new User(repo.user.get(1))
authetication.addUser(otherUser)