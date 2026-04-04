function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "challengeBg"
        }), this.challengeDatas = [], this._hasTapBehavior = !1, this.challengeIcon = this.createChild("div", {
            className: "challengeIcon"
        }), this.challengeState = this.challengeIcon.createChild("div", {
            className: "challengeState"
        });
        var e = new a("div", {
            className: "challengeDetails",
            name: "challengeDetails"
        });
        s.addTooltip(this.challengeIcon, e, {
            longTapExplanation: !0
        }), this.challengeName = e.createChild("div", {
            className: "challengeName"
        }), this.challengeDesc = e.createChild("div", {
            className: "challengeDesc"
        }), this.challengeLoot = e.createChild("div", {
            className: "challengeLoot"
        }), this.challengeXp = e.createChild("div", {
            className: "challengeXp"
        }), this.challengePoints = e.createChild("div", {
            className: "challengePoints",
            hidden: !0
        }), this.challengeStatus = e.createChild("div", {
            className: "challengeStatus"
        })
    }
    i(573);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(17)
        .getText,
        s = i(88),
        c = i(574);
    o(n, a), e.exports = n, n.prototype.addChallengeData = function(e) {
        this.challengeDatas.push(e), e.targetFighter && this.addTapBehaviour(e.challengeId), this.updateDisplay()
    }, n.prototype.hasTapBehaviour = function() {
        return this._hasTapBehavior
    }, n.prototype.addTapBehaviour = function(e) {
        this._hasTapBehavior || (this.challengeIcon.on("tap", function() {
            e && window.dofus.sendMessage("ChallengeTargetsListRequestMessage", {
                challengeId: e
            })
        }), this._hasTapBehavior = !0)
    }, n.prototype.updateDisplay = function() {
        function e() {
            var e = [805, 815],
                t = window.gui.playerData.position.subArea,
                i = t && t.id,
                n = e.indexOf(i) !== -1;
            return a && n
        }
        for (var t = "", i = "", n = 0, o = 0, a = 0, s = !1, l = "none", d = null, u = 0; u < this.challengeDatas.length; u++) {
            var p = this.challengeDatas[u];
            t += p.name + "<br />", i = p.description, n += p.dropBonus, o += p.xpBonus, a += p.points, s = p.categoryId === c.ACHIEVEMENT, l = p.iconUrl, null !== p.success && (d = p.success)
        }
        this.toggleClassName("achievementType", s), this.toggleClassName("multiple", this.challengeDatas.length > 1), this.challengeIcon.setStyle("backgroundImage", l), this.challengeName.setHtml(t), this.challengeDesc.setText(i), this.challengeLoot.setText(r("ui.common.loot") + " +" + n + "%"), this.challengeXp.setText(r("ui.common.xp") + " +" + o + "%"), e() ? (this.challengePoints.setText(a + " " + r("ui.common.point", a)), this.challengePoints.show()) : this.challengePoints.hide(), this.challengeState.delClassNames(["success", "fail"]), this.challengeStatus.delClassNames(["success", "fail"]), d ? (this.challengeStatus.setText(r("ui.fight.challenge.complete")), this.challengeState.addClassNames("success"), this.challengeStatus.addClassNames("success")) : null === d ? this.challengeStatus.setText(r("ui.fight.challenge.inProgress")) : (this.challengeStatus.setText(r("ui.fight.challenge.failed")), this.challengeState.addClassNames("fail"), this.challengeStatus.addClassNames("fail"))
    }, n.prototype.isSameAchievement = function(e, t) {
        if (this.challengeDatas.length <= 0) return !1;
        var i = this.challengeDatas[0];
        return i.categoryId === c.ACHIEVEMENT && i.gfxId === e && 0 === t
    }
}
