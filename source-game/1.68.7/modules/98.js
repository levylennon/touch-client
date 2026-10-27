function(e, t) {
    function i(e) {
        this.id = e, this.volume = 1, this.muted = !0, this.loopSound = null, this.loopId = null, this.loopVol = 0, this.nextLoop = null
    }
    e.exports = i, i.prototype.setVolume = function(e, t) {
        var i = this.muted;
        this.muted = 0 === e || t || !1, void 0 !== e && null !== e ? this.volume = e : e = this.volume, this.loopId && (this.loopSound && this.muted ? this.loopSound.stop() : this.loopSound && this.loopSound.id === this.loopId ? (this.loopSound.setVolume(Math.max(0, Math.min(1, e * this.loopVol))), i && this.loopSound.play()) : this.muted || this.audioManager.playLoopSound(this.id, this.loopId, this.loopVol))
    }, i.prototype.setMute = function(e) {
        this.setVolume(null, e)
    }, i.prototype.playLoopSound = function(e, t, i, n, o, a) {
        function r(e, t) {
            return e ? void(e.stopping || e.stop(function() {
                return l.freeSound(e), e = null, t && t()
            })) : t && t()
        }

        function s() {
            var e = f.loopSound = f.nextLoop;
            f.nextLoop = null, e && (e.setLoop(!0, o, a), e.fade = d, e.load(function(o) {
                return o ? (e.unload(), void(f.loopSound = null)) : void e.play(t * f.volume, i, n)
            }))
        }

        function c() {
            f.loopSound = null, window.setTimeout(s, 0)
        }
        var l = this.audioManager,
            d = l.settings.defaultFade,
            u = l.settings.crossFading,
            p = this.loopSound,
            h = p && p.id;
        if (t = Math.max(0, Math.min(1, t || 1)), this.loopId = e, this.loopVol = t, !l.muted && !this.muted) {
            if (e === h && p) return p.play(t * this.volume, i, n), void(this.nextLoop && (this.nextLoop.cancelOnLoadCallbacks(), this.nextLoop = null));
            if (p = null, !this.nextLoop || this.nextLoop.id !== e) {
                var f = this;
                u ? (this.nextLoop && this.nextLoop.cancelOnLoadCallbacks(), this.nextLoop = l.createSound(e, this.id), this.nextLoop.load(function(e) {
                    return e ? (f.nextLoop.unload(), void(f.nextLoop = null)) : (r(f.loopSound), void c())
                })) : (this.nextLoop = l.createSound(e, this.id), r(this.loopSound, c))
            }
        }
    }
}
