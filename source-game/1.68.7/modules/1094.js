function(e, t, i) {
    function n() {
        a.call(this, {
            className: "GuildHouseSettingWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 500,
                height: 490
            }
        });
        var e = this;
        this.checkboxes = [], this.once("open", function() {
            e._setupDom(), e.setupSockets()
        }), this.on("open", function() {
            var t = window.gui.playerData.guild.current;
            t && e.emblemLogo.setValue({
                guild: t
            })
        })
    }
    i(1095);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(86)
        .DofusButton,
        c = i(594),
        l = i(17)
        .getText,
        d = i(437),
        u = i(453);
    o(n, a), e.exports = n, n.prototype._setupDom = function() {
        var e = this,
            t = this.windowBody.createChild("div", {
                className: ["container", "topContainer"]
            });
        this.emblemLogo = t.appendChild(new d({
            width: 100,
            height: 100
        }));
        var i = t.createChild("div", {
            className: "content"
        });
        this.checkboxes.push(i.appendChild(new c(l("ui.common.guildHouseEnabledForThisHouse")))), i.createChild("div", {
            className: "description",
            text: l("ui.common.guildHouseNotice")
        });
        var n = this.windowBody.createChild("div", {
                className: ["container", "bottomContainer"]
            }),
            o = n.appendChild(new u({
                className: "scroller"
            })),
            a = o.content,
            p = this.doorEmblem = a.createChild("div", {
                className: "section"
            });
        p.createChild("div", {
            className: "title",
            text: l("ui.common.guildHouseDisplayEmblemOnDoorTitle") + ":"
        }), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseDisplayEmblemForGuild")))), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseDisplayEmblemForOthers")))), p = this.houseAccess = a.createChild("div", {
            className: "section"
        }), p.createChild("div", {
            className: "title",
            text: l("ui.common.guildHouseHouseAccessTitle") + ":"
        }), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseAccessHouseAllowGuildmates")))), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseAccessHouseDenyOthers")))), p = this.chests = a.createChild("div", {
            className: "section"
        }), p.createChild("div", {
            className: "title",
            text: l("ui.common.guildHouseSafesAccessTitle") + ":"
        }), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseRight32")))), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseRight64")))), p = this.miscellaneous = a.createChild("div", {
            className: "section"
        }), p.createChild("div", {
            className: "title",
            text: l("ui.common.guildHouseOtherTitle") + ":"
        }), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseAllowTeleport")))), this.checkboxes.push(p.appendChild(new c(l("ui.common.guildHouseAllowRespawn"))));
        var h = this.windowBody.createChild("div", {
                className: "buttonContainer"
            }),
            f = h.appendChild(new s(l("ui.common.validation")));
        f.on("tap", function() {
            for (var t = 0, i = 0; i < e.checkboxes.length; i++) e.checkboxes[i].isActivate() && (t += 1 << i);
            var n = e.checkboxes[0].isActivate();
            window.dofus.sendMessage("HouseGuildShareRequestMessage", {
                enable: n,
                rights: t
            }), r.close(e.id)
        }), this.checkboxes[0].on("activate", function() {
            e.enableContainers()
        }), this.checkboxes[0].on("deactivate", function() {
            e.disableContainers()
        }), o.refresh()
    }, n.prototype.updateCheckboxes = function(e) {
        for (var t = 0; t < this.checkboxes.length; t++) e >> t & 1 ? this.checkboxes[t].activate() : this.checkboxes[t].deactivate()
    }, n.prototype.enableContainers = function() {
        this.doorEmblem.delClassNames("disabled"), this.houseAccess.delClassNames("disabled"), this.chests.delClassNames("disabled"), this.miscellaneous.delClassNames("disabled");
        for (var e = 0; e < this.checkboxes.length; e++) this.checkboxes[e].enable()
    }, n.prototype.disableContainers = function() {
        this.doorEmblem.addClassNames("disabled"), this.houseAccess.addClassNames("disabled"), this.chests.addClassNames("disabled"), this.miscellaneous.addClassNames("disabled");
        for (var e = 1; e < this.checkboxes.length; e++) this.checkboxes[e].disable()
    }, n.prototype.setupSockets = function() {
        var e = this;
        window.gui.on("HouseGuildRightsMessage", function(t) {
            e.windowTitle.setText(l("ui.common.houseOwnerName", t.guildInfo.guildName));
            var i = t.guildInfo.guildEmblem;
            e.emblemLogo.setValue(i, !0), e.updateCheckboxes(t.rights), e.enableContainers()
        }), window.gui.on("HouseGuildNoneMessage", function() {
            for (var t = 0; t < e.checkboxes.length; t++) e.checkboxes[t].deactivate();
            e.disableContainers()
        })
    }
}
