function(e, t, i) {
    function n(e, t, i, n) {
        for (var o = p(i), a = Object.keys(t), r = 0; r < a.length; r++) {
            for (var s = a[r], d = p(s), h = l.getLine(o.x, o.y, d.x, d.y), f = !1, b = 0, m = h.length; b < m; b++) {
                var M = c(h[b].x, h[b].y),
                    g = e[M];
                if (n[M] && b < m - 1 || 2 !== (2 & g.l)) {
                    f = !0;
                    break
                }
            }
            f && (window.foreground.fightIsUserTurn ? t[s].transformState = u.outSight : t[s].transformState = u.outSightEnemyTurn)
        }
        return t
    }
    var o = i(1489),
        a = i(734),
        r = i(1550)
        .trueName,
        s = i(735),
        c = s.getCellIdFromMapPoint,
        l = i(1558),
        d = i(342),
        u = i(343),
        p = s.getMapPointFromCellId,
        h = i(55),
        f = null,
        b = null;
    o.prototype._initGridOverlayLayers = function() {
        this._fightPositionLayer = null, this._spellRangeLayer = null, this._spellEffectLayer = null, this._walkLayer = null, this._walkAreaLayer = null, this._enemyWalkAreaLayer = null
    }, o.prototype._resetFightPositionLayer = function(e) {
        this.background.removeGridLayer(this._fightPositionLayer), this._fightPositionLayer = e ? this.background.addGridAnimation(e) : null
    }, o.prototype._resetSpellRangeLayer = function(e) {
        this.background.removeGridLayer(this._spellRangeLayer), this._spellRangeLayer = e ? this.background.addGridAnimation(e) : null
    }, o.prototype._resetSpellEffectLayer = function(e) {
        this.background.removeGridLayer(this._spellEffectLayer), this._spellEffectLayer = e ? this.background.addGridAnimation(e) : null
    }, o.prototype._resetWalkLayer = function(e) {
        this.background.removeGridLayer(this._walkLayer), this._walkLayer = e ? this.background.addGridAnimation(e) : null
    }, o.prototype._resetWalkAreaLayer = function(e) {
        this.background.removeGridLayer(this._walkAreaLayer), this._walkAreaLayer = e ? this.background.addGridAnimation(e) : null
    }, o.prototype._resetEnemyWalkAreaLayer = function(e) {
        this.background.removeGridLayer(this._enemyWalkAreaLayer), this._enemyWalkAreaLayer = e ? this.background.addGridAnimation(e) : null
    }, o.prototype.clearUserMovementZone = o.prototype._resetWalkAreaLayer, o.prototype.setCurrentSpell = function(e) {
        f = e
    }, o.prototype.isOutsight = function(e) {
        return !b || !b.hasOwnProperty(e) || b[e].transformState === u.outSight || b[e].transformState === u.outSightEnemyTurn
    }, o.prototype.displaySpellRange = function() {
        if (this.mapRenderer.map && this.mapRenderer.map.cells && f && !this.actorManager.userActor.isDead) {
            this.clearUserMovementZone();
            for (var e = this.mapRenderer.map.cells, t = this.actorManager.userActor.cellId, i = a.getSpellRange(e, t, f), o = window.actorManager.getIndexedVisibleActors(), r = {}, c = {}, l = window.foreground.fightIsUserTurn ? u.outSight : u.outSightEnemyTurn, p = window.foreground.fightIsUserTurn ? u.inSight : u.inSightEnemyTurn, h = 0; h < i.length; h++) {
                var m = s.getCellIdFromMapPoint(i[h][0], i[h][1]);
                if (void 0 !== m && !r[m])
                    if (f.needFreeCell && o[m]) c[m] = i[h][2], r[m] = new d(m, i[h][2], l);
                    else {
                        var M = e[m].l || 0;
                        3 === (7 & M) && (r[m] = new d(m, i[h][2], p), c[m] = i[h][2])
                    }
            }
            f.castTestLos && n(e, r, t, o), b = r, this._resetSpellRangeLayer(r), this._spellEffectLayer && this._resetSpellEffectLayer(this._spellEffectLayer.cellInfos), this._walkLayer && (this._resetWalkLayer(), window.foreground.confirmBox.hide(), window.gui.damagePreview.cancel())
        }
    }, e.exports.getCell = n, o.prototype.displayEffectZone = function(e, t) {
        t = t || {};
        var i = window.gui.damagePreview;
        if (this.background.removeTargetHighlights(), t.showDamagePreview && i.cancel(), b && f) {
            if (!b.hasOwnProperty(e)) return void this._resetSpellEffectLayer();
            if (b[e].transformState === u.outSight || b[e].transformState === u.outSightEnemyTurn) return void this._resetSpellEffectLayer();
            if (this.mapRenderer.map && this.mapRenderer.map.cells) {
                var n = this.actorManager.userActor.cellId,
                    o = this.mapRenderer.map.cells,
                    a = window.gui.playerData.characters.getControlledCharacter(),
                    r = a.spellData.spells[f.spellId];
                if (r) {
                    for (var s = r.getSpellEffectZone(o, n, e), c = Object.keys(s), l = 0; l < c.length; l++) {
                        n = c[l];
                        var d = this.actorManager.getActorsOnCell(n);
                        if (d.length > 0) {
                            var p = d[0],
                                h = p.getTeamId();
                            0 === h ? this.background.addTargetHighLights(n, p._x, p._y, u.redTeamStart, u.redTeamEnd, !window.foreground.fightIsUserTurn) : this.background.addTargetHighLights(n, p._x, p._y, u.blueTeamStart, u.blueTeamEnd, !window.foreground.fightIsUserTurn)
                        }
                    }
                    t.showDamagePreview && i.preview(f.spellId, e), 0 === Object.keys(s)
                        .length && console.error(new Error("Effect zone is empty but should not. Target cell: " + e + " Actor cell " + n + " Spell id " + f.spellId)), this._resetSpellEffectLayer(s)
                }
            }
        }
    }, o.prototype._castSpell = function(e, t, i, n) {
        var o = this.mapRenderer.grid.getNearbyCellInZone(e, t, i, b);
        return null === o ? (window.foreground.deselectSpell(), window.gui.shortcutBar.deselectCurrentSlot(), void this.clearSpellDisplay()) : (this.displayEffectZone(o), window.gui.emit("checkServerLag", "fightAction", "start"), window.gui.fightManager.castSpell(f.spellId, o, n.characterId), f = null, this.clearSpellDisplay(), window.gui.shortcutBar.deselectCurrentSlot(), void window.gui.damagePreview.confirm())
    }, o.prototype._castSpellConfirm = function(e, t, i, n) {
        var o = window.gui,
            a = o.damagePreview,
            s = this.mapRenderer.grid.getNearbyCellInZone(e, t, i, b);
        if (null === s) return window.foreground.deselectSpell(), void o.shortcutBar.deselectCurrentSlot();
        this.displayEffectZone(s);
        var c = r(["spell", f.spellId, e, s]),
            l = this;
        window.foreground.confirmBox.open("spell", f, c, {
            startHidden: n.hideConfirmWindow,
            allowDoubleTap: h.confirmBoxAllowDoubleTap
        }, function(e) {
            return e ? (o.emit("checkServerLag", "fightAction", "start"), o.fightManager.castSpell(f.spellId, s, n.characterId), f = null, l.clearSpellDisplay(), o.shortcutBar.deselectCurrentSlot(), void a.confirm()) : (l.clearSpellDisplay(), void o.shortcutBar.deselectCurrentSlot())
        }, function() {
            l.isOutsight(s) ? a.cancel() : a.preview(f.spellId, s, {
                hasConfirmBox: !0
            })
        })
    }, o.prototype._castSpellImmediately = function(e) {
        if (b && f) {
            if (null === e) return window.foreground.deselectSpell(), void window.gui.shortcutBar.deselectCurrentSlot();
            window.gui.emit("checkServerLag", "fightAction", "start"), window.gui.fightManager.castSpell(f.spellId, e, window.gui.playerData.characters.controlledCharacterId), this.clearSpellDisplay(), f = null, window.gui.shortcutBar.deselectCurrentSlot(), window.gui.damagePreview.confirm()
        }
    }, o.prototype._castSpellImmediatelyConfirm = function(e) {
        var t = window.gui,
            i = t.damagePreview,
            n = window.foreground;
        if (b && f) {
            if (null === e) return n.deselectSpell(), void t.shortcutBar.deselectCurrentSlot();
            var o = r(["spell", f.spellId, e, e]),
                a = this;
            n.confirmBox.open("spell", f, o, {
                startHidden: !n.fightIsUserTurn
            }, function(n) {
                return n ? (t.emit("checkServerLag", "fightAction", "start"), t.fightManager.castSpell(f.spellId, e, t.playerData.characters.controlledCharacterId), f = null, a.clearSpellDisplay(), t.shortcutBar.deselectCurrentSlot(), void i.confirm()) : (a.clearSpellDisplay(), void t.shortcutBar.deselectCurrentSlot())
            }, function() {
                a.isOutsight(e) ? i.cancel() : i.preview(f.spellId, e, {
                    hasConfirmBox: !0
                })
            })
        }
    }, o.prototype.displayFightPositions = function(e) {
        for (var t = {}, i = 0, n = 0; n < e.positionsForChallengers.length; n++) {
            var o = e.positionsForChallengers[n];
            t[o] = new d(o, i, u.fullRed)
        }
        for (var a = 0; a < e.positionsForDefenders.length; a++) o = e.positionsForDefenders[a], t[o] = new d(o, i, u.fullBlue);
        this._resetFightPositionLayer(t)
    }, o.prototype.clearSpellDisplay = function() {
        this.background.removeTargetHighlights(), this._resetSpellEffectLayer(), this._resetSpellRangeLayer()
    }
}
