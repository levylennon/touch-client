function(e, t, i) {
    function n() {
        function e() {
            c.close("presetChooseIcon", l.YES)
        }
        s.call(this, {
            className: "PresetChooseIconWindow",
            title: a("ui.option.tabPic"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 460,
                height: 250,
                isModal: !0
            }
        }), this.once("open", function(t) {
            this.windowBody.appendChild(t), this.saveButton = this.windowBody.appendChild(new o(a("ui.common.save"))), this.saveButton.on("tap", function() {
                e()
            })
        })
    }
    var o = i(86)
        .DofusButton,
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(70),
        c = i(52),
        l = i(949)
        .actionsEnum;
    r(n, s), e.exports = n
}
