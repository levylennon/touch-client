function(e, t, i) {
    function n() {
        function e(e, i, n, o) {
            var a = (1.3 * n + 16) * (o / i);
            t.toggleClassName("danger", e > a)
        }
        var t = this;
        a.call(this, {
            className: "ContextualMenuMonster"
        }), this.monsterId = null, this.attack = null, this.sortedMonsters = [], this.scaleLevel = null, this.once("open", function() {
            this._setupDom()
        }), this.on("open", function(i, n) {
            function o(e) {
                for (var t = 0; t < h.monsters.length; t++)
                    if (h.monsters[t].creatureGenericId === e) return h.monsters[t];
                return null
            }
            this.data = i, this.monsterId = i.contextualId, this.monstersList.clearContent();
            var a, c = this.monstersList.createChild("div", {
                    className: "willFightContainer"
                }),
                l = this.monstersList.createChild("div", {
                    className: "willNotFightContainer"
                });
            if (i.staticInfos) {
                a = [i.staticInfos.mainCreatureLightInfos].concat(i.staticInfos.underlings);
                var d = i.staticInfos.alternatives;
                i.cameFromChat = !1
            } else a = i;
            for (t._monsterIds = [], t._monstersGrade = [], p = 0; p < a.length; p += 1) {
                var u = a[p].creatureGenericId ? a[p].creatureGenericId : a[p].id;
                t._monsterIds.push(u), t._monstersGrade.push(a[p].grade)
            }
            var p, h = null,
                f = [],
                b = window.gui.playerData.partyData.getClassicalParty(),
                m = b ? b.getMemberCount() : 1;
            if (t.toggleClassName("group", m > 1), d) {
                for (var M = 0; d[M] && d[M].playerCount <= m;) h = d[M], M += 1;
                for (p = 0; p < h.monsters.length; p += 1) f.push(h.monsters[p].creatureGenericId)
            }
            if (this.scaleLevel = i.scaleLevel, this.scaleLevel && this.scaleLevel > -1) {
                var g = window.gui.playerData.ToaData.getMonsterLevelScaled(this.scaleLevel);
                for (p = 0; p < a.length; p += 1) a[p].staticInfos ? a[p].staticInfos.level = g : a[p].level = g
            }
            this.sortedMonsters = a.sort(function(e, t) {
                return t.staticInfos && e.staticInfos ? t.staticInfos.level - e.staticInfos.level : t.level - e.level
            });
            var _ = [],
                A = 0;
            for (p = 0; p < this.sortedMonsters.length; p += 1) {
                var O = this.sortedMonsters[p],
                    v = O.staticInfos,
                    y = O.creatureGenericId,
                    z = !0,
                    w = v ? v.xp : O.xp,
                    T = v ? v.level : O.level;
                if (d) {
                    z = !1;
                    var C = f.indexOf(y);
                    if (C !== -1) {
                        z = !0, f.splice(C, 1);
                        var I = o(y);
                        I && (w = I.xp, T = I.level)
                    }
                }
                z && (A += T);
                var S = v ? v.nameId : O.nameId,
                    E = S + " (" + T + ")",
                    L = z ? c : l,
                    N = ["monsterName"],
                    R = window.gui.playerData.quests.getNeededMonstersForQuest(),
                    q = R.indexOf(y) !== -1,
                    x = v ? v.isBoss : O.isBoss,
                    B = v ? v.isMiniBoss : O.isMiniBoss,
                    D = v ? v.isWantedMonster : O.isWantedMonster,
                    W = x || B || D;
                if (q && !W) {
                    N.push("monsterNeeded");
                    var P = L.createChild("div", {
                        className: N,
                        text: E
                    });
                    P.createChild("div", {
                        className: "monsterNeededIcon"
                    }), P.createChild("div", {
                        className: "monsterNeededName",
                        text: E
                    })
                } else if (x) {
                    N.push("boss");
                    var k = L.createChild("div", {
                        className: N,
                        text: E
                    });
                    k.createChild("div", {
                        className: "bossIcon"
                    }), k.createChild("div", {
                        className: "bossName",
                        text: E
                    })
                } else {
                    var F = window.gui.playerData.quests.hasWantedMonsterQuest(y);
                    B ? N.push("miniBoss") : F && D && N.push("wanted"), L.createChild("div", {
                        className: N,
                        text: E
                    })
                }
                z && _.push({
                    id: O.creatureGenericId,
                    xp: w,
                    level: T
                })
            }
            var H = window.gui.playerData.characterBaseInformations.level,
                U = window.gui.playerData.partyData.getDangerDisplay(),
                G = m > 1 && U ? b.getMembersTotalLevel() : H,
                j = m > 1 && U ? b.getMembersLevelAverage() : H;
            e(A, A / this.sortedMonsters.length, G, j), t.level.setText(s("ui.common.rank", A)), t.attack.setEnable(!window.gui.playerData.getRestrictions()
                .cantAttackMonster);
            var Y = r.getXpPreview(_, window.gui.playerData, null),
                X = r.getXpPreview(_, window.gui.playerData, b);
            t.xp.setText(s("ui.tooltip.monsterXpAlone", r.intToString(Y))), m > 1 && t.xpGroup.setText(s("ui.tooltip.monsterXpParty", r.intToString(X))), t.xpGroup.toggleDisplay(m > 1), t.ping.toggleDisplay(!i.cameFromChat), t.attack.toggleDisplay(!i.cameFromChat), t.follow.toggleDisplay(i.cameFromChat), n()
        })
    }
    i(511);
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(16),
        s = i(17)
        .getText,
        c = i(52),
        l = i(86),
        d = i(506);
    o(n, a), e.exports = n, n.prototype._setupDom = function() {
        var e = this,
            t = this.header.createChild("div", {
                className: "monsterInfosContainer"
            }),
            i = t.createChild("div", {
                className: "levelContainer"
            });
        this.level = i.createChild("div", {
            className: "level"
        }), i.createChild("div", {
            className: "warning"
        }), i.appendChild(new l({
            className: ["cross", "Button", "scaleOnPress"]
        }, function() {
            e.close()
        })), this.xp = t.createChild("div", {
            className: "xp"
        }), this.xpGroup = t.createChild("div", {
            className: "xp"
        }), this.monstersList = this.entryList.createChild("div", {
            className: "monstersList"
        }), this.bestiary = this._addButton(function() {
            c.open("grimoire", {
                tabId: "bestiary",
                tabParams: {
                    monsterIds: e._monsterIds
                }
            })
        }, ["bestiary", "greenButton"]), this.bestiary.createChild("div", {
            className: "bestiaryImg"
        }), this.ping = this._addButton(function() {
            e.createHyperlinkForPing()
        }, ["ping", "greenButton"]), this.ping.createChild("div", {
            className: "pingImg"
        }), this.attack = this._addButton(function() {
            e.monsterId && window.isoEngine.attackActor(e.monsterId), e.close()
        }, ["greenButton", "attack"], s("ui.common.attack")), this.follow = this._addButton(function() {
            e.createHyperlinkForFollow(e.data), e.close()
        }, ["greenButton", "attack"], s("ui.pingMonsterButton.follow"))
    }, n.prototype.createHyperlinkForPing = function() {
        for (var e = window.gui.playerData.position, t = e.coordinates, i = this.sortedMonsters[0].staticInfos.nameId, n = "[", o = 0; o < this._monsterIds.length; o++) {
            var a = this._monsterIds[o] + "|" + this._monstersGrade[o];
            n += a, o + 1 < this._monsterIds.length && (n += ",")
        }
        for (var r in this.sortedMonsters) {
            var s = this.sortedMonsters[r];
            if (s.staticInfos && s.staticInfos.isWantedMonster) {
                i = s.staticInfos.nameId;
                break
            }
        }
        n += "]";
        var c = "{pingMonster," + t.posX + "," + t.posY + "," + e.worldmapId + "," + i + "," + n + "," + (this.scaleLevel ? this.scaleLevel : -1) + "}",
            l = {
                text: c,
                posX: t.posX,
                posY: t.posY,
                monsterName: i
            };
        window.gui.chat.insertLink("monster", l), window.gui.chat.active || window.gui.chat.activate()
    }, n.prototype.createHyperlinkForFollow = function(e) {
        var t = parseInt(e.posX, 10),
            i = parseInt(e.posY, 10),
            n = parseInt(e.worldMapId, 10);
        n === window.gui.playerData.position.worldmapId && (c.open("worldMap", {
            x: t,
            y: i,
            openedFromChat: !0
        }), window.gui.GPS.addPOI({
            id: "flag_srv" + d.COMPASS_TYPE_SIMPLE,
            x: t,
            y: i,
            categoryId: "hint",
            nameId: "(" + t + "," + i + ")",
            color: {
                r: 255,
                g: 134,
                b: 0,
                a: 1
            },
            isDestination: !1
        }))
    }
}
