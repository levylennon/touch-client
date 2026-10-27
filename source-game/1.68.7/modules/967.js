function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: ["panel", "ladder1v1Tab"],
            name: "ladder1v1"
        }), this.openedTabId = null, this._servers = [], this._currentPage = 0, this.pageCount = 0, this._selectedServer = "", this._selectedBreed = "", this._selectedLevel = "", this.once("open", function() {
            this._setupDom(), this._setupListener()
        }), this.on("open", function() {
            this._servers = window.gui.serversData.getAllowedServerList(), this._updateServersSelectorContent(), this._ladder.initData(), this._requestingPlayerData(), this._requestingLadderData()
        }), this.on("close", function() {
            this.onClose()
        })
    }
    i(968);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(72),
        s = i(969),
        c = i(966),
        l = i(16);
    a(n, r), e.exports = n, n.prototype._setupDom = function() {
        var e = this.createChild("div", {
            className: "unscrollableContentBlock"
        });
        this._createContent(e)
    }, n.prototype.onClose = function() {
        this._currentPage = 0, this.pageCount = 0, this._selectedServer = "", this._selectedBreed = "", this._selectedLevel = "", this._requestingPlayerData()
    }, n.prototype._requestingLadderData = function() {
        var e = this;
        this._ladder.pendingLadderData(), window.dofus.send("arenaLadder", {
            filters: c.forgeFilters({
                server: e._selectedServer,
                breed: e._selectedBreed,
                level: e._selectedLevel
            }),
            name: "1vs1",
            page: e._currentPage === -1 ? 0 : e._currentPage
        })
    }, n.prototype._requestingPlayerData = function() {
        var e = this;
        this._ladder && (this._ladder.pendingPlayerData(), window.dofus.send("arenaPlayerRank", {
            filters: c.forgeFilters({
                server: e._selectedServer,
                breed: e._selectedBreed,
                level: e._selectedLevel
            }),
            name: "1vs1",
            characterId: window.gui.playerData.characterBaseInformations.id,
            serverId: window.gui.serversData.connectedServerId
        }))
    }, n.prototype._setupListener = function() {
        function e(e) {
            "1vs1" === e._type && (o._ladder.updatePageCount(e.ladderResult.total_characters_count), o._ladder.updateLadderData(e.ladderResult.characters), c.setTopPlayersDisplay1v1(o._ladder, e.ladderResult.total_characters_count))
        }

        function t(e) {
            "1vs1" === e._type && (o._ladder.updatePageCount(0), o._ladder.updateLadderError())
        }

        function i(e) {
            "1vs1" === e._type && (o._ladder.updatePlayerData([e.ladderResult]), c.displayNonDecimalScorePlayer(o._ladder))
        }

        function n(e) {
            "1vs1" === e._type && o._ladder.updatePlayerError()
        }
        var o = this,
            a = window.dofus.connectionManager;
        a.on("arenaLadderSuccess", e), a.on("arenaPlayerRankSuccess", i), a.on("arenaLadderError", t), a.on("arenaPlayerRankError", n)
    }, n.prototype._updateServersSelectorContent = function() {
        this._ladder.getSelector(1)
            .clearContent(), this._ladder.getSelector(1)
            .addOption(o("ui.toa.ladderFilterChoiceAll"), ""), this._servers.sort(function(e, t) {
                var i = e._name || e.id.toString(),
                    n = t._name || t.id.toString();
                return i.localeCompare(n)
            });
        for (var e = 0; e < this._servers.length; e++) this._ladder.getSelector(1)
            .addOption(this._servers[e]._name || this._servers[e].id, this._servers[e].id);
        var t = l.mapToArray(window.gui.databases.Breeds);
        t.sort(function(e, t) {
                return e.shortNameId.localeCompare(t.shortNameId)
            }), this._ladder.getSelector(2)
            .clearContent(), this._ladder.getSelector(2)
            .addOption(o("ui.toa.ladderFilterChoiceAll"), "");
        for (var i = 0; i < t.length; i++) this._ladder.getSelector(2)
            .addOption(t[i].shortNameId, t[i].id);
        this._ladder.getSelector(3)
            .clearContent(), this._ladder.getSelector(3)
            .addOption(o("ui.toa.ladderFilterChoiceAll"), "");
        for (var n = 0; n < c.LEVEL_RANGES.length; n++) {
            var a = c.filterPerLevelValue(n);
            this._ladder.getSelector(3)
                .addOption(c.LEVEL_RANGES[n].desc, a)
        }
    }, n.prototype._createContent = function(e) {
        function t() {
            h._requestingLadderData()
        }

        function i() {
            h._requestingPlayerData()
        }

        function n(e) {
            h._currentPage = e
        }

        function a() {
            c.findMe1v1(h._ladder)
        }

        function r(e) {
            var t = window.gui.databases.Breeds;
            if (t[e.breedId]) return c.createTooltip(t[e.breedId].shortNameId)
        }

        function l(e) {
            return e.rank > 0 ? e.rank : "-"
        }

        function d(e) {
            if (h._selectedServer === e.serverId) return c.createTooltip(e.name);
            var t = window.gui.serversData.getServerShortNameById(e.serverId),
                i = e.name;
            return c.createTooltip(i, {
                boldContent: t
            })
        }

        function u(e) {
            if (199 !== e.level) return e.level;
            var t = c.createTooltip(o("ui.koliseum.warnRanking"), {
                placeholder: e.level.toString()
            });
            return t.addClassNames("warning"), t
        }

        function p(e) {
            var t = "-";
            if (isNaN(e.score) || e.score < 0) return c.createTooltip(t);
            var i = Math.trunc(e.score)
                .toString();
            return t = Math.round(e.score * Math.pow(10, 4)) / Math.pow(10, 4), c.createTooltip(t.toString(), {
                placeholder: i
            })
        }
        var h = this,
            f = [{
                id: "rank",
                header: o("ui.toa.rewardsBoardRank"),
                sort: !1
            }, {
                id: "name",
                header: o("ui.common.name"),
                sort: !1,
                format: d
            }, {
                id: "breed",
                header: o("ui.toa.ladderFilterBreed"),
                sort: !1,
                format: r
            }, {
                id: "level",
                header: o("ui.common.level"),
                sort: !1
            }, {
                id: "score",
                header: o("ui.koliseum.rankingLabel"),
                sort: !1,
                format: p
            }, {
                id: "victory_by_season",
                header: o("ui.koliseum.victoryLabel"),
                sort: !1
            }, {
                id: "defeat_by_season",
                header: o("ui.koliseum.defeat"),
                sort: !1
            }],
            b = [{
                id: "rank",
                header: o("ui.toa.rewardsBoardRank"),
                sort: !1,
                format: l
            }, {
                id: "name",
                header: o("ui.common.name"),
                sort: !1
            }, {
                id: "breed",
                header: o("ui.toa.ladderFilterBreed"),
                sort: !1,
                format: r
            }, {
                id: "level",
                header: o("ui.common.level"),
                sort: !1,
                format: u
            }, {
                id: "score",
                header: o("ui.koliseum.rankingLabel"),
                sort: !1,
                format: p
            }, {
                id: "victory_by_season",
                header: o("ui.koliseum.victoryLabel"),
                sort: !1
            }, {
                id: "defeat_by_season",
                header: o("ui.koliseum.defeat"),
                sort: !1
            }],
            m = {
                description: o("ui.toa.ladderFilterText") + o("ui.common.colon"),
                details: [{
                    description: o("ui.koliseum.ladderFilterServer"),
                    onChange: function(e) {
                        h._currentPage = 0, h.pageCount = 0, h._ladder.resetPagination(), h._selectedServer = e, h._requestingLadderData(), h._requestingPlayerData()
                    }
                }, {
                    description: o("ui.koliseum.ladderFilterBreed"),
                    onChange: function(e) {
                        h._currentPage = 0, h.pageCount = 0, h._ladder.resetPagination(), h._selectedBreed = e, h._requestingLadderData(), h._requestingPlayerData()
                    }
                }, {
                    description: o("ui.koliseum.ladderFilterLevel"),
                    onChange: function(e) {
                        h._currentPage = 0, h.pageCount = 0, h._ladder.resetPagination(), h._selectedLevel = e, h._requestingLadderData(), h._requestingPlayerData()
                    }
                }]
            };
        this._ladder = e.appendChild(new s({
            ladderBlock: {
                header: f,
                indexBy: "rank"
            },
            playerBlock: {
                header: b
            },
            selectors: m,
            pagination: {
                onChange: n,
                requestLadderData: t,
                requestPlayerData: i
            },
            findMe: a,
            canFindMe: c.canFindMe1v1
        }))
    }
}
