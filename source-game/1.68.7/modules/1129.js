function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ServerDetailsWindow",
            title: c("ui.sersel.suggestedServer")
        });
        var e = this;
        this.closeButton.setText(c("ui.common.cancel"));
        var t = this.buttonsDiv.appendChild(new s(c("ui.common.cancel"), {
                className: ["greenButtonV2"]
            })),
            i = this.buttonsDiv.appendChild(new s(c("ui.common.ok"), {
                className: ["okBtn", "greenButtonV2"]
            }));
        i.on("tap", function() {
            return e.server ? (window.gui.serversData.selectServer(e.server.id), t.disable(), void i.disable()) : console.error("No server")
        }), t.on("tap", function() {
            r.close(e.id)
        }), this.on("open", function(t) {
            e.server = t, e.serverImage.setClassNames(["serverImage", "servId_" + e.server.id]), e.table.clearContent(), e.updateServerLine(e.server), e.table.toggleDisplayColumn("persos", !1), e.table.selectFirstRow(), 3 === e.server.status ? i.enable() : i.disable()
        })
    }
    i(1130);
    var o = i(56)
        .inherits,
        a = i(1131),
        r = i(52),
        s = i(86)
        .DofusButton,
        c = i(17)
        .getText;
    o(n, a), e.exports = n
}
