function(e, t, i) {
    var n = i(417),
        o = i(72),
        a = i(88),
        r = i(17)
        .getText,
        s = i(16),
        c = i(34)
        .logger,
        l = 10;
    n.prototype._setupMonsterGroupTooltips = function() {
        this._monsterTooltips = []
    }, n.prototype.showAllMonsterGroupAndNpcTooltips = function() {
        var e = this,
            t = window.actorManager.actors,
            i = window.isoEngine.mapScene;
        this.removeAllMonsterGroupAndNpcTooltips();
        var n = window.gui.playerData.quests.getNeededMonstersForQuest();
        for (var r in t)
            if (t.hasOwnProperty(r)) {
                var s = t[r] || {};
                if (Number.isInteger(s.actorId) && s.actorId < 0) {
                    var d = new o("div", {
                            className: "sceneTooltip"
                        }),
                        u = e.appendChild(new a({
                            content: d
                        }));
                    if (!s.data) return c.error(new Error("No data for " + s));
                    switch (s.data.type) {
                        case "GameRolePlayGroupMonsterInformations":
                            e._constructMonsterTooltip(d, s.data, s, n);
                            break;
                        case "GameRolePlayNpcInformations":
                        case "GameRolePlayNpcWithQuestInformations":
                            e._constructNpcTooltip(d, s.data);
                            break;
                        default:
                            continue
                    }
                    var p = s.bbox,
                        h = i.convertSceneToCanvasCoordinate(p[0], p[2]),
                        f = i.convertSceneToCanvasCoordinate(p[1], p[3]),
                        b = f.x - h.x,
                        m = f.y - h.y,
                        M = (h.x + f.x) / 2,
                        g = (h.y + f.y) / 2;
                    u.openTooltipAt(M, g, b, m + 2 * l, d), e._monsterTooltips.push(u)
                }
            } this._checkCollidingTooltip()
    }, n.prototype.removeAllMonsterGroupAndNpcTooltips = function() {
        var e = this;
        this._monsterTooltips.forEach(function(t) {
            e.removeChild(t)
        }), this._monsterTooltips = []
    }, n.prototype._checkCollidingTooltip = function() {
        var e = window.isoEngine.mapScene;
        if (this._monsterTooltips && !(this._monsterTooltips.length <= 0))
            for (var t = this._monsterTooltips.length, i = 0; i < t; i++) {
                for (var n = this._monsterTooltips[i], o = n.getComputedPosition(), a = o.TL.x, r = o.TL.y, s = o.BR.x - o.TL.x, c = o.BR.y - o.TL.y, l = {}, d = 0, u = null, p = 0; p < t; p++)
                    if (p !== i && d < t) {
                        var h = this._monsterTooltips[p].getComputedPosition(),
                            f = o.TL.x < h.BR.x,
                            b = o.BR.x > h.TL.x,
                            m = o.TL.y < h.BR.y,
                            M = o.BR.y > h.TL.y;
                        if (f && b && m && M) {
                            var g = [],
                                _ = null;
                            switch (l.left || "right" === u || g.push({
                                    name: "left",
                                    value: o.BR.x - h.TL.x
                                }), l.right || "left" === u || g.push({
                                    name: "right",
                                    value: h.BR.x - o.TL.x
                                }), l.bottom || "top" === u || g.push({
                                    name: "bottom",
                                    value: h.BR.y - o.TL.y
                                }), l.top || "bottom" === u || g.push({
                                    name: "top",
                                    value: o.BR.y - h.TL.y
                                }), g.length > 0 && (_ = g.reduce(function(e, t) {
                                    return e.value < t.value ? e : t
                                })), _.name) {
                                case "left":
                                    o.BR.x = h.TL.x, o.TL.x = o.BR.x - s;
                                    break;
                                case "right":
                                    o.TL.x = h.BR.x, o.BR.x = o.TL.x + s;
                                    break;
                                case "bottom":
                                    o.TL.y = h.BR.y, o.BR.y = o.TL.y + c;
                                    break;
                                case "top":
                                    o.BR.y = h.TL.y, o.TL.y = o.BR.y - c
                            }
                            var A = o.TL.x < 0 || o.BR.x > e.viewWidth,
                                O = o.TL.y < 0 || o.BR.y > e.viewHeight;
                            A || O ? (l[_.name] = !0, o.BR.x = a + s, o.BR.y = r + c, o.TL.x = a, o.TL.y = r, p--) : (u = _.name, a = o.TL.x, r = o.TL.y, l = {}, d++, p = -1)
                        }
                    } n.setStyles({
                    webkitTransform: "translate3d(" + o.TL.x + "px," + o.TL.y + "px,0)"
                })
            }
    }, n.prototype._constructMonsterTooltip = function(e, t, i, n) {
        var o = window.gui.playerData.partyData.getClassicalParty(),
            a = o ? o.getMemberCount() : 1,
            c = [],
            l = [t.staticInfos.mainCreatureLightInfos].concat(t.staticInfos.underlings),
            d = i.data.scaleLevel;
        if (d) {
            var u = window.gui.playerData.ToaData.getMonsterLevelScaled(d);
            for (g = 0; g < l.length; g += 1) l[g].staticInfos.level = u
        }
        var p, h = l.sort(function(e, t) {
                return t.staticInfos.level - e.staticInfos.level
            }),
            f = t.staticInfos.alternatives,
            b = [];
        if (f) {
            for (var m = 0; f[m] && f[m].playerCount <= a;) p = f[m], m += 1;
            for (g = 0; g < p.monsters.length; g++) b.push(p.monsters[g].creatureGenericId)
        }
        for (var M = 0, g = 0, _ = h.length; g < _; g += 1) {
            var A = h[g],
                O = A.staticInfos;
            if (A) {
                var v = O.xp,
                    y = O.level,
                    z = -1;
                if (b && (z = b.indexOf(A.creatureGenericId)), z !== -1) {
                    b.splice(z, 1);
                    var w = h[z];
                    w && (v = p.monsters[g].xp, y = p.monsters[g].level)
                }
                M += y, f && z === -1 || c.push({
                    id: A.creatureGenericId,
                    xp: v,
                    level: y
                })
            }
        }
        e.addClassNames("monsterInfoTooltip"), e.createChild("div", {
            className: "level",
            text: r("ui.common.rank", s.intToString(M))
        });
        var T = s.getXpPreview(c, window.gui.playerData, null),
            C = s.getXpPreview(c, window.gui.playerData, o),
            I = e.createChild("div", {
                className: "xpPreview"
            });
        I.createChild("div", {
            text: r("ui.tooltip.monsterXpAlone", s.intToString(T))
        }), a > 1 && I.createChild("div", {
            text: r("ui.tooltip.monsterXpParty", s.intToString(C))
        });
        for (var S = 0, E = h.length; S < E; S += 1)
            if (A = h[S].staticInfos) {
                var L = parseInt(h[S].creatureGenericId, 10),
                    N = [];
                n || (n = window.gui.playerData.quests.getNeededMonstersForQuest());
                var R = n.indexOf(L) !== -1,
                    q = A.isBoss,
                    x = A.isMiniBoss,
                    B = A.isWantedMonster,
                    D = q || x || B,
                    W = window.gui.playerData.quests.hasWantedMonsterQuest(L);
                R && !D ? N.push("monsterNeeded") : q ? N.push("boss") : W && B ? N.push("isWantedMonster") : x && N.push("isMiniBoss");
                var P = A.nameId + " (" + A.level + ")";
                if (q) {
                    var k = e.createChild("div", {
                        className: N,
                        text: P
                    });
                    k.createChild("div", {
                        className: "bossIcon"
                    }), k.createChild("div", {
                        className: "bossName",
                        text: P
                    })
                } else if (R) {
                    var F = e.createChild("div", {
                        className: N,
                        text: P
                    });
                    F.createChild("div", {
                        className: "monsterNeededIcon"
                    }), F.createChild("div", {
                        className: "monsterNeededName",
                        text: P
                    })
                } else e.createChild("div", {
                    text: P,
                    className: N
                })
            }
    }, n.prototype._constructNpcTooltip = function(e, t) {
        e.addClassNames("monsterInfoTooltip"), e.createChild("div", {
            text: t.npcData.nameId
        })
    }
}
