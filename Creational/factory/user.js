var User = function(data){
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.emailId = data.emailId
}


//user prototype
User.prototype.fullName = function(){
    return this.firstName + ' '+ this.lastName 
}


module.exports = User
