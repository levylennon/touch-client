function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: "TextNotification"
        });
        var e = this;
        window.gui.on("resize", function() {
            e.setStyles({
                left: o.mapLeft + l + "px",
                bottom: o.screenHeight - o.mapBottom + l + "px"
            })
        }), this.mutedChannelsId = {};
        for (var t in d) this.mutedChannelsId[s[t]] = !0
    }
    i(672);
    var o = i(54)
        .dimensions,
        a = i(56)
        .inherits,
        r = i(72),
        s = i(504),
        c = i(55),
        l = 10,
        d = {
            PSEUDO_CHANNEL_FIGHT_LOG: !0
        };
    a(n, r), e.exports = n, n.prototype.add = function(e, t) {
        function i(e) {
            e.delClassNames("on"), setTimeout(function() {
                e.destroy()
            }, 300)
        }
        t = t || {};
        var n = this.createChild("div", {
                className: "bubble"
            }),
            o = n.createChild("div", {
                className: "bubbleText"
            });
        n.addClassNames(t.className);
        var a = t.channel;
        void 0 === a && (a = s.PSEUDO_CHANNEL_INFO), n.addClassNames("channel" + a), "object" == typeof e ? o.appendChild(e) : o.setHtml(e.toString());
        var r = window.gui.fightManager;
        !c.canTapOnChatLink && r.isInFight() && n.addClassNames("cantTap"), setTimeout(function() {
            n.addClassNames("on")
        }, 50), setTimeout(function() {
            n.rootElement && i(n)
        }, 7e3)
    }
}
