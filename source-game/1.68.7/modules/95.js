function(e, t) {
    function i() {
        this.playing = !1, this.stopping = !1, this.fade = 0, this.usedMemory = 0, this.poolRef = null, this.onEnd = null, this.id = null, this.volume = 1, this.pan = 0, this.loop = !1, this.pitch = 0, this._loaded = !1, this._loading = !1, this._unloading = !1, this._playTriggered = 0, this._onLoadQueuedCallback = []
    }
    e.exports = i, i.prototype.setId = function(e) {
        this.id = e, this._loaded = !1
    }, i.prototype.load = function(e) {
        return this.id ? this._loaded ? e && e(null, this) : (e && this._onLoadQueuedCallback.push(e), this._loading ? void 0 : (this._loading = !0, this._load())) : e && e(new Error("noId"))
    }, i.prototype._finalizeLoad = function(e) {
        var t = this.audioManager.settings.maxPlayLatency;
        this._loaded = !e, this._loading = !1;
        for (var i = 0; i < this._onLoadQueuedCallback.length; i++) this._onLoadQueuedCallback[i](e, this);
        return this._onLoadQueuedCallback = [], this._unloading ? (this._unloading = !1, void this.unload()) : void(this._loaded && this._playTriggered && ((this.loop || Date.now() - this._playTriggered < t) && this._play(), this._playTriggered = 0))
    }, i.prototype.cancelOnLoadCallbacks = function() {
        this._onLoadQueuedCallback = []
    }, i.prototype.play = function(e, t, i) {
        return void 0 !== e && null !== e && (this.volume = e), void 0 !== t && null !== t && this.setPan(t), this._loaded ? this.loop && this.playing ? void this._updatePlayPitch(i) : void this._play(i) : (this._playTriggered = Date.now(), void this.load())
    }, i.prototype.init = function() {}, i.prototype.setVolume = function(e) {
        this.volume = e
    }, i.prototype.setPan = function(e) {
        this.pan = e
    }, i.prototype.setLoop = function(e) {
        this.loop = e
    }, i.prototype.setPitch = function(e) {
        this.pitch = e
    }, i.prototype._updatePlayPitch = function() {}, i.prototype.changeAudioContext = function() {}, i.prototype.reinitializeAudio = function() {}, i.prototype._play = function() {
        this.playing = !0, console.log('ISound play call: "' + this.id + '"')
    }, i.prototype.stop = function(e) {
        return this.playing = !1, e && e()
    }, i.prototype._load = function() {
        return console.log("ISound load call: " + this.id), this._finalizeLoad(null)
    }, i.prototype.unload = function() {
        return this._playTriggered = 0, this.setLoop(!1), this.fade = 0, this.pitch = 0, this.stop(), this._loading ? (this._unloading = !0, !1) : (this.setVolume(1), this.setPan(0), this.id = null, this._loaded = !1, this.usedMemory = 0, !0)
    }
}
