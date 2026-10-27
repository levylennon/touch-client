function(e, t, i) {
    function n() {
        function e() {
            i && (i.unset(), i.delClassNames("unavailable")), s = "remove"
        }

        function t() {
            window.gui.playerData.inventory.usePreset(n), s = "equip"
        }
        a.call(this, {
            noHeader: !0
        });
        var i, n, o, s, c = {};
        this.once("open", function() {
            c.equipSet = this._addEntry(r("ui.common.equip"), t), c.remove = this._addEntry(r("ui.common.remove"), e), this._addCancel()
        }), this.on("open", function(e, t) {
            e = e || {}, i = e.slot, o = e.onClose, n = e.presetId, s = "", c.remove.toggleDisplay(Boolean(e.canRemove)), c.equipSet.toggleDisplay(Boolean(e.hasOwnProperty("presetId"))), t()
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
