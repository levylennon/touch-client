function(e, t, i) {
    function n(e) {
        function t(e, t, i, n) {
            n || (n = !1), e.table = e.appendChild(new r(t, i, {
                clickable: !1
            })), e.table.scroller.setEnable(n)
        }
        e = e || {}, a.call(this, "div", {
            className: "ladder"
        }), this._currentPage = -1;
        var i = this.createChild("div", {
                className: "ladderContent"
            }),
            n = i.createChild("div", {
                className: "header"
            }),
            o = n.createChild("div", {
                className: "filtersBlock"
            }),
            l = this._ladderBlock = i.createChild("div", {
                className: "ladderBlock"
            });
        this._selectors = [];
        var p = this;
        if (this._isLadderDataPending = !1, this._isPlayerDataPending = !1, e.selectors && e.selectors.details.length > 0 && (o.createChild("div", {
                className: "description",
                text: e.selectors.description
            }), e.selectors.details.forEach(function(e) {
                var t = o.createChild("div", {
                        className: "selectorsBlock"
                    }),
                    i = t.createChild("div", {
                        className: "selectorBox"
                    });
                i.createChild("div", {
                    className: "description",
                    text: e.description
                });
                var n = i.appendChild(new c({
                    className: "selector"
                }));
                n.on("change", function(t) {
                    e.onChange(t)
                }), p._selectors.push(n)
            })), e.ladderBlock.header.length && e.ladderBlock.header.length > 0) {
            t(l, e.ladderBlock.header, e.ladderBlock.indexBy, !0);
            var h = l.createChild("div", {
                className: "paginationWrapper"
            });
            "function" == typeof e.findMe && (this._findMe = h.appendChild(new u({
                className: "greenButton",
                text: d("ui.ladder.findMe")
            }, function() {
                e.findMe()
            })), this._canFindMe = e.canFindMe), this._pagination = h.appendChild(new s), this._pagination._requestLadderData = e.pagination.requestLadderData, this._pagination._requestPlayerData = e.pagination.requestPlayerData, this._pagination._onChange = e.pagination.onChange, this._pagination.on("previous", function() {
                this._onChange(p._currentPage - 1), p.displayPage(p._currentPage - 1)
            }), this._pagination.on("next", function() {
                p.displayPage(p._currentPage + 1)
            }), this._pagination.on("page", function(e) {
                p.displayPage(e)
            })
        }
        var f = this._playerBlock = this.createChild("div", {
            className: "ladderPlayerContent"
        });
        e.playerBlock.header.length && e.playerBlock.header.length > 0 && t(f, e.playerBlock.header, !1)
    }
    i(970);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(765),
        s = i(867),
        c = i(945),
        l = i(32)
        .isEmptyObject,
        d = i(17)
        .getText,
        u = i(86),
        p = 50;
    o(n, a), e.exports = n, n.prototype.pendingLadderData = function() {
        this._isLadderDataPending = !0, this._tabSpinner(this._ladderBlock, !0)
    }, n.prototype.pendingPlayerData = function() {
        this._isPlayerDataPending = !0, this._tabSpinner(this._playerBlock, !0), this._setSelectorsAvailibility(!1), this._findMe.disable()
    }, n.prototype.initData = function() {
        this.displayPage(0)
    }, n.prototype._refreshFindMe = function() {
        if (this._findMe) return this._canFindMe() ? void this._findMe.enable() : this._findMe.disable()
    }, n.prototype._tabSpinner = function(e, t) {
        e.table.setContentLoading(t)
    }, n.prototype.scrollTo = function(e) {
        this._ladderBlock.table.scrollToRow(e)
    }, n.prototype._setSelectorsAvailibility = function(e) {
        e && (this._isLadderDataPending || this._isPlayerDataPending) || this._selectors.forEach(function(t) {
            t.setEnable(e)
        })
    }, n.prototype.updateLadderData = function(e) {
        this._tabSpinner(this._ladderBlock, !1), this._setTableContent(this._ladderBlock, e), this.emit("loaded"), this._isLadderDataPending = !1, this._setSelectorsAvailibility(!0)
    }, n.prototype.updateLadderError = function() {
        this._tabSpinner(this._ladderBlock, !1), this._setTableContent(this._ladderBlock), this._isLadderDataPending = !1, this._setSelectorsAvailibility(!0)
    }, n.prototype.refreshPlayerData = function() {
        this._pagination._requestPlayerData()
    }, n.prototype.updatePlayerData = function(e) {
        this._tabSpinner(this._playerBlock, !1), this._setTableContent(this._playerBlock, e), this._refreshFindMe(), this.emit("playerDataLoaded"), this._isPlayerDataPending = !1, this._setSelectorsAvailibility(!0)
    }, n.prototype.updatePlayerError = function() {
        this._tabSpinner(this._playerBlock, !1), this._setTableContent(this._playerBlock), this._isPlayerDataPending = !1
    }, n.prototype.updatePageCount = function(e) {
        var t = Math.ceil(e / p) || 1;
        t !== this.pageCount && (this.pageCount = t, this._pagination.setPageCount(t))
    }, n.prototype.resetPagination = function() {
        this._pagination.setCurrent(0), this._currentPage = 0
    }, n.prototype.displayPage = function(e) {
        this._currentPage !== e && (e < 0 || e > this.pageCount || (this._currentPage = e, this._pagination.setCurrent(e), this._pagination._onChange(e), this._pagination._requestLadderData()))
    }, n.prototype.getCurrentPage = function() {
        return this._currentPage
    }, n.prototype._setTableContent = function(e, t) {
        return e.table.getRowCount() > 0 && e.table.clearContent(), t ? l(t) ? e.table.setPlaceholderText(d("ui.search.noResult")) : (e.table.setPlaceholderText(null), void e.table.addMap(t)) : e.table.setPlaceholderText(d("ui.toa.ladderUnavailable"))
    }, n.prototype.getSelector = function(e) {
        return this._selectors.length < e ? (console.error(new Error("Trying to get a selector with the wrong order")), {}) : this._selectors[e - 1]
    }, n.prototype.getLadderRow = function(e) {
        var t = this._ladderBlock.table;
        return t.getRow(e)
    }, n.prototype.getPlayerRow = function() {
        var e = this._playerBlock.table;
        return e.getRow(0)
    }, n.prototype.updateLadderCell = function(e, t, i) {
        var n = this._ladderBlock.table;
        n.updateCell(e, t, i)
    }, n.prototype.updatePlayerCell = function(e, t) {
        var i = this._playerBlock.table;
        i.updateCell(0, e, t)
    }
}
