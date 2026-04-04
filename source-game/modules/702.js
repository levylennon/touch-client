function(e, t) {
    function i(e) {
        this.id = e.id,
        this.matrices = e.matrices,
        this.colors = e.colors,
        this.frames = e.frames,
        this.maskStart = e.maskStart || !1,
        this.maskEnd = e.maskEnd || !1
    }

    function n(e, t) {
        var n = e.children;
        this.children = [];
        for (var o = 0, a = 0; a < n.length; a += 1) {
            var r = n[a];
            this.children.push(new i(r)), o < r.frames[1] && (o = r.frames[1])
        }
        this.id = e.id,
        this.duration = e.duration,
        this.className = e.className,
        this.sounds = e.sounds,
        this.nbFrames = o + 1,
        this.frameRate = t.frameRate,
        this.animationData = t
    }
    n.prototype.isAnim = !0,
    e.exports = n
}
