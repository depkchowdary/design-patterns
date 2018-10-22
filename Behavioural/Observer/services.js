var NotificationService = function () {
var message = "Notifying";
this.update = function (task) {
    console.log(message + " the " + task.user + " about " + task.name)
}
}

var LoggingService = function () {
    var message = "Logging";
    this.update = function (task) {
        console.log(message + " the " + task.user + " about " + task.name)
    }
}

var AuditingService = function () {
    var message = "Auditing";
    this.update = function (task) {
        console.log(message + " the " + task.user + " about " + task.name)
    }
}


module.exports = [NotificationService , LoggingService, AuditingService]