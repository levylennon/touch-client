function(e, t, i) {
    function n(e) {
        e = e || {}, u.call(this, "div", {
            className: "window",
            hidden: !0
        }), this.addClassNames(e.className), this.isFullScreen = e.isFullScreen, this.isFullScreen && this.addClassNames("fullScreen"), this.id = "", this.exchangeType = -1, this.positionInfo = this.isFullScreen ? {
            left: "0",
            bottom: "0",
            width: M.screenWidth,
            height: M.screenHeight,
            isFullScreen: !0
        } : e.positionInfo, this.freeContentDelay = e.freeContentDelay, this.freeContentTimeout = null;
        var t = this;
        this.position = null, this.windowManager = null, this.openState = !1, this.isReadyForUserInteraction = !1, this.windowBorder = this.createChild("div", {
            className: "windowBorder"
        }), this.windowContent = this.createChild("div", {
            className: "windowContent"
        }), this.header = this.windowHeadWrapper = this.windowContent.createChild("div", {
            className: "windowHeadWrapper"
        }), e.noTitle || (this.windowTitle = this.windowHeadWrapper.createChild("div", {
            className: "windowTitle"
        }), this.windowSpanTitle = this.windowTitle.createChild("span"), this.windowSpanTitle.setText(e.title || "")), e.plusButton && (this.plusButton = this.windowHeadWrapper.appendChild(new p({
            className: "plusButton",
            scaleOnPress: !0
        })), this.plusButton.myWindow = this), e.minusButton && (this.minusButton = this.windowHeadWrapper.appendChild(new p({
            className: "minusButton",
            scaleOnPress: !0
        })), this.minusButton.myWindow = this), this.helpButton = new p({
            className: "helpButton",
            scaleOnPress: !0
        }), e.noTitle ? this.windowHeadWrapper.insertAsFirstChild(this.helpButton) : this.windowTitle.insertAsFirstChild(this.helpButton), this.helpButton.myWindow = this, this.setHelpTab(e.helpTab), this.helpButton.on("tap", o), e.resizeButton && (this.resizeButton = this.windowHeadWrapper.appendChild(new _({
            scaleOnPress: !0
        })), this.resizeButton.myWindow = this, this.resizeButton.on("tap", e.resizeButton)), e.noCloseButton || (this.closeButton = this.windowHeadWrapper.appendChild(new h({
            scaleOnPress: !0
        })), this.closeButton.myWindow = this, e.customClose || this.closeButton.on("tap", a)), this.openingSound = e.openingSound, this.closingSound = e.closingSound, this.changeDefaultOpenAction = Boolean(e.changeDefaultOpenAction), this.windowBodyWrapper = this.windowContent.createChild("div", {
            className: "windowBodyWrapper"
        }), this.windowBody = this.windowBodyWrapper.createChild("div", {
            className: "windowBody"
        }), this.on("open", r), this.on("opened", s), this.on("close", c), this.on("resize", function() {
            t.position.width = t.windowWidth || 0, t.position.height = t.windowHeight || 0
        })
    }

    function o() {
        var e;
        e = this.myWindow.isWindowWithTabs ? this.myWindow.getOpenedTabId() : this.myWindow.id, e && b.log("HUD.Click_on_button", {
            interface_id: e,
            button_id: "helpButton",
            clic_parameter_key: "timeBetweenWindowOpenedAndClic",
            clic_parameter_value: ~~((m.now() - this.myWindow._openedTimestamp) / 1e3),
            clic_type: "Simple_court"
        }), this.myWindow.windowManager.open("help", this.helpTab)
    }

    function a() {
        this.myWindow.windowManager.close(this.myWindow.id)
    }

    function r() {
        window.clearTimeout(this.freeContentTimeout), this.openingSound ? f(this.openingSound) : null !== this.openingSound && f("WINDOW_OPEN"), this.isReadyForUserInteraction = !0, this._initWindowKPI()
    }

    function s() {
        this.isReadyForUserInteraction && this.emit("contentReady")
    }

    function c() {
        if (this._sendWindowKPI(), "number" == typeof this.freeContentDelay || "function" == typeof this.freeContent) {
            if ("function" != typeof this.freeContent) return console.error("missing freeContent method for", this.id);
            this.freeContentTimeout = window.setTimeout(this.freeContent.bind(this), this.freeContentDelay || 0)
        }
        this.closingSound ? (f(this.closingSound), f("WINDOW_CLOSE_2")) : null !== this.closingSound && (f("WINDOW_CLOSE"), f("WINDOW_CLOSE_2"))
    }

    function l(e, t, i, n) {
        b.log("HUD.Display_Menu", {
            interface_id: e,
            time_spent_on_action: t,
            relative_soft_currency_gained: i,
            relative_hard_currency_gained: n
        })
    }
    i(71);
    var d = i(56)
        .inherits,
        u = i(72),
        p = i(86),
        h = i(115),
        f = i(91)
        .playUiSound,
        b = i(116),
        m = i(21),
        M = i(54)
        .dimensions,
        g = i(66),
        _ = i(127);
    d(n, u), e.exports = n, n.prototype.defaultOpenAction = function() {}, n.prototype.startWaitingForContent = function() {
        this.isReadyForUserInteraction = !1
    }, n.prototype.finishedWaitingForContent = function() {
        this.isReadyForUserInteraction = !0, this.emit("contentReady")
    }, n.prototype.setTitle = function(e) {
        this.windowSpanTitle.setText(e)
    }, n.prototype.setHelpTab = function(e) {
        e ? (this.helpButton.helpTab = e, this.helpButton.show()) : this.helpButton.hide()
    }, n.prototype.toggleHelpDisplay = function(e) {
        this.helpButton.toggleDisplay(e)
    }, n.prototype.localizeEvent = function(e) {
        var t = this;
        return function() {
            t.openState && e.apply(this, arguments)
        }
    }, n.prototype.close = function(e) {
        this.windowManager.close(this.id, e)
    }, n.prototype.changePosition = function(e, t) {
        if (this.position) {
            var i = g(this.rootElement),
                n = g(this.header.rootElement),
                o = i.width,
                a = n.height + (n.top - i.top);
            e = Math.max(0, e), t = Math.max(0, t), e + o > M.windowFullScreenWidth && (e = M.windowFullScreenWidth - o), t + a > M.windowFullScreenHeight && (t = M.windowFullScreenHeight - a), this.setStyle("webkitTransform", "translate3d(" + e + "px, " + t + "px, 0)"), this.position.x = e, this.position.y = t, this.emit("positioned")
        }
    }, n.prototype.backButtonClose = function(e) {
        this.close(e)
    }, n.prototype.prepareKPI = function(e, t, i, n) {
        var o = ~~((m.now() - t) / 1e3),
            a = window.gui.playerData,
            r = a.inventory.kamas - i,
            s = a.inventory.goultines - n;
        l(e, o, r, s)
    }, n.prototype._initWindowKPI = function() {
        if (!this.tabs) {
            var e = window.gui.playerData;
            this._openedTimestamp = m.now(), this._scBalanceWhenOpen = e.inventory.kamas, this._hcBalanceWhenOpen = e.inventory.goultines
        }
    }, n.prototype._sendWindowKPI = function() {
        this.prepareKPI(this.id, this._openedTimestamp, this._scBalanceWhenOpen, this._hcBalanceWhenOpen), this._resetWindowKPI()
    }, n.prototype._resetWindowKPI = function(e) {
        return e ? void(this._openedTimestampTabs[e] = this._scBalanceWhenOpenTabs[e] = this._hcBalanceWhenOpenTabs[e] = 0) : this._openedTimestamp = this._scBalanceWhenOpen = this._hcBalanceWhenOpen = 0
    }
}
