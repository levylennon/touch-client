function(e, t) {
    function i() {
        this._cmdMap = {}
    }
    e.exports = i, i.prototype.addCommand = function(e, t, i) {
        this._cmdMap["/" + e] = {
            fn: t,
            description: i
        }
    }, i.prototype.runCommand = function() {
        var e = Array.prototype.slice.call(arguments),
            t = e[0];
        e.shift();
        var i = this._cmdMap[t];
        if (!i) return !1;
        var n = i.fn;
        return n.apply(null, e), !0
    }, i.prototype.helpList = function() {
        var e = [];
        for (var t in this._cmdMap)
            if (this._cmdMap.hasOwnProperty(t)) {
                var i = this._cmdMap[t];
                e.push("<b>" + t + "</b>: " + i.description)
            } return e
    }
}
