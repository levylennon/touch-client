function(e, t) {
    var i, n = {};
    t.setAccountInfo = function(e, t) {
        n = {};
        var o = t % 10,
            a = !1;
        1 === o && (e += "1", a = !0);
        var r = e.indexOf("W") !== -1,
            s = e.indexOf("Q") !== -1;
        n.decoRecoResend = r || s || a, n.scrollerBoundToWrapper = r || s, n.singleTooltip = r || s, n.performanceLog = r || s || a, i = e
    }, t.isFeatureOn = function(e) {
        return void 0 === i && console.warn("isFeatureOn(" + e + ") called before we can tell"), Boolean(n[e])
    }, t.getGroupFlags = function() {
        return i
    }
}
