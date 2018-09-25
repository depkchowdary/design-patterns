/* This file is a collection of functions that can be logically grouped together. The returned object is exported
and funtions are called where ever needed */

var todoRepo = function () {
    var baseUrl = "https://mockapi.com/projects"
    var get = function (id) {
        console.log("getting project with " + id + "from db")
        return {
            title: "starKillerBase",
            description : "A pet project of kylo ren to destroy planets"
        }
    }
    var save = function (project) {
        console.log("saving the todo " + project.name + " to the db")
    }
    return {
        get,
        save,
    }
}

module.exports = todoRepo;