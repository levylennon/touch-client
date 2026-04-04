function(e, t, i) {
    function n(e) {
        r.call(this, "div", {
            className: ["waitingGauge", "spinner"],
            hidden: !0
        }), e = e || {};
        var t = this.createChild("div", {
                className: "verticalCenterDiv"
            }),
            i = this.gauge = t.createChild("div", {
                className: "gauge"
            });
        this.progressCircle = i.appendChild(new a({
            size: e.size || s,
            thickness: e.thickness || c,
            color: e.color || l,
            bgColor: e.bgColor || d
        })), this.valueElement = i.createChild("div", {
            className: "value",
            text: ""
        }), this.labelElt = t.createChild("div", {
            className: "label",
            text: ""
        })
    }
    i(991);
    var o = i(56)
        .inherits,
        a = i(486),
        r = i(72),
        s = 70,
        c = 7,
        l = "#58b",
        d = "#555";
    o(n, r), e.exports = n, n.prototype.setLabel = function(e) {
        this.labelElt.setText(e)
    }, n.prototype.showGauge = function(e, t, i) {
        this.goal = e, i = i || 1, e > i ? (this.progressCircle.setValue(0, 1), this.valueElement.setText("0%"), this.labelElt.setText(t ? t : ""), this.delClassNames("spinner"), this.gauge.show(), this.labelElt.show()) : this.labelElt.hide(), this.show()
    }, n.prototype.refreshGauge = function(e) {
        if (this.gauge.isVisible()) {
            var t = (this.goal - e) / this.goal;
            this.progressCircle.setValue(t, 1), this.valueElement.setText(Math.round(100 * t) + "%")
        }
        0 === e && this.hideGauge()
    }, n.prototype.hideGauge = function() {
        this.goal = 0, this.addClassNames("spinner"), this.gauge.hide(), this.hide()
    }
}
