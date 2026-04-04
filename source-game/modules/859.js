function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "EmoteBox"
        }), this._chatIcons = new o, this.appendChild(this._chatIcons);
        var e = this;
        this._chatIcons.on("closing", function() {
            e.hide()
        }), this.isOpen = !1, this._emoteBoxSize = 85, this._time = 200, this._delay = 0, this._easing = "ease-out"
    }
    i(860);
    var o = i(861),
        a = i(72),
        r = i(56)
        .inherits,
        s = i(54)
        .dimensions,
        c = i(13),
        l = i(22);
    r(n, a), e.exports = n, n.prototype.refreshPosition = function() {
        window.gui.ipadRatio ? (this._chatIcons.setPanelsStyle("right", "auto"), this._chatIcons.setPanelsStyle("left", s.pingEmoteBtnSize + "px"), this._chatIcons.setPanelsStyle("bottom", this._emoteBoxSize + "px"), this.setStyle("left", c.CHAT_BTN_MIN_WIDTH + "px"), this.setStyle("width", s.pingEmoteBtnSize + "px"), this.setStyle("height", this._emoteBoxSize + "px"), this.setStyle("bottom", s.bottomBarHeight + "px"), this.setStyle("line-height", "inherit")) : (this._chatIcons.setPanelsStyle("left", "auto"), this._chatIcons.setPanelsStyle("right", this._emoteBoxSize + "px"), this._chatIcons.setPanelsStyle("bottom", s.pingEmoteBtnSize + "px"), this.setStyle("left", s.mapRight - this._emoteBoxSize + "px"), this.setStyle("width", this._emoteBoxSize + "px"), this.setStyle("height", s.pingEmoteBtnSize + "px"), this.setStyle("bottom", "0px"), this.setStyle("line-height", s.pingEmoteBtnSize + "px"))
    }, n.prototype.getChatIcons = function() {
        return this._chatIcons
    }, n.prototype.show = function() {
        var e = this;
        e.setStyle("visibility", "visible"), l.tween(this, {
            webkitTransform: "translate3d(0, 0, 0)"
        }, {
            time: this._time,
            delay: this._delay,
            easing: this._easing
        }, function() {
            e.isOpen = !0
        })
    }, n.prototype.hide = function() {
        var e = this;
        window.gui.ipadRatio ? l.tween(this, {
            webkitTransform: "translate3d(0, " + this._emoteBoxSize + "px, 0)"
        }, {
            time: this._time,
            delay: this._delay,
            easing: this._easing
        }, function() {
            e.setStyle("visibility", "collapse"), e.isOpen = !1
        }) : l.tween(this, {
            webkitTransform: "translate3d(" + this._emoteBoxSize + "px, 0, 0)"
        }, {
            time: this._time,
            delay: this._delay,
            easing: this._easing
        }, function() {
            e.setStyle("visibility", "collapse"), e.isOpen = !1
        })
    }
}
