//From constructor pattern, the functions in Todo constructor function are getting duplicated with each new invocation
//Below prototype patterns allows us to define common functionality for all the object creted and help keep the code
//DRY

var Todos = []
var Todo = function (name, description) {
    this.name = name
    this.description = description
    this.completed = false
}

Todo.prototype.complete = function(){
    console.log("completing task " + this.name)
    this.completed = true
}

Todo.prototype.save = function(){
    console.log("saving task " + this.name)
    Todos.push(this)
}

var todo1 = new Todo("watch movie", "Watch your weekly movie")
var todo2 = new Todo("pickup groceries", "Weekly grocery shopping")
var todo3 = new Todo("Driving Test", "Stand in DMV line")

todo1.save()
todo1.complete()
todo2.save()
todo3.save()

console.log(Todos)