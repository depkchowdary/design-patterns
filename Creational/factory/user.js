var User = function(data){
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.emailId = data.emailId
}


//user prototype
User.prototype.fullName = function(...args){
    return args.reduce((previous, current) => {
        return previous + ' ' + current
    })
}


