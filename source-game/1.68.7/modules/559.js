function(e, t, i) {
    function n() {
        _ = !1, z.disable(function(e) {
            e && console.error("Trouble while disabling pushNotifications: " + e)
        }), y.disable(function(e) {
            e && console.error("Trouble while disabling localNotifications: " + e)
        })
    }

    function o() {
        var e = [],
            t = E.getValue("soundPreferences", L.getDefaultParams(), !0),
            i = {
                general: {
                    show_all_monsters: O.showAllMonsters,
                    max_titles_ornaments: O.maxTitlesOrnaments,
                    max_actors_before_creature_mode: O.maxActorsBeforeCreatureMode,
                    always_show_grid: O.alwaysShowGrid,
                    menubar_size: O.menubarSize,
                    monster_info_first_position: O.monsterInfoFirstPosition,
                    fullscreen: O.fullscreen,
                    portrait_mode: O.isPortraitMode,
                    auto_gps_flags: O.autoGpsFlags,
                    auto_gps_phoenixes: O.autoGpsPhoenixes,
                    bottomMenuBar: O.bottomMenuBar
                },
                fight: {
                    menubar_size_in_fight: O.menubarSizeInFight,
                    show_mounts_in_fight: O.showMountsInFight,
                    hide_dead_fighters: O.hideDeadFighters,
                    allow_spell_effects: O.allowSpellEffects,
                    confirm_box_when_walking: O.confirmBoxWhenWalking,
                    show_speech_bubble_in_fight: O.showSpeechBubbleInFight,
                    order_fighters: O.orderFighters,
                    show_ap_mp_used: O.showApMpUsed,
                    fight_always_show_grid: O.fightAlwaysShowGrid,
                    regroup_damages: O.regroupDamages,
                    allow_damage_preview: O.allowDamagePreview,
                    show_movement_preview: O.showMovementPreview,
                    confirm_box_allow_double_tap: O.confirmBoxAllowDoubleTap,
                    confirm_box_when_drag_casting: O.confirmBoxWhenDragCasting,
                    confirm_box_when_click_casting: O.confirmBoxWhenClickCasting
                },
                sound: {
                    sound_on_player_turn_start: O.soundOnPlayerTurnStart,
                    music: t.music.volume,
                    sfx: t.sfx.volume,
                    ui: t.ui.volume
                },
                miscellenous: {
                    censorship: O.censorship,
                    chat_timestamp: O.chatTimestamp,
                    top_chat_bar: O.topChatBar,
                    tutorial_tips: O.tutorialTips,
                    spell_tooltip_name: O.spellTooltipName,
                    spell_tooltip_ap_range: O.spellTooltipApRange,
                    spell_tooltip_critical: O.spellTooltipCritical,
                    spell_tooltip_effect: O.spellTooltipEffect,
                    spell_tooltip_description: O.spellTooltipDescription
                },
                events: {
                    general: O.systemNotificationsEnabled,
                    shop: O.wantPromoNotif,
                    atq: O.wantPrismAttackedNotif,
                    vulne: O.wantPrismVulnerableNotif
                }
            };
        S.log("User_Life_Cycle.settings_configuration", {
            account_id: window.gui.playerData.identification.accountId,
            settings_details: JSON.stringify(i)
        }), O[R] || e.push(B), O.wantPrismAttackedNotif && e.push(D), O.wantPrismVulnerableNotif && e.push(W);
        var n = x + "," + O.offlineOptionTimestamp + "," + e.join("+");
        window.dofus.sendMessage("OfflineOptionsUpdateRequestMessage", {
            options: n
        })
    }

    function a(e) {
        console.error("Failed to enable systemNotifications: " + e), window.gui.openSimplePopup(v("tablet.notification.cannotEnable")), O.changeValue(R, !1, N), n();
        var t = w.getWindow("options");
        t.openState && t.refreshUi()
    }

    function r() {
        var e = window.gui.playerData,
            t = C.getCharacterList();
        if (!t.length) return 0;
        for (var i = e.characterBaseInformations.level || 0, n = 0; n < t.length; n++) i = Math.max(i, t[n].level);
        return i
    }

    function s(e, t) {
        _ && z.postEvent(e, t || {})
    }

    function c(e, t) {
        if (_) {
            var i = {};
            i[e] = t, z.setCustomTags(i)
        }
    }

    function l() {
        var e = window.gui,
            t = e.playerData;
        if (_) {
            var i = r();
            c("Wants Promo", O.wantPromoNotif), c("currently_subscribed", t.isSubscriberAtMinLevel(I.NORMAL, {
                noForced: !0
            })), t.characterBaseInformations.name && c("last_character_name", t.characterBaseInformations.name), t.characterBaseInformations.breed && c("class_id", t.characterBaseInformations.breed), t.guildData.current && c("guild_name", t.guildData.current.guildName), i > 0 && c("level_achieved", i)
        }
    }

    function d() {
        _ = !0, z.enable(function(e) {
            return e ? a(e) : (l(), void y.enable(function(e) {
                if (e) return a(e)
            }))
        })
    }

    function u(e) {
        e ? d() : n()
    }

    function p() {
        o(), u(O[R])
    }

    function h() {
        O.changeValue("offlineOptionTimestamp", Date.now(), N), o()
    }

    function f(e) {
        var t = e.split(",");
        if (t[0] !== x || t.length < 3) return console.error("Invalid offline options: " + e);
        var i = parseInt(t[1], 10);
        O.changeValue("offlineOptionTimestamp", i, N);
        var n = t[2].split("+");
        O.changeValue(R, n.indexOf(B) === -1, N), O.changeValue("wantPrismAttackedNotif", n.indexOf(D) !== -1, N), O.changeValue("wantPrismVulnerableNotif", n.indexOf(W) !== -1, N), n.indexOf(P) !== -1 && (F.emit("receivedServerFlag", "MISSED_PRISM_NOTIF"), h())
    }

    function b(e, t, i) {
        i !== N && (T.clearTimeout(k), k = T.setTimeout(h, q))
    }

    function m(e, t, i) {
        u(e), "OptionsWindow" === i && w.getWindow("options")
            .refreshUi(), b(e, t, i)
    }

    function M(e, t, i) {
        l(), b(e, t, i)
    }

    function g() {
        var e = window.dofus.connectionManager,
            t = window.gui,
            i = t.playerData,
            n = 11;
        t.on("connected", p), e.on("OfflineOptionsMessage", function(e) {
            f(e.options)
        }), O.on(R, m), O.on("wantPromoNotif", M), O.on("wantPrismAttackedNotif", b), O.on("wantPrismVulnerableNotif", b), i.on("characterSelectedSuccess", l), i.guildData.on("guildJoin", l), i.on("characterLevelUp", l), window.isoEngine.on("mapLoaded", function() {
            t.menuBar && n > 10 && (c("DOT_Shop_Unlocked", t.menuBar.getIconAvailability("Goultine")), n = 1), n += 1
        })
    }
    var _, A = i(59)
        .EventEmitter,
        O = i(55),
        v = i(17)
        .getText,
        y = i(560),
        z = i(557),
        w = i(52),
        T = i(30),
        C = i(563),
        I = i(509),
        S = i(116),
        E = i(60),
        L = i(91),
        N = "systemNotifications",
        R = "systemNotificationsEnabled",
        q = 5e3,
        x = "1",
        B = "NON",
        D = "PAN",
        W = "PVN",
        P = "_PN",
        k = null,
        F = new A;
    e.exports = F, F.initialize = function() {
        g()
    }, F.isAvailable = function() {
        return z.isAvailable() || y.isAvailable()
    }, F.isEnabled = function() {
        return _
    }, F.sendTagLandedAstrub = function() {
        c("arrive_astrub", !0)
    }, F.sendEventLandedAstrub = function() {
        s("first_time_astrub")
    }, F.sendEventStartGrobe = function() {
        s("start_grobe")
    }, F.sendEventStartGrobeExploration = function() {
        s("start_explo_grobe")
    }, F.sendTagAlbueraVillageDiscovered = function() {
        c("albuera_village_discover", !0)
    }, F.sendTagAlbueraForestDiscovered = function() {
        c("albuera_forest_discovered", !0)
    }, F.sendTagBelladonnaIslandDiscovered = function() {
        c("belladonna_island_discover", !0)
    }, F.sendTagAlbueraDungeonDone = function() {
        c("belladone_dungeon_achieved", !0)
    }, F.sendTagAlbueraStarterPackBought = function() {
        c("new_starter_pack_purchase", !0)
    }, F.sendTagDiscoveringDestiny = function() {
        c("discovering_destiny", !0)
    }, F.sendTagTaleAutumnKnight = function() {
        c("tale_autumn_knight", !0)
    }, F.sendTagStartTaleAutumnKnight = function() {
        c("start_tale_autumn_knight", !0)
    }, F.sendTagStartFuseAndConquer = function() {
        c("start_fuse_and_conquer", !0)
    }, F.sendTagFinishedBlackEyesWhiteDragon = function() {
        c("finished_black_eyes_white_dragon", !0)
    }
}
