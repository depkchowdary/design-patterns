/* This file is a collection of functions that can be logically grouped together. The returned object is exported
and funtions are called where ever needed */

var userRepo = function () {
    var baseUrl = "https://mockapi.com/users"
    var get = function (id) {
        console.log("getting user with " + id+ "from db")
        return {
            firstName: "Deepak",
            lastName: "Tatineni",
            emailId: "depk@depk.com"
        }
    }
    var save = function (user) {
        console.log("saving the todo " + user.fullName() + " to the db")
    }
    return {
        get,
        save,
    }
}

module.exports = userRepo;