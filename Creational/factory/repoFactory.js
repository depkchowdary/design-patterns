var repoFactory = function(){

    this.getRepo = function(){
        if (repoType == 'user') {
            var requireRepo = require('./userRepository');
            return requireRepo
        }
        else if (repoType == 'task') {
            var requireRepo = require('./taskRepository');
            return requireRepo
        }
        else if (repoType == 'project') {
            var requireRepo = require('./projectRepository');
            return requireRepo
        }
    }

}

module.exports = repoFactory