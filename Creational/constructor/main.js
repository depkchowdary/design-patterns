var Todo = require('./task')

var todo1 = new Todo("watch movie", "Watch your weekly movie")
var todo2 = new Todo("pickup groceries", "Weekly grocery shopping")
var todo3 = new Todo("Driving Test", "Stand in DMV line")

todo1.save()
todo1.complete()
todo2.save()
todo3.save()

