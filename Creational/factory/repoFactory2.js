/* Accessing repos with simple dot notation and inbuilt caching */


var repoFactory = function(){
        var repos = this;
        console.lo
        var repoList = [{ name: "task", source: "./taskRepository"},
                        {name: "user", source: "./userRepository"},
                        {name: "project", source: "./projectRepository"}]
        repoList.forEach((repo) => {
            repos[repo.name] = require(repo.source)();
        })
    }


module.exports = new repoFactory