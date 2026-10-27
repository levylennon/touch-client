function(e, t, i) {
    "use strict";

    function n(e) {
        this.reset(), this._parent = e, this._queryBox = e.createChild("div", {
            className: "queryBox"
        })
    }

    function o(e, t, i, n) {
        return e.appendChild(new c({
            maxValue: n,
            title: t,
            attr: {
                placeholder: i
            }
        }))
    }
    i(1234);
    var a = i(86),
        r = i(17)
        .getText,
        s = i(581),
        c = i(423),
        l = i(943),
        d = i(16)
        .simplifyString;
    e.exports = n, n.prototype.reset = function() {
        this._parent = null, this._queryBox = null, this._buttonBox = null, this._failureBox = null, this._queryBtn = null, this._textFilterBox = null, this._filterBox = null, this._rowCounter = null, this._table = null, this._fieldMap = {}
    }, n.prototype.createMinAndMaxBox = function(e, t, i) {
        var n = r("tablet.filter.to"),
            a = r("ui.common.minWord"),
            s = r("ui.common.maxWord"),
            c = this._queryBox.createChild("div", {
                className: ["minMaxDiv", e]
            });
        c.createChild("div", {
            className: "label",
            text: t + r("ui.common.colon")
        }), this._fieldMap["min" + e] = o(c, t + " - " + a, a, i), c.createChild("span", {
            text: n
        }), this._fieldMap["max" + e] = o(c, t + " - " + s, s, i)
    }, n.prototype.createTextSearchBox = function(e) {
        var t = this._queryBox.createChild("div");
        t.createChild("div", {
            className: "label",
            text: r("ui.common.name") + r("ui.common.colon")
        }), this._fieldMap[e] = t.appendChild(new s)
    }, n.prototype.createSearchAndResetButton = function(e, t) {
        var i = this._buttonBox = this._queryBox.createChild("div", {
                className: "buttonBox"
            }),
            n = this;
        this._queryBtn = i.appendChild(new a({
            className: ["searchBtn", "greenButton"],
            text: r("ui.common.search")
        }, function() {
            return n._checkQuery() ? (n._queryBtn.disable(), void e(n.getQuery())) : n.loadResults([])
        })), i.appendChild(new a({
            className: ["resetBtn", "secondaryButton"],
            text: r("ui.common.reset")
        }, function() {
            n._resetQueryFields(), t && t()
        }))
    }, n.prototype._createFilterBox = function(e, t) {
        var i = this._filterBox = e.createChild("div", {
            className: "filterBox"
        });
        i.createChild("div", {
            className: "filterIcon"
        }), this._textFilterBox = i.appendChild(new l({
            isLiveSearch: !0,
            placeholder: r("tablet.common.filter")
        })), this._setFilterEnable(!1);
        var n = this;
        this._textFilterBox.on("search", function(e) {
            n._table.searchedText = d(e), n._table.filter(t)
        })
    }, n.prototype._setFilterEnable = function(e) {
        this._textFilterBox.setEnable(e), this._filterBox.toggleClassName("disabled", !e)
    }, n.prototype._checkQuery = function() {
        var e = !0;
        for (var t in this._fieldMap)
            if (t.startsWith("min")) {
                var i = t.substr(3),
                    n = this._fieldMap[t],
                    o = this._fieldMap["max" + i];
                if (o) {
                    var a = n.getRawValue(),
                        r = o.getRawValue(),
                        s = "" !== a && "" !== r && parseInt(a, 10) > parseInt(r, 10);
                    n.toggleClassName("invalid", s), o.toggleClassName("invalid", s), s && (e = !1)
                }
            } return e
    }, n.prototype.getQuery = function() {
        var e = {};
        for (var t in this._fieldMap) e[t] = this._fieldMap[t].getValue();
        return e
    }, n.prototype._resetQueryFields = function() {
        for (var e in this._fieldMap) this._fieldMap[e].setValue("")
    }, n.prototype.showError = function(e) {
        this._deleteFailureBox(), this._createFailureBox(e), this._table.setContentLoading(!1), this._table.setPlaceholderText(r("tablet.searchError")), this._setFilterEnable(!1)
    }, n.prototype._createFailureBox = function(e) {
        var t = this,
            i = this._failureBox = this._buttonBox.createChild("div", {
                className: "failureBox"
            }),
            n = i.appendChild(new a({
                className: ["retryBtn", "specialButton"],
                text: r("tablet.common.retry")
            }));
        n.on("tap", function() {
            n.disable(), e(t.getQuery())
        })
    }, n.prototype._deleteFailureBox = function() {
        this._failureBox && (this._buttonBox.removeChild(this._failureBox), this._failureBox = null)
    }, n.prototype.appendTable = function(e, t) {
        var i = this._parent.createChild("div", {
            className: "aboveTable"
        });
        this._createFilterBox(i, t), this._rowCounter = i.createChild("div", {
            className: "rowCounter"
        }), this._table = this._parent.appendChild(e), setTimeout(function(e) {
            e._table && e._table.setPlaceholderText(r("tablet.search"))
        }, 0, this)
    }, n.prototype.prepareForResults = function() {
        this._table.clearContent(), this._table.setContentLoading(!0), this._table.setPlaceholderText(r("ui.loadbar.loading") + "..."), this._rowCounter.setText("")
    }, n.prototype.loadResults = function(e, t) {
        this._deleteFailureBox(), this._setFilterEnable(!0), t ? this._rowCounter.setText(r("tablet.firstResults", e.length)) : this._rowCounter.setText(r("tablet.nResults", e.length)), this._table.setContentLoading(!1), e.length ? (this._table.setPlaceholderText(""), this._table.addList(e, !0, !0)) : this._table.setPlaceholderText(r("ui.search.noResult")), this._queryBtn.enable()
    }
}
