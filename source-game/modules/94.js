function(e, t, i) {
    function n() {
        a.call(this), this.buffer = null, this.source = null, this.sourceConnector = null, this.gain = null, this.panNode = null, this.rawAudioData = null, this._playPitch = 0, this._fadeTimeout = null, this._onStopCallback = null, this._audioNodeReady = !1, this._loopStart = 0, this._loopEnd = 0, this.currentAudioContext = null, this.init()
    }
    var o = i(56)
        .inherits,
        a = i(95),
        r = 1e-6,
        s = {};
    o(n, a), e.exports = n, n.connectedBufferNumber = 0, n.disconnectedBufferNumber = 0, n.prototype._createAudioNodes = function() {
        if (!this._audioNodeReady && (!this.loop || this.loopAudioContext) && (this.loop || this.audioContext)) {
            this.loop ? this.currentAudioContext = this.loopAudioContext : this.currentAudioContext = this.audioContext;
            var e, t = this.currentAudioContext,
                i = t.createGain();
            e = t.createStereoPanner ? t.createStereoPanner() : t.createPanner(), i.connect(e), e.connect(t.destination), i.gain.value = 0, this.sourceConnector = i, this.gain = i.gain, this.panNode = e, this._audioNodeReady = !0
        }
    }, n.prototype._destroyAudioNodes = function() {
        if (this._audioNodeReady) {
            var e = this.currentAudioContext,
                t = this.panNode,
                i = this.sourceConnector;
            i.disconnect(t), t.disconnect(e.destination), this._disconnectSource(), this.sourceConnector = null, this.gain = null, this.panNode = null, this.rawAudioData = null,
                this._audioNodeReady = !1
        }
    }, n.prototype.init = function() {
        function e(e) {
            i.buffer = e, i.usedMemory = e.duration, i.rawAudioData = null, i._loaded && i._playTriggered && ((i.loop || Date.now() - i._playTriggered < n) && i._play(), i._playTriggered = 0)
        }

        function t() {
            console.error("decode audio failed for sound ", i.id)
        }
        if (this._createAudioNodes(), this._playTriggered = 0, this.rawAudioData) {
            var i = this,
                n = this.audioManager.settings.maxPlayLatency,
                o = this.currentAudioContext;
            o.decodeAudioData(this.rawAudioData, e, t)
        }
    }, n.prototype.setVolume = function(e) {
        if (this.volume = e, this.playing) {
            if (!this.fade) return void(this.gain.value = e);
            e <= 0 && (e = r);
            var t = this.currentAudioContext.currentTime;
            this.gain.cancelScheduledValues(t), this.gain.setValueAtTime(this.gain.value || r, t), this.gain.linearRampToValueAtTime(e, t + this.fade)
        }
    }, n.prototype.setPan = function(e) {
        this.pan = e, this.panNode && (this.panNode.pan ? this.panNode.pan.value = e : this.panNode.setPosition(e, 0, .2))
    }, n.prototype.setLoop = function(e, t, i) {
        this.loop = Boolean(e), this._loopStart = t || 0, this._loopEnd = i || 0, this.reinitializeAudio(), this.source && this.buffer && this.play(this._playPitch)
    }, n.prototype._setLoopPoints = function() {
        this.source.loopStart = this._loopStart || 0;
        var e = this._loopEnd;
        e < 0 && (e = this.buffer.duration + e), e < 0 && (e = 0), this.source.loopEnd = e || this.buffer.duration
    }, n.prototype.setPitch = function(e, t) {
        this.pitch = e, this._setPlaybackRate(t)
    }, n.prototype._updatePlayPitch = function(e) {
        !e && 0 !== e || e === this._playPitch || (this._playPitch = e, this._setPlaybackRate(0))
    }, n.prototype._setPlaybackRate = function(e) {
        if (this.source) {
            var t = Math.pow(2, (this._playPitch + this.pitch) / 12);
            if (!e) return void(this.source.playbackRate.value = t);
            var i = this.currentAudioContext.currentTime;
            this.source.playbackRate.cancelScheduledValues(i), this.source.playbackRate.setValueAtTime(this.source.playbackRate.value || r, i), this.source.playbackRate.linearRampToValueAtTime(t, i + e)
        }
    }, n.prototype._addInNotFoundMedia = function() {
        this.id && (s[this.id] || (s[this.id] = !0))
    }, n.prototype._isInNotFoundMedia = function() {
        return !!this.id && s[this.id]
    }, n.prototype._load = function() {
        function e(e) {
            n._addInNotFoundMedia(), n.unload(), n._finalizeLoad(e)
        }

        function t(e) {
            n.buffer = e, n.usedMemory = e.duration, n._finalizeLoad(null)
        }

        function i(i) {
            var o = new XMLHttpRequest;
            o.responseType = "arraybuffer", o.onreadystatechange = function() {
                if (4 === ~~o.readyState) return 200 !== ~~o.status && 0 !== ~~o.status ? e("xhrError:" + o.status) : void(n.currentAudioContext ? n.currentAudioContext.decodeAudioData(o.response, t, e) : (n.rawAudioData = o.response, n._finalizeLoad(null)))
            }, o.open("GET", i, !0), o.send()
        }
        var n = this;
        if (this._createAudioNodes(), !this.currentAudioContext) return e(new Error("No audio context available"));
        var o = this.audioManager.settings.getFileUri,
            a = this.audioManager.settings.audioPath;
        if (this._isInNotFoundMedia()) return e("FROM_MISSING_AUDIO_LIST");
        if (o.length > 2) o(a, this.id, function(t, n) {
            return t ? e(t) : void i(n)
        });
        else try {
            var r = o(a, this.id);
            if ("FROM_MISSING_AUDIO_LIST" === r) return e(r);
            i(r)
        } catch (s) {
            e(s)
        }
    }, n.prototype.unload = function() {
        a.prototype.unload.call(this) && (this._onStopCallback = null, this._stopAndClear(), this.buffer = null, this._destroyAudioNodes())
    }, n.prototype._disconnectSource = function() {
        this.source && (this.source.onended = null, this.source.stop(0), this.source.disconnect(this.sourceConnector), n.disconnectedBufferNumber++, this.source.buffer = null, delete this.source, this.source = null)
    }, n.prototype.changeAudioContext = function(e) {
        this.audioContext = e
    }, n.prototype.reinitializeAudio = function() {
        this._destroyAudioNodes(), this._createAudioNodes()
    }, n.prototype._play = function(e) {
        if (!this.buffer) return void(this._playTriggered = Date.now());
        this.playing = !0;
        var t = this.currentAudioContext.currentTime;
        if (this.gain.cancelScheduledValues(t), this.fade ? (this.gain.setValueAtTime(this.gain.value || r, t), this.gain.linearRampToValueAtTime(this.volume || r, t + this.fade)) : this.gain.value = this.volume, this._onStopCallback = null, this._stopAndClear(), "closed" === this.currentAudioContext.state) return console.error("AudioNode is playing a sound on a closed audio context"), void(this.playing = !1);
        var i = this.source = this.currentAudioContext.createBufferSource();
        i.connect(this.sourceConnector), n.connectedBufferNumber++;
        var o = this;
        i.onended = function() {
            o.playing = !1, o._disconnectSource(), o.onEnd && o.onEnd()
        }, this._playPitch = e || 0, (e || this.pitch) && this._setPlaybackRate(0), i.loop = this.loop, i.buffer = this.buffer, this._setLoopPoints(), i.start(0)
    }, n.prototype._stopAndClear = function() {
        this.stopping = !1, this._disconnectSource(), this._fadeTimeout && (window.clearTimeout(this._fadeTimeout), this._fadeTimeout = null), this._onStopCallback && (this._onStopCallback(), this._onStopCallback = null)
    }, n.prototype.stop = function(e) {
        if (!this.playing && !this.stopping) return e && e();
        if (this._playTriggered = 0, this.stopping = !0, this.playing = !1, !this.source) return e && e();
        if (this._onStopCallback = e, !this._fadeTimeout) {
            if (this.fade) {
                var t = this,
                    i = this.currentAudioContext.currentTime;
                return this.gain.cancelScheduledValues(i), this.gain.setValueAtTime(this.gain.value || r, i), this.gain.linearRampToValueAtTime(r, i + this.fade), void(this._fadeTimeout = window.setTimeout(function() {
                    t._fadeTimeout = null, t._stopAndClear()
                }, 1e3 * this.fade))
            }
            this._stopAndClear()
        }
    }
}
