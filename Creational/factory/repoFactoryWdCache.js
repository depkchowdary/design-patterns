var repoFactory = function(){
    this.getRepo = function(repoType){
        if (repoType == 'user') {
            if(this.userRepo){
                console.log("Appears everytime a user is created")
                return this.userRepo
            }else{
                this.userRepo = require('./userRepository')();
                console.log(this)
                return this.userRepo
            }

        }
        else if (repoType == 'task') {
            if(this.taskRepo){
                return this.taskRepo
            }else{
                this.taskRepo = require('./taskRepository')();
                return this.taskRepo
            }
        }
        else if (repoType == 'project'){
            if(this.projectRepo){
                return this.projectRepo
            }else{
                this.projectRepo = require('./projectRepository')();
                return this.projectRepo
            }

        }
    }
}

module.exports = new repoFactory