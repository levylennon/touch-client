function(e, t, i) {
    var n = i(842),
        o = i(34)
        .logger;
    n.config({
        ROUNDING_MODE: n.ROUND_HALF_EVEN
    }), n.DEBUG = !0, t.parsePriceMicros = function(e) {
        var t;
        try {
            var i = new n(e);
            t = i.times("0.000001")
                .toNumber()
        } catch (a) {
            return o.error(new Error("Could not parse price " + e)), NaN
        }
        return t === 1 / 0 || t === -(1 / 0) ? (o.error(new Error("Parsed price is Infinity: " + e)), NaN) : t
    }
}
