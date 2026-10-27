function(e, t, i) {
    function n() {
        o.call(this), this.characteristics = null, this.spellShortcuts = [], this.spellData = new r, this.currentSummonedCreature = 0, this.currentSummonedBomb = 0, this.timeStatsSynchronized = 0
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = i(747);
    a(n, o), e.exports = n, n.prototype.connect = function() {
        this.spellData.connect()
    }, n.prototype.disconnect = function() {
        this.characteristics = null, this.spellShortcuts = [], this.spellData.disconnect(), this.currentSummonedCreature = 0, this.currentSummonedBomb = 0
    }, n.prototype.setCharacteristics = function(e) {
        this.characteristics = e, this.timeStatsSynchronized = Date.now()
    }, n.prototype.setCharacteristic = function(e, t) {
        return void 0 === this.characteristics[e] ? void console.error(new Error("setCharacteristic: No characteristic named: " + e)) : "CharacterBaseCharacteristic" === this.characteristics[e]._type ? void console.error(new Error("setCharacteristic: " + e + ' cannot take a type "number"')) : void(this.characteristics[e] = t)
    }, n.prototype.setCharacterId = function(e) {
        this.spellData.characterId = e
    }, n.prototype.getMaxSummonedCreature = function() {
        return this.characteristics.summonableCreaturesBoost.getTotalStat()
    }, n.prototype.setSpellShortcuts = function(e) {
        this.spellShortcuts = [];
        for (var t = 0; t < e.length; t++) this.spellShortcuts.push(e[t])
    }, n.prototype.updateSpellShortcut = function(e, t) {
        for (var i = 0; i < this.spellShortcuts.length; i++)
            if (this.spellShortcuts[i].slotIndex === e.slotIndex) return void(t ? this.spellShortcuts.splice(i, 1) : this.spellShortcuts[i] = e);
        this.spellShortcuts.push(e)
    }, n.prototype.removeFromSpellShortcut = function(e) {
        this.updateSpellShortcut(e, !0)
    }, n.prototype.getCharacteristicFromCriterionKey = function(e) {
        if (!this.characteristics) return 0;
        switch (e) {
            case "Ca":
                return this.characteristics.agility.getBasePts();
            case "CA":
                return this.characteristics.agility.getTotalStat();
            case "ca":
                return this.characteristics.agility.getAdditionalPts();
            case "Cc":
                return this.characteristics.chance.getBasePts();
            case "CC":
                return this.characteristics.chance.getTotalStat();
            case "cc":
                return this.characteristics.chance.getAdditionalPts();
            case "Ce":
                return this.characteristics.energyPoints;
            case "CE":
                return this.characteristics.maxEnergyPoints;
            case "CH":
                return this.characteristics.alignmentInfos.honor;
            case "Ci":
                return this.characteristics.intelligence.getBasePts();
            case "CI":
                return this.characteristics.intelligence.getTotalStat();
            case "ci":
                return this.characteristics.intelligence.getAdditionalPts();
            case "CL":
                return this.characteristics.lifePoints;
            case "CM":
                return this.characteristics.movementPoints.getTotalStat();
            case "CP":
                return this.characteristics.actionPoints.getTotalStat();
            case "Cs":
                return this.characteristics.strength.getBasePts();
            case "CS":
                return this.characteristics.strength.getTotalStat();
            case "cs":
                return this.characteristics.strength.getAdditionalPts();
            case "Cv":
                return this.characteristics.vitality.getBasePts();
            case "CV":
                return this.characteristics.vitality.getTotalStat();
            case "cv":
                return this.characteristics.vitality.getAdditionalPts();
            case "Cw":
                return this.characteristics.wisdom.getBasePts();
            case "CW":
                return this.characteristics.wisdom.getTotalStat();
            case "cw":
                return this.characteristics.wisdom.getAdditionalPts();
            case "Ct":
                return this.characteristics.tackleEvade.getTotalStat();
            case "CT":
                return this.characteristics.tackleBlock.getTotalStat();
            default:
                return null
        }
    }, n.SpellData = r
}
