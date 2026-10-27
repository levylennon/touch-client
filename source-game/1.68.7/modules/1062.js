function(e, t, i) {
    function n(e, t, i) {
        var n = window.gui.databases.SuperAreas,
            o = window.gui.databases.Areas,
            a = window.gui.databases.WorldMaps,
            s = window.gui.playerData.position.worldmapId,
            c = t[i];
        0 === e.length && c && e.push(i);
        for (var l = [], d = 0, p = -1, h = 0; h < e.length; h++) {
            var f = t[e[h]],
                b = o[f.areaId],
                m = a[f.customWorldMap[0]],
                M = m && m.id || n[b.superAreaId].worldmapId;
            M === s ? l.push(e[h]) : (d++, f.areaId !== u.DEBUG_AREA_ID && (p = f.areaId))
        }
        var g = l.length > 0 ? l.length : d,
            _ = "";
        g && (_ = r("ui.monster.presentInAreas", g), _ = _[0].toUpperCase() + _.substr(1));
        var A = o[u.STARTER_AREA_ID].nameId,
            O = o[p] && o[p].nameId;
        if (d)
            if (s === u.STARTER_WORLD_ID) {
                var v = l.length > 0 ? "tablet.area.andOutside" : "tablet.area.outside";
                _ += " (" + r(v, A) + ")"
            } else if (O) {
            var y = l.length > 0 ? "tablet.area.andInside" : "tablet.area.inside";
            _ += " (" + r(y, O) + ")"
        }
        if (c && c.nameId && l.indexOf(i) !== -1) {
            O = window.gui.databases.Areas[c.areaId].nameId;
            var z = c.nameId;
            c.nameId.indexOf(O) === -1 && O !== A && (z += " (" + O + ")"), _ += e.length >= 2 ? " - " + r("tablet.area.favorite") + r("ui.common.colon") + z : r("ui.common.colon") + z
        } else i = null;
        return {
            text: _,
            subareasInMyWorld: l,
            countOutsideMyWorld: d,
            favorite: i,
            centerOn: "nearest"
        }
    }

    function o(e) {
        this.className = e.className || "mapLocationBtn", this.text = e.text || "", a.call(this, {
            className: this.className,
            text: this.text
        }), this.updateParams(e), this.on("tap", this._tapHandler)
    }
    i(1063);
    var a = i(86),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(52),
        l = i(72),
        d = i(506),
        u = i(13);
    t.createMapLocation = function(e, t, i) {
        var a = new l("div", {
                className: "mapLocation"
            }),
            r = n(e, t, i);
        return a.createChild("div", {
            text: r.text,
            className: "mapLocationText"
        }), r.subareasInMyWorld && r.subareasInMyWorld.length ? (a.appendChild(new o({
            subareaIds: r.subareasInMyWorld,
            favorite: r.favorite,
            centerOn: r.centerOn
        })), a) : a
    }, s(o, a), t.MapLocationButton = o, o.prototype._tapHandler = function() {
        "zaap" === this.type && window.gui.emit("CompassUpdateMessage", {
            type: "zaap",
            worldX: this.x,
            worldY: this.y
        }), "house" === this.type && window.gui.emit("CompassUpdateMessage", {
            type: "estate",
            worldX: this.x,
            worldY: this.y,
            name: this.name
        }), "quest" === this.type && window.gui.emit("CompassUpdateMessage", {
            type: d.COMPASS_TYPE_QUEST,
            worldX: this.x,
            worldY: this.y
        }), void 0 !== this.x ? c.open("worldMap", {
            x: this.x,
            y: this.y
        }) : this.subareaId ? c.open("worldMap", {
            subarea: this.subareaId
        }) : this.subareaIds && c.open("worldMap", {
            subareas: this.subareaIds,
            favorite: this.favorite,
            centerOn: this.centerOn,
            sameWorld: this.sameWorld
        })
    }, o.prototype.updateParams = function(e) {
        this.type = e.type, this.subareaId = e.subareaId, this.subareaIds = e.subareaIds, this.favorite = e.favorite, this.centerOn = e.centerOn, this.sameWorld = e.sameWorld, this.x = e.x, this.y = e.y, this.name = e.name
    }
}
