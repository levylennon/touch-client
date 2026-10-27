function(e, t, i) {
    function n() {
        s.call(this, "", {
            className: "HouseMenuButton",
            hidden: !0
        });
        var e = this;
        this._reset(), this._icon = this.createChild("div", {
            className: "icon"
        }), this.on("tap", function() {
            e._updateToolTip(), window.gui.openContextualMenu("generic", e._tooltipParams)
        }), this._registerListeners()
    }

    function o() {
        l.open("guildHouseSetting"), window.dofus.sendMessage("HouseGuildRightsViewMessage")
    }

    function a() {
        l.open("padlock", {
            fromInside: !0
        })
    }
    i(774);
    var r = i(56)
        .inherits,
        s = i(86)
        .DofusButton,
        c = i(17)
        .getText,
        l = i(52);
    r(n, s), e.exports = n, n.prototype._reset = function() {
        this._locked = !1, this._myHouse = null, this._onSale = !1, this._tooltipParams = null
    }, n.prototype._registerListeners = function() {
        var e = this,
            t = window.gui,
            i = t.playerData,
            n = i.position;
        t.on("disconnect", function() {
            e._reset()
        }), n.on("myHouseNotification", function(t) {
            t = t || {};
            var i = t.isInMyHouse,
                n = t.msg || {};
            return i ? (e._myHouse = n.currentHouse, e._onSale = Boolean(n.currentHouse.price),
                e._locked = n.currentHouse.isLocked, e._updateIcon(), void e.show()) : (e.hide(), void e._reset())
        }), window.dofus.connectionManager.on("HousePropertiesMessage", function(t) {
            var i = t.properties;
            e._tooltipParams && e._myHouse && e._myHouse.houseId === i.houseId && (e._onSale = i.isOnSale, e._updateIcon())
        }), window.dofus.connectionManager.on("LockableStateUpdateHouseDoorMessage", function(t) {
            e._tooltipParams && e._myHouse && e._myHouse.houseId === t.houseId && (e._locked = t.locked, e._updateIcon())
        }), window.dofus.connectionManager.on("HouseSoldMessage", function(t) {
            var n = t.buyerName;
            e._tooltipParams && e._myHouse && n === i.identification.uniqueNickname.toString() && (e._onSale = Boolean(t.realPrice), e._myHouse.price = t.realPrice, e._updateIcon())
        })
    }, n.prototype._updateIcon = function() {
        var e = this._locked ? "locked" : "";
        e = this._onSale ? "onSale" : e, this._icon.replaceClassNames(["onSale", "locked"], e ? [e] : [])
    }, n.prototype._updateToolTip = function() {
        var e = this;
        this._tooltipParams = {
            title: c("ui.house.homeOf", this._myHouse.displayedName),
            actions: []
        };
        var t = c(this._onSale ? "ui.common.changeHousePrice" : "ui.common.sell");
        this._tooltipParams.actions.push({
            caption: t,
            cb: function() {
                var t = e._myHouse,
                    i = l.getWindow("houseBuySell");
                i.prepareDialog(t.modelId, t.ownerName, t.displayedName), l.open("houseBuySell", {
                    fromInside: !0,
                    myHouse: e._myHouse
                })
            }
        });
        var i = c(this._locked ? "ui.common.unlock" : "ui.common.lock");
        this._tooltipParams.actions.push({
            caption: i,
            cb: a
        });
        var n = window.gui.playerData.guild;
        n.hasGuild() && this._tooltipParams.actions.push({
            caption: c("ui.common.guildHouseConfiguration"),
            cb: o
        })
    }
}
