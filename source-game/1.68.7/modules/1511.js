function(e, t, i) {
    function n() {}

    function o(e) {
        r.prototype.actorManager = this, _.call(this), this.isoEngine = e.isoEngine, this.scene = e.scene, this.isTransparentModeOn = !1, this.isCreatureModeOn = !1, this.paused = !0, this.actors = {}, this._occupiedCells = {}, this.followers = [], this.canSwitchCreatureMode = !0, this.customAnimMethods = {}, this.userId = 0, this.userActor = new r({
            data: {
                _type: "GameRolePlayCharacterInformations"
            },
            scene: this.scene,
            actorManager: this
        }), this.userActor.setWhiteListedness(!0), this.fighterIndicator = null, this._onIdAdded = {}, this._queuedToCarryActors = {}, this._nickNamesOn = !1, this._fullNicknameLabelCount = 0, this._setupListeners()
    }
    var a = i(56)
        .inherits,
        r = i(1512),
        s = i(55),
        c = i(735),
        l = i(1498),
        d = i(13),
        u = i(684),
        p = i(1496),
        h = i(1529),
        f = i(105),
        b = i(103),
        m = i(60),
        M = i(16),
        g = i(18),
        _ = i(36)
        .EventEmitter,
        A = d.ICON_CATEGORY_ENUM,
        O = .001,
        v = 1.5,
        y = .38,
        z = .002,
        w = .5,
        T = .2,
        C = {};
    a(o, _), e.exports = o, o.prototype.getOccupiedCells = function() {
        return this._occupiedCells
    }, o.prototype.getActorsOnCell = function(e) {
        return this.getOccupiedCells()[e] || []
    }, o.prototype.getActorsOnCellByTypes = function(e) {
        for (var t = this.getActorsOnCell(e), i = {
                onlinePlayer: [],
                npc: [],
                other: []
            }, n = 0; n < t.length; n += 1) {
            var o = t[n];
            o.isNPC() ? i.npc.push(o) : o.isPlayer() ? i.onlinePlayer.push(o) : i.other.push(o)
        }
        return i
    }, o.prototype._setupListeners = function() {
        var e = this;
        b.on("gameContextChanged", this.onGameContextChanged.bind(this)), s.on("maxTitlesOrnaments", this.optionModifiedMaxTitlesOrnaments.bind(this)), f.on("MapNpcsQuestStatusUpdateMessage", function(t) {
            e.updateQuestIcons(t)
        })
    }, o.prototype.optionModifiedMaxTitlesOrnaments = function() {
        this.resetNicknames()
    }, o.prototype.resetNicknames = function() {
        var e = window.isoEngine.mapRenderer;
        this._nickNamesOn && (e.isReady ? (this.turnNicknamesOff(), this.turnNicknamesOn()) : e.once("ready", this.resetNicknames.bind(this)))
    }, o.prototype.onGameContextChanged = function() {
        b.isRoleplayMode && this.cleanupActorAnimations(), this.resetNicknames()
    }, o.prototype.removeInvisibilityOfAllActors = function() {
        var e = u.VISIBLE;
        this.userActor.setInvisibility(e);
        for (var t in this.actors) this.actors[t].setInvisibility(e)
    }, o.prototype.cleanupActorAnimations = function() {
        this.userActor.cleanupAnimations();
        for (var e in this.actors) this.actors[e].cleanupAnimations()
    }, o.prototype.isActorInvisible = function(e) {
        var t = this.getActor(e);
        return !!t && t.isInvisible
    }, o.prototype.getActor = function(e) {
        var t = e === this.userId ? this.userActor : this.actors[e];
        return t
    }, o.prototype.getActorFromNpcId = function(e) {
        var t = this.actors;
        for (var i in t) {
            var n = t[i];
            if (n.isNPC() && (n.data.npcId === e || e === -1)) return n
        }
        return null
    }, o.prototype.getActorFromMonsterId = function(e) {
        var t = this.actors;
        for (var i in t) {
            var n = t[i],
                o = n.data || {},
                a = o.staticInfos;
            if (o.creatureGenericId && o.creatureGenericId === e) return n;
            if (a && a.mainCreatureLightInfos && (a.mainCreatureLightInfos.creatureGenericId === e || e === -1)) return n
        }
        return null
    }, o.prototype.getActorData = function(e, t) {
        var i = this.getActor(e);
        return i ? t(null, i.data) : t(new Error("actorNotFound"))
    }, o.prototype.pause = function() {
        this.paused = !0
    }, o.prototype.unpause = function() {
        this.paused = !1
    }, o.prototype.setUserCharacterData = function(e) {
        var t = e.id,
            i = e.entityLook;
        this.userId = t,
        this.userActor.actorId = t,
        this.userActor.actorManager = this,
        this.userActor.data.name = e.name,
        this.userActor.data.playerId = t,
        this.setActorLook(t, i, {}, null)
    }, o.prototype.switchUserActor = function(e) {
        if (this.userId !== e) {
            var t = this.getActor(e);
            if (!t) return this._missingUserActorId = e;
            var i = this.userActor.isDead,
                n = this.userId;
            this.actors[n] = this.userActor, this.userId = e, this.userActor = t, delete this.actors[e], i ? this.removeActor(n) : window.gui.fightManager.isFightersTurn(e) && window.isoEngine.tryDisplayUserMovementZone()
        }
    }, o.prototype.setActorLook = function(e, t, i, o) {
        // APPAERENCE SKIN
        var a = o || n,
            r = this.getActor(e);
        if (!r) return console.warn("amsal: No actor with id", e), a();
        if (r.animated || r.emoteAnimated && r.hasSameLook(t)) return a();
        t || console.error(new Error("amsal: The look is missing."));
        var s = C[e];
        return s || (C[e] = M.createFifo(), s = C[e]), s.push(function(e) {
            function n(e, t) {
                r.staticAnim(function() {
                    return e(),
                    t()
                })
            }
            return r.riderEntity = null, r.setLook(t, i, function() {
                var t = r.animManager;
                r.isFollower && (t.audioVol = T);
                var i = r.look;
                if (r.carriedEntity) {
                    var o = r.riderEntity || r.animManager;
                    return o.addAnimation({
                        base: "carrying",
                        direction: -1
                    }, function() {
                        return o.applyCarryAnimationModifier(), n(e, a)
                    })
                }
                return 1 === i.bonesId && i.skins && i.skins[0] && t.applyBones1AnimationModifier(i.skins[0]), n(e, a)
            })
        })
    }, o.prototype.getIndexedVisibleActors = function(e) {
        var t = {};
        for (var i in this.actors)
            if (this.actors.hasOwnProperty(i)) {
                var n = this.actors[i],
                    o = !n.isInvisible;
                e && e.showAlsoInvisibleInMyTeam && (o = M.isActorVisibleToUser(i)), o && !n.parentActor && (t[n.cellId] = n)
            } return t[this.userActor.cellId] = this.userActor, t
    }, o.prototype.addToFifo = function(e, t) {
        var i = this.getActor(e);
        if (!i) return t();
        var n = C[e];
        return n || (C[e] = M.createFifo(), n = C[e]), n.push(t)
    }, o.prototype.removeAllActors = function() {
        this.cleanupActorAnimations();
        var e = window.gui.playerData.characters.mainCharacterId;
        e > 0 && this.switchUserActor(e);
        for (var t in this.actors) this.actors[t].removeTeamCircle(), this.actors[t].remove();
        this.actors = {}, this._occupiedCells = {}, this.followers = [], this.customAnimMethods = {}
    }, o.prototype.updateMapInfoData = function(e, t) {
        var i = this;
        if (!window.gui.isConnected) return t && t();
        var n = this.userActor;
        if (window.gui.playerData.isSpectator || n.show(), b.isFightMode) return t && t();
        var o, a, r, s = e.actors,
            c = s.length,
            l = 0;
        for (o = 0; o < c; o++) {
            r = s[o], a = this.getActor(r.contextualId), a || (l += 1);
            var d = r.staticInfos && r.staticInfos.underlings;
            l += d ? d.length : 0
        }
        this.checkCreatureMode(l), g.each(s, function(e, t) {
            var o = e.contextualId;
            o === i.userId && (n.removeIcons(), i.isoEngine.userPreviousPosition = e.disposition.cellId), a = i.getActor(o), a ? a.updateData(e) : a = i.addEmptyActor(e), e.staticInfos && e.staticInfos.underlings && i.addActorFollowers(a, e.staticInfos.underlings), a.animated && a.staticAnim(), i.setActorLook(o, e.look, {}, function() {
                for (var n = e.humanoidInfo ? e.humanoidInfo.options : [], a = 0; a < n.length; a++) {
                    var r = n[a];
                    if ("HumanOptionEmote" === r._type) return window.isoEngine.playEmoteFromOption(o, r, t)
                }
                return i._missingUserActorId === o && (i._missingUserActorId = 0, i.switchUserActor(o)), i.emit("actorLoaded", o), t()
            })
        }, function(e) {
            return e && console.warn("An emote could not be played ", e), i.resetNicknames(), t && t()
        })
    }, o.prototype.updateQuestIcons = function(e) {
        if (e.mapId === this.isoEngine.mapRenderer.mapId) {
            var t, i = this.actors,
                n = e.npcsIdsWithQuest;
            for (var o in i) t = i[o], t.isNPC() && n.indexOf(t.actorId) === -1 && t.removeQuestIcon();
            for (var a = 0; a < n.length; a++) t = this.getActor(n[a]), t && t.addQuestIcon(e.questFlags[a])
        }
    }, o.prototype.addActor = function(e, t) {
        var i = this,
            n = e.contextualId,
            o = !0,
            a = this.getActor(n);
        a ? (a.updateData(e), o = !1) : a = this.addEmptyActor(e);
        var r = function() {
            for (var t in i._queuedToCarryActors) {
                var n = i.getActor(t);
                n === a && (n.carryCharacter(i._queuedToCarryActors[t]), delete i._queuedToCarryActors[t])
            }
            var o = e.disposition && e.disposition.carryingCharacterId;
            if (o) {
                var r = i.getActor(o);
                r ? r.carryCharacter(a) : i._queuedToCarryActors[o] = a
            }
        };
        this.setActorLook(n, e.look, {}, function() {
            return e.staticInfos && e.staticInfos.underlings && i.addActorFollowers(a, e.staticInfos.underlings), r(), t && t(i.actors[n])
        });
        var s = a.getFighter();
        return window.gui.playerData.isFighting && !a.isFollower && s && a.addTeamCircle(), this.addedActor(a.actorId), this._attachOrUpdateNicknameLabel(a, o), a
    }, o.prototype._attachOrUpdateNicknameLabel = function(e, t) {
        var i = this._nickNamesOn && e.isPlayer() && e.isDisplayed && !e.isInvisible;
        i && (t || !e.nicknameLabel ? this._attachNicknameLabel(e) : ("full" === e.nicknameLabel.getType() && this._fullNicknameLabelCount--, e.updateNicknameLabel(b.isRoleplayMode && this._fullNicknameLabelCount < s.maxTitlesOrnaments), "full" === e.nicknameLabel.getType() && this._fullNicknameLabelCount++))
    }, o.prototype.addEmptyActor = function(e) {
        var t = e.contextualId,
            i = this.getActor(t);
        if (i) return i;
        var n = e.disposition,
            o = n.cellId,
            a = n.direction,
            s = window.gui.fightManager.isInFight(),
            c = this.isTransparentModeOn && !s;
        return i = new r({
            actorId: t,
            position: o,
            cellId: o,
            direction: a,
            data: e,
            scene: this.scene,
            layer: c ? d.MAP_LAYER_TRANSPARENT : d.MAP_LAYER_PLAYGROUND,
            alpha: this.isTransparentModeOn ? d.TRANSPARENT_MODE_ALPHA : 1,
            actorManager: this
        }), this.actors[t] = i, i.startAnimBehaviour(), i.setDisposition(o, a), i
    }, o.prototype.removeActor = function(e, t) {
        var i, n = this;
        if (e === this.userId) {
            if (i = this.userActor, !i.isDead) return
        } else i = this.actors[e];
        return i ? !t && i.moving ? void i.pathTween.onceFinish(function() {
            n.getActor(e) && n.removeActor(e)
        }) : void i.remove() : console.warn("[ACTOR MANAGER] removeActor: actor not found", e)
    }, o.prototype._removeActor = function(e) {
        var t = !1;
        e.fighterIndicator && e.fighterIndicator.remove(), e.removeTurnNumber();
        var i = e.actorId;
        this.removeActorOccupation(e), this.customAnimMethods[i] && delete this.customAnimMethods[i], e.nicknameLabel && ("full" === e.nicknameLabel.getType() && (this._fullNicknameLabelCount--, t = !0), e.removeNicknameLabel()), e.removeTeamCircle(), delete this.actors[i], e.followers && this.removeActorFollowers(e), t && this.refreshNicknames()
    }, o.prototype.removeActors = function(e, t) {
        for (var i = 0, n = e.length; i < n; i++) this.removeActor(e[i], t)
    }, o.prototype.resetActors = function() {
        this.removeAllActors(), this.userActor.show()
    }, o.prototype.abortActorMovement = function(e) {
        var t = this.getActor(e);
        t && t.abortMovement()
    }, o.prototype.actorMovement = function(e, t) {
        var i = e.actorId,
            n = e.keyMovements,
            o = n[n.length - 1],
            a = window.isoEngine;
        if (b.isRoleplayMode && i === this.userId) return a.roleplayUserActorMovement(n, {
            forceWalk: "GameMapRestrictedMovementMessage" === e._messageType
        });
        var r = this.getActor(i);
        return r ? (r.setCellPosition(o), this.paused ? (r.position = o, t && t()) : (2 === n.length && (n = l.normalizePath(n)), n.length > 1 ? void(this.isoEngine.mapRenderer.isReady ? r.setPath(n, {
            slide: e.slide,
            cb: t
        }) : r.setDisposition(o)) : t && t())) : (this.addEmptyActor({
            contextualId: i,
            disposition: {
                cellId: o,
                direction: 1
            }
        }), t && t())
    }, o.prototype.setActorsDisposition = function(e, t) {
        for (var i = 0, n = e.length; i < n; i++) {
            var o = e[i];
            if (o.cellId !== -1) {
                var a = o.id,
                    r = this.getActor(a);
                if (!r) {
                    if (t) continue;
                    if (!o.cellId && 0 !== o.cellId) continue;
                    var s = window.gui.fightManager.getFighter(a);
                    if (s && s.data && !s.data.alive) continue;
                    r = this.addEmptyActor({
                        contextualId: a,
                        disposition: o
                    })
                }
                r.cellId === o.cellId && r.direction === o.direction || (r.setDisposition(o.cellId, o.direction), r.emoteAnimated && r.lastEmoteAnim && r.loadAndPlayAnimation({
                    base: "AnimEmote",
                    type: r.lastEmoteAnim
                }, {
                    loop: !1,
                    isEmoteAnimated: !0
                }))
            }
        }
    }, o.prototype.removeActorOccupation = function(e) {
        var t = e.cellId;
        if (null !== t) {
            var i = this._occupiedCells[t];
            if (void 0 === i) return;
            var n = i.indexOf(e);
            n === -1 ? console.warn("[ActorManager.removeActorOccupation] Trying to remove an actor from an empty cell", e) : 1 === i.length ? delete this._occupiedCells[t] : i.splice(n, 1)
        }
    }, o.prototype.addActorOccupation = function(e) {
        var t = e.cellId,
            i = this._occupiedCells[t];
        if (void 0 === i) this._occupiedCells[t] = [e];
        else {
            var n = i.indexOf(e);
            n === -1 ? i.push(e) : console.warn("[ActorManager.addActorOccupation] Trying to add an actor to a cell that it already belongs to", e)
        }
    }, o.prototype.computeFollowerPosition = function(e) {
        var t = c.getMapPointFromCellId(e);
        t.i = t.x, t.j = t.y;
        for (var i = 1; Math.random() < i;) {
            var n = l.getAccessibleCells(t.i, t.j),
                o = n.length;
            if (0 === o) break;
            for (var a = [], r = 0, s = 0; s < o; s++) {
                var d = n[s],
                    u = c.getCellIdFromMapPoint(d.i, d.j),
                    p = void 0 === this._occupiedCells[u] ? 1 : O;
                a[s] = p, r += p
            }
            for (var h = 0, f = r * Math.random() - a[0]; f > 0 && h < o;) h += 1, f -= a[h];
            t = n[h === o ? h - 1 : h], e = c.getCellIdFromMapPoint(t.i, t.j), i = this._occupiedCells[e] ? .995 : .8
        }
        return e
    }, o.prototype.addActorFollowers = function(e, t, i) {
        var n = t.length;
        if (0 !== n && (s.showAllMonsters || i)) {
            null === e.followers && (e.followers = []);
            for (var o, a = e.actorId, r = window.gui.playerData.characters.mainCharacterId, c = 0; c < n; c++) {
                var l = t[c],
                    d = l.isHiddenFromPlayers,
                    u = d ? a === r : !d;
                if (u) {
                    var p = a + ":follower:" + c,
                        h = this.getActor(p);
                    if (!h) {
                        var f = this.computeFollowerPosition(e.cellId);
                        h = this.addEmptyActor({
                            contextualId: p,
                            disposition: {
                                cellId: f,
                                direction: 1 + 2 * Math.round(3 * Math.random())
                            }
                        }), h.isFollower = !0, i === !0 ? h.isolationCoefficient = w : (h.isolationCoefficient = z, o = window.gui.playerData.quests.hasWantedMonsterQuest(l.creatureGenericId), l.staticInfos && l.staticInfos.isMiniBoss ? h.addIcon("miniBoss", A.UI) : l.staticInfos && l.staticInfos.isBoss ? h.addIcon("boss", A.UI) : o && l.staticInfos && l.staticInfos.isWantedMonster ? h.addIcon("wanted", A.UI) : (h.removeIcon("miniBoss", A.UI), h.removeIcon("boss", A.UI), h.removeIcon("wanted", A.UI)), l.staticInfos || console.error("ActorManager#addActorFollowers: no staticInfos", "actorId:", a, "followerId:", p)), e.followers.push(h), h.groupBoss = e, h.data = e.data, this.followers.push(h)
                    }
                    this.setActorLook(p, l.look, {}, null)
                }
            }
        }
    }, o.prototype.removeActorFollowers = function(e, t) {
        var i = e.followers;
        e.followers = [];
        var n = [];
        if (i && i.length) {
            for (var o = 0; o < i.length; o++) {
                var a = i[o];
                n.push(a.actorId);
                var r = this.followers.indexOf(a);
                r !== -1 && this.followers.splice(r, 1)
            }
            this.removeActors(n, t)
        }
    }, o.prototype.addAnimBehaviourToActor = function(e, t) {
        var i = this.actors[e];
        return i ? this.customAnimMethods[e] ? console.warn("ActorManager.addAnimBehaviourToActor: actor " + e + " already has a custom animation") : this.followers.indexOf(i) !== -1 ? console.error(new Error("ActorManager.addAnimBehaviourToActor: cannot add an anim behaviour to a follower")) : "function" != typeof t ? console.error(new Error("ActorManager.addAnimBehaviourToActor: animationMethod is not a function")) : void(this.customAnimMethods[e] = t) : console.error(new Error("ActorManager.addAnimBehaviourToActor: actor " + e + " unknown"))
    }, o.prototype._moveFollower = function(e) {
        if (e.moving !== !0) {
            var t = e.cellId,
                i = c.getMapPointFromCellId(t),
                n = c.getMapPointFromCellId(e.groupBoss.cellId),
                o = i.x,
                a = i.y,
                r = n.x - o,
                s = n.y - a,
                d = Math.sqrt(r * r + s * s);
            if (1 === this._occupiedCells[t].length) {
                var u = .95 / (1 + (d - 1) * e.isolationCoefficient);
                if (e.groupBoss.moving === !0 && (u *= .8), Math.random() < u) return
            }
            for (var p, h = {
                    i: i.x,
                    j: i.y
                }, f = [t], b = 1; Math.random() < b;) {
                var m = l.getAccessibleCells(h.i, h.j),
                    M = m.length;
                if (0 === M) return;
                for (var g = [], _ = 0, A = 0; A < M; A++) {
                    var y = m[A],
                        z = c.getCellIdFromMapPoint(y.i, y.j),
                        w = void 0 === this._occupiedCells[z] ? 1 : O,
                        T = y.i - h.i,
                        C = y.j - h.j;
                    w *= 0 === T && 0 === C ? O * O : 0 === T ? Math.pow(v, s / C) : Math.pow(v, r / T), g[A] = w, _ += w
                }
                for (var I = 0, S = _ * Math.random() - g[0]; S > 0 && I < M;) I += 1, S -= g[I];
                h = m[I === M ? I - 1 : I], p = c.getCellIdFromMapPoint(h.i, h.j), f.push(p), b = 1 - 1 / (1 + .5 * d)
            }
            e.setCellPosition(p), e.setPath(f)
        }
    }, o.prototype.refresh = function() {
        for (var e in this.customAnimMethods) this.customAnimMethods[e]();
        var t = this.followers.length;
        if (t > 0) {
            var i = Object.keys(this.actors)
                .length;
            if (Math.random() > Math.min(.1, y / i)) return;
            for (var n = 0; n < t; n++) this._moveFollower(this.followers[n])
        }
    }, o.prototype.updateActorsAggressableStatus = function(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i],
                o = t[i],
                a = this.getActor(n);
            if (a && a.data.humanoidInfo && a.data.humanoidInfo.options)
                for (var r = a.data.humanoidInfo.options, s = 0; s < r.length; s++) {
                    var c = r[s];
                    if ("HumanOptionAlliance" === c._type) {
                        c.aggressable = o, a.addConquestIcon(c);
                        break
                    }
                }
        }
    }, o.prototype.addSmileyOnActor = function(e, t) {
        var i = this.getActor(e);
        i && i.addSmileyIcon(t)
    }, o.prototype.setReadyIconOnActor = function(e, t) {
        void 0 === t && (t = !1);
        var i = this.getActor(e);
        i && (t ? i.addReadyIconOnActor() : i.removeReadyIconOnActor())
    }, o.prototype.removeReadyIcon = function() {
        for (var e = Object.keys(this.actors), t = e.length, i = 0; i < t; i++) {
            var n = this.actors[e[i]];
            n.removeReadyIconOnActor()
        }
        this.userActor.removeReadyIconOnActor()
    }, o.prototype.setTransparentMode = function(e) {
        if (this.isTransparentModeOn !== e) {
            var t, i, n = window.gui.fightManager.isInFight();
            e ? (t = n ? d.MAP_LAYER_PLAYGROUND : d.MAP_LAYER_TRANSPARENT, i = d.TRANSPARENT_MODE_ALPHA) : (t = d.MAP_LAYER_PLAYGROUND, i = 1);
            for (var o in this.actors) {
                var a = this.actors[o];
                a.layer = t, a.alpha = i
            }
            this.userActor.layer = t, this.userActor.alpha = i, this.isTransparentModeOn = e
        }
    }, o.prototype.checkCreatureMode = function(e) {
        var t = Object.keys(this.actors)
            .length + e + 1,
            i = s.maxActorsBeforeCreatureMode < t;
        i = i || m.getValue("creatureMode", !1), this.setCreatureMode(i)
    }, o.prototype.onMaxActorsBeforeCreatureModeChange = function(e) {
        var t = Object.keys(this.actors)
            .length + 1,
            i = e < t;
        i = i || m.getValue("creatureMode", !1), this.setCreatureMode(i)
    }, o.prototype.setCreatureMode = function(e) {
        if (e !== this.isCreatureModeOn) {
            if (this.emit("creatureModeChangedState", e), !e) return this._exitCreatureMode();
            this.canSwitchCreatureMode = !1, this.isCreatureModeOn = !0;
            var t = this;
            this.userActor.carriedEntity || this.userActor.setCreatureLook({
                noSmokeAnimation: !0
            }, null);
            var i = function() {
                t.canSwitchCreatureMode = !0
            };
            for (var n in this.actors) {
                var o = this.actors[n],
                    a = Object.keys(t.actors);
                o.setCreatureLook({
                    noSmokeAnimation: !0
                }, a[a.length - 1] === n ? i : null), o.fighterIndicator && (o.fighterIndicator.y = o.bbox[2] - o.y)
            }
            this.userActor.carriedEntity && this.userActor.setCreatureLook({
                    noSmokeAnimation: !0
                }, null), Object.keys(this.actors)
                .length < 1 && (this.canSwitchCreatureMode = !0)
        }
    }, o.prototype._exitCreatureMode = function() {
        if (this.isCreatureModeOn) {
            this.isCreatureModeOn = !1, this.userActor.carriedEntity || this.userActor.useRealLook();
            for (var e in this.actors) {
                var t = this.actors[e];
                t.useRealLook(), t.fighterIndicator && (t.fighterIndicator.y = t.bbox[2] - t.y)
            }
            this.userActor.carriedEntity && this.userActor.useRealLook()
        }
    }, o.prototype.getPlayers = function(e) {
        var t = [];
        for (var i in this.actors) {
            var n = this.actors[i];
            n.data && (n.data.playerId || 0 === n.data.playerId) && t.push(n)
        }
        return e && t.push(this.userActor), t
    }, o.prototype.getActorsIDList = function() {
        var e = [];
        for (var t in this.actors) {
            var i = this.actors[t];
            e.push(i.actorId)
        }
        return e.push(this.userActor.actorId), e
    }, o.prototype.turnIndicatorOff = function() {
        window.isoEngine.mapRenderer.removeMovementFeedback()
    }, o.prototype.turnIndicatorOn = function(e) {
        if (window.isoEngine.mapRenderer.map) {
            this.turnIndicatorOff();
            var t = this.getActor(e.id);
            if (t) {
                var i = t.getFighterData(),
                    n = t.getTeamId(),
                    o = e.data.disposition.cellId;
                if (o !== -1)
                    if (i.isCarryied && t.parentActor) {
                        var a = t.parentActor.bbox[2] + (t.bbox[3] - t.bbox[2]);
                        p.addTurnFeedback({
                            x: t.parentActor.x,
                            y: a,
                            position: o
                        }, n)
                    } else p.addTurnFeedback({
                        x: t.x,
                        y: t.y,
                        position: o
                    }, n)
            }
        }
    }, o.prototype.removeTeamCircles = function() {
        this.userActor.removeTeamCircle();
        for (var e = 0; e < this.actors.length; e++) {
            var t = this.actors[e];
            t.removeTeamCircle()
        }
    }, o.prototype.selectionIndicatorOff = function(e) {
        var t = this.getActor(e.id);
        t && t.fighterIndicator && t.fighterIndicator.remove()
    }, o.prototype.selectionIndicatorOn = function(e) {
        var t = this.getActor(e.id);
        t && (t.fighterIndicator && t.fighterIndicator.remove(), e.data.disposition.cellId !== -1 && (t.fighterIndicator = new h(t.x, t.bbox[2] - 12)))
    }, o.prototype.removeAllFighterIndicators = function() {
        this.userActor.fighterIndicator && this.userActor.fighterIndicator.remove();
        for (var e = 0; e < this.actors.length; e++) {
            var t = this.actors[e];
            t.fighterIndicator && t.fighterIndicator.remove()
        }
    }, o.prototype.turnNumberOn = function(e, t) {
        function i(e, i) {
            i || (i = e === o.userActor.actorId ? o.userActor : o.actors[e]), "" === t ? i.removeTurnNumber() : i.addTurnNumber(t)
        }
        var n, o = this;
        n = e === this.userActor.actorId ? this.userActor : this.actors[e], n ? i(e, n) : this._onIdAdded[e] = i
    }, o.prototype.areNicknamesOn = function() {
        return this._nickNamesOn
    }, o.prototype.turnNicknamesOn = function() {
        this._nickNamesOn = !0, this._attachNicknameLabel(this.userActor);
        for (var e in this.actors) {
            var t = this.actors[e];
            t.isPlayer() && t.isDisplayed && !t.isInvisible && this._attachNicknameLabel(t)
        }
    }, o.prototype.refreshNickname = function(e) {
        return e.nicknameLabel ? void(e.moving || "full" === e.nicknameLabel.getType() || (e.updateNicknameLabel(b.isRoleplayMode && this._fullNicknameLabelCount < s.maxTitlesOrnaments), "full" === e.nicknameLabel.getType() && this._fullNicknameLabelCount++)) : void console.warn("Tried to refresh non existing nickname label")
    }, o.prototype.refreshNicknames = function() {
        this.refreshNickname(this.userActor);
        for (var e in this.actors) {
            var t = this.actors[e];
            t.isPlayer() && t.isDisplayed && !t.isInvisible && this.refreshNickname(t)
        }
    }, o.prototype._attachNicknameLabel = function(e) {
        b.isRoleplayMode && this._fullNicknameLabelCount < s.maxTitlesOrnaments ? (e.addNicknameLabel(!0), e.nicknameLabel && "full" === e.nicknameLabel.getType() && this._fullNicknameLabelCount++, e.moving && e.nicknameLabel.set(e, "name")) : e.addNicknameLabel(!1)
    }, o.prototype.turnNicknamesOff = function() {
        this._nickNamesOn = !1;
        for (var e in this.actors) this.actors[e].removeNicknameLabel();
        this.userActor.removeNicknameLabel(), this._fullNicknameLabelCount = 0
    }, o.prototype.debugActorIdsOn = function() {
        for (var e in this.actors) this.actors[e].addNicknameLabel(!1, e);
        this.userActor.addNicknameLabel(!1, this.userActor.actorId)
    }, o.prototype.debugActorIdsOff = function() {
        for (var e in this.actors) this.actors[e].removeNicknameLabel();
        this.userActor.removeNicknameLabel()
    }, o.prototype.addedActor = function(e) {
        var t = this._onIdAdded[e];
        t && (t(e), delete this._onIdAdded[e])
    }, o.prototype.allTurnNumbersOff = function() {
        for (var e in this.actors) this.actors[e].removeTurnNumber();
        this.userActor.removeTurnNumber()
    }, o.prototype.removeAllCarryStatus = function(e) {
        for (var t in this.actors) this.actors[t].carriedEntity && e.removeCarrying(this.actors[t]);
        this.userActor.carriedEntity && e.removeCarrying(this.userActor)
    }, o.prototype.refreshFighter = function(e) {
        var t = window.actorManager.getActor(e.informations.contextualId);
        t && (t.setDisposition(e.informations.disposition.cellId, e.informations.disposition.direction), this.setActorLook(t.actorId, e.informations.look, {
            noSmokeAnimation: !0
        }, function() {
            t.applyLook({
                look: e.informations.look
            })
        }))
    }, o.prototype.refreshActorsLook = function() {
        for (var e in this.actors) {
            var t = this.actors[e];
            t.refreshLook()
        }
        this.userActor.refreshLook()
    }, o.prototype.clearQueuedToCarryActors = function() {
        this._queuedToCarryActors = {}
    }, o.prototype.playAnimationOnNpcId = function(e, t, i) {
        i = i || n;
        var o = this.getActorFromNpcId(e);
        return o ? o.playCustomAnimation(t, i) : i(new Error("NPC not found with ID: " + e))
    }
}
