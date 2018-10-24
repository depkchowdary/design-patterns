/* Mediator that handles the communication between objects. 

Channels: Channels are where the context and function to execute is placed for an event

Subscribe: Subscribe function lets you add subscribers to a channel, with context and function to execute

Publish: Executes the function with "this" context for all subscribes. 


Here the subject doesnt have to have a notify function to call out to services interested in state change of object. We register a subscriber
and publish where ever necessary

*/

var mediator = (function(){
    var channels = {}

    var subscribe = function(channel , context, func){
        if(!mediator.channels[channel]){
            mediator.channels[channel] = []
        }
        mediator.channels[channel].push({
            context,
            func,
        })
    }

    var publish = function(channel, ...args){
        if(!mediator.channels[channel]){
            throw console.error("No subscribes for channel "+channel);
            return false
        }
        for(let i=0; i< mediator.channels[channel].length;i++){
            let sub = mediator.channels[channel][i]
            sub.func.apply(sub.context,args )
        }
    }

    return{
        channels: {},
        publish,
        subscribe
    }

}());

module.exports = mediator