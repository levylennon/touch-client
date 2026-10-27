function(e, t, i) {
    function n() {
        g.call(this, "div", {
            className: "AttacksTab"
        }), this.once("open", function() {
            this._createDom(), this._setupEvents()
        }), this.on("open", function() {
            this._loadCurrentPrismFight(), this._updateFightCount(), window.dofus.sendMessage("GuildGetInformationsMessage", {
                infoType: h.INFO_TAX_COLLECTOR_ALLIANCE
            })
        }), this.on("close", function() {
            this.table.clearContent(), window.dofus.sendMessage("GuildGetInformationsMessage", {
                infoType: h.INFO_TAX_COLLECTOR_LEAVE
            })
        })
    }

    function o(e) {
        var t = e.remainSeconds,
            i = e.totalWaitTime,
            n = i - t;
        e.setValue(n / i)
    }

    function a(e) {
        clearInterval(e.intervalId), e.intervalId = null
    }

    function r(e, t) {
        e.totalWaitTime = Math.round(t.waitTimeForPlacement / 10) || 1, e.remainSeconds = Math.round(t.timeLeftBeforeFight / 10) || 0, e.intervalId = setInterval(function() {
            e.remainSeconds -= 1, e.remainSeconds > 0 ? o(e) : a(e)
        }, 1e3), o(e)
    }

    function s(e) {
        var t;
        if (e.type === _.prism) {
            var i = u.getAttackedEntity(e),
                n = i.enrichData;
            t = n.isConquestVillage ? "village" : "prism"
        } else t = e.type;
        return new g("div", {
            className: ["type", t]
        })
    }

    function c(e) {
        var t = u.getAttackedEntity(e),
            i = t.enrichData,
            n = new g("div", {
                className: "target"
            });
        if (n.createChild("div", {
                text: t.getName()
            }), n.createChild("div", {
                text: i.subAreaName + " " + t.getPosition()
            }), e.type === _.prism) n.createChild("div", {
            text: p("ui.prism.placed", t.getPlacementDate())
        });
        else {
            var o = t.getGuild(),
                a = "";
            o ? a = o.guildName : (console.error(new Error("Cannot find the guild for entity " + i.subAreaName + " " + t.getPosition())), a = "n/a"), n.createChild("div", {
                className: "owner",
                text: p("ui.common.guild") + p("ui.common.colon") + a
            })
        }
        return n
    }

    function l(e) {
        var t = new b({
            vertical: !0,
            className: ["green", "timer"]
        });
        return e.waitingForHelpInfo && r(t, e.waitingForHelpInfo), t.on("destroy", function() {
            a(t)
        }), t
    }

    function d(e) {
        var t = u.getAttackedEntity(e),
            i = new f;
        return i.setFight(e.type, e), t.look && i.setTarget({
            id: e.id,
            entityLook: t.look,
            name: t.getName(),
            level: t.level
        }), i.on("slotTap", v[e.type]), i
    }
    i(1204);
    var u = i(524),
        p = i(17)
        .getText,
        h = i(757),
        f = i(1205),
        b = i(490),
        m = i(56)
        .inherits,
        M = i(765),
        g = i(72),
        _ = u.entityType,
        A = u.fightingSide,
        O = u.fightState;
    m(n, g), e.exports = n;
    var v = {};
    v[_.prism] = function(e) {
        var t = this.fight;
        if (t.state === u.fightState.waitingForHelp) {
            var i = t.id,
                n = window.gui.playerData.id;
            u.isPlayerFightingFor(n, _.prism, i, A.allies) ? e && n === e.id && window.dofus.sendMessage("PrismFightJoinLeaveRequestMessage", {
                subAreaId: i,
                join: !1
            }) : e && 5 === t.fighters[A.allies].length ? window.dofus.sendMessage("PrismFightSwapRequestMessage", {
                subAreaId: i,
                targetId: e.id
            }) : window.dofus.sendMessage("PrismFightJoinLeaveRequestMessage", {
                subAreaId: i,
                join: !0
            })
        }
    }, v[_.taxCollector] = function(e) {
        var t = this.fight;
        if (t.state === u.fightState.waitingForHelp) {
            var i = t.id,
                n = window.gui.playerData.id;
            u.isPlayerFightingFor(n, _.taxCollector, i, A.allies) ? e && n === e.id && window.dofus.sendMessage("GuildFightLeaveRequestMessage", {
                taxCollectorId: i,
                characterId: n
            }) : e && 5 === t.fighters[A.allies].length ? window.dofus.sendMessage("GuildFightTakePlaceRequestMessage", {
                taxCollectorId: i,
                replacedCharacterId: e.id
            }) : window.dofus.sendMessage("GuildFightJoinRequestMessage", {
                taxCollectorId: i
            })
        }
    }, n.prototype._createDom = function() {
        this.table = this.appendChild(new M([{
            id: "type",
            format: s
        }, {
            id: "target",
            header: p("ui.common.name") + " / " + p("ui.common.localisation"),
            format: c
        }, {
            id: "timer",
            format: l
        }, {
            id: "fightersInfo",
            header: p("ui.common.defenders") + " / " + p("ui.common.attackers"),
            format: d
        }], "id", {
            clickable: !1
        })), this.currentFights = this.createChild("div", {
            className: "currentFights"
        }), this.createChild("div", {
            className: "howTo",
            text: p("ui.alliance.howToDefend")
        })
    }, n.prototype._updateFightCount = function() {
        var e = this.table.getRowCount();
        this.currentFights.setText(p("ui.alliance.currentFights", e, e))
    }, n.prototype._loadCurrentPrismFight = function() {
        var e = u.fights.prism;
        for (var t in e) {
            var i = e[t];
            i.state === O.waitingForHelp && (this.table.hasRow(i.id) || this.table.addRow(i))
        }
    }, n.prototype._setupEvents = function() {
        function e(e, t) {
            var n = i.table.getCell(t, "fightersInfo");
            if (!(n && n.setFighters && n.setFighter && n.setTarget)) {
                var o = "Cannot find the fighters info for type " + e + " fightId " + t;
                return o += " fighters info is null? " + !n, console.error(new Error(o)), null
            }
            return n
        }

        function t(e) {
            i.isVisible() && i.table.hasRow(e) && (i.table.delRow(e), i._updateFightCount())
        }
        var i = this;
        u.on("fightStarted", function(e, t) {
            i.isVisible() && t.state === O.waitingForHelp && (i.table.addRow(t), i._updateFightCount())
        }), u.on("fighting", function(e, i) {
            t(i.id)
        }), u.on("fightEnded", function(e, i) {
            t(i)
        }), u.on("fighterList", function(t, n, o, a) {
            if (i.isVisible() && i.table.hasRow(n)) {
                var r = e(t, n);
                r && r.setFighters(o, a)
            }
        }), u.on("fighterJoined", function(t, n, o, a, r) {
            if (i.isVisible() && i.table.hasRow(n)) {
                var s = e(t, n);
                s && s.setFighter(o, a, r)
            }
        }), u.on("fightTarget", function(t, n, o) {
            if (i.isVisible() && t === _.prism && i.table.hasRow(n)) {
                var a = e(t, n);
                a && a.setTarget({
                    id: o.id,
                    entityLook: o.look,
                    name: o.getName(),
                    level: o.level
                })
            }
        }), u.on("fighterLeft", function(t, n, o, a, r) {
            if (i.isVisible() && i.table.hasRow(n)) {
                var s = e(t, n);
                s && s.removeFighter(o, r)
            }
        })
    }
}
