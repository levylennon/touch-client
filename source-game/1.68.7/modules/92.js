function(e, t, i) {
    function n(e) {
        this.soundsById = {}, this.soundGroupsById = {}, this.permanentSounds = {}, this.freeSoundPool = [], this.soundArchive = new a(function() {
            return 1
        }), this.soundGroupArchive = new a(function() {
            return 1
        }), this.soundArchiveById = {}, this.soundGroupArchiveById = {}, this.totalUsedMemory = 0, this.channels = {}, this.audioContext = null, this.loopAudioContext = null, this.muted = !1, this.settings = {
            audioPath: "",
            maxSoundGroup: 500,
            maxUsedMemory: 300,
            defaultFade: 2,
            maxPlayLatency: 1e3,
            crossFading: !1,
            getFileUri: function(e, t) {
                return e + t + ".mp3"
            },
            getSoundConstructor: function() {
                return null
            }
        };
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            this.channels[i] = new c(i)
        }
        l.prototype.audioManager = this, s.prototype.audioManager = this, c.prototype.audioManager = this
    }
    var o = window.AudioContext || window.webkitAudioContext,
        a = i(93),
        r = i(94),
        s = i(96),
        c = i(98),
        l = i(95);
    o || (console.warn("Web Audio API is not supported on this platform. Fallback to regular HTML5 <Audio>"), r = i(99), window.Audio || (console.warn("HTML5 <Audio> is not supported on this platform. Sound features are unavailable."), r = l));
    var d = new l;
    e.exports = n, n.prototype.init = function() {
        if (o) {
            this.audioContext && this.audioContext.close(), this.audioContext = new o, this.loopAudioContext && this.loopAudioContext.close(), this.loopAudioContext = new o, r.prototype.audioContext = this.audioContext, r.prototype.loopAudioContext = this.loopAudioContext;
            for (var e in this.soundsById) this.soundsById.hasOwnProperty(e) && this.soundsById[e].init()
        }
    }, n.prototype.getEmptySound = function(e, t) {
        var i, n = this.settings.getSoundConstructor(e, t);
        return n ? i = new n : (this.freeSoundPool.length > 0 ? (i = this.freeSoundPool.pop(), i.init()) : i = new r, i)
    }, n.prototype.setup = function(e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var i = e[t];
                this.setVolume(t, i.volume, i.muted)
            }
    }, n.prototype.addChannel = function(e) {
        this.channels[e] || (this.channels[e] = new c(e))
    }, n.prototype.setVolume = function(e, t, i) {
        var n = this.channels[e];
        n && n.setVolume(t, i)
    }, n.prototype.setMute = function(e) {
        void 0 === e && (e = !this.muted), this.muted = Boolean(e), this.audioContext && this.audioContext.resume && this.audioContext.resume();
        for (var t in this.channels)
            if (this.channels.hasOwnProperty(t)) {
                var i = this.channels[t];
                if (!i.loopSound) continue;
                if (e) i.loopSound.stop();
                else {
                    var n = i.muted;
                    i.muted = !0, i.setVolume(null, n)
                }
            }
    }, n.prototype.loadSound = function(e, t, i) {
        t = t || {};
        var n = this.createSound(e);
        n.load(function(n) {
            if (n && "FROM_MISSING_AUDIO_LIST" !== n) {
                var o = "";
                switch (typeof n) {
                    case "string":
                        o = n;
                        break;
                    case "object":
                        try {
                            o = JSON.stringify(n)
                        } catch (a) {
                            o = "failed stringify: " + a
                        }
                        break;
                    default:
                        console.error("loadSound: UNKNOWN typeof " + typeof n + " for " + n)
                }
                console.warn("loadSound: error " + o + ' for "audio/' + e + '.mp3": "' + t.soundGroupId + '",')
            }
            if (i) return i()
        })
    }, n.prototype.createSound = function(e, t) {
        var i = this.getSound(e);
        return i ? i : (i = this.getEmptySound(t, e), this.soundsById[e] = i, i.setId(e), i)
    }, n.prototype._calculateMem = function() {
        var e = 0;
        for (var t in this.permanentSounds)
            if (this.permanentSounds.hasOwnProperty(t)) {
                var i = this.permanentSounds[t];
                e += i.usedMemory
            } for (var n in this.soundsById)
            if (this.soundsById.hasOwnProperty(n)) {
                var o = this.soundsById[n];
                e += o.usedMemory
            } return this.totalUsedMemory = e, e
    }, n.prototype.createSoundPermanent = function(e, t) {
        var i = this.getSound(e);
        if (i) return i;
        var n = this.settings.getSoundConstructor(t, e) || r;
        return this.permanentSounds[e] = new n, i = this.permanentSounds[e], i.setId(e), i
    }, n.prototype.getSound = function(e) {
        var t = this.permanentSounds[e];
        return t ? t : (t = this.soundsById[e]) ? t : (t = this.soundArchiveById[e]) ? (this.soundArchive.removeByRef(t.poolRef), t.poolRef = null, delete this.soundArchiveById[e], this.soundsById[e] = t, t) : null
    }, n.prototype.getSoundGroup = function(e) {
        var t = this.soundGroupsById[e];
        return t ? t : (t = this.soundGroupArchiveById[e]) ? (this.soundGroupArchive.removeByRef(t.poolRef), t.poolRef = null, delete this.soundGroupArchiveById[e], t.verifySounds(), this.soundGroupsById[e] = t, t) : null
    }, n.prototype.freeSound = function(e) {
        var t = e.id;
        this.soundsById[t] && delete this.soundsById[t], this.soundArchiveById[t] && (this.soundArchive.removeByRef(e.poolRef), e.poolRef = null, delete this.soundArchiveById[t]), e.unload(), e instanceof r && this.freeSoundPool.push(e)
    }, n.prototype.playLoopSound = function(e, t, i, n, o, a, r) {
        var s = this.channels[e];
        return s ? void s.playLoopSound(t, i, n, o, a, r) : console.warn('Channel id "' + e + '" does not exist.')
    }, n.prototype.stopLoopSound = function(e) {
        var t = this,
            i = this.channels[e];
        if (!i) return console.warn('Channel id "' + e + '" does not exist.');
        var n = i.loopSound;
        i.loopId = null, n && n.stop(function() {
            t.freeSound(n), i.loopSound = null
        })
    }, n.prototype.stopAllLoopSounds = function() {
        for (var e in this.channels) this.stopLoopSound(e)
    }, n.prototype.release = function() {
        var e, t, i, n = this.settings.maxSoundGroup,
            a = this.settings.maxUsedMemory;
        this.audioContext && this.audioContext.close(), this.audioContext = new o, r.prototype.audioContext = this.audioContext;
        var s = {};
        for (e in this.channels) {
            var c = this.channels[e];
            c.loopSound && (s[c.loopSound.id] = !0)
        }
        for (e in this.soundGroupsById) t = this.soundGroupsById[e], t.poolRef = this.soundGroupArchive.add(t), this.soundGroupArchiveById[e] = t, delete this.soundGroupsById[e];
        for (e in this.permanentSounds) i = this.permanentSounds[e], i.changeAudioContext(this.audioContext), s[e] || i.reinitializeAudio();
        for (e in this.soundArchiveById) i = this.soundArchiveById[e], i.changeAudioContext(this.audioContext), s[e] || i.reinitializeAudio();
        for (e in this.soundsById) i = this.soundsById[e], i.changeAudioContext(this.audioContext), s[e] || (i.reinitializeAudio(), i.poolRef = this.soundArchive.add(i), this.soundArchiveById[e] = i, delete this.soundsById[e]);
        for (e in this.freeSoundPool) i = this.freeSoundPool[e], i.changeAudioContext(this.audioContext), s[e] || i.reinitializeAudio();
        for (var l = this.soundGroupArchive.getCount(); l > n && (t = this.soundGroupArchive.popFirst());) t.poolRef = null, delete this.soundGroupArchiveById[t.id], l -= 1;
        for (this._calculateMem(); this.totalUsedMemory > a;) {
            if (i = this.soundArchive.popFirst(), !i) {
                this._calculateMem(), this.totalUsedMemory > a && console.warn("No more sound to release but " + this.totalUsedMemory + " used out of " + a);
                break
            }
            i.poolRef = null, delete this.soundArchiveById[i.id], this.freeSound(i), this._calculateMem()
        }
    }, n.prototype.playSound = function(e, t, i, n, o) {
        if (this.muted) return d;
        var a = this.channels[e];
        if (a.muted) return d;
        var r = this.getSound(t);
        return r || (r = this.createSound(t, e)), i = i || 1, r.play(a.volume * i, n, o), r
    }, n.prototype.playSoundGroup = function(e, t, i, n, o, a) {
        if (!this.muted) {
            var r = this.channels[e];
            if (r && !r.muted) {
                var s = this.getSoundGroup(t);
                if (!s) return console.error(new Error('SoundGroup "' + t + '" does not exist.'));
                i = i || 1, n = n || 1, s.play(i * r.volume, n, o, a)
            }
        }
    }, n.prototype.createSoundGroup = function(e, t, i) {
        this.getSoundGroup(e) || (this.soundGroupsById[e] = new s(e, t.id, t.vol, t.rollOff, t.pitch, i))
    }, n.prototype.createSoundGroups = function(e, t) {
        var i = void 0 !== t && this.channels[t].muted;
        for (var n in e) this.createSoundGroup(n, e[n], i)
    }
}
