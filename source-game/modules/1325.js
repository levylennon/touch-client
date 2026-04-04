function(e, t, i) {
    var n = i(12),
        o = i(13),
        a = i(32)
        .formatUrlToCssUrl,
        r = i(873),
        s = i(130),
        c = {
            KEY: 1,
            GIFT: 2,
            CROWN_QTY: 3
        },
        l = {
            SPECIAL_OFFER: "SPECIAL_OFFER"
        },
        d = {
            PAYMENTMODE: "PAYMENTMODE"
        },
        u = {
            IN: "IN"
        };
    t.addItemsFromArticle = function(e, t, i) {
        if (i = i || {}, e && t) {
            var l, p, h, f, b, m = [],
                M = [];
            for (l = 0; l < e.references.length; l++) {
                if (f = e.references[l], "VIRTUALGIFT" === f.type && f.reference_virtualgift)
                    for (p = 0; p < f.reference_virtualgift.length; p++) {
                        var g = f.reference_virtualgift[p];
                        b = "vg_" + g.id, m[b] && "1" !== f.quantity ? m[b].quantity++ : (m[b] = {
                            slot: t.appendChild(new r({
                                tooltip: g.name
                            })),
                            quantity: parseInt(f.quantity, 10) || 1
                        }, M.push(g.id))
                    }
                if ("GAMEACTION" === f.type && f.reference_gameaction) {
                    var _ = f.reference_gameaction || {},
                        A = _.definition || {},
                        O = A.actions || [];
                    for (p = 0; p < O.length; p++) {
                        var v = O[p];
                        "DofusTouchItem" === v.type && (b = "ga_" + v.item_id, m[b] = {
                            slot: t.appendChild(new r({
                                tooltip: A.name
                            })),
                            quantity: v.quantity
                        }, M.push(v.item_id))
                    }
                }
                if ("GAMEACTION" !== f.type && "VIRTUALGIFT" !== f.type && (!f.reference_virtualsubscriptionlevel || !i.hideSubscriptionDays && f.reference_virtualsubscriptionlevel)) {
                    var y = parseInt(f.quantity, 10),
                        z = "",
                        w = !1;
                    if ("NOTHING" === f.type) {
                        var T = f.description.replace(/(<div>|<\/div>|\r\n)/g, "");
                        "key" === T ? z = c.KEY : "infinity" === T ? y = 1 / 0 : (w = !0, y = parseInt(T, 10) || 1)
                    }
                    m["ref_" + l] = {
                        slot: t.appendChild(new r({
                            image: a(f.image),
                            tooltip: f.name,
                            forceQuantity: w
                        })),
                        flag: z,
                        quantity: y
                    }
                }
            }
            for (l = 0; l < e.promo.length; l++) {
                var C = e.promo[l];
                if (C.gifts) {
                    if (i.paymentMode) {
                        var I = !1;
                        for (p = 0; p < C.conditions.length; p++) {
                            var S = C.conditions[p];
                            if (S.key === d.PAYMENTMODE && S.compare === u.IN && S.values.indexOf(i.paymentMode) === -1) {
                                I = !0;
                                break
                            }
                        }
                        if (I) continue
                    }
                    for (p = 0; p < C.gifts.length; p++) {
                        var E = C.gifts[p];
                        for (h = 0; h < E.references.length; h++) {
                            if (f = E.references[h], b = "promo_" + l + "_" + p + "_" + h, f.reference_virtualgift && f.reference_virtualgift.length > 0) {
                                var L = parseInt(f.reference_virtualgift[0].id, 10);
                                b = "promo_" + L, M.push(L)
                            }
                            m[b] = {
                                slot: t.appendChild(new r({
                                    image: a(f.image),
                                    tooltip: f.name
                                })),
                                quantity: parseInt(f.quantity, 10),
                                flag: c.GIFT
                            }
                        }
                    }
                }
            }
            for (var N in m) {
                var R = m[N];
                R.flag === c.KEY ? R.slot.addClassNames("key") : R.flag === c.GIFT ? R.slot.addClassNames("gift") : R.quantity === 1 / 0 ? R.slot.addClassNames("infinity") : R.flag === c.CROWN_QTY ? (R.slot.setQuantity(R.quantity), R.slot.addClassNames("pinkCrownQty")) : (R.slot.setQuantity(R.quantity), R.slot.addClassNames("pinkQty"))
            }
            s.getDataMap("Items", M, null, function(e, t) {
                if (e) return console.error(new Error("Items not found"));
                var i = [];
                for (l = 0; l < M.length; l++) {
                    var a = M[l],
                        r = t[a];
                    r && i.push(o.ITEM_DIR + r.iconId + ".png")
                }
                n.preloadImages(i, function(e) {
                    for (l = 0; l < e.length; l++) {
                        var t = m["vg_" + M[l]],
                            i = m["ga_" + M[l]],
                            n = m["promo_" + M[l]];
                        t && t.slot.setImage(e[l]), i && i.slot.setImage(e[l]), n && n.slot.setImage(e[l])
                    }
                })
            })
        }
    }, t.isArticleBestOffer = function(e) {
        return e && e.flag && e.flag.key === l.SPECIAL_OFFER
    }
}
