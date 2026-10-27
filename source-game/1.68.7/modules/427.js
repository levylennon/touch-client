function(e, t, i) {
    function n() {}
    var o = i(86),
        a = i(417),
        r = i(17)
        .getText,
        s = i(67)
        .getElementPositionCenteredAt,
        c = i(23)
        .position,
        l = i(22);
    a.prototype._createConfirmBox = function() {
        function e() {
            u.hide(), u.tween = null
        }
        var t, i = this,
            a = {
                x: 0,
                y: 0
            },
            d = window.gui.damagePreview,
            u = this.confirmBox = window.gui.gameGuiContainer.createChild("div", {
                className: "fightConfirmBox",
                hidden: !0
            });
        u.isOpen = !0, u.allowDomEvents();
        var p = u.createChild("div", {
                className: "title"
            }),
            h = u.createChild("div", {
                className: "content"
            });
        h.appendChild(new o({
            className: "cancel",
            scaleOnPress: !0
        }, function() {
            t(!1), u.close(), d.cancel()
        }));
        var f = h.createChild("div", {
                className: "mpAndAp"
            }),
            b = f.createChild("div", {
                className: "mp"
            });
        b.createChild("div", {
            className: "logo"
        });
        var m = b.createChild("div", {
                className: "value"
            }),
            M = f.createChild("div", {
                className: "ap"
            });
        M.createChild("div", {
            className: "logo"
        });
        var g = M.createChild("div", {
                className: "value"
            }),
            _ = u.createChild("div", {
                className: "damage"
            }),
            A = h.appendChild(new o({
                className: "valid",
                scaleOnPress: !0
            }, function() {
                A.disable(), t(!0), d.confirm(), u.close()
            })),
            O = null;
        u.changeDamage = function(e) {
            _.show(), _.clearContent(), _.appendChild(e)
        }, u.open = function(e, i, o, d, h, f) {
            return d = d || {}, f = f || n, d.allowDoubleTap && O && o && O === o ? (h(!0), void u.close()) : (O = o, A.enable(), _.hide(), "move" === e ? (p.setText(r("ui.common.move")), b.show(), m.setText(r("ui.short.movementPoints") + r("ui.common.colon") + "-" + i.mp), i.ap > 0 ? (g.setText(r("ui.short.actionPoints") + r("ui.common.colon") + "-" + i.ap), M.show()) : M.hide()) : (p.setText(i.name), b.hide(), M.show(), g.setText(r("ui.short.actionPoints") + r("ui.common.colon") + "-" + i.apCost)), u.show(), a = s(u, c.x, c.y), u.isOpen ? u.setStyles({
                webkitTransformOrigin: c.x + "px " + c.y + "px"
            }) : u.setStyles({
                webkitTransform: "scale(0) translate3d(" + a.x + "px," + a.y + "px,0)",
                webkitTransformOrigin: c.x + "px " + c.y + "px"
            }), l.tween(u, {
                webkitTransform: "scale(1) translate3d(" + a.x + "px," + a.y + "px,0)"
            }, {
                time: 100,
                easing: "linear"
            }, f), u.isOpen = !0, d.startHidden && u.hide(), void(t = h))
        }, u.close = function() {
            u.isOpen && (i.emit("confirmBoxClosed"), u.isOpen = !1, A.disable(), O = null, l.tween(u, {
                webkitTransform: "scale(0) translate3d(" + a.x + "px," + a.y + "px,0)"
            }, {
                time: 100,
                easing: "linear"
            }, e))
        }, u.close()
    }
}
