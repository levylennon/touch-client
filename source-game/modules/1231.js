function(e, t, i) {
    function n() {
        h.call(this, "div", {
            className: "FellowGuildsWindow"
        }), this._isListening = !1, this._reset(), this.on("open", this._onOpen), this.on("destroy", this._reset)
    }

    function o(e) {
        return u(e.guildName)
            .indexOf(this.searchedText) !== -1
    }
    i(1232);
    var a = i(527),
        r = i(437),
        s = i(17)
        .getText,
        c = i(56)
        .inherits,
        l = i(91)
        .playUiSound,
        d = i(1233),
        u = i(16)
        .simplifyString,
        p = i(765),
        h = i(72),
        f = 200,
        b = 99999;
    c(n, h), e.exports = n, n.prototype._reset = function() {
        this._hasDom = !1, this._queryTable && this._queryTable.reset(), this._queryTable = null
    }, n.prototype._onOpen = function() {
        this._hasDom || this._setupDom(), this._isListening || this._setupListeners()
    }, n.prototype._setupDom = function() {
        this._hasDom = !0, this._queryTable = new d(this), this._queryTable.createMinAndMaxBox("Level", s("ui.common.level"), f), this._queryTable.createMinAndMaxBox("MemberCount", s("ui.common.members"), b), this._queryTable.createTextSearchBox("text"), this._queryTable.createSearchAndResetButton(this._sendQuery.bind(this));
        var e = new p([{
            id: "emblem",
            format: function(e) {
                var t = new r({
                    width: 40,
                    height: 40
                });
                return t.setValue(e.guildEmblem, !0), t
            }
        }, {
            id: "guildName",
            header: s("ui.common.name"),
            sort: !0
        }, {
            id: "guildLevel",
            header: s("ui.common.level"),
            sort: !0
        }, {
            id: "nbMembers",
            header: s("ui.common.members"),
            sort: !0
        }], "guildId");
        this._queryTable.appendTable(e, o), e.on("rowTap", function(e, t) {
            a.openGuildCard(t.guildId), l("GEN_BUTTON")
        })
    }, n.prototype._setupListeners = function() {
        this._isListening = !0;
        var e = window.dofus.connectionManager,
            t = this;
        e.on("_socialDataErrorMessage", function(e) {
            t._hasDom && "guildList" === e.type && t._handleError()
        }), e.on("GuildListMessage", function(e) {
            t._hasDom && t._receiveList(e.guilds, e.truncated)
        })
    }, n.prototype._sendQuery = function(e) {
        if (this._hasDom) {
            this._queryTable.prepareForResults();
            var t = window.gui.serversData.connectedServerId;
            window.dofus.send("socialDataRequest", {
                type: "guildList",
                serverId: t,
                minLevel: e.minLevel || 0,
                minMemberCount: e.minMemberCount || 0,
                maxLevel: e.maxLevel || 0,
                maxMemberCount: e.maxMemberCount || 0,
                text: e.text || ""
            })
        }
    }, n.prototype._handleError = function() {
        this._queryTable.showError(this._sendQuery.bind(this))
    }, n.prototype._receiveList = function(e, t) {
        this._queryTable.loadResults(e, t)
    }
}
