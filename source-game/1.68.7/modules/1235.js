function(e, t, i) {
    function n() {
        b.call(this, "div", {
            className: "FellowAlliancesWindow"
        }), this._isListening = !1, this._reset(), this.on("open", this._onOpen), this.on("destroy", this._reset)
    }

    function o(e) {
        var t = Math.floor(Date.now() / 1e3) - e.creationDate;
        return l.durationToHuman(t)
    }

    function a(e) {
        return h(e.allianceName)
            .indexOf(this.searchedText) !== -1 || e.allianceTag.toLowerCase()
            .indexOf(this.searchedText) !== -1
    }
    i(1236);
    var r = i(537),
        s = i(437),
        c = i(17)
        .getText,
        l = i(16),
        d = i(56)
        .inherits,
        u = i(91)
        .playUiSound,
        p = i(1233),
        h = i(16)
        .simplifyString,
        f = i(765),
        b = i(72),
        m = 99999,
        M = 9999,
        g = 9999;
    d(n, b), e.exports = n, n.prototype._reset = function() {
        this._hasDom = !1, this._queryTable && this._queryTable.reset(), this._queryTable = null
    }, n.prototype._onOpen = function() {
        this._hasDom || this._setupDom(), this._isListening || this._setupListeners()
    }, n.prototype._setupDom = function() {
        this._hasDom = !0, this._queryTable = new p(this), this._queryTable.createMinAndMaxBox("GuildCount", c("ui.social.guilds"), M), this._queryTable.createMinAndMaxBox("MemberCount", c("ui.common.members"), m), this._queryTable.createMinAndMaxBox("Subarea", c("ui.common.territory"), g), this._queryTable.createTextSearchBox("text"), this._queryTable.createSearchAndResetButton(this._sendQuery.bind(this));
        var e = new f([{
            id: "emblem",
            format: function(e) {
                var t = new s({
                    width: 40,
                    height: 40
                });
                return t.setValue(e.allianceEmblem, !0), t
            }
        }, {
            id: "allianceName",
            header: c("ui.common.name"),
            sort: !0
        }, {
            id: "allianceTag",
            header: c("ui.alliance.tag"),
            sort: !0
        }, {
            id: "creationDate",
            header: c("tablet.since"),
            format: o,
            sort: function(e, t) {
                return t.creationDate - e.creationDate
            }
        }, {
            id: "nbGuilds",
            header: c("ui.social.guilds"),
            sort: !0
        }, {
            id: "nbMembers",
            header: c("ui.common.members"),
            sort: !0
        }, {
            id: "nbSubarea",
            header: c("ui.common.territory"),
            sort: !0
        }], "allianceId");
        this._queryTable.appendTable(e, a), e.on("rowTap", function(e, t) {
            r.openAllianceCard(t.allianceId), u("GEN_BUTTON")
        })
    }, n.prototype._setupListeners = function() {
        this._isListening = !0;
        var e = window.dofus.connectionManager,
            t = this;
        e.on("_socialDataErrorMessage", function(e) {
            t._hasDom && "allianceList" === e.type && t._handleError()
        }), e.on("AllianceListMessage", function(e) {
            t._hasDom && t._receiveList(e.alliances, e.truncated)
        })
    }, n.prototype._sendQuery = function(e) {
        if (this._hasDom) {
            this._queryTable.prepareForResults();
            var t = window.gui.serversData.connectedServerId;
            window.dofus.send("socialDataRequest", {
                type: "allianceList",
                serverId: t,
                minGuildCount: e.minGuildCount || 0,
                maxGuildCount: e.maxGuildCount || 0,
                minMemberCount: e.minMemberCount || 0,
                maxMemberCount: e.maxMemberCount || 0,
                minSubarea: e.minSubarea || 0,
                maxSubarea: e.maxSubarea || 0,
                text: e.text || ""
            })
        }
    }, n.prototype._handleError = function() {
        this._queryTable.showError(this._sendQuery.bind(this))
    }, n.prototype._receiveList = function(e, t) {
        this._queryTable.loadResults(e, t)
    }
}
