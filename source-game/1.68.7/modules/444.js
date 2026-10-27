function(e, t, i) {
    var n = i(417),
        o = i(34)
        .logger;
    n.prototype._setupBorderArrow = function() {
        this._borderArrow = this.createChild("div", {
            className: "BorderArrow"
        })
    }, n.prototype.showBorderArrow = function(e, t, i, n) {
        switch (e) {
            case "top":
            case "bottom":
                this._borderArrow.setStyles({
                    left: t + "px",
                    top: ""
                });
                break;
            case "left":
            case "right":
                this._borderArrow.setStyles({
                    top: i + "px",
                    left: ""
                })
        }
        if (n) {
            var a = this;
            this.isSameSubArea(n, function(t, i) {
                t && (o.warning("No neighbour found while trying to display the borderArrow : " + t), i = !0);
                var n = i ? "BorderArrow" : "BorderArrowNewArea";
                a._borderArrow.setClassNames([n, e]), a._borderArrow.show()
            })
        } else {
            var r = "BorderArrow";
            this._borderArrow.setClassNames([r, e]), this._borderArrow.show()
        }
    }, n.prototype.hideBorderArrow = function() {
        this._borderArrow.hide()
    }
}
