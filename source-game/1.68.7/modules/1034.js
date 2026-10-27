function(e, t, i) {
    function n(e) {
        return e.id && e.id === window.gui.playerData.id
    }

    function o() {
        var e = this.getMorePointsMsg,
            t = new m("div", {
                className: "getBonusPack"
            });
        t.createChild("div", {
            className: "msg",
            text: e
        });
        var i = t.appendChild(new w({
            className: ["getPackBtn", "greenButton"]
        }));
        i.createChild("div", {
            className: "text",
            text: O("tablet.shop.getBonusPack")
        }), i.createChild("div", {
            className: "icon"
        }), i.on("tap", function() {
            g.open("market", {
                tabId: "shop",
                tabParams: {
                    category: "bonuspack"
                }
            })
        }), f.showClosableNotification(t, this)
    }

    function a() {
        b.call(this, {
            className: "FightEndWindow",
            title: O("ui.fightend.gameResult"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 780,
                height: D + "%",
                minHeight: 361
            },
            helpTab: {
                part: 2,
                subPart: 20
            },
            resizeButton: r
        });
        var e = this;
        this.sendChatMessage = !0, this.isInLittleMode = !1, this.once("open", function() {
            function t(e, t) {
                var i = e.outcome,
                    n = [];
                if (i === _.RESULT_LOST || i === _.RESULT_VICTORY ? (n.push("outcome", "outcome" + i), t.addClassNames("title")) : "dead" === i && n.push(i), n.length) return new m("div", {
                    className: n
                })
            }

            function i(e) {
                var t = new m("div", {
                    className: "nameBox"
                });
                if (e.id > 0) {
                    var i,
                        o,
                        a = window.gui.databases.Heads,
                        r = L.getLookWithoutMount(e.entityLook);
                    if (!r) return;
                    var s = r.skins[1];
                    for (var c in a)
                        if (a.hasOwnProperty(c)) {
                            var l = a[c],
                                d = parseInt(l.skins, 10);
                            if (d === s) {
                                i = l.assetId.split("_")[0];
                                break
                            }
                        } var u = "gfx/heads/SmallHead_" + i + ".png";
                    o = t.createChild("div", {
                        className: "characterIcon"
                    }), E.preloadImage(u, function(e) {
                        o.rootElement && o.setStyle("backgroundImage", e)
                    })
                }
                var p = e.name;
                if (t.createChild("div", {
                        className: "nameText",
                        text: p
                    }), n(e)) t.createChild("div", {
                    className: "isMeArrow"
                });
                else if (e.beFriend) {
                    var h = t.appendChild(new w({
                        className: ["addFriend", "Button", "scaleOnPress"]
                    }));
                    h.on("tap", function() {
                        window.gui.openConfirmPopup({
                            title: O("ui.popup.warning"),
                            message: O("ui.social.confirmAddFriend", p),
                            cb: function(e) {
                                e && (window.dofus.sendMessage("FriendAddRequestMessage", {
                                    name: p
                                }), h.hide())
                            }
                        })
                    })
                }
                return t
            }

            function a(e) {
                var t = "";
                return e.showExperienceFightDelta && (t += O("ui.fightend.xp") + O("ui.common.colon") + v.intToString(e.experienceFightDelta), e.isIncarnationExperience && (t += " (" + O("ui.common.incarnation") + ")")), e.showExperienceForGuild && (t += "\n" + O("ui.common.guild") + O("ui.common.colon") + v.intToString(e.experienceForGuild)), e.showExperienceForMount && (t += "\n" + O("ui.common.ride") + O("ui.common.colon") + v.intToString(e.experienceForMount)), t
            }

            function r(e) {
                var t = n(e),
                    i = e.additional || [];
                if (i.length && i[0]) {
                    var r = i[0],
                        s = r.experienceFightDelta,
                        c = r.experienceLevelFloor,
                        d = r.experience - c,
                        p = r.experienceNextLevelFloor - c,
                        h = Math.floor(s * (u.BONUS_PACK_XP / 100)),
                        f = t && h > 1 && !W,
                        b = Math.max(0, (d - s) / p),
                        g = d / p,
                        _ = f ? (d + h) / p : 0,
                        A = new m("div", {
                            className: "xpBox"
                        }),
                        y = A.appendChild(new M({
                            valueClassNames: ["oldXp", "gainedXp", "extraXp"]
                        }));
                    t ? (y.setValues([b, g, _]), _ >= 1 && y.createChild("div", {
                        className: "reached100"
                    })) : y.setValues([b, g]);
                    var z = Math.floor(100 * g) + "% (" + v.intToString(d) + " / " + v.intToString(p) + ")";
                    l.addTooltip(y, z, {
                        longTapExplanation: !0
                    });
                    var w = A.createChild("div", {
                            className: "underGauge"
                        }),
                        T = w.createChild("div", {
                            className: "xpTextDiv"
                        });
                    if (T.createChild("div", {
                            className: "gainedXpText",
                            text: v.intToString(s)
                        }), f) {
                        var C = T.createChild("div", {
                                className: "extraXpDiv"
                            }),
                            I = v.intToString(h),
                            S = O("tablet.shop.xpBonusPoints", I);
                        C.createChild("div", {
                            className: "ifBonusPack",
                            text: " + " + I
                        }), C.createChild("div", {
                            className: "unlockIcon"
                        }), l.addTooltip(A, S), A.on("tap", o), A.getMorePointsMsg = S
                    } else l.addTooltip(T, a(r));
                    var E = r.rerollExperienceMul;
                    if (E > 1) {
                        w.addClassNames("withXpBonusIcon");
                        var L = w.createChild("div", {
                            className: ["xpBonusIcon", "bonus" + E]
                        });
                        l.addTooltip(L, O("ui.common.experiencePoint") + " x " + E + "\n\n" + O("ui.information.xpFamilyBonus"))
                    }
                    return A
                }
            }

            function d(e) {
                var t = e.drops || [];
                if (t.length) {
                    for (var i, n, o = [], a = {}, r = 0; r < t.length; r += 1) r % 2 === 0 && (i = t[r], n = t[r + 1] || 0, o.push(i), a[i] = n);
                    if (o.length) {
                        var s = new m("div", {
                            className: ["dropRow", "spinner"]
                        });
                        return A(o, function(t, i) {
                            if (t) return console.warn("Error while getting items", t);
                            if (s.rootElement) {
                                i.sort(function(e, t) {
                                    var i = e.averagePrice,
                                        n = t.averagePrice;
                                    return n - i
                                });
                                var n, o;
                                for (n = 0; n < i.length && (o = i[n], n !== B); n += 1) s.appendChild(new y({
                                    itemData: o,
                                    quantity: a[o.id],
                                    tooltipOptions: {
                                        openOnTap: !0
                                    }
                                }));
                                if (i.length > B) {
                                    var r = s.appendChild(new w({
                                            className: "moreButton"
                                        }, function() {
                                            g.getWindow("fightEndRewards")
                                                .updateContent(e.name, i, a), g.open("fightEndRewards")
                                        })),
                                        c = "";
                                    for (n = 0; n < i.length; n += 1) o = i[n], c += a[o.id] + " x " + o.nameId + "\n";
                                    l.addTooltip(r, c)
                                }
                                s.delClassNames("spinner")
                            }
                        }), s
                    }
                }
            }
            s = {
                0: O("ui.fightend.losers"),
                2: O("ui.fightend.winners"),
                5: O("ui.common.taxCollector")
            }, c = {
                0: O("ui.fightend.loss"),
                2: O("ui.fightend.victory")
            }, e.summary = e.windowBody.createChild("div", {
                className: "summary"
            });
            var p = e.summary.createChild("div", {
                    className: ["summaryBlock", "block1"]
                }),
                h = e.summary.createChild("div", {
                    className: ["summaryBlock", "block2"]
                }),
                f = e.summary.createChild("div", {
                    className: ["summaryBlock", "block3"]
                });
            this.blockScroller = f.appendChild(new C({
                className: ["challenges"]
            }, {
                isHorizontal: !0
            })), this.challengeBlock = this.blockScroller.content.createChild("div", {
                className: "challengeScroll"
            }), e.icon = p.createChild("div", {
                className: "icon"
            }), e.outcomeSummary = p.createChild("div", {
                className: "outcomeSummary"
            }), h.createChild("div", {
                className: "hourglass"
            });
            var b = h.createChild("div", {
                className: "labels"
            });
            b.createChild("div", {
                text: O("ui.fightend.duration") + O("ui.common.colon")
            });
            var T = h.createChild("div", {
                className: "values"
            });
            e.duration = T.createChild("div", {
                className: "duration"
            }), e.table = e.windowBody.appendChild(new z([{
                id: "icon",
                format: t
            }, {
                id: "name",
                header: O("ui.common.name"),
                format: i
            }, {
                id: "level",
                header: O("ui.common.short.level")
            }, {
                id: "xp",
                header: O("ui.fightend.xp"),
                format: r
            }, {
                id: "kamas",
                header: O("ui.common.kamas")
            }, {
                id: "drops",
                header: O("ui.fightend.objects"),
                format: d
            }], null, {
                clickable: !1
            }))
        }), this.on("open", function(t) {
            t.reopen || (e.sendChatMessage = !0, e._updateResultList(t.msg, t.fighters), e._refreshTutorialRestrictions(), e._resize())
        }), this.on("close", function() {
            f.closeNotifications(), e.sendChatMessage && (window.gui.chat.logMsg(O("ui.fightEndWindow.reopen"), N.CHANNEL_GLOBAL), e.sendChatMessage = !1), q.setValue("FightEndWindowPosition", !0), q.setValue("FightEndWindowPosition-top", e.position.y), q.setValue("FightEndWindowPosition-left", e.position.x)
        }), window.gui.scenarioManager.on("stepChanged", function() {
            e._refreshTutorialRestrictions()
        }), window.gui.on("GameFightJoinMessage", function() {
            e.close()
        }), window.gui.playerData.on("subscriptionChanged", function() {
            W = window.gui.playerData.isSubscriberAtMinLevel(T.NORMAL), e.toggleClassName("hasBonusPack", W)
        }), window.gui.on("connected", function() {
            W = window.gui.playerData.isSubscriberAtMinLevel(T.NORMAL), e.toggleClassName("hasBonusPack", W)
        })
    }

    function r() {
        var e = this.myWindow.isInLittleMode;
        this.myWindow.toggleClassName("little", !e), this.myWindow.resizeButton.toggleClassName("reduceButton", e), this.myWindow.resizeButton.toggleClassName("maximiseButton", !e), this.myWindow.displayHeaderAndSummary(e), this.myWindow.isInLittleMode ? this.myWindow.table.filter(function() {
            return !0
        }) : R.displayFullFightEndWindow ? this.myWindow.table.filter(function(e) {
            return e.id === window.gui.playerData.id
        }) : this.myWindow.table.filter(), this.myWindow.isInLittleMode = !e, this.myWindow.table.scroller.refresh()
    }
    i(1035);
    var s, c, l = i(88),
        d = i(91),
        u = i(13),
        p = i(54)
        .dimensions,
        h = i(56)
        .inherits,
        f = i(588),
        b = i(70),
        m = i(72),
        M = i(1036),
        g = i(52),
        _ = i(927),
        A = i(469)
        .getItems,
        O = i(17)
        .getText,
        v = i(16),
        y = i(871),
        z = i(765),
        w = i(86),
        T = i(509),
        C = i(453),
        I = i(572),
        S = i(129),
        E = i(12),
        L = i(691),
        N = i(504),
        R = i(55),
        q = i(60),
        x = {
            0: 29099,
            2: 29098
        },
        B = 5,
        D = 80,
        W = !1;
    h(a, b), e.exports = a, a.prototype._updateResultList = function(e, t) {
        this._reset();
        var i = v.durationToString(e.duration / 1e3),
            n = " (" + O("ui.fight.turnCount", window.gui.fightManager.getTurnCount() + 1) + ")";
        this.duration.setText(i + n);
        var o = window.gui.challengeIndicator.challengesData;
        for (var a in o) {
            o[a].success = Boolean(o[a].success);
            var r = new I;
            r.addChallengeData(o[a]), this.challengeBlock.appendChild(r)
        }
        this.blockScroller.refresh(), v.sortObjectInArray(e.results, "outcome", !0);
        for (var l, u, p, h, f, b = [], m = [], M = [], g = 0; g < e.results.length; g += 1) {
            l = e.results[g], u = l.id, f = !1, R.displayFullFightEndWindow || u === window.gui.playerData.id || (f = !0), h = l.outcome, M = e.entities;
            for (var A = 0; A < M.length; A++)
                if (M[A].id === u) {
                    p = M[A];
                    break
                } if (h !== _.RESULT_DEFENDER_GROUP) {
                if (u === window.gui.playerData.id) {
                    var y = h === _.RESULT_VICTORY;
                    this.icon.toggleClassName("outcome" + _.RESULT_VICTORY, y), this.icon.toggleClassName("outcome" + _.RESULT_LOST, !y), this.outcomeSummary.setText(c[h] || "");
                    var z = x[h];
                    if (z && d.playSound("ui", z), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.FIGHT_OUTCOME, {
                            isWin: h === _.RESULT_VICTORY
                        }), h === _.RESULT_VICTORY) {
                        var w = void 0 !== e.score && null !== e.score ? e.score : -1;
                        w > -1 && window.gui.openPopup({
                            title: O("ui.common.score"),
                            message: O("ui.toa.scoreInChat", w)
                        })
                    }
                }
                b[h] || (m.push({
                    outcome: h,
                    name: s[h],
                    hideRow: !R.displayFullFightEndWindow
                }), b[h] = !0);
                var T = t[u];
                if (T) {
                    var C = T.name,
                        S = window.gui.playerData.socialData.friendsList,
                        E = u > 0;
                    for (var L in S) {
                        var N = S[L].playerId;
                        if (N === u) {
                            E = !1;
                            break
                        }
                    }
                    m.push({
                        id: l.id,
                        outcome: l.alive ? "" : "dead",
                        name: C,
                        beFriend: E,
                        level: l.level || t[l.id].level,
                        additional: l.additional,
                        kamas: v.intToString(l.rewards.kamas),
                        drops: l.rewards.objects,
                        entityLook: p.look,
                        hideRow: f
                    })
                }
            } else console.warn("Hardcode loots not handled (skipped)", l.rewards)
        }
        this.table.addList(m)
    }, a.prototype.getOwnFirstDropDom = function() {
        if (!this.table || !this.table.rows) return null;
        for (var e = 0; e < this.table.rows.getChildren()
            .length; e++) {
            var t = this.table.rows.getChildren()[e];
            if (t.rowContent.id === window.gui.playerData.id) return t.drops.content.getChildren()[0];
        }
        return null
    }, a.prototype._refreshTutorialRestrictions = function() {
        var e = window.gui.scenarioManager.isBehaviourEnabled(S.DISABLE_FIGHT_END_PLUS_BUTTON),
            t = window.gui.scenarioManager.isBehaviourEnabled(S.DISABLE_CLOSE_BTN);
        this.toggleClassName("disablePlusButton", e), this.toggleClassName("disableCloseButton", t)
    }, a.prototype._resize = function() {
        var e = this.table,
            t = e.rows.rootElement.offsetHeight,
            i = e.header.rootElement.offsetHeight,
            n = 123,
            o = Math.round(p.windowFullScreenHeight * D / 100),
            a = t + i + n;
        a = a < o ? a : o, g.positionWindow(this.id, {
            left: "c",
            top: "c",
            width: this.position.width,
            height: a,
            minHeight: 361
        }), e.scroller.refresh();
        var r = window.device;
        r && "iOS" === r.platform && 0 === r.version.indexOf("10.") && (this.hide(), v.forceReflow(this), this.show()), this.applyDisplayMode()
    }, a.prototype._reset = function() {
        this.challengeBlock.clearContent(), this.table.clearContent()
    }, a.prototype.applyDisplayMode = function() {
        if (this.toggleClassName("little", !R.displayFullFightEndWindow), this.resizeButton.toggleClassName("reduceButton", R.displayFullFightEndWindow), this.resizeButton.toggleClassName("maximiseButton", !R.displayFullFightEndWindow), this.displayHeaderAndSummary(R.displayFullFightEndWindow), q.getValue("FightEndWindowPosition", !1)) {
            var e = q.getValue("FightEndWindowPosition-left"),
                t = q.getValue("FightEndWindowPosition-top");
            this.changePosition(e, t)
        }
        this.isInLittleMode = !R.displayFullFightEndWindow, this.table.scroller.refresh()
    }, a.prototype.displayHeaderAndSummary = function(e) {
        this.table.header.toggleDisplay(e), this.summary.toggleDisplay(e)
    }
}
