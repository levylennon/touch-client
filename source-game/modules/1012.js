function(e, t, i) {
    function n(e, t, i, n) {
        a.call(this, {
            className: "CharacterTile",
            scaleOnPress: !0
        }, function() {
            o.emit("select")
        });
        var o = this;
        this.id = e, this.entityLook = n;
        var s = t;
        this.createChild("div", {
            className: "name",
            text: s
        });
        var c = "(" + r("ui.common.level") + " " + i + ")";
        this.createChild("div", {
            className: "level",
            text: c
        })
    }
    i(1013);
    var o = i(56)
        .inherits,
        a = i(86),
        r = i(17)
        .getText;
    o(n, a), e.exports = n
}
