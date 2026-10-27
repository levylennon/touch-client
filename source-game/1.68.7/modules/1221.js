function(e, t, i) {
    function n() {
        s.call(this, "div", {
            className: "GuildPerceptorsWindow"
        }), this.taxCollectorRows = {}, this.taxCollectorList = [], this._taxCollectorDisplayed = 0, this._taxCollectorMaxNumber = 0, this.once("open", function() {
            this._createDom(), this._setupEvents()
        }), this.on("open", function() {
            this.table.addClassNames("spinner"), window.dofus.sendMessage("GuildGetInformationsMessage", {
                infoType: d.INFO_TAX_COLLECTOR_GUILD_ONLY
            }), this._guildFilter._resetSortOrder()
        }), this.on("close", function() {
            this._clearAllFightStartTimers(), window.dofus.sendMessage("GuildGetInformationsMessage", {
                infoType: d.INFO_TAX_COLLECTOR_LEAVE
            })
        })
    }

    function o(e) {
        var t = this.fight;
        if (t.state === m.fightState.waitingForHelp) {
            var i = t.id,
                n = window.gui.playerData.id;
            m.isPlayerFightingFor(n, O.taxCollector, i, v.allies) ? e && n === e.id && window.dofus.sendMessage("GuildFightLeaveRequestMessage", {
                taxCollectorId: i,
                characterId: n
            }) : e && 4 === t.fighters.allies.length ? window.dofus.sendMessage("GuildFightTakePlaceRequestMessage", {
                taxCollectorId: i,
                replacedCharacterId: e.id
            }) : window.dofus.sendMessage("GuildFightJoinRequestMessage", {
                taxCollectorId: i
            })
        }
    }
    i(1222);
    var a = i(86),
        r = i(56)
        .inherits,
        s = i(72),
        c = i(88)
        .addTooltip,
        l = i(17)
        .getText,
        d = i(757),
        u = i(16),
        p = i(1205),
        h = i(1223),
        f = i(490),
        b = i(765),
        m = i(524),
        M = i(52),
        g = i(21)
        .DofusDate,
        _ = i(1225),
        A = i(34)
        .logger,
        O = m.entityType,
        v = m.fightingSide;
    r(n, s), e.exports = n, n.prototype._createDom = function() {
        this._guildFilter = this.appendChild(new _);
        var e = this.createChild("div", {
                className: "tableContainer"
            }),
            t = [{
                id: "fightState"
            }, {
                id: "taxCollectorInfo",
                header: l("ui.common.name") + " / " + l("ui.common.localisation")
            }, {
                id: "timer"
            }, {
                id: "fightersInfo",
                header: l("ui.common.defenders") + " / " + l("ui.common.attackers")
            }];
        this.table = e.appendChild(new b(t, null, {
            clickable: !1
        }));
        var i = this.createChild("div", {
                className: "bottomDiv"
            }),
            n = i.createChild("div", {
                className: "leftPart"
            }),
            o = i.createChild("div", {
                className: "rightPart"
            });
        n.appendChild(new a({
            text: l("ui.social.guildBoosts"),
            className: ["boostPanelBtn", "greenButton"]
        }, this._openBoostPanel.bind(this))), this.perceptorAmountText = o.createChild("div", {
            className: "rightAlignText"
        }), this._setPerceptorsAmount(this._taxCollectorDisplayed, this._taxCollectorMaxNumber), o.createChild("div", {
            className: "rightAlignText",
            text: l("ui.social.guildHowDefendTax")
        })
    }, n.prototype._setupEvents = function() {
        function e(e) {
            return i.taxCollectorRows[e] && i.taxCollectorRows[e].fightersInfo && i.taxCollectorRows[e].fightersInfo.content
        }

        function t(e) {
            return i.taxCollectorRows[e] && i.taxCollectorRows[e].timer && i.taxCollectorRows[e].timer.content
        }
        var i = this;
        m.on("taxCollectorList", function(e, t, n) {
            if (i.isVisible() && e === O.taxCollector) {
                i.table.delClassNames("spinner"), i._resetAll();
                for (var o = 0, a = t.length; o < a; o += 1) i._addTaxCollector(t[o]);
                i._guildFilter.setTaxCollectorsList(i.taxCollectorList), i._taxCollectorMaxNumber = n, i._taxCollectorDisplayed = t.length, i._setPerceptorsAmount(i._taxCollectorDisplayed, i._taxCollectorMaxNumber), i._sortByOwner()
            }
        }), m.on("entityAdded", function(e, t) {
            i.isVisible() && e === O.taxCollector && (i._addTaxCollector(t), i._taxCollectorMaxNumber = i.table.getRowCount(), i._setPerceptorsAmount(i._taxCollectorDisplayed, i._taxCollectorMaxNumber))
        }), m.on("entityRemoved", function(e, t) {
            i.isVisible() && e === O.taxCollector && (i._removeTaxCollector(t), i._taxCollectorMaxNumber = i.table.getRowCount(), i._setPerceptorsAmount(i._taxCollectorDisplayed, i._taxCollectorMaxNumber))
        }), m.on("fightStarted", function(n, o) {
            if (i.isVisible() && n === O.taxCollector) {
                var a = e(o.id);
                if (a) {
                    var r = m.entities[n][o.id],
                        s = r.enrichData || {};
                    a.setFight(n, o), a.setTarget({
                        id: o.id,
                        entityLook: r.look,
                        name: s.firstName + " " + s.lastName,
                        level: window.gui.playerData.guild.current.level
                    }), i._updateFightState(o.id, o.state);
                    var c = t(o.id);
                    i._registerFightStartTimer(c, o.waitingForHelpInfo)
                }
            }
        }), m.on("fighting", function(e, n) {
            if (i.isVisible() && e === O.taxCollector) {
                var o = t(n.id);
                i._updateFightState(n.id, n.state), i._clearFightStartTimer(o)
            }
        }), m.on("fightEnded", function(t, n) {
            if (i.isVisible() && t === O.taxCollector) {
                var o = e(n);
                o && (i._updateFightState(n, m.fightState.noFight), o.reset())
            }
        }), m.on("fighterList", function(t, n, o, a) {
            if (i.isVisible() && t === O.taxCollector) {
                var r = e(n);
                r && r.setFighters(o, a)
            }
        }), m.on("fighterJoined", function(t, n, o, a, r) {
            if (i.isVisible() && t === O.taxCollector) {
                var s = e(n);
                s && s.setFighter(o, a, r)
            }
        }), m.on("fighterLeft", function(t, n, o, a, r) {
            if (i.isVisible() && t === O.taxCollector) {
                var s = e(n);
                s && s.removeFighter(o, r)
            }
        }), this._guildFilter.on("sort", function(e, t) {
            i._sortBy(e, t)
        })
    }, n.prototype._setPerceptorsAmount = function(e, t) {
        this.perceptorAmountText.setText(l("ui.social.guild.taxCollectorCount", e, t))
    }, n.prototype._setNameLocation = function(e, t) {
        var i = t.enrichData || {},
            n = e.getChild("name");
        n.setText(i.firstName + " " + i.lastName);
        var o = " (" + t.worldX + " , " + t.worldY + ")",
            a = e.getChild("location");
        a.setText(i.subAreaName + o);
        var r = t.complements || [],
            s = u.getObjectInArrayById(r, "_type", "TaxCollectorLootInformations") || {},
            c = l("ui.common.short.weight", u.intToString(s.pods || 0)),
            d = l("ui.social.thingsTaxCollectorGet", c, u.intToString(s.experience || 0)),
            p = e.getChild("resources");
        p.setText(d);
        var h = e.getChild("owner"),
            f = t.additionalInfos.collectorCallerName;
        h.toggleClassName("me", window.gui.playerData.characterBaseInformations.name === f), h.setText(l("ui.common.ownerWord") + l("ui.common.colon") + f), e.ownerName = f
    }, n.prototype._addFightStateToolTip = function(e, t) {
        c(e, function() {
            var e = "",
                i = t.state || 0;
            e += l(1 === i ? "ui.social.guild.taxInEnterFight" : 2 === i ? "ui.social.guild.taxInFight" : "ui.social.guild.taxInCollect");
            var n = t.additionalInfos || {};
            e += "\n" + l("ui.common.ownerWord") + l("ui.common.colon"), e += n.collectorCallerName + "\n", e += l("ui.social.guild.taxStartDate") + l("ui.common.colon");
            var o = new g(1e3 * n.date)
                .getServerDate()
                .toString(!1);
            return e += o.date + " - " + o.time, e += "\n" + l("ui.social.taxCollector.itemsValue", u.kamasToString(t.complements[0].itemsValue)), new s("div", {
                text: e
            })
        })
    }, n.prototype._updateTimerProgressBar = function(e) {
        var t = e.remainSeconds,
            i = e.totalWaitTime,
            n = i - t,
            o = Math.round(n / i * 100) / 100;
        e.setValue(o)
    }, n.prototype._registerFightStartTimer = function(e, t) {
        var i = this;
        t && (e.remainSeconds = Math.round(t.timeLeftBeforeFight / 10) || 0, e.totalWaitTime = Math.round(t.waitTimeForPlacement / 10) || 1, e.intervalId = setInterval(function() {
            e.remainSeconds -= 1, e.remainSeconds > 0 ? i._updateTimerProgressBar(e) : i._clearFightStartTimer(e)
        }, 1e3), this._updateTimerProgressBar(e))
    }, n.prototype._clearFightStartTimer = function(e) {
        clearInterval(e.intervalId), e.intervalId = null, e.remainSeconds = 0, e.totalWaitTime = 0, e.setValue(0)
    }, n.prototype._clearAllFightStartTimers = function() {
        for (var e = this.table.rows.getChildren() || [], t = 0; t < e.length; t += 1) {
            var i = e[t].timer.content;
            this._clearFightStartTimer(i)
        }
    }, n.prototype._createTaxCollectorRow = function(e) {
        var t = new s("div", {
            className: ["fightState", "state" + e.state]
        });
        this._addFightStateToolTip(t, e);
        var i = new s("div", {
            className: "taxCollectorInfo"
        });
        i.createChild("div", {
            name: "name"
        }), i.createChild("div", {
            name: "location"
        }), i.createChild("div", {
            name: "resources"
        }), i.createChild("div", {
            name: "owner",
            className: "taxCollectorInfoOwner"
        }), i.ownerName = "", this._setNameLocation(i, e);
        var n = new f({
                vertical: !0,
                className: ["green", "timerBar"]
            }),
            a = new p;
        return a.on("slotTap", o), {
            fightState: t,
            taxCollectorInfo: i,
            timer: n,
            fightersInfo: a
        }
    }, n.prototype._addTaxCollector = function(e) {
        var t = e.uniqueId,
            i = {
                animated: !1,
                dontSort: !0
            },
            n = this.table.addRow(this._createTaxCollectorRow(e), t, i);
        this.taxCollectorRows[t] = n, this.taxCollectorList.push(e)
    }, n.prototype._updateFightState = function(e, t) {
        var i = this.taxCollectorRows[e] && this.taxCollectorRows[e].fightState && this.taxCollectorRows[e].fightState.content;
        i && i.replaceClassNames(["state0", "state1", "state2"], ["state" + t])
    }, n.prototype._removeTaxCollector = function(e) {
        var t = this.taxCollectorRows[e];
        if (t) {
            this._clearFightStartTimer(t.timer.content);
            for (var i = -1, n = 0; n < this.taxCollectorRows.length; n++)
                if (this.taxCollectorRows[n] === e) {
                    i = n;
                    break
                } i !== -1 && this.taxCollectorRows.splice(i, 1), i = -1;
            for (var o in this.taxCollectorList)
                if (this.taxCollectorList[o].uniqueId === e) {
                    i = o;
                    break
                } i !== -1 && this.taxCollectorList.splice(i, 1), this._guildFilter.setTaxCollectorsList(this.taxCollectorList), this.table.hasRow(t.rowId) && this.table.delRow(t.rowId)
        }
    }, n.prototype._resetAll = function() {
        this.taxCollectorRows = {}, this._clearAllFightStartTimers(), this.table.clearContent(), this._taxCollectorDisplayed = 0, this._setPerceptorsAmount(this._taxCollectorDisplayed, this._taxCollectorMaxNumber), this.taxCollectorList = []
    }, n.prototype._openBoostPanel = function() {
        var e = "PerceptorBoostPanel",
            t = M.getPanel(e, 1);
        t ? M.focusWindow(t.id) : M.createPanel(e, new h, {
            title: l("ui.social.guildTaxCollectors") + " - " + l("ui.social.guildBoosts"),
            width: 797,
            height: 497
        })
    }, n.prototype._sortByOwner = function() {
        this.table.sort(function(e, t) {
            var i = e.taxCollectorInfo.ownerName || "",
                n = t.taxCollectorInfo.ownerName || "",
                o = window.gui.playerData.characterBaseInformations.name;
            return i === o ? -1 : n === o ? 1 : 0
        })
    }, n.prototype._sortBy = function(e, t) {
        var i = this,
            n = ["collectorCallerName", "date"],
            o = ["experience", "itemsValue", "pods"],
            a = ["subAreaName"];
        e = e[0];
        var r = i.taxCollectorList;
        r.sort(function(t, i) {
            var r, s, c = t.additionalInfos,
                l = t.complements[0],
                d = t.enrichData,
                u = i.additionalInfos,
                p = i.complements[0],
                h = i.enrichData;
            if (n.indexOf(e) !== -1) r = c[e], s = u[e];
            else if (o.indexOf(e) !== -1) r = l[e], s = p[e];
            else {
                if (a.indexOf(e) === -1) {
                    if (0 === e.indexOf("collectorCallerName-") || 0 === e.indexOf("subAreaName-")) {
                        var f = e.indexOf("-"),
                            b = e.substring(0, f),
                            m = e.substring(f + 1);
                        return 0 === e.indexOf("collectorCallerName-") ? (r = c[b], s = u[b]) : (r = d[b], s = h[b]), r === m && s !== m ? -1 : r !== m && s === m ? 1 : 0
                    }
                    return A.error(new Error("The criteria doesn't exist " + e))
                }
                r = d[e], s = h[e]
            }
            switch (typeof r) {
                case "string":
                    return r.toLowerCase()
                        .localeCompare(s.toLowerCase());
                case "number":
                    return r - s;
                default:
                    return A.error(new Error("Invalid type received " + typeof r)), 0
            }
        }), "DESC" === t && r.reverse(), i._resetAll();
        for (var s in r) i._addTaxCollector(r[s]);
        i._taxCollectorDisplayed = r.length, i._setPerceptorsAmount(i._taxCollectorDisplayed, i._taxCollectorMaxNumber)
    }
}
