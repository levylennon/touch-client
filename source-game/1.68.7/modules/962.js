function(e, t, i) {
    function n(e) {
        a.call(this, "div", {
            className: "tabs"
        }), e = e || {}, this.addClassNames(e.className), this.options = e, this.tabsMap = {}, this.tabsOrderIds = [], this.curentTabId = null, this.nextId = 0
    }
    i(963);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(63),
        s = i(91)
        .playUiSound;
    o(n, a), e.exports = n, n.prototype.addTab = function(e, t, i) {
        var n = this,
            o = i,
            a = !1;
        o || (o = this.nextId, this.nextId += 1, a = !0);
        var c = a ? "tab" + o : o,
            l = this.createChild("div", {
                className: ["tab", c],
                text: e
            });
        return r(l), l.on("tap", function() {
            n.options.closable && o === n.curentTabId ? n.close() : (n.openTab(o), s("TAB"))
        }), l.on("enable", function(e) {
            this._isDisable = !e, this.toggleClassName("disabled", !e), e || n.curentTabId !== o || n.openFirstTab()
        }), this.tabsMap[o] = {
            tab: l,
            target: t
        }, this.tabsOrderIds.push(o), t && t.hide(), o
    }, n.prototype.toggleTabDisplay = function(e, t) {
        var i = this.tabsMap[e];
        if (i && i.tab.toggleDisplay(t), this.curentTabId === e && !i.tab.isVisible()) {
            var n = this.tabsOrderIds[0];
            e === n ? this.close() : this.openTab(n)
        }
    }, n.prototype.openTab = function(e, t, i) {
        i = i || {}, t = t || {};
        var n = this.curentTabId === e;
        if (i.forceOpen || !n) {
            "number" == typeof e && (e = this.tabsOrderIds[e]);
            var o = this.tabsMap[e];
            if (!o) return console.error("openTab - invalid tab ID given: " + e);
            n || this.close(), o.tab.addClassNames("on"), this.toggleTabNotification(e, !1);
            var a = o.target;
            a && (a.emit("open", t), a.show(), i.delayOpenedEvent || a.emit("opened", t)), this.curentTabId = e, this.emit("openTab", e)
        }
    }, n.prototype.openFirstTab = function() {
        this.openTab(this.tabsOrderIds[0])
    }, n.prototype.getTabsMap = function() {
        return this.tabsMap
    }, n.prototype.getFirstTab = function() {
        return this.tabsMap[this.tabsOrderIds[0]]
    }, n.prototype.getCurrentTabId = function() {
        return this.curentTabId
    }, n.prototype.getCurrentTab = function() {
        return this.tabsMap[this.curentTabId]
    }, n.prototype.getTabTarget = function(e) {
        var t = this.tabsMap[e] || {};
        return t.target
    }, n.prototype.close = function() {
        if (this.curentTabId || "number" == typeof this.curentTabId) {
            var e = this.tabsMap[this.curentTabId];
            e.tab.delClassNames("on");
            var t = e.target;
            t && (t.hide(), t.emit("close"))
        }
        this.curentTabId = null
    }, n.prototype.setClosable = function(e) {
        this.options.closable = e
    }, n.prototype.toggleTabNotification = function(e, t) {
        var i = this.tabsMap[e];
        i && i.tab.toggleClassName("notification", t)
    }, n.prototype.toggleTabAvailability = function(e, t) {
        var i = this.tabsMap[e];
        if (i) {
            var n = i.tab;
            void 0 === t && (t = !n._isDisable), n.setEnable(t)
        }
    }, n.prototype.emitOnCurrentTab = function(e, t) {
        t = t || {};
        var i = this.getCurrentTab();
        i && i.target.emit(e, t)
    }
}
