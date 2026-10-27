function(e, t, i) {
    function n(e, t, i) {
        var n = e.frames;
        this.frames = [];
        for (var a = 0; a < n.length; a += 1) this.frames.push(new o(n[a].position, t, i));
        this.id = e.id, this.className = e.className, this.sounds = e.sounds, this.duration = e.duration, this.nbFrames = this.frames.length, this.animationData = t
    }
    var o = i(701);
    n.prototype.isAnim = !0, e.exports = n
}
