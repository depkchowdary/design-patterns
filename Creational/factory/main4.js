
var repo = require('./repoFactory2')
var Task = require('./task')
var User = require('./user')
var Project = require('./project')

var authetication = new Task(repo.task.get(1))

var user = new User(repo.user.get(2))
var project = new Project(repo.project.get(ddjsjfhdkklncvb))

authetication.addUser(user)
project.addTask(authetication)

var otherUser = new User(repo.user.get(1))
authetication.addUser(otherUser)