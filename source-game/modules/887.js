function(e, t, i) {
    function n(e) {
        return e ? (p.call(this, "div", e), this.isAlive = !0, this.tweener = null, this.timeout = null, this.isLocked = e.isLocked, this.channel = e.channel, this.decodeAllPages = e.decodeAllPages, this.msgPages = null, this.currentPage = 0, this._senderId = e.senderId, this._senderName = e.senderName, this._isNonChat = e.isNonChat || !1, this._createContent(e), this.closeFunc = this.close.bind(this), this.actionHandler = e.action, this.closeHandler = e.onClose, e.title && this.setTitle(e.title), this._setContent(e.msg, e.objectItems), this.actor = e.actor, void(e.actor && this.contentLength && this._openNextToActor())) : console.error(new Error("SpeechBubble: params is missing"))
    }

    function o(e, t) {
        for (var i = 0, n = null, o = 0; o < t.length; o++) {
            var a = e.lastIndexOf(t[o]);
            a > i && (n = t[o], i = a)
        }
        return null === n ? null : e.substr(0, i + n.length)
    }

    function a(e) {
        for (var t, i = [], n = 0, a = "", r = "";;) {
            t = e.substr(n, O);
            var s = e.length - n;
            if (s < O) return i.push(r + t), i;
            var c = o(t, w);
            if (c && s - c.length < O * v) {
                var l = o(t.substr(0, s * y), w);
                l && s - l.length <= O && (c = l)
            }
            if (!c || c.length < O * v) {
                var d = o(t, T);
                d && d.length >= O * y && (c = d, a = C), c || (c = t, a = C)
            }
            n += c.length, i.push(r + c + a), r = a === C ? C : "", a = ""
        }
    }
    i(888);
    var r = i(16),
        s = i(502),
        c = i(56)
        .inherits,
        l = i(63),
        d = i(88),
        u = i(22),
        p = i(72),
        h = 250,
        f = 150,
        b = 150,
        m = 150,
        M = .85,
        g = 2e3,
        _ = .6,
        A = 150,
        O = 450,
        v = .3,
        y = .6,
        z = "   ",
        w = ["\n", ". ", "... ", "? ", "! "],
        T = [" ", ", ", ": ", "; "],
        C = "...";
    c(n, p), e.exports = n, n.prototype._createContent = function(e) {
        this.addClassNames("speechBubble"), this.isLocked && this.addClassNames("frozen"), l(this, {
            doubletapTimeout: 1
        }), this.on("tap", this._tapHandler), e.title && (this.title = this.createChild("div", {
            className: "title"
        })), this.content = this.createChild("div", {
            className: "content"
        }), this.arrow = this.createChild("div"), e.channel && this.addClassNames("channel" + e.channel)
    }, n.prototype._resize = function() {
        var e = this.content,
            t = e.rootElement.clientWidth;
        if (t > f) {
            var i = this.contentLength < b ? f : h;
            e.setStyle("width", i + "px")
        }
    }, n.prototype._setArrow = function(e) {
        this.arrow.setClassNames("arrow");
        var t = e.angle;
        t > 0 ? t > Math.PI / 2 ? this.arrow.addClassNames("bottomLeft") : this.arrow.addClassNames("bottomRight") : t < -Math.PI / 2 ? this.arrow.addClassNames("topLeft") : this.arrow.addClassNames("topRight");
    }, n.prototype.setTitle = function(e) {
        this.title.setText(e)
    }, n.prototype._setPage = function(e) {
        this.content.appendChild(s.process(e, {
            objectItems: this.objectItems,
            channel: this.channel,
            decodeAllPages: this.decodeAllPages,
            senderId: this._senderId,
            senderName: this._senderName,
            isNonChat: this._isNonChat
        })), this.contentLength = e.length
    }, n.prototype._setContent = function(e, t) {
        if (this.objectItems = t, "string" == typeof e) e.length > O && (this.nextBtn = this.createChild("div", {
            className: "nextBtn"
        }), this.msgPages = a(e), this.currentPage = 0, e = this.msgPages[0] + z), this._setPage(e);
        else {
            if (!(e instanceof p)) return console.error(new Error("SpeechBubble: unknown msg type (" + typeof e + ")"));
            this.content.appendChild(e), this.contentLength = e.rootElement.innerText.length
        }
    }, n.prototype._displayNextPage = function() {
        return !!this.msgPages && (!(this.currentPage >= this.msgPages.length - 1) && (u.tween(this, {
            opacity: 0
        }, {
            time: A
        }, function() {
            if (this.isAlive) {
                this.currentPage++, this.currentPage === this.msgPages.length - 1 && this.nextBtn.hide();
                var e = this.msgPages[this.currentPage] + z;
                this.content.setStyle("width", null), this.content.clearContent(), this._setPage(e), this._resize(), this._findPosition(), r.forceReflow(this), u.tween(this, {
                    opacity: 1
                }, {
                    time: m
                })
            }
        }), !0))
    }, n.prototype._openNextToActor = function() {
        this.setStyle("opacity", 0), window.gui.gameGuiContainer.appendChild(this), this._resize();
        var e = window.isoEngine.mapScene.camera;
        e.emitAtDestination ? e.once("atDestination", this._findPositionAppearAndListen.bind(this)) : this._findPositionAppearAndListen()
    }, n.prototype._findPositionAppearAndListen = function() {
        this.isAlive && (this._findPosition(), this._appearAndListen())
    }, n.prototype._findPosition = function() {
        var e = window.gui.boxArranger;
        this.box && e.removeBox(this.box);
        var t = this.box = window.gui.boxArranger.addBoxNextToActor(this.actor, this);
        this.setStyles({
            left: t.x + "px",
            top: t.y + "px"
        }), this._setArrow(t)
    }, n.prototype._appearAndListen = function() {
        window.gui.on("disconnect", this.closeFunc), this.isLocked || window.isoEngine.on("mapLoaded", this.closeFunc);
        var e = this.isLocked || this.msgPages,
            t = e ? 1 : M;
        this.tweener = u.tween(this, {
            opacity: t
        }, {
            time: m
        }, function() {
            if (!e) {
                var t = d.computeNotificationDisplayTime(this.contentLength);
                this.timeout = window.setTimeout(function(e) {
                    e._dimBeforeDisappearing()
                }, t, this)
            }
        })
    }, n.prototype._dimBeforeDisappearing = function() {
        this.tweener = u.tween(this, {
            opacity: _
        }, {
            time: 400
        }, this._disappearLater)
    }, n.prototype._disappearLater = function() {
        this.timeout = window.setTimeout(this.closeFunc, g)
    }, n.prototype._tapHandler = function() {
        if (!this._displayNextPage()) {
            if (this.isLocked) {
                if (!this.actionHandler) return;
                return this.actionHandler()
            }
            return this.msgPages ? this.close() : this.tweener || this.timeout ? void this._freeze() : this.close()
        }
    }, n.prototype._freeze = function() {
        this.addClassNames("frozen"), this.setStyle("opacity", 1), this.tweener.cancel(), this.tweener = null, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null), window.foreground.on("dom.touchend", this.closeFunc)
    }, n.prototype.close = function(e) {
        e && e.isReload || this.isAlive && (this.isAlive = !1, this.setEnable(!1), this.tweener && this.tweener.cancel(), window.clearTimeout(this.timeout), window.isoEngine.removeListener("mapLoaded", this.closeFunc), window.foreground.removeListener("dom.touchend", this.closeFunc), window.gui.removeListener("disconnect", this.closeFunc), this.closeHandler && this.closeHandler(), window.gui.boxArranger.removeBox(this.box), u.tween(this, {
            opacity: 0
        }, {
            time: A
        }, this.destroy))
    }
}
