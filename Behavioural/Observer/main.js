/* Main.js */

var [NotificationService, LoggingService, AuditingService] = require('./services')
var ObservableTask = require('./subject')


/* Services objects */
var ns = new NotificationService();
var ls = new LoggingService();
var as = new AuditingService();

/* Dummy data */
var data = {
    name: "A test task",
    priority: 22,
    project: "A project placeholder",
    user: "Deep",
    complete: false
}

/* Task that can have observers attached  */
var task1 = new ObservableTask(data)

task1.addObserver(ns.update)
task1.addObserver(ls.update)
task1.addObserver(as.update)

task1.completed()
task1.save()