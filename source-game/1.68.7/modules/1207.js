function(e, t, i) {
    function n() {
        function e(e, t, i, n) {
            window.gui.openConfirmPopup({
                title: u("ui.common.confirm"),
                message: u("tablet.ui.social.playerRemoveConfirmation", i),
                cb: function(i) {
                    i && window.dofus.sendMessage(e, {
                        accountId: t,
                        session: n
                    })
                }
            })
        }
        l.call(this, "div", {
            className: "FriendsWindow",
            name: "friends"
        });
        var t = this;
        this._domInit = !1, this.ListAddFailureEnum = {
            0: u("ui.common.unknownFail"),
            1: u("ui.social.friend.addFailureListFull"),
            2: u("ui.social.friend.addFailureNotFound"),
            3: u("ui.social.friend.addFailureEgocentric"),
            4: u("ui.social.friend.addFailureAlreadyInList")
        }, this.tables = {}, this.tableParams = [{
            id: "playerIcon"
        }, {
            id: "nameCol",
            header: u("ui.common.name")
        }, {
            id: "level",
            header: u("ui.common.level")
        }, {
            id: "guild",
            header: u("ui.common.guild")
        }, {
            id: "achievement",
            header: u("ui.achievement.achievement")
        }, {
            id: "stateIcon"
        }, {
            id: "button"
        }], this.deleteTapCallback = {
            friends: function(t, i) {
                e("FriendDeleteRequestMessage", t, i)
            },
            enemies: function(t, i) {
                e("IgnoredDeleteRequestMessage", t, i, !1)
            },
            ignored: function(t, i) {
                e("IgnoredDeleteRequestMessage", t, i, !0)
            }
        }, this.once("open", function() {
            t._createDom(), t._setupEvents();
            var e = window.gui.playerData.socialData;
            for (var i in e.ignoredList) t.addPlayer(e.ignoredList[i], "ignored")
        }), this.on("open", function(e) {
            e = e || {}, t.tabs.openTab(e.tabId || 0), t.tables.friends.clearContent(), t.tables.enemies.clearContent(), window.dofus.sendMessage("FriendsGetListMessage"), window.dofus.sendMessage("IgnoredGetListMessage"), window.dofus.sendMessage("InviteCodeRequestMessage"), t._serverImage.setClassNames(["serverImage", "servId_" + window.gui.serversData.connectedServerId])
        }), window.gui.playerData.socialData.on("updateSponsoCode", function() {
            if (t._domInit) {
                t._sponsoCode.setText(window.gui.playerData.socialData.getSponsoCode());
                var e = window.gui.playerData.socialData.isOverused(),
                    i = u(e ? "ui.social.sponsoringDescriptionError" : "ui.social.sponsoringDescription");
                t._toggleSponsoCodeAvailability(!e), t._sponsoDesc.setText(i)
            }
        }), window.gui.playerData.socialData.on("updateSponsoAvailability", function() {
            t._domInit && t.tabs.toggleTabDisplay("sponsoring", window.gui.playerData.socialData.canSponso())
        })
    }

    function o(e, t) {
        var i = "FriendOnlineInformations" === e._type;
        return t.isConnected = i, t.accountId = e.accountId, t.characterId = e.playerId, t.name = e.playerName || e.uniqueNickname.toString(), t.nameText = e.uniqueNickname.getForDisplay() + (e.playerName ? " (" + e.playerName + ")" : ""), t.lastConnection = e.lastConnection, t
    }

    function a() {
        var e = this.myRow;
        e.isConnected ? window.gui.openContextualMenu("player", {
            playerId: e.characterId,
            accountId: e.accountId,
            playerName: e.name
        }) : window.gui.openContextualMenu("offlinePlayer", {
            playerId: e.characterId,
            playerName: e.name,
            hoursSinceLastConnection: e.lastConnection
        })
    }

    function r(e, t, i) {
        var n = e.createChild("div", {
                className: "addCharacter"
            }),
            o = n.createChild("div", {
                text: u("ui.common.addSomeone"),
                className: "addLabel"
            }),
            a = n.appendChild(new p({
                text: u("ui.common.add"),
                className: ["addButton", "greenButton"]
            })),
            r = n.appendChild(new b({
                className: "addInput",
                attr: {
                    type: "text"
                }
            }));
        return a.on("tap", function() {
            var e = r.getValue();
            if (e) {
                var n = {
                    name: e
                };
                i && (n.session = i), window.dofus.sendMessage(t, n), r.setValue("")
            }
        }), {
            addCharacterArea: n,
            label: o,
            textInput: r,
            button: a
        }
    }

    function s(e, t) {
        if (!e.hasOwnProperty("breed")) return console.error(new Error("Friends loadHeadImage: player has no breed")), void t.setStyle("backgroundImage", null);
        var i = "gfx/heads/SmallHead_" + e.breed + (e.sex ? 1 : 0) + ".png";
        m.preloadImage(i, function(e) {
            t.rootElement && t.setStyle("backgroundImage", e)
        })
    }
    i(1208);
    var c = i(56)
        .inherits,
        l = i(72),
        d = i(496),
        u = i(17)
        .getText,
        p = i(86),
        h = i(765),
        f = i(594),
        b = i(581),
        m = i(12),
        M = i(60),
        g = i(600),
        _ = i(440),
        A = i(88);
    c(n, l), e.exports = n, n.prototype._createDom = function() {
        var e = this.appendChild(new d);
        this.tabs = e, this.friendsPanel = this.createChild("div", {
            className: ["mainPanel", "friendsPanel"]
        }), this.enemiesPanel = this.createChild("div", {
            className: ["mainPanel", "enemiesPanel"]
        }), this.ignoredPanel = this.createChild("div", {
            className: ["mainPanel", "ignoredPanel"]
        }), this.sponsoPanel = this.createChild("div", {
            className: ["mainPanel", "sponsoPanel"]
        }), e.addTab(u("ui.common.friends"), this.friendsPanel, "friends"), e.addTab(u("ui.common.enemies"), this.enemiesPanel, "enemies"), e.addTab(u("ui.common.ignoreds"), this.ignoredPanel, "ignoreds"), e.addTab(u("ui.common.sponsoring"), this.sponsoPanel, "sponsoring"), e.toggleTabDisplay("sponsoring", !1), e.openTab(0), this._buildFriendsPanel(), this._buildEnemiesPanel(), this._buildIgnoredPanel(), this._buildSponsoPanel(), this._domInit = !0
    }, n.prototype._buildFriendsPanel = function() {
        var e = this,
            t = this.friendsPanel;
        r(t, "FriendAddRequestMessage"), this.tables.friends = t.appendChild(new h(this.tableParams, null, {
            clickable: !1
        })), this.tables.friends.on("rowTap", function() {
            window.gui.tooltipBox.closeTooltip()
        }), this.tables.friends.addFilter(function(t) {
            return !!t && (!!e.showFriendOfflineCheckbox.isActivate() || (!t.stateIcon || !t.stateIcon.hasClassName("offline")))
        });
        var i = M.getValue("showFriendOffline", !0),
            n = t.createChild("div", {
                className: "checkBoxes"
            });
        this.showFriendOfflineCheckbox = n.appendChild(new f(u("ui.social.showOfflinePerson"), {
            defaultValue: i
        }));
        var o = n.appendChild(new f(u("ui.social.warnWhenFriendsComeOnline"), {
            defaultValue: window.gui.playerData.socialData.onConnectNotification
        }));
        this.showFriendOfflineCheckbox.on("change", function(t) {
            e.tables.friends.filter(), M.setValue("showFriendOffline", t, 1)
        }), o.on("change", function(e) {
            window.dofus.sendMessage("FriendSetWarnOnConnectionMessage", {
                enable: e
            })
        })
    }, n.prototype._buildEnemiesPanel = function() {
        var e = this,
            t = this.enemiesPanel;
        r(t, "IgnoredAddRequestMessage", !1), this.tables.enemies = t.appendChild(new h(this.tableParams, null, {
            clickable: !1
        })), this.tables.enemies.on("rowTap", function() {
            window.gui.tooltipBox.closeTooltip()
        }), this.tables.enemies.addFilter(function(t) {
            return !!t && (!!e.showEnemyOfflineCheckbox.isActivate() || (!t.stateIcon || !t.stateIcon.hasClassName("offline")))
        });
        var i = M.getValue("showEnemyOffline", !0),
            n = t.createChild("div", {
                className: "checkBoxes"
            });
        this.showEnemyOfflineCheckbox = n.appendChild(new f(u("ui.social.showOfflinePerson"), {
            defaultValue: i
        })), this.showEnemyOfflineCheckbox.on("change", function(t) {
            e.tables.enemies.filter(), M.setValue("showEnemyOffline", t, 1)
        })
    }, n.prototype._buildIgnoredPanel = function() {
        r(this.ignoredPanel, "IgnoredAddRequestMessage", !0), this.tables.ignored = this.ignoredPanel.appendChild(new h(this.tableParams, null, {
            clickable: !1
        })), this.tables.ignored.on("rowTap", function() {
            window.gui.tooltipBox.closeTooltip()
        })
    }, n.prototype._toggleSponsoCodeAvailability = function(e) {
        return e ? this._sponsoCode.enable() : void this._sponsoCode.disable()
    }, n.prototype._buildSponsoPanel = function() {
        var e = this.sponsoPanel.createChild("div", {
            className: "leftWrapper"
        });
        this._serverImage = e.createChild("div", {
            className: "serverImage"
        }), e.createChild("div", {
            className: "borderEffect"
        });
        var t = this.sponsoPanel.createChild("div", {
                className: "rightWrapper"
            }),
            i = window.gui.playerData.socialData.isOverused(),
            n = u(i ? "ui.social.sponsoringDescriptionError" : "ui.social.sponsoringDescription");
        this._sponsoDesc = t.createChild("div", {
            text: n,
            className: "description"
        }), this._sponsoCode = t.createChild("div", {
            className: "sponsoCode"
        }), A.addTooltip(this._sponsoCode, u("ui.common.copied"), {
            openOnTap: !0
        }), this._toggleSponsoCodeAvailability(!i), this._sponsoCode.on("tap", function() {
            navigator.clipboard.writeText(window.gui.playerData.socialData.getSponsoCode())
        })
    }, n.prototype._updateStateIcon = function(e, t) {
        var i = e.stateIcon.getChild("stateIcon");
        if (i.delClassNames("offline", "fight", "smiley"), i.getStyle("backgroundImage") && i.setStyle("backgroundImage", ""), i.clearContent(), i.hide(), !e.isConnected) return i.addClassNames("offline"), void i.show();
        var n;
        if (t.hasOwnProperty("moodSmileyId") && t.moodSmileyId > 0) {
            n = t.moodSmileyId;
            var o = window.gui.databases.Smileys[n];
            if (!o) return console.error("Smiley " + n + " details are not available, it could not be displayed");
            i.addClassNames("smiley"), m.preloadImage("gfx/smilies/" + o.gfxId + ".png", function(e) {
                i.rootElement && (i.setStyle("backgroundImage", e), i.show())
            })
        }
        t.playerState === g.GAME_TYPE_FIGHT && (n ? i.appendChild(new l("div", {
            className: "smallFight"
        })) : (i.addClassNames("fight"), i.show()))
    }, n.prototype._updatePlayerRow = function(e, t) {
        var i = this.tables[e],
            n = t.accountId,
            a = i.getRow(n);
        if (a) {
            i.updateCell(n, "level", {
                level: t.level || "?"
            }), i.updateCell(n, "guild", {
                guild: t.guildInfo ? t.guildInfo.guildName : "?"
            }), i.updateCell(n, "achievement", {
                achievement: t.achievementPoints > 0 ? t.achievementPoints : "-"
            }), o(t, a);
            var r = a.isConnected;
            a.toggleClassName("offline", !r);
            var c = a.playerIcon.getChild("playerIcon");
            if (t.status) {
                var l = c.getChild("onlineStatusIcon");
                l.setClassNames("onlineStatusIcon", "status" + t.status.statusId)
            }
            var d = a.nameCol.getChild("name");
            d.setText(a.nameText);
            var u = c.getChild("alignmentSide")
                .getChild("headIcon");
            r && !u.getStyle("backgroundImage") && s(t, u), this._updateStateIcon(a, t)
        }
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui.playerData.socialData;
        window.gui.on("disconnect", function() {
            e.tables.ignored.clearContent()
        }), t.on("friendUpdate", function(t) {
            e._updatePlayerRow("friends", t)
        }), t.on("ignoredUpdate", function(t) {
            e._updatePlayerRow("ignored", t)
        }), t.on("enemyUpdate", function(t) {
            e._updatePlayerRow("enemies", t)
        }), t.on("newFriendList", function() {
            var i = t.friendsList;
            for (var n in i) e.addPlayer(i[n], "friends");
            var o = e.showFriendOfflineCheckbox;
            o.isActivate() ? o.activate() : o.deactivate()
        }), t.on("newEnemyList", function() {
            var i = t.enemiesList;
            for (var n in i) e.addPlayer(i[n], "enemies");
            var o = e.showEnemyOfflineCheckbox;
            o.isActivate() ? o.activate() : o.deactivate()
        }), t.on("friendAdded", function(t) {
            e.addPlayer(t, "friends")
        }), t.on("ignoredAdded", function(t) {
            e.addPlayer(t, "ignored")
        }), t.on("enemyAdded", function(t) {
            e.addPlayer(t, "enemies")
        }), t.on("friendDeleted", function(t) {
            e.deletePlayer(t, "friends")
        }), t.on("ignoredDeleted", function(t) {
            e.deletePlayer(t, "ignored")
        }), t.on("enemyDeleted", function(t) {
            e.deletePlayer(t, "enemies")
        })
    }, n.prototype.addPlayer = function(e, t) {
        var i = this,
            n = this.tables[t],
            r = e.guildInfo ? e.guildInfo.guildName : "?",
            c = window.gui.playerData.alignment,
            d = new p({
                name: "deleteButton",
                className: "greenButton"
            });
        d.on("tap", function() {
            i.deleteTapCallback[t](this.accountId, this.playerNameDisplay)
        }), d.accountId = e.accountId, d.playerNameDisplay = e.playerName || e.uniqueNickname.getForDisplay();
        var u = e.achievementPoints > 0 ? e.achievementPoints : "-",
            h = new p({
                name: "playerIcon",
                className: "playerIcon"
            }, a);
        h.createChild("div", {
            name: "onlineStatusIcon",
            className: ["onlineStatusIcon", e.status ? "status" + e.status.statusId : ""]
        });
        var f = h.createChild("div", {
            name: "alignmentSide",
            className: "alignmentSide"
        });
        e.alignmentSide !== _.ALIGNMENT_ANGEL && e.alignmentSide !== _.ALIGNMENT_EVIL || c.getSmallWingsUrl(e.alignmentSide, function(e) {
            f.rootElement && f.setStyle("backgroundImage", e)
        });
        var b = f.createChild("div", {
                className: "playerHead",
                name: "headIcon"
            }),
            m = new p({
                name: "name",
                text: " "
            }, a),
            M = n.updateRow({
                playerIcon: h,
                nameCol: m,
                level: e.level ? e.level : "?",
                guild: r,
                achievement: u,
                stateIcon: new l("div", {
                    name: "stateIcon",
                    className: "stateIcon"
                }),
                button: d
            }, e.accountId);
        o(e, M), h.myRow = M, m.myRow = M, m.setText(M.nameText);
        var g = M.isConnected;
        M.toggleClassName("offline", !g), this._updateStateIcon(M, e), g && s(e, b)
    }, n.prototype.deletePlayer = function(e, t) {
        var i = this.tables[t],
            n = i.rows.getChildren();
        e = parseInt(e, 10);
        for (var o = 0; o < n.length; o++)
            if (n[o].accountId === e) return i.delRow(e)
    }
}
