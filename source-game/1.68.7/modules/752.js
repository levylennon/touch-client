function(e, t, i) {
    function n() {
        a.call(this);
        var e = this,
            t = window.gui,
            i = t.playerData,
            n = i.position;
        this._init(), r.init(this), l.init(), t.on("connected", this._onConnect.bind(this)), t.on("disconnect", this._onDisconnect.bind(this)), n.on("worldMapUpdate", function() {
            e._changeMap(this.worldmapId)
        }), n.on("mapUpdate", function() {
            e._delayedPois.length && e._addDelayedPois(), i.isFighting && e._compass.setAllMarkersVisibility(!1), e._scheduleRendering()
        }), t.fightManager.on("fightStart", function() {
            e._compass.setAllMarkersVisibility(!1), e._scheduleRendering()
        }), t.fightManager.on("fightEnd", function() {
            e._startQuietAnimationPeriod(3e3), e._compass.setAllMarkersVisibility(!0)
        }), u.on("autoGpsPhoenixes", function() {
            e._compass.showOrHidePhoenixMarkers()
        })
    }

    function o(e, t) {
        d.getObject("MapPositions", e, function(i, n) {
            return i ? t("GPS cannot load MapPositions for map " + e + ": " + i) : n.subAreaId ? void d.getObject("SubAreas", n.subAreaId, function(i, o) {
                if (i) return t("GPS cannot load subarea " + n.subAreaId + ": " + i);
                var a, r = o.entranceMapIds || [],
                    s = o.exitMapIds || [],
                    c = window.gui.databases,
                    l = c.Areas[o.areaId],
                    u = c.SuperAreas[l.superAreaId],
                    p = o.customWorldMap[0] || u.worldmapId,
                    h = window.gui.playerData.position.worldmapId;
                return h !== p && (a = h === M ? r[0] : s[0]), void 0 === a ? t(null, {
                    x: n.posX,
                    y: n.posY,
                    mapId: e,
                    worldMapId: p
                }) : void d.getObject("MapPositions", a, function(e, i) {
                    return e ? t("GPS cannot load MapPositions fo map " + a + ": " + e) : void t(null, {
                        x: i.posX,
                        y: i.posY,
                        mapId: a,
                        worldMapId: p
                    })
                })
            }) : t(null, {
                x: n.posX,
                y: n.posY,
                mapId: e
            })
        })
    }
    var a = i(36)
        .EventEmitter,
        r = i(753),
        s = i(56)
        .inherits,
        c = i(755),
        l = i(756),
        d = i(130),
        u = i(55),
        p = i(17)
        .getText,
        h = i(30),
        f = i(34)
        .logger,
        b = i(757),
        m = i(649),
        M = 1,
        g = 2,
        _ = 12,
        A = "fixed",
        O = 100;
    s(n, a), n.prototype._init = function() {
        this._POIMap = {}, this._POIMap[A] = {}, this._lastPhoenixes = [], this._delayedPois = [], this._isRenderingRequested = !1, this._waitingPoiCount = 0, this._interval = null, this._nextRenderTime = 0, this._compass = window.gui.compass
    }, n.prototype._onConnect = function() {
        this._init()
    }, n.prototype._onDisconnect = function() {
        this._removeAllPois(), h.clearInterval(this._interval), this._interval = null
    }, n.prototype._startQuietAnimationPeriod = function(e) {
        this._compass.setFlashyAnimationEnabled(!1), h.setTimeout(this._compass.setFlashyAnimationEnabled.bind(this._compass, !0), e)
    }, n.prototype._requestUpdatePOI = function(e, t, i, n) {
        e.x === t && e.y === i || (e.x = t, e.y = i, n && (e.nameId = n), e.isDestination && this._compass.updateMarker(e.id, e.x, e.y, e.nameId), this.emit("updatePOI", e))
    }, n.prototype.updatePOI = function(e) {
        this._updatePOI(e), this._scheduleRendering()
    }, n.prototype._updatePOI = function(e) {
        var t = e.id,
            i = e.x,
            n = e.y,
            o = e.nameId,
            a = window.gui.playerData.position.worldmapId,
            r = this._getPOI(t, a);
        if (r) this._requestUpdatePOI(r, i, n, o);
        else {
            if (void 0 === i && void 0 === n) return console.error("unexpected undefined x,y");
            delete e.mapId, this._addPOI(e)
        }
    }, n.prototype._setTrackingEnabled = function(e, t, i) {
        if (t) this._compass.addMarker({
            type: e.id,
            x: e.x,
            y: e.y,
            arrowType: e.categoryId,
            tooltip: e.nameId
        });
        else {
            this._compass.removeMarker(e.id);
            var n = this.getObjectiveId(e),
                o = window.gui.playerData.quests.getQuestIdfromObjectiveId(n);
            i && this.questFollower.unfollowQuest(o)
        }
    }, n.prototype._requestGuildInfo = function() {
        if (window.gui.playerData.guild.hasGuild())
            for (var e in b) {
                var t = b[e];
                window.dofus.sendMessage("GuildGetInformationsMessage", {
                    infoType: t
                })
            }
    }, n.prototype._removeAllPois = function() {
        for (var e in this._POIMap) {
            var t = this._POIMap[e];
            for (var i in t) this._removePOI(i, e)
        }
    }, n.prototype._isDungeonMap = function(e) {
        return e !== g && e !== M && e !== _
    }, n.prototype._addDelayedPois = function() {
        for (var e = this._delayedPois.length, t = 0; t < e; t++) {
            var i = this._delayedPois.shift();
            this._addPOI(i)
        }
        this._scheduleRendering()
    }, n.prototype._scheduleRendering = function() {
        this._nextRenderTime = Date.now() + O, this._isRenderingRequested = !0, this._interval || (this._interval = h.setInterval(this._renderTick.bind(this), O))
    }, n.prototype._renderTick = function() {
        this._isRenderingRequested && (this._waitingPoiCount > 0 || Date.now() < this._nextRenderTime || (this._isRenderingRequested = !1, this._compass.renderAllMarkers()))
    }, n.prototype.addPOI = function(e) {
        this._addPOI(e), this._scheduleRendering()
    }, n.prototype._addPOI = function(e) {
        if (0 === window.gui.playerData.position.worldmapId) return void this._delayedPois.push(e);
        if (e.mapId) {
            this._waitingPoiCount++;
            var t = this;
            d.getObject("MapPositions", e.mapId, function(i, n) {
                return t._waitingPoiCount--, i ? console.error("No MapPosition for POI at " + e.mapId + "; " + i) : void t._addPoiSync(e, n)
            })
        } else {
            var i;
            i = "questObjective" === e.categoryId ? M : window.gui.playerData.position.worldmapId, this._addPoiSync(e, {
                worldMap: i,
                posX: e.x,
                posY: e.y
            })
        }
    }, n.prototype._addPoiSync = function(e, t) {
        var i = t.posX,
            n = t.posY,
            o = window.gui.playerData.position.worldmapId,
            a = t.worldMap || o;
        if (a === -1 && (a = e.worldMapId ? e.worldMapId : o), a === A) return console.error('worldMapId is "fixed"');
        var r = window.gui.databases.WorldMaps[a];
        if (!r) return console.error(new Error("WorldMap missing in DB:" + a));
        a = r.id, this._POIMap[a] || (this._POIMap[a] = {});
        var s = this._POIMap[a][e.id];
        if (s) return this._requestUpdatePOI(s, i, n, e.nameId);
        var l = new c(e);
        l.x = i, l.y = n, l.worldMapId = a, this._POIMap[a][l.id] = l, l.isDestination && this._addDestination(l), this.emit("addPOI", l)
    }, n.prototype.addFlag = function(e, t, i) {
        var n = this._compass.addMarker({
            type: e,
            x: t,
            y: i
        });
        return this._scheduleRendering(), n
    }, n.prototype.removeFlag = function(e) {
        this._compass.removeMarker({
            type: e
        }), this._scheduleRendering()
    }, n.prototype.removePOI = function(e, t, i) {
        if (void 0 !== t) this._removePOI(e, t, i);
        else
            for (var n in this._POIMap) this._removePOI(e, n, i);
        this._scheduleRendering()
    }, n.prototype._removePOI = function(e, t, i) {
        var n = this._getPOI(e, t);
        n && (n.isDestination && this._removeDestination(n, i), delete this._POIMap[t][e], this.emit("removePOI", n), this._POIMap[A] && delete this._POIMap[A][e])
    }, n.prototype._changeMap = function(e) {
        if (void 0 !== e) {
            this._isDungeonMap(e) || this._requestGuildInfo();
            var t, i;
            for (t in this._POIMap[A]) i = this._POIMap[A][t], this._removePOI(t, this._lastWorldMapId), i.mapId = 0, this._addPOI(i);
            var n = this._POIMap[this._lastWorldMapId];
            if (n)
                for (t in n) i = n[t], i.isDestination && this._setTrackingEnabled(i, !1);
            var o = [];
            for (t in this._POIMap[e]) i = this._POIMap[e][t], i.isDestination && (this._setTrackingEnabled(i, !0), o.push(i.id));
            var a = this._compass;
            for (t in a.markers) o.indexOf(t) === -1 && a.removeMarker(t);
            this._scheduleRendering(), this.emit("changedMap", e), this._lastWorldMapId = e
        }
    }, n.prototype._getPOI = function(e, t) {
        var i = this._POIMap[t] || {};
        return i[e]
    }, n.prototype.isActivePOI = function(e) {
        for (var t in this._POIMap)
            if (this._POIMap[t][e]) return !0;
        return !1
    }, n.prototype.getPOIs = function(e) {
        return e = e || window.gui.playerData.position.worldmapId, this._POIMap[e] || {}
    }, n.prototype._addDestination = function(e) {
        e.worldMapId === window.gui.playerData.position.worldmapId && this._setTrackingEnabled(e, !0), this.emit("addDestination", e)
    }, n.prototype._removeDestination = function(e, t) {
        e.worldMapId === window.gui.playerData.position.worldmapId && this._setTrackingEnabled(e, !1, t), this.emit("removeDestination", e)
    }, n.prototype.getQuestObjectivePoiId = function(e) {
        return "quest_" + e
    }, n.prototype.getObjectiveId = function(e) {
        var t = e.id.indexOf("quest_");
        return t < 0 ? 0 : parseInt(e.id.slice(t + 6), 10)
    }, n.prototype.addQuestObjectiveFromObjective = function(e) {
        var t = e.objectiveDb,
            i = e.objectiveId,
            n = e.questId,
            a = e.coords || null,
            r = this,
            s = this.getQuestObjectivePoiId(i);
        if (!this.isActivePOI(s)) {
            var c = t.mapId;
            if (!a) {
                if (c) return o(c, function(e, o) {
                    return e ? console.error("questId: " + n + ", objectiveId: " + i + ", error: " + e) : (o = o || t.coords, void r.addQuestObjectiveFromObjective({
                        objectiveDb: t,
                        objectiveId: i,
                        coords: o,
                        questId: n
                    }))
                });
                a = t.coords
            }
            if (a && void 0 !== a.x && void 0 !== a.y) {
                var l = window.gui.playerData.quests.all[n];
                if (!l) return void console.error(new Error("GPS: Cannot find the quest: " + n + ", objectiveId: " + i));
                for (var d = l.dbQuest ? l.dbQuest.nameId : "", u = "", p = !1, h = 0; h < l.objectives.length; h++) {
                    var b = l.objectives[h];
                    if (b.objectiveId === i) {
                        u = b.text, p = !0;
                        break
                    }
                }
                p || f.error(new Error("GPS: Could not find objectiveId while performing addQuestObjectiveFromObjective for quest " + n + ", objectiveId: " + i));
                var m = {
                    id: s,
                    x: a.x,
                    y: a.y,
                    mapId: c,
                    worldMapId: a.worldMapId,
                    nameId: d + "\n\n" + u + "\n\n(" + a.x + "," + a.y + ")",
                    categoryId: "questObjective",
                    color: {
                        r: 148,
                        g: 185,
                        b: 35,
                        a: 1
                    },
                    isDestination: !0
                };
                this.addPOI(m)
            }
        }
    }, n.prototype.addQuestObjective = function(e, t) {
        var i = window.gui.playerData.quests;
        if (!i[e]) return console.warn("GPS.addQuestObjective: quest id" + e + " is not active.");
        var n = i[e].dbObjectives[t];
        this.addQuestObjectiveFromObjective({
            objectiveDb: n,
            objectiveId: t,
            questId: e
        })
    }, n.prototype.addQuestNextObjective = function(e) {
        var t = window.gui.playerData.quests;
        if (!t.active[e]) return console.warn("GPS.addQuestNextObjective: quest id" + e + " is not active.");
        for (var i = t.active[e], n = 0; n < i.objectives.length; n++) {
            var o = i.objectives[n],
                a = o.objectiveId;
            if (o.objectiveStatus === m.CAN_BE_FINISHED) {
                var r = i.dbObjectives[a];
                this.addQuestObjectiveFromObjective({
                    objectiveDb: r,
                    objectiveId: a,
                    questId: e
                })
            } else if (o.objectiveStatus === m.ACTIVE) {
                var s = this.getQuestObjectivePoiId(a);
                this.isActivePOI(s) && this.removePOI(s)
            }
        }
    }, n.prototype.removeQuestObjectives = function(e) {
        var t = window.gui.playerData.quests.all[e];
        if (!t) return console.warn("GPS.removeQuestObjectives: quest id" + e + " not found.");
        for (var i = 0; i < t.objectives.length; i++) {
            var n = t.objectives[i];
            if (n.objectiveStatus === m.CAN_BE_FINISHED) {
                var o = n.objectiveId,
                    a = this.getQuestObjectivePoiId(o);
                this.removePOI(a)
            }
        }
    }, n.prototype.addAllQuestsObjectives = function() {
        var e = window.gui.playerData.quests;
        for (var t in e.active) this.addQuestNextObjective(t)
    }, n.prototype.addAllFollowedQuestsObjectives = function() {
        var e = window.gui.playerData.quests;
        for (var t in e.active) this.questFollower.isQuestFollowed(t) && this.addQuestNextObjective(t)
    }, n.prototype.isAtLeastOneQuestObjectiveFollowed = function(e) {
        var t = window.gui.playerData.quests.active[e];
        if (!t) return console.warn("GPS.isAtLeastOneQuestObjectiveFollowed: quest id" + e + " not active."), !1;
        for (var i = 0; i < t.objectives.length; i++) {
            var n = t.objectives[i];
            if (n.objectiveStatus !== m.FINISHED) {
                var o = n.objectiveId,
                    a = this.getQuestObjectivePoiId(o);
                if (this.isActivePOI(a)) return !0
            }
        }
        return !1
    }, n.prototype.addCustomFlag = function(e, t, i) {
        i || (i = ""), this.addPOI({
            id: "customFlag_" + e + "_" + t,
            x: e,
            y: t,
            categoryId: "customFlag",
            nameId: p("ui.cartography.customFlag") + "\n\n" + i + "(" + e + "," + t + ")",
            color: {
                r: 255,
                g: 221,
                b: 0,
                a: 1
            },
            isDestination: !0
        })
    }, n.prototype.removeCustomFlag = function(e, t) {
        this.removePOI("customFlag_" + e + "_" + t)
    }, n.prototype.addOrUpdateSpouse = function(e, t, i, n) {
        this.addPOI({
            id: "spouse",
            categoryId: "spouse",
            nameId: p("ui.cartography.positionof", e),
            color: {
                r: 255,
                g: 0,
                b: 137,
                a: 1
            },
            mapId: null !== t ? t : void 0,
            x: i,
            y: n,
            isDestination: !0
        })
    }, n.prototype.removeSpouse = function() {
        this.removePOI("spouse")
    }, n.prototype.autoGpsFlagOptionUpdate = function() {
        u.autoGpsFlags ? this.addAllFollowedQuestsObjectives() : (this._removeAllPois(), this._scheduleRendering())
    }, n.prototype.questFollower = l, e.exports = n
}
