function(e, t, i) {
    function n() {
        d.call(this, "div", {
            className: "NotificationBar",
            hidden: !0
        }), this.notificationType = p.notificationType, r(this, {
            small: !0
        }), this.currentOpenedId = null, this.dialogs = {}, this.container = this.createChild("div", {
            className: "container"
        }), this.counter = this.createChild("div", {
            className: "counter"
        });
        var e = this;
        this.on("dragStart", function() {
            e.hideDialog(e.currentOpenedId)
        }), window.gui.on("disconnect", function() {
            e.clearNotifications()
        })
    }
    i(789);
    var o = i(12),
        a = i(56)
        .inherits,
        r = i(570),
        s = i(67),
        c = i(22),
        l = i(86),
        d = i(72),
        u = i(91)
        .playUiSound,
        p = i(790),
        h = p.notificationImageInfo,
        f = 12,
        b = "blue";
    a(n, d), e.exports = n, n.prototype._updateCounter = function() {
        var e = this.container.getChildren()
            .length;
        this.counter.setText(e), this.toggleDisplay(e)
    }, n.prototype._repositionDialog = function(e) {
        var t = this.dialogs[e],
            i = this.container.getChild(e);
        s.positionNextTo(t, i)
    }, n.prototype._destroyNotification = function(e, t) {
        if (this.dialogs[e]) {
            this.dialogs[e].destroy(), delete this.dialogs[e];
            var i = this.container.getChild(e),
                n = i.getChild("icon");
            if ("function" == typeof n.cancelTween && n.cancelTween(), i.destroy(), this._updateCounter(), !t && this.currentOpenedId)
                if (e === this.currentOpenedId) {
                    this.currentOpenedId = null;
                    var o = this.container.getChildren();
                    if (o.length) {
                        var a = o[o.length - 1].getWuiName();
                        this.showDialog(a, !0)
                    }
                } else this._repositionDialog(this.currentOpenedId)
        }
    }, n.prototype.clearNotifications = function() {
        for (var e in this.dialogs) this._destroyNotification(e, !0);
        this.currentOpenedId = null
    }, n.prototype._notificationButtonAction = function(e) {
        return this.currentOpenedId === e ? this.hideDialog(e) : void this.showDialog(e)
    }, n.prototype._createDialog = function(e, t) {
        function i() {
            o.removeNotification(e), t.onClose && t.onClose(-1)
        }

        function n() {
            var i = this.index,
                n = t.buttons[i].action(i);
            switch (n) {
                case "HIDE_DIALOG":
                    o.hideDialog(e);
                    break;
                case "NOTHING":
                    break;
                default:
                    o.removeNotification(e)
            }
        }
        var o = this,
            a = new d("div");
        a._title = a.createChild("div", {
            className: "dialogTitle",
            text: t.title
        }), a._closeButton = a.appendChild(new l({
            className: "closeBtn"
        }, i)), t.wuidom ? (a.createChild("div", {
            className: "dialogText"
        }), a.appendChild(t.wuidom)) : a.createChild("div", {
            className: "dialogText",
            text: t.text
        });
        var r = a._buttonContainer = a.createChild("div", {
            className: "buttons"
        });
        if (t.buttons) {
            t.buttons.length > 1 && !t.onClose && console.warn("Notification needs an onClose function");
            for (var s = 0; s < t.buttons.length; s++) {
                var c = r.appendChild(new l({
                    className: "button",
                    text: t.buttons[s].label
                }, n));
                c.index = s
            }
        }
        var u = window.gui.gameGuiContainer.createChild("div", {
            className: "NotificationDialog"
        });
        u.appendChild(a), u.content = a, this.dialogs[e] = u
    }, n.prototype.setTitleText = function(e, t) {
        this.dialogs[e] && this.dialogs[e].content._title.setText(t)
    }, n.prototype.hideButtons = function(e) {
        this.dialogs[e] && (this.dialogs[e].content._buttonContainer.hide(), this.dialogs[e].content._closeButton.hide())
    }, n.prototype._createNotification = function(e, t) {
        var i = this;
        this.isNotificationOpen(e) && (console.error(new Error("notif " + e + " already existing, destroy.")), this._destroyNotification(e));
        var n = this.container.createChild("div", {
                className: "notificationButton",
                name: e
            }),
            a = n.appendChild(new l({
                className: ["icon", "spinner"],
                name: "icon"
            }, function() {
                i._notificationButtonAction(this.notifId)
            }));
        a.notifId = e;
        var r = "",
            s = "";
        if (!isNaN(t.type)) {
            var d = h[t.type] || {};
            r = d.icon || r, s = d.color || s
        }
        r = t.iconId || r, s = t.iconColor || s;
        var u = ["gfx/notifications/" + (r || f) + ".png", "gfx/notifications/" + (s || b) + ".png"];
        o.preloadImages(u, function(o) {
            if (a && a.rootElement && (a.setStyle("backgroundImage", o[0] + ", " + o[1]), a.delClassNames("spinner"), t.timer)) {
                var r = parseInt(t.timer, 10),
                    s = n.createChild("div", {
                        className: "timer"
                    }),
                    l = c.tween(s, {
                        height: "100%"
                    }, {
                        time: r,
                        easing: "linear"
                    }, function() {
                        i.removeNotification(e)
                    });
                a.cancelTween = l.cancel
            }
        })
    }, n.prototype.showDialog = function(e, t) {
        this.hideDialog(this.currentOpenedId), this.currentOpenedId = e;
        var i = this.container.getChild(e);
        i.addClassNames("opened"), t && i.rootElement.scrollIntoView(!1), this._repositionDialog(e), u("NEW_TIPS")
    }, n.prototype.hideDialog = function(e) {
        if (e && e === this.currentOpenedId) {
            var t = this.container.getChild(e);
            t.delClassNames("opened"), this.currentOpenedId = null, this.dialogs[e].hide()
        }
    }, n.prototype.removeNotification = function(e) {
        var t = this.dialogs[e];
        if (t) {
            var i = this;
            window.setTimeout(function() {
                i._destroyNotification(e)
            }, 0)
        }
    }, n.prototype.newNotification = function(e, t) {
        this._createNotification(e, t), this._updateCounter(), this._createDialog(e, t), this.showDialog(e, !0)
    }, n.prototype.isNotificationOpen = function(e) {
        return Boolean(this.dialogs[e])
    }
}
