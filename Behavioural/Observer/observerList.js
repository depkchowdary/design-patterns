/* Core func for observerList */

function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    this.observerList.push(obj)
}

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index]
    }
}

ObserverList.prototype.count = function () {
    return this.observerList.length
}

module.exports = ObserverList