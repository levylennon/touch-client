function(e, t, i) {
    function n(e) {
        for (var t = "", i = 0; i < e.length; i += 1) {
            var n = Number(e.charCodeAt(i))
                .toString(16);
            t += n.length < 2 ? "0" + n : n
        }
        return t
    }

    function o(e) {
        var t = D.createHmac("md5", ">:fIZ?vfU0sDM_9j");
        return t.update(e), t.digest("hex")
    }

    function a() {}

    function r(e, t, i, a) {
        var r = window.gui.playerData,
            s = r.identification.accountId,
            c = r.characterBaseInformations.name,
            l = window.gui.serversData.connectedServerId,
            d = /^https?:\/\//;
        d.test(e) || (e = "http://" + e);
        var u = e + s + t + c + i + a + l,
            p = o(u),
            h = {
                url: e,
                click_account: s,
                from_account: t,
                click_name: c,
                from_name: i,
                game: a,
                server: l,
                hmac: p
            };
        return n(JSON.stringify(h))
    }

    function s(e, t, i) {
        var n = W.getHaapiConfig();
        if (!n) return G.error(new Error("Config is missing.")), "";
        var o = n.getGameId(),
            a = "https://go.ankama.lan/" + window.Config.language + "/check";
        return "com" === n.getHostname()
            .split(".")
            .pop() && (a = S("ui.link.checklink")), a + "?s=" + r(e, t, i, o)
    }

    function c(e, t, i, n) {
        n = n || {};
        var o = n.senderId,
            a = n.senderName,
            r = t || "",
            c = new q("span", {
                className: "externalLink",
                text: r
            });
        return c.addClassNames(n.className || "link"), n.html && c.setHtml(n.html), n.isMsgSafe || o ? n.isMsgSafe || a ? (x(c), i(), c.on("tap", function() {
            var t = R.getWindow("adminConsole"),
                i = e.match(/^event:/);
            if (i) return void t.handleEvent(e);
            if (n.isMsgSafe) B.openUrlInAppBrowser(e);
            else {
                var r = s(e, o, a);
                r && B.openUrlInAppBrowser(r)
            }
        }), c) : (console.error(new Error("HTML hyperlink: senderName is null")), c) : (console.error(new Error("HTML hyperlink: senderId is null")), c)
    }

    function l(e, t, i, n) {
        n = n || {}, Z.indexOf(e) === -1 && Z.push(e), ee.push(i), $.push(new RegExp(t)), te.push(n)
    }

    function d(e, t, i) {
        l(e, t, i, {
            isAuthorizedInChat: !0
        })
    }

    function u(e, t, i, n, o) {
        o = o || {};
        var a = o.className || "link";
        if (!i) return t = t || e, void 0 === i && console.warn("Skipped not handled hyperlink: " + e), new q("span", {
            text: t,
            className: "deadLink"
        });
        if (o.linkType >= X.AUTO && i(), o.linkType === X.AUTO_AND_HIDDEN) return h(n);
        var r = new q("span", {
            text: t,
            className: a
        });
        return x(r), r.on("tap", i), n(), r
    }

    function p(e, t) {
        t = t || {};
        var i = t.className || "";
        return new q("span", {
            text: e,
            className: i
        })
    }

    function h(e) {
        var t = new q("span");
        return e(), t
    }

    function f(e, t, i, n, o) {
        var a = o && o.className || "link",
            r = new q("span", {
                className: a
            });
        return N.getObject(e, t, function(s, c) {
            if (!r.rootElement) return n();
            if (s) return r.replaceClassNames([a], ["deadLink"]), r.setText("[???]"), console.error(new Error("Failed getting link data: " + e + " #" + t + ", error: " + s)), n();
            var l = i(c);
            return r.setText(l[0]), o && o.tooltip ? l.length < 3 ? (r.replaceClassNames([a], ["deadLink"]), n()) : (P(r, l[2], {
                openOnTap: !0
            }), n()) : l[1] ? (x(r), r.on("tap", l[1]), n()) : (r.replaceClassNames([a], ["deadLink"]), n())
        }), r
    }

    function b(e, t, i) {
        return function() {
            R.open(e, {
                tabId: t,
                tabParams: i
            })
        }
    }

    function m(e) {
        return function() {
            if (e === k.DUNGEON_GROUP_SEARCH.toString()) {
                if (R.isWindowOpen("groupSeeker")) return R.close("groupSeeker");
                window.dofus.sendMessage("DungeonsListRequestMessage")
            }
        }
    }

    function M(e, t) {
        return function() {
            R.open(e, t)
        }
    }

    function g(e, t) {
        return f("Items", e.objectGID, function(t) {
            var i = e.label || t.nameId,
                n = e.objectItem ? "[" + i + "]" : i;
            return [n, function() {
                R.open("itemBox", e)
            }]
        }, t, e.objectItem ? {
            className: "insertedLink"
        } : null)
    }

    function _(e) {
        return function() {
            var t = R.getWindow("adminConsole");
            t.cmdInput.setValue(t.cmdInput.getValue() + "item * " + e + " 1 perfect;")
        }
    }

    function A(e) {
        return function() {
            var t = R.getWindow("adminConsole");
            t.cmdInput.setValue(t.cmdInput.getValue() + "findnpc " + e + ";")
        }
    }

    function O(e) {
        return function() {
            if (window.gui.fightManager.isInBattle()) {
                var t = window.actorManager,
                    i = t.getActor(e);
                if (i) {
                    var n = i.isInvisible;
                    if (!n) {
                        var o = window.gui.fightManager.getFighter(e);
                        if (o) {
                            var a = t.isoEngine._spellRangeLayer;
                            if (!a) {
                                t.removeAllFighterIndicators(), t.selectionIndicatorOn(o);
                                var r = new H(100, function() {
                                    t.selectionIndicatorOff(o)
                                });
                                r.start()
                            }
                        }
                    }
                }
            }
        }
    }

    function v(e) {
        function t(t, i) {
            o.push(function(o) {
                N.getObject("Monsters", t, function(t, r) {
                    return t ? (console.error("Hyperlink openContextualMenuMonster error", t), o(t)) : (r.level = r.grades[i - 1].level, r.xp = r.grades[i - 1].gradeXp, n.push(r), n.length === a.length && (n.scaleLevel = e[6], n.cameFromChat = !0, n.posX = e[1], n.posY = e[2], n.worldMapId = e[3], window.gui.openContextualMenu("monster", n)), o())
                })
            })
        }
        var i = e[5],
            n = [],
            o = B.createFifo();
        i = i.slice(1, -1);
        for (var a = i.split(","), r = 0; r < a.length; r++) {
            var s = a[r].split("|"),
                c = parseInt(s[0], 10),
                l = parseInt(s[1], 10);
            t(c, l)
        }
    }

    function y(e, t, i) {
        return function() {
            if (window.gui.fightManager.isInBattle()) {
                var n = window.actorManager,
                    o = n.getActor(t);
                if (o) {
                    var a = o.isInvisible;
                    if (!a) {
                        var r = o.getFighter();
                        if (r && r.data.alive) {
                            var s = 0 === i;
                            s || window.gui.pingSystem.addPingPicto(e, 1, 3)
                        }
                    }
                }
            }
        }
    }

    function z(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            if (n.objectUID === t) return n
        }
    }

    function w(e) {
        var t = ne.exec(e),
            i = t ? t[2] : e;
        return u(e, i)
    }
    var T = i(503),
        C = (i(504), i(505)),
        I = i(506),
        S = i(17)
        .getText,
        E = i(507),
        L = i(469),
        N = i(130),
        R = i(52),
        q = i(72),
        x = i(63),
        B = i(16),
        D = i(144),
        W = i(142),
        P = i(88)
        .addTooltip,
        k = i(508),
        F = i(430),
        H = F.Delay,
        U = i(12),
        G = i(34)
        .logger,
        j = 5e3,
        Y = 5,
        X = {
            NORMAL: 0,
            AUTO: 1,
            AUTO_AND_HIDDEN: 2
        },
        V = "\\$[a-zA-Z]+[0-9]+",
        Q = "\\{[a-zA-Z]+[^\\}]*\\}",
        K = "\\%[a-zA-Z0-9]+\\%",
        J = "<a href=[^>]+>.*?</a>",
        Z = [],
        $ = [],
        ee = [],
        te = [];
    l(Q, "\\{player,([^,]+),([0-9]+)(?:,channel:([0-9]+))?\\}", function(e, t) {
        var i = e[1];
        return u(e[0], i, function() {
            var t = e[2],
                n = e[3];
            window.gui.openContextualMenu("player", {
                playerId: t,
                playerName: i,
                channel: n,
                isInteractiveRequired: !0
            })
        }, t)
    }), l(Q, "\\{collab,([^,]+)\\}", function(e, t) {
        var i = e[1];
        return u(e[0], i, function() {
            window.gui.openContextualMenu("collab", {
                playerName: i,
                isInteractiveRequired: !0
            })
        }, t)
    }), l(Q, "\\{item,([0-9]+),([0-9]+)\\}", function(e, t) {
        return g({
            objectGID: parseInt(e[1], 10),
            objectUID: parseInt(e[2], 10)
        }, t)
    }), d(Q, "\\{itemStats,([0-9]+),([0-9]+)\\}", function(e, t, i) {
        var n = parseInt(e[2], 10);
        return g({
            objectGID: parseInt(e[1], 10),
            objectUID: n,
            objectItem: i.objectItems ? z(i.objectItems, n) : null,
            options: {
                showDescription: !1
            }
        }, t)
    }), d(Q, "\\{recipe,([0-9]+)\\}", function(e, t) {
        return f("Items", parseInt(e[1], 10), function(e) {
            var t = "[" + S("ui.common.recipes", 1) + S("ui.common.colon") + e.nameId + "]";
            return [t, function() {
                L.getItems([e.id], function(t, i) {
                    return t ? console.error("Broken link item:", e) : void R.open("itemRecipes", {
                        itemData: i[0]
                    })
                })
            }]
        }, t, {
            className: "insertedLink"
        })
    }), l(Q, "\\{cell,([-0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], function() {
            window.isoEngine.addArrowOnCell(parseInt(e[1], 10), 0, 0, void 0, Y)
        }, t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{npc,([-0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], function() {
            window.isoEngine.addArrowOnNpc(parseInt(e[1], 10), j)
        }, t)
    }), l(Q, "\\{monster,([-0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], function() {
            window.isoEngine.addArrowOnMonster(parseInt(e[1], 10), j)
        }, t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{element,([-0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], function() {
            window.isoEngine.addArrowOnInteractiveElement(parseInt(e[1], 10), j)
        }, t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{chattitle,([-0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], b("grimoire", "ornaments", {
            titleId: e[1]
        }, {
            linkType: parseInt(e[4], 10) || 0
        }), t)
    }), l(Q, "\\{chatachievement,([-0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], b("grimoire", "achievements", {
            achievementId: e[1]
        }), t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{chatmonster,([-0-9]+)::([^\\}]*)\\}", function(e, t) {
        return f("Monsters", e[1], function(t) {
            var i = e[2] || t.nameId;
            return [i, b("grimoire", "bestiary", {
                monsterIds: [e[1]],
                label: t.nameId
            })]
        }, t)
    }), l(Q, "\\{chatitem,([-0-9]+)::([^\\}]*)\\}", function(e, t) {
        return g({
            objectGID: parseInt(e[1], 10),
            label: e[2]
        }, t)
    }), l(Q, "\\{guild,([-0-9]+)::([^\\}]*)\\}", function(e, t) {
        return u(e[0], e[2], function() {
            window.dofus.sendMessage("GuildFactsRequestMessage", {
                guildId: e[1]
            })
        }, t)
    }), l(Q, "\\{alliance,([0-9]+)::([^\\}]*)\\}", function(e, t) {
        return u(e[0], e[2], function() {
            window.dofus.sendMessage("AllianceFactsRequestMessage", {
                allianceId: e[1]
            })
        }, t)
    }), l(Q, "\\{pingsystem,([0-9]+),([0-9]+),([0-9]+)::([^\\}]*)\\}", function(e, t) {
        var i = window.gui.pingSystem,
            n = e[0],
            o = e[1],
            a = e[2] || "",
            r = e[3] || "",
            s = e[4] || "";
        return u(n, s, function() {
            i.addPingPicto(o, a, r)
        }, t)
    });
    var ie = {
        "banner,btn_items,1": function() {
            window.gui.menuBar.open(), E.pointToMenuIcon("Bag", {
                hideOnTap: !0
            })
        },
        "banner,btn_items,2": function() {
            window.gui.menuBar.open(), E.pointToMenuIcon("GroupSeeker", {
                hideOnTap: !0
            })
        },
        "storage,slot_2,2": function() {
            E.pointToCharacterItem(2)
        },
        "storage,grid": function() {
            E.pointToStorageFirstSlotBox()
        }
    };
    l(Q, "\\{ui,([a-zA-Z_,0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        var i = ie[e[1]];
        return i || (i = function() {
            E.pointToSpecificUi(e[1])
        }), u(e[0], e[2], i, t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{launchAnim,([0-9]+),([a-zA-Z_0-9]+),([0-9]),([0-1]),([0-9]+),([0-9]+)\\}", function(e, t) {
        return window.actorManager.playAnimationOnNpcId(parseInt(e[1], 10), {
            animationName: e[2],
            direction: parseInt(e[3], 10),
            loop: "0" !== e[4],
            delay: parseInt(e[5], 10),
            duration: parseInt(e[6], 10)
        }), h(t)
    }), l(Q, "{pictureHelp,([A-Za-z.]+),([A-Za-z0-9]+),([0-9]+),([0-9]+),?([A-Za-z0-9.]+)?,?(.+)?}", function(e, t) {
        var i = new q("div", {
            className: "wrapper"
        });
        i.addClassNames(e[2]);
        var n = i.createChild("div", {
                className: "pictureWrapper"
            }),
            o = n.createChild("div", {
                className: "picture"
            });
        return x(o), e[1].length > 0 && U.preloadImage("ui/help/" + e[1], function(t) {
            o.setStyle("width", e[3] + "px"), o.setStyle("height", e[4] + "px"), o.setStyle("backgroundImage", t), o.on("tap", function() {
                R.open("previewWindow", {
                    url: t
                })
            })
        }), e[5] && n.createChild("div", {
            text: S("ui." + e[5]),
            className: "title"
        }), e[6] && i.createChild("div", {
            text: S("ui." + e[6])
        }), t(), i
    }), l(Q, "\\{openSocial,([0-9]+),([0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[3], b("social", parseInt(e[1], 10), {
            tabId: parseInt(e[2], 10)
        }), t, {
            linkType: parseInt(e[5], 10) || 0
        })
    }), l(V, "\\$item([0-9]+)", function(e, t) {
        return g({
            objectGID: parseInt(e[1], 10)
        }, t)
    }), l(V, "\\$job([0-9]+)", function(e, t) {
        return f("Jobs", e[1], function(e) {
            return [e.nameId, b("grimoire", "jobs", {
                jobId: e.id
            })]
        }, t)
    }), l(V, "\\$quest([0-9]+)", function(e, t) {
        return f("Quests", e[1], function(e) {
            return [e.nameId, b("grimoire", "quests", {
                questId: e.id,
                categoryId: e.categoryId
            })]
        }, t)
    }), l(V, "\\$area([0-9]+)", function(e, t) {
        return f("Areas", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$subarea([0-9]+)", function(e, t) {
        return f("SubAreas", e[1], function(e) {
            return [e.nameId, function() {
                R.open("worldMap", {
                    subareaConquest: e.id
                })
            }]
        }, t)
    }), l(V, "\\$map([0-9]+)", function(e, t) {
        return f("MapPositions", e[1], function(e) {
            return [e.nameId || "[" + e.posX + "," + e.posY + "]", function() {
                window.gui.emit("CompassUpdateMessage", {
                    type: I.COMPASS_TYPE_SIMPLE,
                    worldX: e.posX,
                    worldY: e.posY
                })
            }]
        }, t)
    }), l(Q, "\\{map,(-?[0-9]+),(-?[0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        var i = parseInt(e[1], 10),
            n = parseInt(e[2], 10),
            o = e[3] || "[" + i + "," + n + "]";
        return u(e[0], o, function() {
            R.open("worldMap", {
                x: i,
                y: n
            })
        }, t, {
            linkType: parseInt(e[5], 10) || 0
        })
    }), d(Q, "\\{mapWithFlag,(-?[0-9]+),(-?[0-9]+),(-?[0-9]+)(::([^\\}]*?))?(;;([0-2])|)\\}", function(e, t, i) {
        var n = parseInt(e[1], 10),
            o = parseInt(e[2], 10),
            a = parseInt(e[3], 10),
            r = (i.cameViaChat ? 0 : parseInt(e[5], 10)) || 0,
            s = "[";
        return e[4] && (s += e[4] + " "), s += n + "," + o + "]", u(e[0], s, function() {
            a === window.gui.playerData.position.worldmapId && (R.open("worldMap", {
                x: n,
                y: o,
                openedFromChat: !0
            }), window.gui.GPS.addPOI({
                id: "flag_srv" + I.COMPASS_TYPE_SIMPLE,
                x: n,
                y: o,
                categoryId: "hint",
                nameId: "(" + n + "," + o + ")",
                color: {
                    r: 255,
                    g: 134,
                    b: 0,
                    a: 1
                },
                isDestination: !1
            }))
        }, t, {
            className: i.cameViaChat ? "insertedLink" : null,
            linkType: r
        })
    }), d(Q, "\\{pingMonster,(-?[0-9]+),(-?[0-9]+),(-?[0-9]+),([^,]*),(\\[.+\\]),(-?[0-9]+)\\}", function(e, t) {
        var i = parseInt(e[1], 10),
            n = parseInt(e[2], 10),
            o = parseInt(e[3], 10),
            a = "[";
        return e[4] && (a += e[4] + " "), a += i + "," + n + "]", u(e[0], a, function() {
            o === window.gui.playerData.position.worldmapId && v(e)
        }, t, {
            className: "insertedLink",
            linkType: 0
        })
    }), l(V, "\\$itemType([0-9]+)", function(e, t) {
        return f("ItemTypes", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$achievement([0-9]+)", function(e, t) {
        return f("Achievements", e[1], function(t) {
            return [t.nameId, b("grimoire", "achievements", {
                achievementId: e[1]
            })]
        }, t)
    }), l(V, "\\$title([0-9]+)", function(e, t) {
        return f("Titles", e[1], function(t) {
            var i = window.gui.playerData.characterBaseInformations.sex ? t.nameFemaleId : t.nameMaleId;
            return [i, b("grimoire", "ornaments", {
                titleId: e[1]
            })]
        }, t)
    }), l(V, "\\$ornament([0-9]+)", function(e, t) {
        return f("Ornaments", e[1], function(t) {
            return [t.nameId, b("grimoire", "ornaments", {
                ornamentId: e[1]
            })]
        }, t)
    }), l(V, "\\$spell([0-9]+)", function(e, t) {
        return f("Spells", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$spellState([0-9]+)", function(e, t) {
        return f("SpellStates", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$breed([0-9]+)", function(e, t) {
        return f("Breeds", e[1], function(e) {
            return [e.shortNameId, null]
        }, t)
    }), l(V, "\\$emote([0-9]+)", function(e, t) {
        return f("Emoticons", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$monster([0-9]+)", function(e, t) {
        return f("Monsters", e[1], function(t) {
            return [t.nameId, b("grimoire", "bestiary", {
                monsterIds: [e[1]],
                label: t.nameId
            })]
        }, t)
    }), l(V, "\\$monsterRace([0-9]+)", function(e, t) {
        return f("MonsterRaces", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$monsterSuperRace([0-9]+)", function(e, t) {
        return f("MonsterSuperRaces", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$alignment([0-9]+)", function(e, t) {
        return f("AlignmentSides", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$stat([0-9]+)", function(e, t) {
        var i = S("ui.item.characteristics")
            .split(",");
        return u(e[0], i[e[1]], null, t)
    }), l(V, "\\$dungeon([0-9]+)", function(e, t) {
        return f("Dungeons", e[1], function(e) {
            return [e.nameId, null]
        }, t)
    }), l(V, "\\$challenge([0-9]+)", function(e, t) {
        return f("Challenge", e[1], function(e) {
            return [e.nameId, null, e.descriptionId]
        }, t, {
            tooltip: !0
        })
    }), l(V, "\\$matchmakingFeature([0-9]+)", function(e, t) {
        var i = S("ui.matchmaking.feature" + e[1] + ".name");
        return u(i, i, m(e[1]), t)
    }), l(K, "\\%stats([a-zA-Z]+)\\%", function(e, t) {
        var i = window.gui.playerData.characters.mainCharacter.getCharacteristicFromCriterionKey(e[1]);
        return t(), p(i)
    }), d(J, "<a href=([^>]+)>(.*?)</a>", function(e, t, i) {
        var n = e[1],
            o = e[2];
        return '"' !== n[0] && "'" !== n[0] || (n = n.slice(1, -1)), c(n, null, t, {
            html: o,
            isMsgSafe: i.isMsgSafe,
            senderId: i.senderId,
            senderName: i.senderName
        })
    }), l(Q, "\\{style:([a-zA-Z]+),([^\\}]*)\\}", function(e, t) {
        return t(), new q("span", {
            text: e[2],
            className: e[1]
        })
    }), l(Q, "\\{windowTab,([a-zA-Z_,0-9]+),([a-zA-Z_,0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[3], function() {
            R.open(e[1], {
                tabId: e[2]
            })
        }, t, {
            linkType: parseInt(e[5], 10) || 0
        })
    }), l(Q, "\\{icon:([a-zA-Z]+)\\}", function(e, t) {
        return t(), new q("div", {
            className: ["iconInDialog", e[1]]
        })
    }), l(Q, "\\{window,([a-zA-Z_,0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], function() {
            if ("bidHouseShop" === e[1]) {
                var t = R.getWindow("bidHouseShop");
                return t.openBidHouse(!1)
            }
            R.open(e[1])
        }, t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{guild,([a-zA-Z_,0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], b("social", "guild", {
            tabId: e[1]
        }), t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{alliance,([a-zA-Z_,0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[2], b("social", "alliance", {
            tabId: e[1]
        }), t, {
            linkType: parseInt(e[4], 10) || 0
        })
    }), l(Q, "\\{help,(-?[0-9]+),(-?[0-9]+)::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[3], M("help", {
            part: e[1],
            subPart: e[2]
        }), t, {
            linkType: parseInt(e[5], 10) || 0
        })
    }), l(Q, "\\{FightEndWindow::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[1], M("fightEnd", {
            reopen: !0
        }), t, {
            linkType: parseInt(e[5], 10) || 0
        })
    }), l(Q, "\\{ShatterWindow::([^\\}]*?)(;;([0-2])|)\\}", function(e, t) {
        return u(e[0], e[1], M("shatter", {
            reopen: !0
        }), t, {
            linkType: parseInt(e[5], 10) || 0
        })
    }), l(V, "\\$searchItem([0-9]+)", function(e, t) {
        return u(e[0], e[1], _(e[1]), t)
    }), l(V, "\\$searchNpc([0-9]+)", function(e, t) {
        return u(e[0], e[1], A(e[1]), t)
    }), l(Q, "\\{pingFighter,(-?[0-9]+)::([^\\}]*)\\}", function(e, t) {
        return u(e[0], e[2], O(parseInt(e[1], 10)), t)
    }), l(Q, "\\{pingSpellCell,([^\\}]*),(-?[0-9]+),(-?[0-9]+),(-?[0-9]+)\\}", function(e, t) {
        return u(e[0], e[1], y(parseInt(e[2], 10), parseInt(e[3], 10), parseInt(e[4], 10)), t)
    });
    var ne = /\{([a-zA-Z_,0-9-]+)::([^}]*)\}/,
        oe = new RegExp(Z.join("|"));
    t.process = function(e, t, i) {
        function n() {
            if (p++, h && u < p) return h = !1, i(d)
        }
        t = t || {}, i = i || a;
        var o = t.channel,
            r = void 0 !== o && !t.isNonChat && T.isHumanChannel(o),
            s = !r || T.isChannelSafe(o),
            c = {
                allPagesAllowed: t.decodeAllPages
            },
            l = {
                cameViaChat: r,
                channel: o,
                objectItems: t.objectItems,
                senderId: t.senderId,
                senderName: t.senderName,
                isMsgSafe: s,
                parentClassName: t.parentClassName
            },
            d = new q("span");
        l.parentClassName && d.setClassNames(l.parentClassName);
        for (var u = 0, p = 0, h = !1;;) {
            var f = oe.exec(e);
            if (!f) break;
            for (var b = f[0], m = e.indexOf(b), M = e.substr(0, m), g = e.substr(m + b.length), _ = null, A = null, O = 0; O < ee.length; O++)
                if ((s || te[O].isAuthorizedInChat) && (A = $[O].exec(b))) {
                    u++, _ = ee[O](A, n, l);
                    break
                } _ || (_ = w(b)), M && (r && (M = C.decode(M, c)), d.createChild("span")
                .setHtml(M)), d.appendChild(_), e = g
        }
        return h = !0, n(), e && (r && (e = C.decode(e, c)), d.createChild("span")
            .setHtml(e)), d
    }
}
