function(e, t, i) {
    function n(e) {
        e = e || {}, r.call(this, "div", {
            className: "GuildPaddocksWindow"
        }), this.addClassNames(e.className), this.selectedPaddock = null, this.once("open", function() {
            this._createDom(), this._setupEvents()
        }), this.on("open", function() {
            this._resetAll(), this.locationTable.addClassNames("spinner")
        })
    }
    i(1220);
    var o = i(56)
        .inherits,
        a = i(86),
        r = i(72),
        s = i(88)
        .addTooltip,
        c = i(17)
        .getText,
        l = i(765),
        d = i(52),
        u = i(12);
    o(n, r), e.exports = n, n.prototype._setupEvents = function() {
        var e = window.gui.playerData.guild,
            t = this;
        e.on("guildPaddockUpdate", function() {
            t.isVisible() && (t.locationTable.delClassNames("spinner"), t._updatePaddocks(), t._updateJoinButton())
        }), e.on("guildPaddockBought", function(e) {
            t.isVisible() && (t._addPaddock(e), t._updateJoinButton())
        }), e.on("guildPaddockRemoved", function(e) {
            t.isVisible() && (t._removePaddock(e), t._updateJoinButton())
        })
    }, n.prototype._createDom = function() {
        var e = this,
            t = [{
                id: "location",
                header: c("ui.common.localisation")
            }, {
                id: "abandoned"
            }];
        this.locationTable = this.appendChild(new l(t)), this.locationTable.addClassNames("locationTable"), this.locationTable.on("rowTap", function(t) {
            e._updatePaddockDetails(t)
        });
        var i = this.createChild("div", {
                className: "rightColumn"
            }),
            n = i.createChild("div", {
                className: "infos"
            }),
            o = n.createChild("div", {
                className: "image"
            }),
            r = n.createChild("div", {
                className: "details"
            });
        this.paddockName = r.createChild("div", {
            className: "name"
        }), r.createChild("div", {
            className: ["text", "clear"],
            text: c("ui.common.objects")
        }), this.maxItems = r.createChild("div", {
            className: ["text", "right"],
            text: "-"
        }), r.createChild("div", {
            className: ["text", "clear"],
            text: c("ui.common.mounts")
        }), this.maxMounts = r.createChild("div", {
            className: ["text", "right"],
            text: "-"
        }), this.joinButton = new a({
            className: ["button", "clear"],
            text: c("ui.common.join")
        }, function() {
            e.selectedPaddock && e.selectedPaddock.paddockId && (window.dofus.sendMessage("GuildPaddockTeleportRequestMessage", {
                paddockId: e.selectedPaddock.paddockId
            }), d.close("social"))
        }), r.appendChild(this.joinButton);
        var s = [{
            id: "mount",
            header: c("ui.common.mountType")
        }, {
            id: "owner",
            header: c("ui.common.ownerWord")
        }];
        this.mountTable = i.appendChild(new l(s, null, {
            clickable: !1
        })), this.mountTable.addClassNames("mountTable"), u.preloadImage("gfx/illusUi/IllusDinde.png", function(e) {
            o.setStyle("backgroundImage", e)
        })
    }, n.prototype._updatePaddockDetails = function(e) {
        var t, i = window.gui.playerData.guild.current.paddocks || [],
            n = this;
        if (i.forEach(function(i) {
                e.rowId === i.paddockId && (t = n.selectedPaddock = i)
            }), t) {
            var o = t.enrichData || {};
            this.paddockName.setText(c("ui.common.mountPark") + " - " + o.subAreaName), this.maxItems.setText(t.maxItems + " " + c("ui.common.maxWord"));
            var a = t.mountsInformation,
                r = a.length;
            if (this.maxMounts.setText(r + " / " + t.maxOutdoorMount), this._updateJoinButton(), this.mountTable.clearContent(), r)
                for (var l = 0; l < r; l += 1) {
                    var d = a[l],
                        u = d.enrichData || {},
                        p = this.mountTable.addRow({
                            mount: u.mountType,
                            owner: d.ownerName
                        }),
                        h = d.name || c("ui.common.noName");
                    s(p, h)
                }
        }
    }, n.prototype._createLocationTableRow = function(e) {
        var t, i = new r("div", {
                className: "locationInfo"
            }),
            n = i.createChild("div");
        e.abandonned && (t = i.createChild("div", {
            className: "abandonedIcon"
        }), s(t, c("ui.social.paddockWithNoOwner")));
        var o = e.enrichData || {},
            a = isNaN(e.worldX) ? o.worldX : e.worldX,
            l = isNaN(e.worldY) ? o.worldY : e.worldY,
            d = "(" + a + ", " + l + ")";
        return n.setText(o.areaName + " (" + o.subAreaName + ") " + d), {
            location: n,
            abandoned: t || ""
        }
    }, n.prototype._updateJoinButton = function() {
        this.selectedPaddock && this.selectedPaddock.paddockId ? this.joinButton.enable() : this.joinButton.disable()
    }, n.prototype._updatePaddocks = function() {
        var e = window.gui.playerData.guild.current.paddocks || [];
        this._resetAll();
        for (var t = 0; t < e.length; t += 1) this._addPaddock(e[t])
    }, n.prototype._addPaddock = function(e) {
        var t = this._createLocationTableRow(e);
        this.locationTable.addRow(t, e.paddockId)
    }, n.prototype._removePaddock = function(e) {
        this.locationTable.hasRow(e) && this.locationTable.delRow(e)
    }, n.prototype._resetAll = function() {
        this.locationTable.clearContent(), this.mountTable.clearContent(), this.joinButton.disable(), this.paddockName.setText(""), this.maxItems.setText("-"), this.maxMounts.setText("-"), this.selectedPaddock = null
    }
}
