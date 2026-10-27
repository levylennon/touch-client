function(e, t, i) {
    function n() {
        m.call(this, "div", {
            className: "npcDialogUi",
            hidden: !0
        }), this.inDialog = !1, this.replyHandler = null, this.npcName = null, this.currentMsg = null, this.msgBubble = null, this.singleMsgBubbles = {}, this.isZoomed = !1, this.isChangingZoom = !1, this.uiBox = null, window.gui.on("disconnect", this._closeDialog.bind(this)), this.highlightRepliesFunc = this._highlightReplies.bind(this)
    }

    function o() {
        this.myUi._sendReply(null)
    }

    function a() {
        this.myUi._sendReply(this.replyId)
    }

    function r() {
        var e = this.myUi.replyTabs;
        e.swipeNegative()
    }

    function s() {
        var e = this.myUi.replyTabs;
        e.swipePositive()
    }

    function c() {
        var e = this.myUi;
        e.leftBtn.setEnable(Boolean(this.leftTab)), e.rightBtn.setEnable(Boolean(this.rightTab))
    }

    function l(e, t, i, n, o) {
        e.replyId = t, e.clearContent(), e.appendChild(M.process(i)), e.enable(), e.setStyles({
            width: n,
            lineHeight: y + "px",
            minHeight: o + "px"
        }), e.show()
    }

    function d(e) {
        var t = window.gui;
        return "string" == typeof e.msg && e.actor && t.chat.logNPCMsg(e.msg, e.actor.data.npcId, e.title), t.newSpeechBubble(e)
    }
    i(794);
    var u = i(86),
        p = i(54)
        .dimensions,
        h = i(16),
        f = i(56)
        .inherits,
        b = i(496),
        m = i(72),
        M = i(502),
        g = 150,
        _ = 10,
        A = 4,
        O = 10,
        v = 4,
        y = 22,
        z = 50,
        w = 70,
        T = {
            1: "100%",
            2: "50%",
            3: "33.3%",
            4: "25%"
        },
        C = "25%",
        I = {
            1: "40%",
            2: "60%"
        },
        S = "100%";
    f(n, m), e.exports = n, n.prototype._closeDialog = function() {
        this.inDialog && (this.inDialog = !1, window.foreground.removeListener("dom.touchend", this.highlightRepliesFunc), this.replyHandler && this._sendReply(null), this._closeMsgBubble(), this.hide(), this._restoreZoom(), window.gui.boxArranger.removeBox(this.uiBox), this.uiBox = null, this.emit("closed"))
    }, n.prototype._closeMsgBubble = function() {
        this.msgBubble && (this.msgBubble.close(), this.msgBubble = null)
    }, n.prototype._newButton = function(e, t, i) {
        var n = e.appendChild(new u({
            className: t,
            addIcon: !0
        }, i));
        return n.myUi = this, n
    }, n.prototype._createContent = function() {
        var e = this.frame = this.createChild("div", {
            className: "frame"
        });
        this.leftBtn = this._newButton(e, "leftBtn", r);
        var t = this.replyTabs = e.appendChild(new b({
            noHeader: !0,
            noCycling: !0
        }));
        t.myUi = this, t.on("openTab", c), this.replyElts = [], this.replyBoxes = [], this.numReplyTabs = 0, this.numUsedReplyTabs = 0, this.rightBtn = this._newButton(e, "rightBtn", s), this.closeBtn = this._newButton(e, "closeBtn", o)
    }, n.prototype._refreshSize = function() {
        this.setStyles({
            left: p.mapLeft + O + "px",
            width: p.mapWidth - 2 * O + "px",
            bottom: p.screenHeight - p.screenExceptToolbar.height + A + "px"
        })
    }, n.prototype._prepareReplyButtons = function() {
        for (var e = this.replies, t = e.length, i = Math.ceil(t / v), n = this.numReplyTabs; n < i; n++) {
            var o = this.replyBoxes[n] = new m("div", {
                className: "replyBox"
            });
            this.replyTabs.addTab("", o, n), this.numReplyTabs++;
            for (var r = 0; r < v; r++) {
                var s = o.appendChild(new u({
                    className: "reply"
                }, a));
                s.myUi = this, this.replyElts.push(s)
            }
        }
        for (n = t; n < this.replyElts.length; n++) this.replyElts[n].hide();
        for (this.leftBtn.toggleDisplay(i > 1), this.rightBtn.toggleDisplay(i > 1), this.replyBoxes[0].setStyle("textAlign", i > 1 ? "left" : "center"), n = this.numUsedReplyTabs; n < this.numReplyTabs; n++) this.replyTabs.toggleTabAvailability(n, n < i);
        this.numUsedReplyTabs = i;
        var c = T[t] || C;
        for (n = 0; n < t; n++) l(this.replyElts[n], n, e[n], c, z)
    }, n.prototype._setAllReplyBoxesVisibility = function(e) {
        for (var t = 0; t < this.numUsedReplyTabs; t++) this.replyBoxes[t].toggleDisplay(e)
    }, n.prototype._resizeAndAppear = function(e) {
        this.replyTabs.setStyle("opacity", 0), this._setAllReplyBoxesVisibility(!1), this._prepareReplyButtons(), this._setAllReplyBoxesVisibility(!0), e && (this.setStyle("opacity", 0), this.show());
        var t = I[this.replies.length] || S;
        this.frame.setStyles({
            width: t
        });
        for (var i, n = w, o = this.replies, a = 0; a < o.length; a++) i = this.replyElts[a].rootElement.offsetHeight, n = Math.max(n, i);
        for (this.replyTabs.setStyle("min-height", n + "px"), a = 0; a < o.length; a++) {
            var r = this.replyElts[a];
            if (i = r.rootElement.offsetHeight, i !== n) {
                var s = Math.round(1 + (i - z) / y),
                    c = Math.round(y + (n - i) / s);
                r.setStyles({
                    "line-height": c + "px",
                    minHeight: n + "px"
                })
            }
        }
        if (this.replyTabs.reopen(), this.leftBtn.setEnable(Boolean(this.replyTabs.leftTab)), this.rightBtn.setEnable(Boolean(this.replyTabs.rightTab)), this.replyTabs.setStyle("opacity", 1), e) {
            var l = this.rootElement;
            this.uiBox = window.gui.boxArranger.addObstacle(0, l.offsetTop - _, p.screenWidth, l.offsetHeight), this._waitZoomChange(this._appear)
        }
    }, n.prototype._appear = function() {
        this.inDialog && h.showProgressively(this, g)
    }, n.prototype._waitZoomChange = function(e) {
        if (!this.isChangingZoom) return e && e.call(this);
        var t = this,
            i = window.isoEngine.mapScene.camera;
        i.once("atDestination", function() {
            return t.isChangingZoom && (t.isChangingZoom = !1, t.isZoomed && i.freeze()), e && e.call(t)
        })
    }, n.prototype._zoomOnActor = function(e) {
        if (this.isZoomed) return this._waitZoomChange(e);
        this.isZoomed = !0, this.isChangingZoom = !0;
        var t = this.actor.bbox,
            i = window.isoEngine.mapScene.camera;
        this.previousZoom = i.zoom, this.previousCameraX = i.x, this.previousCameraY = i.y, i.zoom !== i.maxZoom && i.zoomTo(i.maxZoom), i.moveTo(t[1], t[2], !0), this._waitZoomChange(e)
    }, n.prototype._restoreZoom = function(e) {
        if (!this.isZoomed) return this._waitZoomChange(e);
        this.isZoomed = !1, this.isChangingZoom = !0;
        var t = window.isoEngine.mapScene.camera;
        t.unfreeze(), t.zoom !== this.previousZoom && t.zoomTo(this.previousZoom), t.moveTo(this.previousCameraX, this.previousCameraY, !0), this._waitZoomChange(e)
    }, n.prototype._sendReply = function(e) {
        if (!(!this.replyHandler || e > 0 && !this.replies[e])) {
            if (null !== e) {
                this.replyElts[e].disable();
                var t = this.replies[e];
                window.gui.chat.logNPCReplyMsg(t)
            }
            this._closeMsgBubble();
            var i = this.replyHandler;
            this.replyHandler = null, i(e)
        }
    }, n.prototype._bubbleTapHandler = function() {
        return 1 === this.replies.length ? this._sendReply(0) : void this._highlightReplies()
    }, n.prototype._showLockedBubble = function() {
        this.replyHandler && (this.bubbleTapHandler || (this.bubbleTapHandler = this._bubbleTapHandler.bind(this)), this.msgBubble && this.msgBubble.close(), this.msgBubble = d({
            msg: this.currentMsg,
            title: this.npcName,
            actor: this.actor,
            isLocked: !0,
            action: this.bubbleTapHandler,
            isNonChat: !0
        }))
    }, n.prototype._showSingleMsgBubble = function() {
        var e = this,
            t = this.npcName;
        this.singleMsgBubbles[t] && this.singleMsgBubbles[t].close(), this.singleMsgBubbles[t] = d({
            msg: this.currentMsg,
            title: t,
            actor: this.actor,
            isNonChat: !0,
            onClose: function() {
                delete e.singleMsgBubbles[t]
            }
        }), this._sendReply(null)
    }, n.prototype._closeSingleMsgBubbles = function() {
        for (var e in this.singleMsgBubbles) this.singleMsgBubbles[e].close()
    }, n.prototype._highlightReplies = function() {
        var e = this.frame.createChild("div", {
            className: "highlight"
        });
        window.setTimeout(function() {
            e.destroy()
        }, 250)
    }, n.prototype._showQuestion = function() {
        this.frame || this._createContent(), this._refreshSize();
        var e = !this.inDialog;
        this.inDialog = !0, this._closeSingleMsgBubbles(), e ? this._zoomOnActor(this._showLockedBubble) : this._showLockedBubble(), this._resizeAndAppear(e), e && window.foreground.on("dom.touchend", this.highlightRepliesFunc), this.emit("opened")
    }, n.prototype.prepareForNextQuestion = function(e, t) {
        t ? this.inDialog || (this.actor = window.actorManager.getActorFromNpcId(e.id), this._zoomOnActor()) : this._restoreZoom()
    }, n.prototype.showNpcQuestion = function(e, t, i, n) {
        if (null !== this.replyHandler && console.error("previous replyHandler was not called"), n = n || {}, this.replies = t, this.replyHandler = i, this.actor = n.actor || window.actorManager.getActorFromNpcId(n.npcData.id), this.npcName = n.npcData && n.npcData.nameId, this.currentMsg = e, 0 === t.length) {
            if (this.singleMsgBubbles[this.npcName]) return this._sendReply(null);
            this.hide(), this._restoreZoom(this._showSingleMsgBubble)
        } else this._showQuestion()
    }, n.prototype.leaveDialog = function() {
        this._closeDialog()
    }
}
