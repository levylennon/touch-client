function(e, t, i) {
    var n = i(417),
        o = i(17)
        .getText;
    n.prototype._setupInfoBox = function() {
        var e = this.infoBox = this.createChild("div", {
            className: "infoBox",
            hidden: !0
        });
        e.mp = e.createChild("div", {
            className: "mp"
        }), e.ap = e.createChild("div", {
            className: "ap"
        })
    }, n.prototype.hideInfobox = function() {
        this.infoBox.hide()
    }, n.prototype.showInfobox = function(e, t) {
        "tackle" === e && (this.infoBox.mp.setText(t.mp ? -t.mp + " " + o("ui.stats.shortMP") : ""), this.infoBox.ap.setText(t.ap ? -t.ap + " " + o("ui.stats.shortAP") : "")), this.infoBox.show()
    }
}
