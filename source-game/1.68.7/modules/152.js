function(e, t, i) {
    var t = e.exports = function(e) {
            var i = t[e];
            if (!i) throw new Error(e + " is not supported (we accept pull requests)");
            return new i
        },
        n = i(145)
        .Buffer,
        o = i(153)(n);
    t.sha1 = i(154)(n, o), t.sha256 = i(155)(n, o), t.sha512 = i(156)(n, o)
}
