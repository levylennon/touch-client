function(e, t, i) {
    function n(e) {
        return !!m[e] && (console.warn('audioManager: known missing audio "' + e + '" will be skip'), !0)
    }

    function o() {
        window.gui.on("appGoBackground", function() {
            y.setMute(!0)
        }), window.gui.on("appLeaveBackground", function() {
            y.setMute(!1)
        }), b.on("gameContextChanged", function() {
            r()
        })
    }

    function a() {
        for (var e in d) y.createSoundPermanent(d[e], "ui");
        v = !0
    }

    function r(e) {
        if (g && b.isRoleplayMode) y.playLoopSound("music", g.id, g.volume / 100);
        else if (b.isFightMode) {
            var t = e && A ? A : _;
            t && y.playLoopSound("music", t.id, t.volume / 100)
        }
        O && (b.isRoleplayMode ? y.playLoopSound("ambient", O.id, O.volume / 100) : y.stopLoopSound("ambient"))
    }
    var s = i(92),
        c = i(18),
        l = i(15),
        d = i(100),
        u = i(13),
        p = i(7),
        h = i(101),
        f = i(102),
        b = i(103),
        m = i(114),
        M = [null, "music", "ambient", "fight", "boss"],
        g = null,
        _ = null,
        A = null,
        O = null,
        v = !1,
        y = new s(["music", "ambient", "sfx", "ui"]);
    y.settings.maxUsedMemory = u.MAX_MUSIC_SFX_MEMORY;
    var z = c.queue(function(e, t) {
        e(t)
    }, 75);
    z.error(function(e) {
        console.error("fifo sound experienced an error " + e)
    }), window.wizAssets ? y.settings.getFileUri = function(e, t, i) {
        return n("audio/" + t + ".mp3") ? i("FROM_MISSING_AUDIO_LIST") : void z.push(function(n) {
            l.downloadFile(e + t + ".mp3", "audio/" + t + ".mp3", function(e) {
                return n(), !window.WkWebView || h.isAvailable() && window.Config.disabledFeatures.iOSHTML5Audio || (e = window.WkWebView.convertFilePath(e)), i(null, e)
            }, function(e) {
                return n(), i(e)
            })
        })
    } : y.settings.getFileUri = function(e, t) {
        return n("audio/" + t + ".mp3") ? "FROM_MISSING_AUDIO_LIST" : e + t + ".mp3"
    }, p.isCordova && (y.settings.getSoundConstructor = function(e) {
        return p.isIOSApp && h.isAvailable() && window.Config.disabledFeatures.iOSHTML5Audio ? h : p.isAndroidApp && f.isAvailable() && window.Config.disabledFeatures.AndroidHTML5Audio ? "music" === e || "ambient" === e ? f.LoopYanap : "sfx" === e || "ui" === e ? f.SoundYanap : void 0 === e ? f.SoundYanap : void console.error(new Error("audioManager: unknown channelId `" + e + "`")) : null
    });
    var t = e.exports = y;
    t.initialize = function() {
        y.init(), o()
    }, t.createUiSound = function(e) {
        y.createSoundPermanent(d[e], "ui")
    }, t.playUiSound = function(e) {
        if (!y.channels.ui.muted) {
            var t = d[e];
            if (!t) return console.warn("Incorrect UI sound id: " + e);
            v || a(), y.playSound("ui", t)
        }
    }, t.mapChange = function(e, t) {
        var i = {
            music: null,
            ambient: null,
            fight: null,
            boss: null
        };
        t = e.concat(t);
        for (var n = 0; n < t.length; n++) {
            var o = t[n],
                a = M[o.type_id];
            a && (i[a] = o)
        }
        g = i.music || g, O = i.ambient || O, _ = i.fight, A = i.boss, r()
    }, t.createAnimSoundGroups = function(e, t) {
        var i = void 0 !== t && y.channels[t].muted;
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                for (var o = e[n], a = [], r = 0; r < o.vol.length; r++) a.push(o.vol[r] / 100);
                y.createSoundGroup(n, {
                    id: o.id,
                    vol: a,
                    rollOff: o.rollOff
                }, i)
            }
    }, t.setChannelVolume = function(e, t, i) {
        y.setVolume(e, t, i), "sfx" === e && this.setChannelVolume("ambient", t, i)
    }, t.setupChannels = function(e) {
        y.setVolume("ambient", 0, !0);
        for (var t in e)
            if ("ambient" !== t) {
                var i = e[t];
                this.setChannelVolume(t, i.volume, i.muted)
            }
    }, t.getDefaultParams = function() {
        var e = {};
        for (var t in y.channels)
            if ("ambient" !== t) {
                var i = "music" === t && p.isIpad2,
                    n = i ? 0 : 1;
                "music" === t && (n = i ? 0 : .75), e[t] = {
                    muted: i,
                    volume: n
                }
            } return e
    }, t.getMemoryInformation = function() {
        return {
            maxUsedMemory: y.settings.maxUsedMemory,
            totalUsedMemory: y.totalUsedMemory
        }
    }
}
