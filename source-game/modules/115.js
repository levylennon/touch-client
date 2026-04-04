function(e, t, i) {
    function n(e, t) {
        e = e || {};
        var i = {
            className: "closeButton",
            sound: "CANCEL_BUTTON"
        };
        for (var n in i) void 0 === e[n] && (e[n] = i[n]);
        a.call(this, e, t)
    }
    var o = i(56)
        .inherits,
        a = i(86);
    o(n, a), e.exports = n
}
