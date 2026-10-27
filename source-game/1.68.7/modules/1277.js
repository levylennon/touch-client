function(e, t, i) {
    function n() {
        function e() {
            u.open("crafter", {
                crafter: this.crafter,
                job: w
            })
        }

        function t() {
            window.gui.openContextualMenu("player", {
                playerId: this.playerInfo.playerId,
                accountId: v.accountId,
                playerName: this.playerInfo.playerName
            })
        }

        function i(e) {
            var t = new h("div", {
                    className: "avatar"
                }),
                i = "gfx/heads/SmallHead_" + e.breed + (e.sex ? 0 : 1) + ".png";
            return f.preloadImage(i, function(e) {
                t && t.rootElement && t.setStyle("backgroundImage", e)
            }), t
        }

        function n(e) {
            var i = new p({
                className: "userNameButton",
                text: e.playerName
            });
            return i.playerInfo = e, i.on("tap", t), i
        }

        function a(e) {
            return new h("div", {
                className: ["relation", e]
            })
        }

        function b(e, t) {
            return e.level - t.level
        }

        function m(t) {
            var r = t || {},
                s = new p;
            s.crafter = r, s.on("tap", e);
            var c = 0 !== (r.jobInfo.userDefinedParams & o.CRAFT_OPTION_NOT_FREE),
                l = "( " + r.playerInfo.worldX + "," + r.playerInfo.worldY + " )",
                d = r.playerInfo.isInWorkshop ? l : "-",
                u = "none";
            if (r.playerInfo.guildInfo) {
                var h = r.playerInfo.guildInfo.guildId;
                if (r.playerInfo.allianceInfo) {
                    var f = window.gui.playerData.alliance.isGuildOnSameAlliance(h);
                    f && (u = "alliance")
                }
                if (r.playerInfo.guildInfo) {
                    var b = window.gui.playerData.guildData.isOnSameGuild(h);
                    b && (u = "guild")
                }
            }
            var m = window.gui.playerData.socialData.isFriend(r.playerInfo.playerId);
            return m && (u = "friend"), r.playerInfo.playerId === window.gui.playerData.id && (u = "myself"), {
                avatar: i(r.playerInfo),
                name: n(r.playerInfo),
                level: r.jobInfo.jobLevel,
                coord: d,
                cost: c ? T : C,
                nbSlots: r.jobInfo.minSlots,
                relation: a(u),
                button: s
            }
        }

        function M(e) {
            if (v.table.clearContent(), e.length)
                for (var t = 0; t < e.length; t += 1) g(e[t])
        }

        function g(e) {
            v.table.addRow(m(e), e.playerInfo.playerId)
        }

        function _(e) {
            v.table.delRow(e.playerId)
        }

        function A(e) {
            v.table.updateRow(m(e), e.playerInfo.playerId)
        }

        function O() {
            v.selector.clearContent(), v.table.clearContent()
        }
        r.call(this, {
            className: "CraftersListWindow",
            title: s("ui.craft.craftersList"),
            positionInfo: {
                top: "c",
                left: "c",
                width: 650,
                height: 480
            }
        });
        var v = this,
            y = window.gui,
            z = [],
            w = {},
            T = s("ui.common.yes"),
            C = s("ui.common.no");
        y.on("ExchangeStartOkJobIndexMessage", function(e) {
            u.openDialog(v.id, {
                msg: e
            })
        }), y.on("JobCrafterDirectoryListMessage", function(e) {
            M(e.listEntries)
        }), y.on("JobCrafterDirectoryAddMessage", function(e) {
            return v.table.hasRow(e.listEntry.playerInfo.playerId) ? A(e.listEntry) : void g(e.listEntry)
        }), y.on("JobCrafterDirectoryRemoveMessage", _), this.once("open", function() {
            v.selector = v.windowBody.appendChild(new c);
            var e = [{
                id: "avatar"
            }, {
                id: "name",
                header: s("ui.common.name")
            }, {
                id: "level",
                header: s("ui.common.short.level"),
                sort: b
            }, {
                id: "coord",
                header: s("ui.common.coordinatesSmall")
            }, {
                id: "cost",
                header: s("ui.common.cost")
            }, {
                id: "nbSlots",
                header: "nb"
            }, {
                id: "relation",
                header: s("ui.common.friends")
            }, {
                id: "button"
            }];
            v.table = v.windowBody.appendChild(new l(e)), v.selector.on("change", function(e) {
                return e < 0 ? void v.table.clearContent() : (w = e, void window.dofus.sendMessage("JobCrafterDirectoryListRequestMessage", {
                    jobId: e.id
                }))
            })
        }), this.on("open", function(e) {
            e = e || {}, z = e.msg.jobs, d.getDataArray("Jobs", z, function(e, t) {
                if (e) return console.error(e);
                v.selector.clearContent(), v.selector.addOption(s("ui.craft.chooseJob"), -1);
                for (var i = 0; i < t.length; i += 1) {
                    var n = t[i];
                    v.selector.addOption(n.nameId, n)
                }
                1 === t.length && v.selector.select(t[0])
            })
        }), this.on("close", O)
    }
    i(1278);
    var o = i(1251),
        a = i(56)
        .inherits,
        r = i(70),
        s = i(17)
        .getText,
        c = i(945),
        l = i(765),
        d = i(130),
        u = i(52),
        p = i(86),
        h = i(72),
        f = i(12);
    a(n, r), e.exports = n
}
