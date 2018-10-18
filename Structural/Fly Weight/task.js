var process = require('process')

var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority
    this.project = data.project
    this.user = data.user
    this.complete = data.complete
}

function TaskCollection(){
    var tasks = {};
    var count = 0;
    var add = function(data){
        tasks[data.name] = new Task(data);
        count++
    };
    var get = function(name){
        return tasks[name]
    };
    var getCount = function(){
        return count
    }

    return{
        add: add,
        get: get,
        getCount: getCount
    }
}

var tasks = new TaskCollection()

var priorities = [1 , 2 ,3 ,4 ,5]
var projects = ['Java', 'Node', 'Python', 'GO']
var users =['Deepak', 'Yesh', 'Rag', 'Dil']
var completed = [true, false]

var beforeMemory = process.memoryUsage().heapUsed

for(let i =0; i< 1000000; i++){
    tasks.add({
        name: "task "+ i,
        priority: priorities[Math.floor((Math.random() * priorities.length+1))],
        project : projects[Math.floor((Math.random() * projects.length+1))],
        user: users[Math.floor((Math.random() * users.length+1))],
        complete: completed[Math.floor((Math.random() * completed.length+1))]
    })
}

var afterMemory = process.memoryUsage().heapUsed

console.log("Memory used: " ,(afterMemory - beforeMemory )/ 1000000)
console.log(tasks.getCount())

/* Memory used:  216.495008
1000000*/

/* Here after adding randomly generated tasks Node js's heap memory used is 216 MB. Now Flyweight pattern is implemented and lets see how the performance is 
improved */