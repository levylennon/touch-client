function(e, t, i) {
    function n(e, t, i) {
        i = i || {};
        var n = a[e][t] || {},
            r = i.waitingForHelpInfo || n.waitingForHelpInfo,
            s = o[e][t] = {
                id: t,
                type: e,
                fighters: {},
                state: n.fightState,
                waitingForHelpInfo: r
            };
        return s.fighters[b.allies] = i.allyCharactersInformations || [], s.fighters[b.enemies] = i.enemyCharactersInformations || [], p.emit("fightStarted", e, s), i.state === f.fighting && p.emit("fighting", e, s), s
    }
    var o, a, r = i(59),
        s = i(17)
        .getText,
        c = i(525),
        l = c.TaxCollector,
        d = i(532),
        u = d.Prism,
        p = e.exports = new r,
        h = i(526),
        f = p.fightState = h.fightState,
        b = p.fightingSide = h.fightingSide,
        m = p.entityType = h.entityType;
    p._reset = function() {
        o = p.fights = {}, o[m.taxCollector] = {}, o[m.prism] = {}, a = p.entities = {}, a[m.taxCollector] = {}, a[m.prism] = {}
    }, p.isPlayerDefending = function(e, t) {
        if (!m[e]) return console.log("unknown entity type", e);
        var i = p.fights[e];
        for (var n in i) {
            var o = i[n];
            if (o.state === f.waitingForHelp && p.isPlayerFightingFor(t, e, n, b.allies)) return parseInt(n, 10)
        }
        return null
    }, p.getAttackedEntity = function(e) {
        return e.type && e.hasOwnProperty("id") && m[e.type] ? p.entities[e.type][e.id] : console.log("wrong fight object")
    }, p.isPlayerFightingFor = function(e, t, i, n) {
        if (!m[t]) return console.log("unknown entity type", t);
        var a = o[t][i];
        if (!a) return !1;
        for (var r = a.fighters[n], s = 0, c = r.length; s < c; s += 1)
            if (r[s].id === e) return !0;
        return !1
    };
    var M = null;
    p.playerAutoKick = function(e, t) {
        if (!m[e]) return console.log("unknown entity type", e);
        var i = window.gui.playerData.id;
        e === m.taxCollector ? window.dofus.sendMessage("GuildFightLeaveRequestMessage", {
            taxCollectorId: t,
            characterId: i
        }) : window.dofus.sendMessage("PrismFightJoinLeaveRequestMessage", {
            subAreaId: t,
            join: !1
        }), M = {
            type: e,
            fightId: t,
            playerId: i
        }
    }, p.initialize = function(e) {
        function t(e, t) {
            o[e][t] && (delete o[e][t], p.emit("fightEnded", e, t))
        }

        function i(e, t, i, n) {
            var a = o[e][t];
            if (a) {
                var r = a.fighters[i];
                r.push(n), p.emit("fighterJoined", e, t, i, n, r.length - 1)
            }
        }

        function r(e, t, i, a) {
            var r = o[e][t];
            r || (r = n(e, t));
            var s = r.fighters[i];
            s ? (a = s.concat(a), r.fighters[i] = a) : r.fighters[i] = a, p.emit("fighterList", e, t, i, a)
        }

        function d(e, t, i, n) {
            var a = o[e][t];
            if (a) {
                for (var r = a.fighters[i], s = 0, c = r.length; s < c; s += 1) {
                    var l = r[s].id;
                    if (l === n) return r.splice(s, 1), void p.emit("fighterLeft", e, t, i, n, s)
                }
                return console.error("unknown fighter id", n)
            }
        }
        p._reset(), e.on("disconnect", function() {
            p._reset()
        }), c.setupEvents(), e.on("TaxCollectorListMessage", function(e) {
            var t, i = e.informations,
                o = a.taxCollector;
            for (t = 0; t < i.length; t += 1) {
                var r = new l(i[t]);
                o[r.id] = r
            }
            p.emit("taxCollectorList", m.taxCollector, i, e.nbcollectorMax);
            var s = e.fightersInformations;
            for (t = 0; t < s.length; t += 1) {
                var c = s[t];
                n(m.taxCollector, c.collectorId, c)
            }
        }), e.on("TaxCollectorMovementAddMessage", function(e) {
            var i = new l(e.informations),
                r = a.taxCollector,
                s = !r.hasOwnProperty(i.id);
            if (r[i.id] = i, s) return void p.emit("entityAdded", m.taxCollector, i);
            if (p.emit("entityUpdated", m.taxCollector, i), i.fightState === f.noFight) t(m.taxCollector, i.id);
            else {
                var c = o[m.taxCollector][i.id];
                if (!c) return n(m.taxCollector, i.id);
                c.state = i.fightState, c.waitingForHelpInfo = i.waitingForHelpInfo, c.state === f.fighting && p.emit("fighting", m.taxCollector, c)
            }
        }), e.on("TaxCollectorMovementRemoveMessage", function(e) {
            var t = e.collectorId,
                i = a.taxCollector;
            i[t] && (delete i[t], p.emit("entityRemoved", m.taxCollector, t))
        }), e.on("PrismsListMessage", function(e) {
            for (var t = a.prism, i = e.prisms, n = 0, o = i.length; n < o; n += 1) {
                var r = new u(i[n]);
                t[r.id] = r
            }
            p.emit("prismList", m.prism, i)
        }), e.on("PrismsListUpdateMessage", function(e) {
            for (var t = a.prism, i = e.prisms, n = 0, o = i.length; n < o; n += 1) {
                var r = i[n],
                    s = t[r.subAreaId];
                s ? (s.updateInfo(r), p.emit("entityUpdated", m.prism, s)) : (s = new u(r), t[s.id] = s, p.emit("entityAdded", m.prism, s))
            }
        }), e.on("PrismsInfoValidMessage", function(e) {
            for (var t = e.fights, i = a.prism, o = 0, r = t.length; o < r; o += 1) {
                var s = t[o],
                    c = i[s.subAreaId];
                if (c) {
                    var l = s.allyCharactersInformations[0];
                    l && "3451" === l.name && (
                        c.look = l.entityLook,
                        c.level = l.level,
                        s.allyCharactersInformations.splice(0, 1)),
                        c.fightState = f.waitingForHelp,
                        n(m.prism, s.subAreaId, s)
                } else console.warn("unknown prism", s.subAreaId)
            }
        }), e.on("PrismFightAddedMessage", function(e) {
            var t = e.fight,
                i = a.prism[t.subAreaId];
            return i ? void n(m.prism, t.subAreaId, t) : console.warn("unknown prism", t.subAreaId)
        }), e.on("PrismFightRemovedMessage", function(e) {
            t(m.prism, e.subAreaId)
        }), e.on("GuildFightPlayersHelpersJoinMessage", function(e) {
            i(m.taxCollector, e.fightId, b.allies, e.playerInfo)
        }), e.on("PrismFightDefenderAddMessage", function(e) {
            var t = e.defender;
            if ("3451" === t.name) {
                var n = a.prism[e.subAreaId];
                n.look = t.entityLook, n.level = t.level, p.emit("fightTarget", m.prism, e.subAreaId, n)
            } else i(m.prism, e.subAreaId, b.allies, t)
        }), e.on("PrismFightAttackerAddMessage", function(e) {
            i(m.prism, e.subAreaId, b.enemies, e.attacker)
        }), e.on("GuildFightPlayersEnemiesListMessage", function(e) {
            r(m.taxCollector, e.fightId, b.enemies, e.playerInfo)
        }), e.on("GuildFightPlayersEnemyRemoveMessage", function(e) {
            d(m.taxCollector, e.fightId, b.enemies, e.playerId)
        }), e.on("GuildFightPlayersHelpersLeaveMessage", function(e) {
            M && M.type === m.taxCollector && M.fightId === e.fightId && M.playerId === e.playerId && (window.gui.chat.logMsg(s("ui.social.guild.autoFightLeave")), M = null), d(m.taxCollector, e.fightId, b.allies, e.playerId)
        }), e.on("PrismFightDefenderLeaveMessage", function(e) {
            M && M.type === m.prism && M.fightId === e.subAreaId && M.playerId === e.fighterToRemoveId && (window.gui.chat.logMsg(s("ui.prism.AutoDisjoin")), M = null), d(m.prism, e.subAreaId, b.allies, e.fighterToRemoveId)
        }), e.on("PrismFightAttackerRemoveMessage", function(e) {
            d(m.prism, e.subAreaId, b.enemies, e.fighterToRemoveId)
        })
    }
}
