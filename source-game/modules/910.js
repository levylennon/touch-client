function(e, t, i) {
    function n(e) {
        a.call(this, "div", {
            className: ["DamagePreviewTooltip", "TooltipBox"]
        }), this.fighterId = e, this.insideConfirmBox = !1, this._initialized = !1, this._initialization()
    }
    i(911);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(67);
    o(n, a), e.exports = n, n.prototype._initialization = function() {
        this._initialized || (this.content = this.createChild("div"), this._initialized = !0)
    }, n.prototype.update = function(e, t, i, n) {
        this.insideConfirmBox = n.insideConfirmBox;
        var o = window.actorManager.getActor(this.fighterId),
            s = window.gui.fightManager.getFighter(this.fighterId);
        if (!s || !o || !i || i.resultEffects.length <= 0) return void this.hide();
        var c = i.canDie,
            l = s.data.stats.shieldPoints,
            d = new a("div"),
            u = d.createChild("div", {
                className: "inlineDisplay"
            });
        u.createChild("div", {
            className: "nickname",
            text: s.name
        }), c && u.createChild("div", {
            className: ["iconDamageTooltip", "iconDeath"]
        }), u.createChild("div", {
            className: "lifePoints",
            text: " | " + s.data.stats.lifePoints
        }), u.createChild("div", {
            className: ["iconDamageTooltip", "iconLifePoints"]
        });
        var p = u.createChild("div", {
            className: "inlineDisplay"
        });
        if (p.createChild("div", {
                className: "shieldPoints",
                text: "+ " + l
            }), p.createChild("div", {
                className: ["iconDamageTooltip", "iconShieldPoints"]
            }), p.toggleDisplay(l > 0), d.appendChild(this._damageDataToDom(i.resultEffects)), this.insideConfirmBox) return this.hide(), void window.foreground.confirmBox.changeDamage(d);
        this.content.clearContent(), this.content.appendChild(d);
        var h = r.getElementPositionCenteredAt(this.content, e, t);
        this.setStyles({
            webkitTransform: "translate3d(" + h.x + "px," + h.y + "px,0)"
        })
    }, n.prototype._damageDataToDom = function(e) {
        for (var t = new a("div"), i = 0; i < e.length; i++) {
            var n = e[i],
                o = t.createChild("div");
            o.setStyles({
                color: n.color
            }), o.setHtml(n.content)
        }
        return t
    }
}
