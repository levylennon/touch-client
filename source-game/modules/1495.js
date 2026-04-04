function(e, t, i) {
    var n = i(13),
        o = i(697),
        a = i(696),
        r = {
            1: {
                1: "btn_danger_here",
                2: "btn_I_move_here",
                3: "btn_summon_here",
                4: "btn_move_me",
                5: "btn_push",
                6: "btn_there"
            },
            2: {
                1: "btn_thanks",
                2: "btn_debuff",
                3: "btn_boost",
                4: "btn_more_health",
                5: "btn_more_AP",
                6: "btn_more_movement"
            },
            3: {
                1: "btn_attack_me",
                2: "btn_debuff",
                3: "btn_push_enemy",
                4: "btn_bring_back_enemy",
                5: "btn_decrease_AP",
                6: "btn_decrease_movement"
            },
            4: {
                1: "btn_defend_me",
                2: "btn_bring_back",
                3: "btn_push",
                4: "btn_thanks",
                5: "btn_congrat",
                6: "btn_boost"
            },
            5: {
                1: "btn_defend_me",
                2: "btn_bring_back",
                3: "btn_push",
                4: "btn_more_AP",
                5: "btn_more_movement",
                6: "btn_boost"
            }
        },
        s = {};
    t.addPingPicto = function(e, t, i, c, l) {
        if (!r[l]) return void console.error("[IsoEngine.addPingPicto] No base for type", l);
        var d = new a({
            layer: n.MAP_LAYER_ICONS,
            x: t.x,
            y: t.y,
            scene: window.isoEngine.mapScene
        });
        o.loadAnimationManager(d, "embedded", "ping", function(e) {
            e.assignSymbol({
                base: r[l][c],
                direction: -1
            }, !1)
        }), s[e] = {
            front: d
        };
        var u = 70,
            p = 0,
            h = window.actorManager.getActorsOnCell(i);
        if (h.length > 0) {
            var f = h[0].bbox;
            p = f ? f[2] - t.y : -100, p -= u, t.y + p < 0 && (p = f ? f[3] - t.y : 100, p += u)
        } else p = -u, t.y + p < 0 && (p = u);
        d.y = t.y + p, window.isoEngine.mapRenderer.addPingHighlight(i, l)
    }, t.removePingPicto = function(e) {
        window.isoEngine.mapRenderer.deletePingHighlight(e);
        var t = s[e];
        return t ? (t.front && t.front.remove(), void delete s[e]) : void console.warn("IsoEngine removePing: There no ping picto with the id", e)
    }, t.removeAllPingPictos = function() {
        for (var e in s) s.hasOwnProperty(e) && t.removePingPicto(e)
    }
}
