var ObserverList = require('./observerList')
var Task = require('./task')

var ObservableTask = function (data) {
    Task.call(this, data)
    this.observers = new ObserverList();
}

ObservableTask.prototype = Object.create(Task.prototype)

ObservableTask.prototype.addObserver = function (obj) {
    this.observers.add(obj)
}

ObservableTask.prototype.notify = function (context) {
    let observerCount = this.observers.count()
    console.log(observerCount)
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i)(context)
    }
}


ObservableTask.prototype.save = function (obj) {
    this.notify(this)
    Task.prototype.save.call(this)
}

module.exports = ObservableTask