function(e, t, i) {
    function n(e) {
        return void 0 === e || null === e
    }

    function o(e) {
        this._effectCaller = "", this._hasMissingDdInfo = !1;
        for (var t in e) e.hasOwnProperty(t) && ("effectCaller" === t ? this._effectCaller = e[t] : this[t] = e[t]);
        this._effectCaller || y.error(new Error("EF: No caller!")), this._init()
    }

    function a(e) {
        if (null !== e.effectId && "null" !== e.effectId) return !0;
        var t = "effectInstanceFactory: an effectId is null. ";
        return t += "description: " + e.description + " ", t += "type: " + e._type + " ", t += "keys: " + JSON.stringify(Object.keys(e)), y.error(new Error(t)), !1
    }

    function r(e, t) {
        for (var i = [], n = 0; n < e.length; n += 1) {
            var o = e[n];
            a(o) && i.indexOf(o.effectId) === -1 && i.push(o.effectId)
        }
        return 0 === i.length ? t() : void O.getDataArray("Effects", i, function(e, n) {
            return e ? t(e) : void t(null, M.extractElementsFrom(i, n, !0))
        })
    }

    function s(e, t, i) {
        if ("Items" === e) {
            if (i === z.ACTION_ITEM_DUNGEON_KEY_DATE) switch (t) {
                case I:
                case S:
                case E:
                case L:
                case N:
                case R:
                case q:
                case x:
                    return !1
            }
            if (i === z.ACTION_ITEM_PETS_EAT) return !1;
            if (i === z.ACTION_ITEM_MIMICRY_OBJ_GID) return !1
        }
        if ("Monsters" === e) {
            if (i === z.ACTION_CHARACTER_SUMMON_MONSTER_GROUP) return !1;
            if (i === z.ACTION_LADDER_ID) return !1
        }
        return !0
    }

    function c(e, t, i) {
        function n(e, t, i) {
            i || y.error("RD: the effectInstance is needed."), o[e] || (o[e] = {}), o[e][t] || (o[e][t] = []), o[e][t].push(i)
        }
        var o = {};
        f.each(e, function(e, i) {
            if (!e) return i();
            var o;
            return e.description || (o = e.getParams(), d(e, o, t, n)), "" === e.subEffectDescription ? (o = e.getParams(), u(e, o, t, n, i)) : i()
        }, function(n) {
            return n ? i(n) : 0 === Object.keys(o)
                .length ? i(null, e) : void f.each(Object.keys(o), function(e, i) {
                    var n = [];
                    for (var a in o[e])
                        if (o[e].hasOwnProperty(a)) {
                            var r = parseInt(a, 10);
                            n.indexOf(r) === -1 && n.push(r)
                        } O.getDataArray(e, n, function(a, r) {
                        if (a) return i(a);
                        for (var c = M.extractElementsFrom(n, r, !0, A.getKey(e)), l = 0; l < n.length; l += 1) {
                            var d = n[l];
                            if (!c[d]) {
                                for (var u = o[e][d], p = 0; p < u.length; p += 1) {
                                    var h = u[p];
                                    if (h.setBroken(!0), s(e, d, h.effectId)) {
                                        var f = "id " + d + " unavailable in table " + e;
                                        f += " caller: " + h.getCaller(), f += " for effectId: " + h.effectId, y.error(new Error(f))
                                    }
                                }
                                c[d] = C
                            }
                        }
                        o[e] = c, t || (t = {}), t[e] || (t[e] = {});
                        for (var b in c) c.hasOwnProperty(b) && (t[e][b] = c[b]);
                        i()
                    })
                }, function(n) {
                    return n ? i(n) : void c(e, t, i)
                })
        })
    }

    function l(e, t, i) {
        for (var o = 0, a = t.length; o < a; o += 1) {
            var r = t[o],
                s = e[r];
            if (n(s)) {
                var c = "param " + (r + 1) + " is falsy";
                return c += " for effect " + i.effectId + " from " + i.getCaller(), y.error(c), !1
            }
        }
        return !0
    }

    function d(e, t, i, o) {
        var a = w(),
            r = !0,
            s = e.effectId;
        switch (s) {
            case z.ACTION_CHARACTER_LEARN_EMOTICON:
                if (1 === t[1]) return;
                null === t[0] && t[2] && (t[0] = t[2]), i ? (t[2] = i.Emoticons[t[0]].nameId, e.setDescription(t)) : o("Emoticons", t[0], e);
                break;
            case 165:
            case 1084:
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[0] = i.ItemTypes[t[0]].nameId, e.setDescription(t)) : o("ItemTypes", t[0], e);
                break;
            case 197:
            case 181:
            case 185:
            case 1008:
            case 1011:
            case z.ACTION_LADDER_ID:
                if (s === z.ACTION_LADDER_ID) {
                    if (e.isBroken()) break;
                    n(t[2]) && (t[2] = 0)
                }
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[0] = i.Monsters[t[0]].nameId, e.setDescription(t)) : o("Monsters", t[0], e);
                break;
            case 281:
            case 282:
            case 283:
            case 284:
            case 285:
            case 286:
            case 287:
            case 288:
            case 289:
            case 290:
            case 291:
            case 292:
            case 293:
            case 294:
            case 787:
            case 792:
            case 793:
            case 1017:
            case 1018:
            case 1019:
            case 1035:
            case 1036:
            case 1044:
            case 1045:
            case 1160:
            case 2822:
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[0] = i.Spells[t[0]].nameId || "[SPELL_NAME_ID#" + t[0] + "]", e.setDescription(t)) : o("Spells", t[0], e);
                break;
            case z.ACTION_CHARACTER_DISPELL_SPELL:
                if (r = l(t, [2], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.Spells[t[2]].nameId, e.setDescription(t)) : o("Spells", t[2], e);
                break;
            case 603:
            case 615:
                if (null === t[0] && t[2] && (t[0] = t[2]), r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.Jobs[t[0]].nameId, e.setDescription(t)) : o("Jobs", t[0], e);
                break;
            case 604:
            case 722:
                if (n(t[2]) && (t[2] = t[0]), r = l(t, [2], e), !r) {
                    e.setBroken(!0);
                    break
                }
                if (i && i.SpellLevels && i.SpellLevels[t[2]])
                    if (i.Spells && i.Spells[i.SpellLevels[t[2]].spellId]) t[2] = i.Spells[i.SpellLevels[t[2]].spellId].nameId, e.setDescription(t);
                    else {
                        if (i.SpellLevels[t[2]] === C) {
                            console.error("SpellLevel " + t[2] + " does not exist"), e.setBroken(!0);
                            break
                        }
                        o("Spells", i.SpellLevels[t[2]].spellId, e)
                    }
                else o("SpellLevels", t[2], e);
                break;
            case 614:
            case 1050:
                if (r = l(t, [1], e), !r) {
                    e.setBroken(!0);
                    break
                }
                t[0] = t[2], i ? (t[1] = i.Jobs[t[1]].nameId, e.setDescription(t)) : o("Jobs", t[1], e);
                break;
            case 616:
            case 624:
                n(t[0]) && !n(t[2]) && (t[0] = t[2]);
                var c = 2;
                if (t[1] === c || t[0] <= 10) return;
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.Spells[t[0]].nameId, e.setDescription(t)) : o("Spells", t[0], e);
                break;
            case 620:
                if (n(t[0]) && !n(t[2]) && (t[0] = t[2]), r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.Documents[t[0]].titleId, e.setDescription(t)) : o("Documents", t[0], e);
                break;
            case 621:
                if (r = l(t, [1], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.Monsters[t[1]].nameId, e.setDescription(t)) : o("Monsters", t[1], e);
                break;
            case z.ACTION_CHARACTER_SUMMON_MONSTER_GROUP:
            case 628:
                var d = t[2];
                if (n(d)) break;
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                var u = "",
                    p = "",
                    h = t[0] - 1;
                if (i) {
                    var f = i.Monsters[d];
                    if (f === C) return p = "Unknown monster", e.setDescription(["", u, p]);
                    f || (y.error(new Error("monster " + d + " missing for effectId " + s)), f = {});
                    var b = f.grades || [],
                        M = b[h];
                    M || (M = {}), u = M.level, p = f.nameId, e.setDescription(["", u, p])
                } else o("Monsters", d, e);
                break;
            case 649:
            case 960:
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.AlignmentSides[t[0]].titleId, e.setDescription(t)) : o("AlignmentSides", t[0], e);
                break;
            case 699:
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[0] = i.Jobs[t[0]].nameId, e.setDescription(t)) : o("Jobs", t[0], e);
                break;
            case 716:
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[0] = i.MonsterRaces[t[0]].nameId, e.setDescription(t)) : o("MonsterRaces", t[0], e);
                break;
            case 724:
                if (n(t[0]) && !n(t[2]) && (t[0] = t[2]), r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                if (i) {
                    var _ = a.gui.playerData.characterBaseInformations || {},
                        A = _.sex ? "nameFemaleId" : "nameMaleId";
                    t[2] = i.Titles[t[0]][A], e.setDescription(t)
                } else o("Titles", t[0], e);
                break;
            case 726:
                if (n(t[0]) && !n(t[2]) && (t[0] = t[2]), r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.Ornaments[t[0]].nameId, e.setDescription(t)) : o("Ornaments", t[0], e);
                break;
            case 800:
                if (n(t[2]) && !n(t[0]) && (t[2] = t[0]), r = l(t, [2], e), !r) {
                    e.setBroken(!0);
                    break
                }
                e.setDescription(t);
                break;
            case 806:
                t[1] > 6 ? t[0] = m("ui.petWeight.fat", [t[1]]) : t[2] > 6 ? t[0] = m("ui.petWeight.lean", [t[2]]) : "EffectInstanceInteger" === e._type && t[0] > 6 ? t[0] = m("ui.petWeight.lean", [t[0]]) : t[0] = m("ui.petWeight.nominal"), e.setDescription(t);
                break;
            case z.ACTION_ITEM_PETS_EAT:
                t[0] ? i ? (t[0] = i.Items[t[0]].nameId || "unknown", e.setDescription(t)) : o("Items", t[0], e) : (t[0] = m("ui.common.none"), e.setDescription(t));
                break;
            case z.ACTION_ITEM_DUNGEON_KEY_DATE:
            case z.ACTION_ITEM_MIMICRY_OBJ_GID:
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                if (i) {
                    var O = i.Items[t[0]];
                    O === C ? (t[0] = "missing_item_" + t[0], e.setDescription(t), e.iconId = 15116) : (t[0] = O.nameId, e.setDescription(t), e.iconId = O.iconId)
                } else o("Items", t[0], e);
                break;
            case 826:
                if (n(t[0]) && !n(t[2]) && (t[0] = t[2]), r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                var v, T = i && i.MapReferences,
                    I = i && i.MapPositions;
                if (T)
                    if (I) {
                        v = T[t[0]] ? T[t[0]].mapId : -1;
                        var S = I[v];
                        S && (t[0] = S.nameId || m("ui.effect.noMapName")), e.setDescription(t)
                    } else v = T[t[0]] ? T[t[0]].mapId : -1, o("MapPositions", v, e);
                else o("MapReferences", t[0], e);
                break;
            case 905:
                if (r = l(t, [1], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[1] = i.Monsters[t[1]].nameId, e.setDescription(t)) : o("Monsters", t[1], e);
                break;
            case 939:
                if (n(t[0]) && !n(t[2]) && (t[0] = t[2]), r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.Items[t[0]].nameId, e.setDescription(t)) : o("Items", t[0], e);
                break;
            case 950:
            case 951:
            case 952:
                if (t[2] || (t[2] = t[0]), r = l(t, [2], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[2] = i.SpellStates[t[2]].nameId, e.setDescription(t)) : o("SpellStates", t[2], e);
                break;
            case 961:
            case 962:
                t[2] = t[0], e.setDescription(t);
                break;
            case 988:
            case 987:
            case 985:
            case 996:
                e.setDescription(t);
                break;
            case 1111:
                t[2] = t[0], e.setDescription(t);
                break;
            case 1161:
                if (r = l(t, [0], e), !r) {
                    e.setBroken(!0);
                    break
                }
                i ? (t[0] = i.Companions[t[0]].nameId, e.setDescription(t)) : o("Companions", t[0], e);
                break;
            case 1171:
            case 1172:
                t[0] || (t[0] = t[2]), e.setDescription(t);
                break;
            case 805:
            case 808:
            case 983:
                if (t[2] = n(t[2]) ? "0" : t[2], "string" != typeof t[1] || "string" != typeof t[2]) break;
                var E = t[0],
                    L = t[1].substr(0, 2),
                    N = t[1].substr(2, 2),
                    R = t[2].substr(0, 2),
                    q = t[2].substr(2, 2),
                    x = a.Config.language;
                switch (x) {
                    case "fr":
                        t[0] = N + "/" + L + "/" + E + " " + R + ":" + q;
                        break;
                    default:
                        t[0] = L + "/" + N + "/" + E + " " + R + ":" + q
                }
                e.setDescription(t);
                break;
            case 2861:
                if (r = l(t, [1, 2], e), !r) {
                    e.setBroken(!0);
                    break
                }
                if (i) {
                    var B = "#" + g.toHexaString(t[1], 3),
                        D = i.InfoMessages[t[2]];
                    D && (t[0] = '<span style="color:' + B + '">' + D.textId + "</span>"), e.setDescription(t)
                } else o("InfoMessages", t[2], e);
                break;
            case z.ACTION_LW_DROPPER:
                if (n(t[3])) break;
                e.setDescription(t);
                break;
            case z.ACTION_BOOST_EXPERIENCE:
            case z.ACTION_DEBOOST_EXPERIENCE:
                t[2] || (t[2] = t[0]), e.setDescription(t);
                break;
            case z.ACTION_BOOST_DISPLACEMENT_FORCE:
            case z.ACTION_DEBOOST_DISPLACEMENT_FORCE:
            case z.ACTION_BOOST_INFLICTED_DISPLACEMENT_FORCE:
            case z.ACTION_DEBOOST_INFLICTED_DISPLACEMENT_FORCE:
                t[2] || (t[2] = t[0]), e.setDescription(t);
                break;
            default:
                s === z.ACTION_INCARNATION && n(t[4]) && (t[4] = 1), s === z.ACTION_CAPTURE_RIDE && n(t[0]) && !n(t[2]) && (t[0] = t[2]), s === z.ACTION_SHIELD_EXPERIENCE && n(t[0]) && (t[0] = 1), e.setDescription(t)
        }
    }

    function u(e, i, n, a, r) {
        if (e.requiresInvocationDescription()) {
            var s = i[0];
            if (!n || !n.Monsters || !n.Monsters[s]) return a("Monsters", s, e), r();
            var c = n.Monsters[s],
                l = [],
                d = i[1];
            (d < 1 || d > c.grades.length) && (d = c.grades.length);
            var u = c.grades[d - 1],
                p = 1,
                h = w();
            h.gui && h.gui.playerData.characterBaseInformations && h.gui.playerData.characterBaseInformations.level && (p = h.gui.playerData.characterBaseInformations.level);
            var f = Math.floor(u.lifePoints + u.lifePoints * p / 100),
                b = Math.floor((u.wisdom + u.wisdom * p / 100) / 10);
            return l.push(m("ui.stats.HP") + m("ui.common.colon") + f), l.push(m("ui.stats.shortAP") + m("ui.common.colon") + u.actionPoints), l.push(m("ui.stats.shortMP") + m("ui.common.colon") + u.movementPoints), l.push(m("ui.stats.dodgeAP") + m("ui.common.colon") + (u.paDodge + b)), l.push(m("ui.stats.dodgeMP") + m("ui.common.colon") + (u.pmDodge + b)), l.push(m("ui.stats.neutralReductionPercent") + m("ui.common.colon") + u.neutralResistance), l.push(m("ui.stats.earthReductionPercent") + m("ui.common.colon") + u.earthResistance), l.push(m("ui.stats.fireReductionPercent") + m("ui.common.colon") + u.fireResistance), l.push(m("ui.stats.waterReductionPercent") + m("ui.common.colon") + u.waterResistance), l.push(m("ui.stats.airReductionPercent") + m("ui.common.colon") + u.airResistance), e.subEffectDescription = l, r()
        }
        if (e.requiresGlyphDescription() || e.requiresTrapDescription() || e.requiresBombDescription()) {
            var M = i[0];
            if (e.requiresBombDescription()) {
                var g = i[0];
                if (!n || !n.SpellBombs || !n.SpellBombs[g]) return a("SpellBombs", g, e), r();
                if (!n.SpellBombs[g] || n.SpellBombs[g] === C) return r();
                M = n.SpellBombs[g].explodSpellId
            }
            if (!n || !n.Spells || !n.Spells[M]) return a("Spells", M, e), r();
            if (!n.Spells[M] || n.Spells[M] === C) return r();
            var _ = n.Spells[M].spellLevels[i[1] - 1 || 0];
            if (!n || !n.SpellLevels || !n.SpellLevels[_]) return a("SpellLevels", _, e), r();
            for (var A = [], O = n.SpellLevels[_], v = 0; v < O.effects.length; v += 1) {
                var z = O.effects[v];
                z.effectCaller = "SubEffect spellLevelId: " + _ + " effect#" + v, z.effectCaller += " from parent: " + e.getCaller();
                var T = new o(z),
                    I = T.getParams();
                if (I[0] !== i[0] || I[1] !== i[1] || I[2] !== i[2]) A.push(z);
                else {
                    var S = "Sub description: The effect is calling it-self (infinite-loop)";
                    S += " for effect " + e.effectId + " from " + e.getCaller(), y.error(S)
                }
            }
            return t.createEffectInstances(A, function(t, i) {
                if (t) return r(t);
                for (var n = [], o = 0; o < i.length; o++)
                    if (i[o].description && !i[o].hidden) {
                        n.push(i[o].description);
                        var a = i[o].getDurationString();
                        a && (n[n.length - 1] += " (" + a + ")")
                    } return e.subEffectDescription = n.length > 0 && n, r()
            })
        }
        return e.subEffectDescription = !1, r()
    }

    function p(e, t) {
        r(e, function(i, n) {
            if (i) return t(i);
            for (var o = 0; o < e.length; o++) {
                var a = e[o],
                    r = n && n[a.effectId];
                r ? a.effect = r : e[o] = null
            }
            c(e, null, t)
        })
    }

    function h(e, t) {
        var i = k[t],
            n = F[i],
            o = {
                _type: i
            };
        for (var a in n) o[a] = e[a];
        return o
    }
    var f = i(18),
        b = i(13),
        m = i(17).getText,
        M = i(16),
        g = i(475),
        _ = i(17).processTextWithCallerInfo,
        A = i(131),
        O = i(130),
        v = i(32),
        y = i(34).logger,
        z = i(476),
        w = i(14),
        T = i(477);
    t.EFFECT_SHAPES = i(478);
    var C = "MISSING",
        I = 12735,
        S = 7312,
        E = 7311,
        L = 7310,
        N = 7309,
        R = 8545,
        q = 14988,
        x = 14989,
        B = 2859,
        D = 19264,
        W = {
            effectId: 0,
            targetId: 0,
            targetMask: null,
            duration: 0,
            delay: 0,
            random: 0,
            group: 0,
            modificator: 0,
            trigger: !1,
            triggers: null,
            isPreview: !1,
            hidden: !0,
            baseValue: null,
            zoneSize: 0,
            zoneShape: 0,
            zoneMinSize: 0,
            zoneEfficiencyPercent: 0,
            zoneMaxEfficiency: 0
        },
        P = {
            ObjectEffectString: "EffectInstanceString",
            ObjectEffectInteger: "EffectInstanceInteger",
            ObjectEffectMinMax: "EffectInstanceMinMax",
            ObjectEffectDice: "EffectInstanceDice",
            ObjectEffectDate: "EffectInstanceDate",
            ObjectEffectDuration: "EffectInstanceDuration",
            ObjectEffectLadder: "EffectInstanceLadder",
            ObjectEffectCreature: "EffectInstanceCreature",
            ObjectEffectMount: "EffectInstanceMount"
        };
    t.parseZone = function(e) {
        var i = e.length > 1 ? e.substr(1).split(",") : [],
            n = {
                zoneShape: e.substr(0, 1),
                zoneSize: b.EFFECTSHAPE_DEFAULT.AREA_SIZE,
                zoneMinSize: b.EFFECTSHAPE_DEFAULT.MIN_AREA_SIZE,
                zoneEfficiencyPercent: b.EFFECTSHAPE_DEFAULT.EFFICIENCY,
                zoneMaxEfficiency: b.EFFECTSHAPE_DEFAULT.MAX_EFFICIENCY_APPLY
            };
        if ("l" === n.zoneShape) return n.zoneSize = 0,
                                        n.zoneMinSize = 0,
                                        n.zoneEfficiencyPercent = 0,
                                        n.zoneMaxEfficiency = 0,
                                        n;
        switch (i.length) {
            case 0:
                if ("X" === n.zoneShape) return t.parseZone("X1");
                if ("U" === n.zoneShape) return t.parseZone("U1");
                if ("T" === n.zoneShape) return t.parseZone("T1");
                if ("C" === n.zoneShape) return t.parseZone("C1");
                if ("G" === n.zoneShape) return t.parseZone("G1");
                if ("Q" === n.zoneShape) return t.parseZone("Q1");
                if ("+" === n.zoneShape) return t.parseZone("+1");
                if ("V" === n.zoneShape) return t.parseZone("V1");
                break;
            case 1:
                n.zoneSize = parseInt(i[0], 10);
                break;
            case 2:
                n.zoneSize = parseInt(i[0], 10),
                t.EFFECT_SHAPES[n.zoneShape].hasMinSize ? n.zoneMinSize = parseInt(i[1], 10) : n.zoneEfficiencyPercent = parseInt(i[1], 10);
                break;
            case 3:
                n.zoneSize = parseInt(i[0], 10),
                t.EFFECT_SHAPES[n.zoneShape].hasMinSize ? (n.zoneMinSize = parseInt(i[1], 10),
                n.zoneEfficiencyPercent = parseInt(i[2], 10)) : (n.zoneEfficiencyPercent = parseInt(i[1], 10),
                n.zoneMaxEfficiency = parseInt(i[2], 10));
                break;
            case 4:
                n.zoneSize = parseInt(i[0], 10),
                n.zoneMinSize = parseInt(i[1], 10),
                n.zoneEfficiencyPercent = parseInt(i[2], 10),
                n.zoneMaxEfficiency = parseInt(i[3], 10)
        }
        return n
    }, t.getHumanReadableZoneInfo = function(e, i) {
        if (!e) return "";
        var n = e.zoneShape,
            o = e.zoneSize;
        return "L" === n && (o += 1), void 0 === t.EFFECT_SHAPES[n] ? (y.error(new Error("EFFECT_SHAPES: missing for " + n + ", errorLabel: " + i)), "") : t.EFFECT_SHAPES[n].desc ? m(t.EFFECT_SHAPES[n].desc, o) : ""
    }, o.prototype._init = function() {
        if (this.description = "", this.subEffectDescription = "", this.effect = null, this._retrieveInstanceType(), this.hasOwnProperty("actionId"))
            if (this.duration = 0,
                this.effectId = this.actionId,
                "EffectInstanceDice" === this._type && this.effectId === z.ACTION_INCARNATION) {
                this._type = "EffectInstanceDate", this.year = this.diceNum;
                var e = M.getIncarnationExpDetails(this.diceSide, this.diceNum, this.diceConst);
                this.month = e.currentExp, this.day = e.level, this.hour = 0, this.minute = 0
            } else switch (this._type) {
                case "EffectInstanceString":
                    this.text = this.value, delete this.value;
                    break;
                case "EffectInstanceDice":
                    this.value = this.diceConst, delete this.diceConst;
                    break;
                case "EffectInstanceDate":
                    this.month += 1
            }
    }, o.prototype.isBroken = function() {
        return this._hasMissingDdInfo
    }, o.prototype.setBroken = function(e) {
        this._hasMissingDdInfo = e
    }, o.prototype._retrieveInstanceType = function() {
        return this._type ? void(P[this._type] && (this._type = P[this._type])) : void(this.hasOwnProperty("diceNum") ? this._type = "EffectInstanceDice" : this.hasOwnProperty("year") ? this._type = "EffectInstanceDate" : this.hasOwnProperty("days") ? this._type = "EffectInstanceDuration" : this.hasOwnProperty("min") ? this._type = "EffectInstanceMinMax" : this.hasOwnProperty("monsterCount") ? this._type = "EffectInstanceLadder" : this.hasOwnProperty("monsterFamilyId") ? this._type = "EffectInstanceCreature" : this.hasOwnProperty("mountId") ? this._type = "EffectInstanceMount" : this.hasOwnProperty("text") ? this._type = "EffectInstanceString" : this._type = "EffectInstanceInteger")
    }, o.prototype.describe = function() {
        return "[EffectInstance: effectId: " + this.effectId + " caller: " + this.getCaller()
    }, o.prototype.clone = function() {
        var e = new o({
                effectCaller: this.getCaller()
            }),
            t = v.getOwnProperties(this)
            .filter(function(e) {
                return "effect" !== e
            });
        v.shallowCopyProperties(this, e, t);
        var i = this.effect;
        return i && (e.effect = {}, v.shallowCopyProperties(i, e.effect, v.getOwnProperties(i))), e
    }, o.prototype.getParams = function() {
        switch (this._type) {
            case "EffectInstanceString":
                return [null, null, null, this.text];
            case "ObjectEffectTrueInteger":
            case "EffectInstanceInteger":
                return [this.value];
            case "EffectInstanceMinMax":
                return [this.min, this.min === this.max ? null : this.max];
            case "EffectInstanceDice":
                var e = this.value || null,
                    t = this.diceSide || null;
                return this.effectId === B && this.diceNum === D && (this.diceNum = 5e6), [0 === this.diceNum ? null : this.diceNum, t, e];
            case "EffectInstanceDate":
                var i = this.month > 9 ? this.month : "0" + this.month,
                    n = this.day > 9 ? this.day : "0" + this.day,
                    o = this.hour > 9 ? this.hour : "0" + this.hour,
                    a = this.minute > 9 ? this.minute : "0" + this.minute;
                return [this.year, i.toString() + n, o.toString() + a, this.month, this.day];
            case "EffectInstanceDuration":
                return [this.days, this.hours, this.minutes];
            case "EffectInstanceLadder":
                return [this.monsterFamilyId, null, this.monsterCount];
            case "EffectInstanceCreature":
                return [this.monsterFamilyId];
            case "EffectInstanceMount":
                return [this.date, this.modelId, this.mountId];
            default:
                return []
        }
    }, o.prototype.setParameter = function(e, t) {
        switch (this._type) {
            case "EffectInstanceString":
                return void(3 === e && (this.text = t.toString()));
            case "ObjectEffectTrueInteger":
                return void(this.value = t);
            case "EffectInstanceInteger":
                return void(2 === e && (this.value = t));
            case "EffectInstanceMinMax":
                return void(0 === e ? this.min = t : 1 === e && (this.max = t));
            case "EffectInstanceDice":
                return void(0 === e ? this.diceNum = t : 1 === e ? this.diceSide = t : 2 === e && (this.value = t));
            case "EffectInstanceDate":
                return void(0 === e ? this.year = t : 1 === e ? (this.month = t.substr(0, 2), this.day = t.substr(2, 2)) : 2 === e ? (this.hour = t.substr(0, 2), this.minute = t.substr(2, 2)) : 3 === e ? this.month = t : 4 === e && (this.day = t));
            case "EffectInstanceDuration":
                return void(0 === e ? this.days = t : 1 === e ? this.hours = t : 2 === e && (this.minutes = t));
            case "EffectInstanceLadder":
                return void(0 === e ? this.monsterFamilyId = t : 2 === e && (this.monsterCount = t));
            case "EffectInstanceCreature":
                return void(0 === e && (this.monsterFamilyId = t));
            case "EffectInstanceMount":
                0 === e ? this.date = Number(t) : 1 === e ? this.modelId = Number(t) : 2 === e && (this.mountId = Number(t))
        }
    }, o.prototype.getValue = function(e) {
        return this.hasOwnProperty(e) ? this[e] : W[e]
    }, o.prototype.setDescription = function(e) {
        var t = w();
        if (this.effect.hasOwnProperty("descriptionId")) {
            var i = "";
            if (this.effect.descriptionId) {
                for (var n = [], o = 0; o < e.length; o += 1) {
                    var a = e[o];
                    if (0 === o && Number.isInteger(a) && Number.isInteger(this.baseValue)) {
                        var r = a - this.baseValue;
                        n.push(this.baseValue + " (+" + r + ")")
                    } else n.push(a)
                }
                i = _(this.effect.descriptionId, n, this.describe(), {
                    isPreview: Boolean(this.isPreview)
                })
            }
            switch (this.effect.id) {
                case 950:
                case 951:
                case 952:
                    this.description = i + (t.gui.playerData.isAbleToSeeId() ? " (" + this.diceNum + ")" : "");
                    break;
                default:
                    this.description = i
            }
            var s = this.getValue("modificator");
            0 !== s && (this.description += " " + m("ui.effect.boosted.spell.complement", [s], "%"));
            var c = this.getValue("random");
            c > 0 && (this.getValue("group") > 0 ? this.description += " (" + m("ui.common.random") + ")" : this.description += " " + m("ui.effect.randomProbability", [c], "%")), this.trigger && (this.description = m("ui.spell.trigger", this.description))
        }
    }, o.prototype.getDurationString = function(e) {
        return this.delay ? m("ui.common.delayTurn", this.delay, this.delay <= 1) : !this.duration || isNaN(this.duration) ? "" : this.duration < 0 ? m("ui.common.infinit") : this.duration > 1 ? m("ui.common.turn", this.duration, !0) : e ? m("ui.common.lastTurn") : m("ui.common.turn", this.duration, !1)
    }, o.prototype.isDamageEffect = function() {
        return this.effect && this.effect.category === T.damage
    }, o.prototype.isInZoneEffect = function(e) {
        return Boolean(this.cellZoneEffect[e])
    }, o.prototype.getZoneEffect = function() {
        return this.rawZone ? t.parseZone(this.rawZone) : {
            zoneShape: this.getValue("zoneShape"),
            zoneSize: this.getValue("zoneSize"),
            zoneMinSize: this.getValue("zoneMinSize"),
            zoneEfficiencyPercent: this.getValue("zoneEfficiencyPercent"),
            zoneMaxEfficiency: this.getValue("zoneMaxEfficiency")
        }
    }, o.prototype.getHumanReadableZoneInfo = function(e) {
        return t.getHumanReadableZoneInfo(this.getZoneEffect(), e)
    }, o.prototype.requiresInvocationDescription = function() {
        return this.effectId === z.ACTION_SUMMON_CREATURE || this.effectId === z.ACTION_SUMMON_SLAVE
    }, o.prototype.requiresGlyphDescription = function() {
        return this.effectId === z.ACTION_FIGHT_ADD_GLYPH_CASTING_SPELL || this.effectId === z.ACTION_FIGHT_ADD_GLYPH_CASTING_SPELL_ENDTURN
    }, o.prototype.requiresTrapDescription = function() {
        return this.effectId === z.ACTION_FIGHT_ADD_TRAP_CASTING_SPELL
    }, o.prototype.requiresBombDescription = function() {
        return this.effectId === z.ACTION_SUMMON_BOMB
    }, o.prototype.isDirectEffect = function() {
        return !(this.delay || this.duration && "I" !== this.triggers || this.isPreview)
    }, o.prototype.getCaller = function() {
        return this._effectCaller
    }, o.prototype.forceDescriptionRefresh = function(e) {
        this.description = "", this.subEffectDescription = "", c([this], null, function(t) {
            return e ? e(t) : void(t && y.error(t))
        })
    }, t.createEffectInstances = function(e, t) {
        e instanceof Array || (y.error(new Error("EF: Not an Array")), e = [e]);
        for (var i = [], n = 0; n < e.length; n++) i.push(new o(e[n]));
        return p(i, t), i
    }, t.createEffectInstancesIndexed = function(e, i) {
        var n = [];
        for (var o in e) e.hasOwnProperty(o) && (n.push(e[o]), e[o] = n.length - 1);
        t.createEffectInstances(n, function(t, n) {
            if (t) return i(t);
            for (var o in e) e.hasOwnProperty(o) && (e[o] = n[e[o]]);
            return i(null, e)
        })
    };
    var k = {
            EffectInstanceCreature: "ObjectEffectCreature",
            EffectInstanceDate: "ObjectEffectDate",
            EffectInstanceDice: "ObjectEffectDice",
            EffectInstanceDuration: "ObjectEffectDuration",
            EffectInstanceInteger: "ObjectEffectInteger",
            EffectInstanceLadder: "ObjectEffectLadder",
            EffectInstanceMinMax: "ObjectEffectMinMax",
            EffectInstanceMount: "ObjectEffectMount",
            EffectInstanceString: "ObjectEffectString"
        },
        F = {
            ObjectEffectInteger: {
                actionId: 1,
                value: 1
            },
            ObjectEffectString: {
                actionId: 1,
                value: 1
            },
            ObjectEffectMinMax: {
                actionId: 1,
                min: 1,
                max: 1
            },
            ObjectEffectMount: {
                actionId: 1,
                mountId: 1,
                date: 1,
                modelId: 1
            },
            ObjectEffectDuration: {
                actionId: 1,
                days: 1,
                hours: 1,
                minutes: 1
            },
            ObjectEffectDice: {
                actionId: 1,
                diceNum: 1,
                diceSide: 1,
                diceConst: 1
            },
            ObjectEffectDate: {
                actionId: 1,
                year: 1,
                month: 1,
                day: 1,
                hour: 1,
                minute: 1
            },
            ObjectEffectCreature: {
                actionId: 1,
                monsterFamilyId: 1
            },
            ObjectEffectLadder: {
                actionId: 1,
                monsterFamilyId: 1,
                monsterCount: 1
            }
        };
    o.prototype.serialize = function() {
        var e,
        t = this._type;
        switch (t) {
            case "EffectInstanceDate":
                return this.effectId === z.ACTION_INCARNATION ? e = h(this, "EffectInstanceDice") : (e = h(this, t), e.month--),e;
            case "EffectInstanceString":
                return e = h(this, t),
                       e.value = this.text,
                       e;
            case "EffectInstanceDice":
                return e = h(this, t),
                       e.diceConst = this.value,
                       e;
            default:
                return e = h(this, t)
        }
    }
}
