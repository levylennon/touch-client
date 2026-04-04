function(e, t, i) {
    function n(e, t) {
        c.call(this, "div", {
            className: ["statusIcon", e]
        }), t = t || {}, this.isEnabled = !1, this.tooltipText = t.tooltip, void 0 !== t.tooltip && s.addTooltip(this, o, {
            longTapExplanation: !0
        })
    }

    function o() {
        return this.isEnabled === !1 ? new c("div", {
            className: "disabledTooltipFeature",
            text: this.tooltipText
        }) : this.tooltipText
    }
    i(495);
    var a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(88),
        c = i(72);
    r(n, c), e.exports = n, n.prototype.setEnabled = function(e) {
        this.isEnabled = e, this.toggleClassName("disabled", !e)
    }, n.prototype.setFertileIcon = function(e, t) {
        var i = !1;
        if (e.isNewborn) this.replaceClassNames(["disabled", "fertile", "pregnant", "sterile"], ["newborn"]), this.tooltipText = a("ui.mount.filterBorn");
        else if (e.fecondationTime >= 0) this.replaceClassNames(["disabled", "fertile", "neutered", "newborn", "sterile"], ["pregnant"]), this.tooltipText = a("ui.mount.pregnantSince", e.fecondationTime);
        else if (e.canReproduce) {
            if (!e.isFecondationReady && !t) return void this.hide();
            this.replaceClassNames(["pregnant", "neutered", "newborn", "sterile"], ["fertile"]), i = Boolean(t) && !e.isFecondationReady, this.toggleClassName("disabled", i), this.tooltipText = a("ui.mount.fecondable")
        } else {
            this.replaceClassNames(["disabled", "fertile", "pregnant", "newborn"], ["sterile"]);
            var n = e.isNeutered;
            this.toggleClassName("neutered", n), this.tooltipText = a(n ? "ui.mount.castrated" : "ui.mount.sterilized")
        }
        this.show(), this.isEnabled = !i
    }
}
