function(e, t, i) {
    function n(e, t, i) {
        var n = [],
            o = [];
        if (!e || e.length < 1) return null;
        for (var a = 0; a < e.length; a++) {
            var s = e[a];
            if ("POPUP" === s.mode && s.external_article) {
                var l = s.external_article.id,
                    d = r[l];
                if (!d) continue;
                for (var p = !1, h = !1, m = 0; m < d.length; m++) {
                    var M = d[m];
                    switch (h = Boolean(M.noMinLevel), M.type) {
                        case b.LEVEL:
                            p = M.level <= u.gui.playerData.characterBaseInformations.level;
                            break;
                        case b.MAP:
                            p = M.mapId === u.gui.playerData.position.mapId
                    }
                    if (p) break
                }
                if (u.gui.playerData.characterBaseInformations.level < c.MARKETING_POPUP_LEVEL_LIMIT && !h && (p = !1), !p) continue;
                var g = t[s.id];
                if (g) {
                    var _ = i.now();
                    if (_ - g < f) continue
                }
                if (s.external_article.enddate) {
                    o.push(s);
                    continue
                }
                n.push(s)
            }
        }
        return o.sort(function(e, t) {
            var i = new Date(e.external_article.enddate),
                n = new Date(t.external_article.enddate);
            return i - n
        }), o[0] || n[0] || null
    }

    function o(e, t, i) {
        var n = [],
            o = u.gui.playerData.getSubscriptionRemainingTime(s.ELITE);
        if (!e || e.length < 1) return null;
        for (var a = 0; a < e.length; a++) {
            var l = e[a];
            if ("POPUP" === l.mode && p[l.type]) {
                var d = l.external_article && l.external_article.id;
                if (u.gui.playerData.characterBaseInformations.level < c.MARKETING_POPUP_LEVEL_LIMIT) return null;
                if ((d === c.BP_ELITE_LATAM || d === c.BP_ELITE_ROW) && o > 0 && o <= h) {
                    n = [l];
                    break
                }
                if (r[d]) continue;
                var b = t[l.id];
                if (b) {
                    var m = i.now();
                    if (m - b < f) continue
                }
                n.push(l)
            }
        }
        return n.sort(function(e, t) {
            var i = e.external_article && e.external_article.enddate,
                n = t.external_article && t.external_article.enddate,
                o = "ARTICLE" === e.type ? 0 : 1,
                a = "ARTICLE" === t.type ? 0 : 1;
            return i || n ? i && !n ? -1 : !i && n ? 1 : new Date(i) - new Date(n) : o - a
        }), n[0] || null
    }

    function a(e, t, i, n, o) {
        var r = u.gui.serversData.connectedServerId,
            s = 5e3;
        return o ? void t() : void setTimeout(function() {
            if (o = d.getValue(r + "-alreadyOpenedShop", !1), n || (n = 0), o) return void t();
            i ? (t(), e()) : t();
            var c = i ? 12e3 - s : 25e3 - s;
            n < 3 && setTimeout(function() {
                o = d.getValue(r + "-alreadyOpenedShop", !1), a(e, t, !i, n + 1, o)
            }, c)
        }, s)
    }
    var r = i(751),
        s = i(509),
        c = i(13),
        l = i(14),
        d = i(60),
        u = l(),
        p = {
            ARTICLE: 1,
            NONE: 2
        },
        h = 864e5,
        f = 30 * h,
        b = {
            LEVEL: 0,
            MAP: 1
        };
    t.getMarketingItemToDisplayWithTrigger = n, t.getMarketingItemToDisplay = o, t.handleShopAnimation = a
}
