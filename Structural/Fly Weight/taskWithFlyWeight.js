var process = require('process')

var Task = function (data) {
    this.name = data.name;
    this.flyweight = FlyWeightFactory.get(data.priority, data.project, data.user, data.complete)
/*     this.priority = data.priority
    this.project = data.project
    this.user = data.user
    this.complete = data.complete */
}

function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++
    };
    var get = function (name) {
        return tasks[name]
    };
    var getCount = function () {
        return count
    }

    return {
        add: add,
        get: get,
        getCount: getCount
    }
}

var FlyWeight = function(priority , project , user , complete){
    this.priority = priority;
    this.project = project;
    this.complete = complete;
    this.user = user;
}

var FlyWeightFactory = function(){
    
    flyweights = {};
    var get = function(priority, project, user, complete){
        if(!flyweights[priority + project + user + complete]){
            flyweights[priority + project + user + complete] = new FlyWeight(priority , project, user, complete)
        }
        return flyweights[priority + project + user + complete]
    };
    var getCount = function(){
        var count = 0
        for(var f in flyweights) count++
        return count
    }

    return{
        get,
        getCount,
    }
}();


var tasks = new TaskCollection()

var priorities = [1, 2, 3, 4, 5]
var projects = ['Java', 'Node', 'Python', 'GO']
var users = ['Deepak', 'Yesh', 'Rag', 'Dil']
var completed = [true, false]

var beforeMemory = process.memoryUsage().heapUsed

for (let i = 0; i < 1000000; i++) {
    tasks.add({
        name: "task " + i,
        priority: priorities[Math.floor((Math.random() * priorities.length + 1))],
        project: projects[Math.floor((Math.random() * projects.length + 1))],
        user: users[Math.floor((Math.random() * users.length + 1))],
        complete: completed[Math.floor((Math.random() * completed.length + 1))]
    })
}

var afterMemory = process.memoryUsage().heapUsed

console.log("Memory used: ", (afterMemory - beforeMemory) / 1000000)
console.log(tasks.getCount())

console.log(FlyWeightFactory.getCount())

/* Memory used:  188.630808
1000000
127 */


/* Here the common data is shared between tasks using FlyWieght factory which stored all possible combinations of the shared data. In case, you update a task
Implment update method such as the task just gets a new flyweight of updated data then configuring properties of the data */

/* Memory usage decrease due to flyweight is only visible if there is large number of objects are available. i.e., > 1000000 here  */