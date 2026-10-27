function(e, t, i) {
    function n(e, t) {
        r.call(this, {
            scaleOnPress: !0
        }), this.type = "spell", this.delayedSetShortcutData = null, s.constructor.call(this, e, t);
        var i = this;
        this.on("dragMove", function(t, n) {
            window.gui.fightManager.isInBattle() && !e.isOrganizing && (window.gui.fightManager.setDraggingSpellState(!0), window.background.colorCurrentDragCell(t, n, i))
        }), this.on("dragEnd", function() {
            window.gui.fightManager.setDraggingSpellState(!1)
        }), this.on("selected", function() {
            i.isEmpty() || window.gui.emit("spellSlotSelected", i.shortcut.spellId)
        }), this.on("unselected", function() {
            window.gui.emit("spellSlotDeselected")
        }), window.gui.on("disconnect", function() {
            i._resetDelayedSetShortcut()
        })
    }
    var o = i(56)
        .inherits,
        a = i(418),
        r = i(883),
        s = i(881),
        c = i(873);
    o(n, r), e.exports = n, n.prototype._resetDelayedSetShortcut = function() {
        if (this.delayedSetShortcutData) {
            var e = this.delayedSetShortcutData.character;
            e && e.spellData && (e.spellData.removeListener("loaded", this.delayedSetShortcutData.cb), this.delayedSetShortcutData = null)
        }
    }, n.prototype.setShortcut = function(e) {
        if (this._resetDelayedSetShortcut(), !this._isShortcutValid(e)) return !this.isEmpty() && this.unset();
        var t = window.gui.playerData.characters.getControlledCharacter(),
            i = t.spellData.spells[e.spellId];
        return this.shortcut = e, i ? (this.setSpell(i), this.setContextMenu("spell", {
            spell: i,
            canRemove: !0,
            onClose: this._onContextualMenuClosed.bind(this)
        }), void this.updateAvaibility()) : (this.delayedSetShortcutData = {
            shortcut: e,
            character: t,
            cb: this.setShortcut.bind(this, e)
        }, t.spellData.once("loaded", this.delayedSetShortcutData.cb))
    }, n.prototype.updateAvaibility = function() {
        var e = this.data && this.data.isDisabled,
            t = 0;
        if (this.shortcut && window.gui.fightManager.isInBattle() && !this.isEmpty()) {
            var i = this.shortcut.spellId;
            this.isDisabled = !window.gui.fightManager.canCastThisSpell(i), this.isDisabled && (t = window.gui.fightManager.getSpellCooldown(i))
        } else this.isDisabled = !1;
        this.setCooldown(t), this._enable(!this.forceDisabled && !this.isDisabled && !e)
    }, n.prototype._enable = function(e) {
        c.prototype._enable.call(this, e), a.setDragEnable(this, this.enabledBehaviour)
    }, s.appendPrototypeTo(n)
}
