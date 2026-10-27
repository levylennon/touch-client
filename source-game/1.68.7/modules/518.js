function(e, t, i) {
    function n() {
        r.call(this);
        var e, t;
        this.once("open", function() {
            var i = this,
                n = this.header.appendChild(new o);
            e = this.entryList.appendChild(new s(n)), e.on("close", function() {
                i.close()
            }), t = this.entryList.appendChild(new c(n)), t.on("close", function() {
                i.close()
            }), this._addCancel()
        }), this.on("open", function(i, n) {
            var o = i.playerId === window.gui.playerData.id;
            o ? t.updateContent(i) : e.updateContent(i), t.toggleDisplay(o), e.toggleDisplay(!o), n()
        })
    }
    var o = i(464),
        a = i(56)
        .inherits,
        r = i(450),
        s = i(519),
        c = i(533);
    a(n, r), e.exports = n
}
