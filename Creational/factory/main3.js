/* Here the repos are cached and created only once and attached to repoFactory object.
*/

var repoFactory = require('./repoFactoryWdCache')
var Task = require('./task')
var User = require('./user')
var Project = require('./project')

var authetication = new Task(repoFactory.getRepo('task').get(1))

var user = new User(repoFactory.getRepo('user').get(1))
var project = new Project(repoFactory.getRepo('project').get(1))

authetication.addUser(user)
project.addTask(authetication)

var otherUser = new User(repoFactory.getRepo('user').get(1))
authetication.addUser(otherUser)