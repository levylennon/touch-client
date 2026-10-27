function(e, t, i) {
    function n(e, t, i) {
        (void 0 === i.min[e] || i.min[e] > t[e]) && (i.min[e] = t[e]), (void 0 === i.max[e] || i.max[e] < t[e]) && (i.max[e] = t[e])
    }

    function o(e) {
        for (var t = {
                min: {},
                max: {}
            }, i = ["level", "lifePoints", "actionPoints", "movementPoints", "earthResistance", "airResistance", "fireResistance", "waterResistance", "neutralResistance"], o = i.length, a = 0, r = e.length; a < r; a += 1)
            for (var s = e[a], c = 0; c < o; c += 1) {
                var l = i[c];
                n(l, s, t)
            }
        return t
    }

    function a(e) {
        for (var t = {}, i = ["percentDropForGrade1", "percentDropForGrade2", "percentDropForGrade3", "percentDropForGrade4", "percentDropForGrade5"], n = 0, o = i.length; n < o; n += 1) {
            var a = e[i[n]];
            (void 0 === t.min || t.min > a) && (t.min = a), (void 0 === t.max || t.max < a) && (t.max = a)
        }
        return t
    }

    function r() {
        function e() {
            t.emit("initialized"), t.subAreaWrapper.delClassNames("spinner"), t.raceWrapper.delClassNames("spinner")
        }
        O.call(this, "div", {
            className: "BestiaryWindow",
            name: "bestiary"
        });
        var t = this;
        this.subAreas = {}, this.races = {}, this.monsters = {};
        var i = !1,
            n = !1,
            o = !1;
        this.params = {}, this.isDisplayingTargetedMonsters = !1, this._sortByName = L.createStringCompareFunc(), this.once("open", function() {
            this._createDom(), this._setupEvents(), this._getAreaStaticData(function() {
                t._createAreaCategories(), i = !0, n && o && e()
            }), this._getMonsterFamilyStaticData(function() {
                t._createMonsterFamilyCategories(), n = !0, i && o && e()
            })
        }), this.on("open", function(e) {
            var t = i && n;
            return this.subAreaWrapper.toggleClassName("spinner", !t), this.raceWrapper.toggleClassName("spinner", !t), t ? void this._onOpen(e) : this.once("initialized", this._onOpen.bind(this, e))
        }), this.on("close", function() {
            t.monsterList.clearContent(), t.noResultText.show(), t.monsterList.refresh(), t.subAreaList.deselectSubitem()
        }), window.gui.playerData.position.on("mapUpdate", function() {
            o = !0, i && n && e()
        })
    }

    function s(e, t) {
        for (var i = 0, n = 0; n < t.length; n += 1) {
            var o = t[n];
            if (e.indexOf(o.toString()) === -1) {
                i = o;
                break
            }
        }
        if (i) {
            for (var a = 0; a < e.length; a += 1) {
                var r = e[a];
                V.push("cp " + i + ".png " + r + ".png ; cp " + i + ".png copyToSources/" + r + ".png")
            }
            return i.toString()
        }
        return ""
    }

    function c() {
        return !0
    }

    function l(e) {
        var t = p(e, this.myWindow);
        return t.length
    }

    function d(e) {
        var t = h(e, this.myWindow);
        return t.length
    }

    function u(e) {
        this.myWindow._showMonsters(e.data.monsters, ""), this.myWindow.displayTargetedMonsters.delClassNames(["on"]), this.myWindow._updateTargetButtonState(!1)
    }

    function p(e, t) {
        var i = [],
            n = t || this.myWindow;
        return U.forEach(function(t) {
            n.subAreas[t.id] = t, 0 === n.subAreas[t.id].monsters.length || !t.areaId && 0 !== t.areaId || t.areaId === e.info && (t.text = t.nameId, i.push(t))
        }), i
    }

    function h(e, t) {
        var i = [],
            n = t || this.myWindow;
        return j.forEach(function(t) {
            n.races[t.id] = t, 0 === n.races[t.id].monsters.length || !t.superRaceId && 0 !== t.superRaceId || t.superRaceId === e.info && (t.text = t.nameId, i.push(t))
        }), i
    }

    function f(e, t) {
        return e === t ? e : e + " " + S("ui.chat.to") + " " + t
    }

    function b(e) {
        return Math.round(1e3 * e) / 1e3
    }

    function m(e) {
        var t = this.data.nameId;
        if (window.gui.playerData.isAbleToSeeId()) {
            var i = this.itemDataElement.getProperty("id"),
                n = " (" + i + ")";
            t += n
        }
        var o = S("ui.item.averageprice") + " : ",
            a = this.itemDataElement.getProperty("averagePrice");
        o += a === -1 ? S("ui.item.averageprice.unavailable") : L.kamasToString(a), t += "\n" + o;
        var r = window.gui.playerData.characters.mainCharacter.characteristics.prospecting.getTotalStat(),
            s = r;
        s < 100 && (r = 100);
        var c = 1;
        window.gui.playerData.isSubscriberAtMinLevel(B.NORMAL) && this.dropInfo.hasPackBonus && (c += x.BONUS_PACK_DROP / 100);
        var l = Math.min(100, b(this.dropInfo.dropMinPercent * c)),
            d = Math.min(100, b(this.dropInfo.dropMaxPercent * c)),
            u = Math.min(100, b(this.dropInfo.dropMinPercent * r * c / 100)),
            p = Math.min(100, b(this.dropInfo.dropMaxPercent * r * c / 100));
        this.dropInfo.hasProspectionBonus && (t += "\n" + S("ui.monster.obtaining"), t += " (" + s + " " + S("ui.short.prospection") + ")" + S("ui.common.colon"), t += f(u, p) + "%"), t += "\n" + S("ui.monster.obtaining"), t += " (" + S("ui.common.base") + ")" + S("ui.common.colon"), t += f(l, d) + "%", this.dropInfo.findCeil && (t += "\n" + S("ui.monster.prospectionThreshold") + S("ui.common.colon") + this.dropInfo.findCeil);
        var h = new O("div");
        h.createChild("div", {
            text: t
        });
        var m = h.createChild("div", {
                className: "TooltipBestiary"
            }),
            M = this.dropInfo.criterions;
        return M && "null" !== M ? window.gui.criterionManager.evaluateAndFormatConditions(M, {
            item: this.item
        }, null, function(t, i) {
            i.length > 0 && m.createChild("div", {
                text: S("ui.monster.obtentionCondition") + S("ui.common.colon")
            });
            for (var n = 0; n < i.length; n++) {
                var o = i[n],
                    a = o.text,
                    r = m.createChild("div", {
                        className: "singleTab"
                    });
                r.toggleClassName("malus", o.isMalus), r.appendChild(F.process(X + " " + a))
            }
            return e(h)
        }) : e(h)
    }
    i(1058);
    var M = i(56)
        .inherits,
        g = i(18),
        _ = i(1059),
        A = i(962),
        O = i(72),
        v = i(130),
        y = i(1052)
        .SingleSelectionList,
        z = i(1060),
        w = i(469),
        T = i(470),
        C = i(871),
        I = i(1062),
        S = i(17)
        .getText,
        E = i(12),
        L = i(16),
        N = i(943),
        R = i(594),
        q = i(34)
        .logger,
        x = i(13),
        B = i(509),
        D = i(129),
        W = i(86),
        P = i(60),
        k = i(1064),
        F = i(502),
        H = [],
        U = [],
        G = [],
        j = [],
        Y = [],
        X = "&#149;";
    M(r, O), e.exports = r, r.prototype._search = function(e) {
        var t = this;
        if ("" === e) return void(this.searching = !1);
        var i = L.simplifyString(e);
        this.searching = !0, this.monsterList.clearContent(), this.monsterList.addClassNames("spinner"), t.errorText.hide(), t.noResultText.hide(), v.searchDataMap("Items", {
            match: i
        }, function(n, o) {
            if (t.searching) {
                if (n) return t.monsterList.delClassNames("spinner"), t.errorText.show(), console.error("BestiaryWindow items search", n);
                var a = [];
                for (var r in o)
                    if (o.hasOwnProperty(r)) {
                        var s = o[r];
                        if (s.dropMonsterIds.length)
                            for (var c = 0; c < s.dropMonsterIds.length; c++) {
                                var l = s.dropMonsterIds[c];
                                a.indexOf(l) === -1 && a.push(l)
                            }
                    } v.searchDataMap("Monsters", {
                    match: i
                }, function(i, n) {
                    if (t.searching) {
                        if (i) return t.monsterList.delClassNames("spinner"), t.errorText.show(), console.error("BestiaryWindow monsters search", i);
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                var r = n[o];
                                a.indexOf(r.id) === -1 && a.push(r.id)
                            } t._showMonsters(a, e)
                    }
                })
            }
        })
    }, r.prototype._showMonsters = function(e, t, i) {
        var n = this;
        this.searchBox.setValue(t || ""), this.searching = !1, this.errorText.hide(), this.noResultText.hide(), this.monsterList.addClassNames("spinner"), v.getDataArray("Monsters", e, {}, function(e, t) {
            if (e) return n._clearAndRemoveSpinner(), n.errorText.show(), n.monsterList.refresh(), console.error("BestiaryWindow showMonsters error", e);
            t.sort(n._sortByName), t = n.removeInvisibleMonsters(t);
            var o = t.length;
            if (0 === o) return n._clearAndRemoveSpinner(), n.noResultText.show(), void n.monsterList.refresh();
            for (var a = [], r = 0; r < o; r += 1) {
                var s = t[r];
                a.push("gfx/monsters/" + s.id + ".png")
            }
            E.preloadImages(a, function(e) {
                n._clearAndRemoveSpinner();
                for (var a = 0; a < o; a += 1) n.addMonster(t[a], e[a]);
                return n.monsterList.refresh(), i && i()
            })
        })
    };
    var V = [];
    r.prototype.monstersImageIntegrity = function(e) {
        V = [], v.getAllDataTable("Monsters", function(t, i) {
            if (t) {
                var n = new Error("integrity error: " + t);
                return q.error(n), e(n)
            }
            var o = {},
                a = {},
                r = {},
                c = {};
            for (var l in i)
                if (i.hasOwnProperty(l)) {
                    var d = i[l],
                        u = L.parseLook(q, d.look, "Monster " + d.id)
                        .bone;
                    o["gfx/monsters/" + d.id + ".png"] = !0, a[d.id] = u, c[d.id] = d.look, r[u] ? r[u].push(d.id) : r[u] = [d.id]
                } var p = Object.keys(o);
            E.preloadImageUrls(p, function(t) {
                var i = [];
                g.forEachLimit(t, 10, function(e, t) {
                    _.open({
                        uri: e
                    }, function(n) {
                        n && i.push({
                            error: n,
                            url: e
                        }), t()
                    })
                }, function(n) {
                    n && q.error(n);
                    var o = [];
                    if (i.length > 0) {
                        for (var l, d = [], u = {}, p = 0; p < i.length; p += 1) {
                            var h = i[p];
                            q.error(h.error);
                            var f = h.url || "",
                                b = f.split("/")
                                .pop(),
                                m = b.split(".")[0];
                            l = a[m] || -1, l <= 1 ? d.push([m, c[m]]) : u[l] ? u[l].push(m) : u[l] = [m]
                        }
                        var M = Object.keys(u)
                            .length,
                            g = "[Bestiary integrity] Missing bones count: " + M;
                        q.error(g), o.push(g);
                        for (l in u)
                            if (u.hasOwnProperty(l)) {
                                var _ = u[l];
                                g = 'Missing bones: "' + l + '" for monster id "' + _.join(",") + '"';
                                var A = s(_, r[l]);
                                A && (g += ' can steal from: "' + A + '"'), q.error(g), o.push(g)
                            } if (d.length > 0) {
                            var O = d.length;
                            o.push(""), g = "[Bestiary integrity] Missing bones 1 or null count: " + O, q.error(g), o.push(g);
                            for (var v = 0, y = d.length; v < y; v += 1) {
                                var z = d[v];
                                g = 'Do something for monster "' + z[0] + '" with bones 1 or null and look: "', g += z[1] + '"', q.error(g), o.push(g)
                            }
                        }
                        o.length && q.log(o.join("[LF]")), V.length && q.log("Command to do inside compiled gfx/monsters folder: mkdir copyToSources ; " + V.join(" ; "))
                    }
                    return q.log("done! (urls: " + t.length + ", errors: " + i.length + ")"), e(n, o.join("\n"))
                })
            })
        })
    }, r.prototype._clearAndRemoveSpinner = function() {
        this.monsterList.clearContent(), this.monsterList.delClassNames("spinner")
    }, r.prototype.addMonster = function(e, t) {
        var i = this,
            n = new O("div", {
                className: "infos"
            }),
            a = n.createChild("div", {
                className: "gfx"
            });
        a.setStyle("backgroundImage", t);
        var r = n.createChild("div", {
                className: "infosGroupRight"
            }),
            s = r.createChild("div", {
                className: "cf"
            }),
            c = ["name"];
        e.isBoss && c.push("boss"), e.isMiniBoss && c.push("miniBoss"), e.isQuestMonster && c.push("questMonster");
        var l = window.gui.playerData.isAbleToSeeId(),
            d = e.nameId;
        l && (d += " (" + e.id + ")"), s.createChild("div", {
            className: c,
            text: d
        });
        var u = o(e.grades),
            p = u.min.level,
            h = u.max.level,
            f = S("ui.common.short.level") + " " + p;
        p !== h && (f += " " + S("ui.chat.to") + " " + h), s.createChild("div", {
            className: "level",
            text: f
        });
        var b = r.createChild("div", {
                className: "mapLocationDom"
            }),
            m = new k({
                monsterId: e.id
            }),
            M = I.createMapLocation(e.subareas, this.subAreas, e.favoriteSubareaId),
            g = M.getChildren()
            .length;
        if (g > 1) {
            var _ = M.getChildren()[g - 1];
            m.insertBefore(_)
        } else M.appendChild(m);
        b.appendChild(M), m.on("tap", function() {
            i._updateDisplayTargetedMonstersButton()
        });
        var A = this.monsterList.addItem({
            id: e.id,
            element: n,
            data: e
        }, {
            noRefresh: !0
        });
        A.addClassNames("monster"), A.toggleClassName("normalMonster", 1 === c.length), A.monsterData = e, A.gradeMinMaxInfo = u, A.mapLocationDom = b
    }, r.prototype._onOpen = function(e) {
        this.params = e || {}, e.search ? this._search(e.search) : e.monsterIds ? this._showMonsters(e.monsterIds, e.label) : e.monsterIds || this._showMonstersFromSpecificArea(e), this._refreshTutorialRestrictions(), this._updateDisplayTargetedMonstersButton(), this._updateTargetButtonState(!1)
    }, r.prototype._showMonstersFromSpecificArea = function(e) {
        var t = this;
        e = e || {};
        var i = e.areaId || window.gui.playerData.position.area.id,
            n = e.subAreaId || window.gui.playerData.position.subAreaId;
        setTimeout(function() {
            var e = t.subAreaList.getItemElt(Y.indexOf(i)
                .toString());
            if (e) {
                t.subAreaList.deployItem(e, !0);
                var o = e.subitemList.getChild(n);
                o ? t.subAreaList.selectAndShowSubitem(o) : t.subAreas[n].monsters.length > 0 && console.error(new Error("Cannot select the subArea for area id: " + i + " and subAreaId: " + n))
            } else console.error(new Error("Cannot find the area elt for area id: " + i + " and subAreaId: " + n));
            t.subAreas[n].monsters.length > 0 && setTimeout(function() {
                t._showMonsters(t.subAreas[n].monsters, "", function() {
                    window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_LOADED)
                })
            }, 0)
        }, 0)
    }, r.prototype._createDom = function() {
        var e = this,
            t = this.col1 = this.createChild("div", {
                className: "col1"
            });
        this.col2 = this.createChild("div", {
            className: "col2"
        });
        var i = this.tabs = t.appendChild(new A);
        this.searchBlock = this.col2.createChild("div", {
            className: "searchBlock"
        }), this.searchBox = this.searchBlock.appendChild(new N), this.searchBox.on("search", function(t) {
            e._search(t)
        }), this.subAreaWrapper = t.createChild("div", {
            className: "listWrapper"
        }), this.subAreaList = new z({
            noBreadcrumb: !0
        }), this.subAreaList.myWindow = this, this.subAreaList.setSubitemsGetter(p), this.subAreaList.setFilter(l, c), this.subAreaList.on("subitemSelected", u), this.raceWrapper = t.createChild("div", {
            className: "listWrapper"
        }), this.raceList = new z({
            noBreadcrumb: !0
        }), this.raceList.myWindow = this, this.raceList.setSubitemsGetter(h), this.raceList.setFilter(d, c), this.raceList.on("subitemSelected", u);
        var n = i.addTab(S("ui.monster.areas"), this.subAreaWrapper, "areas"),
            o = i.getTabTarget(n);
        o.on("opened", function() {
            e.subAreaList.elt && (e.subAreaList.refresh(), e.subAreaList.refreshFilter(), e.updateListSize(e.subAreaList))
        }), n = i.addTab(S("ui.monster.families"), this.raceWrapper, "families");
        var a = i.getTabTarget(n);
        a.on("opened", function() {
            e.raceList.elt && (e.raceList.refresh(), e.raceList.refreshFilter(), e.updateListSize(e.raceList))
        }), i.openFirstTab(), this.monsterList = new y, this.monsterList = this.col2.appendChild(this.monsterList), this.monsterList.on("selected", function(t) {
            t.more ? (t.more.show(), this.refresh(), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_DROP_LOADED)) : e._createMonsterMoreInfo(t)
        }), this.monsterList.on("deselected", function(e) {
            e.more.hide(), this.refresh(), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_DESELECTED)
        }), this.noResultText = this.monsterList.createChild("div", {
            className: "noResultText",
            text: S("ui.search.noResult")
        }), this.errorText = this.monsterList.createChild("div", {
            className: "errorText",
            text: S("ui.secureMode.error.default")
        }), e.errorText.hide();
        var r = this.col2.createChild("div", {
                className: "footerContainer"
            }),
            s = r.appendChild(new R(S("ui.monster.showCriteriaDrop")));
        s.on("change", function(t) {
            e.toggleClassName("showCriteriaDrop", t), e.monsterList.refresh()
        });
        var f = P.getValue("targetedMonsterList", []),
            b = f.length;
        this.displayTargetedMonsters = r.appendChild(new W({
            className: ["secondaryButton", "scaleOnPress"],
            addIcon: "before",
            text: S("ui.targetMonster.show", b, x.MAX_MONSTERS_TARGETED)
        }, function() {
            if (e.isDisplayingTargetedMonsters) return e._showMonstersFromSpecificArea(), void e._updateTargetButtonState(!1);
            var t = P.getValue("targetedMonsterList", []);
            e._showMonsters(t), e._updateTargetButtonState(!0)
        })), this._updateDisplayTargetedMonstersButton()
    }, r.prototype._updateDisplayTargetedMonstersButton = function() {
        var e = P.getValue("targetedMonsterList", []),
            t = e.length;
        this.displayTargetedMonsters.setLabel(S("ui.targetMonster.show", t, x.MAX_MONSTERS_TARGETED))
    }, r.prototype._setupEvents = function() {
        var e = this,
            t = window.gui;
        t.on("disconnect", function() {
            e.selectedSubAreaElement = null, e.selectedRaceElement = null, e.updateRequired = !0, e.params = {}
        }), t.playerData.position.on("worldMapUpdate", function() {
            e._refreshMapLocation()
        }), window.gui.scenarioManager.on("stepChanged", function() {
            e._refreshTutorialRestrictions()
        })
    }, r.prototype._refreshTutorialRestrictions = function() {
        var e = window.gui.scenarioManager.isBehaviourEnabled(D.DISABLE_BESTIARY_LEFT_COLUMN);
        this.toggleClassName("disableLeftColumn", e)
    }, r.prototype._getAreaStaticData = function(e) {
        var t = this;
        v.getAllDataTable(["Areas", "SubAreas"], function(i, n) {
            return i ? console.error(i) : (H = n.Areas || [], U = n.SubAreas || [], H.sort(t._sortByName), U.sort(t._sortByName), void e())
        })
    }, r.prototype._getMonsterFamilyStaticData = function(e) {
        var t = this;
        v.getAllDataTable(["MonsterSuperRaces", "MonsterRaces"], function(i, n) {
            return i ? console.error(i) : (G = n.MonsterSuperRaces || [], j = n.MonsterRaces || [], G.sort(t._sortByName), j.sort(t._sortByName), void e())
        })
    }, r.prototype._createAreaCategories = function() {
        var e = this;
        Y = [], H.forEach(function(t) {
            Y.push(t.id), e.subAreaList.addItem(t.nameId, t.id)
        }), this.subAreaList.getDom(this.subAreaWrapper), this.subAreaList.refreshFilter()
    }, r.prototype._createMonsterFamilyCategories = function() {
        var e = this;
        G.forEach(function(t) {
            e.raceList.addItem(t.nameId, t.id)
        }), this.raceList.getDom(this.raceWrapper), this.raceList.refreshFilter()
    }, r.prototype.updateListSize = function(e) {
        if (e.elt) {
            var t = e.list,
                i = e.parentElt;
            t.setStyle("max-height", i.rootElement.clientHeight + "px"), e.refresh()
        }
    }, r.prototype._refreshMapLocation = function() {
        var e = this,
            t = this.monsterList.getItems();
        for (var i in t) {
            var n = t[i],
                o = n.monsterData,
                a = n.mapLocationDom;
            a.clearContent();
            var r = new k({
                    monsterId: o.id
                }),
                s = I.createMapLocation(o.subareas, this.subAreas, o.favoriteSubareaId),
                c = s.getChildren()
                .length;
            if (c > 0) {
                var l = s.getChildren()[c - 1];
                r.insertBefore(l)
            }
            a.appendChild(s), r.on("tap", function() {
                e._updateDisplayTargetedMonstersButton()
            })
        }
    }, r.prototype._createMonsterMoreInfo = function(e) {
        function t(e, t) {
            var i = a.min[t],
                n = a.max[t],
                o = e + ": " + i;
            i !== n && (o += " " + S("ui.chat.to") + " " + n), r.createChild("div", {
                className: "stat",
                text: o
            })
        }

        function i(e) {
            var t = a.min[e],
                i = a.max[e],
                n = t;
            t !== i && (n += " " + S("ui.chat.to") + " " + i), s.createChild("div", {
                className: ["stat", "resistance", e],
                text: n
            })
        }
        e.more = e.createChild("div", {
            className: "more"
        });
        var n = e.more.createChild("div", {
                className: "cf"
            }),
            o = e.monsterData,
            a = e.gradeMinMaxInfo,
            r = n.createChild("div", {
                className: ["col", "colLeft"]
            });
        r.createChild("div", {
            className: "subtitle",
            text: S("ui.common.caracteristics")
        }), t(S("ui.short.lifePoints"), "lifePoints"), t(S("ui.short.actionPoints"), "actionPoints"), t(S("ui.short.movementPoints"), "movementPoints");
        var s = n.createChild("div", {
            className: ["col", "colRight"]
        });
        s.createChild("div", {
            className: "subtitle",
            text: S("ui.common.resistances")
        }), i("neutralResistance"), i("earthResistance"), i("fireResistance"), i("waterResistance"), i("airResistance"), this._createMonsterDrops(e, o.drops)
    }, r.prototype._createMonsterDrops = function(e, t) {
        if (0 !== t.length) {
            e.more.createChild("div", {
                className: "subtitle",
                text: S("ui.common.loot")
            }), this.monsterList.refresh();
            var i = t.map(function(e) {
                    return e.objectId
                }),
                n = this;
            w.getItems(i, function(o) {
                if (o) return console.error("Failed to get items", o);
                for (var r = 0; r < i.length; r += 1) {
                    var s = i[r],
                        c = w.items[s];
                    if (c) {
                        if (window.gui.playerData.isAdmin() || c.typeId !== T.types.marker) {
                            var l = new C;
                            e.more.appendChild(l), l.itemDataElement = c;
                            var d = a(t[r]);
                            l.dropInfo = {
                                findCeil: t[r].findCeil,
                                dropMinPercent: d.min,
                                dropMaxPercent: d.max,
                                hasProspectionBonus: t[r].hasProspectionBonus,
                                hasPackBonus: t[r].hasPackBonus,
                                criterions: t[r].criteria,
                                item: c
                            }, l.setTooltip(m), l.toggleClassName("special", t[r].hasCriteria), l.setItem(c), l.setContextMenu("item", {
                                item: c
                            }), l.dropInfo.dropMinPercent < 2 ? l.addClassNames("rareDrop") : l.dropInfo.dropMinPercent < 10 && l.addClassNames("okDrop")
                        }
                    } else console.warn("monster", e.monsterData.id, "contains invalid drop item in pos ", r)
                }
                n.monsterList.refresh(), setTimeout(function() {
                    window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_DROP_LOADED)
                }, 0)
            })
        }
    }, r.prototype.displayAllMonsters = function() {
        if (this.monsterList)
            for (var e = this.monsterList.getItems(), t = 0; t < e.length; t++) {
                var i = e[t];
                i.show()
            }
    }, r.prototype.hideAllMonstersExcept = function(e) {
        if (this.monsterList)
            for (var t = this.monsterList.getItems(), i = 0; i < t.length; i++) e !== t[i] && t[i].hide()
    }, r.prototype.getMonsterWithDrop = function(e) {
        if (this.monsterList)
            for (var t = this.monsterList.getItems(), i = 0; i < t.length; i++) {
                for (var n = t[i], o = !1, a = 0; a < n.data.drops.length; a++) {
                    var r = n.data.drops[a];
                    if ("null" === r.criteria && (!e || e === r.objectId)) {
                        o = !0;
                        break
                    }
                }
                if (!t[i].monsterData.isQuestMonster && !t[i].monsterData.isBoss && !t[i].monsterData.isMiniBoss && o) return t[i]
            }
        return null
    }, r.prototype.getDropDomFromMonster = function(e) {
        if (!e || !e.more) return null;
        for (var t = 0; t < e.more.getChildren()
            .length; t++) {
            var i = e.more.getChildren()[t];
            if (i.dbItem && !i.hasClassName("rareDrop")) return i
        }
        return null
    }, r.prototype.removeInvisibleMonsters = function(e) {
        var t = this;
        return e.filter(function(e) {
            var i = t.isAlreadyTargeted(e.id),
                n = P.getValue("targetedMonsterList", []);
            return i === -1 || e.isVisibleInBestiary || n.splice(i, 1), e.isVisibleInBestiary
        })
    }, r.prototype.isAlreadyTargeted = function(e) {
        var t = P.getValue("targetedMonsterList", []);
        return t.length > 0 ? t.indexOf(e) : -1
    }, r.prototype._updateTargetButtonState = function(e) {
        var t = this.displayTargetedMonsters.getChildren()[0];
        this.isDisplayingTargetedMonsters = e, t.toggleClassName("pressed", e), this.displayTargetedMonsters.toggleClassName("pressed", e)
    }
}
