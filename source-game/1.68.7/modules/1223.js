function(e, t, i) {
    function n() {
        f.call(this, "div", {
            className: "PerceptorBoostPanel"
        }), this._buildDomElements(), window.dofus.sendMessage("GuildGetInformationsMessage", {
            infoType: h.INFO_BOOSTS
        }), this._listener = new d, this._listenGameServerEvents(), this.on("destroy", function() {
            this._listener.stopListening()
        })
    }

    function o(e, t, i) {
        if (t === v) return null;
        if (i < O) return null;
        var n = new g({
            className: "UpgradeButton",
            tooltip: r
        }, a);
        return n.spell = e, n.realLevel = t, n
    }

    function a() {
        var e = this.spell,
            t = this.realLevel + 1;
        window.gui.openConfirmPopup({
            title: p("ui.grimoire.spellLevel.increase"),
            message: p("ui.grimoire.popup.confirmation", O, '"' + e.getName() + '"', t),
            cb: function(t) {
                t && window.dofus.sendMessage("GuildSpellUpgradeRequestMessage", {
                    spellId: e.id
                })
            }
        })
    }

    function r() {
        return p("ui.spell.requiredPoints", O)
    }

    function s(e, t, i, n) {
        function a(a, r) {
            if (a) return console.warn(a);
            for (var s = {}, c = {}, l = 0; l < e.length; l++) {
                var d = e[l];
                s[d] = r.spellUrls[l];
                var u = t[l] ? t[l] : 1;
                c[d] = t[l], r.spells[d].setLevel(u)
            }
            for (l = 0; l < e.length; l++) {
                var p = e[l],
                    h = r.spells[p];
                if (h) {
                    var b = new f("div", {
                        className: "spellIcon"
                    });
                    b.setStyle("backgroundImage", s[p]), i.addRow({
                        icon: b,
                        name: h.getName(),
                        level: c[p],
                        upgrade: o(h, c[p], n) || ""
                    }), _(b, new m({
                        spell: h
                    }))
                } else console.error("Missing poney spell", p)
            }
        }
        i.clearContent(), M.createSpells(e, function(t, i) {
            if (t) return a(t);
            for (var n = [], o = 0; o < e.length; o++) {
                var r = i[e[o]];
                r && r.spell || console.error(new Error("Spell " + e[o] + " does not exist"));
                var s = r.spell.iconId;
                r.spell.iconId < 0 && (console.error(new Error("iconId < 0 for spellId " + e[o] + ": " + s)), s = "noIcon"), n.push("gfx/spells/sort_" + s + ".png")
            }
            A.preloadImages(n, function(e) {
                a(null, {
                    spells: i,
                    spellUrls: e
                })
            })
        })
    }

    function c() {
        var e = this.characteristicKeyName,
            t = this.myWindow.guildInfosUpgradeMessage[e],
            i = z[e];
        window.gui.openConfirmPopup({
            message: p("ui.grimoire.popup.confirmation", i.cost, '"' + this.characteristicLabel + '"', t + i.quantity),
            cb: function(t) {
                t && window.dofus.sendMessage("GuildCharacsUpgradeRequestMessage", {
                    charaTypeTarget: y[e]
                })
            }
        })
    }

    function l() {
        var e = z[this.characteristicKeyName];
        return p("ui.social.poneyCost", e.cost, e.quantity, e.max)
    }
    i(1224);
    var d = i(556),
        u = i(56)
        .inherits,
        p = i(17)
        .getText,
        h = i(757),
        f = i(72),
        b = i(765),
        m = i(885),
        M = i(732),
        g = i(86),
        _ = i(88)
        .addTooltip,
        A = i(12),
        O = 5,
        v = 5,
        y = {
            taxCollectorPods: 0,
            taxCollectorProspecting: 1,
            taxCollectorPower: 2,
            maxTaxCollectorsCount: 3
        },
        z = {
            taxCollectorLifePoints: null,
            taxCollectorDamagesBonuses: null,
            taxCollectorProspecting: {
                cost: 1,
                quantity: 1,
                max: 500
            },
            taxCollectorPower: {
                cost: 1,
                quantity: 2,
                max: 400
            },
            taxCollectorPods: {
                cost: 1,
                quantity: 20,
                max: 5e3
            },
            maxTaxCollectorsCount: {
                cost: 10,
                quantity: 1,
                max: 50
            }
        };
    u(n, f), e.exports = n, n.prototype._createCharacteristicUpgradeButton = function(e, t) {
        var i = new g({
            className: "UpgradeButton",
            name: "button",
            tooltip: l
        }, c);
        return i.characteristicKeyName = e, i.characteristicLabel = t, i.myWindow = this, i
    }, n.prototype._listenGameServerEvents = function() {
        var e = this;
        this._listener.listenTo(window.gui, "GuildInfosUpgradeMessage", function(t) {
            e.guildInfosUpgradeMessage = t, e._updateUI(t)
        })
    }, n.prototype._buildDomElements = function() {
        var e = this.createChild("div", {
                className: ["sidePanel", "leftPanel"],
                name: "leftPanel"
            }),
            t = [{
                id: "icon"
            }, {
                id: "name",
                header: p("ui.common.name")
            }, {
                id: "level",
                header: p("ui.common.level")
            }, {
                id: "upgrade"
            }];
        this.spellsTable = new b(t, null, {
            clickable: !1
        }), this.spellsTable.addClassNames("sidePanel", "rightPanel"), this.appendChild(this.spellsTable);
        var i = e.createChild("div", {
                className: "characterImage"
            }),
            n = i.createChild("div", {
                className: "image"
            });
        A.preloadImage("gfx/illusUi/SocialGuildePersonnalisation_tx_IlluPerco.png", function(e) {
            n.setStyle("backgroundImage", e)
        });
        var o = [{
                id: "label",
                header: p("ui.social.guildTaxCharacteristics")
            }, {
                id: "value"
            }, {
                id: "upgrade"
            }],
            a = new b(o, null, {
                clickable: !1
            });
        a.addClassNames("perceptorCharacteristicsTable"), this.perceptorCharacteristicsTable = a, a.addRow({
            label: p("ui.common.lifePoints"),
            value: "0",
            upgrade: ""
        }), a.addRow({
            label: p("ui.social.damagesBonus"),
            value: "0",
            upgrade: ""
        }), this._addCharacteristicRow(p("ui.social.discernment"), "taxCollectorProspecting"), this._addCharacteristicRow(p("ui.stats.damagesBonusPercent"), "taxCollectorPower"), this._addCharacteristicRow(p("ui.common.weight"), "taxCollectorPods"), this._addCharacteristicRow(p("ui.social.taxCollectorCount"), "maxTaxCollectorsCount"), e.appendChild(a);
        var r = e.createChild("div", {
            className: "pointsToDistributePanel",
            name: "pointsToDistributePanel"
        });
        r.createChild("div", {
            className: "pointsToDistributeLabel",
            name: "pointsToDistributeLabel",
            text: p("ui.social.guildBonusPoints")
        }), this.pointsToDistributeValue = r.createChild("div", {
            className: "pointsToDistributeValue",
            name: "pointsToDistributeValue",
            text: "0"
        })
    }, n.prototype._addCharacteristicRow = function(e, t) {
        this.perceptorCharacteristicsTable.addRow({
            label: e,
            value: "0",
            upgrade: this._createCharacteristicUpgradeButton(t, e)
        })
    }, n.prototype._updateUI = function(e) {
        var t = e.boostPoints,
            i = this.perceptorCharacteristicsTable,
            n = 0;
        for (var o in z) {
            var a = n++,
                r = i.getRow(a);
            if (r && r.rowContent && (r.rowContent.value = e[o], i.updateCell(a, "value", r.rowContent), z[o])) {
                var c = t >= z[o].cost,
                    l = e[o] < z[o].max,
                    d = i.getCell(a, "upgrade");
                d.toggleDisplay(c && l)
            }
        }
        this.pointsToDistributeValue.setText(e.boostPoints), s(e.spellId, e.spellLevel, this.spellsTable, e.boostPoints)
    }
}
