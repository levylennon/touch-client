function(e, t, i) {
    function n() {
        a.call(this), this.popups = []
    }

    function o(e, t) {
        var i = window.gui.serversData.connectedServerId;
        return e !== t ? (c.setValue(i + "-alreadyOpenedShop", !1), !1) : c.getValue(i + "-alreadyOpenedShop", !1)
    }
    var a = i(59)
        .EventEmitter,
        r = i(56)
        .inherits,
        s = i(52),
        c = i(60),
        l = i(21),
        d = i(838),
        u = i(142),
        p = i(750),
        h = 62;
    r(n, a), e.exports = n, n.prototype._displayMarketingPopup = function(e) {
        s.open("marketingWindow", e)
    }, n.prototype.getPromoDisplayUserPrefKey = function() {
        return "promoDisplayed"
    }, n.prototype.initialize = function(e, t, i) {
        function n(e) {
            window.gui.playerData.isShopDisabled() || u.getMarketingPopups(function(t, i) {
                return t ? e(t) : (r.popups = i, r._processPopups(i), e())
            })
        }

        function a(e) {
            window.gui.playerData.isShopDisabled() || u.getMarketingGondola(h, function(t, i) {
                if (t) return e(t);
                for (var n = window.gui.serversData.connectedServerId, a = c.getValue(n + "-gondolaHeadToken"), r = "", s = 0; s < i.length; s++) r += i[s].id;
                var l = o(a, r);
                return a && l || c.setValue(n + "-gondolaHeadToken", r), e()
            })
        }
        var r = this,
            s = window.dofus.connectionManager;
        this._logger = t, this._purchaseWrapper = i, this.alreadyOpenedPopup = !1, e.on("connected", function() {
            d.reset(), r._purchaseSetAccountUid(u.getPurchaseUuid(), window.gui.playerData.getAccountId()
                .toString()), window.gui.playerData.isShopDisabled() || d.getStoreInfos(function(e) {
                if (e) return r._logger.error(e)
            })
        }), e.on("disconnect", function() {
            r.alreadyOpenedPopup = !1, u.resetPurchaseUuid()
        }), e.playerData.on("characterLevelUp", function() {
            return r.popups.length <= 0 || !r.alreadyOpenedPopup ? n(function(e) {
                if (e) return console.error(e)
            }) : void r._processPopupsWithTriggers()
        }), window.isoEngine.on("mapLoaded", function() {
            r._processPopupsWithTriggers()
        }), s.on("setShopDetailsSuccess", function() {
            n(function(e) {
                if (e) return console.error(e)
            }), a(function(e) {
                if (e) return console.error("Error while fetching Gondola", e)
            })
        })
    }, n.prototype._purchaseSetAccountUid = function(e, t) {
        this._purchaseWrapper && this._purchaseWrapper.isAvailable() && this._purchaseWrapper.setAccountUid(e, t)
    }, n.prototype._processPopupsWithTriggers = function() {
        if (!(this.popups.length <= 0)) {
            var e = c.getValue(this.getPromoDisplayUserPrefKey(), {}),
                t = p.getMarketingItemToDisplayWithTrigger(this.popups, e, l);
            t && this._displayMarketingPopup(t)
        }
    }, n.prototype._processPopups = function(e) {
        if (window.gui.playerData.characters.mainCharacterId && !this.alreadyOpenedPopup) {
            var t = c.getValue(this.getPromoDisplayUserPrefKey(), {}),
                i = p.getMarketingItemToDisplay(e, t, l);
            i ? (this.alreadyOpenedPopup = !0, this._displayMarketingPopup(i)) : this._processPopupsWithTriggers()
        }
    }
}
