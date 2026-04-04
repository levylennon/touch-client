function(e, t, i) {
    var n = i(13),
        o = i(430),
        a = 1e3 / n.FPS,
        r = window.performance ? window.performance : Date,
        s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            window.setTimeout(e, a)
        },
        c = {
            gameScenes: [],
            previousUpdate: r.now(),
            addScene: function(e) {
                var t = this.gameScenes.indexOf(e);
                t === -1 ? this.gameScenes.push(e) : console.warn("[animationController.addScene] Scene already in the animation controller")
            },
            removeScene: function(e) {
                var t = this.gameScenes.indexOf(e);
                t !== -1 ? this.gameScenes.splice(t, 1) : console.warn("[animationController.removeScene] Scene not in the animation controller")
            },
            start: function() {
                function e() {
                    o.update();
                    var c = r.now(),
                        l = Math.min(c - n.previousUpdate, 200),
                        d = l > a;
                    if (d) {
                        r.now() - i >= 1e3 && (window.performanceMonitor.logFPS(t), t = 0, i = r.now()), t++, n.previousUpdate = c - l % a, l /= a;
                        for (var u = n.gameScenes, p = 0; p < u.length; p += 1) u[p].refresh(l)
                    }
                    s(e)
                }
                var t = 0,
                    i = r.now(),
                    n = this;
                e()
            },
            stop: function() {
                o.stop()
            }
        };
    e.exports = c
}
