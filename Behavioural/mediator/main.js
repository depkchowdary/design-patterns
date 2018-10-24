var Task = require('./task')
var Mediator = require('./mediator')
var [NotificationService, LoggingService, AuditingService] = require('./services')


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


var task1 = new Task(data)

Mediator.subscribe('save',ns, ns.update)
Mediator.subscribe('save', ls, ls.update)
Mediator.subscribe('save', as, as.update)

task1.save = function(){
    Mediator.publish('save', this)
    Task.prototype.save.call(this)
}

task1.save();

Mediator.subscribe('complete', ns, ns.update)
Mediator.subscribe('complete', ls, ls.update)
Mediator.subscribe('complete', as, as.update)

task1.completed = function () {
    Mediator.publish('complete', this)
    Task.prototype.completed.call(this)
}

task1.completed();