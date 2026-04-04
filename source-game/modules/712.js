function(e, t) {
    function i(e, t) {
        this._bonesId = e, this._animName = t, this._availableFrames = {}, this._data = {}, this._cacheIds = {}, this.isSoundAnimationsPerFrame = !0
    }
    var n = "null";
    i.prototype.addSoundAnimation = function(e, t) {
        this._availableFrames[e] = !0, this._data[e] || (this._data[e] = []), this._data[e].push(t)
    }, i.prototype.getId = function(e, t, i) {
        if (!this._availableFrames[e]) return "";
        var n = "";
        return i && (n = i.toString()), this._bonesId + "/" + this._animName + ":" + e + "_" + t + "_" + n
    }, i.prototype.getIds = function(e, t) {
        if (!t || !Array.isArray(t)) throw new Error("missing skinIds");
        if (!this._availableFrames[e]) return [""];
        if (this._cacheIds[e]) {
            for (var i = this._cacheIds[e], o = [], a = 0; a < i.length; a += 1) {
                var r = i[a],
                    s = r.split("_"),
                    c = parseInt(s.pop(), 10),
                    l = s.pop();
                (l === n || isNaN(c) || t[0] && t[0] === c) && o.push(r)
            }
            return o
        }
        return [this.getId(e, n)]
    }, i.prototype.getSoundAnimation = function(e) {
        return this._data[e] || []
    }, i.prototype.hasSoundForFrame = function(e) {
        return this._data[e] && 0 !== this._data[e].length || !1
    }, i.prototype.getSoundGroupDefs = function() {
        var e = {};
        for (var t in this._data)
            if (this._data.hasOwnProperty(t)) {
                for (var i = parseInt(t, 10), n = this.getSoundAnimation(i), o = {}, a = 0; a < n.length; a += 1) {
                    var r = n[a],
                        s = this.getId(i, r.label, r.skinId);
                    e[s] = e[s] || {
                        animName: this._animName,
                        label: r.label,
                        skinId: r.skinId,
                        id: [],
                        rollOff: [],
                        vol: []
                    }, e[s].id.push(r.filename), e[s].vol.push(r.volume), e[s].rollOff.push(r.rollOff), o[s] = !0
                }
                this._cacheIds[i] = Object.keys(o)
            } return e
    }, e.exports = i
}
