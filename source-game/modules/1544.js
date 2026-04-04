function(e, t, i) {
    function n(e) {
        var t = window.isoEngine.mapRenderer.map;
        if (!t) return console.error(new Error("Cannot get mark shape, map is not ready yet")), [];
        var i = 0 === e.cellsType ? r.getCircleArea : r.getCrossArea;
        return i(t.cells, e.cellId, e.zoneSize)
    }

    function o(e, t) {
        var i = window.background,
            a = window.isoEngine,
            r = a.mapRenderer.map;
        return r ? void p.getDataMap("SpellEffects", [e.effectId], null, function(o, a) {
            var r = a && a[e.effectId];
            if (o) console.error("Unable to retrieve the effects visibility for " + e.effectId + ", " + o);
            else if (r && !r.visibleOnTerrain) return t();
            _[e.markId] = e;
            var l = e._glyph,
                u = null,
                p = "",
                h = "",
                A = {
                    markId: e.markId,
                    sourceId: e.markAuthorId,
                    spellId: e.markSpellId,
                    type: e.markType
                };
            if (0 === e.cells.length) return p = "rgba(0, 0, 0, " + M + ")", h = "rgba(0, 0, 0, " + g + ")", u = new d([], {
                color: h,
                outline: p,
                data: A
            }), i.addZone(u, "mark:" + e.markId), t();
            for (var O = 0, v = e.cells.length; O < v; O++) {
                var y = e.cells[O],
                    z = y.cellId,
                    w = c.parseIndexedColor(y.cellColor)
                    .color;
                p = "rgba(" + w.r * m + "," + w.g * m + "," + w.b * m + ", " + M + ")", h = "rgba(" + w.r + "," + w.g + "," + w.b + ", " + g + ")";
                var T = n(y);
                if (A = {
                        markId: e.markId,
                        markCell: z,
                        markSize: y.zoneSize,
                        sourceId: e.markAuthorId,
                        spellId: e.markSpellId,
                        type: e.markType
                    }, u = new d(T, {
                        color: h,
                        outline: p,
                        data: A
                    }), l) {
                    var C = s.cellCoord[z];
                    l.x = C.x, l.y = C.y + b.y, l.position = z + b.position, l.animManager.assignSymbol(f, !1), u.gfx = l
                }
                i.addZone(u, "mark:" + e.markId)
            }
            return t()
        }) : a.once("mapLoaded", function() {
            o(e, t)
        })
    }

    function a(e, t) {
        return e._glyphGfxId && !e._glyph ? (e._glyph = new l({
            scene: window.isoEngine.mapScene
        }), void u.loadAnimationManager(e._glyph, "bone", e._glyphGfxId + "/FX", function() {
            o(e, t)
        })) : void o(e, t)
    }
    var r = i(734),
        s = i(913),
        c = i(475),
        l = i(696),
        d = i(1499),
        u = i(697),
        p = i(130),
        h = i(18),
        f = {
            base: "FX",
            direction: 0
        },
        b = {
            y: -3,
            position: -.1
        },
        m = 1 / 1.3,
        M = .9,
        g = .3,
        _ = {};
    t.addMark = function(e) {
        window.isoEngine.fightSequence.addAnimSequence(function(t) {
            o(e.mark, t)
        })
    }, t.removeMark = function(e) {
        delete _[e.markId];
        var t = window.background;
        window.isoEngine.fightSequence.addAnimSequence(function(i) {
            return t.deleteZoneById("mark:" + e.markId, function(e) {
                var t = e.gfx;
                e.gfx = null, t && t.animManager.assignSymbol(f, !1, function() {
                    t.remove()
                })
            }), i()
        })
    }, t.triggerGlyphTrap = function(e) {
        var t = window.background.getDataOfZoneId("mark:" + e.markId);
        return t ? (e._spellId = t.spellId, void window.isoEngine.fightSequence.addAnimSequence(function(e) {
            return e()
        })) : void console.warn("No data found for zone: mark:" + e.markId)
    }, t.syncMarks = function(e) {
        h.each(e, function(e, t) {
            a(e, t)
        }, function(e) {
            if (e) return console.error("Could not sync marks", e)
        })
    }, t.clearMarks = function() {
        _ = {}
    }, t.getCellIdsAffectedByMarks = function() {
        for (var e = {}, t = Object.keys(_), i = 0; i < t.length; i++)
            for (var o = _[t[i]], a = 0; a < o.cells.length; a++)
                for (var r = n(o.cells[a]), s = 0; s < r.length; s += 1) {
                    var c = r[s];
                    e[c] || (e[c] = []), e[c].push(o)
                }
        return e
    }
}
