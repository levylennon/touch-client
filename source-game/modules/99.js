function(e, t, i) {
    function n() {
        a.call(this);
        var e = new Audio;
        e.loop = !1, e.type = "audio/mpeg", this._audio = e, this._onEnd = null, this.audioContext && !r.isIOSApp && (this.source = this.audioContext.createMediaElementSource(e), this.source.connect(this.audioContext.destination))
    }
    var o = i(56)
        .inherits,
        a = i(95),
        r = i(7),
        s = {
            playAudioWhenScreenIsLocked: !1
        };
    o(n, a), e.exports = n, n.prototype.setVolume = function(e) {
        this.volume = this._audio.volume = e
    }, n.prototype.setLoop = function(e) {
        this.loop = this._audio.loop = e
    }, n.prototype._load = function() {
        function e(e) {
            o._finalizeLoad(e)
        }

        function t() {
            this.removeEventListener("canplaythrough", t), this.removeEventListener("error", i), o.usedMemory = this.duration, o._finalizeLoad(null)
        }

        function i(n) {
            this.removeEventListener("canplaythrough", t), this.removeEventListener("error", i), e(n)
        }

        function n(e) {
            o._loading = !0, o._audio.addEventListener("canplaythrough", t), o._audio.addEventListener("error", i), o._audio.src = e, o._audio.load()
        }
        var o = this,
            a = this.audioManager.settings.getFileUri,
            r = this.audioManager.settings.audioPath;
        if (a.length > 2) a(r, this.id, function(t, i) {
            return t ? e(t) : void n(i)
        });
        else try {
            var s = a(r, this.id);
            if ("FROM_MISSING_AUDIO_LIST" === s) return e(s);
            n(s)
        } catch (c) {
            e(c)
        }
    }, n.prototype.unload = function() {
        a.prototype.unload.call(this) && (this._audio.volume = 1, this._audio.src = "", this._audio.load())
    }, n.prototype._play = function() {
        if (this._audio.volume = this.volume, this._audio.pause(), this._audio.currentTime = 0, this._audio.play(s), this.playing = !0, !this.loop) {
            var e = 1e3 * this._audio.duration;
            if (!(isNaN(e) || e <= 0)) {
                var t = this;
                this._onEnd = window.setTimeout(function() {
                    t._onEnd = null, t._playing = !1, t.onEnd && t.onEnd()
                }, e)
            }
        }
    }, n.prototype.stop = function(e) {
        return null !== this._onEnd && (window.clearTimeout(this._onEnd), this._onEnd = null), this._audio.pause(), this._audio.currentTime = 0, this._playTriggered = 0, this.playing = !1, e && e()
    }
}
