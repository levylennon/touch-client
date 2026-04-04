function(e, t, i) {
    function n() {
        function e() {
            s.open("grimoire", {
                tabId: "spells",
                tabParams: {
                    spellId: i._spellId
                }
            })
        }

        function t() {
            n && n.unset(), c = "remove"
        }
        a.call(this);
        var i = this;
        this._spellId = 0;
        var n, o, c, l = {};
        this.once("open", function() {
            l.showSpellUi = this._addEntry(r("ui.spell.openUI"), e), l.remove = this._addEntry(r("ui.common.remove"), t), this._addCancel()
        }), this.on("open", function(e, t) {
            e = e || {}, i._spellId = e.spell.id, n = e.slot, o = e.onClose, this.header.setText(e.spell.getName()), c = "", l.remove.toggleDisplay(Boolean(e.canRemove)), t()
        }), this.on("close", function() {
            o && o(c)
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText,
        s = i(52);
    o(n, a), e.exports = n
}
