function(e, t, i) {
    function n() {
        w.call(this, {
            className: "OptionsWindow",
            title: b("ui.common.options"),
            positionInfo: {
                left: "c",
                top: "c",
                width: "80%",
                height: "70%"
            }
        }), this.optionDefinitions = null, this.elements = {}, this.sections = null, this.currentSection = null, this._gameOptionChangedHandler = this._gameOptionChanged.bind(this), this._initOptionDefinitions(), this.on("open", this._open), this.on("opened", this._opened), this.on("close", this._close)
    }

    function o(e, t) {
        var i = e.appendChild(new f(t.text));
        return i.addClassNames("settingOption"), i.on("change", d.bind(t)), i
    }

    function a(e, t) {
        var i = t.values,
            n = t.labels || i,
            o = e.createChild("div");
        o.createChild("div", {
            className: ["settingOption", "dropdownLabel"],
            text: t.text
        });
        for (var a = o.appendChild(new A({
                className: "settingOption"
            })), r = 0; r < i.length; r++) a.addOption(n[r], i[r]);
        return a.on("change", d.bind(t)), a
    }

    function r(e, t) {
        var i = t.tooltipText,
            n = e.appendChild(new h(t.text, {
                className: ["settingOption", "optionButton"]
            }, d.bind(t)));
        return i && p.addTooltip(n, i), n
    }

    function s(e, t) {
        return e.createChild("div", {
            className: "header",
            text: t.text
        })
    }

    function c(e, t) {
        return e.createChild("div", {
            className: "infoText",
            text: t.text
        })
    }

    function l(e, t) {
        return e.appendChild(new t.CustomClass(t, d.bind(t)))
    }

    function d(e) {
        this.gameOptionId && (M.changeValue(this.gameOptionId, e, W), D.gui.emit("gameOptionChanged", {
            value: e,
            gameOptionId: this.gameOptionId
        })), this.action && this.action(e);
        var t = z.getValue("soundPreferences", R.getDefaultParams(), !0),
            i = {
                general: {
                    show_all_monsters: M.showAllMonsters,
                    max_titles_ornaments: M.maxTitlesOrnaments,
                    max_actors_before_creature_mode: M.maxActorsBeforeCreatureMode,
                    always_show_grid: M.alwaysShowGrid,
                    menubar_size: M.menubarSize,
                    monster_info_first_position: M.monsterInfoFirstPosition,
                    fullscreen: M.fullscreen,
                    portrait_mode: M.isPortraitMode,
                    auto_gps_flags: M.autoGpsFlags,
                    auto_gps_phoenixes: M.autoGpsPhoenixes,
                    bottomMenuBar: M.bottomMenuBar
                },
                fight: {
                    menubar_size_in_fight: M.menubarSizeInFight,
                    show_mounts_in_fight: M.showMountsInFight,
                    hide_dead_fighters: M.hideDeadFighters,
                    allow_spell_effects: M.allowSpellEffects,
                    confirm_box_when_walking: M.confirmBoxWhenWalking,
                    show_speech_bubble_in_fight: M.showSpeechBubbleInFight,
                    order_fighters: M.orderFighters,
                    show_ap_mp_used: M.showApMpUsed,
                    fight_always_show_grid: M.fightAlwaysShowGrid,
                    regroup_damages: M.regroupDamages,
                    allow_damage_preview: M.allowDamagePreview,
                    show_movement_preview: M.showMovementPreview,
                    confirm_box_allow_double_tap: M.confirmBoxAllowDoubleTap,
                    confirm_box_when_drag_casting: M.confirmBoxWhenDragCasting,
                    confirm_box_when_click_casting: M.confirmBoxWhenClickCasting,
                    show_fight_notifications: M.showFightNotification,
                    show_summon_without_turn: M.showSummonWithoutTurn,
                    display_full_fight_end_window: M.displayFullFightEndWindow,
                    display_end_of_turn_right: M.displayEndOfTurnRight,
                    can_tap_on_chat_link: M.canTapOnChatLink
                },
                sound: {
                    sound_on_player_turn_start: M.soundOnPlayerTurnStart,
                    music: t.music.volume,
                    sfx: t.sfx.volume,
                    ui: t.ui.volume
                },
                miscellenous: {
                    censorship: M.censorship,
                    chat_timestamp: M.chatTimestamp,
                    top_chat_bar: M.topChatBar,
                    tutorial_tips: M.tutorialTips,
                    spell_tooltip_name: M.spellTooltipName,
                    spell_tooltip_ap_range: M.spellTooltipApRange,
                    spell_tooltip_critical: M.spellTooltipCritical,
                    spell_tooltip_effect: M.spellTooltipEffect,
                    spell_tooltip_description: M.spellTooltipDescription,
                    show_almanax_every_day: M.showAlmanaxEveryday
                },
                events: {
                    general: M.systemNotificationsEnabled,
                    shop: M.wantPromoNotif,
                    atq: M.wantPrismAttackedNotif,
                    vulne: M.wantPrismVulnerableNotif
                }
            };
        N.log("User_Life_Cycle.settings_configuration", {
            account_id: D.gui.playerData.identification.accountId,
            settings_details: JSON.stringify(i)
        })
    }

    function u() {
        D.gui.openConfirmPopup({
            message: b("ui.popup.deleteAccount.text"),
            noDisable: !0,
            enableCloseCross: !0,
            heightPixel: 350,
            buttonYesLabel: b("ui.popup.deleteAccount.button"),
            cb: function(e) {
                if (e) {
                    var t = D.gui.playerData,
                        i = t.identification.uniqueNickname.isGuest();
                    if (!i) {
                        var n = "https://account." + q.getHaapiConfig()
                            .getHostname(),
                            o = n + C[D.Config.language];
                        return void S.openUrlInAppBrowser(o)
                    }
                    q.deleteGuest(function(e) {
                        return e ? void console.error("Error while trying to delete a guest : ", e) : (z.deleteGuest(), x.close("global"), void D.dofus.disconnectAndReload())
                    })
                }
            }
        })
    }
    i(1310);
    var p = i(88),
        h = i(86)
        .DofusButton,
        f = i(594),
        b = i(17)
        .getText,
        m = i(56)
        .inherits,
        M = i(55),
        g = i(7),
        _ = i(453),
        A = i(945),
        O = i(1052)
        .SingleSelectionList,
        v = i(1311),
        y = i(926),
        z = i(60),
        w = i(70),
        T = i(62),
        C = i(1313),
        I = i(1314),
        S = i(16),
        E = i(559),
        L = i(1318),
        N = i(116),
        R = i(91),
        q = i(142),
        x = i(52),
        B = i(14),
        D = B(),
        W = "OptionsWindow",
        P = {
            bool: o,
            dropdown: a,
            button: r,
            header: s,
            infoText: c,
            custom: l
        };
    m(n, w), e.exports = n, n.prototype._open = function() {
        this.sections || this._createContent(), this.refreshUi()
    }, n.prototype._opened = function(e) {
        e && e.tab && this._selectTab(e.tab)
    }, n.prototype._close = function() {
        z.saveNow()
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this.sections = this.currentSection = null, this.elements = {}, this.menuList = this.settingsScroller = this.settingsCol = null
    }, n.prototype._createContent = function() {
        var e = this;
        this.sections = {};
        var t = this.windowBody.createChild("div", {
                className: "wrapper"
            }),
            i = t.createChild("div", {
                className: "menuCol"
            });
        this.menuList = i.appendChild(new O({
            className: "menu"
        }, {
            disableSelectionToggle: !0
        })), this.menuList.on("selected", function(t) {
            e._showSection(t.id), this.scrollToElement(t)
        });
        var n = t.createChild("div", {
            className: "settingsCol"
        });
        this.settingsScroller = n.appendChild(new _({
            className: "settings"
        })), this.settingsCol = this.settingsScroller.content;
        for (var o = 0; o < this.optionDefinitions.length; o++) this._createSection(this.optionDefinitions[o], o)
    }, n.prototype._createSection = function(e, t) {
        this.menuList.addItem({
            id: t,
            element: e.title
        }, {
            noRefresh: !0
        });
        var i = this.settingsCol.createChild("div", {
            className: ["optionSection", e.name + "Section"],
            hidden: !0
        });
        if (e.text) {
            var n = i.createChild("div", {
                className: "titleBox"
            });
            n.createChild("div", {
                className: "sectionDescription",
                text: e.text
            })
        }
        for (var o = i.createChild("div", {
                className: "allOptions"
            }), a = e.elements, r = 0; r < a.length; r++) {
            var s = this._createElement(o, a[r]);
            this.elements[t + "-" + r] = s
        }
        this.sections[t] = i
    }, n.prototype._createElement = function(e, t) {
        var i = this,
            n = P[t.type];
        if (!n) return console.error("Invalid element type:", t.type);
        var o = n(e, t);
        t.className && o.addClassNames(t.className);
        var a = t.gameOptionId;
        return a && (M.on(a, this._gameOptionChangedHandler), o.on("destroy", function() {
            M.removeListener(a, i._gameOptionChangedHandler)
        })), o
    }, n.prototype._gameOptionChanged = function(e, t, i) {
        i !== W && this.refreshUi()
    }, n.prototype.refreshUi = function() {
        for (var e = 0; e < this.optionDefinitions.length; e++) this._refreshSection(e);
        this._updateTabsVisibility(), this._updateElementsVisibility()
    }, n.prototype._refreshSection = function(e) {
        for (var t = this.optionDefinitions[e], i = t.elements, n = 0; n < i.length; n++) {
            var o, a = i[n],
                r = this.elements[e + "-" + n];
            a.getCurrentValue ? o = a.getCurrentValue() : a.gameOptionId && (o = M[a.gameOptionId]), "bool" === a.type ? r.toggleActivation(o, !0) : "dropdown" === a.type ? r.select(o, !0) : "custom" === a.type && "function" == typeof r.updateVisual && r.updateVisual(o)
        }
    }, n.prototype._updateTabsVisibility = function() {
        for (var e = 0, t = null, i = 0; i < this.optionDefinitions.length; i++) {
            var n = this.optionDefinitions[i],
                o = !n.shouldShow || n.shouldShow(),
                a = this.menuList.getChildren()[0],
                r = a.getChild(i);
            r.toggleDisplay(o), o ? (e++, r.toggleClassName("odd", e % 2 === 0), null === t && (t = i)) : this._hideSection(i)
        }
        this.currentSection || null === t || this.menuList.selectItem(t, {
            noSound: !0
        })
    }, n.prototype._updateElementsVisibility = function(e) {
        void 0 === e && (e = this.currentSectionId);
        var t = this.optionDefinitions[e];
        if (!t || !t.elements) return console.error("Invalid section ID: " + e);
        for (var i = 0; i < t.elements.length; i++) {
            var n = t.elements[i],
                o = !n.shouldShow || n.shouldShow(),
                a = this.elements[e + "-" + i];
            a.toggleDisplay(o)
        }
    }, n.prototype._showSection = function(e) {
        this.currentSection && this.currentSection.hide(), this.currentSection = this.sections[e], this.currentSectionId = e, this.currentSection.show(), this._updateElementsVisibility(e), this.settingsScroller.refresh()
    }, n.prototype._hideSection = function(e) {
        var t = this.sections[e];
        this.currentSection === t && (this.currentSection.hide(), this.currentSection = null)
    }, n.prototype._selectTab = function(e) {
        var t = this._getSectionByName(e);
        return void 0 === t ? console.error("Invalid tab " + e) : void this.menuList.selectItem(t, {
            scrollToElement: !0
        })
    }, n.prototype._getSectionByName = function(e) {
        for (var t = 0; t < this.optionDefinitions.length; t++)
            if (e === this.optionDefinitions[t].name) return t
    }, n.prototype._initOptionDefinitions = function() {
        this.optionDefinitions = [{
            name: "game",
            title: b("ui.common.general"),
            elements: [{
                type: "header",
                text: b("ui.option.worldOption")
            }, {
                type: "bool",
                gameOptionId: "showAllMonsters",
                text: b("ui.option.viewAllMonsterInGroup")
            }, {
                type: "dropdown",
                gameOptionId: "maxTitlesOrnaments",
                text: b("tablet.option.viewTitlesOrnaments"),
                values: [0, 1, 5, 10, 15, 20],
                labels: [0, 1, 5, 10, 15, 20]
            }, {
                type: "dropdown",
                gameOptionId: "maxActorsBeforeCreatureMode",
                text: b("ui.option.creaturesMode"),
                values: [0, 10, 20, 40, 9999],
                labels: [0, 10, 20, 40, b("ui.common.infinit")]
            }, {
                type: "bool",
                gameOptionId: "alwaysShowGrid",
                text: b("tablet.option.alwaysShowGrid")
            }, {
                type: "dropdown",
                gameOptionId: "menubarSize",
                text: b("tablet.option.menubarSize"),
                values: [2, 3, 4, 5, 6],
                labels: [2, 3, 4, 5, 6]
            }, {
                type: "bool",
                gameOptionId: "monsterInfoFirstPosition",
                text: b("ui.option.monsterInfoFirstPosition")
            }, {
                type: "bool",
                gameOptionId: "bottomMenuBar",
                text: b("ui.option.bottomMenuBar")
            }, {
                type: "bool",
                shouldShow: function() {
                    return g.isIOSApp
                },
                gameOptionId: "limitToNotch",
                text: b("ui.option.limitToNotch")
            }, {
                type: "bool",
                gameOptionId: "fullscreen",
                text: b("ui.option.fullScreen")
            }, {
                type: "bool",
                gameOptionId: "isPortraitMode",
                text: b("ui.option.portraitMode")
            }, {
                type: "header",
                text: b("tablet.option.compass")
            }, {
                type: "bool",
                gameOptionId: "autoGpsFlags",
                text: b("tablet.option.autoGpsFlags")
            }, {
                type: "button",
                text: b("tablet.option.unfollowAllQuests"),
                action: D.gui.GPS.questFollower.unfollowAllQuests.bind(D.gui.GPS.questFollower)
            }, {
                type: "bool",
                gameOptionId: "autoGpsPhoenixes",
                text: b("tablet.option.autoGpsPhoenixes")
            }]
        }, {
            name: "fight",
            title: b("ui.common.fight"),
            elements: [{
                type: "header",
                text: b("ui.common.fight")
            }, {
                type: "dropdown",
                gameOptionId: "menubarSizeInFight",
                text: b("tablet.option.fight.menubarSizeInFight"),
                values: [2, 3, 4, 5, 6],
                labels: [2, 3, 4, 5, 6]
            }, {
                type: "dropdown",
                gameOptionId: "toolbarThicknessInFight",
                shouldShow: function() {
                    return D.gui.ipadRatio
                },
                text: b("tablet.option.fight.toolbarThicknessInFight"),
                values: [1, 2, 3],
                labels: [1, 2, 3]
            }, {
                type: "bool",
                gameOptionId: "showMountsInFight",
                text: b("tablet.option.showMountsInFight"),
                action: D.isoEngine.actorManager.refreshActorsLook.bind(D.isoEngine.actorManager)
            }, {
                type: "bool",
                gameOptionId: "hideDeadFighters",
                text: b("ui.option.hideDeadFighters")
            }, {
                type: "bool",
                gameOptionId: "allowSpellEffects",
                text: b("ui.option.allowSpellEffects")
            }, {
                type: "bool",
                gameOptionId: "confirmBoxWhenWalking",
                text: b("tablet.option.fight.confirmBoxWhenWalking")
            }, {
                type: "bool",
                gameOptionId: "showSpeechBubbleInFight",
                text: b("tablet.option.fight.showSpeechBubbleInFight")
            }, {
                type: "bool",
                gameOptionId: "orderFighters",
                text: b("tablet.option.fight.orderFighters")
            }, {
                type: "bool",
                gameOptionId: "showApMpUsed",
                text: b("tablet.option.fight.showApMpUsed")
            }, {
                type: "bool",
                gameOptionId: "fightAlwaysShowGrid",
                text: b("tablet.option.fightAlwaysShowGrid")
            }, {
                type: "bool",
                gameOptionId: "regroupDamages",
                text: b("ui.option.regroupDamages")
            }, {
                type: "bool",
                gameOptionId: "showSummonWithoutTurn",
                text: b("ui.option.showSummonWithoutTurn")
            }, {
                type: "bool",
                gameOptionId: "showFightNotifications",
                text: b("ui.option.showFightNotifications")
            }, {
                type: "header",
                text: b("ui.charcrea.spells")
            }, {
                type: "bool",
                gameOptionId: "allowDamagePreview",
                text: b("ui.option.allowDamagePreview")
            }, {
                type: "bool",
                gameOptionId: "showMovementPreview",
                text: b("ui.option.showMovementPreview")
            }, {
                type: "bool",
                gameOptionId: "confirmBoxAllowDoubleTap",
                text: b("ui.option.allowDoubleTap")
            }, {
                type: "dropdown",
                gameOptionId: "confirmBoxWhenDragCasting",
                text: b("tablet.option.fight.confirmBoxWhenDragCasting"),
                values: [T.NEVER, T.ALWAYS, T.EMPTY_ONLY],
                labels: [b("tablet.option.fight.Never"), b("tablet.option.fight.Always"), b("tablet.option.fight.EmptyOnly")]
            }, {
                type: "dropdown",
                gameOptionId: "confirmBoxWhenClickCasting",
                text: b("tablet.option.fight.confirmBoxWhenClickCasting"),
                values: [T.NEVER, T.ALWAYS, T.EMPTY_ONLY],
                labels: [b("tablet.option.fight.Never"), b("tablet.option.fight.Always"), b("tablet.option.fight.EmptyOnly")]
            }, {
                type: "bool",
                gameOptionId: "displayFullFightEndWindow",
                text: b("ui.option.displayFullFightEndWindow")
            }, {
                type: "bool",
                gameOptionId: "displayEndOfTurnRight",
                text: b("ui.option.displayEndOfTurnRight")
            }, {
                type: "bool",
                gameOptionId: "canTapOnChatLink",
                text: b("ui.option.canTapOnChatLink")
            }]
        }, {
            name: "sounds",
            title: b("ui.option.audio"),
            elements: [{
                type: "header",
                text: b("ui.option.audioSubtitle")
            }, {
                type: "bool",
                gameOptionId: "soundOnPlayerTurnStart",
                text: b("ui.option.startTurnSound")
            }, {
                type: "custom",
                CustomClass: v,
                text: b("ui.option.musics"),
                channelId: "music"
            }, {
                type: "custom",
                CustomClass: v,
                text: b("ui.option.environment"),
                channelId: "sfx"
            }, {
                type: "custom",
                CustomClass: v,
                text: b("ui.option.sounds"),
                channelId: "ui"
            }]
        }, {
            name: "notification",
            shouldShow: E.isAvailable,
            title: b("ui.common.notification"),
            elements: [{
                type: "header",
                text: b("ui.common.notification")
            }, {
                type: "bool",
                gameOptionId: "systemNotificationsEnabled",
                text: b("tablet.option.enableNotifications"),
                className: "groupSwitch"
            }, {
                type: "bool",
                gameOptionId: "wantPromoNotif",
                text: b("tablet.option.wantPromoNotif"),
                shouldShow: E.isEnabled
            }, {
                type: "bool",
                gameOptionId: "wantPrismAttackedNotif",
                text: b("tablet.option.wantPrismAttackedNotif"),
                shouldShow: E.isEnabled
            }, {
                type: "bool",
                gameOptionId: "wantPrismVulnerableNotif",
                text: b("tablet.option.wantPrismVulnerableNotif"),
                shouldShow: E.isEnabled
            }]
        }, {
            name: "misc",
            title: b("ui.option.miscellaneousOptions"),
            elements: [{
                type: "header",
                text: b("ui.common.chat")
            }, {
                type: "bool",
                gameOptionId: "censorship",
                text: b("ui.option.censorship")
            }, {
                type: "bool",
                gameOptionId: "chatTimestamp",
                text: b("ui.option.useChatTime")
            }, {
                type: "bool",
                gameOptionId: "topChatBar",
                text: b("ui.option.topChatBar")
            }, {
                type: "header",
                text: b("ui.tutorial.tutorial")
            }, {
                type: "bool",
                gameOptionId: "tutorialTips",
                text: b("ui.option.allowTutorial")
            }, {
                type: "button",
                text: b("ui.option.resetHints"),
                action: y.resetTips.bind(y)
            }, {
                type: "header",
                text: b("tablet.option.spellTooltip")
            }, {
                type: "bool",
                gameOptionId: "spellTooltipName",
                text: b("tablet.option.spellTooltipName")
            }, {
                type: "bool",
                gameOptionId: "spellTooltipApRange",
                text: b("tablet.option.spellTooltipApRange")
            }, {
                type: "bool",
                gameOptionId: "spellTooltipCritical",
                text: b("tablet.option.spellTooltipCritical")
            }, {
                type: "bool",
                gameOptionId: "spellTooltipEffect",
                text: b("tablet.option.spellTooltipEffect")
            }, {
                type: "bool",
                gameOptionId: "spellTooltipDescription",
                text: b("tablet.option.spellTooltipDescription")
            }, {
                type: "header",
                text: b("ui.almanax.almanax")
            }, {
                type: "bool",
                gameOptionId: "showAlmanaxEveryDay",
                text: b("ui.option.showAlmanaxEverydayDescription")
            }]
        }, {
            name: "about",
            title: b("tablet.ui.about"),
            elements: [{
                type: "header",
                text: b("tablet.ui.about")
            }, {
                type: "infoText",
                text: D.gui.getBuildVersion()
            }, {
                type: "button",
                text: b("ui.legal.tou"),
                action: S.openUrlInAppBrowser.bind(null, b("ui.legal.linktou"))
            }, {
                type: "button",
                text: b("ui.legal.gcs"),
                action: S.openUrlInAppBrowser.bind(null, b("ui.legal.linkgcs"))
            }, {
                type: "button",
                text: b("ui.legal.accountDeletion"),
                action: u.bind(null)
            }, {
                type: "custom",
                CustomClass: I
            }]
        }, {
            name: "performances",
            title: b("tablet.option.performances"),
            shouldShow: function() {
                return L.getAvailableEngineIds()
                    .length > 1
            },
            elements: [{
                type: "dropdown",
                text: b("tablet.option.performances.engine"),
                values: L.getAvailableEngineIds(),
                labels: L.getAvailableEngineNames(),
                action: L.changeEngineOptionAction,
                getCurrentValue: function() {
                    return L.getCurrentEngineId()
                }
            }]
        }]
    }
}
