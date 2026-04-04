function(e, t, i) {
    var n = i(38),
        o = i(417),
        a = i(54)
        .dimensions,
        r = i(67),
        s = r.getElementPositionAt,
        c = i(23),
        l = c.position,
        d = c.getPosition,
        u = i(65)
        .requestInteractionHandle,
        p = i(429),
        h = i(88),
        f = i(22),
        b = i(430)
        .Tween,
        m = i(433),
        M = i(441),
        g = i(72),
        _ = i(17)
        .getText,
        A = i(55),
        O = i(129),
        v = i(34)
        .logger,
        y = i(443),
        z = 10;
    o.prototype._setupTouchInteraction = function() {
        function e(e) {
            if (l.isVisible()) {
                var t = s(l, e.x, e.y);
                l.setStyle("webkitTransform", "translate3d(" + t.x + "px, " + t.y + "px, 0)")
            }
        }

        function t(t) {
            var i = d(t, {
                useScrollValue: !0
            });
            if (e(i), Math.abs(o - i.x) > 10 || Math.abs(a - i.y) > 10) {
                if (!u("TOUCH", f)) return r();
                o = i.x, a = i.y;
                var n = c.convertScreenToCanvasCoordinate(o, a);
                p.touchMove(n.x, n.y, this.tapOptions)
            }
        }
        var i, n, o, a, r, c = this,
            l = this.infoBox,
            p = window.isoEngine,
            h = window.gui.fightManager,
            f = {};
        r = function() {
            n = !0, p.touchCancel(), c.removeListener("dom.touchmove", t)
        }, this.on("dom.touchstart", function(e) {
            if (i) return r();
            var s = d(e, {
                useScrollValue: !0
            });
            this.locked || s.touchCount > 1 || (o = s.x, a = s.y, i = !0, n = !1, h.isInFight() && this.on("dom.touchmove", t))
        }), this.on("dom.touchend", function(e) {
            if (this.removeListener("dom.touchmove", t), this.locked || n || !i || !u("TOUCH", f)) return void(i = !1);
            i = !1;
            var o = d(e, {
                    useScrollValue: !0
                }),
                a = c.convertScreenToCanvasCoordinate(o.x, o.y);
            p.touchEnd(a.x, a.y, this.tapOptions)
        }), this._setupHighlightInteraction(), this._setupCameraInteraction()
    }, o.prototype.handleTapAfter = function(e) {
        var t = this;
        e.on("tap", function(e) {
            if (!window.gui.playerData.isInDialog) {
                var i = t.convertScreenToCanvasCoordinate(e.x, e.y);
                window.isoEngine.touchEnd(i.x, i.y, t.tapOptions)
            }
        })
    }, o.prototype._setupHighlightInteraction = function() {
        function e() {
            window.clearTimeout(N), N = window.setTimeout(function() {
                w.closeTooltip()
            }, 500)
        }

        function t(e) {
            for (var t, i, n, o, a = e.humanoidInfo.options || [], r = 0; r < a.length; r += 1) {
                var s = a[r];
                "HumanOptionGuild" === s._type ? n = s.guildInformations : "HumanOptionAlliance" === s._type ? o = s.allianceInformations : "HumanOptionOrnament" === s._type ? i = s.ornamentId : "HumanOptionTitle" === s._type && (t = s.titleId)
            }
            var c = e.alignmentInfos ? e.alignmentInfos.characterPower : 0,
                l = c - e.actorId,
                d = window.gui.playerData.getLevelDiff(l);
            b.setAttributes({
                charName: e.name,
                titleId: t,
                ornamentId: i,
                guild: n,
                alliance: o,
                gender: e.humanoidInfo.sex,
                alignmentInfos: e.alignmentInfos,
                levelDiff: d
            }), b.display()
        }

        function i() {
            v.getChild("ornamentTooltip") && v.removeChild("ornamentTooltip"), v.getChild("propertyInfoTooltip") && v.removeChild("propertyInfoTooltip"), v.clearContent()
        }

        function o(e) {
            window.clearTimeout(N);
            var t = e.bbox,
                i = R.convertSceneToCanvasCoordinate(t[0], t[2]),
                o = R.convertSceneToCanvasCoordinate(t[1], t[3]),
                a = (i.x + o.x) / 2,
                s = (i.y + o.y) / 2,
                c = o.x - i.x,
                l = o.y - i.y,
                d = n.isFeatureOn("singleTooltip") ? v : null,
                u = r.getCoordinatesFromNotch(a, s);
            w.openTooltipAt(u.x, u.y, c, l + 2 * z, d)
        }

        function a(t) {
            var i = I.getFighter(t.actorId);
            return i ? (window.isoEngine.displayEnemyMovementZone(i), window.foreground.isSpellSelected() && (A.allowDamagePreview || A.showMovementPreview) ? (window.foreground.confirmBox.close(), window.gui.damagePreview.preview(window.foreground.tapOptions.spellId, i.data.disposition.cellId), !1) : (v.appendChild(i.createStatsTooltipContent()), !0)) : (w.openState && (e(), window.isoEngine.removeEnemyMovementZone()), window.gui.damagePreview.cancel(), !1)
        }

        function s() {
            E && E.nicknameLabel && "name" === E.nicknameLabel.getType() && E.nicknameLabel.show()
        }

        function c(i, n) {
            if (s(), n.name && n.humanoidInfo) {
                if (E = i, i.nicknameLabel) {
                    if ("full" === i.nicknameLabel.getType()) return w.closeTooltip(), !1;
                    i.nicknameLabel.hide()
                }
                return t(n), w.hideBackgroundOnce(), !1
            }
            if (n.npcData && n.npcData.nameId) v.setText(n.npcData.nameId);
            else if ("GameRolePlayGroupMonsterInformations" === n.type) f._constructMonsterTooltip(v, n, i);
            else {
                if ("PaddockObject" !== n.type) return w.openState && e(), !1;
                var o = n.durability.durability + "/" + n.durability.durabilityMax;
                v.setText(n.name + " (" + o + ")")
            }
            return !0
        }

        function d(e, t) {
            var i = [];
            i.push(t.guildInfo);
            var n = t.status,
                o = t.price,
                a = t.maxOutdoorMount,
                r = t.maxItems,
                s = "",
                c = "";
            switch (n) {
                case y.PUBLIC:
                    s = _("ui.mount.paddockPublic"), c = _("ui.mount.maxMount", a);
                    break;
                case y.ABANDONED:
                    s = _("ui.mount.paddockAbandonned"), c = _("ui.mount.paddockSize", a, r), i = [];
                    break;
                case y.SOON_TO_BE_PUT_BACK_ON_SALE:
                    s = _("ui.social.paddockWithNoOwner"), c = _("ui.mount.paddockSize", a, r), i = [];
                    break;
                case y.OWNED:
                    s = o > 0 ? _("ui.mount.paddockToBuy", o) : _("ui.mount.paddockPrivate"), c = _("ui.mount.paddockSize", a, r);
                    break;
                case y.ON_SALE:
                    t.guildId ? s = _("ui.mount.paddockToBuy", o) : (s = _("ui.mount.paddockToBuy", o), t.locked && (s = _("ui.social.paddockWithNoOwner"))), c = _("ui.mount.paddockSize", a, r)
            }
            var l = {
                guild: i,
                line1: [s],
                line2: [c]
            };
            L = e, O.display(l)
        }

        function u(e) {
            for (var t = C.playerData, i = [], n = [], o = [], a = t.position.getHousePropertiesByInteractiveId(e.id), r = 0; r < a.length; r++) {
                var s = t.identification.uniqueNickname.toString();
                a[r].status === y.ABANDONED ? i.push(_("ui.common.houseWithNoOwner")) : a[r].ownerName === s ? i.push(_("ui.common.myHouse")) : i.push(_("ui.house.homeOf", a[r].displayedName || a[r].ownerName)), a[r].status === y.SOON_TO_BE_PUT_BACK_ON_SALE ? n.push(_("ui.common.forSaleSoon")) : a[r].status === y.ON_SALE ? n.push(_("ui.common.forSale")) : n.push(null), a[r].guildInfo && o.push(a[r].guildInfo)
            }
            var c = {
                guild: o,
                line1: i,
                line2: n
            };
            L = e, O.display(c)
        }

        function p() {
            var t = f.convertScreenToCanvasCoordinate(l.x, l.y),
                n = T.holdAndMove(t.x, t.y);
            if (!n) return S = null, void(w.openState && e());
            if (S !== n) {
                S = n, w.resetBackground();
                var r, s, p, h, b = T.mapRenderer.isPaddock(n),
                    m = T.mapRenderer.getCurrentPaddockInstanceProperties(),
                    M = n.data,
                    g = C.playerData.isFighting;
                if (b && m) return i(), void d(n, m);
                if (M) {
                    if (i(), g) {
                        if (!a(M)) return
                    } else if (!c(n, M)) return
                } else {
                    if (r = q.interactiveElements[n.id], !r || g) return void(w.openState && e());
                    if (i(), r._name && v.createChild("div", {
                            className: "name",
                            text: r._name
                        }), r._isDoor) {
                        var _ = window.gui.playerData.position.getHousePropertiesByInteractiveId(n.id);
                        return void(_ ? u(n, _.ownerName, _.houseId, _._displayedName) : u(n, _.ownerName, _.houseId))
                    }
                    var A;
                    for (p = 0, h = r.enabledSkills.length; p < h; p += 1) s = r.enabledSkills[p], A = v.createChild("div"), A.createChild("div", {
                        className: ["interaction", "cursor", "id" + s._cursor]
                    }), A.createChild("div", {
                        className: "interaction",
                        text: s._name
                    });
                    for (p = 0, h = r.disabledSkills.length; p < h; p += 1) s = r.disabledSkills[p], A = v.createChild("div"), A.createChild("div", {
                        className: ["interaction", "cursor", "id" + s._cursor, "disable"]
                    }), A.createChild("div", {
                        className: "interaction",
                        text: s._name
                    })
                }
                o(n)
            }
        }
        var f = this,
            b = new m({
                name: "ornamentTooltip"
            }, {
                scaleFactor: .8
            }),
            O = new M({
                name: "propertyInfoTooltip"
            }),
            v = new g("div", {
                className: "sceneTooltip"
            });
        h.addTooltip(this, new g("div"));
        var w, T = window.isoEngine,
            C = window.gui,
            I = C.fightManager;
        w = n.isFeatureOn("singleTooltip") ? C.tooltipBox : this.appendChild(new h({
            content: v
        }));
        var S, E, L, N, R = T.mapScene,
            q = T.mapRenderer;
        this.on("tooltipOn", function() {
            window.gui.tooltipBox.closeForRecomputing(), S = null, T.holdStart(), C.wBody.on("dom.touchmove", p), p()
        }), this.on("tooltipOut", function() {
            w.closeTooltip(), s(), C.wBody.removeListener("dom.touchmove", p), T.holdEnd()
        }), b.on("rendered", function() {
            E === S && (v.appendChild(b), o(E))
        }), O.on("rendered", function() {
            L === S && (v.appendChild(O), o(L))
        })
    }, o.prototype._toggleAreaSlider = function(e, t) {
        this.isSameSubArea(window.isoEngine.mapRenderer.map[e + "NeighbourId"], function(e, i) {
            e && (v.warning("No neighbour found while trying to display the borderArrow : " + e), i = !0), t.rootElement && t.toggleClassName("border", !i)
        })
    }, o.prototype._setupCameraInteraction = function() {
        function e(e) {
            e = n.convertScreenToCanvasCoordinate(e.x, e.y), q[C] = e[C] - S[C], q[I] = e[I], q[C] < L.min ? (q[C] = L.min, S[C] = e[C] - L.min) : q[C] > L.max && (q[C] = L.max, S[C] = e[C] - L.max), A.setStyle("webkitTransform", "translate3d(" + q.x + "px," + q.y + "px,0)")
        }

        function t(e) {
            if (N[I] = q[I], w = r.getChangeMapCellAt(N.x, N.y, v), A.arrow.setStyle("opacity", w !== -1 ? 1 : 0), e[I] < y) T = Math.abs(y - e[I]), B[I] = c.min[I];
            else {
                if (!(e[I] > z)) return;
                T = Math.abs(z - e[I]), B[I] = c.max[I]
            }
            if (B[I] !== c[I]) {
                x.x = c.x, x.y = c.y, c.follow(x);
                var t = 0,
                    i = W,
                    n = x[I],
                    o = B[I];
                Math.abs(B[I] - x[I]) > t && (t = Math.abs(B[I] - x[I]), i = W * T);
                var a = D[I];
                a.playing || a.start(!1), "x" === I ? a.reset()
                    .from({
                        x: n
                    })
                    .to({
                        x: o
                    }, t / i) : a.reset()
                    .from({
                        y: n
                    })
                    .to({
                        y: o
                    }, t / i)
            }
        }
        p(this);
        var i, n = this,
            o = window.gui,
            r = window.isoEngine,
            s = r.mapScene,
            c = s.camera,
            l = o.fightManager,
            d = o.scenarioManager,
            u = 0,
            h = 0,
            m = this.createChild("div", {
                className: ["slide", "left"]
            });
        m.arrow = m.createChild("div", {
            className: "arrow"
        });
        var M = this.createChild("div", {
            className: ["slide", "right"]
        });
        M.arrow = M.createChild("div", {
            className: "arrow"
        });
        var g = this.createChild("div", {
            className: ["slide", "top"]
        });
        g.arrow = g.createChild("div", {
            className: "arrow"
        });
        var _ = this.createChild("div", {
            className: ["slide", "bottom"]
        });
        _.arrow = _.createChild("div", {
            className: "arrow"
        });
        var A, v, y, z, w, T, C, I, S = {
                x: 0,
                y: 0
            },
            E = {
                x: 80,
                y: 60
            },
            L = {
                max: 0,
                min: 0
            },
            N = {},
            R = 5,
            q = {
                x: 0,
                y: 0
            },
            x = {},
            B = {
                x: 0,
                y: 0
            },
            D = {
                x: new b(x, ["x"]),
                y: new b(x, ["y"])
            };
        this.on("transformStart", function(e, t) {
            if (n.locked) return n.cancelTransform();
            if (A = null, l.isInUndefinedState() && 1 === e.touchCount) {
                var o = e.x - t[0].x,
                    r = e.y - t[0].y;
                S = e;
                var s, p = c.zoom === c.minZoom || c.zoom === c.maxZoom;
                if (Math.abs(o) > Math.abs(r)) {
                    if (s = p || Math.abs(r) < R, Math.abs(c.x - c.min.x) < 1 && o > 0 && s) {
                        if (d.isBehaviourEnabled(O.DISABLE_LEFT_SLIDE_CHANGEMAP)) return;
                        return A = m, v = "left", N.x = 0, L.min = 0, L.max = E.x, y = a.mapHeight / 3, z = 2 * y, C = "x", I = "y", void n._toggleAreaSlider(v, A)
                    }
                    if (Math.abs(c.x - c.max.x) < 1 && o < 0 && s) {
                        if (d.isBehaviourEnabled(O.DISABLE_RIGHT_SLIDE_CHANGEMAP)) return;
                        return A = M, v = "right", N.x = a.mapWidth, L.min = -E.x, L.max = 0, y = a.mapHeight / 3, z = 2 * y, C = "x", I = "y", void n._toggleAreaSlider(v, A)
                    }
                } else {
                    if (s = p || Math.abs(o) < R, Math.abs(c.y - c.min.y) < 1 && r > 0 && s) {
                        if (d.isBehaviourEnabled(O.DISABLE_TOP_SLIDE_CHANGEMAP)) return;
                        return A = g, v = "top", N.y = 0, L.min = 0, L.max = E.y, y = a.mapWidth / 3, z = 2 * y, C = "y", I = "x", void n._toggleAreaSlider(v, A)
                    }
                    if (Math.abs(c.y - c.max.y) < 1 && r < 0 && s) {
                        if (d.isBehaviourEnabled(O.DISABLE_BOTTOM_SLIDE_CHANGEMAP)) return;
                        return A = _, v = "bottom", N.y = a.mapHeight, L.min = -E.y, L.max = 0, y = a.mapWidth / 3, z = 2 * y, C = "y", I = "x", void n._toggleAreaSlider(v, A)
                    }
                }
            }
            u = h = 0, this.setTranslationEnable(!0), i = Date.now()
        });
        var W = .5;
        this.on("transform", function(n, o, a, l, d, p) {
            return A ? (e(p), void t(p)) : (r.cancelCameraMovement(), i = Date.now(), c.zoom === c.minZoom && (a = l = 0), u = .5 * u + .5 * -a, h = .5 * h + .5 * -l, void s.move(n, o, -a, -l, d))
        }), this.on("transformEnd", function() {
            if (D.x.playing && D.x.stop(), D.y.playing && D.y.stop(), A) {
                var e;
                if (e = "x" === C ? "translate3d(0," + q.y + "px,0)" : "translate3d(" + q.x + "px,0,0)", f.tween(A, {
                        webkitTransform: e
                    }, {
                        time: 200,
                        easing: "ease-out"
                    }), A.arrow.setStyle("opacity", 0), A = null, this.locked) return;
                if (Math.abs(q[C]) === E[C] && w !== -1) {
                    var t = s.convertCanvasToSceneCoordinate(N.x, N.y);
                    r._tapRoleplay(t.x, t.y, r.mapRenderer.getCellId(t.x, t.y), {
                        canvasX: N.x,
                        canvasY: N.y,
                        changeMapRequest: v,
                        mode: "roleplay"
                    })
                }
            } else this.setTranslationEnable(!l.isInBattle()), Date.now() - i > 100 || c.addInertia(u, h, .8)
        });
        var P = window.isoEngine.actorManager.userActor;
        l.on("fightEnterBattle", function() {
            n.setTranslationEnable(!1), c.follow(P)
        }), l.on("fightEnterPreparation", function() {
            c.follow(P)
        }), o.on("GameMapMovementMessage", function(e) {
            l.isInFight() && e.actorId === P.actorId && c.follow(P)
        }), window.connectionManager.on("GameEntitiesDispositionMessage", function() {
            c.follow(P)
        }), l.on("fightEnd", function() {
            n.setTranslationEnable(!0)
        }), o.playerData.position.on("mapUpdate", function() {
            c.follow(P);
        })
    }, o.prototype.convertScreenToCanvasCoordinate = function(e, t) {
        return {
            x: e - (a.mapLeft + a.bodyPaddingLeft),
            y: t - a.mapTop
        }
    }, o.prototype.convertCanvasToScreenCoordinate = function(e, t) {
        return {
            x: e + (a.mapLeft + a.bodyPaddingLeft),
            y: t + a.mapTop
        }
    }, o.prototype.convertScreenToSceneCoordinate = function(e, t) {
        return e -= a.mapLeft + a.bodyPaddingLeft, t -= a.mapTop, window.isoEngine.mapScene.convertCanvasToSceneCoordinate(e, t)
    }, o.prototype.convertSceneToScreenCoordinate = function(e, t) {
        var i = window.isoEngine.mapScene.convertSceneToCanvasCoordinate(e, t);
        return {
            x: i.x + (a.mapLeft + a.bodyPaddingLeft),
            y: i.y + a.mapTop
        }
    }
}
