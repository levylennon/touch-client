function(e, t, i) {
    function n(e) {
        function t(e) {
            var t = e[this._axis] - c;
            t * this._direction <= 0 ? t = 0 : t * this._direction > this._contentSize - this._visibleSize && (t = (this._contentSize - this._visibleSize) * this._direction);
            var i = "translate" + this._axis + "(" + (this._currentPosition + t) + "px)";
            this.content.setStyle("webkitTransform", i), this.background && this.background.setStyle("webkitTransform", i)
        }

        function i(e) {
            var t = e[this._axis] - c;
            t * this._direction >= 0 ? t = 0 : t * this._direction < this._visibleSize - this._contentSize && (t = (this._visibleSize - this._contentSize) * this._direction);
            var i = "translate" + this._axis + "(" + (this._currentPosition + t) + "px)";
            this.content.setStyle("webkitTransform", i), this.background && this.background.setStyle("webkitTransform", i)
        }

        function n() {
            l = !0
        }

        function o() {
            l || d.close(), l = !1
        }
        s.call(this, "div", {
            className: "SwipingDrawer"
        }), e = e || {}, this.addClassNames(e.className), this.swipeBlockedInFight = e.swipeBlockedInFight, e.background && (this.backgroundArea = this.createChild("div", {
            className: "drawerBackgroundArea"
        }), this.background = this.backgroundArea.createChild("div", {
            className: "drawerBackground"
        })), this.visibleArea = this.createChild("div", {
            className: "visibleArea"
        }), this.content = this.visibleArea.createChild("div", {
            className: "drawerContent"
        }), this._contentSize = 0, this._extraContentSize = e.backDrawerSize || 0, this.isOpen = !1, this._isAlwaysOpen = !1, a(this);
        var r, c;
        this.on("slideStart", function(e) {
            var n = window.gui.fightManager,
                o = n.isInFight(),
                a = n.getDraggingSpellState(),
                s = o && this.swipeBlockedInFight && a;
            this._isAlwaysOpen || this.shouldKeepOpen || s || (this.addClassNames("open"), this._tween1 && (this._tween1.cancel(), this._tween1 = null), this._tween2 && (this._tween2.cancel(), this._tween2 = null), c = e[this._axis], r = this.isOpen ? t : i, this.on("slide", r))
        }), this.on("slideEnd", function(e, t, i) {
            if (!this._isAlwaysOpen && !this.shouldKeepOpen) {
                var n = "x" === this._axis ? t : i;
                this._currentPosition += n;
                var o, a = window.gui.fightManager,
                    s = a.isInFight(),
                    c = a.getDraggingSpellState(),
                    l = s && this.swipeBlockedInFight && c;
                o = e && !l ? n * this._direction < 0 : this.isOpen, o ? this._open(!0) : this._close(!0), r && this.removeListener("slide", r)
            }
        }), this.on("slideCancel", function() {
            this._isAlwaysOpen || this.shouldKeepOpen || (this.isOpen ? this._open(!0) : this._close(!0), r && this.removeListener("slide", r))
        });
        var l = !1,
            d = this;
        e.autoClose && (this.on("open", function() {
            this.on("dom.touchstart", n), window.gui.wBody.on("dom.touchstart", o)
        }), this.on("close", function() {
            this.removeListener("dom.touchstart", n), window.gui.wBody.removeListener("dom.touchstart", o)
        })), e.openingSide && this.setOpeningSide(e.openingSide)
    }
    i(780);
    var o = i(56)
        .inherits,
        a = i(69),
        r = i(22),
        s = i(72),
        c = i(91)
        .playUiSound,
        l = 150;
    o(n, s), e.exports = n, n.prototype.getCurrentDrawerSize = function() {
        return parseInt(this.getStyle(this._dimension), 10)
    }, n.prototype.getCurrentContentSize = function() {
        return this.content.rootElement[this._clientProperty]
    }, n.prototype.setAsAlwaysOpen = function(e) {
        this._isAlwaysOpen = e, this.lockDrawer(e)
    }, n.prototype.lockDrawer = function(e) {
        e !== this.drawerLocked && (this.close(), this.drawerLocked = e, this.lockSlide(e))
    }, n.prototype.setOpeningSide = function(e) {
        switch (this.side = e, this.replaceClassNames(["top", "bottom", "left", "right"], [e]), e) {
            case "top":
                this._axis = "y", this._dimension = "height", this._clientProperty = "clientHeight", this._direction = 1, this.setSlideDirection("vertical");
                break;
            case "bottom":
                this._axis = "y", this._dimension = "height", this._clientProperty = "clientHeight", this._direction = -1, this.setSlideDirection("vertical");
                break;
            case "left":
                this._axis = "x", this._dimension = "width", this._clientProperty = "clientWidth", this._direction = 1, this.setSlideDirection("horizontal");
                break;
            case "right":
                this._axis = "x", this._dimension = "width", this._clientProperty = "clientWidth", this._direction = -1, this.setSlideDirection("horizontal")
        }
    }, n.prototype.refresh = function() {
        if (this._visibleSize = this.rootElement[this._clientProperty], this._contentSize = this.getCurrentContentSize(), this._contentSize) {
            this._isAlwaysOpen && (this._contentSize += this._extraContentSize), this._contentSize < this._visibleSize && (this._contentSize = this._visibleSize);
            var e, t, i, n, o, a;
            switch (e = t = i = n = o = a = "", this.side) {
                case "top":
                    t = this._visibleSize + "px";
                    break;
                case "bottom":
                    e = this._visibleSize + "px";
                    break;
                case "left":
                    n = this._visibleSize + "px";
                    break;
                case "right":
                    i = this._visibleSize + "px"
            }
            if (this.content.setStyles({
                    top: e,
                    bottom: t,
                    left: i,
                    right: n,
                    width: o,
                    height: a,
                    webkitTransform: "translate" + this._axis + "(" + 100 * this._direction + "%)"
                }), this.setStyle(this._dimension, this._contentSize + "px"), this.background) {
                var r = {
                    top: e,
                    bottom: t,
                    left: i,
                    right: n,
                    width: "",
                    height: "",
                    webkitTransform: "translate" + this._axis + "(" + 100 * this._direction + "%)"
                };
                r[this._dimension] = this._contentSize + "px", this.background.setStyles(r)
            }
            this._currentPosition = this._contentSize * this._direction, this.isOpen = !1, this.delClassNames("open")
        }
    }, n.prototype._open = function(e) {
        if (e || !(this._opening || this.isOpen || this.drawerLocked)) {
            this._opening = !0, this.addClassNames("open"), c("SWIPE_OPEN"), this._tween1 && this._tween1.cancel(), this._tween2 && this._tween2.cancel(), e || this.emit("opening");
            var t = this;
            this._tween1 = r.tween(this.content, {
                webkitTransform: "translate" + this._axis + "(" + this._visibleSize * this._direction + "px)"
            }, {
                time: l,
                easing: "ease-out"
            }, function() {
                t._currentPosition = t._visibleSize * t._direction, t._tween1 = null, t._opening = !1, t.isOpen || t.emit("open"), t.isOpen = !0
            }), this.background && (this._tween2 = r.tween(this.background, {
                webkitTransform: "translate" + this._axis + "(" + this._visibleSize * this._direction + "px)"
            }, {
                time: l,
                easing: "ease-out"
            }, function() {
                t._tween2 = null
            }))
        }
    }, n.prototype.open = function() {
        this._open(!1)
    }, n.prototype._close = function(e) {
        if (e || !this._closing && this.isOpen && !this.drawerLocked) {
            this._closing = !0, c("SWIPE_CLOSE"), this._tween1 && this._tween1.cancel(), this._tween2 && this._tween2.cancel(), e || this.emit("closing");
            var t = this;
            this._tween1 = r.tween(this.content, {
                webkitTransform: "translate" + this._axis + "(" + 100 * this._direction + "%)"
            }, {
                time: l,
                easing: "ease-out"
            }, function() {
                t._currentPosition = t._contentSize * t._direction, t._tween1 = null, t._closing = !1, t.emit("close"), t.isOpen = !1, t.delClassNames("open")
            }), this.background && (this._tween2 = r.tween(this.background, {
                webkitTransform: "translate" + this._axis + "(" + 100 * this._direction + "%)"
            }, {
                time: l,
                easing: "ease-out"
            }, function() {
                t._tween2 = null
            }))
        }
    }, n.prototype.close = function() {
        this._close(!1)
    }
}
