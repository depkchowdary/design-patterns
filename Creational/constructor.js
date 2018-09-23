//Constructor pattern is used to create new Object usually with a constructor function and new keyword 
//but other approaches such as class, object.create() can yeild same results. Below is demo

var Todos = []


var Todo = function(name, description){
    this.name = name
    this.description = description
    this.completed = false
    this.complete = function(){
        console.log("completing task "+ this.name)
        this.completed = true
    }
    this.save = function(){
        console.log("saving task "+ this.name)
        Todos.push(this)
    }
}

var todo1 = new Todo("watch movie", "Watch your weekly movie")
var todo2 = new Todo("pickup groceries", "Weekly grocery shopping")
var todo3 = new Todo("Driving Test", "Stand in DMV line")

todo1.save()
todo1.complete()
todo2.save()
todo3.save()

console.log(Todos)