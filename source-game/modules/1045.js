function(e, t, i) {
    function n(e) {
        function t(e) {
            i.tabs.emitOnCurrentTab("opened", e)
        }
        s.call(this, e.window);
        var i = this;
        this.isWindowWithTabs = !0, this.tabs = this.windowBody.appendChild(new l), this.once("open", this._initTabsListeners), this.on("open", o), this.on("opened", function(e) {
            t(e)
        }), this.on("close", a), this.on("focus", function() {
            this.tabs.emitOnCurrentTab("focus")
        }), this.tabs.on("openTab", function() {
            i._openedTimestamp = c.now()
        }), window.gui.on("disconnect", function() {
            i._resetTabs(), i._initTabs()
        })
    }

    function o() {
        var e = this;
        this._initTabs(), window.gui.uiLocker.on("updated", function(t) {
            if (t.windowId === e.id && t.tabId) return e.tabs.getTabsMap()[t.tabId] ? void e.tabs.toggleTabAvailability(t.tabId, !t.locked) : console.error(new Error("Unknown tab id `" + t.tabId + "` in `" + e.id + "` window."))
        })
    }

    function a() {
        this._resetTabs()
    }
    var r = i(56)
        .inherits,
        s = i(70),
        c = i(21),
        l = i(1046);
    r(n, s), e.exports = n, n.prototype.addTab = function(e, t, i, n) {
        function o() {
            s.setTitle(i)
        }

        function a() {
            s.setHelpTab(n)
        }

        function r() {
            o(), a()
        }
        if (i = i || "", !e || !t) return console.error("Missing informations to add a tab");
        var s = this,
            c = this.windowBody.appendChild(t);
        c.tabId = e, this.tabs.addTab("", c, e), c.on("open", r)
    }, n.prototype.openTab = function(e, t, i) {
        this.tabs.openTab(e, t, i)
    }, n.prototype._initTabs = function() {
        if (this.tabs)
            for (var e in this.tabs.getTabsMap()) {
                var t = window.gui.uiLocker.isTabAvailable(this.id, e);
                this.tabs.toggleTabAvailability(e, t)
            }
    }, n.prototype._resetTabs = function() {
        this.tabs.close()
    }, n.prototype.getOpenedTabId = function() {
        return this.tabs.getCurrentTabId()
    }, n.prototype._initWindowKPI = function() {}, n.prototype._sendWindowKPI = function() {}, n.prototype._resetWindowKPI = function(e) {
        return e ? void(this._openedTimestampTabs[e] = this._scBalanceWhenOpenTabs[e] = this._hcBalanceWhenOpenTabs[e] = 0) : this._openedTimestamp = this._scBalanceWhenOpen = this._hcBalanceWhenOpen = 0
    }, n.prototype._initTabsListeners = function() {
        if (this.tabs) {
            var e = this,
                t = window.gui.playerData;
            this._openedTimestampTabs = {}, this._scBalanceWhenOpenTabs = {}, this._hcBalanceWhenOpenTabs = {}, this.tabs.tabsOrderIds.forEach(function(i) {
                e.tabs.tabsMap[i].target.on("open", function() {
                    e._openedTimestampTabs[i] = c.now(), e._scBalanceWhenOpenTabs[i] = t.inventory.kamas, e._hcBalanceWhenOpenTabs[i] = t.inventory.goultines
                }), e.tabs.tabsMap[i].target.on("close", function() {
                    e.prepareKPI(i, e._openedTimestampTabs[i], e._scBalanceWhenOpenTabs[i], e._hcBalanceWhenOpenTabs[i]), e._resetWindowKPI(i)
                })
            })
        }
    }
}
