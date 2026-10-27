function(e, t, i) {
    function n() {
        c.call(this, "div", {
            className: "mountType"
        });
        var e = this;
        this._hasBeenDestroyed = !1, this.color1 = this.createChild("div", {
            className: "color"
        }), this.color2 = this.createChild("div", {
            className: ["color", "color2"]
        }), s.addTooltip(this, o, {
            longTapExplanation: !0
        }), this.on("destroy", function() {
            e._hasBeenDestroyed = !0
        })
    }

    function o() {
        return this.tooltipText
    }
    i(489);
    var a = i(56)
        .inherits,
        r = i(130),
        s = i(88),
        c = i(72),
        l = ["#656d61", "#d1d6d0"],
        d = ["#656d61", "#d1d6d0"],
        u = ["#656d61", "#d1d6d0"],
        p = ["#ffd700", "#841b2d"],
        h = ["#fff", "#ff0105"];
    a(n, c), e.exports = n, n.ARMOURED_MOUNT_ID = 88, n.ARMOURED_KRAMELEON_MOUNT_ID = 101, n.FEATHERY_MOUNT_ID = 89, n.ROYAL_MOUNT_ID = 90, n.BARBARIAN_MOUNT_ID = 91, n.NOWEL_MOUNT_ID = 99, n.parseColorsFromLook = function(e, t) {
        if (e === n.ARMOURED_MOUNT_ID) return l;
        if (e === n.ARMOURED_KRAMELEON_MOUNT_ID) return d;
        if (e === n.BARBARIAN_MOUNT_ID) return u;
        if (e === n.ROYAL_MOUNT_ID) return p;
        if (e === n.NOWEL_MOUNT_ID) return h;
        var i = t.split("|")[2];
        if (!i) return l;
        for (var o = i.split(","), a = [], r = 0; r < 3; r++) {
            var s = o[r].split("="),
                c = parseInt(s[0], 10) - 1,
                f = parseInt(s[1], 10);
            isNaN(f) ? console.error("MountType: Color is not a number for mountId: " + e + ", index: " + c) : a[c] = "#" + f.toString(16)
        }
        return a
    }, n.isSingleColor = function(e) {
        return e[0] === e[1] || e[0] === e[2]
    }, n.prototype.setModel = function(e) {
        var t = this;
        r.getDataMap("Mounts", [e], null, function(i, o) {
            if (i) return console.error("Failed loading Mounts with id=", e, "error:", i);
            if (!t._hasBeenDestroyed) {
                var a = o[e],
                    r = n.parseColorsFromLook(e, a.look);
                t.color1.setStyle("backgroundColor", r[0]), t.color2.setStyle("backgroundColor", r[1]), t.color2.toggleDisplay(!n.isSingleColor(r)), t.tooltipText = a.nameId
            }
        })
    }
}
