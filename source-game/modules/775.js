function(e, t, i) {
    function n(e, t) {
        if (!t) return M["switch"](e);
        var i = M.getWindow(e),
            n = i.getOpenedTabId();
        i.openState && t === n ? M.close(e) : M.open(e, {
            tabId: t
        })
    }

    function o() {
        var e = M.getWindow("bidHouseShop");
        e.openState ? M.close("bidHouseShop") : e.isOpening || e.openBidHouse(!1)
    }

    function a() {
        window.gui.playerData.isSubscriberAtMinLevel(A.ELITE) || M.open("BonusPackElitePopup")
    }

    function r() {
        var e = M.getWindow("worldMap");
        e.openState ? M.close("worldMap") : M.open("worldMap", {
            centerOnPlayer: !0
        })
    }

    function s(e) {
        m.call(this, {
            autoClose: !0
        }), this.addClassNames("MenuBar"), this._logger = e, this._sizeInIcons = -1, this._iconOrder = [], this._notificationIconList = {}, this._createDom(), this._listenToServerEvents(), this._listenToInternalEvents()
    }
    i(776);
    var c = i(13),
        l = i(54)
        .dimensions,
        d = i(418),
        u = i(17)
        .getText,
        p = i(56)
        .inherits,
        h = i(86),
        f = i(60),
        b = i(22),
        m = i(777),
        M = i(52),
        g = i(116),
        _ = i(588),
        A = i(509),
        O = i(750),
        v = window.dofus.connectionManager,
        y = c.MENU_ICON_SIZE,
        z = c.WARN_INVENTORY_RED_MIN,
        w = {
            narrow: 8,
            wide: 4
        },
        T = {
            narrow: 35,
            wide: 45
        },
        C = {
            Carac: {
                tooltip: "ui.banner.character",
                windowId: "characteristics"
            },
            Spell: {
                tooltip: "ui.grimoire.mySpell",
                windowId: "grimoire",
                tabId: "spells"
            },
            Bag: {
                tooltip: "ui.banner.inventory",
                windowId: "equipment"
            },
            Book: {
                tooltip: "ui.common.quests",
                windowId: "grimoire",
                tabId: "quests"
            },
            Map: {
                tooltip: "ui.banner.map",
                windowId: "worldMap",
                action: r
            },
            Friend: {
                tooltip: "ui.banner.friends",
                windowId: "social",
                tabId: "friends"
            },
            Guild: {
                tooltip: "ui.common.guild",
                windowId: "social",
                tabId: "guild"
            },
            BidHouse: {
                tooltip: "ui.bidhouse.bigStore",
                action: o
            },
            Conquest: {
                tooltip: "ui.common.koliseum",
                windowId: "arena"
            },
            Goultine: {
                tooltip: "tablet.window.shop.title",
                windowId: "market",
                tabId: "shop"
            },
            Job: {
                tooltip: "ui.common.myJobs",
                windowId: "grimoire",
                tabId: "jobs"
            },
            Alliance: {
                tooltip: "ui.common.alliance",
                windowId: "social",
                tabId: "alliance"
            },
            Mount: {
                tooltip: "ui.banner.mount",
                windowId: "mount"
            },
            Directory: {
                tooltip: "ui.common.directory",
                windowId: "social",
                tabId: "directory"
            },
            Alignment: {
                tooltip: "ui.common.alignment",
                windowId: "grimoire",
                tabId: "alignment"
            },
            Bestiary: {
                tooltip: "ui.common.bestiary",
                windowId: "grimoire",
                tabId: "bestiary"
            },
            Title: {
                tooltip: "ui.common.titles",
                windowId: "grimoire",
                tabId: "ornaments"
            },
            Achievement: {
                tooltip: "ui.achievement.achievement",
                windowId: "grimoire",
                tabId: "achievements"
            },
            DailyQuest: {
                tooltip: "ui.dailyQuest.dailyQuest",
                windowId: "dailyQuest"
            },
            Spouse: {
                tooltip: "ui.common.spouse",
                windowId: "social",
                tabId: "spouse",
                param: 0
            },
            TOA: {
                tooltip: "ui.toa.interfaceTitle",
                windowId: "toa"
            },
            Help: {
                tooltip: "ui.helpWindow.title",
                windowId: "help"
            },
            Zaap: {
                tooltip: "ui.banner.zaap",
                windowId: "teleporterList",
                disabledAction: a
            },
            GroupSeeker: {
                tooltip: "ui.common.teamSearch",
                windowId: "groupSeeker"
            }
        },
        I = ["Carac", "Spell", "Bag", "Book", "Map", "Help", "BidHouse", "DailyQuest", "Friend", "Conquest", "Goultine", "Job", "Guild", "Mount", "Directory", "Alignment", "Bestiary", "Title", "Achievement", "Alliance", "Spouse", "TOA", "Zaap", "GroupSeeker"],
        S = "menuBarOrder";
    p(s, m), e.exports = s, s.prototype._createDom = function() {
        this._iconsBox = this.content.createChild("div", {
            className: "iconsBoxContainer"
        }), this._icons = this.content.createChild("div", {
            className: "iconsContainer"
        });
        var e = this;
        this._unlock = !1, this._lockBtn = this.content.appendChild(new h({
            className: "lockBtn",
            scaleOnPress: !0
        }, function() {
            e._toggleIconsDrag(!e._unlock)
        }));
        for (var t = 0; t < I.length; t++) this._createIcon(t, I[t])
    }, s.prototype.setIconAvailability = function(e, t) {
        void 0 === t && (this._logger.error(new Error("setIconAvailability: enabled param should not be undefined")), t = !1);
        var i = this._icons.getChild(e);
        i.toggleClassName("disabled", !t), i.isDisabled = !t
    }, s.prototype.getIconAvailability = function(e) {
        var t = this._icons.getChild(e);
        return t ? !t.isDisabled : (this._logger.error(new Error("Cannot find the icon " + e)), !1)
    }, s.prototype.enableDragButton = function(e) {
        this._lockBtn.setEnable(e)
    }, s.prototype._toggleIconsDrag = function(e) {
        for (var t = this._icons.getChildren(), i = 0, n = t.length; i < n; i += 1) d.setDragEnable(t[i], e);
        this._lockBtn.toggleClassName("on", !e), this.toggleClassName("draggable", e), this._unlock = e
    }, s.prototype._listenToServerEvents = function() {
        function e() {
            return a.playerData.isFighting
        }

        function t(e) {
            o._removeNotificationIcon(e, "warnRedIconCircle")
        }

        function i(e) {
            o._addNotificationIcon(e, "warnRedIconCircle")
        }

        function n() {
            var e = o._getIcon("Conquest");
            e && (e.toggleClassName("searching", a.playerData.MatchmakingData.isOnKolosseum1v1Queue() || a.playerData.MatchmakingData.isOnKolosseum3v3Queue()), e.toggleClassName("ready", a.playerData.MatchmakingData.isOnKolosseum1v1Acceptance() || a.playerData.MatchmakingData.isOnKolosseum3v3Acceptance()))
        }
        var o = this,
            a = window.gui;
        a.uiLocker.on("updated", function(e) {
            if (e.menuButtonId) {
                if (!C[e.menuButtonId]) return void o._logger.error(new Error("Unknown button id `" + e.menuButtonId + "` in MenuBar."));
                if (o.setIconAvailability(e.menuButtonId, !e.locked), !e.locked) {
                    var t = o._getIcon(e.menuButtonId);
                    if (!t) return;
                    var i = o._notificationIconList,
                        n = e.menuButtonId,
                        a = i[n];
                    i.hasOwnProperty(n) && t.addClassNames(a)
                }
            }
        }), a.on("SpouseInformationsMessage", function(e) {
            C.Spouse.param = e.spouse.sex
        }), a.fightManager.on("fightStart", function() {
            o._clearNotificationIconsStyle()
        }), a.fightManager.on("fightEnd", function() {
            o._showNotificationIcons()
        }), a.playerData.inventory.on("weightUpdated", function(e, n) {
            var o = e / n;
            o < z ? t("Bag") : o >= z && i("Bag")
        }), a.playerData.quests.on("DQStarted", function() {
            M.isWindowOpen("dailyQuest") || i("DailyQuest")
        }), a.playerData.MatchmakingData.on("groupSeekerStatusUpdate", function() {
            var e = a.playerData,
                t = o._getIcon("GroupSeeker");
            if (t) {
                var i = e.MatchmakingData.isOnDungeonQueue() || e.MatchmakingData.isOnRaidQueue() || e.MatchmakingData.isOnCMDungeonQueue(),
                    n = e.MatchmakingData.isOnDungeonAcceptance() || e.MatchmakingData.isOnRaidAcceptance() || e.MatchmakingData.isOnCMDungeonAcceptance();
                t.toggleClassName("searching", i), t.toggleClassName("ready", n)
            }
        }), a.playerData.MatchmakingData.on("Kolosseum1v1StatusUpdate", function() {
            n()
        }), a.playerData.MatchmakingData.on("Kolosseum3v3StatusUpdate", function() {
            n()
        }), a.playerData.characters.on("newSpellLearned", function() {
            o._addNotificationIcon("Spell", "plusIcon", {
                doNotShow: e()
            })
        }), a.playerData.on("characterLevelUp", function() {
            o._addNotificationIcon("Carac", "plusIcon", {
                doNotShow: e()
            })
        });
        var r = M.getWindow("grimoire");
        r.tabs.on("openTab", function(t) {
            "spells" !== t || e() || o._removeNotificationIcon("Spell", "plusIcon")
        });
        var s = M.getWindow("characteristics");
        s.on("open", function() {
            e() || o._removeNotificationIcon("Carac", "plusIcon")
        });
        var c = M.getWindow("dailyQuest");
        c.on("open", function() {
            t("DailyQuest")
        }), v.on("shopOpenSuccess", function() {
            var e = window.gui.serversData.connectedServerId;
            f.setValue(e + "-alreadyOpenedShop", !0);
            var t = {
                id: "Goultine"
            };
            o.displayAnimatedButton(t, !1)
        })
    }, s.prototype.enableTutorialRestrictedFeatures = function(e) {
        this._setButtonsOrder(I), this.enableDragButton(!1), window.gui.uiLocker.lockAllFeaturesExcept(e, "tutorial", u("tablet.tutorial.uiLocker.default")), this._clearNotificationIconsStyle(["plusIcon"])
    }, s.prototype.disableTutorialRestrictedFeatures = function() {
        this._setButtonsOrder(this._iconOrder), this.enableDragButton(!0), window.gui.uiLocker.unlockAllFeatures("tutorial"), this._showNotificationIcons(["plusIcon"])
    }, s.prototype._listenToInternalEvents = function() {
        var e = this,
            t = window.gui;
        t.on("connected", function() {
            e._loadButtonOrderFromAccountPref(), e._setButtonsOrder(e._iconOrder);
            var t = e._getIcon("Goultine");
            if (t) {
                var i = window.gui.serversData.connectedServerId,
                    n = f.getValue(i + "-alreadyOpenedShop", !1);
                e.displayAnimatedButton(t, !n)
            }
        }), t.on("disconnect", function() {
            e._clearNotificationIconsStyle(), e._resetNotificationIconList(), e._resetGroupSeekerAnim(), e._resetConquestAnim(), e._addedBagWarnRedIcon = !1, e._addedBagWarnYellowIcon = !1
        }), this.on("close", function() {
            this._toggleIconsDrag(!1)
        })
    }, s.prototype._onDrop = function(e, t) {
        if (e.id !== t.id) {
            e.delClassNames("vibrate");
            var i = e.index,
                n = t.index,
                o = this;
            b.tween(e, {
                webkitTransform: "translate3d(" + (t.x - e.x) + "px," + (t.y - e.y) + "px,0)"
            }, {
                time: 100,
                easing: "ease-out"
            }, function() {
                o._positionIcon(e, n), o._iconOrder[e.index] = e.id, o._iconOrder[t.index] = t.id, f.setValue(S, o._iconOrder), e.addClassNames("vibrate")
            }), this._positionIcon(t, i)
        }
    }, s.prototype._resetGroupSeekerAnim = function() {
        var e = this._getIcon("GroupSeeker");
        e && (e.delClassNames("searching"), e.delClassNames("ready"))
    }, s.prototype._resetConquestAnim = function() {
        var e = this._getIcon("Conquest");
        e && (e.delClassNames("searching"), e.delClassNames("ready"))
    }, s.prototype._createIcon = function(e, t) {
        var i = this;
        this._iconsBox.createChild("div", {
            className: "iconBox"
        });
        var o = C[t],
            a = this._icons.appendChild(new h({
                className: ["vibrate", "anim" + Math.floor(9 * Math.random()), "menuIcon" + t, "menuBarIcon"],
                tooltip: function() {
                    return u(o.tooltip, o.param)
                },
                name: t,
                scaleOnPress: !0
            }, function() {
                if (this.isDisabled) {
                    var e = window.gui.uiLocker.getMenuButtonLockedReasons(t);
                    return _.showNotification(e.join("\r\n"), this), o.disabledAction && o.disabledAction()
                }
                i.close();
                var r = t;
                "Carac" === t ? r = "Characteristics" : "Goultine" === t ? r = "Shop" : "Conquest" === t ? r = "Koliseum" : "Book" === t ? r = "Quests" : "Bag" === t && (r = "Equipment"), g.log("HUD.Click_on_button", {
                    interface_id: "MenuBar",
                    button_id: "BTN_MENUBAR_" + r.toUpperCase(),
                    clic_parameter_key: "position",
                    clic_parameter_value: a.index + 1,
                    clic_type: "Simple_court"
                }), o.action ? o.action() : n(o.windowId, o.tabId)
            }));
        a.id = t, a.index = e, d.setDraggable(a, null, "menuBar", null, {
            dragElement: !0,
            dragOnTouchstart: !0
        }), d.setDroppable(a, ["menuBar"], {
            matchPositionOnDrop: !0
        }), d.disableDrag(a), a.on("drop", function(e) {
            i._onDrop(this, e)
        }), a.on("tooltipOn", function() {
            this.setStyle("webkitTransform", "scale(1.1)")
        }), a.on("tooltipOut", function() {
            this.setStyle("webkitTransform", "scale(1)")
        })
    }, s.prototype._getIcon = function(e) {
        return this._icons.getChild(e)
    }, s.prototype.getIconForTuto = function(e) {
        return this._getIcon(e)
    }, s.prototype._reorderButtons = function() {
        for (var e = this._icons.getChildren(), t = this._iconsBox.getChildren(), i = 0, n = e.length; i < n; i += 1) {
            var o = e[i];
            this._positionIcon(o, o.index), this._positionIcon(t[i], o.index)
        }
    }, s.prototype._setButtonsOrder = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                n = this._icons.getChild(i);
            n.index = t, this._positionIcon(n, t)
        }
    }, s.prototype._loadButtonOrderFromAccountPref = function() {
        if (this._iconOrder = f.getValue(S, null), this._iconOrder)
            for (var e = 0; e < I.length; e++) this._iconOrder.indexOf(I[e]) === -1 && this._iconOrder.splice(e, 0, I[e]);
        else this._iconOrder = I.concat();
        for (var t = 0; t < this._iconOrder.length; t++) {
            var i = this._iconOrder[t],
                n = this._icons.getChild(i);
            if (n) {
                var o = window.gui.uiLocker.isMenuButtonAvailable(i);
                this.setIconAvailability(i, o)
            } else this._iconOrder.splice(t, 1), t--
        }
    }, s.prototype._positionIcon = function(e, t) {
        window.gui.ipadRatio ? (e.x = (y + 1) * (t % this._iconsPerLine), e.y = (y + 2) * Math.floor(t / this._iconsPerLine)) : (e.x = (y + 4) * Math.floor(t / this._iconsPerColumn), e.y = y * (t % this._iconsPerColumn)), e.index = t, e.setStyles({
            left: e.x + "px",
            top: e.y + "px",
            webkitTransform: ""
        })
    }, s.prototype.computeMinimumSize = function(e, t) {
        return this._sizeInIcons = e, e * y + w[t]
    }, s.prototype._resize = function() {
        var e, t = window.gui.ipadRatio ? "narrow" : "wide";
        window.gui.ipadRatio ? (this._iconsPerLine = this._sizeInIcons, this._iconsPerColumn = Math.ceil(I.length / this._iconsPerLine), this.setStyles({
            top: "",
            right: "",
            bottom: 0,
            left: l.posMenuBar + "px",
            width: l.menuBarSize + "px",
            height: l.bottomBarHeight + "px"
        }), this._icons.setStyle("height", y * this._iconsPerColumn + T[t] + "px"), this._icons.setStyle("width", y * this._iconsPerLine + "px"), e = "top") : (this._iconsPerColumn = this._sizeInIcons, this._iconsPerLine = Math.ceil(I.length / this._iconsPerColumn), this.setStyles({
            bottom: "",
            left: "",
            top: l.posMenuBar + "px",
            right: 0,
            width: l.sideBarWidth + "px",
            height: l.menuBarSize + "px"
        }), this._icons.setStyle("width", y * this._iconsPerLine + T[t] + "px"), e = "left"), this._reorderButtons(), this.setOpeningSide(e)
    }, s.prototype._addNotificationIcon = function(e, t, i) {
        if (!e) return void this._logger.error("MenuBar._addNotificationIcon: undefined iconName with notificationIcon", t);
        if (!t) return void this._logger.error("MenuBar._addNotificationIcon: undefined notificationIcon on iconName", e);
        i = i || {};
        var n = this._getIcon(e);
        if (n) {
            var o = this._notificationIconList;
            o.hasOwnProperty(e) || (o[e] = t, !i.doNotShow && window.gui.uiLocker.isMenuButtonAvailable(e) && n.addClassNames(t))
        }
    }, s.prototype._removeNotificationIcon = function(e, t) {
        if (!e) return void this._logger.error("MenuBar._removeNotificationIcon: undefined iconName with notificationIcon:", t);
        if (!t) return void this._logger.error("MenuBar._removeNotificationIcon: undefined notificationIcon on iconName:", e);
        var i = this._getIcon(e);
        if (i) {
            var n = this._notificationIconList;
            n.hasOwnProperty(e) && (i.delClassNames(t), delete n[e])
        }
    }, s.prototype._clearNotificationIconsStyle = function(e) {
        e ? e instanceof Array || (e = [e]) : e = "all";
        for (var t = this._notificationIconList, i = this._icons.getChildren(), n = 0; n < i.length; n += 1) {
            var o = i[n],
                a = o.id;
            t.hasOwnProperty(a) && ("all" !== e && e.indexOf(t[a]) === -1 || o.delClassNames(t[a]))
        }
    }, s.prototype._resetNotificationIconList = function() {
        var e = this._notificationIconList;
        for (var t in e) e.hasOwnProperty(t) && delete e[t]
    }, s.prototype._showNotificationIcons = function(e) {
        e ? e instanceof Array || (e = [e]) : e = "all";
        var t = this._notificationIconList;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var n = i,
                    o = this._getIcon(n);
                if (!o) continue;
                "all" !== e && e.indexOf(t[n]) === -1 || o.addClassNames(t[n])
            }
    }, s.prototype.displayAnimatedButton = function(e, t) {
        var i = this;
        O.handleShopAnimation(function() {
            i._addNotificationIcon(e.id, "menuIconGoultineAnimated")
        }, function() {
            i._removeNotificationIcon(e.id, "menuIconGoultineAnimated")
        }, t)
    }
}
