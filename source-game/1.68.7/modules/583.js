function(e, t, i) {
    function n(e) {
        return new RegExp(r("ui.chat.variable." + e)
            .replace(/,/g, "|")
            .replace(/ /g, ""), "g")
    }

    function o() {
        l = {}, l.experience = n("experience"), l.level = n("level"), l.life = n("life"), l.maxlife = n("maxlife"), l.lifepercent = n("lifepercent"), l.myself = n("myself"), l.stats = n("stats"), l.area = n("area"), l.subarea = n("subarea"), l.position = n("position"), l.guild = n("guild"), l.achievement = n("achievement")
    }

    function a(e) {
        var t = window.gui.playerData.characters.mainCharacter.characteristics,
            i = t[e];
        if (!i) return "?";
        var n = i.getBonusPts() + i.getEquipmentPts(),
            o = n > 0 ? "+" : "";
        return i.getBasePts() + " (" + o + n + ")"
    }
    var r = i(17)
        .getText,
        s = i(16),
        c = i(584),
        l = null,
        d = 669;
    e.exports = function(e) {
        l || o();
        var t = window.gui.playerData,
            i = t.characters.mainCharacter,
            n = i.characteristics;
        if (!n) return e;
        var u = n.experience - n.experienceLevelFloor,
            p = n.experienceNextLevelFloor - n.experienceLevelFloor;
        if (t.isIncarnation()) {
            var h = window.gui.playerData.inventory.equippedItems[c.ACCESSORY_POSITION_WEAPON];
            if (h) {
                var f = h.effectsMap[d];
                if (f) {
                    var b = s.getIncarnationExpDetails(f.diceSide, f.diceNum, f.diceConst);
                    u = b.currentExp - b.expPreviousLevel, p = b.requiredExpToNextLevel - b.expPreviousLevel
                } else console.error(new Error("incarnation effect not found. id: " + h.id + " init: " + h.isInitialised))
            }
        }
        var m = Math.floor(u / (p / 100)) + "%";
        e = e.replace(l.experience, m);
        var M = t.characterBaseInformations.level || 0;
        e = e.replace(l.level, M);
        var g = n.lifePoints || 0;
        e = e.replace(l.life, g);
        var _ = n.maxLifePoints || 0;
        e = e.replace(l.maxlife, _);
        var A = Math.min(100, Math.max(0, Math.round(g / _ * 100))) + "%";
        e = e.replace(l.lifepercent, A);
        var O = t.characterBaseInformations.name || "";
        e = e.replace(l.myself, O);
        var v = r("ui.chat.variable.statsresult", a("vitality"), a("wisdom"), a("strength"), a("intelligence"), a("chance"), a("agility"), a("initiative"), a("damagesBonusPercent"), a("actionPoints"), a("movementPoints"));
        if (e = e.replace(l.stats, v), t.position.area) {
            var y = t.position.area.nameId;
            e = e.replace(l.area, y)
        }
        if (t.position.subArea) {
            var z = t.position.subArea.nameId;
            e = e.replace(l.subarea, z)
        }
        if (t.position.mapPosition) {
            var w = "{mapWithFlag," + t.position.coordinates.posX + ",";
            w += t.position.coordinates.posY + "," + window.gui.playerData.position.worldmapId + "}", e = e.replace(l.position, w)
        }
        var T = t.guild.current && t.guild.current.guildName,
            C = T || r("ui.chat.variable.guilderror");
        e = e.replace(l.guild, C);
        var I = r("ui.chat.variable.achievementResult", t.achievements.points, t.achievements.getAchievementPercent());
        return e = e.replace(l.achievement, I)
    }
}
