function(e, t, i) {
    function n(e, t, i, n, o, a) {
        this.c = e, this.x = t, this.y = i, this.d = n, this.a = o, this.m = a
    }
    var o = i(1514),
        a = i(13),
        r = i(913),
        s = i(103),
        c = i(1516),
        l = a.TIME_UNITS_PER_SECOND,
        d = {
            mounted: {
                linear: 135,
                horizontal: 200,
                vertical: 120,
                symbolId: "AnimCourse"
            },
            parable: {
                linear: 400,
                horizontal: 500,
                vertical: 450,
                symbolId: "FX"
            },
            running: {
                linear: 170,
                horizontal: 255,
                vertical: 150,
                symbolId: "AnimCourse"
            },
            walking: {
                linear: 480,
                horizontal: 510,
                vertical: 425,
                symbolId: "AnimMarche"
            },
            slide: {
                linear: 57,
                horizontal: 85,
                vertical: 50,
                symbolId: "AnimStatique"
            }
        };
    o.prototype.setCellPosition = function(e) {
        return this.isInvisibleInFight() ? console.warn("We can not change the position of an invisible actor in a fight") : (this.actorManager.removeActorOccupation(this), this.cellId = e, this.actorManager.addActorOccupation(this), void(this.carriedActor && this.carriedActor.setCellPosition(e)))
    }, o.prototype.setOnScreenPosition = function(e) {
        var t = this.actorManager.isoEngine,
            i = t.mapRenderer.map,
            n = r.cellCoord[e],
            o = 0;
        i && (s.isRoleplayMode ? o = i.cells[e].f || 0 : this._positionCircle()), this.position = e, this.x = n.x, this.y = n.y - o, this._positionIcons()
    }, o.prototype.setDisposition = function(e, t, i) {
        function n() {
            return (o.position !== e || o.direction !== t || window.gui.fightManager.isInFight()) && (o.emoteAnimated = !1), !e && 0 !== e || e === -1 || (o.setOnScreenPosition(e), o.setCellPosition(e)), (t || 0 === t) && (o.direction = t), o.animated || o.emoteAnimated || (o.staticAnim(), a && !e && (o.emoteAnimated = !0)), i && i()
        }
        var o = this,
            a = this.emoteAnimated;
        return i && this.moving ? this.cancelMovement(n) : (this.moving && this.cancelMovement(), void n())
    }, o.prototype.noMovement = function(e) {
        if (this.moving) return this.pathTween.removeOnFinish(), this.pathTween.stop(), this.moving = !1, this.isLocked && (this.isLocked = !1), this.step = 0, this.path = [], e && e()
    }, o.prototype.cancelMovement = function(e) {
        var t = this;
        this.pathTween.removeOnFinish(), this.pathTween.stop();
        var i = ~~this.step,
            n = i + 1,
            o = this.path[i].m * (1 - this.step + i),
            a = this.path[n] && this.path[n].c;
        a || console.error(new Error("Cannot get the position for lastStep: " + n + " and path len: " + this.path.length)), this.pathTween.reset()
            .from({
                step: this.step
            })
            .to({
                step: n
            }, o), this.pathTween.start(!1), this.pathTween.onceFinish(function() {
                if (t.moving = !1, t.step = 0, t.path = [], a && (t.setCellPosition(a), t.actorId === window.gui.playerData.id && window.dofus.sendMessage("GameMapMovementCancelMessage", {
                        cellId: a
                    }), t.moving || t.setDisposition(a)), e) return e()
            })
    }, o.prototype.switchPath = function(e, t) {
        var i = this;
        this.pathTween.removeOnFinish(), this.pathTween.stop();
        var n = ~~this.step,
            o = n + 1,
            a = this.path[n].m * (1 - (this.step - n));
        this.pathTween.reset()
            .from({
                step: this.step
            })
            .to({
                step: o
            }, a), this.pathTween.start(!1), this.pathTween.onceFinish(function() {
                return i.moving = !1, i.step = 0, i.path = [], 1 === e.length ? (i.setDisposition(e[0]), t()) : (i.setPath(e, {
                    cb: t
                }), void i.setCellPosition(e[e.length - 1]))
            })
    }, o.prototype.isPathMatchingServerPath = function(e, t) {
        var i = e[e.length - 1],
            n = this.path;
        if (n[n.length - 1].c === i) return !0;
        var o;
        for (o = n.length - 2; o >= 0 && n[o].c !== i; o--);
        var a = ~~this.step;
        if (a >= o) return !1;
        for (var r = n[a + 1].c, s = e.length - 1; s >= 0 && (t.unshift(e[s]), e[s] !== r); s--);
        return !1
    }, o.prototype.refreshAnimation = function(e) {
        if (this.moving === !0) {
            var t = ~~this._step,
                i = this._step - t,
                n = this.path[t];
            if (n) {
                var o = this.path[t + 1] || this.path[t];
                this._x = n.x + (o.x - n.x) * i, this._y = n.y + (o.y - n.y) * i, i > .5 && this._position !== o.c && (this.position = o.c), this.animSymbol.id === n.a.id && this.direction === n.d || (this.animSymbol = n.a, this.direction = n.d, this.animManager.assignSymbol(this.animSymbol, !0))
            }
        }
        this._refreshAnimation(e), this._positionIcons(), this._positionCircle()
    }, o.prototype._startPath = function(e) {
        var t = this,
            i = this.path,
            n = i[0].m;
        this.step = 0, this.pathTween.reset()
            .from({
                step: 0
            })
            .to({
                step: 1
            }, n);
        for (var o = 1, a = this.path.length - 1; o < a; o++) n = i[o].m, this.pathTween.to({
            step: o + 1
        }, n);
        this.animManager.isTemporary || (this.animSymbol = i[0].a, this.animManager.assignSymbol(this.animSymbol, !0)), this.moving ? console.warn('[Actor._startPath] error: actor "' + this.actorId + '" is already moving.') : (this.pathTween.start(!1), this.pathTween.onceFinish(function() {
            t.moving = !1, s.isRoleplayMode && c.hasFullNicknameLabelData(t) && t.nicknameLabel && t._hadFullNicknameLabel && "name" === t.nicknameLabel.getType() && t.nicknameLabel.set(t, "full");
            var i = t.path[t.path.length - 1];
            if (i) t.animSymbol = i.a, t._x = i.x, t._y = i.y, t.animManager.assignSymbol(t.animSymbol, !0);
            else {
                t.animManager.assignSymbol({
                    id: "AnimStatique_1",
                    base: "AnimStatique",
                    direction: 1
                }, !0);
                var n = "Cannot find anim for the last step, length " + t.path.length + " path ";
                n += JSON.stringify(t.path), console.error(new Error(n))
            }
            return e && e()
        })), this.moving = !0, this.nicknameLabel && "full" === this.nicknameLabel.getType() && this.nicknameLabel.set(this, "name")
    }, o.prototype.walkToSceneCoordinate = function(e, t, i, o, a) {
        var r = this.getAnimSymbol("AnimMarche", i),
            s = this.getAnimSymbol("AnimStatique", i);
        this.path = [new n(this.cellId, this._x, this._y, i, r, o), new n(this.cellId, e, t, i, s, 0)], this._startPath(a)
    }, o.prototype.setPath = function(e, t) {
        var i = t && t.cb,
            o = this.actorManager.isoEngine;
        if (!o.mapRenderer.isReady) return console.warn("setPath: renderer was not ready"), i();
        if (e.length <= 1) return i && i();
        var a = t && t.slide,
            c = t && t.forceWalk;
        this.path = [], this.step = 0;
        var u, p, h, f;
        f = c ? d.walking : a ? d.slide : this.isRiding ? d.mounted : e.length > 3 && !c ? d.running : d.walking;
        var b, m = (1 + this.speedAdjust / 10 || .001) * l,
            M = null;
        if (o.mapRenderer.map) M = o.mapRenderer.map.cells;
        else {
            var g = "actorId: " + this.actorId;
            console.error(new Error("Actor#setPath: map is null, cells are unknown " + g))
        }
        for (var _ = 0; _ < e.length; _++) {
            var A = e[_],
                O = 0;
            s.isFightMode ? O = 0 : M && M[A] && M[A].f && (O = M[A].f);
            var v, y = r.cellCoord[A];
            0 === _ ? b = 1 : y.y === h ? (v = f.horizontal, b = y.x > p ? 0 : 4) : y.x === p ? (v = f.vertical, b = y.y > h ? 2 : 6) : (v = f.linear, b = y.x > p ? y.y > h ? 1 : 7 : y.y > h ? 3 : 5), v /= m, a && (b = this.direction);
            var z = this.getAnimSymbol(f.symbolId, b);
            _ > 0 && (u.d = b, u.a = z, u.m = v), this.path.push(new n(A, y.x, y.y - O, b, z, v)), u = this.path[this.path.length - 1], p = y.x, h = y.y
        }
        var w = this.animManager,
            T = w.isTemporary ? {} : w.template.exposedSymbols,
            C = this.getAnimSymbol("AnimStatique", b),
            I = this.getAnimSymbol("AnimStatique_to_" + this.path[0].a.base, this.path[0].a.direction),
            S = this.getAnimSymbol(f.symbolId + "_to_" + C.base, b);
        this.emoteAnimated = !1;
        var E, L;
        T[I.id] && (E = this.path[0], L = w.getSymbolDuration(I.id), this.path.unshift(new n(E.c, E.x, E.y, E.d, I, L))), T[S.id] && (E = this.path[this.path.length - 1], L = w.getSymbolDuration(S.id), E.a = S, E.m = L, this.path.push(new n(E.c, E.x, E.y, E.d, C, E.m))), this.path[this.path.length - 1].a = C, this._startPath(i)
    }, o.prototype.abortMovement = function() {
        this.moving && (this.pathTween.stop(), this.pathTween.removeOnFinish(), this.moving = !1)
    }
}
