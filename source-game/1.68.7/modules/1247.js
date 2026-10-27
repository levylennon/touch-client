function(e, t, i) {
    function n() {
        a.call(this, {
            className: "FamilyTreeWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: "688px",
                height: "511px"
            }
        }), this._reset(), this.on("open", this._setMount)
    }
    i(1248);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(12);
    o(n, a), e.exports = n, n.prototype._reset = function() {
        this._hasContent = !1, this._myMount = null, this._myMountName = null, this._ancestorBoxes = null
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this._reset()
    }, n.prototype._createContent = function() {
        this._hasContent = !0;
        var e = this.windowBody.createChild("div", {
            className: "tree"
        });
        this._myMount = e.createChild("div", {
            className: ["mountDisplay", "myMount"]
        }), this._myMountName = e.createChild("div", {
            className: "myMountName"
        }), this._ancestorBoxes = [];
        for (var t = 3, i = 0, n = 1; n <= t; n += 1)
            for (var o = i; i < Math.pow(2, n) + o; i += 1) {
                var a = ["mountDisplay", "ancestor_" + i, "geneMinus" + n];
                this._ancestorBoxes.push(e.createChild("div", {
                    className: a
                }))
            }
    }, n.prototype._setMount = function(e) {
        this._hasContent || this._createContent();
        var t = e.ancestor || [],
            i = e.name || r("ui.common.noName");
        this.windowTitle.setText(r("ui.mount.ancestors", i)), this._myMountName.setText(i);
        for (var n = ["gfx/mounts/" + e.model + ".png"], o = 0; o < t.length; o++) t[o] && n.push("gfx/mounts/" + t[o] + ".png");
        var a = this;
        s.preloadImages(n, function(e) {
            if (a._hasContent) {
                a._myMount.setStyle("backgroundImage", e[0]);
                for (var i = 1, n = 0; n < t.length; n++)
                    if (t[n]) {
                        var o = e[i++];
                        a._ancestorBoxes[n].setStyle("backgroundImage", o)
                    } else a._ancestorBoxes[n].setStyle("backgroundImage", "none")
            }
        })
    }
}
