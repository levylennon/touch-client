function(e, t, i) {
    function n(e) {
        c.call(this, "div", {
            className: "SwipingTabs"
        }), e = e || {}, e.className && this.addClassNames(e.className), this.tabClassName = e.tabClassName || "swipeTabBtn", this.tabList = [], this.tabMap = {}, this.index = null, this.currentTab = null, this.leftTab = null, this.rightTab = null, this.isCyclingAllowed = !e.noCycling, e.noHeader || (this.header = this.createChild("div", {
            className: "swipeHeader"
        })), this.content = this.createChild("div", {
            className: "swipeContent"
        }), this.tabContainer = this.content.createChild("div", {
            className: "tabContainer"
        }), r(this.content), this.setSwipeDirection(e.direction || "horizontal");
        var t, i, n = this,
            o = !1;
        this.tabContainer.on("tweenCancelled", function() {
            o = !0
        }), this.content.on("slideStart", function(e) {
            o && (o = !0, n._positionTabs()), i = e[n._axis], n.tabContainer.setStyle("webkitTransition", ""), n.currentTab.content.emit("slideStart"), n.emit("slideStart")
        }), this.content.on("slideCancel", function() {
            n.currentTab.content.emit("slideEnd"), n.emit("slideEnd"), n.tabContainer.setStyles({
                webkitTransform: "translate" + n._axis + "(0)",
                webkitTransition: "-webkit-transform 200ms ease-out"
            })
        }), this.content.on("slide", function(e) {
            this.slideOut || (t = i - e[n._axis], (t > 0 && !n._canRightSlide || t < 0 && !n._canLeftSlide) && (t = 0, i = e[n._axis]), n.tabContainer.setStyle("webkitTransform", "translate" + n._axis + "(" + -t + "px)"))
        }), this.content.on("slideEnd", function(e) {
            if (n.currentTab.content.emit("slideEnd"), n.emit("slideEnd"), e) {
                var i = n.index;
                t > 0 && n._canRightSlide && (i = n.rightTab.index), t < 0 && n._canLeftSlide && (i = n.leftTab.index), n._openTabWithTransition(i)
            } else n.tabContainer.setStyles({
                webkitTransform: "translate" + n._axis + "(0)",
                webkitTransition: "-webkit-transform 200ms ease-out"
            })
        })
    }
    i(497);
    var o = i(86),
        a = i(56)
        .inherits,
        r = i(69),
        s = i(22),
        c = i(72);
    a(n, c), n.prototype.setSwipeDirection = function(e) {
        this._direction = e, this.content.setSlideDirection(e), this._axis = "vertical" === e ? "y" : "x", null !== this.index && this._positionTabs()
    }, n.prototype.addTab = function(e, t, i) {
        var n = this,
            a = this.tabList.length;
        t.addClassNames("swipeTabContent");
        var r = this.tabMap[i] = {
            id: i,
            index: this.tabList.length,
            content: t,
            position: 0,
            enable: !0
        };
        return this.header && (r.tabBtn = this.header.appendChild(new o({
            className: this.tabClassName,
            text: e
        }, function() {
            n.openTab(a)
        })), r.tabBtn.addClassNames("tab" + a)), this.tabList.push(r), this.tabContainer.appendChild(t), t.hide(), a
    }, n.prototype.getTabContent = function(e) {
        var t = isNaN(e) ? this.tabMap[e] : this.tabList[e];
        return t && t.content
    }, n.prototype.swipeNegative = function() {
        this.leftTab && this._openTabWithTransition(this.leftTab.index)
    }, n.prototype.swipePositive = function() {
        this.rightTab && this._openTabWithTransition(this.rightTab.index)
    }, n.prototype._openTabWithTransition = function(e, t) {
        var i = this.tabList[e],
            n = this.tabList[this.index];
        this.header && n.tabBtn.delClassNames("on"), n.content.emit("close"), i.content.emit("open", t);
        var o = this;
        s.tween(this.tabContainer, {
            webkitTransform: "translate" + this._axis + "(" + -i.position + "%)"
        }, {
            time: 200,
            easing: "ease-out"
        }, function() {
            o._positionTabs(), i.content.emit("opened", t), o.emit("openTab", i.id)
        }), this.index = i.index, this.header && i.tabBtn.addClassNames("on")
    }, n.prototype.reopen = function() {
        var e = this.tabList[0];
        this.index = e.index, this.leftTab = null, this.rightTab = null;
        for (var t = this._getNextAvailableRightTab(), i = this._getNextAvailableLeftTab(), n = 0; n < this.tabList.length; n++) {
            var o = this.tabList[n],
                a = o === e || o === i || o === t;
            o.content.toggleDisplay(a)
        }
        this._positionTabs()
    }, n.prototype.openTab = function(e, t, i) {
        i = i || {};
        var n = isNaN(e) ? this.tabMap[e] : this.tabList[e];
        if (n && (i.forceOpen || this.index !== n.index)) {
            if (null !== this.index) {
                if (n === this.leftTab || n === this.rightTab) return this._openTabWithTransition(n.index, t);
                var o = this.tabList[this.index];
                this.header && o.tabBtn.delClassNames("on"), o.content.emit("close"), o.content.hide()
            }
            n.content.emit("open", t), this.index = n.index, this.header && n.tabBtn.addClassNames("on"), n.content.show(), this._positionTabs(), n.content.emit("opened", t), this.emit("openTab", n.id)
        }
    }, n.prototype.close = function() {
        this.tabList[this.index].content.emit("close")
    }, n.prototype._getNextAvailableRightTab = function() {
        var e, t, i;
        for (e = this.index + 1, t = this.tabList.length; e < t; e += 1)
            if (i = this.tabList[e], i.enable) return i;
        if (!this.isCyclingAllowed) return null;
        for (e = 0, t = this.index; e < t; e += 1)
            if (i = this.tabList[e], i.enable) return i;
        return null
    }, n.prototype._getNextAvailableLeftTab = function() {
        var e, t;
        for (e = this.index - 1; e >= 0; e -= 1)
            if (t = this.tabList[e], t.enable) return t;
        if (!this.isCyclingAllowed) return null;
        for (e = this.tabList.length - 1; e > this.index; e -= 1)
            if (t = this.tabList[e], t.enable) return t;
        return null
    }, n.prototype._positionTabs = function() {
        var e = this.currentTab = this.tabList[this.index];
        e.content.setStyle("webkitTransform", "translate" + this._axis + "(0)"), e.position = 0, this.tabContainer.setStyles({
            webkitTransform: "translate" + this._axis + "(0)",
            webkitTransition: ""
        }), this.leftTab && this.leftTab !== e && this.leftTab.content.hide(), this.rightTab && this.rightTab !== e && this.rightTab.content.hide(), this.leftTab = this.rightTab = null;
        var t = this._getNextAvailableRightTab(),
            i = this._getNextAvailableLeftTab();
        t && t === i ? this.index < i.index ? (this._canRightSlide = !0, this._canLeftSlide = !1, this.rightTab = t, t.position = 100, t.content.show(), t.content.setStyle("webkitTransform", "translate" + this._axis + "(100%)")) : (this._canRightSlide = !1, this._canLeftSlide = !0, this.leftTab = i, i.position = -100, i.content.show(), i.content.setStyle("webkitTransform", "translate" + this._axis + "(-100%)")) : (t ? (this._canRightSlide = !0, this.rightTab = t, t.position = 100, t.content.show(), t.content.setStyle("webkitTransform", "translate" + this._axis + "(100%)")) : this._canRightSlide = !1, i ? (this._canLeftSlide = !0, this.leftTab = i, i.position = -100, i.content.show(), i.content.setStyle("webkitTransform", "translate" + this._axis + "(-100%)")) : this._canLeftSlide = !1);
    }, n.prototype.toggleTabDisplay = function(e, t) {
        var i = this.tabMap[e];
        if (i) {
            if (this.toggleTabAvailability(e, t), i.tabBtn.toggleDisplay(t), t) return i.content.show();
            if (this.currentTab && e === this.currentTab.id) {
                var n = this._getNextAvailableLeftTab();
                n && this.openTab(n.id)
            }
            i.content.hide()
        }
    }, n.prototype.toggleTabAvailability = function(e, t) {
        var i = isNaN(e) ? this.tabMap[e] : this.tabList[e];
        i && (t = Boolean(t), t !== i.enable && (i.enable = t, this.header && (t ? i.tabBtn.enable() : i.tabBtn.disable()), null !== this.index && this._positionTabs()))
    }, n.prototype.toggleTabNotification = function(e, t) {
        var i = isNaN(e) ? this.tabMap[e] : this.tabList[e];
        i && this.header && i.tabBtn.toggleClassName("notification", t)
    }, e.exports = n
}
