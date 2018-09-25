
function Project(data){
    this.title = data.title
    this.description = data.description
    this.tasks = data.tasks || []
}
Project.prototype.brief = function(project){
    return `${project.title} titled is about \n +' '+ ${project.description}`
}

Project.prototype.addTask = function(task){
    console.log(`adding ${task.name} to ${this.title} project`)
    this.tasks.push(task)
    
}

module.exports = Project