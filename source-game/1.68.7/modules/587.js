function(e, t, i) {
    function n(e) {
        this.currentStatus = c.PLAYER_STATUS_AVAILABLE, this._createContent(e), this._setListeners()
    }

    function o(e) {
        switch (e) {
            case c.PLAYER_STATUS_AVAILABLE:
                return "available";
            case c.PLAYER_STATUS_IDLE:
                return "away";
            case c.PLAYER_STATUS_AFK:
                return "away";
            case c.PLAYER_STATUS_PRIVATE:
                return "private";
            case c.PLAYER_STATUS_SOLO:
                return "solo";
            default:
                return console.error("getClassNameFromStatus got invalid state", e), "available"
        }
    }
    var a = i(105),
        r = i(17)
        .getText,
        s = i(64),
        c = i(545),
        l = i(88),
        d = {};
    d[c.PLAYER_STATUS_AFK] = "ui.chat.status.away", d[c.PLAYER_STATUS_IDLE] = "ui.chat.status.idle", d[c.PLAYER_STATUS_PRIVATE] = "ui.chat.status.private", d[c.PLAYER_STATUS_SOLO] = "ui.chat.status.solo", d[c.PLAYER_STATUS_AVAILABLE] = "ui.chat.status.availiable", e.exports = n, n.prototype.initialize = function() {
        this.currentStatus = c.PLAYER_STATUS_AVAILABLE
    }, n.prototype._createContent = function(e) {
        this.statusButton = e.createChild("div", {
            className: ["statusButton", "available"]
        });
        var t = this;
        l.addTooltip(this.statusButton, function() {
            return r(d[t.currentStatus])
        }), this.statusButton.on("tap", function() {
            var e = this.rootElement.getBoundingClientRect();
            window.gui.openContextualMenu("userStatus", null, {
                x: e.left + e.width,
                y: e.top
            })
        })
    }, n.prototype._setCurrentStatus = function(e) {
        e !== c.PLAYER_STATUS_IDLE && (this.currentStatus = e), this.statusButton.replaceClassNames(["available", "away", "private", "solo"], [o(e)])
    }, n.prototype._setListeners = function() {
        var e = this;
        a.on("PlayerStatusUpdateMessage", function(t) {
            t.playerId === window.gui.playerData.characterBaseInformations.id && e._setCurrentStatus(t.status.statusId)
        }), s.on("inactive", function(t) {
            var i = t ? c.PLAYER_STATUS_IDLE : e.currentStatus;
            window.dofus.sendMessage("PlayerStatusUpdateRequestMessage", {
                status: {
                    statusId: i
                }
            })
        })
    }
}
