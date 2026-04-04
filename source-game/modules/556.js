function(e, t) {
    function i() {
        this._handlerMap = {}
    }
    e.exports = i, i.prototype.listenTo = function(e, t, i) {
        return this._handlerMap[t] ? console.error("dupe listener: " + e.constructor.name + " on " + t) : (this._handlerMap[t] = [e, i], void e.on(t, i))
    }, i.prototype.stopListening = function() {
        for (var e in this._handlerMap) {
            var t = this._handlerMap[e];
            t[0].removeListener(e, t[1])
        }
        this._handlerMap = {}
    }
}
