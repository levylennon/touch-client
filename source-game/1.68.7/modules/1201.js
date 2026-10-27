function(e, t, i) {
    function n() {
        m.call(this, "div", {
            className: "ConquestsTab"
        }), this.once("open", function() {
            this._createDom(), this._setupEvents(), this._updateConquests()
        })
    }

    function o(e, t) {
        var i = new b({
            className: "settings"
        }, function() {
            f.open("prismVulnerabilityDate", {
                prism: e,
                vulnerableTime: t
            })
        });
        return a(i, null, c("ui.prism.changeVulnerabilityHour")), i
    }
    i(1202);
    var a = i(88)
        .addTooltip,
        r = i(537),
        s = i(527),
        c = i(17)
        .getText,
        l = i(520),
        d = i(56)
        .inherits,
        u = i(522),
        p = i(765),
        h = i(21),
        f = i(52),
        b = i(86),
        m = i(72);
    d(n, m), e.exports = n, n.prototype._setupEvents = function() {
        function e() {
            var e = window.gui.playerData.position.subAreaId;
            t.table.hasRow(e) ? t.table.selectRow(e) : t.table.unSelectRow()
        }
        var t = this;
        this.on("open", e);
        var i = window.gui.playerData.alliance;
        i.on("prismUpdatedList", function(i) {
            t.table.updateRows(i), t._updateConquests(), e()
        }), i.on("prismDeletedList", function(i) {
            t.table.delRows(i), t._updateConquests(), e()
        }), this.on("allianceUpdated", function(t) {
            this.table.clearContent(), this.table.addMap(t.prisms), this._updateConquests(), this.table.setContentLoading(!1), e()
        }), this.on("allianceUpdateRequested", function() {
            this.table.setContentLoading(!0)
        }), this.table.addMap(i.current.prisms), e()
    }, n.prototype._createDom = function() {
        function e(e) {
            var t, i = e.prism,
                r = new h.DofusDate(1e3 * i.nextVulnerabilityDate),
                d = r.getServerDate(),
                p = d.toString()
                .time,
                f = n.guild.hasRight(l.GUILD_RIGHT_MANAGE_ALLIANCE_PRISM);
            if (i.state !== u.PRISM_STATE_INVULNERABLE && i.state !== u.PRISM_STATE_NORMAL || !f) t = p;
            else {
                t = new m("div", {
                    className: "timeSetting"
                });
                var b = t.createChild("div", {
                        text: p
                    }),
                    M = s.guilds[i.lastTimeSlotModificationAuthorGuildId];
                M && a(b, c("ui.prism.lastVulnerabilityChange", new h.DofusDate(1e3 * i.lastTimeSlotModificationDate)
                        .getLocalDate()
                        .toString()
                        .date, i.lastTimeSlotModificationAuthorName, M.guildName) + "\n" + c("ui.prism.serverVulnerabilityHour") + " : " + p + "\n" + c("ui.prism.localVulnerabilityHour") + " : " + r.getLocalDate()
                    .toString()
                    .time), t.appendChild(o(e, r))
            }
            return t
        }

        function t(e) {
            var t = e.prism,
                i = new m("div", {
                    text: r.prismState[t.state]
                }),
                n = r.getPrismStateInfo(t.state, 1e3 * t.nextVulnerabilityDate - Date.now());
            return a(i, n), i
        }

        function i(e) {
            var t = e.enrichData,
                i = new m("div", {
                    text: t.subAreaName + " (" + t.areaName + ")"
                });
            return a(i, c(t.isConquestVillage ? "ui.zaap.village" : "ui.zaap.prism")), i
        }
        this.conquestsInfo = this.createChild("div", {
            className: "conquestsInfo"
        });
        var n = window.gui.playerData;
        this.table = this.appendChild(new p([{
            id: "subArea",
            header: c("ui.map.subarea"),
            format: i,
            getContent: function(e) {
                return e.enrichData.subAreaName
            },
            sort: !0,
            defaultSorter: !0
        }, {
            id: "worldX",
            header: c("ui.common.coordinatesSmall"),
            format: function(e) {
                return e.worldX + "," + e.worldY
            },
            sort: !0
        }, {
            id: "placementDate",
            header: c("ui.social.guild.taxStartDate"),
            format: function(e) {
                return new h.DofusDate(1e3 * e.prism.placementDate)
                    .getServerDate()
                    .toString()
                    .date
            },
            getContent: function(e) {
                return e.prism.placementDate
            },
            sort: !0
        }, {
            id: "state",
            header: c("ui.common.state"),
            format: t,
            getContent: function(e) {
                return e.prism.state
            },
            sort: !0
        }, {
            id: "nextVulnerabilityDate",
            header: c("ui.prism.startVulnerability"),
            format: e,
            getContent: function(e) {
                return e.prism.nextVulnerabilityDate
            },
            sort: !0
        }], "subAreaId", {
            clickable: !1
        }))
    }, n.prototype._updateConquests = function() {
        var e = window.gui.playerData,
            t = e.alliance.current.prisms,
            i = 0,
            n = 0;
        for (var o in t) {
            var a = t[o];
            a.mapId <= -1 || (a.enrichData.isConquestVillage ? n += 1 : i += 1)
        }
        0 === i && 0 === n ? this.conquestsInfo.setText(c("ui.alliance.noArea")) : i > 0 && 0 === n ? this.conquestsInfo.setText(c("ui.alliance.nbAreas", i)) : 0 === i && n > 0 ? this.conquestsInfo.setText(c("ui.alliance.nbVillages", n)) : this.conquestsInfo.setText(c("ui.alliance.nbAreasAndVillages", i, n))
    }
}
