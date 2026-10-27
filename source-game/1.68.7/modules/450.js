function(e, t, i) {
    function n(e) {
        h.call(this, "div", {
            className: "ContextualMenu",
            hidden: !0
        }), e = e || {}, this.addClassNames(e.className), this._position = {}, this.header = this.createChild("div", {
            className: "contextHeader"
        }), e.noHeader && this._displayHeader(!1), this.contextContent = this.createChild("div", {
            className: "contextContent"
        }), this.scroller = this.contextContent.appendChild(new d({
            className: "contentScroller"
        }, {
            showHintArrows: !0
        })), this.entryList = this.scroller.content.createChild("div", {
            className: "entryList"
        }), this.buttonContainer = this.scroller.content.createChild("div", {
            className: "buttonContainer"
        }), this.maxHeight = a.screenHeight - 2 * f - (e.noHeader ? 0 : b), this.requestedHeight = this.maxHeight, this.currentHeight = 0;
        var t = this;
        c.on("show", function(e) {
            t._refreshScroller(t.maxHeight - e)
        }), c.on("hide", function() {
            t._refreshScroller(t.maxHeight)
        })
    }
    i(451);
    var o = i(86),
        a = i(54)
        .dimensions,
        r = i(17)
        .getText,
        s = i(67),
        c = i(452),
        l = i(56)
        .inherits,
        d = i(453),
        u = i(23)
        .position,
        p = i(22),
        h = i(72),
        f = 10,
        b = 40;
    l(n, h), e.exports = n, n.prototype._refreshScroller = function(e) {
        if (void 0 !== e) {
            if (this.requestedHeight = e, !this.isOpen && !this.isOpening) return;
            if (this.requestedHeight === this.currentHeight) return
        }
        this.currentHeight = this.requestedHeight, this.scroller.setStyle("maxHeight", this.currentHeight + "px"), void 0 === e && this.scroller.goToTop(), this.scroller.refresh()
    }, n.prototype._displayHeader = function(e) {
        this.toggleClassName("noHeader", !e), this.header.toggleDisplay(e)
    }, n.prototype._setPosition = function(e, t) {
        this._position.x = u.x, this._position.y = u.y, this.setStyles({
            left: e + "px",
            top: t + 25 + "px"
        })
    }, n.prototype._addEntry = function(e, t) {
        var i = this,
            n = this.entryList.appendChild(new o({
                text: e,
                className: "cmButton"
            }, t));
        return n.on("tap", function() {
            i.close()
        }), n
    }, n.prototype._addButton = function(e, t, i) {
        i = i || "";
        var n = this,
            a = this.buttonContainer.appendChild(new o({
                text: i,
                className: t
            }, e));
        return a.on("tap", function() {
            n.close()
        }), a
    }, n.prototype._addCancel = function() {
        return this._addSeparator(), this._addEntry(r("ui.common.cancel"), function() {})
    }, n.prototype._addSeparator = function() {
        this.entryList.createChild("div", {
            className: "separator"
        })
    }, n.prototype._openingAnimation = function(e, t) {
        function i() {
            n._tween1 = p.tween(n, {
                webkitTransform: "translate3d(0,-25px,0)",
                opacity: 1
            }, {
                time: 100,
                easing: "ease-out"
            }, function() {
                n._tween1 = null
            }), n._tween2 = p.tween(n.entryList, {
                webkitTransform: "translate3d(0,0,0)"
            }, {
                time: 200,
                easing: "cubic-bezier(0,1,0.62,1)"
            }, function() {
                this.setStyle("webkitTransform", ""), n._tween2 = null, n.isOpening = !1, n._tween = null, n.isOpen = !0, n.closeRequest && (n.closeRequest = null, n.close("reopen"))
            }), window.gui.scenarioManager && window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_OPEN, {
                context: n
            })
        }
        if (!this.isOpening) {
            if (this.isOpen) return this.close(), void(this.next = {
                positioningMethod: e,
                params: t
            });
            if (e()) {
                this.isOpening = !0, this._tween1 && this._tween1.cancel(), this._tween2 && this._tween2.cancel(), this.show(), this.contextContent.setStyle("overflow", "visible"), this.entryList.setStyle("webkitTransform", "translate3d(0,-100%,0)");
                var n = this;
                this.emit("open", t, function() {
                    n._refreshScroller();
                    var t = e();
                    n._setPosition(t.x, t.y), n.contextContent.setStyle("overflow", "hidden"), window.setTimeout(i, 0)
                })
            }
        }
    }, n.prototype.openAt = function(e, t, i) {
        var n = this;
        this._openingAnimation(function() {
            return s.getElementPositionAt(n, e, t)
        }, i)
    }, n.prototype.openAround = function(e, t) {
        var i = this;
        this._openingAnimation(function() {
            return i.rootElement && e.rootElement ? s.getElementPositionAround(i, e) : null
        }, t)
    }, n.prototype.close = function(e) {
        if (this.isOpening) return void(this.closeRequest = !0);
        if (!this.isClosing && this.isOpen) {
            this.isClosing = !0, this._tween1 && this._tween1.cancel(), this._tween2 && this._tween2.cancel();
            var t = this;
            this.emit("close", e), window.gui.scenarioManager && window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_CLOSE), this._tween1 = p.tween(this.entryList, {
                webkitTransform: "translate3d(0,-100%,0)"
            }, {
                time: 200,
                easing: "ease-out"
            }, function() {
                t._tween1 = null, t.isClosing = !1, t.isOpen = !1, t.next && (t._openingAnimation(t.next.positioningMethod, t.next.params), t.next = null)
            }), this._tween2 = p.tween(this, {
                webkitTransform: "translate3d(0,0,0)",
                opacity: 0
            }, {
                delay: 100,
                time: 100,
                easing: "ease-out"
            }, function() {
                t.hide(), t._tween2 = null
            })
        }
    }
}
