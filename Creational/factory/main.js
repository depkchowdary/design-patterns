/* Here lets create a Task and add user to the Task as you can see this can get complex fairly quickly if you lots of data mapping. In main2.js , we 
implement a different way of creating users
*/

var Task = require('./task')
var User = require('./user')
var Project = require('./project')
var taskRepo = require('./taskRepository')
var userRepo = require('./userRepository')
var projectRepo = require('./projectRepository')


var authetication = new Task(taskRepo.get(1))

var user = new User(userRepo.get(1))
var project = new Project(projectRepo.get(1))

authetication.addUser(user)
project.addTask(authetication)


