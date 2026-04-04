function(e, t, i) {
    function n() {
        this._init = !1, this._isLoaded = !1, this._loadingCallback = null, this._tween = null, this.animation = null
    }
    var o = i(696),
        a = i(13),
        r = i(697),
        s = i(430)
        .Tween;
    e.exports = n, n.prototype._loadAnimations = function() {
        var e = this;
        this.animation = new o({
            layer: a.MAP_LAYER_BACKGROUND,
            scene: window.isoEngine.mapRenderer.mapScene,
            sx: .5,
            sy: .5
        }), this.animation.setWhiteListedness(!0), r.loadAnimationManager(this.animation, "embedded", "cases", function() {
            return e._isLoaded = !0, e._loadingCallback && e._loadingCallback()
        })
    }, n.prototype.playAnimation = function(e, t) {
        var i = this,
            n = window.isoEngine.mapRenderer.getCellSceneCoordinate(t);
        return this._isLoaded ? (this._isLoaded = !0, this._cleanTween(), this.animation.animManager.assignSymbol({
            base: e,
            direction: -1
        }, !0), this.animation.position = t, this.animation.x = n.x, this.animation.y = n.y, this.animation.show(), void(this._tween = new s(this.animation, ["alpha"])
            .from({
                alpha: 0
            })
            .to({
                alpha: 1
            }, 30)
            .start())) : void(this._loadingCallback = function() {
            i.playAnimation(e, t)
        })
    }, n.prototype.stopAnimation = function() {
        var e = this;
        this._isLoaded && (this._cleanTween(), this._tween = new s(this.animation, ["alpha"])
            .from({
                alpha: 1
            })
            .to({
                alpha: 0
            }, 30)
            .onFinish(function() {
                e.animation && e.animation.remove()
            })
            .start())
    }, n.prototype._cleanTween = function() {
        this._tween && (this._tween.playing || this._tween.starting) && this._tween.stop()
    }, n.prototype.initialize = function() {
        this._init || (this._loadAnimations(), this._init = !0)
    }
}
