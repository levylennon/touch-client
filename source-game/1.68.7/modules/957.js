function(e, t) {
    function i() {
        this._cb = null
    }
    e.exports = i, i.prototype.init = function(e, t, i, n, o, a) {
        a = a || "", this.noTextMessage = o, this.requestMessage = n;
        var r = this;
        e.on(t, function(e) {
            var t = "",
                i = e.objectMap;
            for (var n in i)
                if (i.hasOwnProperty(n)) {
                    var o = i[n];
                    t += o.nameId + " " + a + o.id + "\n"
                } t += "Done!", r._cb(null, t), r._cb = null
        }), e.on(i, function() {
            r._cb(null, "AN_ERROR_OCCURRED"), r._cb = null
        })
    }, i.prototype.search = function(e, t) {
        return this._cb ? t(new Error("SEARCH_ON_GOING")) : e ? (e.replace(/[^0-9a-z ]/gi, ""), this._cb = t, void window.dofus.send(this.requestMessage, {
            search: e
        })) : t(null, this.noTextMessage)
    }
}
