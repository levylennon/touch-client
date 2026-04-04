function(e, t, i) {
    "use strict";
    var n = i(764),
        o = i(761),
        a = i(13),
        r = i(14),
        s = 0,
        c = 2,
        l = 4,
        d = 6;
    e.exports = function(e, t, i, u, p) {
        function h(e, t) {
            var i, n = -1,
                a = [],
                r = 0,
                s = 0,
                c = !1;
            for (r = 0, s = e.length; r < s; r += 1) i = e[r], c = i.status === o.ONLINE && t.indexOf(i.id) === -1, c && (n === -1 || n > i.completion) && (n = i.completion);
            for (r = 0, s = e.length; r < s; r += 1) {
                i = e[r];
                var l = i.staticData.server;
                l.nameId = l.nameId || "n/a", c = i.status === o.ONLINE && t.indexOf(i.id) === -1, c && l.populationId === n && a.push(i)
            }
            return a
        }

        function f(e) {
            e.completion !== n.COMPLETION_FULL && g.push(e)
        }

        function b(e) {
            e.completion !== n.COMPLETION_FULL && _.push(e)
        }
        for (var m, M = r(), g = [], _ = [], A = [], O = 0; O < e.length; O += 1) {
            var v = e[O];
            if (v) {
                var y = t && t.data || {},
                    z = y[v.id];
                if (z) {
                    switch (v.staticData || (v.staticData = {}), v.staticData.server = z, v.id) {
                        case a.GRANDAPAN_SERVERID:
                        case a.DODGE_SERVERID:
                        case a.BRUTAS_SERVERID:
                        case a.OSHIMO_SERVERID:
                        case a.TERRA_COGITA_SERVERID:
                        case a.HERDEGRIZE_SERVERID:
                            v.completion = n.COMPLETION_AVERAGE, z.populationId = n.COMPLETION_AVERAGE;
                            break;
                        case a.TILIWAN_1_SERVERID:
                        case a.TILIWAN_2_SERVERID:
                        case a.TALOK_1_SERVERID:
                        case a.EPSILON_1_SERVERID:
                        case 530:
                        case 531:
                        case 532:
                        case 533:
                            v.completion = n.COMPLETION_RECOMANDATED, z.populationId = n.COMPLETION_RECOMANDATED;
                            break;
                        case a.TOURNAMENT_TEST_SERVERID:
                        case a.TOURNAMENT_PROD_SERVERID:
                            v.completion = n.COMPLETION_FULL, z.populationId = n.COMPLETION_FULL
                    }
                    M.gui.playerData.identification.hasConsoleRight || a.INVISIBLE_SERVER_IDS.indexOf(v.id) !== -1 && (v.completion = n.COMPLETION_FULL);
                    var w = z.communityId,
                        T = i === l || i === d,
                        C = w === l || w === d,
                        I = i !== s && !T,
                        S = w !== s && !C;
                    v.id === a.BETA_SERVERID ? m = v : i === s && w === s ? f(v) : T && C ? f(v) : I && S && f(v), w === c && b(v)
                } else console.warn("WARN: server", v.id, "has no staticContent")
            }
        }
        return 0 === g.length && (g = g.concat(_)), 0 === g.length && m && f(m), 0 === g.length ? p("My community servers is empty, for userCommunity " + i) : (A = h(g, u), 0 === A.length ? p("Available servers is empty, for userCommunity " + i) : p(null, A, _))
    }
}
