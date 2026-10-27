function(e, t, i) {
    function n(e) {
        e = e || {}, s.call(this, "div", e), this.addClassNames("tutorialPopup"), this._header = this.appendChild(new s("div", {
            className: "tutorialPopupHeader",
            name: "tutorialPopupHeader"
        })), this._header.appendChild(new s("div", {
            className: "tutorialPopupTitle",
            text: a(e.actor)
        })), this.content = this.appendChild(new s("div", {
            className: "tutorialPopupContent"
        })), this._hasAlreadyHaveCloseButton = !1
    }
    var o = i(54)
        .dimensions,
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(72);
    i(925), r(n, s), e.exports = n, n.prototype.setContent = function(e) {
        this.content.clearContent(), e instanceof s ? this.content.appendChild(e) : this.content.setText(e), this.show()
    }, n.prototype.setCloseButton = function() {
        if (!this._hasAlreadyHaveCloseButton) {
            var e = this._header.appendChild(new s("div", {
                className: "tutorialPopupCloseBtn"
            }));
            e.appendChild(new s("div", {
                className: "btnIcon"
            })), this._hasAlreadyHaveCloseButton = !0
        }
    }, n.prototype.open = function() {
        this.setStyle("bottom", o.screenHeight - o.mapHeight + 7 + "px"), this.hide(), window.gui.windowsContainer.appendChild(this)
    }, n.prototype.close = function() {
        this.hide()
    }
}
