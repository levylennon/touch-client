function(e, t, i) {
    function n() {
        return window.gui.playerData.MatchmakingData.isOnKolosseum1v1Queue()
    }

    function o() {
        return window.gui.playerData.MatchmakingData.isOnKolosseum3v3Queue()
    }

    function a() {
        var e = window.gui.playerData.MatchmakingData;
        return e.getKolosseum1v1Status() === q.COMPLETED
    }

    function r() {
        var e = window.gui.playerData.MatchmakingData;
        return e.getKolosseum3v3Status() === q.COMPLETED
    }

    function s() {
        var e = window.gui.playerData.MatchmakingData,
            t = e.getKolosseum1v1Status() !== q.REQUIRES_ACCEPTANCE;
        return !n() && t
    }

    function c() {
        var e = window.gui.playerData.MatchmakingData,
            t = e.getKolosseum3v3Status() !== q.REQUIRES_ACCEPTANCE;
        return !o() && t
    }

    function l() {
        window.dofus.sendMessage("MatchmakingCancelRequestMessage", {
            matchmakingFeature: R.PVP_1VS1
        })
    }

    function d() {
        window.dofus.sendMessage("MatchmakingCancelRequestMessage", {
            matchmakingFeature: R.PVP_3VS3
        })
    }

    function u() {
        window.dofus.sendMessage("MatchmakingCreateRequestMessage", {
            matchmakingFeature: R.PVP_1VS1,
            matchmakingData: {
                selectors: []
            }
        })
    }

    function p() {
        window.dofus.sendMessage("MatchmakingCreateRequestMessage", {
            matchmakingFeature: R.PVP_3VS3,
            matchmakingData: {
                selectors: []
            }
        })
    }

    function h(e) {
        return e === q.COMPLETED
    }

    function f() {
        var e = window.gui.playerData.partyData.arenaStats;
        return e[R.PVP_1VS1].hasClaimedDailyReward
    }

    function b() {
        var e = window.gui.playerData.partyData.arenaStats;
        return e[R.PVP_3VS3].hasClaimedDailyReward
    }

    function m() {
        var e = window.gui.playerData.partyData.arenaBonus;
        return e.bonus1v1
    }

    function M() {
        var e = window.gui.playerData.partyData.arenaBonus;
        return e.bonus3v3
    }

    function g() {
        var e = window.gui.playerData.partyData.arenaStats;
        return e[R.PVP_1VS1]
    }

    function _() {
        var e = window.gui.playerData.partyData.arenaStats;
        return e[R.PVP_3VS3]
    }

    function A(e, t) {
        function i() {
            function n() {
                e.scrollTo(e.getLadderRow(s)), e.removeListener("loaded", n)
            }
            e.removeListener("loaded", i);
            var o = window.gui.playerData.partyData.arenaStats[t],
                a = o.isFiltered ? o.filtered.position : o.position,
                r = Math.trunc(a / D),
                s = a % D;
            return e.getCurrentPage() !== r ? (e.displayPage(r), e.on("loaded", n)) : void e.scrollTo(e.getLadderRow(s))
        }
        e.refreshPlayerData(), e.on("playerDataLoaded", i)
    }

    function O(e) {
        A(e, R.PVP_1VS1)
    }

    function v(e) {
        A(e, R.PVP_3VS3)
    }

    function y(e) {
        var t = window.gui.playerData.partyData.arenaStats[e];
        return t.isFiltered ? t.filtered.position > -1 : t.position > -1
    }

    function z() {
        return y(R.PVP_1VS1)
    }

    function w() {
        return y(R.PVP_3VS3)
    }

    function T(e) {
        var t = "";
        return Object.keys(e)
            .forEach(function(i) {
                "" !== String(e[i]) && (t += "filters[" + i + "]=" + e[i] + "&")
            }), t
    }

    function C(e) {
        var t = "",
            i = W[e].id;
        if (200 === i) t = i;
        else {
            for (var n = [], o = 0; o < 10; o++) n.push(i + o);
            t = n.join(",")
        }
        return t
    }

    function I(e, t) {
        t = t || {};
        var i = new x("div", {
            className: "tooltipContent"
        });
        if ("string" == typeof t.placeholder ? i.setText(t.placeholder) : i.setText(e), t.boldContent) {
            var n = i.createChild("b");
            n.setText(t.boldContent);
            var o = i.createChild("span");
            o.setText(e)
        }
        return B.addTooltip(i, e), i
    }

    function S(e, t, i) {
        for (var n = e.getCurrentPage(), o = window.gui.playerData.partyData.arenaStats[i], a = o.isFiltered ? o.filtered.position : o.position, r = Math.trunc(a / D), s = a % D, c = 0; c < t; c += 1) {
            var l = e.getLadderRow(c);
            if (l) {
                var d = l.rank.content;
                l.toggleClassName("first", 1 === d), l.toggleClassName("second", 2 === d), l.toggleClassName("third", 3 === d), a < 4 || l.toggleClassName("player", n === r && s.toString() === l.rowId)
            }
        }
    }

    function E(e, t) {
        S(e, t, R.PVP_3VS3)
    }

    function L(e, t) {
        S(e, t, R.PVP_1VS1)
    }

    function N(e) {
        var t = e.getPlayerRow(),
            i = t.score.content;
        if (!isNaN(i)) {
            if (i < 0) return void e.updatePlayerCell("score", {
                score: "-"
            });
            i = Math.round(i * Math.pow(10, 4)) / Math.pow(10, 4);
            var n = new x("div", {});
            n.setText(Math.round(i)
                .toString()), B.addTooltip(n, i.toString()), e.updatePlayerCell("score", {
                score: n
            })
        }
    }
    var R = i(508),
        q = i(844),
        x = i(72),
        B = i(88),
        D = 50,
        W = [{
            desc: "50 - 59",
            id: 50
        }, {
            desc: "60 - 69",
            id: 60
        }, {
            desc: "70 - 79",
            id: 70
        }, {
            desc: "80 - 89",
            id: 80
        }, {
            desc: "90 - 99",
            id: 90
        }, {
            desc: "100 - 109",
            id: 100
        }, {
            desc: "110 - 119",
            id: 110
        }, {
            desc: "120 - 129",
            id: 120
        }, {
            desc: "130 - 139",
            id: 130
        }, {
            desc: "140 - 149",
            id: 140
        }, {
            desc: "150 - 159",
            id: 150
        }, {
            desc: "160 - 169",
            id: 160
        }, {
            desc: "170 - 179",
            id: 170
        }, {
            desc: "180 - 189",
            id: 180
        }, {
            desc: "190 - 199",
            id: 190
        }, {
            desc: "200",
            id: 200
        }];
    t.LEVEL_RANGES = W, t.isQueued1v1 = n, t.isQueued3v3 = o, t.isCompleted1v1 = a, t.isCompleted3v3 = r, t.canTag1v1 = s, t.canTag3v3 = c, t.cancel1v1 = l, t.cancel3v3 = d, t.subscribe1v1 = u, t.subscribe3v3 = p, t.isMatchmakingSuccessfull = h, t.is1v1FirstVictory = f, t.is3v3FirstVictory = b, t.is1v1ArenaBonus = m, t.is3v3ArenaBonus = M, t.get1v1Data = g, t.get3v3Data = _, t.findMe1v1 = O, t.findMe3v3 = v, t.canFindMe1v1 = z, t.canFindMe3v3 = w, t.forgeFilters = T, t.filterPerLevelValue = C, t.createTooltip = I, t.setTopPlayersDisplay3v3 = E, t.setTopPlayersDisplay1v1 = L, t.displayNonDecimalScorePlayer = N
}
