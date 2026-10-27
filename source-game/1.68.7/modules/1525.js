function(e, t, i) {
    var n = i(1514),
        o = i(700),
        a = i(13),
        r = i(1174),
        s = i(1496),
        c = i(425),
        l = i(1526),
        d = i(1516),
        u = "ui/embedded/teamCircleRed.png",
        p = "ui/embedded/teamCircleBlue.png";
    n.prototype.addTeamCircle = function() {
        function e(e) {
            n.circleGraphic ? (n.circleGraphic.w = e.element.width, n.circleGraphic.h = e.element.height, n.circleGraphic.texture = e, n._positionCircle(), n.circleGraphic.forceRefresh()) : e.release()
        }
        if (!this.circleGraphic) {
            var t = this.getFighter();
            if (t) {
                var i = t.data.teamId,
                    n = this;
                this.circleGraphic = new r({
                    layer: a.MAP_LAYER_BACKGROUND,
                    x: this.x,
                    y: this.y,
                    w: 0,
                    h: 0,
                    scene: this.scene
                });
                var s;
                0 === i ? s = u : 1 === i ? s = p : console.error("invalid team number"), o.loadTexture(s, e, this.scene.renderer)
            }
        }
    }, n.prototype.removeTeamCircle = function() {
        this.circleGraphic && (this.circleGraphic.remove(), this.circleGraphic = null)
    }, n.prototype._positionCircle = function() {
        this.circleGraphic && (this.circleGraphic.x = this.x - a.CELL_WIDTH / 2, this.circleGraphic.y = this.y - a.CELL_HEIGHT / 2, this.circleGraphic.position = this.position, this.circleGraphic.forceRefresh())
    }, n.prototype.showTeamCircle = function(e) {
        this.circleGraphic && (e ? this.circleGraphic.show() : this.circleGraphic.hide())
    }, n.prototype.updateTurnIndicatorPosition = function() {
        var e = window.gui.fightManager.getFighter(this.actorId);
        e && e.data.alive && window.gui.fightManager.currentFighterId === e.id && (e.data.teamId === c.TEAM_CHALLENGER ? s.moveRedFeedback(this.x, this.y) : s.moveBlueFeedback(this.x, this.y))
    }, n.prototype.addTurnNumber = function(e) {
        this.removeTurnNumber(), this._turnNumberLabel = new l(this.x, this.y, e)
    }, n.prototype.removeTurnNumber = function() {
        this._turnNumberLabel && (this._turnNumberLabel.remove(), this._turnNumberLabel = null)
    }, n.prototype.addNicknameLabel = function(e) {
        this.nicknameLabel || (this.nicknameLabel = new d), this.updateNicknameLabel(e)
    }, n.prototype.updateNicknameLabel = function(e) {
        e = e || !1, e = e && d.hasFullNicknameLabelData(this), e ? (this.nicknameLabel.set(this, "full"), this._hadFullNicknameLabel = !0) : (this.nicknameLabel.set(this, "name"), this._hadFullNicknameLabel = !1)
    }, n.prototype.removeNicknameLabel = function() {
        this.nicknameLabel && (this.nicknameLabel.remove(), this.nicknameLabel = null), this._hadFullNicknameLabel = !1
    }
}
