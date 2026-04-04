function(e, t, i) {
    function n(e, t) {
        this.data = new l, this.id = e, this.name = null, this.level = null, this.picto = null, this.isBomb = !1, this.isCreature = !1, this.isBoss = !1, this.canTackle = !0, this.canBePushed = !0, this.canBeCarried = !0, this.canSwitchPos = !0, this.buffs = [], this._finishingBuffs = [], this.states = [], this.cellHistory = [], this.startTurnCell = -1, this.spells = {}, t || (this.picto = this.createPicto(e), this.isShieldBarVisible = !1, window.gui.timeline.linkToTimeline(this))
    }
    var o = i(72),
        a = i(689),
        r = i(730),
        s = i(55),
        c = i(425),
        l = i(731),
        d = i(17)
        .getText,
        u = 40,
        p = 30,
        h = 7,
        f = 35,
        b = 0;
    e.exports = n, n.prototype.clear = function() {
        this.picto && (this.picto.destroy(), this.picto = null)
    }, n.prototype.createPicto = function(e) {
        var t = new o("div", {
            name: e,
            className: "fighter"
        });
        return t.fighterTimeBar = t.createChild("div", {
            className: "fighterTimeBar"
        }), t.fighterTimeValue = t.fighterTimeBar.createChild("div", {
            className: "fighterTimeValue"
        }), t.fighterIllus = t.appendChild(new a({
            className: "fighterIllus",
            scale: "fitin"
        })), t.fighterIcon = t.createChild("div", {
            className: "fighterIcon"
        }), t.fighterHPBar = t.createChild("div", {
            className: "fighterHPBar"
        }), t.fighterHPValue = t.fighterHPBar.createChild("div", {
            className: "fighterHPValue"
        }), t.fighterShieldBar = t.createChild("div", {
            className: "fighterShieldBar",
            hidden: !0
        }), t.fighterShieldValue = t.fighterShieldBar.createChild("div", {
            className: "fighterShieldValue"
        }), t.fighterNumber = t.createChild("div", {
            className: "fighterNumber"
        }), t.fighterNumber.toggleDisplay(Boolean(s.orderFighters)), t
    }, n.prototype.createStatsTooltipContent = function() {
        var e, t = new o("table", {
            className: "statsDetails",
            name: "statsDetails"
        });
        return e = t.createChild("tr"), t.fighterName = e.createChild("td", {
            className: "fighterName",
            attr: {
                colspan: 3
            }
        }), t.level = e.createChild("td", {
            className: "fighterLevel",
            attr: {
                colspan: 2
            }
        }), e = t.createChild("tr"), t.lifePoints = e.createChild("td", {
            className: ["label", "iconLifePoints"],
            attr: {
                colspan: 2
            }
        }), t.shieldPoints = e.createChild("td", {
            className: ["label", "iconShieldPoints"]
        }), t.fighterUsedAP = e.createChild("td", {
            className: ["label", "iconActionPoints"]
        }), t.movementPoints = e.createChild("td", {
            className: ["label", "iconMovementPoints"]
        }), e = t.createChild("tr"), t.dodgePALostProbability = e.createChild("td", {
            className: ["label", "iconDodgeAP"]
        }), t.dodgePMLostProbability = e.createChild("td", {
            className: ["label", "iconDodgeMP"]
        }), t.tackleBlock = e.createChild("td", {
            className: ["label", "iconTackle"]
        }), t.criticalDamageReduction = e.createChild("td", {
            className: ["label", "iconCriticalReduction"]
        }), t.pushDamageReduction = e.createChild("td", {
            className: ["label", "iconPushDamageReduction"]
        }), e = t.createChild("tr"), t.neutral = e.createChild("td", {
            className: ["label", "iconYinyang"]
        }), t.strength = e.createChild("td", {
            className: ["label", "iconStrength"]
        }), t.intelligence = e.createChild("td", {
            className: ["label", "iconIntelligence"]
        }), t.chance = e.createChild("td", {
            className: ["label", "iconChance"]
        }), t.agility = e.createChild("td", {
            className: ["label", "iconAgility"]
        }), e = t.createChild("tr"), t.neutralPercent = e.createChild("td", {
            className: ["label", "iconYinyang"]
        }), t.strengthPercent = e.createChild("td", {
            className: ["label", "iconStrength"]
        }), t.intelligencePercent = e.createChild("td", {
            className: ["label", "iconIntelligence"]
        }), t.chancePercent = e.createChild("td", {
            className: ["label", "iconChance"]
        }), t.agilityPercent = e.createChild("td", {
            className: ["label", "iconAgility"]
        }), this.refreshStatsTooltipContent(t), t
    }, n.prototype.refreshStatsTooltipContent = function(e) {
        var t = this.data.stats;
        e.fighterName.setText(this.name), e.level.setText(d("ui.common.short.level") + " " + this.level), e.lifePoints.setText(t.lifePoints + " / " + t.maxLifePoints), e.shieldPoints.setText(t.shieldPoints), e.fighterUsedAP.setText(t.actionPoints), e.movementPoints.setText(t.movementPoints), e.dodgePALostProbability.setText(t.dodgePALostProbability), e.dodgePMLostProbability.setText(t.dodgePMLostProbability), e.tackleBlock.setText(Math.max(b, t.tackleBlock)), e.criticalDamageReduction.setText(t.criticalDamageReduction), e.pushDamageReduction.setText(t.pushDamageReduction), e.neutral.setText(t.neutralElementReduction), e.strength.setText(t.earthElementReduction), e.intelligence.setText(t.fireElementReduction), e.chance.setText(t.waterElementReduction), e.agility.setText(t.airElementReduction), "GameFightCharacterInformations" === this.data._type ? (e.neutralPercent.setText(Math.min(f, t.neutralElementResistPercent) + "%"), e.strengthPercent.setText(Math.min(f, t.earthElementResistPercent) + "%"), e.intelligencePercent.setText(Math.min(f, t.fireElementResistPercent) + "%"), e.chancePercent.setText(Math.min(f, t.waterElementResistPercent) + "%"), e.agilityPercent.setText(Math.min(f, t.airElementResistPercent) + "%")) : (e.neutralPercent.setText(t.neutralElementResistPercent + "%"), e.strengthPercent.setText(t.earthElementResistPercent + "%"), e.intelligencePercent.setText(t.fireElementResistPercent + "%"), e.chancePercent.setText(t.waterElementResistPercent + "%"), e.agilityPercent.setText(t.airElementResistPercent + "%"))
    }, n.prototype.getFinishingBuffs = function() {
        var e = this._finishingBuffs;
        return this._finishingBuffs = [], e
    }, n.prototype.synchronizeData = function(e) {
        this.setAlive(e.alive), this.data.updateData(e), this.setHP(e.stats.lifePoints), this.setShield(e.stats.shieldPoints)
    }, n.prototype.getAvailableWidth = function() {
        var e = this.isSummon() ? p : u;
        return this.isShieldBarVisible ? e - h : e
    }, n.prototype.isSummon = function() {
        return this.data.stats.summoned
    }, n.prototype.resizeFighterIllustration = function() {
        if (this.picto) {
            var e = this.getAvailableWidth();
            this.picto.fighterTimeBar.setStyles({
                width: e + "px"
            }), this.picto.fighterIllus.setStyles({
                width: e + "px"
            }), this.picto.fighterIllus.resize(), this.isBoss && (this.picto.fighterTimeBar.addClassNames("boss"), this.picto.fighterIcon.addClassNames("bossIcon"))
        }
    }, n.prototype.setData = function(e) {
        this.data.updateData(e);
        var t = e.alive;
        this.data.alive = null, this.setAlive(t), this.setHP(this.data.stats.lifePoints), this.setShield(this.data.stats.shieldPoints), this.setNameAndLevel(e), this.picto && (e.teamId === c.TEAM_CHALLENGER && this.picto.addClassNames("challenger"), e.stats.summoned && this.picto.addClassNames("summoned"), this.data.look && this.updateFighterIllustration(), this.resizeFighterIllustration())
    }, n.prototype.setAlive = function(e, t) {
        (this.data.alive !== e || t) && (this.data.alive = e, e || (this.setHP(0), this.setShield(0)), this.picto && (this.picto.toggleClassName("dead", !e), t && this.picto.toggleDisplay(e || !s.hideDeadFighters)))
    }, n.prototype.setHP = function(e) {
        var t = window.gui.playerData.characters;
        if (this.data.stats) {
            e = Math.max(0, e);
            var i = this.data.stats;
            i.lifePoints = e;
            var n = this;
            setTimeout(function() {
                var o = n.id === t.controlledCharacterId;
                if (o)
                    if (t.canControlCharacterId(n.id)) {
                        var a = t.getControlledCharacter();
                        a && (t.setCharacteristic(a, "lifePoints", i.lifePoints), t.setCharacteristic(a, "maxLifePoints", i.maxLifePoints))
                    } else console.error(new Error(n.id + " is not controllable but still inside " + t.controlledCharacterId));
                n.picto && n.picto.fighterHPValue.setStyle("height", Math.min(e / i.maxLifePoints * 100, 100) + "%")
            }, 0)
        }
    }, n.prototype.setShield = function(e) {
        if (this.data.stats) {
            e = Math.max(0, e);
            var t = this.data.stats;
            if (t.shieldPoints = e, this.picto) {
                var i = 0 !== t.shieldPoints;
                if (i) {
                    var n = Math.max(t.maxLifePoints, e);
                    this.picto.fighterShieldValue.setStyle("height", e / n * 100 + "%")
                }
                this.isShieldBarVisible !== i && (this.isShieldBarVisible = i, this.picto.fighterShieldBar.toggleDisplay(i), this.resizeFighterIllustration())
            }
            window.gui.fightManager.emit("shieldPointsUpdated", this.id, e)
        }
    }, n.prototype.setNameAndLevel = function(e) {
        switch (e._type) {
            case "GameFightCharacterInformations":
                this.name = e.name, this.level = e.level;
                break;
            case "GameFightMutantInformations":
                this.name = e.name, this.level = e.powerLevel;
                break;
            case "GameFightMonsterInformations":
            case "GameFightMonsterWithAlignmentInformations":
                this.name = e._name, this.level = e.monsterLevel, this.isBomb = e._isBomb, this.isCreature = e._isCreature, this.isBoss = e._isBoss, this.canTackle = e._canTackle, this.canBePushed = e._canBePushed, this.canBeCarried = e._canBeCarried, this.canSwitchPos = e._canSwitchPos;
                break;
            case "GameFightTaxCollectorInformations":
                this.name = e._name, this.level = e.level;
                break;
            default:
                console.warn('Retrieving details of fighter type "' + e._type + '" not supported')
        }
    }, n.prototype.updateFighterIllustration = function() {
        this.picto && this.picto.fighterIllus.setLook(this.data.look, {
            riderOnly: !0,
            direction: r.DIRECTION_SOUTH_EAST,
            animation: "AnimArtwork",
            boneType: "timeline/",
            skinType: "timeline/",
            showSubentities: !1
        })
    }, n.prototype.refreshLife = function() {
        this.data.alive && (this.setHP(this.data.stats.lifePoints), this.setShield(this.data.stats.shieldPoints))
    }, n.prototype.updateNumber = function(e) {
        if (this.picto) {
            var t = e || "";
            this.picto.fighterNumber.setText(t), s.orderFighters && window.actorManager.turnNumberOn(this.id, t)
        }
    }, n.prototype.isTurnPassed = function() {
        var e = window.gui.fightManager,
            t = e.turnsList.indexOf(this.id),
            i = e.turnsList.indexOf(e.currentFighterId);
        return t < i
    }, n.prototype.getRelativeTurnCount = function() {
        var e = window.gui.fightManager.getTurnCount();
        return this.isTurnPassed() ? e + 1 : e
    }, n.prototype.addBuff = function(e, t) {
        t = void 0 === t || t;
        for (var i, n = 0, o = this.buffs.length; n < o; n++)
            if (e.equals(this.buffs[n])) {
                i = this.buffs[n];
                break
            } i ? i.addBuff(e) : this.buffs.push(e), t && e.apply(), i ? window.gui.fightManager.emit("BuffUpdate", i, this) : window.gui.fightManager.emit("BuffAdd", e, this)
    }, n.prototype.updateBuff = function(e) {
        var t = this.getBuffIndex(e.id);
        if (t === -1) return !1;
        var i = this.buffs[t];
        return i.updateBuff(e), window.gui.fightManager.emit("BuffUpdate", i, this), !0
    }, n.prototype.getBuff = function(e) {
        for (var t = 0; t < this.buffs.length; t++) {
            var i = this.buffs[t];
            if (e === i.id) return i
        }
        return null
    }, n.prototype.getBuffIndex = function(e) {
        for (var t = 0; t < this.buffs.length; t++) {
            var i = this.buffs[t];
            if (e === i.id) return t;
            if (i.stack)
                for (var n = 0; n < i.stack.length; n++)
                    if (e === i.stack[n].id) return t
        }
        return -1
    }, n.prototype.addState = function(e) {
        this.states.push(e)
    }, n.prototype.removeState = function(e) {
        this.states.indexOf(e) !== -1 && this.states.splice(this.states.indexOf(e), 1)
    }, n.prototype.hasState = function(e) {
        return this.states.indexOf(e) !== -1
    }, n.prototype.dispel = function(e, t, i) {
        for (var n = [], o = 0; o < this.buffs.length; o++) {
            var a = this.buffs[o];
            a.canBeDispell(e, Number.MIN_VALUE, i) ? (window.gui.fightManager.emit("BuffRemove", a, this), a.remove()) : n.push(a)
        }
        this.buffs = n
    }, n.prototype.dispelSpell = function(e, t, i, n) {
        var o, a = [],
            r = [];
        for (o = 0; o < this.buffs.length; o++) {
            var s = this.buffs[o];
            e === s.castingSpell.spell.id && s.canBeDispell(t, Number.MIN_VALUE, n) ? (s.remove(), a.push(s)) : r.push(s)
        }
        for (this.buffs = r, o = 0; o < a.length; o++) window.gui.fightManager.emit("BuffRemove", a[o], this)
    }, n.prototype.dispelSpellLevel = function(e) {
        var t, i = [],
            n = [];
        for (t = 0; t < this.buffs.length; t++) {
            var o = this.buffs[t];
            e !== -1 && e === o.spellLevelId && o.canBeDispell(!0, Number.MIN_VALUE) ? (o.remove(), i.push(o)) : n.push(o)
        }
        for (this.buffs = n, t = 0; t < i.length; t++) window.gui.fightManager.emit("BuffRemove", i[t], this)
    }, n.prototype.dispelUniqueBuff = function(e, t, i, n) {
        var o = this.getBuffIndex(e);
        if (o === -1) return console.warn("Buff id", e, "does not exist");
        var a = this.buffs[o],
            r = window.gui.fightManager;
        a.canBeDispell(t, n ? e : Number.MIN_VALUE, i) && (!i && a.stack && a.stack.length > 1 ? (a.unstack(e), a.apply(), r.emit("BuffUpdate", a, this)) : (this.buffs.splice(o, 1), a.remove(), r.emit("BuffRemove", a, this), r.emit("BuffRemove", a, this)))
    }, n.prototype.isOnSameTeam = function(e) {
        var t = window.gui.fightManager.getFighter(e);
        return t ? this.data.teamId === t.data.teamId : (console.warn("Fighter " + e + " not found"), !1)
    }, n.prototype.addKeyMovementsInHistory = function(e) {
        this.cellHistory = this.cellHistory.concat(e), this.removeLastCellInHistory()
    }, n.prototype.addCellInHistory = function(e) {
        this.cellHistory.push(e)
    }, n.prototype.setStartTurnCell = function(e) {
        this.startTurnCell = e
    }, n.prototype.removeLastCellInHistory = function() {
        this.cellHistory.splice(this.cellHistory.length - 1, 1)
    }, n.prototype.resetCellHistory = function() {
        this.cellHistory = [], this.startTurnCell = -1
    }, n.prototype.getLastCellInHistory = function() {
        return this.cellHistory[this.cellHistory.length - 1] || -1
    }, n.prototype.getFirstCellInHistory = function() {
        return this.cellHistory[0] || -1
    }, n.prototype.getStartTurnCell = function() {
        return this.startTurnCell
    }
}
