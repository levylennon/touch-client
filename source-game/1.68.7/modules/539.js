function(e, t, i) {
    function n() {
        function e() {
            i && (i.unset(), i.delClassNames("unavailable")), s = "remove"
        }

        function t() {
            window.dofus.sendMessage("ChatSmileyRequestMessage", {
                smileyId: n
            });
            var e = window.gui.pingSystem.getChatIcons();
            e.openPanel && e.closePanels(), s = "use"
        }
        a.call(this, {
            noHeader: !0
        });
        var i, n, o, s, c = {};
        this.once("open", function() {
            c.useSmiley = this._addEntry(r("ui.common.use"), t), c.remove = this._addEntry(r("ui.common.remove"), e), this._addCancel()
        }), this.on("open", function(e, t) {
            e = e || {}, i = e.slot, o = e.onClose, n = e.smileyId, s = "", c.remove.toggleDisplay(Boolean(e.canRemove)), c.useSmiley.toggleDisplay(Boolean(e.hasOwnProperty("smileyId"))), t()
        }), this.on("close", function() {
            o && o(s)
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText;
    o(n, a), e.exports = n
}
