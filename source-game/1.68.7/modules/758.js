function(e, t, i) {
    function n() {
        g.call(this, "div", {
            className: "KohBox",
            hidden: !0
        }), f(this), this.on("tap", function() {
            window.gui.windowsContainer.appendChild(this)
        }), this.once("show", function() {
            this._createDom()
        });
        var e = this;
        window.gui.on("KohUpdateMessage", function(t) {
            e.show(), e._setCurrentState(t)
        }), this.isInProbation = !1, window.gui.on("UpdateSelfAgressableStatusMessage", function(t) {
            switch (t.status) {
                case s.AvA_ENABLED_AGGRESSABLE:
                    e.isInProbation = !1;
                    break;
                case s.AvA_PREQUALIFIED_AGGRESSABLE:
                    e.isInProbation = !0
            }
        })
    }

    function o(e, t, i, n, o, a) {
        var r = new g("div", {
            className: ["side", t]
        });
        c(r, i);
        var s = new u({
            width: 25,
            height: 25
        });
        s.setValue(e.allianceEmblem, !0), c(s, e.allianceName + " [" + e.allianceTag + "]");
        var d = new g("div", {
            text: e.allianceTag
        });
        return f(d), d.on("tap", function() {
            l.openAllianceCard(e.allianceId)
        }), {
            side: r,
            emblem: s,
            tag: d,
            characters: a,
            maps: o,
            time: n
        }
    }
    i(759);
    var a, r, s = i(523),
        c = i(88)
        .addTooltip,
        l = i(537),
        d = i(54)
        .dimensions,
        u = i(437),
        p = i(17)
        .getText,
        h = i(56)
        .inherits,
        f = i(63),
        b = i(760)
        .serverConstants,
        m = i(524),
        M = i(765),
        g = i(72),
        _ = i(770);
    h(n, g), n.prototype._createDom = function() {
        function e() {
            w.delClassNames("close"), setTimeout(function() {
                w.replaceClassNames(["full"], ["open"]), z = "open"
            }, 0)
        }
        var t = window.gui.serversData;
        a = t.sessionConstants[b.SERVER_CONST_KOH_WINNING_SCORE], r = Math.floor(t.sessionConstants[b.SERVER_CONST_KOH_DURATION]), this.setStyle("left", d.mapLeft + Math.floor(d.mapWidth / 2) + "px");
        var i = this.createChild("div", {
            className: "displaySwitch"
        });
        i.createChild("div", {
            className: "arrow"
        });
        var n = this.createChild("div", {
                className: "mainBox"
            }),
            o = n.createChild("div", {
                className: "topBox"
            }),
            s = n.createChild("div", {
                className: "secondaryBox"
            });
        this.gauge = o.appendChild(new _(["green", "blue", "red"], 380));
        var l = Math.floor(r / 1e3 / 60),
            u = Math.floor(l / 60) + ":" + l % 60,
            h = o.createChild("div", {
                className: "kohInfo"
            });
        c(h, p("ui.koh.tooltip.rules", a, u), {
            openOnTap: !0
        });
        var m = s.createChild("div", {
                className: "allianceBox"
            }),
            g = [
                 { id: "side" },
                 { id: "emblem" },
                 { id: "tag", header: p("ui.common.alliance") },
                 { id: "characters", header: p("ui.short.characters") },
                 { id: "maps", header: p("ui.common.maps"), sort: !0 },
                 { id: "time", header: p("ui.common.time"), sort: !0 }
                ];
        this.table = m.appendChild(new M(g, null, {
            clickable: !1
        }));
        var A = this.table.getColumnHeader("characters"),
            O = this.table.getColumnHeader("maps"),
            v = this.table.getColumnHeader("time");
        A && c(A, p("ui.koh.tooltip.members")), O && c(O, p("ui.koh.tooltip.maps")), v && c(v, p("ui.koh.tooltip.time")), this.winnerInfo = m.createChild("div", {
            className: "info"
        });
        var y = s.createChild("div", {
            className: "statsBox"
        });
        this.winnerStats = y.createChild("div", {
            className: "winnerStats"
        }), c(this.winnerStats, p("ui.koh.tooltip.mapConquest")), this.myStats = y.createChild("div", {
            className: "myStats"
        }), c(this.myStats, p("ui.koh.tooltip.mapConquestForMyAlliance"));
        var z;
        f(i);
        var w = this;
        i.on("tap", function() {
            switch (z) {
                case "open":
                    w.replaceClassNames(["open", "close"], ["full"]), z = "full";
                    break;
                case "full":
                    w.delClassNames("open", "full"), setTimeout(function() {
                        w.addClassNames("close")
                    }, 200), z = "close";
                    break;
                case "close":
                    e()
            }
        }), this.on("hide", e), e()
    }, n.prototype._setCurrentState = function(e) {
        var t = this;
        this.table.clearContent();
        for (var i = window.gui.playerData, n = i.alliance.current, r = i.position, s = m.entities.prism[r.subAreaId], c = s && s.prism && s.prism.alliance || n, d = 0, u = 0, h = {
                mine: {
                    weight: 0,
                    type: p("ui.alliance.myAlliance"),
                    tooltip: ""
                },
                defense: {
                    weight: 0,
                    type: p("ui.alliance.allianceInDefense"),
                    tooltip: ""
                },
                attack: {
                    weight: 0,
                    type: p("ui.alliance.allianceInAttack"),
                    tooltip: ""
                }
            }, b = 0, M = e.alliances.length; b < M; b += 1) {
            var _ = e.alliances[b],
                A = e.allianceNbMembers[b],
                O = e.allianceMatchScore[b],
                v = e.allianceRoundWeigth[b];
            d += v;
            var y;
            y = _.allianceId === n.allianceId ? "mine" : _.allianceId === c.allianceId ? "defense" : "attack";
            var z = O + "/" + a,
                w = h[y];
            w.weight += v, w.tooltip += _.allianceName + " [" + _.allianceTag + "] (" + v + ") : " + z + "\n", this.table.addRow(o(_, y, w.type, z, v, A)), e.allianceMatchScore[u] < O && (u = b)
        }
        d = d || 1, h.mine.weight /= d, h.mine.tooltip += h.mine.type, h.defense.weight /= d, h.defense.tooltip += h.defense.type, h.attack.weight /= d, h.attack.tooltip += h.attack.type, this.gauge.setValues([h.mine, h.defense, h.attack]);
        var T = e.alliances[u],
            C = e.allianceMatchScore[u];
        if (T && C >= a) return this.winnerInfo.setText(p("ui.koh.win", T.allianceName)), this.winnerInfo.show(), void setTimeout(function() {
            t.winnerInfo.setText(""), t.hide()
        }, 6e4);
        var I = e.allianceMapWinner,
            S = e.allianceMapWinnerScore;
        this.winnerStats.clearContent();
        var E = r.coordinates;
        if (this.winnerStats.createChild("span", {
                text: p("ui.option.worldOption") + " [" + E.posX + ", " + E.posY + "]" + p("ui.common.colon")
            }), 0 === S || this.isInProbation) this.winnerStats.createChild("span", {
            text: p("ui.common.neutral")
        });
        else if ("" === I.allianceTag) this.winnerStats.createChild("span", {
            text: p("ui.koh.draw", S)
        });
        else {
            var L = this.winnerStats.createChild("span", {
                text: I.allianceTag,
                className: "link"
            });
            f(L), L.on("tap", function() {
                l.openAllianceCard(I.allianceId)
            }), this.winnerStats.appendChild(new g("span", {
                text: " " + S + " " + p("ui.short.points")
            }))
        }
        if (I.allianceId !== n.allianceId && S > 0 && !this.isInProbation) {
            this.myStats.clearContent(), this.myStats.createChild("span", {
                text: "("
            });
            var N = this.myStats.createChild("span", {
                text: n.allianceTag,
                className: "link"
            });
            f(N), N.on("tap", function() {
                l.openAllianceCard(n.allianceId)
            }), this.myStats.appendChild(new g("span", {
                text: " " + e.allianceMapMyAllianceScore + " " + p("ui.short.points") + ")"
            })), this.myStats.show()
        } else this.myStats.hide()
    }, e.exports = n
}
