function(e, t, i) {
    function n() {
        this.entities = [], this._setupListeners()
    }

    function o(e) {
        var t = !1,
            i = d.gui.playerData.characters.getControlledCharacter()
            .spellData.spells[e];
        return i && i.spellLevel && i.spellLevel.effects.filter(function(e) {
                return !e.isPreview && e.effectId === a.ACTION_THROW_CARRIED_CHARACTER
            })
            .length >= 1 && (t = !0), t
    }
    var a = i(476),
        r = i(14),
        s = i(691),
        c = i(913),
        l = i(13),
        d = r();
    e.exports = n, n.prototype._setupListeners = function() {
        var e = d.gui;
        e.fightManager.on("GameFightTurnStart", function(t) {
            var i = e.fightManager.getFighter(t);
            i && i.setStartTurnCell(i.data.disposition.cellId)
        })
    }, n.prototype.cleanMovementPreview = function() {
        d.actorManager.getActorsIDList()
            .forEach(function(e) {
                var t = d.actorManager.getActor(e);
                t && t.setHueAlpha(1)
            }), this.entities.forEach(function(e) {
                e.remove()
            }), this.entities = []
    }, n.prototype.displayPreview = function(e) {
        var t = this,
            i = o(e),
            n = d.gui.damagePreview.damagePreviewManager.movementPreview;
        d.actorManager.getActorsIDList()
            .forEach(function(e) {
                var o = d.actorManager.getActor(e),
                    a = n[o.cellId];
                if (a && o.cellId !== a) {
                    var r = o.getFighter();
                    if (r && !o.isInvisibleInFight()) {
                        var u = d.actorManager.getActorsOnCell(a)[0];
                        if (!(i && o.carriedEntity || !i && r.data.isCarryied)) {
                            var p = c.cellCoord[a],
                                h = new s({
                                    scene: d.isoEngine.mapScene,
                                    x: p.x,
                                    y: p.y,
                                    position: a
                                }),
                                f = o.look,
                                b = o.animSymbol;
                            h.setLook(f, {}, function() {
                                h.animManager.assignSymbol({
                                    id: b.id,
                                    base: "AnimStatique",
                                    direction: b.direction
                                })
                            }), o.setHueAlpha(Math.min(o.hue[3], l.MOVEMENT_PREVIEW_ALPHA)), u && u.setHueAlpha(Math.min(u.hue[3], l.MOVEMENT_PREVIEW_SWAP_ALPHA)), t.entities.push(h)
                        }
                    }
                }
            })
    }
}
