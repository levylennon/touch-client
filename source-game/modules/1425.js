function(e, t, i) {
    function n() {
        c.call(this, "div", {
            className: "PortraitDialogUi"
        }), this._init = !1, this._createDom(), this._setupListeners(), this._init = !0
    }
    i(1426);
    var o = i(12),
        a = i(54)
        .dimensions,
        r = i(502),
        s = i(56)
        .inherits,
        c = i(72),
        l = 2,
        d = 10;
    s(n, c), e.exports = n, n.prototype._createDom = function() {
        if (!this._init) {
            this._portrait = this.appendChild(new c("div", {
                className: "portrait"
            }));
            var e = this.appendChild(new c("div", {
                    className: "dialog"
                })),
                t = e.appendChild(new c("div", {
                    className: "dialogHeader"
                }));
            this._npcName = t.appendChild(new c("div", {
                className: "dialogHeaderTitle"
            })), this._content = e.appendChild(new c("div", {
                className: "dialogContent"
            })), this.hide()
        }
    }, n.prototype._setupListeners = function() {
        var e = this;
        this._init || window.gui.on("disconnect", function() {
            e.hide()
        })
    }, n.prototype._setPortrait = function(e) {
        var t = this;
        return e ? void o.preloadImage("ui/portrait/" + e + ".png", function(e) {
            t._portrait.show(), t._portrait.setStyle("backgroundImage", e)
        }) : t._portrait.hide()
    }, n.prototype._setNpcName = function(e) {
        this._npcName.setText(e)
    }, n.prototype._setDialogContent = function(e) {
        this._content.clearContent(), e instanceof c ? this._content.appendChild(e) : this._content.appendChild(r.process(e))
    }, n.prototype._refreshPosition = function(e) {
        this.setStyle("bottom", a.screenHeight - (a.mapTop + a.mapHeight) + l + "px"), e ? this.setStyles({
            left: "",
            right: a.screenWidth - (a.mapLeft + a.mapWidth) + "px"
        }) : this.setStyles({
            left: d + "px",
            right: ""
        })
    }, n.prototype.displayDialog = function(e) {
        this._setPortrait(e.portraitName), this._setNpcName(e.npcName), this._setDialogContent(e.content), this._refreshPosition(e.rightPosition), this.toggleClassName("blockClick", e.blockClick), this.show()
    }, n.prototype.removeDialog = function() {
        this.hide()
    }
}
