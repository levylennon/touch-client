function(e, t, i) {
    function n() {
        c.call(this, "div", {
            className: "FightersInfo"
        }), this.allies = {}, this.enemies = {};
        var e = this.createChild("div", {
                className: "fighterRow"
            }),
            t = this.createChild("div", {
                className: "fighterRow"
            });
        this.allies.icon = e.createChild("div", {
            className: ["fightMode", "defend", "hidden"]
        }), this._addFightModeToolTip(this.allies.icon, u("ui.common.defenders"), "allies"), this.enemies.icon = t.createChild("div", {
            className: ["fightMode", "attack", "hidden"]
        }), this._addFightModeToolTip(this.enemies.icon, u("ui.common.attackers"), "enemies"), this.allies.slotContainer = e.createChild("div", {
            className: "fighterList"
        }), this.enemies.slotContainer = t.createChild("div", {
            className: "fighterList"
        }), this.targetSlot = this.allies.slotContainer.appendChild(this._createTargetDisplay()), this.allies.slots = [], this.enemies.slots = [];
        for (var i, n = 0; n < f; n += 1) i = this.allies.slotContainer.appendChild(this._createFighterSlot(!0)), this.allies.slots.push(i), i = this.enemies.slotContainer.appendChild(this._createFighterSlot()), this.enemies.slots.push(i)
    }

    function o(e) {
        var t = e.name + " (" + u("ui.common.short.level") + " " + e.level + ") ";
        switch (e._type) {
            case "CharacterMinimalAllianceInformations":
                t += e.guild.guildName + " - [" + e.alliance.allianceTag + "]";
                break;
            case "CharacterMinimalGuildInformations":
                t += e.guild.guildName
        }
        return t
    }

    function a(e, t) {
        e.fighter = t, p.enableTooltip(e, !0), e.setLook(t.entityLook, {
            riderOnly: !0,
            direction: d.DIRECTION_SOUTH_WEST,
            animation: "AnimArtwork",
            boneType: "timeline/",
            skinType: "timeline/"
        })
    }

    function r(e) {
        e.fighter = null, e.clear(), p.enableTooltip(e, !1)
    }
    i(1206);
    var s = i(56)
        .inherits,
        c = i(72),
        l = i(689),
        d = i(730),
        u = i(17)
        .getText,
        p = i(88),
        h = i(524)
        .fightingSide,
        f = 4;
    s(n, c), e.exports = n, n.prototype._addFightModeToolTip = function(e, t, i) {
        var n = this;
        p.addTooltip(e, function() {
            var e = t + u("ui.common.colon") + "\n",
                a = n[i].slots;
            if ("allies" === i) {
                var r = n.targetSlot.fighter;
                e += r.name + " (" + u("ui.common.short.level") + " " + r.level + ")\n"
            }
            for (var s = 0; s < a.length; s += 1) {
                var l = a[s].fighter;
                l && (e += o(l) + "\n")
            }
            return new c("div", {
                text: e
            })
        })
    }, n.prototype._createTargetDisplay = function() {
        var e = new l({
            className: "fighterIcon",
            scale: "fitin"
        });
        return p.addTooltip(e, function() {
            var t = e.fighter;
            return new c("div", {
                text: t.name + " (" + u("ui.common.short.level") + " " + t.level + ")"
            })
        }), p.enableTooltip(e, !1), e
    }, n.prototype._createFighterSlot = function(e) {
        var t = new l({
            className: "fighterIcon",
            scale: "fitin"
        });
        if (p.addTooltip(t, function() {
                return new c("div", {
                    text: o(t.fighter)
                })
            }), p.enableTooltip(t, !1), !e) return t;
        var i = this;
        return t.on("tap", function() {
            i.fight && i.emit("slotTap", this.fighter)
        }), t
    }, n.prototype.reset = function() {
        this.fight = null, this.allies.icon.addClassNames("hidden"), this.enemies.icon.addClassNames("hidden"), r(this.targetSlot);
        for (var e = this.allies.slots, t = this.enemies.slots, i = 0; i < f; i += 1) r(e[i]), r(t[i])
    }, n.prototype.setTarget = function(e) {
        a(this.targetSlot, e)
    }, n.prototype.setFight = function(e, t) {
        this.type = e, this.fight = t, this.allies.icon.delClassNames("hidden"), this.enemies.icon.delClassNames("hidden");
        var i = t.fighters;
        this.setFighters(h.allies, i.allies), this.setFighters(h.enemies, i.enemies)
    }, n.prototype.setFighter = function(e, t, i) {
        a(this[e].slots[i], t)
    }, n.prototype.removeFighter = function(e, t) {
        var i = this[e].slots,
            n = i.splice(t, 1)[0];
        r(n), this[e].slotContainer.appendChild(n), i.push(n)
    }, n.prototype.setFighters = function(e, t) {
        for (var i = this[e].slots, n = 0; n < f; n += 1) {
            var o = t[n];
            o ? a(i[n], o) : r(i[n])
        }
    }
}
