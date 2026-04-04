function(e, t, i) {
    function n() {
        s.call(this, "div", {
            className: "ChatButton"
        });
        var e = this,
            t = this.createChild("div", {
                className: "buttonChatPicto"
            }),
            i = this.button = t.appendChild(new c({
                className: "buttonChatTouchZone",
                scaleOnPress: !1
            }, function() {
                window.gui.chat.active ? window.gui.chat.deactivate() : window.gui.chat.activate()
            }));
        i.on("tapstart", function() {
            e.addClassNames("pressed")
        }), i.on("tapend", function() {
            e.delClassNames("pressed")
        }), window.gui.on("resize", function() {
            if (this.ipadRatio) e.setStyles({
                left: a.posChatBtn + "px",
                right: "auto",
                top: "auto",
                bottom: 0,
                width: o.CHAT_BTN_MIN_WIDTH + "px",
                height: a.bottomBarHeight + "px"
            });
            else {
                var t, i;
                t = a.sideBarWidth - o.PING_EMOTE_BTN_WIDE_MIN_WIDTH, i = 0, e.setStyles({
                    left: "auto",
                    right: i + "px",
                    top: a.posChatBtn + "px",
                    bottom: "auto",
                    width: t + "px",
                    height: o.CHAT_BTN_MIN_HEIGHT + "px"
                })
            }
        })
    }
    i(607);
    var o = i(13),
        a = i(54)
        .dimensions,
        r = i(56)
        .inherits,
        s = i(72),
        c = i(86);
    r(n, s), e.exports = n
}
