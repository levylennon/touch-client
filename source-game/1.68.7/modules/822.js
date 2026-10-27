function(e, t, i) {
    function n() {
        o.call(this), this._reset()
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = i(130),
        s = i(91),
        c = i(113),
        l = i(34)
        .logger,
        d = 1;
    a(n, o), e.exports = n, n.prototype.disconnect = function() {
        this._reset()
    }, n.prototype._reset = function() {
        this.mapId = 0, this.subAreaId = 0, this.worldmapId = 0, this.mapPosition = null, this.subArea = null, this.area = null, this.superArea = null, this.coordinates = {
            posX: 0,
            posY: 0
        }, this.isInMyHouse = !1, this.currentMapHouses = {}
    }, n.prototype.initialize = function(e) {
        function t(e) {
            o.currentMapHouses = {}, o.emit("mapChanged", e)
        }

        function i(t, i) {
            o.mapId = t.mapId, o.instantiated = t.instantiated, o.parallel = t.parallel, r.getObject("MapPositions", t.mapId, function(n, a) {
                if (n) return console.error("MapPositions missing or error", t.mapId, n);
                o.mapPosition = a;
                var c = i ? i.worldX : a.posX,
                    l = i ? i.worldY : a.posY;
                return o.coordinates.posX = c, o.coordinates.posY = l, o.subArea && o.subArea.id === t.subAreaId && o.subAreaId === t.subAreaId ? (o.emit("mapUpdate"), void s.mapChange(o.subArea.ambientSounds, a.sounds)) : (o.subAreaId = t.subAreaId, void r.getDataMap("SubAreas", [o.subAreaId], null, function(t, i) {
                    if (t) return console.warn("SubAreas error", t);
                    var n = i[o.subAreaId];
                    s.mapChange(n.ambientSounds, a.sounds), o.subArea = n, o.area = e.databases.Areas[n.areaId], o.superArea = e.databases.SuperAreas[o.area.superAreaId];
                    var r = a.worldMap >= 0 ? a.worldMap : o.superArea.worldmapId;
                    o.worldmapId !== r && (o.worldmapId = r, o.emit("worldMapUpdate")), o.emit("mapUpdate")
                }))
            })
        }

        function n(e) {
            var t = e.currentHouse;
            if (t) {
                if (t.displayedName = t.ownerName, "?" !== t.ownerName && "" !== t.ownerName) {
                    var i = new c(l, t.ownerName);
                    t.displayedName = i.getForDisplay()
                }
                var n = window.gui.playerData;
                o.isInMyHouse = t.ownerId === n.identification.accountId, o.emit("myHouseNotification", {
                    isInMyHouse: o.isInMyHouse,
                    msg: e
                })
            } else !t && o.isInMyHouse && (o.isInMyHouse = !1, o.emit("myHouseNotification", {
                isInMyHouse: o.isInMyHouse
            }))
        }
        var o = this;
        e.on("mapComplementaryInformationsData", function(e) {
            t(e), "MapComplementaryInformationsWithCoordsMessage" === e._messageType ? i(e, {
                worldX: e.worldX,
                worldY: e.worldY
            }) : "MapComplementaryInformationsDataInHouseMessage" === e._messageType ? i(e, e.currentHouse) : i(e), n(e)
        }), window.dofus.connectionManager.on("RealEstatePropertiesMessage", function(e) {
            function t(e, t, i) {
                for (var n = o.getHousePropertiesByOwnerAndModelId(t, i), a = 0, r = 0; r < n.length; r++) n[r].houseId === e && (a = r);
                return a
            }
            var i = e.houses;
            0 !== i.length && (i.forEach(function(e) {
                o.currentMapHouses[e.houseId] = e
            }), i.forEach(function(e) {
                if (o.currentMapHouses[e.houseId]._displayedName = e.ownerName, "?" !== e.ownerName && "" !== e.ownerName) {
                    var i = new c(l, e.ownerName);
                    o.currentMapHouses[e.houseId]._displayedName = i.getForDisplay(), window.gui.playerData.isAbleToSeeId() && (o.currentMapHouses[e.houseId]._displayedName += " (" + e.houseId + ")");
                    var n = t(e.houseId, e.ownerName, e.modelId);
                    n > 0 && (o.currentMapHouses[e.houseId]._displayedName += " (" + n + ")")
                }
            }))
        })
    }, n.prototype.getHousePropertiesById = function(e) {
        return this.currentMapHouses[e]
    }, n.prototype.getHousePropertiesByInteractiveId = function(e) {
        var t = this,
            i = [];
        return Object.keys(this.currentMapHouses)
            .forEach(function(n) {
                t.currentMapHouses[n].doorsOnMap.indexOf(e) >= 0 && i.push(t.currentMapHouses[n])
            }), i
    }, n.prototype.getHousePropertiesByOwnerAndModelId = function(e, t) {
        var i = this,
            n = [];
        return Object.keys(this.currentMapHouses)
            .forEach(function(o) {
                i.currentMapHouses[o].ownerName === e && i.currentMapHouses[o].modelId === t && n.push(i.currentMapHouses[o])
            }), n
    }, n.prototype.isGlobalSubArea = function() {
        return this.instantiated === d
    }
}
