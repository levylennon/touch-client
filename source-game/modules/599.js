function(e, t, i) {
    function n() {
        this._whoIsMap = {}, this._setEventListeners()
    }
    var o = i(504),
        a = i(580),
        r = i(600),
        s = i(30),
        c = "#{",
        l = "}",
        d = ",",
        u = 2e3;
    e.exports = n, n.prototype.processMsg = function(e, t) {
        if (e.channel !== o.PSEUDO_CHANNEL_PRIVATE) return !1;
        var i = e.content;
        if (i.substr(0, c.length) !== c) return !1;
        if (i.substr(i.length - l.length) !== l) return !1;
        if (t) return !0;
        var n = i.substring(c.length, i.length - l.length),
            a = n.split(d);
        switch (a[0]) {
            case "rejoinRequest":
                var r = parseInt(a[1], 10);
                window.gui.playerData.partyData.handleRejoinRequest(r, e.senderId);
                break;
            default:
                window.dofus.sendMessage("IgnoredAddRequestMessage", {
                    name: e.senderName,
                    session: !0
                }), console.error("Ignoring player " + e.senderName + " who sent invalid p2p command: " + e.content)
        }
        return !0
    }, n.prototype.sendMsg = function(e, t) {
        for (var i = c + t, n = 2; n < arguments.length; n++) i += d + arguments[n].toString();
        i += l, a.sendMessage(i, o.PSEUDO_CHANNEL_PRIVATE, e)
    }, n.prototype.checkPlayerOnline = function(e, t) {
        var i = this._whoIsMap[e];
        i ? i.cbs.push(t) : (window.dofus.sendMessage("BasicWhoIsRequestMessage", {
            search: e,
            verbose: !1
        }), this._whoIsMap[e] = {
            cbs: [t],
            timeout: s.setTimeout(this._playerOnlineHandler.bind(this, e, !1), u)
        })
    }, n.prototype._playerOnlineHandler = function(e, t) {
        var i = this._whoIsMap[e];
        delete this._whoIsMap[e], s.clearTimeout(i.timeout);
        for (var n = i.cbs, o = 0; o < n.length; o++) n[o](e, t)
    }, n.prototype._setEventListeners = function() {
        var e = this;
        window.gui.on("disconnect", function() {
            e._whoIsMap = {}
        }), window.dofus.connectionManager.on("BasicWhoIsMessage", function(t) {
            t.verbose || e._whoIsMap[t.playerName] && e._playerOnlineHandler(t.playerName, t.playerState !== r.NOT_CONNECTED)
        })
    }
}
