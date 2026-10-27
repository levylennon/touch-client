function(e, t, i) {
    function n(e) {
        function t() {
            var e = n.isOpen;
            n._resize(), window.setTimeout(function() {
                n._resize(), n.getCurrentDrawerSize() >= n.getCurrentContentSize() ? (n.setAsAlwaysOpen(!0), i.hide()) : (n.setAsAlwaysOpen(!1), i.show()), n.refresh(), n._resize(), n.refresh(), e && n.shouldKeepOpen && n.open()
            }, 0)
        }
        e = e || {}, a.call(this, {
            className: "MenuDrawer",
            background: !0,
            autoClose: e.autoClose,
            backDrawerSize: e.backDrawerSize,
            swipeBlockedInFight: e.swipeBlockedInFight
        }), this.shouldKeepOpen = !1;
        var i, n = this;
        window.gui.once("connected", function() {
            this.on("resize", function() {
                t()
            }), t()
        }), window.gui.on("disconnect", function() {
            n.close()
        }), this.content.createChild("div", {
            className: "topBorder"
        }), i = this.content.createChild("div", {
            className: "arrowBtnBg"
        }), this.arrowButton = i.appendChild(new r({
            className: "arrowBtn"
        }, function() {
            n.isOpen ? n.close() : n.open()
        }));
        var o = c.getValue("tablet.tutorial.canSwipeDrawer");
        o || i.once("tap", function() {
            var e = window.gui.notificationBar,
                t = {
                    type: e.notificationType.PRIORITY_INVITATION,
                    title: s("tablet.tutorial.tip"),
                    text: s("tablet.tutorial.canSwipeDrawer")
                };
            e.newNotification("tip canSwipeDrawer", t), c.setValue("tablet.tutorial.canSwipeDrawer", !0)
        }), this.createChild("div", {
            className: "borderBox"
        })
    }
    i(778);
    var o = i(56)
        .inherits,
        a = i(779),
        r = i(86),
        s = i(17)
        .getText,
        c = i(60);
    o(n, a), e.exports = n, n.prototype._resize = function() {}
}
