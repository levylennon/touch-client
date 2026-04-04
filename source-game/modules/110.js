function(e, t) {
    function i(e) {
        this._type = "CharacterBaseCharacteristic", this._base = 0, this._objectsAndMountBonus = 0, this._alignGiftBonus = 0, this._contextModif = 0, this._additionnal = 0, e && this.setPts(e)
    }
    e.exports = i, i.prototype.setPts = function(e) {
        void 0 !== e.base && (this._base = e.base || 0), void 0 !== e.objectsAndMountBonus && (this._objectsAndMountBonus = e.objectsAndMountBonus || 0), void 0 !== e.alignGiftBonus && (this._alignGiftBonus = e.alignGiftBonus || 0), void 0 !== e.contextModif && (this._contextModif = e.contextModif || 0), void 0 !== e.additionnal && (this._additionnal = e.additionnal || 0)
    },
    i.prototype.getContextModif = function() {
        return this._contextModif || 0
    },
    i.prototype.getBasePts = function() {
        return (this._base || 0) + (this._additionnal || 0)
    },
    i.prototype.getBaseWithoutAdditionalPts = function() {
        return this._base || 0
    },
    i.prototype.getEquipmentPts = function() {
        return this._objectsAndMountBonus || 0
    },
    i.prototype.getAlignGiftPts = function() {
        return this._alignGiftBonus || 0
    },
    i.prototype.getAdditionalPts = function() {
        return this._additionnal || 0
    },
    i.prototype.getAllValues = function() {
        return {
            base: this.getBaseWithoutAdditionalPts(),
            objectsAndMountBonus: this.getEquipmentPts(),
            alignGiftBonus: this.getAlignGiftPts(),
            contextModif: this.getContextModif(),
            additionnal: this.getAdditionalPts()
        }
    },
    i.prototype.getBonusPts = function() {
        return (this._alignGiftBonus || 0) + (this._contextModif || 0)
    },
    i.prototype.getTotalStat = function() {
        return this.getBasePts() + this.getEquipmentPts() + this.getBonusPts()
    }
}
