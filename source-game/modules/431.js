function(e, t) {
    var i = Math.PI,
        n = Math.PI / 2,
        o = 2 * Math.PI,
        a = 2.718281828;
    t.none = function() {
        return 1
    }, t.linear = function(e) {
        return e
    }, t.flash = function(e, t) {
        return e + e * t - e * e * t
    }, t.parabolic = function(e) {
        var t = 2 * e - 1;
        return 1 - t * t
    }, t.trigo = function(e, t) {
        return .5 * (1 - Math.cos(o * e * t))
    }, t.elastic = function(e, t) {
        if (1 === e) return 1;
        t /= t + 1;
        var i = (1 + t) * Math.log(1 - e) / Math.log(t);
        return Math.cos(i - n) * Math.pow(t, i)
    }, t.quadIn = function(e) {
        return e * e
    }, t.quadOut = function(e) {
        return 2 * e - e * e
    }, t.quadInOut = function(e) {
        return e < .5 ? 2 * e * e : 2 * (2 * e - e * e) - 1
    }, t.cubicIn = function(e) {
        return e * e * e
    }, t.cubicOut = function(e) {
        return 3 * e - 3 * e * e + e * e * e
    }, t.cubicInOut = function(e) {
        return e < .5 ? 4 * e * e * e : 4 * (3 * e - 3 * e * e + e * e * e) - 3
    }, t.quarticIn = function(e) {
        return e * e * e * e
    }, t.quarticOut = function(e) {
        var t = e * e;
        return 4 * e - 6 * t + 4 * t * e - t * t
    }, t.quarticInOut = function(e) {
        if (e < .5) return 8 * e * e * e * e;
        var t = e * e;
        return 8 * (4 * e - 6 * t + 4 * t * e - t * t) - 7
    }, t.polyIn = function(e, t) {
        return Math.pow(e, t)
    }, t.polyOut = function(e, t) {
        return 1 - Math.pow(1 - e, t)
    }, t.polyInOut = function(e, t) {
        return e < .5 ? Math.pow(2 * e, t) / 2 : (2 - Math.pow(2 * (1 - e), t)) / 2
    }, t.sineIn = function(e) {
        return 1 - Math.cos(n * e)
    }, t.sineOut = function(e) {
        return Math.sin(n * e)
    }, t.sineInOut = function(e) {
        return e < .5 ? (1 - Math.cos(i * e)) / 2 : (1 + Math.sin(i * (e - .5))) / 2
    }, t.expIn = function(e, t) {
        return (1 - Math.pow(a, t * e)) / (1 - Math.pow(a, t))
    }, t.expOut = function(e, t) {
        return (1 - Math.pow(a, -t * e)) / (1 - Math.pow(a, -t))
    }, t.expInOut = function(e, t) {
        return e < .5 ? (1 - Math.pow(a, 2 * t * e)) / (1 - Math.pow(a, t)) / 2 : .5 + (1 - Math.pow(a, t - 2 * t * e)) / (1 - Math.pow(a, -t)) / 2
    }, t.circIn = function(e) {
        return 1 - Math.sqrt(1 - Math.pow(e, 2))
    }, t.circOut = function(e) {
        return Math.sqrt(1 - Math.pow(1 - e, 2))
    }, t.circInOut = function(e) {
        return e < .5 ? (1 - Math.sqrt(1 - 4 * e * e)) / 2 : (1 + Math.sqrt(-3 + 8 * e - 4 * e * e)) / 2
    }, t.elasticIn = function(e, t) {
        if (0 === e) return 0;
        t /= t + 1;
        var i = (1 + t) * Math.log(e) / Math.log(t);
        return Math.cos(i) * Math.pow(t, i)
    }, t.elasticOut = function(e, t) {
        if (1 === e) return 1;
        t /= t + 1;
        var i = (1 + t) * Math.log(1 - e) / Math.log(t);
        return 1 - Math.cos(i) * Math.pow(t, i)
    }, t.elasticInOut = function(e, t) {
        var i;
        return e < .5 ? 0 === e ? 0 : (t /= t + 1, i = (1 + t) * Math.log(2 * e) / Math.log(t), .5 * Math.cos(i) * Math.pow(t, i)) : 1 === e ? 1 : (t /= t + 1, i = (1 + t) * Math.log(2 - 2 * e) / Math.log(t), .5 + .5 * (1 - Math.cos(i) * Math.pow(t, i)))
    }, t.bounceIn = function(e, t) {
        if (0 === e) return 0;
        t /= t + 1;
        var i = (1 + t) * Math.log(e) / Math.log(t);
        return Math.abs(Math.cos(i) * Math.pow(t, i))
    }, t.bounceOut = function(e, t) {
        if (1 === e) return 1;
        t /= t + 1;
        var i = (1 + t) * Math.log(1 - e) / Math.log(t);
        return 1 - Math.abs(Math.cos(i) * Math.pow(t, i))
    }, t.bounceInOut = function(e, t) {
        var i;
        return e < .5 ? 0 === e ? 0 : (t /= t + 1, i = (1 + t) * Math.log(2 * e) / Math.log(t), Math.abs(.5 * Math.cos(i) * Math.pow(t, i))) : 1 === e ? 1 : (t /= t + 1, i = (1 + t) * Math.log(2 - 2 * e) / Math.log(t), .5 + .5 * (1 - Math.abs(Math.cos(i) * Math.pow(t, i))))
    }, t.backIn = function(e, t) {
        return e * e * ((t + 1) * e - t)
    }, t.backOut = function(e, t) {
        return e -= 1, e * e * ((t + 1) * e + t) + 1
    }, t.backInOut = function(e, t) {
        return e < .5 ? (e *= 2, .5 * (e * e * ((t + 1) * e - t))) : (e = 2 * e - 2, .5 * (e * e * ((t + 1) * e + t)) + 1)
    }
}
