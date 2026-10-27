function(e, t, i) {
    function n() {
        a.call(this, {
            className: "previewWindow",
            noTitle: !0,
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: "100%",
                height: "100%"
            }
        });
        var e = this;
        this._content = this.windowBody.createChild("div", {
            className: "picture"
        }), c(this._content), this._content.on("tap", function() {
            r.close(e.id)
        }), this.createChild("div", {
            className: "windowBg"
        });
        var t = this.windowBody.appendChild(new s({
            scaleOnPress: !0
        }));
        t.on("tap", function() {
            r.close(e.id)
        }), this.on("open", function(t) {
            t.url.length && t.url.length > 0 && this._content.setStyle("backgroundImage", t.url), t.dialog && r.openDialog(e.id)
        })
    }
    i(1410);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(115),
        c = i(63);
    o(n, a), e.exports = n
}
