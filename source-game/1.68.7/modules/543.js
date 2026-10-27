function(e, t, i) {
    function n(e, t, i, n) {
        var o = new c("li", {
            className: t,
            text: e
        });
        return d(o), o.on("tap", function() {
            window.dofus.sendMessage("PlayerStatusUpdateRequestMessage", {
                status: {
                    statusId: i
                }
            }), n.close()
        }), o
    }

    function o() {
        a.call(this, {
            className: "ContextualMenuUserStatus"
        }), this.once("open", function() {
            this.header.setText(r("ui.chat.status.title"));
            for (var e = [{
                    label: r("ui.chat.status.availiable"),
                    className: "available",
                    id: l.PLAYER_STATUS_AVAILABLE
                }, {
                    label: r("ui.chat.status.away"),
                    className: "away",
                    id: l.PLAYER_STATUS_AFK
                }, {
                    label: r("ui.chat.status.private"),
                    className: "private",
                    id: l.PLAYER_STATUS_PRIVATE
                }, {
                    label: r("ui.chat.status.solo"),
                    className: "solo",
                    id: l.PLAYER_STATUS_SOLO
                }], t = this.entryList.createChild("ul"), i = 0, o = e.length; i < o; i += 1) {
                var a = e[i];
                t.appendChild(n(a.label, a.className, a.id, this))
            }
            this._addCancel()
        }), this.on("open", function(e, t) {
            t()
        })
    }
    i(544);
    var a = i(450),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(72),
        l = i(545),
        d = i(63);
    s(o, a), e.exports = o
}
