function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: ["panel", "ladderTab"],
            name: "ladder"
        }), this.openedTabId = null, this._servers = [];
        var e = c.getStepsData();
        this.once("open", function() {
            this._setupDom(), this._setupListener()
        }), this.on("open", function() {
            this.currentPage = -1, this.pageCount = -1, this.selectedServer = "", this._servers = window.gui.serversData.getAllowedServerList(), this._toaClosedblock.toggleClassName("off", Boolean(e)), this._updateServersSelectorContent(), this._requestingLadderData()
        })
    }
    i(1358);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(72),
        s = i(945),
        c = i(1353),
        l = i(867),
        d = i(13);
    a(n, r), e.exports = n, n.prototype._setupDom = function() {
        var e = this.createChild("div", {
            className: "unscrollableContentBlock"
        });
        this._createContent(e)
    }, n.prototype._requestingLadderData = function() {
        var e = window.gui.playerData.ToaData;
        c.tabSpinner(this._ladderBlock, !0), e.requestLadderData(this.currentPage === -1 ? 0 : this.currentPage, this.selectedServer), e.requestMaxRankLadderData(window.gui.serversData.connectedServerData.id)
    }, n.prototype._setupListener = function() {
        function e() {
            i._updatePageCount(), c.tabSpinner(i._ladderBlock, !1), c.setContent(i._ladderBlock, n.current.ladder.data)
        }

        function t() {
            c.tabSpinner(i._playerBlock, !1), c.setContent(i._playerBlock, n.current.ladder.player)
        }
        var i = this,
            n = window.gui.playerData.ToaData;
        n.on("toaLadderDataSuccess", e), n.on("toaPlayerRankDataSuccess", t), n.on("toaLadderDataFailure", e), n.on("toaPlayerRankDataFailure", t)
    }, n.prototype._updatePageCount = function() {
        var e = window.gui.playerData.ToaData,
            t = Math.ceil(e.current.ladder.nbPlayer / d.NB_PLAYER_PER_LADDER_PAGE) || 1;
        t !== this.pageCount && (this.pageCount = t, this._displayPage(0), this.pagination.setPageCount(t))
    }, n.prototype._updateServersSelectorContent = function() {
        this._serversSelector.clearContent(), this._serversSelector.addOption(o("ui.toa.ladderFilterChoiceAll"), ""), this._servers.sort(function(e, t) {
            var i = e._name || e.id.toString(),
                n = t._name || t.id.toString();
            return i.localeCompare(n)
        });
        for (var e = 0; e < this._servers.length; e++) this._serversSelector.addOption(this._servers[e]._name || this._servers[e].id, this._servers[e].id)
    }, n.prototype._createContent = function(e) {
        function t(e) {
            return e.rank + 1
        }

        function i(e) {
            return window.gui.serversData.getServerNameById(e.server)
        }
        var n = this,
            a = e.createChild("div", {
                className: "ladderContent"
            }),
            r = a.createChild("div", {
                className: "header"
            }),
            d = r.createChild("div", {
                className: "filtersBlock"
            });
        d.createChild("div", {
            className: "description",
            text: o("ui.toa.ladderFilterText") + o("ui.common.colon")
        });
        var u = d.createChild("div", {
                className: "selectorsBlock"
            }),
            p = u.createChild("div", {
                className: "serverSelectorBox"
            });
        p.createChild("div", {
            className: "description",
            text: o("ui.toa.ladderFilterServer")
        });
        var h = this._serversSelector = p.appendChild(new s({
            className: "serverSelector"
        }));
        h.on("change", function(e) {
            n.currentPage = -1, n.pageCount = -1, n.selectedServer = e, n._ladderBlock.table.setPlaceholderText(""), n._requestingLadderData()
        });
        var f = this._toaClosedblock = r.createChild("div", {
            className: "toaClosedBlock"
        });
        f.createChild("div", {
            className: "toaClosedImg"
        }), f.createChild("div", {
            className: "toaClosedText",
            text: o("ui.toa.ascensionClosed")
        });
        var b = this._ladderBlock = a.createChild("div", {
                className: "ladderBlock"
            }),
            m = [{
                id: "rank",
                header: o("ui.toa.rewardsBoardRank"),
                sort: !1,
                format: t
            }, {
                id: "name",
                header: o("ui.common.name"),
                sort: !1
            }, {
                id: "breed",
                header: o("ui.toa.ladderFilterBreed"),
                sort: !1
            }, {
                id: "level",
                header: o("ui.common.level"),
                sort: !1
            }, {
                id: "server",
                header: o("ui.toa.ladderFilterServer"),
                sort: !1,
                format: i
            }, {
                id: "score",
                header: o("ui.common.score"),
                sort: !1
            }];
        c.createTable(b, m, "rank", !0), this.pagination = b.appendChild(new l), this.pagination.on("previous", function() {
            n._displayPage(n.currentPage - 1)
        }), this.pagination.on("next", function() {
            n._displayPage(n.currentPage + 1)
        }), this.pagination.on("page", function(e) {
            n._displayPage(e)
        }), m = [{
            id: "rank",
            header: o("ui.toa.rewardsBoardRank"),
            sort: !1,
            format: t
        }, {
            id: "name",
            header: o("ui.common.name"),
            sort: !1
        }, {
            id: "score",
            header: o("ui.common.score"),
            sort: !1
        }, {
            id: "rewards",
            header: o("ui.grimoire.quest.rewards"),
            format: function(e) {
                return c.displayRewardsDetails(e.rankId)
            },
            sort: !1
        }];
        var M = this._playerBlock = e.createChild("div", {
            className: "ladderPlayerContent"
        });
        c.createTable(M, m, !1)
    }, n.prototype._displayPage = function(e) {
        this.currentPage !== e && (e < 0 || e > this.pageCount || (this.currentPage = e, this.pagination.setCurrent(e), this._requestingLadderData()))
    }
}
