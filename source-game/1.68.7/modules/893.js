function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "FightBuffs"
        }), this.buffList = this.createChild("div", {
            className: "buffList"
        }), this.buffItems = {}, this._registerListeners(window.gui.fightManager), this.fighter = null, this.lastWasPlayer = !1, this.buffDescription = new c, this.hide()
    }
    i(894);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(895),
        s = i(88)
        .addTooltip,
        c = i(896);
    o(n, a), e.exports = n, n.prototype._registerListeners = function(e) {
        var t = this;
        e.on("GameFightTurnStart", function(e) {
            if (e === window.gui.playerData.id) t.lastWasPlayer = !0;
            else if (t.lastWasPlayer) {
                for (var i = t.buffList.getChildren(), n = 0; n < i.length; n++) i[n].updateCooldown();
                t.lastWasPlayer = !1
            }
        }), e.on("BuffUpdate", function(e, i) {
            t.fighter === i && t.updateBuff(e)
        }), e.on("BuffRemove", function(e, i) {
            t.fighter === i && t.removeBuff(e)
        }), e.on("BuffAdd", function(e, i) {
            t.fighter === i && (t._addBuff(e), t.updateUi())
        })
    }, n.prototype.open = function(e) {
        this.fighter !== e && (this.clean(), this.fighter = e, this.makeItemBuffs(e), this.updateUi()), this.show()
    }, n.prototype.close = function() {
        this.clean(), this.hide()
    }, n.prototype.clean = function() {
        this.fighter = null, this.buffList.clearContent(), this.buffItems = {}
    }, n.prototype.makeItemBuffs = function(e) {
        for (var t = e.buffs, i = 0, n = t.length; i < n; i++) this._addBuff(t[i])
    };
    var l = function(e, t) {
        return e.maxCooldown() - t.maxCooldown()
    };
    n.prototype.updateUi = function() {
        for (var e = [], t = [], i = this.buffList.getChildren(), n = 0; n < i.length; n++) {
            var o = i[n];
            0 !== o.parentBoostUid ? t.push(o) : e.push(o)
        }
        for (e.sort(l), n = 0; n < t.length; n++) {
            for (var a = t[n], r = !1, s = 0, c = 0; c < e.length; c++)
                if (e[c].maxCooldown() < a.cooldown && (s = c), e[c].hasUid(a.parentBoostUid)) {
                    e.splice(c + 1, 0, a), r = !0;
                    break
                } r || e.splice(s, 0, a)
        }
        for (n = 0; n < e.length; n++) {
            var d = e[n];
            this.buffList.appendChild(d)
        }
    }, n.prototype._addBuff = function(e) {
        function t() {
            for (var e = [], t = -1, i = 0; i < n.buffs.length; i++) {
                var a = n.buffs[i];
                e.push(a.effect), t = a.source
            }
            var r = window.gui.fightManager,
                s = r.getFighter(t);
            if (!s) return null;
            var l = {};
            return l.spellName = n.spell.getName(), l.casterName = s.name, l.effects = e, o ? o.updateUI(l) : o = new c(l), o
        }
        if (e.visibleInBuffUI) {
            var i = r.getKey(e),
                n = this.buffItems[i];
            if (n) return void n.addBuff(e);
            n = new r(e);
            var o;
            s(n, t), this.buffItems[i] = n, this.buffList.appendChild(n), n.addBuff(e)
        }
    }, n.prototype.updateBuff = function(e) {
        var t = r.getKey(e),
            i = this.buffItems[t];
        if (i) i.updateCooldown(e), this.updateUi();
        else {
            var n = r.getDelayKey(e);
            if (i = this.buffItems[n], !i) return void console.warn("Trying to update a non-existing buff.");
            this.buffItems[t] = i, delete this.buffItems[n]
        }
    }, n.prototype.removeBuff = function(e) {
        this.removeBuffItem(e, r.getKey(e)), this.removeBuffItem(e, r.getDelayKey(e)), this.updateUi()
    }, n.prototype.removeBuffItem = function(e, t) {
        var i = this.buffItems[t];
        i && (i.removeBuff(e), 0 === i.buffs.length && (this.buffList.removeChild(i), i.destroy(), delete this.buffItems[t]))
    }
}
