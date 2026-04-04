function(e, t, i) {
    function n(e) {
        if (e) return console.error("fightEvents#default", e)
    }

    function o(e, t, i, n, o, a, r, s) {
        return void 0 === a && (a = 0), void 0 === r && (r = 1), void 0 === s && (s = !0), void 0 === n && (n = -1), {
            name: e,
            targetId: i,
            effectId: n,
            params: t || [],
            checkParams: a,
            castingSpellId: o,
            order: T.length,
            firstParamToCheck: r,
            showChatMessage: s
        }
    }

    function a(e) {
        b.getDataArray("Spells", [A.WEAPON_SPELL_ID], function(t, i) {
            return t ? e(t) : e(null, i[0] ? i[0].nameId : "")
        })
    }

    function r(e, t, i, n, o, a) {
        var r, s = "",
            c = _()
            .gui.fightManager;
        if (o) {
            var l = c.getFighter(o);
            r = l ? l.name : null
        }
        if (!a && r) {
            "ui.fight.launchSpell" === e ? e = "ui.fight.launchSpellOnTarget" : "ui.fight.closeCombat" === e && (e = "ui.fight.closeCombatOnTarget");
            var d = "{pingFighter," + o + "::" + r + "}";
            s += z(e, t, i, d)
        } else s += z(e, t, i);
        return n === f.CRITICAL_HIT ? s += " " + z("ui.fight.criticalHit") : n === f.CRITICAL_FAIL && (s += " " + z("ui.fight.criticalMiss")), s
    }

    function s(e, t) {
        for (var i = null, n = 0; n < t.length; n++) {
            var o = _()
                .gui.databases.TypeActions[t[n]],
                a = o ? o.elementId : -1;
            if (t[n] === O.ACTION_CHARACTER_LIFE_POINTS_LOST_FROM_PUSH && (a = v.PUSH), null !== i && i !== a) {
                i = -1;
                break
            }
            i = a
        }
        var r;
        switch (i) {
            case v.NEUTRAL:
                r = "neutral";
                break;
            case v.EARTH:
                r = "earth";
                break;
            case v.FIRE:
                r = "fire";
                break;
            case v.WATER:
                r = "water";
                break;
            case v.AIR:
                r = "air";
                break;
            case v.PUSH:
                r = "push";
                break;
            default:
                r = "multi"
        }
        return r ? "{style:" + r + "Damage," + e + "}" : e
    }

    function c(e, t, i) {
        if (e.name === p.FIGHT_END) return i(null, z("ui.fight.fightEnd"));
        var n, o, c, l, d = _()
            .gui.fightManager,
            u = e.params,
            f = d.getFighter(u[0]);
        if (!f) return i(new Error("Fighter does not exist."));
        var m, M, g, O, v = "{pingFighter," + f.id + "::" + f.name + "}",
            T = t[f.id] = t[f.id] || {
                name: v,
                lostHP: {
                    values: [],
                    actionIds: [],
                    dead: !1
                },
                lostSP: {
                    values: [],
                    actionIds: []
                },
                gainHP: {
                    values: [],
                    actionIds: []
                }
            };
        if (e.name === p.FIGHTER_DEATH) {
            var C = 0;
            if (!f.data.look.skins || f.data.look.skins.length < 2) return n = w(z("ui.fight.isDead"), C, v), i(null, n);
            var I = f.data.look.skins[1].toString();
            return b.searchDataMap("Heads", {
                match: I,
                matchProp: "skins"
            }, function(e, t) {
                if (e) return i(e);
                var o = Object.keys(t);
                return C = o.length ? t[o[0]].gender : 0, n = w(z("ui.fight.isDead"), C, v), i(null, n)
            })
        }
        if (e.name === p.FIGHTER_TRIGGERED_GLYPH) return (m = d.getFighter(u[1])) ? (M = "{pingFighter," + m.id + "::" + m.name + "}", u[2] ? d.getFighterSpell(u[2], u[1], function(e, t) {
            return e ? i(e) : (n = z("ui.fight.startTrap", v, t.getName(), M), i(null, n))
        }) : i(null, "")) : i(new Error("Second fighter does not exist."));
        if (e.name === p.FIGHTER_ENTERING_STATE) {
            var S = u[2] ? "</b> (" + u[2] + ")<b>" : "";
            o = _()
                .gui.databases.SpellStates[u[1]], o || (console.error("Spellstate " + u[1] + " does not exist"), o = u[1]), n = z("ui.fight.enterState", v, o.nameId + S)
        } else if (e.name === p.FIGHTER_LEAVING_STATE) o = _()
            .gui.databases.SpellStates[u[1]], o || (console.error("Spellstate " + u[1] + " does not exist"), o = u[1]), n = z("ui.fight.exitState", v, o.nameId);
        else {
            if (e.name === p.FIGHTER_SPELL_DISPELLED) return d.getFighterSpell(u[1], u[0], function(e, t) {
                return e ? i(e) : (n = z("ui.fight.dispellSpell", v, t.getName()), i(null, n))
            });
            if (e.name === p.FIGHTER_CASTED_SPELL) return d.getFighterSpell(u[1], u[0], function(e, t) {
                if (e) return i(e);
                var n = t.getName();
                return n ? (Number.isInteger(u[4]) && (c = u[4], O = u[5] ? 0 : 1, l = "{pingSpellCell," + n + "," + c + "," + f.id + "," + O + "}"), u[1] !== A.WEAPON_SPELL_ID ? i(null, r("ui.fight.launchSpell", v, l ? l : n, u[2], u[3], u[4])) : void a(function(e, t) {
                    return e ? i(e) : (Number.isInteger(u[4]) ? (c = u[4], g = u[5], O = g ? 0 : 1, l = "{pingSpellCell," + t + "," + c + "," + f.id + "," + O + "}") : g = u[4], i(null, r("ui.fight.launchSpell", v, l ? l : t, u[2], u[3], g)))
                })) : i(null, "")
            });
            if (e.name === p.FIGHTER_CLOSE_COMBAT) return b.getDataArray("Items", [u[1]], function(e, t) {
                return e ? i(e) : (Number.isInteger(u[4]) ? (c = u[4], g = u[5], O = g ? 0 : 1, l = "{pingSpellCell," + t[0].nameId + "," + c + "," + f.id + "," + O + "}") : g = u[4], i(null, r("ui.fight.closeCombat", v, l ? l : t[0].nameId, u[2], u[3], g)))
            });
            if (e.name === p.FIGHTER_LIFE_LOSS_AND_DEATH) y.regroupDamages ? (T.lostHP.values.push(u[1]), T.lostHP.actionIds.push(u[2]), T.lostHP.dead = !0) : n = z("ui.fight.lifeLossAndDeath", v, s(u[1], [u[2]]));
            else if (e.name === p.FIGHTER_LIFE_LOSS) y.regroupDamages ? (T.lostHP.values.push(u[1]), T.lostHP.actionIds.push(u[2])) : n = z("ui.fight.lifeLoss", v, s(u[1], [u[2]]));
            else if (e.name === p.FIGHTER_SHIELD_LOSS) y.regroupDamages ? (T.lostSP.values.push(u[1]), T.lostSP.actionIds.push(u[2])) : n = z("ui.fight.lostShieldPoints", v, s(u[1], [u[2]]));
            else if (e.name === p.FIGHTER_REDUCED_DAMAGES) n = z("ui.fight.reduceDamages", v, u[1]);
            else if (e.name === p.FIGHTER_LIFE_GAIN) y.regroupDamages ? T.gainHP.values.push(u[1]) : n = z("ui.fight.lifeGain", v, u[1]);
            else if (e.name === p.FIGHTER_AP_LOST) n = z("ui.fight.lostAP", v, u[1]);
            else if (e.name === p.FIGHTER_AP_GAINED) n = z("ui.fight.winAP", v, u[1]);
            else if (e.name === p.FIGHTER_AP_LOSS_DODGED) n = z("ui.fight.dodgeAP", v, u[1]);
            else if (e.name === p.FIGHTER_MP_LOST) n = z("ui.fight.lostMP", v, u[1]);
            else if (e.name === p.FIGHTER_MP_GAINED) n = z("ui.fight.winMP", v, u[1]);
            else if (e.name === p.FIGHTER_MP_LOSS_DODGED) n = z("ui.fight.dodgeMP", v, u[1]);
            else if (e.name === p.FIGHTER_TEMPORARY_BOOSTED) {
                var E = ~~u[2];
                n = z("ui.fight.effect", v, E ? u[1] + " (" + u[3] + ")" : u[1])
            } else if (e.name === p.FIGHTER_EFFECTS_MODIFY_DURATION) n = z("ui.fight.effectsModifyDuration", v, u[2]);
            else if (e.name === p.FIGHTER_SPELL_IMMUNITY) n = z("ui.fight.noChange", v);
            else if (e.name === p.FIGHTER_NO_CHANGE) n = z("ui.fight.noChange", v);
            else if (e.name === p.FIGHTER_LEAVE) n = z("ui.fight.leave", v);
            else if (e.name === p.FIGHTER_GOT_DISPELLED) n = z("ui.fight.dispell", v);
            else if (e.name === p.FIGHTER_REFLECTED_SPELL) n = z("ui.fight.reflectSpell", v);
            else if (e.name === p.FIGHTER_REFLECTED_DAMAGES) n = z("ui.fight.reflectDamages", v);
            else if (e.name === p.FIGHTER_GOT_TACKLED) n = z("ui.fight.dodgeFailed");
            else if (e.name === p.FIGHTER_VISIBILITY_CHANGED) {
                var L = u[1] === h.INVISIBLE;
                n = L ? z("ui.fight.invisibility", v) : z("ui.fight.visibility", v)
            } else if (e.name === p.FIGHTER_GOT_KILLED) {
                if (m = d.getFighter(u[1]), !m) return i(new Error("Second fighter does not exist."));
                if (M = "{pingFighter," + m.id + "::" + m.name + "}", u[0] === u[1]) return i();
                n = z("ui.fight.killed", v, M)
            }
        }
        return i(null, n)
    }

    function l(e, t, i) {
        if (_()
            .gui.fightManager.emit(e.name, e.params), e.name === p.FIGHTER_LIFE_LOSS && C[e.params[0]]) e.name = p.FIGHTER_LIFE_LOSS_AND_DEATH;
        else if (e.name === p.FIGHTER_DEATH && I[e.params[0]]) return i();
        return e.showChatMessage === !1 ? i() : e.effectId === -1 ? c(e, t, i) : void b.getDataMap("SpellEffects", [e.effectId], null, function(n, o) {
            var a = o && o[e.effectId];
            return n ? (console.error("Unable to retrieve the effects visibility for " + e.effectId + ", " + n), c(e, t, i)) : a && !a.visibleInFightLog ? i() : c(e, t, i)
        })
    }

    function d(e, t) {
        var i = [];
        S = !0, t || (t = n);
        var o = {};
        M.eachSeries(e, function(e, t) {
            l(e, o, function(e, n) {
                return e ? t(e) : (n && i.push(n), t())
            })
        }, function(e) {
            if (S = !1, C = {}, I = {}, e) return t(e);
            var n = i.length ? i.join("\n") : "",
                a = u(o);
            if ("" !== n && "" !== a ? n += "\n" + a : "" === n && (n += a), "" !== n && _()
                .gui.chat.logMsg(n, g.PSEUDO_CHANNEL_FIGHT_LOG), E.length) {
                var r = E.shift();
                d(r[0], r[1])
            }
            return t()
        })
    }

    function u(e) {
        var t = "";
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var n, o, a, r, c, l, d = e[i],
                    u = d.name,
                    p = d.lostSP,
                    h = d.lostHP,
                    f = d.gainHP;
                if (p.values.length) {
                    for (a = 0, r = "", o = 0; o < p.values.length; o++) c = p.values[o], l = p.actionIds[o], r += o > 0 ? " + " : "", r += s(Math.abs(c), [l]), a += c;
                    n = z("ui.fight.lostShieldPoints", u, s(a, p.actionIds)), p.values.length > 1 && (n += " (" + r + ")"), t = t + ("" !== t ? "\n" : "") + n
                }
                if (h.values.length || f.values.length) {
                    for (a = 0, r = "", o = 0; o < f.values.length; o++) c = f.values[o], r += o > 0 ? " + " + c : c, a += c;
                    for (o = 0; o < h.values.length; o++) {
                        c = h.values[o], l = h.actionIds[o];
                        var b = f.values.length ? " - " : " + ";
                        r += f.values.length + o > 0 ? b : "", r += s(Math.abs(c), [l]), a += c
                    }
                    if (a >= 0) n = z("ui.fight.lifeGain", u, a);
                    else {
                        var m = h.dead ? "ui.fight.lifeLossAndDeath" : "ui.fight.lifeLoss";
                        n = z(m, u, s(a, h.actionIds))
                    }
                    h.values.length + f.values.length > 1 && (n += " (" + r + ")"), t = t + ("" !== t ? "\n" : "") + n
                }
            } return t
    }
    var p = i(596),
        h = i(684),
        f = i(685),
        b = i(130),
        m = i(17),
        M = i(18),
        g = i(504),
        _ = i(14),
        A = i(13),
        O = i(476),
        v = i(686),
        y = i(55),
        z = m.getText,
        w = m.processTextWithModifier,
        T = [],
        C = {},
        I = {},
        S = !1,
        E = [];
    t.send = function(e, t, i, n, a, r, s) {
        var c = o(e, t, i, -1, n, a, r, s),
            d = {};
        l(c, d, function(e, t) {
            if (e) return console.error("fightEvents#send", e);
            var i = t || "",
                n = u(d);
            "" !== i && "" !== n ? i += "\n" + n : "" === i && (i += n), "" !== i && _()
                .gui.chat.logMsg(i, g.PSEUDO_CHANNEL_FIGHT_LOG)
        })
    }, t.push = function(e, t, i, n, a, r, s, c) {
        var l = o(e, t, i, n, a, r, s, c);
        l.name === p.FIGHTER_LIFE_LOSS ? I[l.params[0]] = !0 : l.name === p.FIGHTER_DEATH && (C[l.params[0]] = !0), T.push(l)
    }, t.reset = function() {
        T = [], C = {}, I = {}, S = !1, E = []
    }, t.flush = function(e) {
        var t = T;
        return T = [], S ? E.push([t, e]) : void d(t, e)
    }
}
