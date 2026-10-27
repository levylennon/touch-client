function(e, t, i) {
    function n() {
        return n.isAvailable() ? (a.call(this),this.media = null, this.uri = null, this.errorOccured = !1, void(s || (window.Media && window.Media.shouldReleaseOnMemoryWarning && window.Media.shouldReleaseOnMemoryWarning(!1), s = !0))) : console.error(new Error("SoundCordova: cordova media plugin is not available"))
    }
    var o = i(56).inherits,
        a = i(95),
        r = i(7),
        s = !1,
        c = !1;
    o(n, a), 
    e.exports = n, n.isAvailable = function() {
        return r.isCordova && window.Media
    }, 
    n.prototype.setVolume = function(e) {
        if (a.prototype.setVolume.call(this, e), this.media) {
            var t = this;
            setTimeout(function() {
                t.media.setVolume(e)
            }, 0)
        }
    }, 
    n.prototype._load = function() {
        function e() {}

        function t(e) {
            var t = !o.errorOccured,
                i = r.isIOSApp && window.navigator.userAgent.indexOf("iPad; CPU OS 8_0") !== -1;
            3 === e.code && i && (c && (t = !1), c = !0), o._loading && o._finalizeLoad(e), o.errorOccured || o.unload(), o.errorOccured = !0, t && console.warn("SoundCordova: " + JSON.stringify(e) + ", file: " + o.uri)
        }

        function i() {
            if (!o.usedMemory) {
                var e = Number(o.media.getDuration());
                !e || e < 0 || (o.usedMemory = e)
            }
        }

        function n(n) {
            o.uri = n,
            o.media = new window.Media(n, e, t, i),
            o._loading && !o.errorOccured && o._finalizeLoad(null)
        }
        var o = this;
        if (o.errorOccured) return this._finalizeLoad("previouslyFailed");
        var a = o.audioManager.settings.getFileUri,
            s = o.audioManager.settings.audioPath;
        if (a.length > 2) a(s, o.id, function(e, t) {
            return e ? o._finalizeLoad(e) : void n(t)
        });
        else try {
            var l = a(s, o.id);
            if ("FROM_MISSING_AUDIO_LIST" === l) return o._finalizeLoad(l);
            n(l)
        } catch (d) {
            o._finalizeLoad(d)
        }
    }, 
    n.prototype.unload = function() {
        if (a.prototype.unload.call(this)) {
            if (!this.media) return;
            var e = this;
            setTimeout(function() {
                e.media.stop(),
                e.media.release()
            }, 0)
        }
    }, 
    n.prototype._play = function() {
        if (this.media && !this.errorOccured) {
            var e = this;
            setTimeout(function() {
                e.media.setVolume(e.volume)
            }, 0),
            this.loop && this.playing || (setTimeout(function() {
                e.media.seekTo(0), e.media.play({
                    numberOfLoops: e.loop ? 0 : 1,
                    playAudioWhenScreenIsLocked: !1
                })
            }, 0),
            this.playing = !0)
        }
    }, n.prototype.stop = function(e) {
        if (!this.media) return e && e();
        var t = this;
        setTimeout(function() {
            t.media.stop(),
            a.prototype.stop.call(t, e)
        }, 0)
    }
}
