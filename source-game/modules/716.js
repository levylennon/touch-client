function(e, t, i) {
    function n(e, t) {
        return 0 !== e.type || u[t] ? {
            parent: null,
            child: e
        } : {
            parent: e,
            child: null
        }
    }

    function o(e) {
        var t = e;
        return e.type && (t = {
            id: e.base + "0_" + d[e.direction],
            type: 0,
            base: e.base,
            direction: e.direction
        }), {
            parent: null,
            child: t
        }
    }

    function a(e) {
        return p[e.type] ? {
            parent: e,
            child: null
        } : h[e.type] ? {
            parent: e,
            child: e
        } : {
            parent: null,
            child: e
        }
    }

    function r(e) {
        var t = {
            base: "AnimCueillirSol0",
            direction: e.direction
        };
        return {
            parent: null,
            child: t
        }
    }

    function s(e) {
        var t = {
            base: "AnimEmoteWeap_0",
            direction: e.direction
        };
        return {
            parent: null,
            child: t
        }
    }

    function c(e, t, i) {
        var n = e.base,
            o = f[n];
        if (!o) return console.error("No modifier for symbol base " + n), {
            parent: null,
            child: null
        };
        if ("function" == typeof o) return o(e, t, i);
        var a = {
            parent: null,
            child: null
        };
        return o.parent && (a.parent = e), o.child && (a.child = e), a
    }
    var l = i(13),
        d = l.ANIM_SYMBOLS,
        u = {
            6035: !0
        },
        p = {
            Rest_0: !0,
            Sit_0: !0,
            Oups_0: !0,
            Shit_0: !0
        },
        h = {
            Appl_0: !0,
            Bye_0: !0,
            Champ_0: !0,
            Cross_0: !0,
            Drink_0: !0,
            Eat_0: !0,
            Fear_0: !0,
            Hi_0: !0,
            Kiss_0: !0,
            Mad_0: !0,
            Pfc1_0: !0,
            Pfc2_0: !0,
            Pfc3_0: !0,
            Pipo_0: !0,
            Point_0: !0
        },
        f = {
            AnimArme: n,
            AnimAttaque: o,
            AnimEmote: a,
            AnimLevelUpRiding: s,
            AnimCueillirSol1: r,
            AnimConsulter: {
                parent: null,
                child: !0
            },
            AnimCueillir0: {
                parent: null,
                child: !0
            },
            AnimCueillirSol0: {
                parent: null,
                child: !0
            },
            AnimDrop: {
                parent: null,
                child: !0
            },
            AnimFaucher: {
                parent: null,
                child: !0
            },
            AnimHache: {
                parent: null,
                child: !0
            },
            AnimPeche: {
                parent: null,
                child: !0
            },
            AnimPickup: {
                parent: null,
                child: !0
            },
            AnimPioche: {
                parent: null,
                child: !0
            },
            AnimPuiser: {
                parent: null,
                child: !0
            },
            AnimThrow: {
                parent: null,
                child: !0
            },
            carrying: {
                parent: null,
                child: !0
            },
            AnimArme0: {
                parent: !0,
                child: null
            },
            AnimAttaque0: {
                parent: !0,
                child: null
            },
            AnimCourse: {
                parent: !0,
                child: null
            },
            AnimMarche: {
                parent: !0,
                child: null
            },
            AnimTacle: {
                parent: !0,
                child: null
            },
            AnimStatique: {
                parent: !0,
                child: !0
            },
            AnimMort: {
                parent: !0,
                child: !0
            },
            AnimHit: {
                parent: !0,
                child: !0
            },
            AnimVanish: {
                parent: !0,
                child: !0
            }
        };
    e.exports = c
}
