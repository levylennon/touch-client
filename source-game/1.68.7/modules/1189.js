function(e, t, i) {
    function n(e) {
        this._prisms = e, this._worldMap = null, this._conquestUIList = new d({
            noBreadcrumb: !0,
            emitOnSelectItem: !0
        }), this._conquestUIList.presenter = this, this._conquestUIList.setSubitemsGetter(r), this._conquestUIList.setFilter(a, o), this._conquestUIList.on("subitemSelected", s), this._conquestUIList.on("itemDeployed", c), this._subAreas = null, this._worldMapLoaded = !1, this._isUiLoaded = !1, this._subareaToShow = null, this._deferredActionQueue = new M, this.currentSearchAreasMap = {};
        var t = this;
        window.gui.on("PrismsListMessage", function(e) {
            function i() {
                t._prisms.setPrisms(e.prisms), t._updateWorldMapIcons(), t.loadUILists()
            }
            t._worldMapLoaded ? i() : t._deferredActionQueue.enqueue(i)
        }), window.gui.on("PrismsListUpdateMessage", function(e) {
            function i() {
                t._prisms.updatePrisms(e.prisms), t._updateWorldMapIcons(), t.loadUILists()
            }
            t._worldMapLoaded ? i() : t._deferredActionQueue.enqueue(i)
        })
    }

    function o(e, t) {
        var i = this.presenter.currentSearchAreasMap,
            n = r(e, this.presenter),
            o = n[t];
        return !!o && Boolean(i[o.id])
    }

    function a() {
        return !0
    }

    function r(e, t) {
        var i = [],
            n = t || this.presenter,
            o = e.info;
        return isNaN(o) ? o === g ? n._prisms.forEachEmptyPrism(function(e) {
            var t = n._subAreas[e.subAreaId];
            t && (t.text = t.nameId, i.push(t))
        }) : o === _ && n._prisms.forEachPrism(function(e) {
            var t = n._subAreas[e.subAreaId];
            t && (t.text = t.nameId, i.push(t))
        }) : n._prisms.forEachActivePrism(function(e) {
            var t = n._subAreas[e.subAreaId];
            t && (t.text = t.nameId, i.push(t))
        }, o), i.sort(f.createStringCompareFunc()), i
    }

    function s(e) {
        var t = this.presenter,
            i = e.data.id;
        t._worldMap.clearSubAreaHighlights(i), t._highlightSubArea(i), t._worldMap.centerOnSubArea(i)
    }

    function c(e) {
        if (this.isItemDeployed(e)) {
            var t = this.presenter,
                i = r(e, t);
            p("TAB"), t._worldMap.clearSubAreaHighlights();
            for (var n in i) {
                var o = i[n];
                t.currentSearchAreasMap[o.id] && t._highlightSubArea(o.id)
            }
        }
    }
    var l = i(130),
        d = i(1060),
        u = i(522),
        p = i(91)
        .playUiSound,
        h = i(524),
        f = i(16),
        b = i(17)
        .getText,
        m = i(1190),
        M = i(1191),
        g = "Conquerable",
        _ = "AllTerritories";
    e.exports = n, n.prototype.clear = function() {
        this._worldMap = null, this._worldMapLoaded = !1, this._isUiLoaded = !1, this._subareaToShow = null, this._deferredActionQueue.clear(), this._prisms.clear()
    }, n.prototype.setWorldMap = function(e) {
        1 === e._worldMapId && (this._worldMap = e, this._worldMapLoaded = !0, this._deferredActionQueue.signal())
    }, n.prototype.selectSubarea = function(e) {
        if (!this._isUiLoaded) return void(this._subareaToShow = e);
        this._subareaToShow = null;
        var t = this._selectSublist("AllTerritories");
        t.selectItem(e)
    }, n.prototype._selectSublist = function(e) {
        return this._conquestUIList.selectItem(e)
            .sublist
    }, n.prototype._updateWorldMapIcons = function() {
        var e = this;
        this._prisms.forEachEmptyPrism(function(t) {
            e._worldMap.removeIcon(t.subAreaId)
        }), this._prisms.forEachChangingActivePrism(function(t) {
            var i = m.getIconInfo(t);
            e._worldMapLoaded ? (e._worldMap.removeIcon(i.id), e._worldMap.addIcon(i, "icon_" + i.gfx)) : console.error("map not loaded!")
        })
    }, n.prototype._matchesSearchTerm = function(e, t) {
        return !e || t.toLowerCase()
            .indexOf(e.toLowerCase()) !== -1
    }, n.prototype.createList = function(e) {
        var t = this,
            i = [{
                id: _,
                nameId: b("ui.pvp.conquestAllAreas")
            }, {
                id: g,
                nameId: b("ui.pvp.conquestCapturableAreas")
            }, {
                id: u.PRISM_STATE_NORMAL,
                nameId: b("ui.prism.cartography.normal")
            }, {
                id: u.PRISM_STATE_WEAKENED,
                nameId: b("ui.prism.cartography.weakened")
            }, {
                id: u.PRISM_STATE_VULNERABLE,
                nameId: b("ui.prism.cartography.vulnerable")
            }];
        i.forEach(function(e) {
            t._conquestUIList.addItem(e.nameId, e.id)
        }), this._conquestUIList.getDom(e), this.parentElt = e
    }, n.prototype.loadUILists = function() {
        var e = this;
        l.getAllDataMap("SubAreas", function(t, i) {
            return t ? console.error("WorldMapWindow: getAllDataAreas error", t) : (e._subAreas = i, void(e._conquestUIList.elt && (e._conquestUIList.refresh(), e._conquestUIList.refreshFilter())))
        })
    }, n.prototype._highlightSubArea = function(e) {
        var t = h.entities.prism[e];
        if (t && t.prism) {
            var i = t.getAlliance(),
                n = f.hexToRgb(i.allianceEmblem.backgroundColor.toString(16));
            this._worldMap.addSubAreaHighlight(e, [n[0] / 255, n[1] / 255, n[2] / 255, .5])
        } else this._worldMap.addSubAreaHighlight(e, [1, 0, 0, .25])
    }, n.prototype.search = function(e) {
        var t = "" === e,
            i = "";
        t || (i = f.simplifyString(e));
        var n = {},
            o = this;
        this._prisms.forEachPrism(function(e) {
            if (!e) return void console.error(new Error("Cannot find prism"));
            if (o._subAreas) {
                var a = o._subAreas[e.subAreaId];
                a && (t || o._matchesSearchTerm(i, a.nameId)) && (n[a.id] = !0)
            }
        }), this.currentSearchAreasMap = n, this._conquestUIList.elt && this._conquestUIList.refreshFilter()
    }, n.prototype.resize = function() {
        if (this._conquestUIList.elt) {
            this._conquestUIList.refresh();
            var e = this._conquestUIList.list,
                t = this.parentElt;
            e.setStyle("max-height", t.rootElement.clientHeight + "px")
        }
    }
}
