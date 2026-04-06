function(e, t, i) {
    function n(e, t, i) {
        var n = p[e],
            o = n.cached[t];
        return o ? i(o) : void l.getDataMap(n.dbName, [t], null, function(e, a) {
            if (e) return console.warn("ContextualMenuTaxCollector", e), i("");
            var r = a[t];
            o = r[n.attribute], n.cached[t] = o, i(o)
        })
    }

    function o() {
        function e() {
            3 === this.actionId && p.prepareDialog(a.npcData), window.dofus.sendMessage("NpcGenericActionRequestMessage", {
                npcId: a.contextualId,
                npcActionId: this.actionId,
                npcMapId: a.mapId
            })
        }
        r.call(this);
        var t, i, o, a, l, p, f = window.gui.playerData.guild;
        this.once("open", function(n) {
            function r(e) {
                var t = [e.guildInfo.guildName];
                e.maxPods && (t.push(e.maxPods), t.push(e.prospecting), t.push(e.power), t.push(e.taxCollectorsCount), t.push(c(e.kamas)), t.push(c(e.experience)), t.push(c(e.pods)), t.push(c(e.itemsValue)));
                var i = e.alliance;
                if (i) {
                    t.push("#NONAME#" === i.allianceName ? s("ui.guild.noName") : i.allianceName);
                    var n = "[";
                    n += "#TAG#" === i.allianceTag ? s("ui.alliance.noTag") : i.allianceTag, n += "]", t.push(n)
                }
                return t
            }
            p = window.gui.npcDialogHandler, o = this.header.appendChild(new d);
            for (var l = n.npcData, u = 0, f = l.actions.length; u < f; u += 1) {
                var b = this._addEntry(l.actionsName[u], e);
                b.actionId = l.actions[u]
            }
            i = this._addEntry(s("ui.social.CollectTaxCollector"), function() {
                window.dofus.sendMessage("ExchangeRequestOnTaxCollectorMessage", {
                    taxCollectorId: a.contextualId
                })
            }), t = this._addEntry(s("ui.common.attack"), function() {
                window.gui.openConfirmPopup({
                    title: s("ui.popup.warning"),
                    message: s("tablet.popup.taxCollectorAttackConfirm"),
                    cb: function(e) {
                        e && window.dofus.sendMessage("GameRolePlayTaxCollectorFightRequestMessage", {
                            taxCollectorId: a.contextualId
                        })
                    }
                })
            }), this._addCancel(),
            window.gui.on("TaxCollectorDialogQuestionExtendedMessage", function(e) {
                p.nextQuestionAsync(h.guild, [], r(e))
            }),
            window.gui.on("TaxCollectorDialogQuestionBasicMessage", function(e) {
                p.nextQuestionAsync(h.basic, [], r(e))
            }),
            window.gui.on("AllianceTaxCollectorDialogQuestionExtendedMessage", function(e) {
                p.nextQuestionAsync(h.alliance, [], r(e))
            })
        }), this.on("open", function(e, r) {
            if (a = e, f.hasGuild() && e.guild.guildId === f.current.guildId) {
                i.show();
                var s = f.hasRight(u.GUILD_RIGHT_COLLECT),
                    c = f.hasRight(u.GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR);
                s || c ? i.enable() : i.disable(), t.hide()
            } else i.hide(), t.show(), 0 !== e.taxCollectorAttack ? t.disable() : t.enable();
            n("firstName", e.taxCollector.firstNameId, function(t) {
                n("lastName", e.taxCollector.lastNameId, function(i) {
                    l = t + " " + i, a.npcData.nameId = l, o.setContent({
                        name: l,
                        guild: e.guild
                    }), r()
                })
            })
        })
    }
    var a = i(56)
        .inherits,
        r = i(450),
        s = i(17)
        .getText,
        c = i(16)
        .intToString,
        l = i(130),
        d = i(464),
        u = i(520),
        p = {
            firstName: {
                dbName: "TaxCollectorFirstnames",
                attribute: "firstnameId",
                cached: {}
            },
            lastName: {
                dbName: "TaxCollectorNames",
                attribute: "nameId",
                cached: {}
            }
        },
        h = {
            guild: 1,
            basic: 2,
            alliance: 15427
        };
    a(o, r), e.exports = o
}
