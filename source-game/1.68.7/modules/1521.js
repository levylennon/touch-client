function(e, t, i) {
    var n = i(1514),
        o = i(430)
        .Tween,
        a = {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
        },
        r = {
            red: 1,
            green: 1,
            blue: 1,
            alpha: .6
        };
    n.prototype._stopDetectedAnimation = function() {
        this.detectedAnimationTween && (this.detectedAnimationTween.stop(), this.detectedAnimationTween = null)
    }, n.prototype.isInvisibleInFight = function() {
        var e = window.gui.fightManager;
        return !!e.isInFight() && (this.isInvisible && !e.isFighterOnUsersTeam(this.actorId))
    }, n.prototype.setInvisibility = function(e, t) {
        if (this.showTeamCircle(1 !== e), this._stopDetectedAnimation(), 3 === e) this.removeHighlight(), this.isInvisible = !1, this.actorManager.addActorOccupation(this);
        else {
            var i = this.actorManager.userActor.getTeamId();
            t === i ? this.setHighlight(r) : (this.setHighlight(a), this.actorManager.turnIndicatorOff()), this.isInvisible = !0, this.actorManager.removeActorOccupation(this)
        }
    }, n.prototype.invisibleDetectedAnimation = function() {
        var e = {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        };
        this.setHighlight(e), this._stopDetectedAnimation(), this.detectedAnimationTween = new o(this.highlight, ["alpha"])
            .from({
                alpha: 1
            })
            .to({
                alpha: 0
            }, 30)
            .start(!1)
    }
}
