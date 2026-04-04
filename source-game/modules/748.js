function(e, t, i) {
    function n() {
        l.open("market", {
            tabId: "shop"
        })
    }

    function o() {
        u.call(this, "div", {
            className: "shopFloatingToolbar"
        }), s(this, {
            grip: this
        });
        var e = this._shopBtnTap.bind(this);
        this.shopBtn = this.appendChild(new a({
            className: "shopBtn"
        }, e));
        var t = this,
            i = window.gui,
            n = i.scenarioManager;
        i.once("resize", function() {
            t.setStyles({
                left: Math.round(r.mapRight / 3 * 2) + "px",
                top: "0px"
            })
        }), i.on("connected", function() {
            t._toggleDisplay(!0);
            var e = window.gui.serversData.connectedServerId,
                i = b.getValue(e + "-alreadyOpenedShop", !1);
            t.displayAnimatedButton(!i)
        }), i.on("disconnect", function() {
            t._toggleDisplay(!1)
        }), i.playerData.on("subscriptionChanged", function() {
            t._toggleDisplay(!0)
        }), n.on("stepChanged", function() {
            i.playerData.isFighting || t._toggleDisplay(!0)
        }), i.fightManager.on("fightStart", function() {
            t._toggleDisplay(!1)
        }), i.fightManager.on("fightEnd", function() {
            t._toggleDisplay(!0)
        }), M.on("shopOpenSuccess", function() {
            var e = window.gui.serversData.connectedServerId;
            b.setValue(e + "-alreadyOpenedShop", !0), t.displayAnimatedButton(!1)
        })
    }
    i(749);
    var a = i(86),
        r = i(54)
        .dimensions,
        s = i(570),
        c = i(56)
        .inherits,
        l = i(52),
        d = i(116),
        u = i(72),
        p = i(66),
        h = i(129),
        f = i(509),
        b = i(60),
        m = i(750),
        M = window.dofus.connectionManager,
        g = 56;
    c(o, u), e.exports = o, o.prototype._toggleDisplay = function(e) {
        var t = window.gui.scenarioManager.isBehaviourEnabled(h.FORCE_DISPLAY_SHOP_BUTTON);
        if (t) return this.toggleDisplay(!0);
        var i = window.gui.playerData,
            n = i.isSubscriberAtMinLevel(f.ELITE),
            o = i.position.area !== g,
            a = window.gui.scenarioManager.isBehaviourEnabled(h.DISABLE_SHOP_BUTTON),
            r = !o,
            s = n && (o || r),
            c = a ? a : s;
        this.toggleDisplay(!c && e)
    }, o.prototype._shopBtnTap = function() {
        n();
        var e = p(this.rootElement);
        d.log("HUD.Click_on_button", {
            interface_id: "ShopFloatingToolbar",
            button_id: "BTN_IG_SHOP",
            clic_parameter_key: "position",
            clic_parameter_value: ~~e.left + "," + ~~e.top,
            clic_type: "Simple_court"
        })
    }, o.prototype.displayAnimatedButton = function(e) {
        var t = this;
        m.handleShopAnimation(function() {
            t.shopBtn.toggleClassName("shopBtnAnimated", !0)
        }, function() {
            t.shopBtn.toggleClassName("shopBtnAnimated", !1)
        }, e)
    }
}
