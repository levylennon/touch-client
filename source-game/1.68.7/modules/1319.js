function(e, t, i) {
    function n() {
        s.call(this, {
            className: "FightEndRewardsWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 356,
                height: 274
            }
        }), this.scroller = this.windowBody.appendChild(new r), this.scroller.content.addClassNames("overlayBox")
    }
    i(1320);
    var o = i(56)
        .inherits,
        a = i(871),
        r = i(453),
        s = i(70);
    o(n, s), e.exports = n, n.prototype.updateContent = function(e, t, i) {
        this.setTitle(e);
        var n = this.scroller.content;
        n.clearContent();
        for (var o = 0; o < t.length; o += 1) n.appendChild(new a({
            itemData: t[o],
            quantity: i[t[o].id] || 0,
            tooltipOptions: {
                openOnTap: !0
            }
        }));
        this.scroller.refresh()
    }
}
