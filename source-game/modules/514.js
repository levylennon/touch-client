function(e, t, i) {
    function n() {
        a.call(this);
        var e = this;
        this.data = null, this.on("open", function(e, t) {
            this.data = e, this.header.setText(e.paddockObjectName), t()
        }), this.once("open", function() {
            this._addEntry(r("ui.common.remove"), function() {
                window.dofus.sendMessage("PaddockRemoveItemRequestMessage", {
                    cellId: e.data.cellId
                })
            }), this._addCancel()
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText;
    o(n, a), e.exports = n
}
