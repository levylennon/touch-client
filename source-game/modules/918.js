function(e, t) {
    function i(e, t) {
        this.value = e, this.originalValue = e, this.forceLeft = 0, this.forceRight = 0, this.left = t, this.right = null, t && (t.right = this)
    }

    function n(e, t, n) {
        if (!(e.length < 2)) {
            n = n || o, e.sort(t);
            var s, c = [],
                l = null,
                d = !0,
                u = null;
            for (s = 0; s < e.length; s++) u = new i(e[s].getAngle(), u), c.push(u), l = l || u, d = d && u.distance(l) < n;
            if (d) {
                if (e[e.length - 1].getAngle() - e[0].getAngle() > n) {
                    for (s = 1; s < e.length; s++)
                        if (e[s].getAngle() - e[0].getAngle() > n) {
                            c[s - 1].right = null, c[s].left = null;
                            break
                        } c[0].left = u, u.right = c[0]
                }
            } else c[0].left = u, u.right = c[0];
            for (var p = 1 / 0, h = a * e.length, f = 0; p > h && !(++f >= r);) {
                for (p = 0, s = 0; s < c.length; s++) c[s].updateForces(n);
                for (s = 0; s < c.length; s++) p += c[s].updateValue()
            }
            for (s = 0; s < e.length; s++) e[s].setCorrectedAngle(c[s].value)
        }
    }
    var o = .08,
        a = .001,
        r = 1e3,
        s = 1e-4,
        c = 2 * Math.PI;
    i.prototype.updateValue = function() {
        var e = this.forceLeft - this.forceRight;
        return this.value += e, Math.abs(e)
    }, i.prototype.distance = function(e) {
        if (!e) return 1 / 0;
        var t = Math.abs(e.value - this.value);
        return Math.min(t, c - t)
    }, i.prototype.updateForces = function(e) {
        var t = this.distance(this.left),
            i = this.distance(this.right);
        this.forceLeft = t < e + s ? (e - t) / 2 : 0, this.forceRight = i < e + s ? (e - i) / 2 : 0
    }, e.exports = n
}
