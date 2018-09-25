/* Accessing repos with simple dot notation and inbuilt caching */


var repoFactory = function(){
        var repos = this;
        var repoList = [{ name: "task", source: "./task"},
                        {name: "user", source: "./user"},
                        {name: "project", source: "./project"}]
        repoList.forEach((repo) => {
            repos[repo.name] = require(repo.source)()
        })
    }


module.exports = new repoFactory