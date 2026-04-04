function(e, t, i) {
    function n(e, t) {
        d.call(this), this.linkHelper = t, this.channelMap = window.gui.databases.ChatChannels, this.outgoingChannel = w, this.outgoingChannelMenu = null, this.sendingEnabledChannels = null, this.sendingDisallowedChannels = null, this.previousInput = "", this.previousPrivateReceiver = "", this.sentMessageHistory = new g, this._createElements(e), this._setMessageHandlers()
    }

    function o(e, t) {
        var i = e.getValue(),
            n = i.substr(0, t.length);
        n === t && e.setValue(i.substr(t.length))
    }

    function a(e, t) {
        var i = e.getValue();
        i.substr(0, t.length) !== t && e.setValue(t + i)
    }
    var r = i(86),
        s = i(504),
        c = i(505),
        l = i(580),
        d = i(59)
        .EventEmitter,
        u = i(17)
        .getText,
        p = i(64),
        h = i(56)
        .inherits,
        f = i(581),
        b = i(503),
        m = i(583),
        M = i(112),
        g = i(585),
        _ = i(586),
        A = i(587),
        O = i(88),
        v = i(452),
        y = i(588),
        z = [s.CHANNEL_GLOBAL, s.CHANNEL_TEAM, s.CHANNEL_GUILD, s.CHANNEL_ALLIANCE, s.CHANNEL_PARTY, s.CHANNEL_NOOB, s.CHANNEL_ADMIN, s.PSEUDO_CHANNEL_PRIVATE, s.CHANNEL_ARENA, s.CHANNEL_SALES, s.CHANNEL_SEEK],
        w = s.CHANNEL_GLOBAL,
        T = s.PSEUDO_CHANNEL_PRIVATE,
        C = /^\/([A-Za-z]+)/,
        I = {
            s: w,
            w: T,
            t: s.CHANNEL_TEAM,
            g: s.CHANNEL_GUILD,
            a: s.CHANNEL_ALLIANCE,
            p: s.CHANNEL_PARTY,
            i: s.CHANNEL_NOOB,
            q: s.CHANNEL_ADMIN,
            k: s.CHANNEL_ARENA,
            b: s.CHANNEL_SALES,
            r: s.CHANNEL_SEEK
        };
    h(n, d), e.exports = n, n.prototype.initializeAtConnection = function() {
        this.statusIndicator.initialize(), this.previousInput = "", this.previousPrivateReceiver = "", this._selectOutgoingChannel(w, !0), this.sendingEnabledChannels = z.concat(), this.sendingDisallowedChannels = []
    }, n.prototype.initializeEnabledChannels = function(e, t) {
        this.sendingEnabledChannels = e, this.sendingDisallowedChannels = t, this._initOutgoingChannelMenu()
    }, n.prototype.clearSentMessageHistory = function() {
        this.sentMessageHistory.reset()
    }, n.prototype._createElements = function(e) {
        function t() {
            var e = i.sentMessageHistory.getCurrentEntry();
            i._setInput(e.message), i.linkHelper.linksToReplace = e.links
        }
        this.formChat = e.createChild("div", {
            className: "formChat"
        }), this.statusIndicator = new A(this.formChat), this._createChannelSelector(this.formChat), this.inputChat = this.formChat.appendChild(new f({
            className: "inputChat",
            attr: {
                maxlength: M.USER_MAX_CHAT_LEN
            }
        }));
        var i = this;
        this.inputChat.on("validate", function() {
            return "" === i.inputChat.getValue() ? v.hide() : void i._submit()
        });
        var n = this.formChat.appendChild(new r({
                className: "historyUp",
                scaleOnPress: !0,
                hidden: !0
            }, function() {
                i.sentMessageHistory.goBack(), t()
            })),
            o = this.formChat.appendChild(new r({
                className: "historyDown",
                scaleOnPress: !0,
                hidden: !0
            }, function() {
                i.sentMessageHistory.goForward(), t()
            }));
        this.formChat.appendChild(new r({
            className: "historyButton",
            scaleOnPress: !0
        }, function() {
            n.toggleDisplay(), o.toggleDisplay()
        })), this.formChat.appendChild(new r({
            className: ["sendButton", "greenButton"],
            addIcon: !0
        }, function() {
            i._submit()
        }))
    }, n.prototype._createChannelSelector = function(e) {
        function t() {
            i._selectOutgoingChannel(this.id), i.inputChat.focus()
        }
        for (var i = this, n = this.outgoingChannelMenu = [], o = 0; o < z.length; o++) {
            var a = this.channelMap[z[o]];
            n.push({
                id: a.id,
                caption: a.nameId + " (" + a.shortcut + ")",
                cb: t,
                ticked: a.id === this.outgoingChannel
            })
        }
        var r = this.buttonTouchZone = e.createChild("div", {
            className: "buttonTouchZone"
        });
        this.outgoingChannelButtonBg = e.createChild("div", {
            className: "buttonBackground"
        }), this.outgoingChannelButton = e.createChild("div", {
            className: "outgoingChannelButton"
        }), O.addTooltip(r, u("ui.option.chat")), r.on("tap", function() {
            var e = this.rootElement.getBoundingClientRect();
            window.gui.openContextualMenu("generic", {
                title: u("ui.option.currentChannel"),
                actions: i.outgoingChannelMenu
            }, {
                x: e.left + e.width,
                y: e.top
            })
        })
    }, n.prototype._showNotification = function(e) {
        y.showNotification(e, this.inputChat)
    }, n.prototype.showNotification = n.prototype._showNotification, n.prototype._initOutgoingChannelMenu = function() {
        for (var e = this.outgoingChannelMenu, t = 0; t < e.length; t++) {
            var i = e[t];
            i.hidden = this.sendingEnabledChannels.indexOf(i.id) < 0, i.ticked = i.id === this.outgoingChannel
        }
    }, n.prototype._getOutgoingChannelMenuOption = function(e) {
        for (var t = this.outgoingChannelMenu, i = 0; i < t.length; i++)
            if (t[i].id === e) return t[i]
    }, n.prototype._setChannelEnabled = function(e, t) {
        var i = this._getOutgoingChannelMenuOption(e);
        i && (i.hidden = !t);
        var n = this.channelMap[e].nameId,
            o = this.sendingEnabledChannels,
            a = o.indexOf(e);
        if (a !== -1) {
            if (this._showNotification(u("tablet.chat.disablingChannel", n)),
                t) return console.warn("Chat channel already enabled");
            o.splice(a, 1)
        } else {
            if (this._showNotification(u("tablet.chat.enablingChannel", n)), !t) return console.warn("Chat channel already disabled");
            o.push(e)
        }
    }, n.prototype.isChannelEnabledForSending = function(e) {
        return this.sendingEnabledChannels.indexOf(e) !== -1
    }, n.prototype.isChannelAllowedForSending = function(e) {
        return this.sendingDisallowedChannels.indexOf(e) === -1
    }, n.prototype._selectOutgoingChannel = function(e, t) {
        var i = this.outgoingChannel;
        (e !== i || t) && (t && e !== T && this.inputChat.setValue(""), i === T && o(this.inputChat, this.previousPrivateReceiver + " "), e === T && this.previousPrivateReceiver && a(this.inputChat, this.previousPrivateReceiver + " "), this.inputChat.setClassNames(["inputChat", "inputBox", "channel" + e]), this.outgoingChannelButtonBg.setClassNames(["buttonBackground", "outgoingChannel" + e]), e === T && (this.previousPrivateReceiver ? this._showNotification(u("tablet.chat.enteringPrivateChannel", this.previousPrivateReceiver)) : this._showNotification(u("tablet.chat.privateReceiverHelp"))), this._getOutgoingChannelMenuOption(i)
            .ticked = !1, this._getOutgoingChannelMenuOption(e)
            .ticked = !0, this.outgoingChannel = e)
    }, n.prototype._setMessageHandlers = function() {
        var e = this,
            t = window.dofus.connectionManager;
        t.on("ChannelEnablingChangeMessage", function(t) {
            e._setChannelEnabled(t.channel, t.enable)
        }), t.on("ChatErrorMessage", function(t) {
            e._showNotification(t.reason), e._setInput(e.previousInput, !0), e.sentMessageHistory.removeMessage()
        })
    }, n.prototype.insertLink = function(e, t) {
        var i = this.linkHelper.newLinkForSending(e, t);
        this.inputChat.setValue(this.inputChat.getValue() + i)
    }, n.prototype.focus = function() {
        this.inputChat.focus()
    }, n.prototype.blur = function() {
        this.inputChat.blur()
    }, n.prototype.sendChatCommand = function(e) {
        "/" !== e.trim()
            .charAt(0) && (e = "/s " + e), this.inputChat.setValue(e), this._submit()
    }, n.prototype._submit = function() {
        p.recordActivity();
        var e = this.inputChat.getValue()
            .trim(),
            t = this.outgoingChannel,
            i = null,
            n = C.exec(e);
        if (n) {
            n = n[1].toLowerCase();
            var o = e.split(" ")
                .slice(1),
                a = _(n, o);
            if (a) return void this._setInput("");
            if (t = I[n], void 0 === t && "me" !== n && "think" !== n) return this._showNotification(u("ui.console.notfound", e.substr(1)
                .split(" ")[0]));
            e = e.substr(n.length + 2)
        }
        if (t === T) {
            var r = e.indexOf(" ");
            if (i = e.substr(0, r), e = e.substr(r), !i || !e || i.length < M.MIN_NICK_LEN || i.length > M.MAX_NICK_LEN) return this._showNotification(u("tablet.chat.privateReceiverHelp"));
            this.previousPrivateReceiver = i
        }
        if (e = e.trim()) {
            this.previousInput = e;
            var s = {
                    allPagesAllowed: b.isChannelSelective(t, i)
                },
                d = c.getUnsendableCharacters(e, s);
            if (d.length) {
                var h = d[0] + " (" + d[0].codePointAt()
                    .toString(16) + ")";
                return this._showNotification(u("tablet.chat.unsendableChars", h))
            }
            e = c.encode(e, s), e = m(e);
            var f = [];
            e = this.linkHelper.prepareForSending(e, f), "me" !== n && "think" !== n || (e = "/" + n + ",message:" + e);
            var g = l.sendMessage(e, t, i, f);
            if (g) return this._showNotification(g);
            this.sentMessageHistory.addMessage(this.previousInput, this.linkHelper.previousLinks), this._setInput(""), this.emit("sentChatMsg")
        }
    }, n.prototype._setInput = function(e, t) {
        this.outgoingChannel === T && this.previousPrivateReceiver ? (this.inputChat.setValue(this.previousPrivateReceiver + " " + e), t && this.inputChat.setCaretPosition(this.previousPrivateReceiver.length)) : this.inputChat.setValue(e), t && this.linkHelper.undoPrepareForSending()
    }, n.prototype.startPrivateMessage = function(e, t) {
        t && (e = "*" + e), this.outgoingChannel === T && e !== this.previousPrivateReceiver && o(this.inputChat, this.previousPrivateReceiver + " "), this.previousPrivateReceiver = e, this._selectOutgoingChannel(T, !0)
    }
}
