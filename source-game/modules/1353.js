function(e, t, i) {
    function n(e, t, i, n) {
        n || (n = !1), e.table = e.appendChild(new u(t, i, {
            clickable: !1
        })), e.table.scroller.setEnable(n)
    }

    function o(e, t) {
        return e.table.getRowCount() > 0 && e.table.clearContent(), t ? h(t) ? e.table.setPlaceholderText(p("ui.search.noResult")) : (e.table.setPlaceholderText(null), void e.table.addMap(t)) : e.table.setPlaceholderText(p("ui.toa.ladderUnavailable"))
    }

    function a(e) {
        var t = new m("div", {
                className: "rewardsDisplay"
            }),
            i = window.gui.playerData.ToaData.ranks[e];
        return i ? (r(i, function(e, n) {
            if (e) return void console.error("Loaded static achievement data error", e);
            var o = [],
                a = [];
            n.sort(function(e, t) {
                var i = e.quantity || 6,
                    n = t.quantity || 6;
                return n - i
            });
            for (var r = 0; r < n.length; r += 1) n[r] && n[r].data && (a.push(n[r].data.id), o.push(n[r]));
            g.getItems(a, function(e) {
                if (e) return void console.error("Failed to get items", e);
                if (t && t.rootElement) {
                    for (var n = 0; n < a.length; n += 1) {
                        var r = a[n],
                            s = g.items[r],
                            l = t.appendChild(new M({
                                name: "icon" + n
                            })),
                            d = o[n];
                        if (s && "Item" === d.data._type) {
                            var u = p("ui.item.averageprice") + " : ",
                                h = s.getProperty("averagePrice");
                            u += h === -1 ? p("ui.item.averageprice.unavailable") : _.kamasToString(h), l.setContextMenu("item", {
                                item: s
                            })
                        }
                        var f = d.url,
                            b = d.quantity,
                            A = d.data;
                        l.setImage(f), b && l.setQuantity(b);
                        var O = new m("div");
                        O.createChild("div", {
                            text: A.nameId || c(A)
                        }), u && "Item" === d.data._type && O.createChild("div", {
                            text: u
                        }), A.descriptionId && O.createChild("div", {
                            text: A.descriptionId,
                            className: "details"
                        }), l.setTooltip(O)
                    }
                    if (i.goultines) {
                        var v = t.appendChild(new M({
                            name: "iconGoultine"
                        }));
                        v.icon.addClassNames("iconGoultine"), v.setQuantity(i.goultines);
                        var y = new m("div");
                        y.createChild("div", {
                            text: p("ui.common.goultines")
                        }), v.setTooltip(y)
                    }
                }
            })
        }), t) : t
    }

    function r(e, t) {
        function i(e, i) {
            if (!c) return e ? (c = !0, t(e)) : (l = l.concat(i), a += i.length, r += 1, a === o || r === n.length ? t(null, l) : void 0)
        }
        if (!e) return t(null, []);
        for (var n = ["Items", "Ornaments"], o = 0, a = 0, r = 0, c = !1, l = [], d = [], u = [], p = 0; p < e.rewards.length; p++) d.push(e.rewards[p].itemId), u.push(e.rewards[p].quantity);
        var h = [];
        return e.ornament > 0 && h.push(e.ornament), o += d.length + h.length, s(n[0], d, "gfx/items", "iconId", u, i), s(n[1], h, "gfx/ornaments", "iconId", [], i), 0 === o ? t(null, []) : void 0
    }

    function s(e, t, i, n, o, a) {
        return t.length ? void f.getDataMap(e, t, null, function(e, r) {
            function s(e) {
                if (c.length !== e.length) return a("Achievement: Missing rewards data or images");
                var t = c.map(function(t, i) {
                    var n = l[t] || {};
                    return {
                        url: e[i],
                        quantity: n.quantity,
                        data: n.data
                    }
                });
                return a(null, t)
            }
            if (e) return a(e);
            for (var c = [], l = {}, d = 0; d < t.length; d += 1) {
                var u = r[t[d]],
                    p = A.join(i, null !== n ? u[n] + ".png" : "");
                l[p] = {
                    data: u,
                    quantity: o[d] || null
                }, c.push(p)
            }
            return b.preloadImages(c, s)
        }) : a(null, [])
    }

    function c(e) {
        return window.gui.playerData.characterBaseInformations.sex ? e.nameFemaleId : e.nameMaleId
    }

    function l(e, t) {
        e.table.setContentLoading(t)
    }

    function d() {
        return window.gui.playerData.ToaData.current.steps ? window.gui.playerData.ToaData.current.steps : null
    }
    var u = i(765),
        p = i(17)
        .getText,
        h = i(32)
        .isEmptyObject,
        f = i(130),
        b = i(12),
        m = i(72),
        M = i(873),
        g = i(469),
        _ = i(16),
        A = i(1354);
    e.exports.createTable = n, e.exports.setContent = o, e.exports.displayRewardsDetails = a, e.exports.loadImages = s, e.exports.tabSpinner = l, e.exports.getStepsData = d
}
