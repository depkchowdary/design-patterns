var Todo = require('./task')

var repo = require('./todoRepository')

var dbToDo = new Todo(repo.get(1))
var todo1 = new Todo({name:"watch movie", description: "Watch your weekly movie"})
var todo2 = new Todo({name: "pickup groceries", description: "Weekly grocery shopping"})
var todo3 = new Todo({name: "Driving Test", description: "Stand in DMV line"})



todo1.save()
todo1.complete()
todo2.save()
todo3.save()

dbToDo.complete()
dbToDo.save()
