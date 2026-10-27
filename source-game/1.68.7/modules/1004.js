function(e, t, i) {
    function n(e) {
        a.call(this, "div", {
            className: "ItemSpace"
        }), e = e || {};
        var t = this,
            i = this.createChild("div", {
                className: "topContainer"
            }),
            n = i.createChild("div", {
                className: "top"
            });
        this._title = n.createChild("div", {
            className: "title"
        }), this._description = n.createChild("div", {
            className: "description"
        }), n.createChild("div", {
            className: "contentText",
            text: c("ui.connection.contents")
        }), this._rewardBoxes = n.appendChild(new s({
            nbRewards: 8
        })), this._itemBox = this.appendChild(new r({
            showTitle: !0,
            forceHidePreviewBtn: Boolean(e.forceHidePreviewBtn)
        })), this._rewardBoxes.on("tapSlot", function(e) {
            t._updateItemBox(e)
        })
    }
    i(1005);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(1006),
        s = i(1008),
        c = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype.update = function(e) {
        e = e || {}, this._title.setText(e.title);
        var t = e.text;
        "null" === t.trim()
            .toLowerCase() && (t = ""), this._description.setHtml(t);
        var i = e.items || [],
            n = i[0];
        n ? this._updateItemBox(n) : this._itemBox.hide(), this._rewardBoxes.reset();
        for (var o = 0, a = i.length; o < a; o += 1) {
            var r = i[o];
            this._rewardBoxes.addItemInstance(r)
        }
    }, n.prototype._updateItemBox = function(e) {
        this._itemBox.displayItem(e), this._itemBox.show()
    }
}
