function(e, t, i) {
    function n(e, t) {
        return t.position - e.position
    }

    function o(e) {
        switch (e) {
            case 183:
            case 200:
            case 212:
            case 213:
                return !0;
            default:
                return !1
        }
    }

    function a(e) {
        return 84 === e && window.gui.playerData.hasRight(g.JUMP_HOUSE)
    }

    function r(e, t) {
        var i = {
                red: 1,
                green: 1,
                blue: 1
            },
            n = {
                red: 1.8,
                green: 1.8,
                blue: 1.8
            },
            o = new y(e.highlight, ["red", "green", "blue"]);
        e.tween = o, o.from(i);
        for (var a = 0; a < t; a++) o.to(n, 12), o.to(i, 12);
        o.start()
    }
    var s = i(13),
        c = i(1489),
        l = i(735),
        d = i(1498),
        u = i(17)
        .getText,
        p = i(17)
        .getTextFailover,
        h = i(1542),
        f = i(1549),
        b = i(1512),
        m = i(1541),
        M = i(1550)
        .trueName,
        g = i(466),
        _ = i(467)
        .displayNotification,
        A = i(443),
        O = i(430),
        v = O.Delay,
        y = O.Tween,
        z = O.easing,
        w = {
            red: 1.7,
            green: 1.7,
            blue: 1.7,
            alpha: 1
        },
        T = 10,
        C = 1,
        I = 2,
        S = {
            DEFAULT: 1,
            QUEUE: 2
        },
        E = s.ELEMENT_TYPE_ID,
        L = [{
            elementTypeId: E.ZAAP,
            skillId: 114
        }, {
            elementTypeId: E.UNSPECIFIED,
            skillId: 84
        }, {
            elementTypeId: E.UNSPECIFIED,
            skillId: 104
        }, {
            elementTypeId: E.PADDOCK,
            skillId: 175
        }],
        N = 3e3,
        R = {},
        q = null,
        x = 4,
        B = 4,
        D = new window.Uint8Array(x * B * 4),
        W = null;
    c.prototype._isElementClicked = function(e, t, i) {
        if (!e.isWithinBounds(t, i)) return !1;
        var n = x,
            o = B;
        t -= n / 2, i -= o / 2;
        var a = e.renderer;
        null === W && (W = a.startTextureUsage(n, o, 1, "clickedInteractive")), a.startTextureRendering(W, t, t + n, i, i + o, !0), e.render();
        var r = a.gl;
        r.readPixels(0, 0, n, o, r.RGBA, r.UNSIGNED_BYTE, D), a.stopTextureRendering();
        for (var s = D.length, c = 0, l = 3; l < s; l += 4) c += D[l];
        return c > 8
    }, c.prototype.resetLastTap = function() {
        this._lastTapId = null
    }, c.prototype._getAllInteractives = function() {
        for (var e = this.mapRenderer, t = e.identifiedElements, i = e.interactiveElements, o = this.actorManager.actors, a = [], r = Object.keys(i), s = 0; s < r.length; s += 1) {
            var c = r[s],
                l = i[c];
            if (0 !== l.enabledSkills.length || 0 !== l.disabledSkills.length) {
                var d = t[c];
                d && a.push(d)
            }
        }
        for (var u = Object.keys(o), p = 0; p < u.length; p += 1) a.push(o[u[p]]);
        return a.push(this.actorManager.userActor), a.sort(n), a
    }, c.prototype.setUnblockedNpcId = function(e) {
        this.unblockedNpcId = e
    }, c.prototype.resetUnblockedNpcId = function() {
        this.unblockedNpcId = -1
    }, c.prototype._tapInteractive = function(e, t) {
        var i, n = this.mapRenderer.interactiveElements,
            r = this._getAllInteractives(),
            s = window.gui.playerData.isAlive(),
            c = null,
            l = null,
            d = null;
        for (i = 0; i < r.length; i++) {
            var u = r[i];
            if (this._isElementClicked(u, e, t))
                if (u.actorId)
                    if (u.isNPC()) {
                        if (!c) {
                            var p = u.data.npcData && u.data.npcData.actions && u.data.npcData.actions.length > 0;
                            (s || p) && (c = u)
                        }
                    } else d || (d = u);
            else l || (l = u)
        }
        var h;
        if (h = this.actorManager.isTransparentModeOn ? d || l || c : c || l || d, null === h) return this._lastTapId = null, !1;
        var f = !1,
            b = h.id || h.actorId;
        if (this.unblockedNpcId === -1 || h === c && h.data.npcId === this.unblockedNpcId) {
            var m = M([h._position, window.gui.playerData.position.mapId, b]);
            m === this._lastTapId ? (f = !0, this._lastTapId = null) : this._lastTapId = m, this.clearHighlights(null, S.DEFAULT);
            var g = this.actionQueue.isActive();
            if (h.tap) return g || (f && h.actorId && "GameRolePlayGroupMonsterInformations" === h.data.type ? window.isoEngine.attackActor(h.actorId) : h.tap(e, t)), !0;
            var _ = n[h.id];
            if (!_) return !0;
            var O, v, y = window.isoEngine.mapRenderer,
                z = y.isFarmOnMap(),
                w = z ? y.getCurrentPaddockInstanceProperties()
                .farmId.toString() : "-1",
                T = z ? y.getCurrentPaddockInstanceProperties()
                .doorId : -1;
            if (1 === _.enabledSkills.length) {
                v = _.enabledSkills[0];
                var C = v.skillId;
                o(C) || a(C) || (O = v), z && T === _.elementId && v.parameters === w && y.getCurrentPaddockInstanceProperties()
                    .status === A.SOON_TO_BE_PUT_BACK_ON_SALE && (O = !1)
            }
            if (g && !O)
                for (i = 0; i < _.enabledSkills.length; i++)
                    if (v = _.enabledSkills[i], v.skillId === this.lastContextualMenuSkillId) {
                        O = v;
                        break
                    } if (O) {
                var I = this,
                    E = this.actionQueue.enqueueInteractive(_.elementId, _.elementTypeId, function() {
                        for (var e = !1, t = 0; t < _.enabledSkills.length; t++) {
                            var i = _.enabledSkills[t];
                            if (i.skillId === O.skillId) {
                                e = !0;
                                break
                            }
                        }
                        return e ? void I.queueUseInteractive(_.elementId, O.skillInstanceUid) : (I._removeUsedHighlight(_), I.actionQueue.dequeue(_.elementId))
                    });
                return E ? (h.tween && h.tween.stop(), this._addHighlight(h, S.QUEUE), !0) : (!g && 1 === _.enabledSkills.length && O && (this.instantUseInteractive(_.elementId, O.skillInstanceUid), this._addHighlight(h)), !0)
            }
            if (g) return !0;
            if (this._addHighlight(h), f)
                for (var N = 0; N < L.length; N++)
                    if (_.elementTypeId === L[N].elementTypeId)
                        for (var R = 0; R < _.enabledSkills.length; R++) {
                            var q = _.enabledSkills[R].parameters;
                            if (_.enabledSkills[R].skillId === L[N].skillId && (_._isDoor || !z || T === _.elementId || q === w)) return this.instantUseInteractive(_.elementId, _.enabledSkills[R].skillInstanceUid), !0
                        }
            var x = window.foreground.convertSceneToScreenCoordinate(e, t);
            if (_._isDoor) {
                var B = window.gui.playerData.position.getHousePropertiesByInteractiveId(_.elementId);
                B.length > 1 ? window.gui.openContextualMenu("houseInstances", {
                    housesData: B,
                    interactiveData: _
                }, {
                    x: x.x,
                    y: x.y
                }) : 1 === B.length && (_._selectedIntanceId = B[0].houseId, window.gui.openContextualMenu("interactive", _, {
                    x: x.x,
                    y: x.y
                }))
            } else window.gui.openContextualMenu("interactive", _, {
                x: x.x,
                y: x.y
            });
            return !0
        }
    }, c.prototype._addHighlight = function(e, t) {
        t = t || S.DEFAULT, e.highlight = w, this.highlightedElements[t] || (this.highlightedElements[t] = []), this.highlightedElements[t].push(e)
    }, c.prototype._removeUsedHighlight = function(e) {
        e.highlight = null
    }, c.prototype._clearHighlightType = function(e) {
        var t = this.highlightedElements[e];
        if (t) {
            for (var i = 0; i < t.length; i++)
                if (t[i].isInvisible) {
                    var n = t[i].isInvisibleInFight ? C : I;
                    t[i].setInvisibility(n, t[i].getTeamId())
                } else t[i].highlight = null;
            this.highlightedElements[e] = []
        }
    }, c.prototype.clearHighlights = function(e, t) {
        if (e) {
            var i = this,
                n = new v(e, function() {
                    i.clearHighlights(null, t)
                });
            return n.start()
        }
        if (t) this._clearHighlightType(t);
        else {
            for (var o in this.highlightedElements) this._clearHighlightType(o);
            this.highlightedElements = {}
        }
    }, c.prototype.queueUseInteractive = function(e, t) {
        this.clearHighlights(null, S.DEFAULT), this._useInteractive(e, t)
    }, c.prototype.instantUseInteractive = function(e, t) {
        this.clearHighlights(T), this._useInteractive(e, t)
    }, c.prototype.useInteractive = function(e, t) {
        this.clearHighlights(), this._useInteractive(e, t)
    }, c.prototype._useInteractive = function(e, t) {
        var i = this,
            n = this.mapRenderer.identifiedElements[e],
            o = n.position,
            a = this.actorManager.userActor,
            r = function() {
                var n = l.getOrientation(a.cellId, o, !1);
                a.setDisposition(null, n), _(e), i._interactiveUseTrackServerAnswer(e, t), window.dofus.sendMessage("InteractiveUseRequestMessage", {
                    elemId: e,
                    skillInstanceUid: t
                })
            };
        return l.areCellsNeighbours(a.cellId, o, {
            allowDiagonal: !0,
            useHeightCell: !0
        }) ? r() : void this._movePlayerOnMap(o, !0, r)
    }, c.prototype.onInteractiveUseErrorMessage = function(e) {
        var t = e.elemId;
        void 0 !== R[t] && (window.clearTimeout(R[t]), delete R[t]), this.actionQueue.dequeue(t);
        var i = this.mapRenderer.identifiedElements[t];
        i && this._removeUsedHighlight(i)
    }, c.prototype._interactiveUseTrackServerAnswer = function(e, t) {
        var i = this;
        R[e] = window.setTimeout(function() {
            i.actionQueue[e] ? (i._useInteractive(e, t), console.warn("Server has been too slow to answer to an interactiveUseRequest: we are not waiting for him")) : i.actionQueue.dequeue(e), delete R[e]
        }, N)
    }, c.prototype.isWaitingForInteractiveUseServerAnswer = function() {
        return Object.keys(R)
            .length > 0
    }, c.prototype.pendingInteractiveUseStart = function() {
        for (var e = 0; e < this.interactiveMessageStack.length; e++) this.interactiveUseStart(this.interactiveMessageStack[e]);
        this.interactiveMessageStack = []
    }, c.prototype.interactiveUseStart = function(e) {
        var t = this;
        if (this.isMapChanging) return void this.interactiveMessageStack.push(e);
        var i = e.entityId === window.gui.playerData.id,
            n = 0 !== e.duration;
        i && (void 0 !== R[e.elemId] && (window.clearTimeout(R[e.elemId]), delete R[e.elemId]), null !== q && (console.error("interactiveUseStart: InteractiveUseStart received but was waiting an InteractiveUseEnded"), this._userStopUsingInteractive()));
        var o = this.actorManager.getActor(e.entityId);
        if (!o) return i ? console.error("interactiveUseStart: user actor is not ready") : console.warn("interactiveUseStart: no actor with id " + e.entityId);
        var a = o.cellId,
            r = this.mapRenderer.identifiedElements[e.elemId];
        if (!r) return i ? console.error("interactiveUseStart: no interactive with id " + e.elemId) : console.warn("interactiveUseStart: no interactive with id " + e.elemId);
        this._removeUsedHighlight(r);
        var s = r.position,
            c = e._useAnimation;
        if (!c || "AnimStatique" === c) return void(i && t.actionQueue.dequeue(e.elemId));
        var u = l.getOrientation(a, s, !1),
            p = null;
        if (i || l.areCellsNeighbours(a, s, {
                allowDiagonal: !0,
                useHeightCell: !0
            })) i || (p = a);
        else {
            var h = d.getPath(a, s, this.actorManager.getOccupiedCells(), !0, !0);
            p = h && h[h.length - 1]
        }
        o.setDisposition(p, u, function() {
            return o.loadAndPlayAnimation({
                base: c
            }, {
                loop: n
            }), n ? void(i ? (o.isLocked = !0, q = window.setTimeout(function() {
                t._userStopUsingInteractive(e.elemId)
            }, 100 * e.duration * 2)) : window.setTimeout(function() {
                o.staticAnim()
            }, 100 * e.duration)) : void(i && t.actionQueue.dequeue(e.elemId))
        })
    }, c.prototype.interactiveUseEndedMessage = function(e) {
        this._userStopUsingInteractive(e.elemId)
    }, c.prototype._endAnimation = function() {
        null !== q && (clearTimeout(q), q = null);
        var e = this.actorManager.userActor;
        e.isLocked = !1, e.staticAnim()
    }, c.prototype.abortAllInteractives = function() {
        this._endAnimation(), this.actionQueue.clear()
    }, c.prototype._userStopUsingInteractive = function(e) {
        this._endAnimation(), this.actionQueue.dequeue(e)
    }, c.prototype.updateInteractiveElements = function(e) {
        this.mapRenderer.updateInteractiveElements(e)
    }, c.prototype.updateObstacles = function(e) {
        this.mapRenderer.updateObstacles(e)
    }, c.prototype.updateStatedElements = function(e) {
        this.mapRenderer.updateStatedElements(e)
    }, c.prototype.addObjects = function(e) {
        this.mapRenderer.addObjects(e)
    }, c.prototype.removeObjects = function(e) {
        this.mapRenderer.removeObjects(e)
    }, c.prototype._removeArrowsNowAndLater = function(e) {
        this.removeArrows(), this.arrowTimeout && (window.clearTimeout(this.arrowTimeout), this.arrowTimeout = null);
        var t = this;
        this.arrowTimeout = window.setTimeout(function() {
            t.arrowTimeout = null, t.removeArrows();
        }, e)
    }, c.prototype.addArrowOnCell = function(e, t, i, n, o) {
        this.mapRenderer.addArrowOnCell(e, t, i, n, o)
    }, c.prototype.addArrowOnGraphic = function(e, t, i, n, o) {
        this.mapRenderer.addArrowOnGraphic(e, t, i, n, o)
    }, c.prototype.addArrowsSequence = function(e, t, i, n) {
        this.mapRenderer.addArrowsSequence(e, t, i, n)
    };
    var P = {
            upLeft: {
                npc: [-.3, -3],
                monster: [-.4, -2]
            },
            downLeft: {
                npc: [-.5, -.3],
                monster: [-.5, .5]
            }
        },
        k = 60;
    c.prototype._addArrowOnActor = function(e, t, i) {
        var n = t ? "monster" : "npc",
            o = "upLeft",
            a = P[o][n],
            r = a[0],
            c = a[1];
        e.y + c < k && (o = "downLeft", a = P[o][n], r = a[0], c = a[1]), i && this._removeArrowsNowAndLater(i), this.mapRenderer.addArrowOnCell(e.cellId, r * s.CELL_WIDTH, c * s.CELL_HEIGHT, o)
    }, c.prototype.addArrowOnNpc = function(e, t) {
        var i = this.actorManager.getActorFromNpcId(e);
        return i ? void this._addArrowOnActor(i, !1, t) : console.warn("NPC not found with ID: " + e)
    }, c.prototype.addArrowOnMonster = function(e, t) {
        var i = this.actorManager.getActorFromMonsterId(e);
        return i ? void this._addArrowOnActor(i, !0, t) : console.warn("Monster not found with ID: " + e)
    }, c.prototype.addArrowOnInteractiveElement = function(e, t, i, n) {
        var o = this.mapRenderer.interactiveElements[e],
            a = this.mapRenderer.identifiedElements[e];
        if (!a || !o) return console.warn("Element not found with ID: " + e);
        var r = a.bbox,
            s = (r[0] - r[1]) / 2,
            c = (r[2] - r[3]) / 2,
            l = "up",
            d = "Left";
        r[2] < k && (c = -c, l = "down"), r[0] < k && (s = -s, d = "Right"), t && this._removeArrowsNowAndLater(t), this.addArrowOnGraphic(a, s + i, c + n, l + d)
    }, c.prototype.removeArrows = function() {
        this.mapRenderer.removeArrows()
    }, c.prototype.highlightAllInteractives = function(e) {
        e = e || 1;
        var t = this.mapRenderer.interactiveElements,
            i = this.mapRenderer.identifiedElements,
            n = window.gui.fightManager.isInFight();
        for (var o in t) {
            var a = t[o],
                s = i[o],
                c = s instanceof b;
            s && (n && !c || 0 === a.enabledSkills.length && 0 === a.disabledSkills.length || this.actionQueue.isActionQueued(o) || r(s, e))
        }
        this.emit("highlightElements")
    }, c.prototype.highlightInteractivesWithDifferentType = function() {
        var e, t, i = this.mapRenderer.interactiveElements,
            n = this.mapRenderer.identifiedElements,
            o = {};
        for (e in i) {
            var a = i[e],
                s = n[e];
            s && 0 !== a.enabledSkills.length && (this.actionQueue.isActionQueued(e) || (t = a.elementTypeId, o[t] || (o[t] = []), o[t].push(s)))
        }
        var c = [];
        for (t in o)
            if (~~t === E.UNSPECIFIED) c = c.concat(o[t]);
            else {
                var l = o[t].length,
                    d = ~~(Math.random() * l);
                c.push(o[t][d])
            } for (var u = 0; u < c.length; u++) r(c[u], 5)
    }, c.prototype.displayNumericalValue = function(e) {
        var t = this.actorManager.getActor(e.entityId);
        if (!t) return console.error("No entity with id", e.entityId);
        var i = t.x,
            n = t.y - 80;
        m.createPointVariationLabel({
            x: i,
            y: n,
            pointVariation: "+" + e.value,
            color: [.2, -.1, -.2, 0],
            maxRotation: .4
        }), e.valueOfBonus && m.createPointVariationLabel({
            x: i,
            y: n,
            pointVariation: "+" + e.valueOfBonus,
            color: [.7, 0, -.3, 0],
            maxRotation: .4,
            targetId: e.entityId
        })
    };
    var F = 0;
    c.prototype.displayTextBanner = function(e) {
        if (this.bitmapFonts && !window.gui.fightManager.isInactive) {
            var t = u(e),
                i = p(e),
                n = this.mapScene,
                o = n.w / 2,
                a = n.h / 2,
                r = this.bitmapFonts.characters,
                c = new h({
                    x: o,
                    y: a,
                    scene: n,
                    text: t,
                    fallbackText: i,
                    position: 2 * F + 1,
                    layer: s.MAP_LAYER_POINT_LABELS,
                    bitmapFont: r,
                    color: [.2, .5, -.2, 0],
                    isHudElement: !0
                }),
                l = r.dimensions.bann,
                d = c.textWidth,
                b = c.textHeight,
                m = l.h,
                M = l.w,
                g = 2,
                _ = Math.floor(M / 2 - g),
                A = l.x,
                O = l.y,
                v = new f({
                    x: o,
                    y: a - b / 2,
                    scene: n,
                    position: 2 * F,
                    layer: s.MAP_LAYER_POINT_LABELS,
                    texture: r.texture,
                    controlPoints: [{
                        x: -d / 2 - _,
                        u: A,
                        y: 0,
                        v: O
                    }, {
                        x: -d / 2,
                        u: A + _,
                        y: 0,
                        v: O
                    }, {
                        x: d / 2,
                        u: A + _ + g,
                        y: m,
                        v: O + m
                    }, {
                        x: d / 2 + _,
                        u: A + M,
                        y: m,
                        v: O + m
                    }],
                    isHudElement: !0
                }),
                w = new y(c, ["y", "alpha"])
                .from({
                    y: a - 30,
                    alpha: 0
                })
                .to({
                    y: a - 30,
                    alpha: 0
                }, 4)
                .to({
                    y: a,
                    alpha: 1
                }, 8, z.backOut, 2)
                .to({
                    y: a,
                    alpha: 1
                }, 17)
                .to({
                    y: a - 30,
                    alpha: 0
                }, 8, z.backIn, 2)
                .onFinish(function() {
                    c.remove()
                })
                .start(),
                T = new y(v, ["scaleX", "alpha"])
                .from({
                    scaleX: .7,
                    alpha: 0
                })
                .to({
                    scaleX: 1,
                    alpha: 1
                }, 8, z.backOut, 2)
                .to({
                    scaleX: 1,
                    alpha: 1
                }, 24)
                .to({
                    scaleX: .7,
                    alpha: 0
                }, 8, z.backIn, 2)
                .onFinish(function() {
                    v.remove()
                })
                .start();
            F += 1, null !== this._currentBannerTweens.backTween && (this._currentBannerTweens.backTween.starting || this._currentBannerTweens.backTween.playing) && (this._currentBannerTweens.backTween.reset()
                .to({
                    scaleX: .7,
                    alpha: 0
                }, 8, z.polyOut, 2)
                .start(), this._currentBannerTweens.textTween.reset()
                .to({
                    y: a - 30,
                    alpha: 0
                }, 8, z.polyOut, 2)
                .start()), this._currentBannerTweens.backTween = T, this._currentBannerTweens.textTween = w
        }
    }, c.prototype.highlightActorOnAction = function(e, t) {
        var i = this.actorManager.getActor(e);
        return i ? (this._addHighlight(i), void this.clearHighlights(t || T)) : console.warn("Actor with id " + e + " to highlight not found.")
    }, c.prototype.interactiveDisconnect = function() {
        for (var e = Object.keys(R), t = 0; t < e.length; t++) window.clearTimeout(R[e[t]]), delete R[e[t]];
        this.actionQueue.clear()
    }
}
