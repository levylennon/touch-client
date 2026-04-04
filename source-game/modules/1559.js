function(e, t, i) {
    function n(e, t) {
        return "fight:" + e + ":" + t
    }

    function o(e) {
        M[e] && (console.warn("Fight with id " + e + " already exist."), M[e].remove()), this.id = e, this.teams = {}, M[e] = this
    }

    function a(e, t) {
        switch (e.fightType) {
            case l.FIGHT_TYPE_AGRESSION:
                return N[t.teamSide][~~(t.teamTypeId === u.TEAM_TYPE_BAD_PLAYER)];
            case l.FIGHT_TYPE_Koh:
                var i, n = null,
                    o = null,
                    a = null;
                switch ("FightTeamMemberWithAllianceCharacterInformations" === t.teamMembers[0]._type && (n = t.teamMembers[0].allianceInfos.allianceId), !0) {
                    case null !== o && o === n:
                        i = 0;
                        break;
                    case null !== a && n === a:
                        i = 1;
                        break;
                    default:
                        i = 2
                }
                return R[t.teamId][i];
            case l.FIGHT_TYPE_CHALLENGE:
                return g;
            case l.FIGHT_TYPE_PvT:
                return t.teamId === d.TEAM_CHALLENGER ? g : A;
            default:
                return t.teamId === d.TEAM_CHALLENGER ? g : _;
        }
    }
    var r = i(1489),
        s = i(13),
        c = i(674),
        l = i(787),
        d = i(425),
        u = i(1040),
        p = i(700),
        h = i(1174),
        f = i(103),
        b = c.FIGHT_OPTION_KEY_TO_ENUM,
        m = c.FIGHT_OPTION_ICON_ID,
        M = {};
    o.prototype.addTeam = function(e, t) {
        this.teams[e] = {
            id: e,
            contextualId: n(this.id, e),
            icons: {},
            options: {},
            cellId: t
        }
    }, o.prototype.remove = function() {
        for (var e in this.teams) {
            var t = this.teams[e];
            window.actorManager.removeActor(t.contextualId);
            for (var i in t.icons) t.icons[i].remove()
        }
        delete M[this.id]
    }, o.prototype._createIcon = function(e, t, i) {
        function n(i) {
            return M[o.id] ? r.icons[t] ? i.release() : (r.icons[t] = new h({
                layer: s.MAP_LAYER_ICONS,
                w: i.element.width,
                h: i.element.height,
                scene: a
            }, i), r.options[t] || r.icons[t].hide(), void o._updateIconsPosition(e)) : i.release()
        }
        var o = this,
            a = window.isoEngine.mapScene,
            r = this.teams[e];
        return r ? m.indexOf(t) === -1 ? console.error(new Error("Unknown fightOption:" + t)) : r.icons[t] ? (console.warn("Icon " + t + " already exists for team " + e + " in fight " + this.id), void r.icons[t].show()) : void p.loadTexture(i, n, a.renderer) : console.error(new Error("No team with id " + e + " in fight " + this.id))
    }, o.prototype._updateIconsPosition = function(e) {
        var t = this.teams[e];
        if (!t) return console.error(new Error("No team with id " + e + " in fight " + this.id));
        var i = 0,
            n = 0;
        for (var o in t.icons) t.icons[o].isDisplayed && i++, n = Math.max(t.icons[o].w, n);
        var a = .1 * n,
            r = window.isoEngine.mapRenderer.grid.getSceneCoordinateFromCellId(t.cellId),
            c = r.x - (n + a) / 2 * (i - 1),
            l = 0;
        for (o in t.icons) t.icons[o].isDisplayed && (t.icons[o].x = c + l * (n + a) - t.icons[o].w / 2, t.icons[o].y = r.y - 2.1 * s.CELL_HEIGHT, l++)
    }, o.prototype.setFightOption = function(e, t, i) {
        var n = this.teams[e];
        if (!n) return console.error(new Error("No team with id " + e + " in fight " + this.id));
        if (void 0 === n.options[t]) return n.options[t] = i, void this._createIcon(e, t, "ui/spectator/fightOption" + t + ".png");
        if (n.options[t] = i, n.icons[t]) {
            var o = i ? "show" : "hide";
            n.icons[t][o](), this._updateIconsPosition(e)
        }
    }, o.prototype.challengeOptionChange = function(e, t, i) {
        var n = this.teams[e];
        return n ? void(m.indexOf(t) !== -1 && this.setFightOption(e, t, i)) : console.error(new Error("No team with id " + e + " in fight " + this.id))
    };
    var g = 19,
        _ = 20,
        A = 21,
        O = 32,
        v = 33,
        y = 1237,
        z = 1235,
        w = 1236,
        T = 2248,
        C = 2249,
        I = 2251,
        S = 2252,
        E = 2253,
        L = 2255,
        N = {
            "-1": [g, g],
            0: [y, y],
            1: [z, O],
            2: [w, v],
            3: [y, y]
        },
        R = {
            0: [T, I, C],
            1: [S, L, E]
        };
    r.prototype.showChallenge = function(e) {
        if (e.fightType !== l.FIGHT_TYPE_PVP_ARENA_3V3 && e.fightType !== l.FIGHT_TYPE_PVP_ARENA_1V1)
            for (var t = this.actorManager, i = e.fightId, r = e.fightTeams, s = e.fightTeamsPositions, c = e.fightTeamsOptions, d = new o(i), u = 0; u < r.length; u++) {
                var p = r[u],
                    h = a(e, p);
                p.fightId = i, p.look = {
                    bonesId: h,
                    scales: [100],
                    skins: [],
                    indexedColors: []
                }, p.disposition = {
                    cellId: s[u],
                    direction: 0
                }, p.contextualId = n(i, p.teamId), t.addEmptyActor(p), d.addTeam(p.teamId, s[u]), t.setActorLook(p.contextualId, p.look, {}, null);
                for (var f in c[u]) void 0 !== b[f] && c[u][f] && d.setFightOption(p.teamId, b[f], !0)
            }
    }, r.prototype.addChallenges = function(e) {
        for (var t = 0; t < e.length; t++) this.showChallenge(e[t])
    }, r.prototype.removeChallenge = function(e) {
        var t = M[e];
        return t ? void t.remove() : console.warn("No challenge with id " + e)
    }, r.prototype.cleanupChallenges = function() {
        for (var e in M) M[e].remove()
    }, r.prototype.challengeOptionChange = function(e, t, i, n) {
        var o = M[e];
        return o ? void o.challengeOptionChange(t, i, n) : console.warn("No challenge with id " + e)
    }, r.prototype.updateFightTeam = function(e) {
        if (!f.isFightMode) {
            var t = e.fightId,
                i = e.team;
            i.fightId = t;
            var o = i.teamId,
                a = n(t, o),
                r = this.actorManager.getActor(a);
            return r ? void r.updateData(i) : console.warn("No fight id " + a)
        }
    }
}
