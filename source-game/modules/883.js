function(e, t, i) {
    function n(e) {
        e = e || {}, o.call(this, e), this.addClassNames("SpellSlot"), this.setSpell(e.spellData, e.descriptionOptions), this.customScale = null, this.customXOffset = null, this.customYOffset = null, this.customRotation = null, this._setSpellCount = 0, this.isTapping = !1;
        var t = this;
        d.on("SpellInfoMessage", function() {
            t.isTapping = !1
        })
    }
    i(884);
    var o = i(873),
        a = i(732),
        r = i(885),
        s = i(56)
        .inherits,
        c = i(12),
        l = i(13),
        d = i(105);
    s(n, o), e.exports = n, n.prototype.setSpell = function(e, t) {
        if (this.descriptionOptions = t || this.descriptionOptions, !e) return this.unset();
        var i = ++this._setSpellCount,
            n = this.spellInstance = e._uid ? e : null,
            o = this.dbSpell = n ? n.spell : e,
            r = this;
        if (n && n.isItem) {
            var s = n._item;
            if (!s.isInitialised) return s.once("initialised", function() {
                r._setSpellCount === i && r.setSpell(e)
            });
            this.setImage(s.getProperty("image"))
        } else if (o.image) this.setImage(o.image);
        else {
            this.setImage(a.placeHolder);
            var l = o.iconId;
            l < 0 && (console.error(new Error("iconId < 0 for spellId " + o.id + ": " + l)), l = "noIcon"), c.preloadImage("gfx/spells/sort_" + l + ".png", function(e) {
                r._setSpellCount === i && (o.image = e, r.setImage(o.image))
            })
        }
        this.setTooltip(this._getTooltipContent), this.setData(e), this.on("tap", function() {
            window.gui.pingSystem.isActive() && r.data && !r.isTapping && (window.gui.pingSystem.pingOnSpell(r.data), r.isTapping = !0)
        })
    }, n.prototype._getTooltipContent = function() {
        return new r({
            spell: this.spellInstance || this.dbSpell
        }, this.descriptionOptions)
    }, n.prototype.setCooldown = function(e) {
        var t = e >= 63 ? l.INFINITE_CHARACTER : e;
        this.quantityBox.setText(t), this.quantityBox.toggleDisplay(e > 0)
    }
}
