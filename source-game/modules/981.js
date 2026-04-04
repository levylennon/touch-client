function(e, t, i) {
    function n(e, t) {
        var i = e.id;
        g.call(this, "div", {
            className: "mountBox",
            name: i,
            hidden: !0
        }), "certificate" === t.id && this.addClassNames("certificate");
        var n = this;
        this._hasBeenDestroyed = !1, this.on("destroy", function() {
            n._hasBeenDestroyed = !0
        }), this.id = i, this.room = t, this.mountData = e, this.selected = !1, this.renderingForeground = null, this.detailLevel = v
    }

    function o() {
        var e = this.mountBox;
        e.room.breedingWindow.tileTapHandler(e)
    }

    function a() {
        return o.call(this.foreground)
    }

    function r() {
        var e = this.foreground.mountBox.mountData.certificate.mountInfo,
            t = e.ownerDesc + "\n" + e.validityDesc;
        M.showNotification(t, this)
    }

    function s(e) {
        var t = "certificate" === e.id,
            i = t ? ["fg", "certificate"] : "fg",
            n = new g("div", {
                className: i,
                hidden: !0
            });
        if (n.mountBox = null, m(n, {
                doubletapTimeout: 1
            }), n.on("tap", o), n.dragInfo = new l(e.breedingWindow, n), n._mountName = n.createChild("div", {
                className: "mountName"
            }), n._mountImg = n.createChild("div", {
                className: "mountImg"
            }), t) {
            n._certifValidity = n.createChild("div", {
                className: "certifValidity"
            });
            var s = n.createChild("div", {
                className: "certifImg"
            });
            m(s, {
                doubletapTimeout: 1
            }), s.foreground = n, s.on("tap", a), s.on("longtap", r)
        } else {
            n._level = n.createChild("div", {
                className: "level"
            }), n._fertileIcon = n.appendChild(new b("fertile"));
            var c = n.gaugeDiv = n.createChild("div", {
                    className: ["gaugeDiv", "partial"]
                }),
                u = c.createChild("div", {
                    className: "iconGaugeBar"
                });
            n._staminaGauge = u.appendChild(new d("stamina", null, {
                size: _,
                withoutLabel: !0
            })), n._maturityGauge = u.appendChild(new d("maturity", null, {
                size: _,
                withoutLabel: !0
            })), n._loveGauge = u.appendChild(new d("love", null, {
                size: _,
                withoutLabel: !0
            })), n._serenityGauge = c.appendChild(new f({
                isMini: !0
            })), n._serenityGauge.resize()
        }
        return n
    }
    i(982);
    var c = i(12),
        l = i(977),
        d = i(484),
        u = i(17)
        .getText,
        p = i(56)
        .inherits,
        h = i(481),
        f = i(492),
        b = i(494),
        m = i(63),
        M = i(588),
        g = i(72),
        _ = 27,
        A = 4,
        O = 2,
        v = 0,
        y = 1,
        z = 2,
        w = {};
    w.shed = [], w.paddock = [], w.certificate = [];
    var T = {};
    p(n, g), e.exports = n, n.freeContent = function() {
        w.shed = [], w.paddock = [], w.certificate = []
    }, n.prototype.setSpinnerVisible = function(e) {
        this.renderingForeground && this.renderingForeground.toggleClassName("spinner", Boolean(e))
    }, n.prepareTilePool = function(e, t) {
        for (var i = w[e.id], n = t - i.length, o = 0; o < n; o++) {
            var a = e.box.appendChild(s(e));
            i.push(a)
        }
    }, n.prototype._createTile = function() {
        var e = this.room,
            t = w[e.id],
            i = t.pop();
        i || (i = e.box.appendChild(s(e))), i.mountBox = this, this.renderingForeground = i
    }, n.prototype._moveTile = function(e) {
        var t = this.renderingForeground;
        if (t.index !== e) {
            var i = this.room,
                n = i.numColumns,
                o = Math.floor(e / n) * i.rowHeight,
                a = e % n * i.columnWidth;
            t.index = e, t.setStyle("webkitTransform", "translate3d(" + a + "px, " + o + "px, 0)")
        }
    }, n.prototype._releaseTileContent = function() {
        var e = w[this.room.id];
        e.push(this.renderingForeground), this.renderingForeground = null, this.detailLevel = v
    }, n.prototype._updateTileContent = function(e) {
        var t = this.renderingForeground;
        if (t) {
            this.detailLevel = e;
            var i = this.mountData;
            if (t._mountName.setText(i.name || u("ui.common.noName")), t._mountName.toggleClassName("noName", !i.name), i.certificate) {
                var n = i.receivedData;
                t._mountName.toggleClassName("sexUnknown", !n), t._mountName.toggleClassName("female", Boolean(n) && n.sex);
                var o = i.certificate.mountInfo;
                this._setValidity(t._certifValidity, o.validityDays, o.validityHours, o.validityMinutes)
            } else {
                t._mountName.toggleClassName("female", Boolean(i.sex)), t._level.setText(u("ui.common.short.level") + " " + i.level);
                var a = h.getFertilityState(i);
                t._fertileIcon.setFertileIcon(a), e === z ? (t._staminaGauge.setValue(i.stamina, i.staminaMax), t._maturityGauge.setValue(i.maturity, i.maturityForAdult), t._loveGauge.setValue(i.love, i.loveMax), t._serenityGauge.setValue(i.serenity), t.gaugeDiv.delClassNames("partial")) : t.gaugeDiv.addClassNames("partial")
            }
            t.dragInfo.setMount(i, t._mountImg), this._retrieveMountImgUrl(t._mountImg, i.model), t.show()
        }
    }, n.prototype._retrieveMountImgUrl = function(e, t) {
        if (t !== e.currentModel) {
            e.currentModel = t;
            var i = this,
                n = T[t];
            return n ? e.setStyle("backgroundImage", n) : void c.preloadImage("gfx/mounts/" + t + ".png", function(n) {
                T[t] = n, e.currentModel === t && (i._hasBeenDestroyed || e.setStyle("backgroundImage", n))
            })
        }
    }, n.prototype._setValidity = function(e, t, i, n) {
        var o = u("tablet.common.validity") + u("ui.common.colon");
        o += t > 0 ? t + " " + u("ui.time.days", t) : i > 0 ? i + " " + u("ui.time.hours", i) : n + " " + u("ui.time.minutes", n), e.toggleClassName("expiringSoon", t < A && t >= O), e.toggleClassName("expiringVerySoon", t < O), e.setText(o)
    }, n.prototype.refreshDisplay = function() {
        this._updateTileContent(z)
    }, n.prototype.setTileSelected = function(e) {
        this.selected = e, this.toggleClassName("selected", e), this.delClassNames("focusedTile")
    }, n.prototype.highlightTile = function() {
        this.selected = !0, this.addClassNames("focusedTile")
    }, n.prototype.prepareToShow = function(e, t) {
        if (this.renderingForeground && this.renderingForeground.index < 0 && this._moveTile(e), 1 === t) {
            if (this.detailLevel >= y) return !1;
            this._createTile(), this._moveTile(e), this._updateTileContent(y)
        } else if (2 === t) {
            if (this.detailLevel === z) return !1;
            this._updateTileContent(z)
        }
        return !0
    }, n.prototype.prepareToGoOffScreen = function() {
        this.renderingForeground && this._releaseTileContent()
    }, n.prototype.showTile = function() {
        this.show()
    }, n.prototype.hideTile = function() {
        this.hide(), this.renderingForeground && (this.renderingForeground.hide(), this._releaseTileContent())
    }, n.hidePoolTiles = function(e) {
        for (var t = w[e.id], i = t.length - 1; i >= 0; i--) t[i].hide()
    }, n.prototype.markForReorder = function() {
        this.renderingForeground && (this.renderingForeground.index = -1)
    }
}
