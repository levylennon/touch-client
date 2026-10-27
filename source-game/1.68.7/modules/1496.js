function(e, t, i) {
    function n(e, t) {
        e === m.TAP_MARKER && (t.layer = h.MAP_LAYER_TAP_FEEDBACK), p.call(this, t), this.setWhiteListedness(!0), this.infos = e
    }

    function o() {
        var e = 1.5,
            t = [1, 0, 0, 1],
            i = [0, 0, 1, 1];
        for (var o in m) {
            var a = m[o];
            if (3 === a.id || 4 === a.id) var r = new n(a, {
                scene: window.isoEngine.mapRenderer.mapScene,
                layer: h.MAP_LAYER_BACKGROUND,
                hue: 3 === a.id ? t : i,
                sx: e,
                sy: e
            });
            else r = new n(a, {
                scene: window.isoEngine.mapRenderer.mapScene
            });
            M[a.id] = r, f.loadAnimationManager(r, "embedded", "tapFeedback")
        }
    }

    function a(e, t) {
        var i = M[e.id];
        return i ? void i.play(t) : console.warn("Tap feedback", e.id, "does not exist.")
    }

    function r(e) {
        var t = M[e.id];
        t && t.remove()
    }

    function s(e) {
        a(m.MOVEMENT_MARKER, e)
    }

    function c() {
        r(m.MOVEMENT_MARKER), r(m.TURN_MARKER_RED), r(m.TURN_MARKER_BLUE)
    }

    function l(e) {
        a(m.TAP_MARKER, e)
    }

    function d() {
        r(m.TAP_MARKER)
    }
    var u = i(56)
        .inherits,
        p = i(696),
        h = i(13),
        f = i(697),
        b = i(425),
        m = {
            TAP_MARKER: {
                id: 1,
                animationName: "touch_anim_ok",
                isLoop: !1
            },
            MOVEMENT_MARKER: {
                id: 2,
                animationName: "marqueur_anim_ok",
                isLoop: !0
            },
            TURN_MARKER_RED: {
                id: 3,
                animationName: "marqueur_anim_ok",
                isLoop: !0
            },
            TURN_MARKER_BLUE: {
                id: 4,
                animationName: "marqueur_anim_ok",
                isLoop: !0
            }
        },
        M = {};
    u(n, p), n.prototype.play = function(e) {
        var t = this.infos,
            i = this,
            n = t.isLoop,
            o = function() {
                i.remove(!1)
            };
        n && (o = void 0), this.animManager.assignSymbol({
            base: t.animationName,
            direction: -1
        }, n, o), (e.position || 0 === e.position) && (this.position = e.position), this.x = e.x, this.y = e.y, this.show()
    }, t.initialize = function() {
        o()
    }, t.addMovementFeedback = s, t.removeMovementFeedback = c, t.addTapFeedback = l, t.removeTapFeedback = d, t.addTurnFeedback = function(e, t) {
        var i = t === b.TEAM_CHALLENGER ? m.TURN_MARKER_RED : m.TURN_MARKER_BLUE;
        a(i, e)
    }, t.moveRedFeedback = function(e, t) {
        var i = M[3];
        i.x = e, i.y = t
    }, t.moveBlueFeedback = function(e, t) {
        var i = M[4];
        i.x = e, i.y = t
    }
}
