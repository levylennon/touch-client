function(e, t, i) {
    function n() {
        return d.isAndroidApp && window.cordova.plugins.Yanap
    }

    function o() {
        return n() ? (l.call(this),
        this.audioMode = null,
        this.media = null,
        this.uri = null,
        void(this.errorOccured = !1)) : console.error(new Error("YanapAudioInstance: Yanap plugin is not available"))
    }

    function a() {
        o.call(this),
        this.audioMode = window.cordova.plugins.Yanap.AUDIO_TYPE.LOOP
    }

    function r() {
        o.call(this),
        this.audioMode = window.cordova.plugins.Yanap.AUDIO_TYPE.MUSIC
    }

    function s() {
        o.call(this),
        this.audioMode = window.cordova.plugins.Yanap.AUDIO_TYPE.SOUND
    }
    var c = i(56).inherits,
        l = i(95),
        d = i(7),
        u = 12e3;
    c(o, l),
    o.prototype.setVolume = function(e) {
        if (l.prototype.setVolume.call(this, e), this.media) {
            var t = this;
            setTimeout(function() {
                t.media.setVolume(e, e)
            }, 0)
        }
    },
    o.prototype._load = function() {
        function e(e) {
            var t = !n.errorOccured;
            n._loading && n._finalizeLoad(e),
            n.errorOccured || n.unload(),
            n.errorOccured = !0,
            t && console.warn("SoundYanap: " + JSON.stringify(e) + ", file: " + n.uri)
        }

        function t(t, i) {
            if (t === window.cordova.plugins.Yanap.AUDIO_INSTANCE_STATUS.ERROR) return e(i);
            if (!n.usedMemory && n.media && n.media.fileLength) {
                var o = ~~n.media.fileLength / u;
                o <= 0 || (n.usedMemory = o)
            }
        }

        function i(e) {
            n.uri = e, n.media = new window.cordova.plugins.Yanap.AudioInstance(n.audioMode, t), window.wizAssets && !window.wizAssets.initialize && (e = e.substr(e.indexOf("/audio/") + 1)), n.media.load(e), n._finalizeLoad(null)
        }
        var n = this;
        if (n.errorOccured) return this._finalizeLoad("previouslyFailed");
        var o = n.audioManager.settings.getFileUri,
            a = n.audioManager.settings.audioPath;
        if (o.length > 2) o(a, n.id, function(e, t) {
            return e ? n._finalizeLoad(e) : void i(t)
        });
        else try {
            var r = o(a, n.id);
            if ("FROM_MISSING_AUDIO_LIST" === r) return n._finalizeLoad(r);
            i(r)
        } catch (s) {
            n._finalizeLoad(s)
        }
    },
    o.prototype.unload = function() {
        if (l.prototype.unload.call(this)) {
            if (!this.media) return;
            this.media.stop(), this.media.release()
        }
    },
    o.prototype._play = function() {
        if (this.media && !this.errorOccured) {
            var e = this;
            setTimeout(function() {
                e.media.setVolume(e.volume, e.volume), e.media.play()
            }, 0), this.playing = !0
        }
    },
    o.prototype.stop = function(e) {
        if (!this.media) return e && e();
        var t = this;
        setTimeout(function() {
            t.media.stop(), l.prototype.stop.call(t, e)
        }, 0)
    },
    c(a, o),
    c(r, o),
    c(s, o),
    e.exports = {
        LoopYanap: a,
        MusicYanap: r,
        SoundYanap: s,
        isAvailable: n
    }
}
