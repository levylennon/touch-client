function(e, t, i) {
    function n(e) {
        e = e || {}, a.call(this, "div", {
            className: "GuildHousesWindow"
        }), this.addClassNames(e.className);
        var t = this;
        this.currentSelectedHouseId = null, this.once("open", function() {
            t._createDom()
        }), this.on("open", function() {
            t._resetAll(), t.addClassNames("spinner")
        })
    }
    i(1214);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(88)
        .addTooltip,
        s = i(86)
        .DofusButton,
        c = i(17)
        .getText,
        l = i(765),
        d = i(52);
    o(n, a), e.exports = n, n.prototype._createDom = function() {
        var e = this,
            t = [{
                id: "houseName",
                header: c("ui.common.houseWord")
            }, {
                id: "coordinate",
                header: c("ui.common.coordinatesSmall")
            }, {
                id: "owner",
                header: c("ui.common.ownerWord")
            }, {
                id: "detail"
            }];
        this.table = this.appendChild(new l(t)), this.table.on("rowTap", function(t) {
            e.currentSelectedHouseId = t.rowId, e._updateJoinButton()
        });
        var i = this.createChild("div", {
            className: "buttonContainer"
        });
        this.joinButton = i.appendChild(new s(c("ui.common.join"), {
            className: "joinButton"
        })), this.joinButton.on("tap", function() {
            window.dofus.sendMessage("GuildHouseTeleportRequestMessage", {
                houseId: e.currentSelectedHouseId
            }), d.close("social")
        }), this.joinButton.disable(), this._setupSocketEvents()
    }, n.prototype._setupSocketEvents = function() {
        var e = this,
            t = window.gui.playerData.guild;
        t.on("guildHouseUpdateAll", function() {
            e.isVisible() && (e.delClassNames("spinner"), e._updateHouses(), e._updateJoinButton())
        }), t.on("guildHouseUpdateInfo", function(t) {
            e.isVisible() && (e._updateHouse(t), e._updateJoinButton())
        }), t.on("guildHouseRemoved", function(t) {
            e.isVisible() && (e._removeHouse(t), e._updateJoinButton())
        })
    }, n.prototype._createHouseInfoButton = function(e) {
        var t = new s("?", {
            name: "button"
        });
        return t.on("tap", function() {
            d.open("guildHouseInfo", {
                guildshareParams: e.guildshareParams,
                skillListIds: e.skillListIds
            })
        }), t
    }, n.prototype._resetAll = function() {
        this.currentSelectedHouseId = null, this.table.clearContent(), this.joinButton.disable()
    }, n.prototype._createHouseListRow = function(e) {
        var t = e.enrichData || {};
        return {
            houseName: t.houseName,
            coordinate: e.worldX + "," + e.worldY,
            owner: e.ownerName,
            detail: this._createHouseInfoButton(e)
        }
    }, n.prototype._updateJoinButton = function() {
        var e = window.gui.playerData.guild.current.houses || [];
        e.length && this.currentSelectedHouseId ? this.joinButton.enable() : this.joinButton.disable()
    }, n.prototype._updateHouses = function() {
        var e = window.gui.playerData.guild.current.houses || [];
        this._resetAll();
        for (var t = 0; t < e.length; t += 1) this._addHouse(e[t])
    }, n.prototype._addHouse = function(e) {
        var t = this._createHouseListRow(e),
            i = this.table.addRow(t, e.houseId);
        this._addHouseRowToolTip(i, e)
    }, n.prototype._removeHouse = function(e) {
        this.table.hasRow(e) && this.table.delRow(e)
    }, n.prototype._updateHouse = function(e) {
        var t = e.houseId;
        if (this.table.hasRow(t)) {
            var i = this._createHouseListRow(e);
            this.table.updateRow(i, t)
        } else this._addHouse(e)
    }, n.prototype._addHouseRowToolTip = function(e, t) {
        var i = t.enrichData,
            n = i.areaName + " (" + i.subAreaName + ")";
        r(e, n)
    }
}
