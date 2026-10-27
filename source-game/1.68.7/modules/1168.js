function(e, t, i) {
    // WorldMapWindow
    function n() {}

    function o() {
        p.call(this, {
            className: ["WorldMapWindow", "withoutLeftColumn"],
            plusButton: !0,
            minusButton: !0,
            positionInfo: {
                width: "w",
                height: "h",
                isDefault: !0
            },
            title: h("ui.cartography.title")
        }), 
        this.status = {
            isWorldMapRefreshing: !1,
            isLoading: !1,
            openAtInfo: {},
            lastWindowInfo: {
                x: null,
                y: null,
                w: null,
                h: null
            }
        }, 
        this._worldMap = null,
        this._conquestPresenter = new g(new A),
        this._taxCollectors = new v,
        this._poiUpdater = null,
        this._optionButtonsLoaded = !1,
        this._buttonBox = null,
        this._optionButtons = null,
        this._maxContentSize = null,
        this.minusButton.hide(),
        this.plusButton.hide(),
        this._isOpened = !1,
        this.once("open", function(e) {
            this._addSpinner();
            var t = {
                x: b.mapLeft,
                y: b.mapTop,
                width: Math.round(b.mapWidth / 2),
                height: Math.round(b.mapHeight / 2)
            };
            m.positionWindow(this.id, t),
            this.status.lastWindowInfo.x = this.position.x,
            this.status.lastWindowInfo.y = this.position.y,
            this.status.lastWindowInfo.w = this.position.width,
            this.status.lastWindowInfo.h = this.position.height;
            var i = this;
            this._createWorldMap(function(t) {
                return t ? (i._removeSpinner(), console.error(t)) : (i._createDom(), i._setEvents(), i._poiUpdater = new u(i._worldMap), i.on("open", i._onOpen), void i._onOpen(e))
            })
        }),
        this.on("close", this._onClose),
        window.gui.on("disconnect", this._onDisconnect.bind(this)),
        this._isConquestListDisplayed = !1,
        this._isMaximized = !1
    }

    function a(e, t) {
        var i = window.gui.databases,
            n = window.gui.playerData.position.worldmapId;
        y.getDataArray("SubAreas", e, function(e, o) {
            if (e) return t(e);
            var a = [];
            return o.forEach(function(e) {
                if (e.areaId !== z.DEBUG_AREA_ID) {
                    var t = i.Areas[e.areaId],
                        o = i.SuperAreas[t.superAreaId],
                        r = e.customWorldMap[0] || o.worldmapId;
                    r === n && a.push(e.id)
                }
            }), t(null, a)
        })
    }

    function r(e, t) {
        var i = T + e;
        return O.getValue(i, t)
    }

    function s(e, t) {
        var i = T + e;
        O.setValue(i, t)
    }
    i(1169);
    var c = i(88)
        .addTooltip,
        l = i(56)
        .inherits,
        d = i(1170),
        u = i(1188),
        p = i(70),
        h = i(17)
        .getText,
        f = i(86),
        b = i(54)
        .dimensions,
        m = i(52),
        M = i(603),
        g = i(1189),
        _ = i(943),
        A = i(1192),
        O = i(60),
        v = i(1193),
        y = i(130),
        z = i(13),
        w = 216,
        T = "mapButtons-",
        C = [0, 1, 0, .25],
        I = [0, .2, 1, .25],
        S = {
            temples: 1,
            markets: 2,
            workshops: 3,
            miscellaneous: 4,
            dungeons: 6,
            possessions: 7,
            lairs: 9
        };
    l(o, p),
    e.exports = o,
    o.prototype._onDisconnect = function() {
        this._conquestPresenter.clear(),
        this._worldMap && this._worldMap.clear(),
        this._optionButtonsLoaded && this._resetOptionsButtons()
    },
    o.prototype._onClose = function() {
        this.status.isWorldMapRefreshing && this._worldMap.stopRefreshing(),
        this._buttonBox && this._buttonBox.addClassNames("hidden"),
        this._worldMap.clearSubAreaHighlights(),
        this._searchBox.setValue(""),
        this._conquestPresenter.search(""),
        this._isOpened = !1
    },
    o.prototype._centerAndHighlight = function(e, t) {
        function i(t) {
            if (!(t.length < 1)) {
                o._worldMap.clearSubAreaHighlights();
                for (var i = 0; i < t.length; i++) {
                    var n = t[i] === r.favorite ? I : C;
                    o._worldMap.addSubAreaHighlight(t[i], n)
                }
                if (e) this._worldMap.centerToPosition(s);
                else {
                    var a;
                    switch (r.centerOn) {
                        case "favorite":
                            a = r.favorite;
                            break;
                        case "nearest":
                            a = o._worldMap.getNearestSubarea(t);
                            break;
                        default:
                            a = t[0]
                    }
                    o._worldMap.centerOnSubArea(a)
                }
            }
        }
        t = t || n;
        var o = this,
            r = this.status.openAtInfo,
            s = {
                posX: window.gui.playerData.position.coordinates.posX,
                posY: window.gui.playerData.position.coordinates.posY
            };
        if (r.subareaConquest) this._conquestPresenter.selectSubarea(r.subareaConquest);
        else if (r.subarea) this._worldMap.clearSubAreaHighlights(), this._worldMap.addSubAreaHighlight(r.subarea, C), e ? this._worldMap.centerToPosition(s) : this._worldMap.centerOnSubArea(r.subarea);
        else if (r.subareas) {
            var c = r.subareas;
            if (r.sameWorld) return a(c, function(e, n) {
                e ? (console.error(e), i(c)) : i(n), t()
            });
            i(c)
        } else this._worldMap.centerToPosition(r.coords);
        return t()
    },
    o.prototype._onOpen = function(e) {
        var t = this,
            i = window.gui;
        e = e || {};
        var n = Boolean(e.centerOnPlayer);
        window.dofus.sendMessage("QuestListRequestMessage"), this._cropWorldMapToWindow();
        var o = {
            posX: i.playerData.position.coordinates.posX,
            posY: i.playerData.position.coordinates.posY
        };
        return void 0 !== e.subarea ? this.status.openAtInfo = {
            subarea: e.subarea
        } : void 0 !== e.subareas ? this.status.openAtInfo = {
            subareas: e.subareas,
            favorite: e.favorite,
            centerOn: e.centerOn,
            sameWorld: e.sameWorld
        } : void 0 !== e.subareaConquest ? this.status.openAtInfo = {
            subareaConquest: e.subarea
        } : (void 0 !== e.x && void 0 !== e.y && (o.posX = e.x, o.posY = e.y), this.status.openAtInfo = {
            coords: o
        }, e.openedFromChat || (this.status.openAtInfo.subarea = window.gui.playerData.position.subAreaId)), this._isOpened && i.playerData.position.worldmapId === this._worldMap.getDisplayedWorldmapId() ? this._centerAndHighlight(n) : void(this.status.isLoading || (this.status.isLoading = !0, this._addSpinner(), this._worldMap.initialize(o, function() {
            return t.status.isWorldMapRefreshing = !0, t._removeSpinner(), t.status.isLoading = !1, t._isOpened = !0, t.openState ? void t._centerAndHighlight(n, function() {
                var e = i.playerData.position.coordinates;
                t._worldMap.setIconPosition("userPosition", e.posX, e.posY), t._poiUpdater.updatePois(), t._taxCollectors.updateTaxCollectors(), t._conquestPresenter.setWorldMap(t._worldMap), t._taxCollectors.setWorldMap(t._worldMap),
                    t._optionButtonsLoaded ? t._refreshOptionsButtonsSelections() : (t._createOptionsButtons(), t._createConquestButton()), 1 === t._worldMap.getDisplayedWorldmapId() ? t.conquestButton.show() : t.conquestButton.hide()
            }) : t._onClose()
        })))
    },
    o.prototype._addSpinner = function() {
        this.windowBodyWrapper.addClassNames("spinner")
    },
    o.prototype._removeSpinner = function() {
        this.windowBodyWrapper.delClassNames("spinner")
    },
    o.prototype._getMaxContentSize = function() {
        if (!this._maxContentSize) {
            var e = this._getCurrentInnerBoundaries();
            this._maxContentSize = {
                width: b.windowFullScreenWidth - (this.position.width - e.width),
                height: b.windowFullScreenHeight - (this.position.height - e.height)
            }
        }
        return this._maxContentSize
    },
    o.prototype._getCurrentInnerBoundaries = function() {
        var e = this.rightColumn.getComputedStyles("width", "height");
        return {
            width: parseInt(e.width, 10),
            height: parseInt(e.height, 10)
        }
    },
    o.prototype._cropWorldMapToWindow = function() {
        var e = this._getMaxContentSize(),
            t = this._getCurrentInnerBoundaries();
        this._worldMap.crop((e.width - t.width) / 2, (e.height - t.height) / 2, t.width, t.height)
    },
    o.prototype._exitFullScreen = function() {
        this.setStyles({
            width: this.status.lastWindowInfo.w + "px",
            height: this.status.lastWindowInfo.h + "px",
            webkitTransform: "translate3d(" + this.status.lastWindowInfo.x + "px," + this.status.lastWindowInfo.y + "px,0)"
        }), this.position.x = this.status.lastWindowInfo.x, this.position.y = this.status.lastWindowInfo.y, this.position.width = this.status.lastWindowInfo.w, this.position.height = this.status.lastWindowInfo.h, this.emit("resize", !1)
    },
    o.prototype._setEvents = function() {
        var e = this,
            t = window.gui;
        t.playerData.position.on("mapUpdate", function() {
            if (e.openState) {
                if (e._worldMap.isLoading()) {
                    var t = this.coordinates.posX,
                        i = this.coordinates.posY;
                    e._worldMap.once("loaded", function() {
                        e._worldMap.setIconPosition("userPosition", t, i), e._worldMap.centerToMyPosition()
                    })
                } else e._worldMap.setIconPosition("userPosition", this.coordinates.posX, this.coordinates.posY), e._worldMap.centerToMyPosition();
                e.status.isLoading && (e.status.openAtInfo = {
                    coords: this.coordinates
                })
            }
        }), this.on("repositioned", function() {
            e.emit("resize", !0)
        }), this.on("positioned", function() {
            e.status.lastWindowInfo.x = e.position.x, e.status.lastWindowInfo.y = e.position.y, e._updateMySize()
        }), t.playerData.position.on("worldMapUpdate", function() {
            e._onOpen(), e._poiUpdater.updatePois()
        })
    },
    o.prototype._createWorldMap = function(e) {
        var t = this;
        this.leftColumn = this.createChild("div", {
            className: "leftColumn"
        }), this.rightColumn = this.createChild("div", {
            className: "rightColumn"
        }), this.searchBlock = this.leftColumn.createChild("div", {
            className: "searchBlock"
        }), this._searchBox = this.searchBlock.appendChild(new _), this._searchBox.on("search", function(e) {
            t._conquestPresenter.search(e)
        }), this.listWrapper = this.leftColumn.createChild("div", {
            className: "listWrapper"
        }), this._worldMap = new d, this.rightColumn.appendChild(this._worldMap), this.windowBody.appendChild(this.leftColumn), this.windowBody.appendChild(this.rightColumn), this._worldMap.setupUI(this);
        var i = this._getMaxContentSize();
        this._worldMap.setDimensions(i.width, i.height), this._cropWorldMapToWindow(), this._worldMap.addClassNames("centerMap"), this._worldMap.preloadGenericAssets(e)
    },
    o.prototype._createOptionsButtons = function() {
        var e = this;
        this._optionButtons = {}, this._buttonBox = this.windowBody.createChild("div", {
            className: ["buttonBox", "hidden"]
        });
        var t = r("grid", !1);
        this._worldMap.setGridVisibility(t), this._buttonBox.appendChild(this._createToggleButton("grid", t, h("ui.option.displayGrid"), function() {
            e._worldMap.setGridVisibility(this.selected), s("grid", this.selected)
        }));
        var i = r("landmarks", !0);
        this._worldMap.setVisibilityOfIconType("customFlag", i), this._worldMap.setVisibilityOfIconType("userPosition", i), this._worldMap.setVisibilityOfIconType("questObjective", i), this._worldMap.setVisibilityOfIconType("hint", i), this._buttonBox.appendChild(this._createToggleButton("landmarks", i, h("ui.cartography.flags"), function() {
            e._worldMap.setVisibilityOfIconType("customFlag", this.selected), e._worldMap.setVisibilityOfIconType("userPosition", this.selected), e._worldMap.setVisibilityOfIconType("questObjective", this.selected), e._worldMap.setVisibilityOfIconType("hint", this.selected), s("landmarks", this.selected)
        }));
        var n = r(S.possessions, !0);
        this._worldMap.setVisibilityOfIconType(S.possessions, n), this._buttonBox.appendChild(this._createToggleButton("possessions", n, h("ui.common.possessions"), function() {
            e._setIconsVisibleAndSaveUserPref(S.possessions, this.selected)
        }));
        var o = r(S.temples, !0);
        this._worldMap.setVisibilityOfIconType(S.temples, o), this._buttonBox.appendChild(this._createToggleButton("temples", o, h("ui.map.temple"), function() {
            e._setIconsVisibleAndSaveUserPref(S.temples, this.selected)
        }));
        var a = r(S.markets, !0);
        this._worldMap.setVisibilityOfIconType(S.markets, a), this._buttonBox.appendChild(this._createToggleButton("markets", a, h("ui.map.bidHouse"), function() {
            e._setIconsVisibleAndSaveUserPref(S.markets, this.selected)
        }));
        var l = r(S.workshops, !0);
        this._worldMap.setVisibilityOfIconType(S.workshops, l), this._buttonBox.appendChild(this._createToggleButton("workshops", l, h("ui.map.craftHouse"), function() {
            e._setIconsVisibleAndSaveUserPref(S.workshops, this.selected)
        }));
        var d = r(S.miscellaneous, !0);
        this._worldMap.setVisibilityOfIconType(S.miscellaneous, d), this._buttonBox.appendChild(this._createToggleButton("miscellaneous", d, h("ui.common.misc"), function() {
            e._setIconsVisibleAndSaveUserPref(S.miscellaneous, this.selected)
        }));
        var u = r("prisms", !0);
        this._worldMap.setVisibilityOfIconType("prisms", u), this._buttonBox.appendChild(this._createToggleButton("conquests", u, h("ui.map.conquest"), function() {
            e._setIconsVisibleAndSaveUserPref("prisms", this.selected)
        }));
        var p = r(S.dungeons, !0);
        this._worldMap.setVisibilityOfIconType(S.dungeons, p), this._buttonBox.appendChild(this._createToggleButton("dungeons", p, h("ui.map.dungeon"), function() {
            e._setIconsVisibleAndSaveUserPref(S.dungeons, this.selected)
        }));
        var b = r(S.lairs, !0);
        this._worldMap.setVisibilityOfIconType(S.lairs, b), this._buttonBox.appendChild(this._createToggleButton("lairs", b, h("tablet.ui.map.lair"), function() {
            e._setIconsVisibleAndSaveUserPref(S.lairs, this.selected)
        })), this.optionButton = new f({
            className: "optionButton",
            scaleOnPress: !0
        }, function() {
            e._buttonBox.toggleClassName("hidden")
        }), this.optionButton.insertBefore(this.windowTitle), this.centerButton = new f({
            className: "centerButton",
            scaleOnPress: !0
        }, function() {
            e._worldMap.centerToMyPosition()
        }), c(this.centerButton, h("ui.map.player")), this.centerButton.insertBefore(this.windowTitle), e._optionButtonsLoaded = !0
    },
    o.prototype._createToggleButton = function(e, t, i, n) {
        var o = new f({
            className: ["mapBtn", e]
        }, function() {
            o.selected = !o.selected, o.toggleClassName("selected", this.selected), n.call(this)
        });
        return t ? (o.selected = !0, o.addClassNames("selected")) : o.selected = !1, o.defaultSelected = t, this._optionButtons[e] = o, c(o, i), o
    },
    o.prototype._createConquestButton = function() {
        var e = this;
        this.conquestButton = new f({
            className: "conquestButton",
            text: h("ui.common.conquest")
        }, function() {
            e._isConquestListDisplayed ? (e._isConquestListDisplayed = !1, e.toggleClassName("withoutLeftColumn", !0)) : (e._isConquestListDisplayed = !0, e.toggleClassName("withoutLeftColumn", !1), e._conquestPresenter.createList(e.listWrapper)), e.emit("resize", e._isMaximized)
        }), this.conquestButton.insertBefore(e.optionButton)
    },
    o.prototype._setIconsVisibleAndSaveUserPref = function(e, t) {
        s(e, t), this._worldMap.setVisibilityOfIconType(e, t)
    },
    o.prototype._setIconsVisibleFromUserPref = function(e, t) {
        var i = r(e, t);
        this._worldMap.setVisibilityOfIconType(e, i)
    },
    o.prototype._refreshOptionsButtonsSelections = function() {
        this._setIconsVisibleFromUserPref("grid", !1);
        var e = r("landmarks", !0);
        this._worldMap.setVisibilityOfIconType("customFlag", e), this._worldMap.setVisibilityOfIconType("userPosition", e), this._worldMap.setVisibilityOfIconType("questObjective", e), this._worldMap.setVisibilityOfIconType("hint", e), this._setIconsVisibleFromUserPref(S.possessions, !0), this._setIconsVisibleFromUserPref(S.temples, !0), this._setIconsVisibleFromUserPref(S.markets, !0), this._setIconsVisibleFromUserPref(S.workshops, !0), this._setIconsVisibleFromUserPref(S.miscellaneous, !0), this._setIconsVisibleFromUserPref("prisms", !0), this._setIconsVisibleFromUserPref(S.dungeons, !0), this._setIconsVisibleFromUserPref(S.lairs, !0)
    },
    o.prototype._createDom = function() {
        var e = this;
        M(this, {
            minWidth: w,
            minHeight: w
        }), this.on("resizeStart", function() {
            var t = e._getMaxContentSize();
            e._worldMap.crop(0, 0, t.width, t.height)
        }), this.on("resize", function(t) {
            e._cropWorldMapToWindow(), e._updateMySize(t)
        }), this.plusButton.on("tap", function() {
            m.positionWindow("worldMap")
        }), this.plusButton.show(), this.minusButton.on("tap", function() {
            e._exitFullScreen()
        })
    },
    o.prototype._updateMySize = function(e) {
        if (this.plusButton.toggleDisplay(!e), this.minusButton.toggleDisplay(Boolean(e)), this._isMaximized = e, this._conquestPresenter.resize(), !e) {
            var t = parseInt(this.getStyle("width"), 10),
                i = parseInt(this.getStyle("height"), 10);
            t > .9 * b.windowFullScreenWidth && i > .9 * b.windowFullScreenHeight || (this.status.lastWindowInfo.w = t, this.status.lastWindowInfo.h = i)
        }
    },
    o.prototype._resetOptionsButtons = function() {
        for (var e in this._optionButtons) {
            var t = this._optionButtons[e];
            t.selected = t.defaultSelected, t.toggleClassName("selected", t.selected)
        }
    },
    o.prototype.isMaximized = function() {
        return this._isMaximized
    },
    o.prototype.getWorldMap = function() {
        return this._worldMap
    }
}
