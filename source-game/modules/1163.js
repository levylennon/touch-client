function(e, t, i) {
    function n() {
        r.call(this, {
            className: "WalletWindow",
            positionInfo: {
                left: 0,
                top: 0,
                width: s,
                height: c
            },
            noCloseButton: !0,
            noTitle: !0
        }), this.wallet = null, this.on("open", this._onOpen)
    }
    i(1164);
    var o = i(56)
        .inherits,
        a = i(1165),
        r = i(70),
        s = 300,
        c = 62;
    o(n, r), e.exports = n, n.height = c, n.width = s, n.prototype._onOpen = function() {
        this.wallet || (this.wallet = this.windowBody.appendChild(new a({
            className: "small"
        })))
    }
}
