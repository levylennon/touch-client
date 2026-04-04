function(e, t, i) {
    function n() {}

    function o(e, t) {
        function i() {
            l.updateShadows()
        }

        function n() {
            l.interval = setInterval(i, 100)
        }

        function o() {
            clearInterval(l.interval)
        }
        b.call(this, "div", e), t = t || {}, this.addClassNames(t.newUI ? ["Scroller", "ScrollerV2"] : "Scroller");
        var a = Boolean(t.isHorizontal),
            r = a ? ["scrollerContent", "horizontal"] : "scrollerContent",
            s = u.isFeatureOn("scrollerBoundToWrapper");
        this.content = this.createChild("div", {
            className: r
        });
        var c;
        s && (c = a ? "vertical" : "horizontal"), this.iScroll = new h(this.rootElement, {
            bindToWrapper: s,
            scrollbars: "custom",
            fadeScrollbars: !1,
            bounce: t.bounce,
            maxSpeed: t.maxSpeed,
            eventPassthrough: c,
            scrollX: a,
            scrollY: !a,
            mouseWheel: !0,
            preventDefault: !1,
            directionLockThreshold: M,
            disablePointer: !0
        }), this.iScroll.myScroller = this, this.on("destroy", this._destroyHandler), t.showHintArrows && (this.scrollUpHint = this.createChild("div", {
            className: "scrollUpHint"
        }), this.scrollDownHint = this.createChild("div", {
            className: "scrollDownHint"
        }), this.notifyInterval = null, this.notifyCount = 0);
        var l = this;
        t.newUI && (this.on("scrollEnd", o), this.on("scrollStart", n)), this.isEnable = !0, this._isListeningToLostHandle = !1, this._onLostHandle = null, this._retryAmount = 0, window.setTimeout(function() {
            l.refresh()
        }, O), this._setupEventListeners()
    }

    function a() {
        var e = this.myScroller;
        return p.requestInteractionHandle("SCROLL", e) ? (e.scrollUpHint && (e.scrollUpHint.hide(), e.scrollDownHint.hide()), void e.emit("scrollStart")) : e.cancel()
    }

    function r() {
        var e = this.myScroller;
        e._refreshHints(), e.emit("scrollEnd")
    }

    function s() {
        this.myScroller.emit("scrollCancel")
    }

    function c(e) {
        e !== this && this.cancel()
    }

    function l() {
        this.requestRefresh && this.refresh(!0), this._isListeningToLostHandle || (m.pauseScrollAndroid(!0), this._isListeningToLostHandle = !0, this._onLostHandle = this._onLostHandle || c.bind(this), p.once("handleTaken", this._onLostHandle))
    }

    function d() {
        p.removeListener("handleTaken", this._onLostHandle), this._isListeningToLostHandle = !1, window.gui.isPortraitMode() || m.pauseScrollAndroid(!1), this.isEnable && this.iScroll.enable()
    }
    i(454);
    var u = i(38),
        p = i(65),
        h = i(455),
        f = i(56)
        .inherits,
        b = i(72),
        m = i(452),
        M = 10,
        g = 17,
        _ = 200,
        A = 8,
        O = 200;
    f(o, b), o.ease = h.utils.ease, o.prototype._destroyHandler = function() {
        window.clearInterval(this.notifyInterval), this.iScroll.destroy()
    }, o.prototype._setupEventListeners = function() {
        this.allowDomEvents(), this.on("dom.touchstart", l), this.on("dom.touchend", d), this.iScroll.on("scrollStart", a), this.iScroll.on("scrollEnd", r), this.iScroll.on("scrollCancel", s)
    }, o.prototype._refreshHints = function() {
        this.scrollUpHint && (this.scrollUpHint.toggleDisplay(this.canScrollUp(g)), this.scrollDownHint.toggleDisplay(this.canScrollDown(g)))
    }, o.prototype.disableHardwareRendering = function(e) {
        this.iScroll.disableHardwareRendering(e)
    }, o.prototype.cancel = function() {
        return u.isFeatureOn("scrollerBoundToWrapper") ? void this.iScroll.cancel() : void this.iScroll.disable()
    }, o.prototype.refresh = function(e, t) {
        if (t = t || n, this.rootElement) {
            var i = this;
            return e && 0 === this.rootElement.clientHeight && this._retryAmount <= 5 ? setTimeout(function() {
                i._retryAmount++, i.refresh(!0, t)
            }, 100) : e || 0 !== this.rootElement.clientHeight ? (this._retryAmount > 5 && console.warn("We are out of refresh retry on Scroller.refresh for " + this.rootElement.className), this.iScroll.refresh(), this.toggleClassName("scrollBgVisible", this.iScroll.hasVerticalScroll || this.iScroll.hasHorizontalScroll), this._refreshHints(), this.requestRefresh = !1, e ? (this._retryAmount = 0, t()) : void 0) : void(this.requestRefresh = !0)
        }
    }, o.prototype.notify = function() {
        if (this.scrollUpHint && this.canScrollDown() && (this.notifyCount = A, !this.notifyInterval)) {
            var e = this;
            this.notifyInterval = window.setInterval(function() {
                e.scrollDownHint.toggleDisplay(), e.notifyCount--, e.notifyCount > 0 || (window.clearInterval(e.notifyInterval), e.notifyInterval = null, e._refreshHints())
            }, _)
        }
    }, o.prototype.scrollToElement = function(e, t, i, n, o) {
        this.iScroll.scrollToElement(e.rootElement, t, i, n, o), t || this._refreshHints()
    }, o.prototype.showElement = function(e, t, i) {
        var n = this.iScroll,
            o = e.rootElement;
        o = o.nodeType ? o : n.scroller.querySelector(o);
        var a = h.utils.offset(o);
        a.left -= n.wrapperOffset.left, a.top -= n.wrapperOffset.top;
        var r = o.offsetHeight,
            s = o.offsetWidth;
        a.top < n.y && r <= n.wrapperHeight && (a.top = Math.min(a.top - r + n.wrapperHeight, n.y)), a.left < n.x && s <= n.wrapperWidth && (a.left = Math.min(a.left - s + n.wrapperWidth, n.x)), a.left = Math.min(0, Math.max(n.maxScrollX, a.left)), a.top = Math.min(0, Math.max(n.maxScrollY, a.top)), a.left === n.x && a.top === n.y || (t = void 0 === t || null === t || "auto" === t ? Math.max(Math.abs(n.x - a.left), Math.abs(n.y - a.top)) : t, this.scrollTo(a.left, a.top, t, i))
    }, o.prototype.scrollTo = function(e, t, i, n) {
        this.iScroll.scrollTo(e, t, i, n), i || this._refreshHints()
    }, o.prototype.scrollBy = function(e, t, i, n) {
        this.iScroll.scrollBy(e, t, i, n), i || this._refreshHints()
    }, o.prototype.setEnable = function(e) {
        e ? this.iScroll.enable() : this.iScroll.disable(), this.isEnable = e
    }, o.prototype.canScrollUp = function(e) {
        return e = e || 1, this.iScroll.options.scrollY ? this.iScroll.y <= -e : this.iScroll.x <= -e
    }, o.prototype.canScrollDown = function(e) {
        return e = e || 1, this.iScroll.options.scrollY ? this.iScroll.maxScrollY - this.iScroll.y <= -e : this.iScroll.maxScrollX - this.iScroll.x <= -e
    }, o.prototype.goToTop = function(e, t) {
        return this.iScroll.options.scrollY ? this.scrollTo(this.iScroll.x, 0, e, t) : void this.scrollTo(0, this.iScroll.y, e, t)
    }, o.prototype.goToBottom = function(e, t) {
        return this.iScroll.options.scrollY ? this.scrollTo(this.iScroll.x, this.iScroll.maxScrollY, e, t) : void this.scrollTo(this.iScroll.maxScrollX, this.iScroll.y, e, t)
    }, o.prototype.getScrollPosition = function() {
        return {
            x: this.iScroll.x,
            y: this.iScroll.y
        }
    }, o.prototype.updateShadows = function() {
        var e = this.rootElement.getBoundingClientRect(),
            t = this.content.rootElement.getBoundingClientRect(),
            i = Math.round(t.bottom) > Math.round(e.bottom) + 1,
            n = Math.round(t.top) < Math.round(e.top);
        this.toggleClassName("bottomShadow", i), this.toggleClassName("topShadow", n)
    }, e.exports = o
}
