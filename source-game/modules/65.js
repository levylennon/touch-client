function(e, t, i) {
    var n, o, a, r, s = i(38),
        c = i(23),
        l = c.events,
        d = c.getPosition,
        u = i(36)
        .EventEmitter,
        p = e.exports = new u;
    document.body.addEventListener(l.start, function() {
        o || (o = !0, n = null, r = null)
    }, !0), document.body.addEventListener(l.start, function() {
        n && p.emit("handleTaken", n)
    }, !1), document.body.addEventListener(l.end, function(e) {
        0 === d(e)
            .touchCount && (n = null, r = null, o = !1)
    }), p.isHandleFree = function() {
        return null === n
    }, p.hasHandle = function(e) {
        return n === e
    }, p.requestInteractionHandle = function(e, t) {
        return n ? (n !== t && console.info(e, "interaction REFUSED: owned by", a), n === t) : r && e !== r && s.isFeatureOn("scrollerBoundToWrapper") ? void console.info(e, "interaction REFUSED: priorityBehavior is", r) : (a = e, n = t, p.emit("handleTaken", n), !0)
    }, p.abortInteraction = function() {
        n = null, r = null
    }, p.setPriorityBehavior = function(e) {
        r = e
    }
}
