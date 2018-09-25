/* This file is a collection of functions that can be logically grouped together. The returned object is exported
and funtions are called where ever needed */

var todoRepo = function(){
    var baseUrl = "https://mockapi.com/tasks"
    var get = function (id) {
        console.log("getting task with " + id + "from db")
        return {
            name: "walk out the dog",
            description: "walk peppa out"
        }
    }
    var save = function (task) {
        console.log("saving the todo " + task.name + " to the db")
    }
    return {
        get,
        save,
    }
}

module.exports = todoRepo;