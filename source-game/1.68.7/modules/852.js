function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "PingBtn"
        });
        var e = this;
        this._isActivated = !1;
        var t = this.createChild("div", {
            className: "borderBox"
        });
        this._pingBtn = t.appendChild(new o({
            className: "pingBtn",
            scaleOnPress: !0,
            tooltip: r("tablet.pingsystem.pingsystem"),
            hidden: !0
        }, function() {
            window.gui.playerData.isFighting && (e._isActivated ? (e.unselect(), u.log("HUD.Click_on_button", {
                interface_id: "mainUI",
                button_id: "BTN_PING",
                clic_parameter_key: "using",
                clic_parameter_value: !1,
                clic_type: "Simple_court"
            })) : (e.select(), u.log("HUD.Click_on_button", {
                interface_id: "mainUI",
                button_id: "BTN_PING",
                clic_parameter_key: "using",
                clic_parameter_value: !0,
                clic_type: "Simple_court"
            })))
        })), this._emoteBtn = t.appendChild(new o({
            className: "emoteBtn",
            tooltip: r("tablet.common.emotesAndSmilies")
        }, function() {
            window.gui.playerData.isFighting || (e.unselect(), e.emit("emoteBtnTap"))
        })), this._setupEvents(), this._resize(), this.exclusiveSelector = d("shortcutSlots"), this.exclusiveSelector.register(this)
    }
    i(853);
    var o = i(86),
        a = i(72),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(54)
        .dimensions,
        l = i(13),
        d = i(854)
        .getExclusiveSelectorByGroup,
        u = i(116),
        p = i(91)
        .playUiSound;
    s(n, a), e.exports = n, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui;
        t.on("resize", function() {
            e._resize()
        })
    }, n.prototype._resize = function() {
        var e = c.pingEmoteBtnSize;
        if (window.gui.ipadRatio) this.setStyles({
            top: "",
            right: "",
            left: c.posPingEmoteBtn + "px",
            bottom: "0",
            width: e + "px",
            height: c.bottomBarHeight + "px"
        });
        else {
            var t = c.sideBarWidth - l.PING_EMOTE_BTN_WIDE_MIN_WIDTH;
            this.setStyles({
                bottom: "",
                left: "",
                right: t + "px",
                top: c.posPingEmoteBtn + "px",
                width: l.PING_EMOTE_BTN_WIDE_MIN_WIDTH + "px",
                height: e + "px"
            })
        }
    }, n.prototype.select = function() {
        this._pingBtn.addClassNames("on"), this._isActivated = !0, p("WINDOW_OPEN"), this.emit("selected")
    }, n.prototype.unselect = function() {
        this._isActivated && p("WINDOW_CLOSE"), this._pingBtn.delClassNames("on"), this._isActivated = !1, this.emit("unselected")
    }, n.prototype.enterFightState = function() {
        this._pingBtn.show(), this._emoteBtn.hide(), this._resize()
    }, n.prototype.enterRolePlayState = function() {
        this._emoteBtn.show(), this._pingBtn.hide(), this._resize()
    }
}
