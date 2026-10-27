function(e, t, i) {
    function n(e, t, i, n, o, a) {
        this.id = e, this.soundIds = t, this.volumes = i || [], this.pitches = o || [], this.rollOffs = n || [], this.soundIndex = 0, this.volIndex = 0, this.pitchIndex = 0, this.poolRef = null, this._ready = !1, 0 === this.volumes.length && this.volumes.push(1), 0 === this.pitches.length && this.pitches.push(0), a || this._createSounds()
    }
    var o = i(97),
        a = new o(console);
    e.exports = n, n.prototype._createSounds = function() {
        for (var e = this.soundIds, t = 0; t < e.length; t++) this.audioManager.loadSound(e[t], {
            soundGroupId: this.id
        });
        this._ready = !0
    }, n.prototype.play = function(e, t, i, n) {
        if (0 !== this.soundIds.length) {
            this._ready || this._createSounds(), this.soundIndex = Math.trunc(Math.random() * this.soundIds.length), this.volIndex = this.soundIndex, this.pitchIndex = this.soundIndex;
            var o = this.soundIndex,
                r = this.soundIds[this.soundIndex],
                s = this.audioManager.getSound(r);
            if (!s) return console.warn("[Sound Group: " + this.id + "] sound id " + r + "  cannot be played.");
            t = t || 0;
            var c = a.getVolumeRollOff(this.rollOffs[o], t, this.id + " with " + r + ".mp3");
            e = e || 1, n = n || 0, e *= this.volumes[this.volIndex], e *= c, n += this.pitches[this.pitchIndex], s.play(e, i, n)
        }
    }, n.prototype.verifySounds = function() {
        for (var e = 0; e < this.soundIds.length; e++) {
            var t = this.soundIds[e];
            this.audioManager.createSound(t)
        }
    }
}
