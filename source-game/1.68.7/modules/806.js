function(e, t, i) {
    function n() {
        o.call(this), this.list = {}
    }
    var o = i(59)
        .EventEmitter,
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(130);
    r(n, o), e.exports = n, n.prototype.disconnect = function() {
        this.list = {}
    }, n.prototype.initialize = function(e) {
        var t = this;
        e.on("EmoteListMessage", function(e) {
            s.getDataMap("Emoticons", e.emoteIds, null, function(e, i) {
                if (e) return console.error("could not retrieve emotes data", e);
                for (var n in i) i[n] && (t.list[n] = i[n]);
                t.emit("emoteListUpdated", t.list)
            })
        }), e.on("EmoteAddMessage", function(e) {
            s.getDataMap("Emoticons", [e.emoteId], null, function(i, n) {
                if (i) return console.error("could not retrieve emotes data", i);
                var o = n[e.emoteId],
                    r = o.id;
                t.list[r] || (t.list[r] = o, window.gui.chat.logMsg(a("ui.common.emoteAdded", [o.nameId])), t.emit("emoteAdded", o))
            })
        }), e.on("EmoteRemoveMessage", function(e) {
            var i = t.list[e.emoteId];
            i && (window.gui.chat.logMsg(a("ui.common.emoteRemoved", [i.nameId])), delete t.list[e.emoteId], t.emit("emoteRemoved", e.emoteId))
        })
    }
}
