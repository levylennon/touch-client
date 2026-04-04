function(e, t, i) {
    function n(e, t) {
        s[t] || (s[t] = !0, e.error(t))
    }

    function o(e, t, i, n, o) {
        return e.createAnimSoundGroups(t.getSoundGroupDefs(i, n), "sfx"), o(null, t.getAnimNameAudio(i))
    }

    function a(e, t, i, n) {
        if (this._isReady = !1, !e) throw new Error("Need the logger!");
        return this._logger = e, t ? (this._staticContent = t, i ? (this._audioManager = i, n ? (this._assetPreloader = n, this._cache = {}, this._processingCb = {}, void(this._isReady = !0)) : this._logger.error(new Error("Need the assetPreloading."))) : this._logger.error(new Error("Need the audioManager."))) : this._logger.error(new Error("Need the static."))
    }
    var r = i(710),
        s = {};
    e.exports = a, a.prototype._addToCache = function(e, t) {
        void 0 === this._cache[e] && (this._cache[e] = t)
    }, a.prototype._getFromCache = function(e) {
        return this._cache[e]
    }, a.prototype._gatherStaticDataAndAddToCache = function(e, t) {
        function i(e, t, i) {
            e || a._addToCache(t, i);
            var n = a._processingCb[t] || [];
            a._processingCb[t] = null;
            for (var o = 0; o < n.length; o += 1) n[o](e, i)
        }
        if (isNaN(e) || !e) return t();
        var o = this._getFromCache(e);
        if (null === o) return t();
        var a = this;
        return this._processingCb[e] ? void this._processingCb[e].push(t) : (this._processingCb[e] || (this._processingCb[e] = []), this._processingCb[e].push(t), void this._staticContent.getDataMap("SoundBones", [e], null, function(t, o) {
            if (t) return i(t, e, null);
            var s = o[e];
            if (!s) return i(t, e, null);
            if (!s.keys) return n(a._logger, "No keys soundBonesData for bonesId: " + e), i(t, e, null);
            if (!s.values) return n(a._logger, "No values soundBonesData for bonesId: " + e), i(t, e, null);
            var c = new r(a._logger, a._assetPreloader, e, s.keys, s.values);
            c.processSoundBones(function(t) {
                return i(t, e, c)
            })
        }))
    }, a.prototype.getAudio = function(e, t, i, n) {
        if (!this._isReady) return n();
        if (isNaN(e) || !e) return n();
        var a = this._getFromCache(e);
        if (a) return o(this._audioManager, a, t, i, n);
        var r = this;
        this._gatherStaticDataAndAddToCache(e, function(e, a) {
            return e ? n(e) : a ? o(r._audioManager, a, t, i, n) : n()
        })
    }
}
