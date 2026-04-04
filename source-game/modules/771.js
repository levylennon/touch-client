function(e, t, i) {
    function n() {
        l.call(this, "div", {
            className: "mapCoordinateDisplay",
            hidden: !0
        }), this._shouldShowMapInfo = !1, this._isTransparent = !0, this._markerCount = 0, this.isCollapsed = !1, this._setupListeners(), this._createContent()
    }

    function o() {
        d.openAllianceCard(this.allianceInfo.allianceId)
    }
    i(772);
    var a = i(88)
        .addTooltip,
        r = i(54)
        .dimensions,
        s = i(16),
        c = i(56)
        .inherits,
        l = i(72),
        d = i(537),
        u = i(437),
        p = i(63),
        h = i(17)
        .getText,
        f = i(524),
        b = i(22),
        m = i(52),
        M = i(501),
        g = i(502),
        _ = i(570),
        A = i(60),
        O = i(86),
        v = i(773),
        y = 12,
        z = 5,
        w = 43,
        T = 54;
    c(n, l), e.exports = n, n.prototype._createContent = function() {
        _(this, {
            isCollapsable: !0,
            title: h("ui.common.coordinates")
        });
        var e = this.createChild("div", {
            className: "mapInfo"
        });
        this._descriptionElement = e.createChild("div"), this._area = this._descriptionElement.createChild("span", {
            className: "areaInfo"
        }), this._subArea = this._descriptionElement.createChild("span"), this._zoneType = this._descriptionElement.createChild("div"), this.coordinatesElement = e.createChild("div", {
            className: "coordsAndLevel"
        }), this._coordinatesInfos = this.coordinatesElement.createChild("span"), this._dangerArea = this.coordinatesElement.createChild("div"), this.uniqueDropsElement = e.createChild("div", {
            className: "uniqueDrops"
        }), this.allianceInfo = this.createChild("div", {
            className: "allianceInfo"
        }), this.allianceTag = this.allianceInfo.createChild("div", {
            className: "tag"
        }), this.allianceEmblem = this.allianceInfo.appendChild(new u({
            width: 35,
            height: 35
        })), this._switchInstanceButton = this.appendChild(new O({
            className: ["greenButton", "switchInstanceButton"],
            text: h("ui.common.switchInstance"),
            hidden: !0
        }, function() {
            var e = window.isoEngine.mapRenderer.getCurrentPaddockInstanceProperties();
            e && m.open("switchFarmInstance")
        })), this._houseMenuButton = this.appendChild(new v), this._smallFlags = this.createChild("div", {
            className: "smallFlagsIcon",
            hidden: !0
        });
        var t = this._smallFlags;
        this._markerBox = this.createChild("div", {
            className: "markerBox",
            hidden: !0
        });
        var i = this._markerBox,
            n = i.createChild("div", {
                className: "minimizeBtn"
            });
        n.createChild("div", {
            className: "icon"
        }), this._markerList = i.createChild("div", {
            className: "markerList"
        }), this._markerList.setStyle("maxHeight", w * z + "px"), p(this), window.foreground.handleTapAfter(this), this.allianceEmblem.on("longtap", o), this.allianceEmblem.allianceInfo = this.allianceInfo, this._isMarkerBoxMinimized = !1, p(n), p(t);
        var a = this._toggleMarkerBox.bind(this);
        n.on("longtap", a), t.on("longtap", a)
    }, n.prototype._toggleMarkerBox = function() {
        this._isMarkerBoxMinimized = !this._isMarkerBoxMinimized, this.toggleClassName("minimizedMarkers", this._isMarkerBoxMinimized)
    }, n.prototype._updateMapInfo = function(e) {
        var t = this,
            i = window.gui.playerData.position;
        if (!i.mapPosition) return e(!1);
        var n = f.entities.prism,
            o = window.gui.playerData.isAbleToSeeId() ? " (" + i.mapId + ")" : "",
            a = i.coordinates.posX + "," + i.coordinates.posY + o,
            r = i.mapPosition.nameId;
        r || (i.area ? r = i.area.nameId : (console.error(new Error("Cannot get area, available: " + Object.keys(i)
            .join(","))), r = "unknown area"), a += ", " + h("ui.common.averageLevel") + " " + i.subArea.level, window.isoEngine.mapRenderer.isFarmOnMap() && window.gui.playerData.isAbleToSeeId() && window.isoEngine.mapRenderer.getCurrentPaddockInstanceProperties() && (a += " (" + window.isoEngine.mapRenderer.getCurrentPaddockInstanceProperties()
            .farmId + ")"));
        var s = window.gui.playerData.characterBaseInformations.level,
            c = i.subArea.level > s && i.area.id !== T;
        this.toggleClassName("tooHighLvl", c), this._dangerArea.toggleClassName("warning", c);
        var l = i.parallel,
            d = window.gui.playerData.position.isGlobalSubArea();
        this._zoneType.toggleClassName("soloZone", l), this._zoneType.toggleClassName("globalZone", d), this._area.setText(r);
        var u = " (" + i.subArea.nameId;
        d && (u += " - " + h("ui.common.globalZone")), u += ")", window.gui.playerData.isAbleToSeeId() && (u += " (" + i.subArea.id + ")"), this._subArea.setText(u), this._coordinatesInfos.setText(a);
        var p = n[i.subArea.id];
        if (p && p.prism) {
            var b = p.getAlliance();
            this.allianceInfo.allianceId = b.allianceId, this.allianceTag.setText("[" + b.allianceTag + "]"), this.allianceEmblem.setValue(b.allianceEmblem, !0), this.allianceInfo.show()
        } else this.allianceInfo.hide();
        this.uniqueDropsElement.hide(), M.getLWUniqueDropsTextBySubArea(i.subAreaId, function(e, i) {
            return e ? console.error(e) : void("" !== i && (t.uniqueDropsElement.setText(h("ui.legendaryWeapon.possibleDrop", i)), t.uniqueDropsElement.show()))
        });
        var m = window.isoEngine.mapRenderer.getPaddocksInstanceProperties()
            .length;
        return this._switchInstanceButton.toggleDisplay(window.isoEngine.mapRenderer.isFarmOnMap() && m > 1), e(!0)
    }, n.prototype.setMapInfoVisibility = function(e) {
        var t = this;
        if (e !== this._shouldShowMapInfo) return this._shouldShowMapInfo = e, e ? this._updateMapInfo(function(e) {
            e && t._appear()
        }) : void(this._markerCount > 0 ? this.addClassNames("noMapInfo") : this._disappear())
    }, n.prototype._appear = function() {
        this._isTransparent && (this._isTransparent = !1, this.show(), s.forceReflow(this), b.tween(this, {
            opacity: 1
        }, {
            time: 100,
            easing: "linear"
        }), this.toggleClassName("noMapInfo", !this._shouldShowMapInfo), this.collapse(this.isCollapsed))
    }, n.prototype._disappear = function() {
        this._isTransparent || (this._isTransparent = !0, b.tween(this, {
            opacity: 0
        }, {
            time: 100,
            easing: "linear"
        }, this.hide))
    }, n.prototype._clear = function() {
        this._isTransparent = !0, this.hide(), this.setStyle("opacity", 0), this.addClassNames("noMapInfo")
    }, n.prototype._setupListeners = function() {
        var e = this,
            t = window.gui;
        t.on("disconnect", function() {
            e._clear()
        }), t.playerData.position.on("mapUpdate", function() {
            if (e._shouldShowMapInfo && !window.gui.fightManager.isInFight()) return e._updateMapInfo(function() {
                e._appear()
            })
        }), window.dofus.connectionManager.on("RealEstatePropertiesMessage", function() {
            if (e._shouldShowMapInfo) return e._updateMapInfo(function() {
                e._appear()
            })
        }), window.dofus.connectionManager.on("FarmSelectionMessage", function() {
            if (e._shouldShowMapInfo) return e._updateMapInfo(function() {
                e._appear()
            })
        }), t.on("resize", function() {
            A.getValue("mapCoordinatePosition", !1) ? e.setStyles({
                top: A.getValue("mapCoordinatePosition-top"),
                left: A.getValue("mapCoordinatePosition-left"),
                right: A.getValue("mapCoordinatePosition-right"),
                bottom: A.getValue("mapCoordinatePosition-bottom")
            }) : e.setStyles({
                left: r.mapLeft + y + "px",
                top: r.mapTop + y + "px"
            })
        });
        var i = t.fightManager;
        i.on("fightEnterPreparation", this._disappear.bind(this)), i.on("fightEnterBattle", this._disappear.bind(this)), i.on("fightEnd", function() {
            e._shouldShowMapInfo && e._appear.bind(e)
        }), this.on("dragEnd", function() {
            A.setValue("mapCoordinatePosition", !0), e.emit("resized"), A.setValue("mapCoordinatePosition-top", e.getStyle("top")), A.setValue("mapCoordinatePosition-left", e.getStyle("left")), A.setValue("mapCoordinatePosition-right", e.getStyle("right")), A.setValue("mapCoordinatePosition-bottom", e.getStyle("bottom"))
        }), this.on("collapse", function(t) {
            e.toggleClassName("noMapInfo", t), e.isCollapsed = t
        })
    }, n.prototype.addMarker = function(e, t) {
        this._markerCount === z && this._createDotDotButton(), this._markerCount++;
        var i = this._markerList.createChild("div", {
            className: "marker"
        });
        i.createChild("div", {
            className: ["icon", e]
        });
        var n = t ? t.split("\n")[0] : "";
        return i.createChild("div", {
            className: "text",
            text: n
        }), a(i, g.process(t)), 1 === this._markerCount && (this._markerBox.show(), this._smallFlags.show(), this._appear()), i
    }, n.prototype.removeMarker = function(e) {
        this._markerCount--, this._markerList.removeChild(e), this._markerCount === z && this._deleteDotDotButton(), 0 === this._markerCount && (this._markerBox.hide(), this._smallFlags.hide(), this._shouldShowMapInfo || this._disappear())
    }, n.prototype._createDotDotButton = function() {
        var e = this._markerBox.createChild("div", {
            className: "dotDotBtn",
            text: "..."
        });
        p(e), e.on("longtap", function() {
            m["switch"]("worldMap")
        }), this._dotDotButton = e
    }, n.prototype._deleteDotDotButton = function() {
        this._markerBox.removeChild(this._dotDotButton), this._dotDotButton = null
    }
}
