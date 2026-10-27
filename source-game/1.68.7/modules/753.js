function(e, t, i) {
    function n(e) {
        function t(t) {
            var i = {
                id: "house_" + t.houseId,
                mapId: t.mapId,
                categoryId: g,
                nameId: l("ui.common.myHouse"),
                iconId: f
            };
            e.addPOI(i)
        }

        function i(t) {
            d.getDataMap("Houses", [t.modelId], null, function(i, n) {
                if (i) return console.error(i);
                var o = n[t.modelId],
                    a = {
                        id: "guild_house_" + t.houseId,
                        mapId: t.mapId,
                        categoryId: g,
                        nameId: l("ui.common.guildHouse") + l("ui.common.colon") + o.nameId,
                        iconId: b
                    };
                e.addPOI(a)
            })
        }

        function n(t) {
            var i = {
                id: "guild_paddock_" + t.paddockId,
                mapId: t.mapId,
                categoryId: g,
                nameId: l("ui.guild.paddock", t.maxOutdoorMount),
                iconId: m
            };
            e.addPOI(i)
        }
        var o = window.gui;
        window.dofus.connectionManager.on("AccountHouseMessage", function(e) {
            e.houses.forEach(function(e) {
                t(e)
            })
        }), o.on("GuildHousesInformationMessage", function(e) {
            e.housesInformations.forEach(function(e) {
                i(e)
            })
        }), o.on("GuildHouseUpdateInformationMessage", function(e) {
            i(e.housesInformations)
        }), o.on("GuildHouseRemoveMessage", function(t) {
            e.removePOI("guild_house_" + t.houseId)
        }), o.on("GuildInformationsPaddocksMessage", function(e) {
            e.paddocksInformations.forEach(function(e) {
                n(e)
            })
        }), o.on("GuildPaddockBoughtMessage", function(e) {
            n(e.paddockInfo)
        }), o.on("GuildPaddockRemovedMessage", function(t) {
            e.removePOI("guild_paddock_" + t.paddockId)
        })
    }

    function o(e) {
        c.on("AtlasPointInformationsMessage", function(t) {
            if (t.type.type === p.ATLAS_INFOS_PHOENIX) {
                var i;
                if (window.gui.playerData.isAlive())
                    for (i = 0; i < e._lastPhoenixes.length; i += 1) e.removePOI("phoenix_" + e._lastPhoenixes[i].mapId);
                else {
                    var n = t.type.coords;
                    for (i = 0; i < n.length; i += 1) {
                        var o = n[i];
                        A.indexOf(o.mapId) === -1 && e.addPOI({
                            id: "phoenix_" + o.mapId,
                            mapId: o.mapId,
                            categoryId: "phoenix",
                            x: o.worldX,
                            y: o.worldY,
                            nameId: l("ui.common.phoenix"),
                            iconId: M,
                            isDestination: !0
                        })
                    }
                    e._lastPhoenixes = n
                }
            }
        })
    }

    function a(e) {
        var t = window.gui,
            i = t.playerData.quests;
        i.on("objectiveValidated", function(t, i) {
            e.removePOI(e.getQuestObjectivePoiId(i))
        }), i.on("stepValidated", function(t, i) {
            for (var n = t.dbSteps[i], o = 0; o < n.objectiveIds.length; o += 1) e.removePOI(e.getQuestObjectivePoiId(n.objectiveIds[o]))
        }), i.on("questFinished", function(t) {
            for (var i = t.dbSteps[t.stepId], n = 0; n < i.objectiveIds.length; n += 1) e.removePOI(e.getQuestObjectivePoiId(i.objectiveIds[n]))
        }), i.on("questUpdate", function(t) {
            e.questFollower.isQuestFollowed(t) && e.addQuestNextObjective(t)
        }), i.on("questStarted", function(t) {
            u.autoGpsFlags && e.questFollower.followQuest(t, !0)
        }), i.on("listUpdated", function() {
            e.addAllFollowedQuestsObjectives()
        })
    }

    function r(e) {
        var t = window.gui;
        t.on("SpouseStatusMessage", function(i) {
            if (i.hasSpouse) {
                var n = t.playerData.socialData.spouse;
                n ? n.followSpouse && e.addOrUpdateSpouse(n.spouseName, n.mapId) : t.once("SpouseInformationsMessage", function(t) {
                    n = t.spouse, n.followSpouse && e.addOrUpdateSpouse(n.spouseName, n.mapId)
                })
            } else e.removeSpouse()
        })
    }

    function s(e) {
        function t(t) {
            switch (t.type) {
                case h.COMPASS_TYPE_SPOUSE:
                    var n = i.playerData.socialData.spouse;
                    return n ? e.addOrUpdateSpouse(n.spouseName, null, t.worldX, t.worldY) : console.error("Spouse does not exist");
                case h.COMPASS_TYPE_PARTY:
                    var o = i.party.getMemberById(i.party.currentParty.partyId, t.memberId);
                    return o ? (e._lastPartyMemberId = o.id, e.updatePOI({
                        id: "party_" + o.id,
                        x: t.worldX,
                        y: t.worldY,
                        categoryId: "user",
                        nameId: l("ui.cartography.positionof", o.name) + "\n\n(" + t.worldX + ", " + t.worldY + ")",
                        color: {
                            r: 52,
                            g: 155,
                            b: 255,
                            a: 1
                        },
                        mapId: o.mapId,
                        isDestination: !0
                    })) : void console.warn("Party member", t.memberId, "does not exist.");
                case h.COMPASS_TYPE_QUEST:
                    return window.gui.chat.logMsg(l("tablet.cartography.flagUpdated", t.worldX, t.worldY)), e.updatePOI({
                        id: "flag_srv" + t.type,
                        x: t.worldX,
                        y: t.worldY,
                        categoryId: _,
                        nameId: t.worldX + "," + t.worldY,
                        color: {
                            r: 85,
                            g: 136,
                            b: 0,
                            a: 1
                        },
                        mapId: window.gui.playerData.position.worldmapId,
                        isDestination: !0
                    });
                case "zaap":
                    return e.updatePOI({
                        id: "zaap",
                        x: t.worldX,
                        y: t.worldY,
                        categoryId: "zaap",
                        nameId: t.worldX + "," + t.worldY,
                        color: {
                            r: 150,
                            g: 199,
                            b: 221,
                            a: 1
                        },
                        mapId: window.gui.playerData.position.worldmapId,
                        isDestination: !0
                    });
                case "estate":
                    return e.updatePOI({
                        id: "estate",
                        x: t.worldX,
                        y: t.worldY,
                        categoryId: "estate",
                        nameId: t.name + " (" + t.worldX + "," + t.worldY + ")",
                        color: {
                            r: 184,
                            g: 143,
                            b: 35,
                            a: 1
                        },
                        mapId: window.gui.playerData.position.worldmapId,
                        isDestination: !0
                    });
                case h.COMPASS_TYPE_SIMPLE:
                    return e.addCustomFlag(t.worldX, t.worldY);
                default:
                    return console.error("Unhandled CompassTypeEnum value:", t.type)
            }
        }
        var i = window.gui;
        i.on("CompassUpdateMessage", t), i.on("CompassUpdatePartyMemberMessage", t), i.on("CompassResetMessage", function(t) {
            switch (t.type) {
                case h.COMPASS_TYPE_SPOUSE:
                    return e.removeSpouse();
                case h.COMPASS_TYPE_PARTY:
                    e.removePOI("party_" + e._lastPartyMemberId);
                    break;
                case h.COMPASS_TYPE_QUEST:
                    e.removePOI("flag_srv" + t.type);
                    break;
                default:
                    e.removeFlag(t.type)
            }
        })
    }
    var c = i(105),
        l = i(17)
        .getText,
        d = i(130),
        u = i(55),
        p = i(754),
        h = i(506),
        f = "icon_1000",
        b = "icon_1001",
        m = "icon_1002",
        M = "flag1",
        g = 7,
        _ = "hint",
        A = [52428800, 8390667, 113902337, 120066048, 34476296];
    e.exports.init = function(e) {
        o(e), n(e), a(e), r(e), s(e)
    }
}
