function(e, t, i) {
    function n() {}

    function o(e, t, i, n) {
        return e.setText(t.getProperty("descriptionId")), n(!0)
    }

    function a(e, t, i, n) {
        if (!t.getProperty("exchangeable")) return n(!1);
        var o = w("ui.common.averagePrice") + w("ui.common.colon"),
            a = t.getProperty("averagePrice");
        return o += a === -1 ? w("ui.item.averageprice.unavailable") : A.kamasToString(a), e.setText(o), n(!0)
    }

    function r(e, t, i, n) {
        var o = window.gui.playerData.belongings.getItemCounts(t.getProperty("id")),
            a = o[I.INVENTORY_QTY],
            r = o[I.BANK_QTY],
            c = o[I.MOUNT_QTY],
            l = window.gui.playerData.characterBaseInformations.level;
        return e.clearContent(), a && 0 !== a && s(e, w("ui.common.inventory"), a, !1), void 0 !== r && 0 !== r && s(e, w("tablet.bank"), r, !0), l >= C.CHAR_MIN_LEVEL_RIDE && void 0 !== c && 0 !== c && s(e, w("ui.common.ride"), c, !0), n(!0)
    }

    function s(e, t, i, n) {
        if (null !== i) {
            var o = t + w("ui.common.colon") + i;
            n && (o += " (" + w("tablet.estimation") + ")"), e.createChild("div", {
                text: o
            })
        } else {
            var a = e.createChild("div");
            a.createChild("span", {
                text: t + w("ui.common.colon")
            }), a.createChild("span", {
                text: "?",
                className: "unknown"
            })
        }
    }

    function c(e, t, i, n) {
        return e.setEffectsFromItem(t), n(!0)
    }

    function l(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i],
                o = n.text,
                a = t.createChild("div", {
                    className: "singleTab"
                });
            if ("string" == typeof o) a.appendChild(S.process(E + " " + o));
            else
                for (var r = 0; r < o.length; r++) {
                    var s = o[r],
                        c = a.createChild("div");
                    c.appendChild(S.process(s))
                }
            n.isMalus && a.addClassNames("malus")
        }
    }

    function d(e, t, i, n) {
        var o = [],
            a = [];
        return g.series([function(e) {
            return t.getConditionsFormatted(function(t, i) {
                return a = i, e()
            })
        }, function(e) {
            return t.getTargetConditionsFormatted(function(t, i) {
                return o = i, e()
            })
        }], function(t) {
            return t && console.error(t), o.length || a.length ? (e.clearContent(), e.createChild("div", {
                className: "conditionsTitle",
                text: w("ui.common.conditions") + w("ui.common.colon")
            }), l(a, e), l(o, e), n(!0)) : n(!1)
        })
    }

    function u(e, t, i, n) {
        return t.buyCriterion && t.buyConditionsFormatted ? (e.clearContent(), e.createChild("div", {
            className: "conditionsTitle",
            text: w("ui.common.buyConditions") + w("ui.common.colon")
        }), l(t.buyConditionsFormatted, e), n(!0)) : n(!1)
    }

    function p(e, t) {
        var i, n = "",
            o = e.getProperty("criticalHitBonus");
        o > 0 ? i = "+" : o < 0 && (i = "-"), n += w("ui.common.short.CriticalHit") + w("ui.common.colon");
        var a = e.getProperty("criticalHitProbability");
        return n += t ? A.totalCriticalHitRate(a, t) : a, n += "%", i && (n += " (" + i + o + w("ui.common.damageShort") + ")"), n
    }

    function h(e, t) {
        var i = e.getProperty("criticalFailureProbability");
        if (t) {
            var n = t.criticalMiss;
            i += n.getTotalStat()
        }
        return (e.getProperty("criticalHitProbability") ? " - " : "") + w("ui.common.short.CriticalFailure") + w("ui.common.colon") + i + "% "
    }

    function f(e, t) {
        e.setText(t.getProperty("itemSetName"))
    }

    function b(e, t) {
        var i = t.getItemInstance();
        if (i) {
            var n = i.effectsMap[L];
            n && e.createChild("div", {
                className: "extra",
                text: n.description
            })
        }
    }

    function m(e, t, i, n) {
        if (e.name.setText(t.getProperty("nameId")), e.name.toggleClassName("etheral", Boolean(t.getProperty("etheral"))), i.showCategory === !1) e.category.hide();
        else {
            var o = t.getProperty("typeId"),
                a = v.getItemTypeMap();
            e.category.setText(w("ui.common.category") + w("ui.common.colon") + a[o].nameId), e.category.show()
        }
        i.showWeight === !1 ? e.weight.hide() : (e.weight.setText(w("ui.common.short.weight", t.getProperty("weight"))), e.weight.show()), e.level.setText(w("ui.common.short.level") + " " + t.getProperty("level"));
        var r = e.extra;
        r.clearContent();
        var s = t.getProperty("itemSetId");
        if (t.getProperty("isWeapon")) {
            e.points.ap.setText(w("ui.common.ap") + " : " + t.getProperty("apCost"));
            var c = t.getProperty("range"),
                l = t.getProperty("minRange");
            e.points.ra.setText(w("ui.common.ra") + " : " + l), e.points.range.setText(c !== l ? " - " + c : ""), e.points.show(), s && s !== -1 && f(r.createChild("div", {
                className: "extra"
            }), t), t.getProperty("twoHanded") && r.createChild("div", {
                className: "extra",
                text: w("ui.common.twoHandsWeapon")
            });
            var d = t.getProperty("maxCastPerTurn");
            if (d) {
                var u = w("ui.item.maxUsePerTurn") + w("ui.common.colon") + d;
                r.createChild("div", {
                    className: "extra",
                    text: u
                })
            }
            t.getProperty("castInLine") && c > 1 && !t.getProperty("castInDiagonal") && r.createChild("div", {
                className: "extra",
                text: w("ui.spellInfo.castInLine")
            }), !t.getProperty("castTestLos") && c > 1 && r.createChild("div", {
                className: "extra",
                text: w("ui.spellInfo.castWithoutLos")
            }), b(r, t);
            var m = t.getProperty("criticalFailureProbability"),
                M = t.getProperty("criticalHitProbability");
            if (i.showCritical && (m || M)) {
                var g = "",
                    _ = window.gui.playerData.characters.mainCharacter.characteristics;
                M && (g += p(t, _)), m && (g += h(t, _)), r.createChild("div", {
                    className: "extra",
                    text: g
                })
            }
        } else e.points.hide(), s && s !== -1 && f(r.createChild("div", {
            className: "extra"
        }), t), b(r, t);
        return n(!0)
    }

    function M(e, t, i) {
        return T.call(this, "div", {
            className: "ItemDescription"
        }), i = i || n, this._buildDomElements(t), e ? void this.updateUI(e, t, i) : i()
    }
    i(876);
    var g = i(18),
        _ = i(877),
        A = i(16),
        O = i(56)
        .inherits,
        v = i(469),
        y = v.Item,
        z = v.ItemInstance,
        w = i(17)
        .getText,
        T = i(72),
        C = i(112),
        I = i(880),
        S = i(502),
        E = "&#149;",
        L = 812,
        N = {
            buyConditions: u,
            description: o,
            averagePrice: a,
            effects: c,
            conditions: d,
            remoteQuantity: r,
            header: m
        };
    O(M, T), e.exports = M, M.prototype._buildDomElements = function(e) {
        var t = this._domElements = {};
        t.header = this.createChild("div", {
            className: "header"
        });
        var i = t.header.createChild("div", {
            className: "nameAndLevel"
        });
        t.header.name = i.createChild("div", {
            className: "name"
        }), t.header.level = i.createChild("div", {
            className: "right"
        });
        var n = t.header.createChild("div", {
            className: "categoryAndWeight"
        });
        t.header.category = n.createChild("div"), t.header.weight = n.createChild("div", {
            className: "right"
        });
        var o = t.header.points = t.header.createChild("div", {
            className: "pointsLine"
        });
        o.ap = o.createChild("span", {
            className: "ap"
        }), o.ra = o.createChild("span", {
            className: "ra"
        }), o.range = o.createChild("span"), t.header.extra = t.header.createChild("div", {
            className: "extra"
        }), t.effects = this.appendChild(new _(e)), t.conditions = this.createChild("div", {
            className: "topSpacing"
        }), t.buyConditions = this.createChild("div", {
            className: "topSpacing"
        }), t.description = this.createChild("div", {
            className: ["topSpacing", "description"]
        }), t.averagePrice = this.createChild("div", {
            className: "topSpacing"
        }), t.remoteQuantity = this.createChild("div", {
            className: ["topSpacing", "quantities"]
        })
    }, M.prototype.updateUI = function(e, t, i) {
        var o = this;
        return i = i || n, t = t || {}, e instanceof y || e instanceof z ? (this.currentItem = e, e.isItemInstance && !e.isInitialised ? e.once("initialised", function() {
            return o.currentItem !== e ? i() : o.updateUI(e, t, i)
        }) : g.eachOf(N, function(i, n, a) {
            var r = o._domElements[n];
            return i(r, e, t, function(e) {
                return t[n] !== !1 && e ? r.show() : r.hide(), a()
            })
        }, function(e) {
            return e && console.error(e), i()
        })) : (console.error(new Error("ItemDescription: item is not Item nor ItemInstance")), i())
    }
}
