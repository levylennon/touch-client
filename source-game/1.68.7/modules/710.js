function(e, t, i) {
    function n(e) {
        return 1 === e || 2 === e
    }

    function o(e, t, i, n, o) {
        this._logger = e, this._assetPreloading = t, this._ready = !1, this._id = i, this._rawKeys = n, this._rawValues = o, this._soundGroupDefsMap = {}, this._barksCache = {}, this._values = {}
    }
    var a = i(711),
        r = i(712),
        s = i(713),
        c = i(18);
    o.prototype._createSoundAnimation = function(e, t, i) {
        var n = this;
        c.eachSeries(t, function(t, i) {
            n._fetchBarks(t, function(t, o) {
                if (t) return i(t);
                for (var s = 0; s < o.length; s += 1) {
                    var c = o[s],
                        l = new a(c),
                        d = l.startFrame;
                    n._values[e] || (n._values[e] = new r(n._id, e)), n._values[e].addSoundAnimation(d, l)
                }
                return i()
            })
        }, i)
    }, o.prototype._fetchBarks = function(e, t) {
        if ("bark" !== e.label) return t(null, [new s(e)]);
        if (!n(this._id)) return t(null, [new s(e)]);
        if (this._barksCache[e.filename]) return t(null, this._barksCache[e.filename]);
        var i = this;
        this._assetPreloading.loadJson("audio/audioXml/" + e.filename + ".json", function(n) {
            if (!n || !n.sounds) {
                var o = "Cannot find bark file " + e.filename + ".xml";
                o += " for " + e.name + " for bones " + i._id, i._logger.error(new Error(o))
            }
            for (var a = n && n.sounds || {}, r = a.skins || [], c = [], l = 0; l < r.length; l += 1) {
                var d, u = r[l],
                    p = u.skin.toString()
                    .replace(/ /g, "");
                d = Array.isArray(u.sound) ? u.sound : [u.sound];
                for (var h = p.split(","), f = 0; f < h.length; f += 1) {
                    var b = h[f],
                        m = parseInt(b, 10);
                    if (!isNaN(m))
                        for (var M = 0; M < d.length; M += 1) {
                            var g = d[M],
                                _ = new s(e, g.id.toString(), e.startFrame, g.rolloff, g.volume, m);
                            c.push(_)
                        }
                }
            }
            return i._barksCache[e.filename] = c, t(null, c)
        })
    }, o.prototype._processSoundGroupDefs = function() {
        this._soundGroupDefsMap = {};
        for (var e in this._values)
            if (this._values.hasOwnProperty(e)) {
                var t = this._values[e],
                    i = t.getSoundGroupDefs();
                this._soundGroupDefsMap[e] = {
                    universalSound: {},
                    skinSound: {}
                };
                for (var n in i)
                    if (i.hasOwnProperty(n)) {
                        var o = i[n].skinId;
                        0 === o ? this._soundGroupDefsMap[e].universalSound[n] = i[n] : (this._soundGroupDefsMap[e].skinSound[o] = this._soundGroupDefsMap[e].skinSound[o] || {}, this._soundGroupDefsMap[e].skinSound[o][n] = i[n])
                    }
            }
    }, o.prototype.processSoundBones = function(e) {
        for (var t = [], i = 0; i < this._rawKeys.length; i += 1) t.push(i);
        var n = this;
        c.eachSeries(t, function(e, t) {
            var i = n._rawKeys[e],
                o = n._rawValues[e];
            n._createSoundAnimation(i, o, t)
        }, function(t) {
            return t ? e(t) : (n._processSoundGroupDefs(), n._ready = !0, e())
        })
    }, o.prototype.getAnimNameAudio = function(e) {
        if (!this._ready) throw new Error("notReady");
        return this._values[e] || {}
    }, o.prototype.getSoundGroupDefs = function(e, t) {
        if (!this._ready) throw new Error("notReady");
        if (!e || !this._soundGroupDefsMap[e]) return {};
        var i, n = t[0],
            o = {};
        if (!(n > 0 && this._soundGroupDefsMap[e].skinSound[n])) return this._soundGroupDefsMap[e].universalSound;
        for (i in this._soundGroupDefsMap[e].universalSound) o[i] = this._soundGroupDefsMap[e].universalSound[i];
        for (i in this._soundGroupDefsMap[e].skinSound[n]) o[i] = this._soundGroupDefsMap[e].skinSound[n][i];
        return o
    }, e.exports = o
}
