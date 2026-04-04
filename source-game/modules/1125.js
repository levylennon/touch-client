function(e, t, i) {
    function n() {
        function e() {
            c.close("presetOptions", {
                action: l.YES,
                applyCharacs: t.applyCharacs,
                applySpells: t.applySpells,
                applyColors: t.applyColors
            })
        }
        s.call(this, {
            className: "PresetOptionsWindow",
            title: a("ui.common.options"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 460,
                height: 250,
                isModal: !0
            }
        });
        var t = this;
        this.applyCharacs = !1, this.applySpells = !1, this.applyColors = !1, this.once("open", function() {
            this.checkboxCharacs = this.windowBody.appendChild(new d(a("ui.common.caracteristics"))), this.checkboxCharacs.on("change", function(e) {
                t.applyCharacs = e
            }), this.checkboxSpells = this.windowBody.appendChild(new d(a("ui.charcrea.spells"))), this.checkboxSpells.on("change", function(e) {
                t.applySpells = e
            }), this.checkboxColors = this.windowBody.appendChild(new d(a("ui.charcrea.colors"))), this.checkboxColors.on("change", function(e) {
                t.applyColors = e
            }), this.saveButton = this.windowBody.appendChild(new o({
                className: "greenButton",
                text: a("ui.common.save")
            })), this.saveButton.on("tap", function() {
                e()
            })
        }), this.on("open", function(e) {
            this.checkboxCharacs.toggleActivation(Boolean(e.applyCharacs)), this.checkboxSpells.toggleActivation(Boolean(e.applySpells)), this.checkboxColors.toggleActivation(Boolean(e.applyColors))
        })
    }
    i(1126);
    var o = i(86),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(70),
        c = i(52),
        l = i(949)
        .actionsEnum,
        d = i(594);
    r(n, s), e.exports = n
}
