function(e, t, i) {
    // ItemManager
    function n(e, t) {
        this.price = e, this.timestamp = t
    }

    function getAveragePrice(e) {
        var t = I[e];
        return t ? t.price : -1
    }

    function a(e) {
        var t = I[e];
        return !!t && Date.now() - t.timestamp < 6e4 * S
    }

    function r(e, t) {
        I[e] = new n(t, Date.now()), items[e] && (items[e].averagePrice = t)
    }

    function s(e) {
        r(e.genericId, e.averagePrice), e.genericId === E && L(e.averagePrice)
    }

    function useObject(e) {
        var t = v.gui,
            i = t.playerData.characterBaseInformations.id;
        N.push(function(n) {
            return t.playerData && t.playerData.characterBaseInformations && i === t.playerData.characterBaseInformations.id && t.playerData.inventory.objects[e] ? void setTimeout(function() {
                t.playerData && t.playerData.characterBaseInformations && i === t.playerData.characterBaseInformations.id && t.playerData.inventory.objects[e] && v.dofus.sendMessage("ObjectUseMessage", {
                    objectUID: e
                }), n()
            }, T) : n()
        })
    }

    function getItems(e, t) {
        // debugger;
        function i() {
            for (var t = [], i = 0, n = e.length; i < n; i++) {
                var o = items[e[i]];
                o && t.push(o)
            }
            return t
        }

        function n(e) {
            M.getDataMap("Items", s, null, function(t, i) {
                if (t) return e(t);
                for (var n = 0, o = s.length; n < o; n++) {
                    var a = s[n],
                        r = i[a];
                    if (r) l.push(new b(r)), c.push("gfx/items/" + r.iconId + ".png");
                    else {
                        var d = w[a];
                        delete w[a], d.emit("loaded")
                    }
                }
                return e()
            })
        }

        function o(e) {
            g.preloadImages(c, function(t) {
                for (var i = 0, n = t.length; i < n; i++) {
                    var o = l[i];
                    items[o.id] = o, o.image = t[i];
                    var a = w[o.id];
                    delete w[o.id], a.loaded = !0, a.emit("loaded")
                }
                return e()
            })
        }

        function a(e) {
            return d.length ? void u.each(d, function(e, t) {
                return e.loaded ? t() : e.once("loaded", t)
            }, e) : e()
        }

        function r(e) {
            return s.length ? void u.series([n, o], function(t) {
                return t ? e(t) : void b.initializeList(l, e)
            }) : e()
        }
        for (var s = [], c = [], l = [], d = [], p = 0, h = e.length; p < h; p++) {
            var f = e[p];
            if (!items[f])
                if (w[f]) d.push(w[f]);
                else {
                    s.push(f);
                    var m = w[f] = new _;
                    m.loaded = !1
                }
        }
        return d.length || s.length ? void u.parallel([r, a], function(e) {
            return e ? t(e) : t(null, i())
        }) : t(null, i())
    }

    function d(e, t, i) {
        "function" == typeof t && (i = t, t = null), Array.isArray(e) || (e = [e]);
        var n, o, a = {},
            r = [];
        for (n = 0, o = e.length; n < o; n += 1) {
            var s = e[n];
            a[s.objectGID] = !0, r.push(new m(s))
        }
        return getItems(Object.keys(a), function(e) {
            if (e) return console.warn(e), i(e);
            var a = {};
            for (n = 0, o = r.length; n < o; n += 1) {
                var s = r[n],
                    c = items[s.objectGID];
                c || (c = items[ItemNotFound], console.error('ItemManager: Player got a "Picfail Puree" instead of the itemId - ItemManager: O jogador recebeu um "Picfail Puree" em vez do itemId.', s.objectGID)), s.setItem(c), a[s.objectUID] = s
            }
            m.initializeList(r, t, function(e) {
                i(e, { map: a, array: r })
            })
        }), r
    }
    var u = i(18),
        p = i(470),
        h = i(472),
        f = i(16).createFifo,
        b = i(473),
        m = i(479),
        M = i(130),
        g = i(12),
        _ = i(36).EventEmitter,
        A = i(103),
        O = i(14),
        v = O();
    t.Item = b,
    t.ItemInstance = m;
    var items = t.items = {},
        z = null,
        w = {},
        T = 300,
        ItemNotFound = t.FALLBACK_DB_ITEM_ID = 666, // Quando não encontra o item, usa o item 666 (Item de teste)
        I = {},
        S = 60,
        E = -1,
        L = null;
    t.getAveragePrice = getAveragePrice,
    t.getFreshAveragePrice = function(e, t) {
        var i = getAveragePrice(e);
        return a(e) ? t(i) : (E = e, L = t, v.dofus.sendMessage("ExchangeBidHousePriceMessage", {
            genId: e
        }), void(I[e] = new n(i, Date.now())))
    };
    var N = f();
    t.useObject = useObject,
    t.getItems = getItems, 
    t.initialize = function(e) {
        var t = v.dofus.connectionManager;
            z = v.gui.databases.ItemTypes;
        for (var i in z) {
            var n = z[i];
            n.category = h.getCategory(n.superTypeId),
            n.possiblePositions = h.getTypePositions(n.superTypeId)
        }
        getItems([ItemNotFound], e);
        var o = function() {
            A.isFightMode || (A.removeListener("gameContextChanged", o),
            v.dofus.sendMessage("ObjectAveragePricesGetMessage"))
        };
        A.on("gameContextChanged", o),
        v.gui.on("ObjectAveragePricesMessage", function(e) {
            for (var t = 0, i = e.ids.length; t < i; t += 1) r(e.ids[t], e.avgPrices[t])
        }),
        t.on("ExchangeBidPriceMessage", s)
    },
    t.getItemTypeMap = function() {
        return z ? z : void console.error(new Error("Fatal error: item types not loaded"))
    },
    t.createItemInstances = d,
    t.getCategoryName = h.getCategoryName,
    t.isEquippable = h.isEquippable,
    t.isEquipped = h.isEquipped,
    t.unlinkedItemsFilter = h.unlinkedItemsFilter,
    t.positions = p.positions,
    t.categories = p.categories
}
