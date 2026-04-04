function(e, t, i) {
    function n() {
        a.call(this, {
            window: {
                className: "SocialWindow",
                positionInfo: {
                    top: 40,
                    left: 80,
                    right: 40,
                    bottom: 40
                }
            }
        }), this.addTab("friends", new d, r("ui.common.friends")), this.addTab("guild", new u, r("ui.common.guild"), {
            part: 2,
            subPart: 9
        }), this.addTab("alliance", new c, r("ui.common.alliance")), this.addTab("spouse", new p, r("ui.common.spouse", 0)), this.addTab("directory", new h, r("ui.common.directory"), {
            part: 2,
            subPart: 9
        }), this.closedWithGuildFightLeaveRequest = !1, this.on("open", function(e) {
            this.openTab(e.tabId, e.tabParams, {
                delayOpenedEvent: !0,
                forceOpen: !0
            })
        }), this.on("close", function() {
            var e, t = window.gui.playerData.id;
            e = s.isPlayerDefending(s.entityType.taxCollector, t), e && s.playerAutoKick(s.entityType.taxCollector, e), e = s.isPlayerDefending(s.entityType.prism, t), e && s.playerAutoKick(s.entityType.prism, e)
        }), b.on("gameContextChanged", this.onGameContextChanged.bind(this)), this._setupEvents()
    }
    i(1195);
    var o = i(56)
        .inherits,
        a = i(1045),
        r = i(17)
        .getText,
        s = i(524),
        c = i(1196),
        l = i(549),
        d = i(1207),
        u = i(1209),
        p = i(1227),
        h = i(1229),
        f = i(52),
        b = i(103);
    o(n, a), e.exports = n, n.prototype.onGameContextChanged = function() {
        b.isFightMode && f.close(this.id)
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.dofus.connectionManager;
        t.on("ClientUIOpenedMessage", function(t) {
            e._clientUiOpen(t.type)
        }), t.on("ClientUIOpenedByObjectMessage", function(t) {
            e._clientUiOpen(t.type)
        })
    }, n.prototype._clientUiOpen = function(e) {
        if (window.gui.playerData.guild.hasGuild()) {
            var t;
            switch (e) {
                case l.CLIENT_UI_TELEPORT_GUILD_PADDOCK:
                    t = "paddocks";
                    break;
                case l.CLIENT_UI_TELEPORT_GUILD_HOUSE:
                    t = "houses";
                    break;
                default:
                    return
            }
            this.openState ? (this.openTab("guild", {
                tabId: t
            }), f.focusWindow(this.id)) : f.open(this.id, {
                tabId: "guild",
                tabParams: {
                    tabId: t
                }
            })
        }
    }
}
