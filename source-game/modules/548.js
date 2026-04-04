function(e, t, i) {
    function n() {
        a.call(this);
        var e = this;
        this.data = {}, this.once("open", function() {
            e._createDom()
        }), this.on("open", function(e, t) {
            this.data = e, this.header.setText(e.playerName), t()
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText,
        s = i(21),
        c = s.DofusDate;
    o(n, a), e.exports = n, n.prototype._createDom = function() {
        var e = this;
        this._addSeparator(), this._addEntry(r("ui.common.wisperMessage"), function() {
            window.gui.chat.startPrivateMessage(e.data.playerName), e.emit("close")
        }), this._addEntry(r("ui.common.informations"), function() {
            var t = new c(s.now())
                .getServerDate(!1)
                .toString(!1),
                i = t.date + " - " + t.time;
            window.gui.chat.logMsg(i), window.dofus.sendMessage("BasicWhoIsRequestMessage", {
                search: e.data.playerName,
                verbose: !0
            }), e.emit("close")
        }), this._addEntry(r("ui.social.addToFriends"), function() {
            e.emit("close"), window.gui.openConfirmPopup({
                title: r("ui.popup.warning"),
                message: r("ui.social.confirmAddFriend", e.data.playerName),
                cb: function(t) {
                    t && window.dofus.sendMessage("FriendAddRequestMessage", {
                        name: e.data.playerName
                    })
                }
            })
        })
    }
}
