function(e, t, i) {
    function n(e, t, i) {
        s.call(this, "div", {
            className: ["gaugeIcon", e]
        }), i = i || {}, this.name = e, this.createChild("div", {
            className: "icon"
        });
        var n = i.size || c,
            o = i.thickness || (n < c ? d : l);
        this.progressCircle = this.appendChild(new r({
            size: n,
            thickness: o,
            color: p[e],
            bgColor: u,
            tooltip: t
        })), this.valueElement = i.withoutLabel ? null : this.createChild("div", {
            className: "value",
            text: ""
        })
    }
    i(485);
    var o = i(16),
        a = i(56)
        .inherits,
        r = i(486),
        s = i(72),
        c = 40,
        l = 2.5,
        d = 2,
        u = "#222",
        p = {
            energy: "#ffcc00",
            stamina: "#ebae23",
            maturity: "#0099ff",
            love: "#ff1e1e"
        },
        h = {
            stamina: .75,
            maturity: 1,
            love: .75
        },
        f = .001;
    a(n, s), e.exports = n, n.prototype.setValue = function(e, t, i) {
        i = i || h[this.name] || f, this.valueElement && this.valueElement.setText(o.intToString(e));
        var n = !t || !i || e >= t * i;
        this.toggleClassName("enabled", n), this.progressCircle.setValue(e, t)
    }, n.prototype.setLabel = function(e) {
        this.valueElement.setText(e)
    }
}
