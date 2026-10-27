function(e, t, i) {
    function n(e, t) {
        return e.frequency - t.frequency
    }

    function o() {
        r.call(this, {
            className: "ShatterWindow",
            title: f("ui.shatter.title"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 780,
                height: g + "%",
                minHeight: 361
            },
            helpTab: {
                part: 2,
                subPart: 15
            }
        }), this.itemMap = {}, this.openingParams = {}, this.sendChatMessage = !0;
        var e = this;
        this.on("open", function(t) {
            if (t = t || {}, !t.reopen) {
                e.sendChatMessage = !0, e._reset(), e.openingParams = t, e.table = this.windowBody.appendChild(new c([{
                    id: "icon"
                }, {
                    id: "itemRemoved",
                    header: f("ui.shatter.removedObject")
                }, {
                    id: "coefficient",
                    header: f("ui.shatter.frequency"),
                    sort: n,
                    defaultSorter: !0,
                    order: "descending"
                }, {
                    id: "runes",
                    header: f("ui.shatter.runes")
                }], null, {
                    clickable: !1
                }));
                for (var i in t) {
                    var o = t[i].runeResults,
                        a = [],
                        r = t[i].objectGID;
                    a.push(r);
                    for (var s in o) {
                        var l = o[s];
                        a.push(l.runeId)
                    }
                    e._getItems(a, function(t, i) {
                        return t ? void h.error("ShatterWindow : _getItems no items found " + t) : void e._addTableRow(i)
                    })
                }
            }
        }), this.on("close", function() {
            e.sendChatMessage && (window.gui.chat.logMsg(f("ui.shatterWindow.reopen"), M.CHANNEL_GLOBAL), e.sendChatMessage = !1)
        })
    }
    i(1414);
    var a = i(56)
        .inherits,
        r = i(70),
        s = i(72),
        c = i(765),
        l = i(86),
        d = i(871),
        u = i(130),
        p = i(469),
        h = i(34)
        .logger,
        f = i(17)
        .getText,
        b = i(52),
        m = i(16),
        M = i(504),
        g = 100,
        _ = 8,
        A = 78;
    a(o, r), e.exports = o, o.prototype._getItems = function(e, t) {
        u.getDataMap("Items", e, null, function(e, i) {
            return e ? t(e, null) : void t(null, i)
        })
    }, o.prototype._createRow = function(e, t, i) {
        var n = this;
        p.createItemInstances(e, function(e, o) {
            if (e) return i(e, null);
            n.runesElm = new s("div", {
                className: ["dropRow"]
            });
            var a = {},
                r = [],
                c = [];
            for (var l in o.array) {
                var u, p, h, f = {},
                    b = o.array[l];
                if (p = b.id, f = {
                        itemData: b
                    }, b.isRemovedItem) f.quantity = b.quantity, h = b.frequency, u = new d(f);
                else {
                    for (var M in n.openingParams)
                        if (n.openingParams[M].objectUID === t)
                            for (var g in n.openingParams[M].runeResults)
                                if (n.openingParams[M].runeResults[g].runeId === p) {
                                    f.quantity = n.openingParams[M].runeResults[g].runeQty;
                                    break
                                } var A = new d(f);
                    r.push(A), c.push(f), r.length < _ && n.runesElm.appendChild(new d(f))
                }
            }
            r.length >= _ && n._createMoreButton(c), a = {
                id: p,
                icon: u,
                itemRemoved: u.data.shortName,
                frequency: h,
                coefficient: m.intToString(h) + "%",
                runes: n.runesElm
            }, i(null, a)
        })
    }, o.prototype._addTableRow = function(e) {
        var t, i, n, o = this,
            a = [];
        for (var r in e) {
            var s = e[r],
                c = s.typeId !== A,
                l = s.possibleEffects;
            if (c)
                for (var d in o.openingParams) {
                    var u = o.openingParams[d];
                    if (u.objectGID === s.id && !u.alreadyInRow) {
                        l = u.effects, t = u.objectUID, u.alreadyInRow = !0, i = u.quantity, n = u.frequencyBonus;
                        break
                    }
                }
            a.push({
                objectGID: s.id,
                effects: l,
                isRemovedItem: c,
                quantity: i,
                frequency: n
            })
        }
        this._createRow(a, t, function(e, t) {
            return e ? h.error("ShatterWindow : _createRow issue while trying to add a row " + e) : void(o.table && o.table.rootElement && o.table.addRow(t))
        })
    }, o.prototype._createMoreButton = function(e) {
        this.runesElm.appendChild(new l({
            className: "moreButton"
        }, function() {
            b.getWindow("shatterResults")
                .updateContent(f("ui.shatter.title"), e), b.open("shatterResults")
        }))
    }, o.prototype._reset = function() {
        this.windowBody.clearContent(), this.openingParams = {}
    }
}
