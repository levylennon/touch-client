function(e, t, i) {
    function n(e, t, i) {
        return e === t ? "ally" : e === i ? "defender" : "attacker"
    }

    function o(e) {
        var t = 0,
            i = window.gui.playerData.characterBaseInformations.level;
        return i >= e.levelMin && i <= e.levelMax && (t += 2), e.repeatType !== T && (t += 1), t
    }

    function a(e, t) {
        var i = e.questsToValidId.concat(e.questsToStartId);
        M.getDataMap("Quests", i, null, function(e, i) {
            if (e) return t(e);
            var n, a;
            for (var r in i) {
                var s = i[r];
                if (s) {
                    var c = o(s);
                    (!n || a < c) && (a = c, n = s)
                }
            }
            return t(null, n)
        })
    }

    function r(e, t) {
        a(e, function(i, n) {
            if (i) return t(i);
            if (!n) return t();
            var o = "quest";
            return n.repeatType !== T ? o += "Repeatable" : n.isMain && (o += "Main"), e.questsToStartId.indexOf(n.id) === -1 && (o += "Objective"), o += "Clip", t(null, o)
        })
    }
    var s = i(1514),
        c = i(13),
        l = i(696),
        d = i(1174),
        u = i(700),
        p = i(697),
        h = i(524),
        f = i(430)
        .Delay,
        b = i(522),
        m = i(523),
        M = i(130),
        g = c.CELL_HEIGHT,
        _ = g / 2,
        A = 24,
        O = c.ICON_CATEGORY_ENUM,
        v = {
            miniBoss: "miniboss",
            boss: "bossmonsters",
            wanted: "wantedmonsters",
            hardcoreDrop: "treasure",
            defender: "defender",
            attacker: "forward",
            ally: "ownTeam",
            disqualified: "neutral",
            prequalified: "clock"
        },
        y = 5,
        z = 5,
        w = 72,
        T = 0,
        C = new f;
    s.prototype._getIcon = function(e, t) {
        return this.icons.hasOwnProperty(t) ? this.icons[t][e] : null
    }, s.prototype._setIcon = function(e, t, i) {
        this.icons.hasOwnProperty(i) || (this.icons[i] = {}), this.icons[i][t] = e
    }, s.prototype.addConquestIcon = function(e) {
        var t = window.gui.playerData,
            i = !1,
            o = t.characters.mainCharacter.characteristics;
        if (o) {
            var a = o && o.alignmentInfos.aggressable;
            i = a !== m.NON_AGGRESSABLE
        } else console.error(new Error("characteristics of the player are null, isPlayerAggressable will be false"));
        var r, s = e.aggressable !== m.NON_AGGRESSABLE,
            c = e.aggressable === m.PvP_ENABLED_AGGRESSABLE || e.aggressable === m.PvP_ENABLED_NON_AGGRESSABLE;
        if (i && t.alliance.hasAlliance() && s && !c) {
            var l = h.entities.prism[t.position.subAreaId];
            if (l && l.prism && l.prism.state === b.PRISM_STATE_VULNERABLE) {
                var d = e.allianceInformations.allianceId,
                    u = t.alliance.current.allianceId,
                    p = l.getAlliance()
                    .allianceId,
                    f = this.actorId === t.id;
                switch (e.aggressable) {
                    case m.AvA_DISQUALIFIED:
                        f && (r = "disqualified");
                        break;
                    case m.AvA_PREQUALIFIED_AGGRESSABLE:
                        r = f ? "prequalified" : n(d, u, p);
                        break;
                    case m.AvA_ENABLED_AGGRESSABLE:
                        r = f ? "ally" : n(d, u, p)
                }
            }
        }
        this._getIcon(r, O.AVA) || (this.removeIconCategory(O.AVA), r && this.addIcon(r, O.AVA))
    }, s.prototype.addSmileyIcon = function(e) {
        var t = this,
            i = window.gui.databases.Smileys[e];
        if (!i) return console.error("Smiley " + e + " details are not available, it could not be displayed");
        var n = O.SMILEY;
        this.removeIconCategory(n), this.addIcon(i.gfxId, n), (C.playing || C.starting) && C.stop(), C.reset(w, function() {
            t.removeIconCategory(n)
        }), C.start()
    }, s.prototype.addReadyIconOnActor = function() {
        this.addIcon("Social_tx_fightState", O.UI)
    }, s.prototype.removeReadyIconOnActor = function() {
        this.removeIconCategory(O.UI)
    }, s.prototype.addQuestIcon = function(e, t) {
        t = t || function(e) {
            if (e) return console.error("addQuestIcon:", e)
        };
        var i = this,
            n = this._questIconLoadingStartTime = Date.now();
        r(e, function(e, o) {
            if (e) return t(e);
            if (!o) return t();
            if (i._getIcon(o, O.QUEST)) return t();
            if (n !== i._questIconLoadingStartTime) return t();
            var a = new l({
                layer: c.MAP_LAYER_ICONS,
                x: i.x,
                y: i.y,
                offsetY: 0,
                scene: i.scene
            });
            a.scaleX = .5, a.scaleY = .5, p.loadAnimationManager(a, "embedded", "quest", function(e) {
                var r = i._questIconLoadingStartTime;
                return i._questIconLoadingStartTime = null, n !== r ? (a.remove(), t()) : (e.assignSymbol({
                    base: o,
                    direction: -1
                }, !0), i.removeQuestIcon(), i._setIcon(a, o, O.QUEST), i._positionIcons(), t())
            })
        })
    }, s.prototype.addIcon = function(e, t) {
        function i(e) {
            return s._cleared ? void e.release() : (s.w = e.element.width, s.h = e.element.height, s.texture = e, a._positionIcons(), void s.forceRefresh())
        }
        t = t || O.DEFAULT;
        var n = this._getIcon(e, t);
        if (!n) {
            var o;
            switch (t) {
                case O.SMILEY:
                    o = "gfx/smilies/";
                    break;
                case O.UI:
                    o = "ui/";
                    break;
                default:
                    e = v[e], o = "gfx/icons/conquestIcon/"
            }
            if (!e) return console.warn('Icon type "' + e + '" is unknown and could not be displayed.');
            var a = this,
                r = o + e + ".png",
                s = new d({
                    layer: c.MAP_LAYER_ICONS,
                    x: this.x,
                    y: this.y,
                    w: 0,
                    h: 0,
                    scene: this.scene
                });
            this._setIcon(s, e, t), u.loadTexture(r, i, this.scene.renderer)
        }
    }, s.prototype._positionIcons = function() {
        var e = 0;
        for (var t in O) {
            var i, n = O[t],
                o = 0,
                a = 0;
            for (i in this.icons[n]) {
                var r = this.icons[n][i].w;
                o += r ? r : 0, a++
            }
            if (0 !== a) {
                o += y * (a - 1);
                var s = ~~(.5 * -o),
                    c = 0;
                for (i in this.icons[n]) {
                    var l = this.icons[n][i],
                        d = l.h ? l.h : 0;
                    c = Math.max(c, l.h ? l.h : 50);
                    var u = this.bbox ? this.bbox[2] - this.y - d - 10 : -100;
                    u -= e, this.y + u < 0 && (u = this.bbox ? this.bbox[3] - this.y + 10 : 100, u += e), l.x = this.x + s, l.y = this.y + u, l.position = this.position, s += l.w + y
                }
                e += c + z
            }
        }
        if (1 === window.gui.fightManager.fightState && this.updateTurnIndicatorPosition(), this.fighterIndicator && (this.fighterIndicator.x = this.x, this.fighterIndicator.y = this.bbox[2] - 10), this._turnNumberLabel && this._turnNumberLabel.updatePosition(this.x, this.y), this.nicknameLabel) {
            var p = this.bbox,
                h = p[0] + (p[1] - p[0]) / 2,
                f = p[2];
            this.nicknameLabel.updatePosition(h, f)
        }
    }, s.prototype._calculateNicknameYOffset = function() {
        var e;
        return e = this.bbox[2] - A + _ > 0 ? this.bbox[2] - A : this.y + _
    }, s.prototype.removeQuestIcon = function() {
        this._questIconLoadingStartTime = null, this.removeIconCategory(O.QUEST)
    }, s.prototype.removeIcon = function(e, t) {
        var i = this._getIcon(e, t);
        i && (i.remove(), delete this.icons[t][e])
    }, s.prototype.removeIconCategory = function(e) {
        for (var t in this.icons[e]) this.removeIcon(t, e)
    }, s.prototype.removeIcons = function() {
        for (var e in O) {
            var t = O[e];
            this.removeIconCategory(t)
        }
    }
}
