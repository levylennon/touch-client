function(e, t, i) {
    function n() {
        r.call(this, {
            scaleOnPress: !1,
            className: "RewardsIndicator",
            hidden: !0
        }, function() {
            s["switch"]("rewardsPending")
        });
        var e = this;
        window.gui.on("disconnect", function() {
            e.hide()
        }), window.gui.on("resize", function() {
            e._initPosition()
        }), this.on("show", function() {
            l("NEW_REWARD")
        }), d(this);
        var t, i, n, o;
        this.on("slide", function(e) {
            t = e.x - n, i = e.y - o, t < 0 ? t = 0 : t > c.mapRight - 64 && (t = c.mapRight - 64), i < 0 ? i = 0 : i > c.mapBottom - 64 && (i = c.mapBottom - 64), this.setStyle("webkitTransform", "translate3d(" + t + "px, " + i + "px, 0)"), this.setStyle("left", "auto"), this.setStyle("top", "auto")
        }), this.on("slideStart", function(e, t) {
            var i = u(this.rootElement),
                a = t.left - i.left,
                r = t.top - i.top;
            n = e.x - t.left + a, o = e.y - t.top + r
        }), this.on("slideEnd", function() {
            var e = {
                webkitTransform: this.getStyle("webkitTransform")
            };
            p.setValue("rewardsIndicatorPos", e)
        }), this.on("tap", function() {
            var t = p.getValue("rewardsIndicatorPos");
            if (t) {
                var i = e._transFormToLegalPosition(t);
                i && (this.setStyle("webkitTransform", i + "scale(0.95, 0.93)"), window.setTimeout(function() {
                    e.setStyle("webkitTransform", i)
                }, 500))
            }
        })
    }
    i(850);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(86),
        s = i(52),
        c = i(54)
        .dimensions,
        l = i(91)
        .playUiSound,
        d = i(69),
        u = i(66),
        p = i(60);
    o(n, a), e.exports = n, n.prototype._initPosition = function() {
        var e = p.getValue("rewardsIndicatorPos");
        if (e) {
            var t = this._transFormToLegalPosition(e);
            if (t) return void this.setStyle("webkitTransform", t)
        }
        this.setStyle("left", c.mapLeft + c.mapWidth / 2 - 32 + "px"), this.setStyle("top", c.mapBottom - 64 + "px")
    }, n.prototype._transFormToLegalPosition = function(e) {
        var t = e.webkitTransform.match(/translate3d\(([-\d.]+)px,\s*([-\d.]+)px,/);
        if (!t) return "";
        var i = parseFloat(t[1]),
            n = parseFloat(t[2]),
            o = c.mapRight - 64,
            a = c.mapBottom - 64;
        return i = Math.min(Math.max(i, c.mapLeft), o), n = Math.min(Math.max(n, c.mapTop), a), "translate3d(" + i + "px," + n + "px, 0px)"
    }
}
