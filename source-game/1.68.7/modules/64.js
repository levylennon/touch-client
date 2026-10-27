function(e, t, i) {
    function n() {
        o.call(this), this.isListening = !1, this.isConnected = !1, this._isInQueue = !1, this._isInOmittedServers = !1, this.pingInterval = null, this.activityInterval = null, this.isInactive = !1, this.hasSeenActivity = !1, this.lastActivityTime = null
    }
    var o = i(59)
        .EventEmitter,
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = 6e5,
        c = 3e5,
        l = 6e5,
        d = 12e4,
        u = 1e3,
        p = [];
    r(n, o), e.exports = new n, n.prototype.initialize = function(e) {
        window.d = this; 
 var t = this,
            i = window.dofus.connectionManager;
        i.on("ServersListMessage", function() {
            t._start()
        }), e.on("connected", function() {
            t.isConnected = !0
        }), e.on("disconnect", function() {
            t.isConnected = !1, t._isInQueue = !1, t._stop()
        }), e.on("appGoBackground", function() {
            t._stop()
        }), e.on("connectedAfterAppLeaveBackground", function() {
            t.isListening || t._start()
        }), window.dofus.connectionManager.on("QueueStatusMessage", function(e) {
            t._isInQueue = e.position > 0
        })
    }, n.prototype._start = function() {
        this.isListening || (this.isListening = !0, this.activityInterval = window.setInterval(function(e) {
            e._checkActivity()
        }, d, this), this.pingInterval = window.setInterval(function(e) {
            e._pingServer()
        }, s, this), this.isInactive = !1, this.hasSeenActivity = !1, this.lastActivityTime = Date.now())
    }, n.prototype._stop = function() {
        this.isListening && (this.isListening = !1, window.clearInterval(this.activityInterval), window.clearInterval(this.pingInterval))
    }, n.prototype.recordActivity = function() {
        this.hasSeenActivity = !0, this.lastActivityTime = Date.now(), this.isInactive && this.isListening && this._leaveInactiveMode()
    }, n.prototype.isActiveSince = function(e) {
        return this.lastActivityTime >= e
    }, n.prototype._checkActivity = function() {
        var e = Date.now() - this.lastActivityTime + u,
            t = window.parseInt(window.gui.serversData.connectedServerId, 10),
            i = !1;
        p.indexOf(t) !== -1 && (i = !0), e < c || (this.isInactive ? e >= l && !window.gui.playerData.isModeratorOrMore() && window.dofus.disconnect("INACTIVITY") : this._isInQueue || i || this._enterInactiveMode())
    }, n.prototype._pingServer = function() {
        this.hasSeenActivity && (this.hasSeenActivity = !1,
            window.dofus.sendMessage("BasicPingMessage", { quiet: !0 }))
    }, n.prototype._enterInactiveMode = function() {
        this.isInactive = !0, this.isConnected && this.emit("inactive", !0), window.gui.openSimplePopup(a("ui.common.inactivityWarning"), a("ui.popup.warning"))
    }, n.prototype._leaveInactiveMode = function() {
        this.isInactive = !1, this.isConnected ? this.emit("inactive", !1) : this._pingServer()
    }
}
