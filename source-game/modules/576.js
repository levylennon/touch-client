function(e, t, i) {
    function n() {
        x.call(this, "div", {
            className: "chat"
        }), this.displayMode = ae.ROLEPLAY, this.linkHelper = new C, this.p2p = new I, this.censor = new P, this.presets = null, this.channelMap = window.gui.databases.ChatChannels, this.numPresetsListeningToChannel = null, this.historyBuffers = {}, this.historyBuffers[Z] = new z(se);
        for (var e in this.channelMap) this.historyBuffers[~~e] = new z(se);
        this._initializeElements(), this._setMessageHandlers()
    }

    function o(e) {
        var t = this.chat;
        t._toggleChannel(t.activePreset, ~~this.id, e)
    }

    function a() {
        var e = this.chat,
            t = this.presetId;
        t === e.activePreset ? e._togglePresetChannels(t) : e._setActivePreset(t)
    }

    function r(e, t) {
        t.sort(function(e, t) {
            return e.start - t.start
        });
        for (var i = [], n = 0, o = 0; o < t.length; o += 1) {
            var a = t[o],
                r = e.substring(n, a.start),
                s = e.substring(a.start, a.end);
            n = a.end;
            var c = '<a href="' + s + '">' + s + "</a>";
            i.push(r, c)
        }
        var l = e.substring(n, e.length);
        return i.push(l), i.join("")
    }

    function s(e) {
        e.urls && e.urls.length > 0 && "ChatAdminServerMessage" !== e._messageType && (e.content = r(e.content, e.urls))
    }

    function c(e) {
        if (e)
            for (var t = 0; t < e.length; t++)
                for (var i = e[t], n = 0; n < i.effects.length; n++) {
                    var o = i.effects[n];
                    "ObjectEffectString" === o._type && (o.value = y(o.value))
                }
    }
    i(577);
    var l = i(86),
        d = i(503),
        u = i(504),
        p = i(578),
        h = i(579),
        f = i(590),
        b = i(593),
        m = i(594),
        M = i(7),
        g = i(54)
        .dimensions,
        _ = l.DofusButton,
        A = i(596),
        O = i(67)
        .getElementPositionAround,
        v = i(17)
        .getText,
        y = i(16)
        .encodeSpecialChars,
        z = i(597),
        w = i(56)
        .inherits,
        T = i(452),
        C = i(598),
        I = i(599),
        S = i(453),
        E = i(63),
        L = i(22),
        N = i(60),
        R = i(115),
        q = i(52),
        x = i(72),
        B = i(601),
        D = i(603),
        W = i(55),
        P = i(605),
        k = i(59)
        .EventEmitter,
        F = i(91)
        .playUiSound,
        H = i(129),
        U = i(13),
        G = i(16),
        j = 450,
        Y = 132,
        X = 280,
        V = 185,
        Q = 200,
        K = 1 / 60 * 1e3,
        J = u.PSEUDO_CHANNEL_PRIVATE,
        Z = d.RED_CHANNEL,
        $ = 0,
        ee = 1,
        te = 2,
        ie = 3,
        ne = 4,
        oe = {};
    oe[u.PSEUDO_CHANNEL_FIGHT_LOG] = !0, oe[u.PSEUDO_CHANNEL_NPC_LOG] = !0;
    var ae = {
            ROLEPLAY: "roleplay",
            FIGHT: "fight"
        },
        re = "chatIncomingPreset_",
        se = 50;
    w(k, x), w(n, k), e.exports = n, n.prototype._initializeAtConnection = function() {
        this.setDisplayMode(ae.ROLEPLAY), this.chatInput.initializeAtConnection(), this._clearChatHistory()
    }, n.prototype._initializeEnabledChannels = function(e, t) {
        this.chatInput.initializeEnabledChannels(e, t), this._loadPresetConfig(), this._setActivePreset($)
    }, n.prototype._clearChatHistory = function() {
        this._logChat.clearContent();
        for (var e in this.historyBuffers) this.historyBuffers[~~e].clear();
        this.chatInput.clearSentMessageHistory()
    }, n.prototype._initializeElements = function() {
        var e = this;
        this.createChild("span", {
            className: "iOSFIXSpan",
            text: "iOS FIX"
        }), this.logWrapper = this.createChild("div", {
            className: "logWrapper"
        }), this.fightControls = this.logWrapper.createChild("div", {
            className: "fightControls"
        }), this.timelineBox = this.fightControls.createChild("div", {
            className: "timelineBox"
        });
        var t = this.fightControls.createChild("div", {
                className: "fightButtons"
            }),
            i = new _("", {
                className: "yourTurnButton",
                hidden: !0
            }, function() {
                e.deactivate()
            }),
            n = this.createChild("div", {
                className: "yourTurnText"
            });
        n.setText(v("tablet.chat.yourTurnButton")), i.appendChild(n), this.yourTurnButton = t.appendChild(i), this.chatInput = new h(this.logWrapper, this.linkHelper), this.logWrapper.appendChild(new R({
            className: ["simpleButton", "chatCloseButton"]
        }, function() {
            e.deactivate()
        })), D(this.logWrapper, {
            minWidth: j,
            minHeight: Y,
            eventOnResize: !0
        }), this.logWrapper.on("resize", function() {
            e.displayMode === ae.FIGHT ? N.setValue("ChatHeightForFight", e.logWrapper.windowHeight) : N.setValue("ChatForRP", {
                width: e.logWrapper.windowWidth,
                height: e.logWrapper.windowHeight
            }), N.saveNow(), e._refreshScroller()
        }), this.logWrapper.on("resizeMove", function(t) {
            e._refreshPresetButtonsSize(t.h)
        }), this.logScroller = this.logWrapper.appendChild(new S({
            className: "log"
        }, {
            showHintArrows: !0
        })), this._logChat = this.logScroller.content, this._logChat.addClassNames("showChannel666"), this.chatInput.on("sentChatMsg", function() {
            e.logScroller.goToBottom()
        }), this._toggleTopChatBar(N.getValue("option-topChatBar", !0)), this._toggleChatTimestampDisplay(N.getValue("option-chatTimestamp", !1))
    }, n.prototype._updateChannelListenerCount = function(e, t) {
        var i = this.numPresetsListeningToChannel[e],
            n = Math.max(i + t, 0);
        this.numPresetsListeningToChannel[e] = n, oe[e] || (0 === i && n > 0 ? window.dofus.sendMessage("ChannelEnablingMessage", {
            channel: e,
            enable: !0
        }) : i > 0 && 0 === n && window.dofus.sendMessage("ChannelEnablingMessage", {
            channel: e,
            enable: !1
        }))
    }, n.prototype._toggleChannel = function(e, t, i) {
        this._setChannelInPreset(e, t, i), this._updateChannelListenerCount(t, i ? 1 : -1)
    }, n.prototype._addPreset = function(e) {
        var t = this.presetButtons.createChild("div", {
            className: "presetButton"
        });
        t.createChild("div", {
            className: ["presetIcon", e.className]
        }), t.chat = this, t.presetId = this.presets.length, E(t), t.on("tap", a);
        for (var i, n = [], r = 0; r < e.channels.length; r++) i = e.channels[r], n.push(i);
        var s = {
            element: t,
            channels: n,
            channelsList: this.channelsLists.createChild("div", {
                className: "channelsList"
            })
        };
        this.presets.push(s);
        for (var c in this.channelMap) {
            i = ~~c;
            var l = s.channelsList.appendChild(new m(this.channelMap[i].nameId));
            l.id = i, l.chat = this, l.addClassNames("channel" + l.id), l.on("change", o)
        }
    }, n.prototype._createPresets = function(e) {
        this.presets = [], this.activePreset = null, this.presetButtons = this.logWrapper.createChild("div", {
            className: "presetButtons"
        }), this.channelsLists = this.logWrapper.createChild("div", {
            className: "channelsLists"
        });
        for (var t = 0; t < e.length; t++) this._addPreset(e[t])
    }, n.prototype._setChannelInPreset = function(e, t, i) {
        var n = this.presets[e].channels,
            o = !1,
            a = n.indexOf(t);
        a === -1 || i ? a === -1 && i && (n.push(t), o = !0) : (n.splice(a, 1), o = !0), o && (e === this.activePreset && this._updateLogFilter(), N.setValue(re + e, n))
    }, n.prototype._updatePresets = function(e) {
        var t = this.numPresetsListeningToChannel = {};
        for (var i in this.channelMap) t[~~i] = 0;
        for (var n, o, a = e.length - 1; a >= 0; a--) {
            var r = this.presets[a];
            o = r.channelsList.getChildren();
            var s = 0;
            for (i in this.channelMap) {
                n = ~~i;
                var c = this.chatInput.isChannelEnabledForSending(n),
                    l = r.channels.indexOf(n) >= 0,
                    d = o[s];
                s++, this.chatInput.isChannelAllowedForSending(n) ? (oe[n] || (!c || l || 0 !== a || t[n] || (this._setChannelInPreset(a, n, !0), l = !0), !c && l && (this._setChannelInPreset(a, n, !1), l = !1)), l ? (d.activate(!0), t[n]++) : d.deactivate(!0)) : d.hide()
            }
        }
    }, n.prototype._loadPresetConfig = function() {
        var e = [];
        e.push({
            className: "preset1",
            channels: N.getValue(re + $, [u.CHANNEL_GLOBAL, u.CHANNEL_TEAM, u.CHANNEL_GUILD, u.CHANNEL_ALLIANCE, u.CHANNEL_PARTY, u.CHANNEL_SEEK, u.CHANNEL_SALES, u.CHANNEL_NOOB, u.PSEUDO_CHANNEL_PRIVATE, u.PSEUDO_CHANNEL_INFO, u.PSEUDO_CHANNEL_FIGHT_LOG, u.CHANNEL_ADS, u.CHANNEL_ARENA])
        }), e.push({
            className: "preset2",
            channels: N.getValue(re + ee, [u.PSEUDO_CHANNEL_FIGHT_LOG])
        }), e.push({
            className: "preset3",
            channels: N.getValue(re + te, [u.PSEUDO_CHANNEL_PRIVATE])
        }), e.push({
            className: "preset4",
            channels: N.getValue(re + ie, [u.CHANNEL_GUILD, u.CHANNEL_SALES, u.CHANNEL_SEEK])
        }), e.push({
            className: "preset5",
            channels: N.getValue(re + ne, [u.PSEUDO_CHANNEL_NPC_LOG])
        }), this.presets || this._createPresets(e), this._updatePresets(e)
    }, n.prototype._showMsgAsBubble = function(e, t) {
        if (e.channel === J) return !1;
        if ("ChatAdminServerMessage" === e._messageType) return !1;
        if (window.gui.playerData.isFighting && !W.showSpeechBubbleInFight) return !1;
        var i = window.actorManager.getActor(e.senderId);
        if (!i) return !1;
        window.gui.newSpeechBubble({
            actor: i,
            msg: e.content,
            objectItems: e.objects,
            channel: e.channel,
            decodeAllPages: t,
            senderId: e.senderId,
            senderName: e.senderName
        });
        var n = q.getOpenWindows();
        return !(n.length >= 2) && (1 !== n.length || "worldMap" === n[0] && !q.getWindow("worldMap")
            .isMaximized())
    }, n.prototype._addMsgToChat = function(e, t) {
        function i() {
            setTimeout(function() {
                n._refreshScroller(!0)
            }, K)
        }
        var n = this;
        if (!e.getDom) return void console.error(new Error("Chat wrong object"));
        var o;
        o = e.getDom(function() {
            i()
        }), this._logChat.appendChild(o);
        var a = this.historyBuffers[t].push(e);
        return a && this._logChat.removeChild(a.getDom(function() {
            i()
        })), i()
    }, n.prototype._addTextNotification = function(e, t) {
        return e.getDom ? e.getDom(function(e) {
            window.gui.textNotification.add(e, {
                channel: t
            })
        }) : void console.error(new Error("Chat wrong object for bubble"))
    }, n.prototype._logNewMessage = function(e, t) {
        var i = t || {},
            n = i.isCopy || !1,
            o = window.gui.playerData.socialData.isIgnored(e.senderAccountId);
        if (!("ChatAdminServerMessage" !== e._messageType && e.channel !== J && o || this.p2p.processMsg(e, n))) {
            var a = n || d.isChannelSelective(e.channel, e.senderId);
            e.content = this.censor.filterCensoredWords(e.content), s(e);
            var r = e.content.match(/\/([a-zA-Z]+),[b|m]essage:([^\\}]*)/),
                c = new f(console, window.gui.databases.ChatChannels, e, n, a);
            if (this._addMsgToChat(c, e.channel), !r && this.isChannelEnabledInPreset(e.channel) && !this._showMsgAsBubble(e, a)) {
                var l = new f(console, window.gui.databases.ChatChannels, e, n, a, (!0));
                this._addTextNotification(l, e.channel)
            }
        }
    }, n.prototype._logServerMsgWithObject = function(e, t) {
        c(e.objects), e.content = this.linkHelper.replaceLinksReceived(e.content, e.objects), this._logNewMessage(e, {
            isCopy: t
        })
    }, n.prototype._logServerText = function(e, t) {
        t = t || {};
        var i = void 0 !== t.channel ? t.channel : u.PSEUDO_CHANNEL_INFO,
            n = t.parentClassName,
            o = this;
        setTimeout(function() {
            var a = new b(console, window.gui.databases.ChatChannels, e, i, n, t.important);
            o._addTextNotification(a, i)
        }, 0), setTimeout(function() {
            var a = new b(console, window.gui.databases.ChatChannels, e, i, n, t.important);
            o._addMsgToChat(a, i)
        }, 0)
    }, n.prototype.logNPCMsg = function(e, t, i) {
        var n = new b(console, window.gui.databases.ChatChannels, e, u.PSEUDO_CHANNEL_NPC_LOG, null, (!1), {
            npcId: t,
            npcName: i,
            showChannelName: !0
        });
        this._addMsgToChat(n, u.PSEUDO_CHANNEL_NPC_LOG)
    }, n.prototype.logNPCReplyMsg = function(e) {
        var t = window.gui.playerData,
            i = new b(console, window.gui.databases.ChatChannels, e, u.PSEUDO_CHANNEL_NPC_LOG, null, (!1), {
                playerId: t.id,
                playerName: t.characterBaseInformations.name,
                showChannelName: !0
            });
        this._addMsgToChat(i, u.PSEUDO_CHANNEL_NPC_LOG)
    }, n.prototype.logMsg = function(e, t, i, n) {
        if (void 0 === t && (t = u.PSEUDO_CHANNEL_INFO), !this.isChannelEnabledInPreset(t)) {
            var o = new b(console, window.gui.databases.ChatChannels, e, t, i);
            return this._addMsgToChat(o, t)
        }
        this._logServerText(e, {
            channel: t,
            parentClassName: i,
            important: n
        })
    }, n.prototype.logError = function(e, t) {
        this._logServerText(e, {
            channel: Z,
            important: t
        })
    }, n.prototype.insertLink = function(e, t) {
        this.chatInput.insertLink(e, t)
    }, n.prototype._refreshScroller = function(e) {
        var t = !this.logScroller.canScrollDown();
        return this.logScroller.refresh(), e && !t ? this.logScroller.notify() : void this.logScroller.goToBottom()
    }, n.prototype._refreshPresetButtonsSize = function(e) {
        if (this.presetButtons) {
            var t = V - (X - e);
            this.presetButtons.setStyle("height", Math.min(t, V) + "px")
        }
    }, n.prototype._togglePresetChannels = function(e) {
        if (this.channelsLists.toggleDisplay(), !this.channelsLists.isVisible()) return this._refreshScroller();
        var t = this.presets[e],
            i = O(t.channelsList, t.element);
        t.channelsList.setStyles({
            left: i.x + "px",
            top: i.y + "px"
        })
    }, n.prototype._setActivePreset = function(e) {
        this.activePreset = e, this.channelsLists.hide();
        for (var t = 0; t < this.presets.length; t++) {
            var i = this.presets[t];
            i.element.toggleClassName("on", t === e), i.channelsList.toggleDisplay(t === e)
        }
        this._updateLogFilter(), this._refreshScroller()
    }, n.prototype.isChannelEnabledInPreset = function(e) {
        var t = window.gui.scenarioManager.isBehaviourEnabled(H.DISABLE_BEGINNER_CHANNEL);
        if (t && e === u.CHANNEL_NOOB) return !1;
        if (!this.presets) return !0;
        var i = this.presets[this.activePreset].channels;
        return i.indexOf(e) !== -1
    }, n.prototype._updateLogFilter = function() {
        for (var e = window.gui.scenarioManager.isBehaviourEnabled(H.DISABLE_BEGINNER_CHANNEL), t = this.presets[this.activePreset].channels, i = Object.keys(u)
                .length, n = 0; n <= i; n++) !e || n !== u.CHANNEL_NOOB && n !== u.CHANNEL_SALES && n !== u.CHANNEL_SEEK ? this._logChat.toggleClassName("showChannel" + n, t.indexOf(n) !== -1) : this._logChat.toggleClassName("showChannel" + n, !1)
    }, n.prototype._toggleTopChatBar = function(e) {
        this.chatInput.formChat.toggleClassName("formChatBottom", !e)
    }, n.prototype._toggleChatTimestampDisplay = function(e) {
        e ? this.delClassNames("hiddenChatTimestamp") : this.addClassNames("hiddenChatTimestamp")
    }, n.prototype._setMessageHandlers = function() {
        function e(e) {
            var t = n.playerData.characters.canControlCharacterId(e.id);
            i.yourTurnButton.toggleDisplay(t)
        }

        function t() {
            i.yourTurnButton.hide()
        }
        var i = this,
            n = window.gui,
            o = window.dofus.connectionManager;
        n.on("connected", function() {
            i._initializeAtConnection()
        }), n.on("gameOptionChanged", function(e) {
            switch (e.gameOptionId) {
                case "chatTimestamp":
                    i._toggleChatTimestampDisplay(e.value);
                    break;
                case "topChatBar":
                    i._toggleTopChatBar(e.value)
            }
        }), o.on("EnabledChannelsMessage", function(e) {
            i._initializeEnabledChannels(e.channels, e.disallowed)
        }), o.on("ChatServerWithObjectMessage", function(e) {
            i._logServerMsgWithObject(e, !1)
        }), o.on("ChatServerCopyWithObjectMessage", function(e) {
            i._logServerMsgWithObject(e, !0)
        }), o.on("ChatServerMessage", function(e) {
            i._logNewMessage(e)
        }), o.on("ChatTaggedServerMessage", function(e) {
            i._logNewMessage(e)
        }), o.on("EntityTalkMessage", function(e) {
            var t = window.actorManager.getActorFromNpcId(e.entityId);
            window.gui.newSpeechBubble({
                actor: t,
                msg: e.text,
                isNonChat: !0
            })
        }), o.on("ChatAdminServerMessage", function(e) {
            i._logNewMessage(e)
        }), o.on("ChatServerCopyMessage", function(e) {
            i._logNewMessage(e, {
                isCopy: !0
            })
        }), o.on("BasicWhoIsMessage", function(e) {
            e.verbose && i._logServerText(B(e))
        }), o.on("BasicWhoIsNoMatchMessage", function(e) {
            i._logServerText(v("ui.common.playerNotFound", e.search))
        }), o.on("ChatUpdateMessage", function(e) {
            var t = i._searchMessage(e.id);
            t && (e.type === p.REMOVE ? t.deleteContent() : e.type === p.MARK_REMOVED ? t.updateMessage(e.type) : console.error(new Error("type: " + e.type + " unknown.")))
        }), o.on("HelpersOnlineMessage", function(e) {
            if (e.playerIds && e.playerIds.length > 0) {
                i._logServerText(v("tablet.chat.helpers.connected", e.playerIds.length));
                for (var t = 0, n = e.playerIds.length; t < n; t++) i._logServerText("{player," + e.playerNames[t] + "," + e.playerIds[t] + "}")
            } else i._logServerText(v("tablet.chat.helpers.none"))
        }), o.on("CharacterExperienceGainMessage", function(e) {
            e.experienceCharacter && i.logMsg(v("ui.stats.xpgain.mine", G.intToString(e.experienceCharacter))), e.experienceGuild && i.logMsg(v("ui.stats.xpgain.guild", G.intToString(e.experienceGuild))), e.experienceIncarnation && i.logMsg(v("ui.stats.xpgain.incarnation", G.intToString(e.experienceIncarnation))), e.experienceMount && i.logMsg(v("ui.stats.xpgain.mount", G.intToString(e.experienceMount)))
        }), n.fightManager.on("fightEnterPreparation", function() {
            i.deactivate()
        }), n.fightManager.on("fightStart", function() {
            i.yourTurnButton.hide(), i.setDisplayMode(ae.FIGHT)
        }), n.fightManager.on(A.FIGHT_END, function() {
            t(), i.setDisplayMode(ae.ROLEPLAY)
        }), n.on("GameFightTurnStartMessage", e), n.on("GameFightTurnResumeMessage", e), n.on("GameFightTurnStartSlaveMessage", e), n.on("GameFightTurnEndMessage", t), n.on("resize", function() {
            i._resize()
        }), n.on("disconnect", function() {
            i.deactivate()
        }), T.on("show", function() {
            i._checkOrientation(), i.setDimensions(), window.gui.fixAndroidOrientation()
        }), T.on("hide", function() {
            i._checkOrientation()
        }), window.addEventListener("orientationchange", function() {
            i._onOrientationChange()
        }), window.gui.on("iOSWebviewRescaled", function() {
            i._onOrientationChange()
        }), window.gui.scenarioManager.on("stepChanged", function() {
            i._updateLogFilter()
        }), o.on("AchievementFinishedMessage", function(e) {
            e.id === U.ASTRUB_EXPLORED_ACHIEVEMENT && i._updateLogFilter()
        })
    }, n.prototype._searchMessage = function(e) {
        for (var t in this.historyBuffers)
            if (this.historyBuffers.hasOwnProperty(~~t))
                for (var i = this.historyBuffers[~~t], n = i.getBuffer() || [], o = 0; o < n.length; o += 1) {
                    var a = n[o];
                    if (a && a.getId() === e) return a
                }
        return null
    }, n.prototype.setDisplayMode = function(e) {
        if (this.displayMode !== e) {
            if (!this.active) return void(this.displayMode = e);
            this.removeDisplayMode(), this.displayMode = e, this.addDisplayMode(), this.setDimensions()
        }
    }, n.prototype.removeDisplayMode = function() {
        switch (this.displayMode) {
            case ae.FIGHT:
                window.gui.timeline.restoreFighterList(), this.delClassNames("fightMode")
        }
    }, n.prototype.addDisplayMode = function() {
        this.displayMode === ae.FIGHT && (this.addClassNames("fightMode"), window.gui.timeline.appendFighterListTo(this.timelineBox))
    }, n.prototype._onOrientationChange = function() {
        this.active && !window.gui.isPortraitMode() ? this.deactivate() : window.gui.isPortraitMode() && this.activate(), this._checkOrientation(), this.setDimensions()
    }, n.prototype._checkOrientation = function() {
        if (window.gui.isPortraitMode()) {
            var e = window.gui.getPortraitViewport();
            return this.logWrapper.setStyles({
                width: e.width + "px",
                height: e.height + "px"
            }), window.gui.setPortraitScale(), T.refreshResizableBody(), this.toggleClassName("portraitMode", !0), void this._refreshScroller()
        }
        this.setStyles({
            webkitTransform: "translate3d(0, 0, 0)"
        }), this.toggleClassName("portraitMode", !1), window.gui.setLandscapeScale()
    }, n.prototype.setDimensions = function() {
        if (window.gui.isPortraitMode()) return void this._refreshScroller();
        var e = parseInt(this.logWrapper.getComputedStyle("left"), 10) || 0,
            t = parseInt(this.logWrapper.getComputedStyle("top"), 10) || 0,
            i = g.windowFullScreenWidth - e,
            n = g.windowFullScreenHeight - t;
        switch (this.displayMode) {
            case ae.FIGHT:
                this.logWrapper.windowWidth = g.screenWidth;
                var o = g.physicalScreenHeight * g.physicalToViewportRatio - T.getHeight(),
                    a = Math.max(Q, N.getValue("ChatHeightForFight", o));
                N.setValue("ChatHeightForFight", a), this.logWrapper.windowHeight = a, this.logWrapper.setWidthLock(!0);
                break;
            default:
                var r = Math.max(j, Math.round(.45 * g.mapWidth)),
                    s = Math.max(Y, Math.round(.45 * g.mapHeight)),
                    c = N.getValue("ChatForRP", {
                        width: r,
                        height: s
                    });
                this.logWrapper.windowWidth = Math.min(c.width, i), this.logWrapper.windowHeight = c.height, this.logWrapper.setWidthLock(!1)
        }
        this.logWrapper.windowHeight = Math.min(this.logWrapper.windowHeight, n), this.logWrapper.setStyles({
            width: this.logWrapper.windowWidth + "px",
            height: this.logWrapper.windowHeight + "px"
        }), this._refreshScroller(), this._refreshPresetButtonsSize(this.logWrapper.windowHeight)
    }, n.prototype.startPrivateMessage = function(e, t) {
        this.chatInput.startPrivateMessage(e, t), this.activate()
    }, n.prototype.activate = function() {
        var e = this;
        window.gui.isPortraitMode() ? T.disableFocusOnInput(!0) : T.disableFocusOnInput(!1), this.addClassNames("open"), this.active = !0, F("WINDOW_OPEN"), M.isPhoneGap || this.setDimensions(), this.addDisplayMode(), this._refreshScroller(), window.gui.textNotification && window.gui.textNotification.hide();
        var t = window.gui.isPortraitMode() ? 0 : 200;
        L.tween(this, {
            webkitTransform: "translate3d(0, 0, 0)"
        }, {
            time: t,
            delay: 0,
            easing: "ease-out"
        }, function() {
            e.chatInput.focus()
        }), T.setAutomaticHide(!1)
    }, n.prototype.deactivate = function() {
        if (this.active) {
            this.active = !1, this.chatInput.blur(), F("WINDOW_CLOSE");
            var e = this,
                t = window.gui.isPortraitMode() ? 0 : 200;
            L.tween(this, {
                webkitTransform: "translate3d(0, -" + this.logWrapper.windowHeight + "px, 0)"
            }, {
                time: t,
                delay: 0,
                easing: "ease-out"
            }, function() {
                e.removeDisplayMode(), e.delClassNames("open")
            }), window.gui.textNotification && window.gui.textNotification.show(), this.channelsLists && this.channelsLists.hide(), this.emit("closed"), T.setAutomaticHide(!0)
        }
    }, n.prototype._resize = function() {
        var e = !this.logWrapper.windowHeight;
        this.setDimensions(), e && this.deactivate()
    }
}
