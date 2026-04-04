function(e, t, i) {
    function n(e) {
        s.call(this, "div", {
            className: "FellowPagesWindow",
            name: "directory"
        }), e = e || {}, this.addClassNames(e.className), this.on("open", this._onOpen), this.on("close", this._onClose)
    }
    i(1230);
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(496),
        s = i(72),
        c = i(1231),
        l = i(1235);
    o(n, s), e.exports = n, n.prototype._onOpen = function() {
        var e = this._tabs = this.appendChild(new r({
            className: "tabs"
        }));
        e.addTab(a("ui.social.guilds"), new c, "guilds"), e.addTab(a("ui.alliance.alliances"), new l, "alliances"), e.openTab(0)
    }, n.prototype._onClose = function() {
        this._tabs.close(), this.clearContent(), this._tabs = null
    }
}
