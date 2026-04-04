function(e, t, i) {
    function n() {
        this.id = "", this.sounds = null
    }

    function o(e, t, i, o, a, r) {
        f.call(this, e), this.animationId = null, this.animationName = "", this.template = t, this.bonesId = o, this.skinIds = r || [], this.audioVol = 1, this.scaleX = i || 1, this.scaleY = i || 1, this.mirrored = !1, this._frame = -1, this._prevFrame = -1, this.nbFrames = 0, this._frameSpeed = 1, this.frameData = new n, this.tints = [], this.tintsString = "", this._setTints(a), this.loadedAnimations = {};
        var s = t.exposedSymbols;
        this.only4Directions = s && !(s.AnimStatique_0 || s.AnimStatique_4), this.isFx = this.sprite.isFx, this.tween = new d(this, ["frame"]), this.tween.from({
            frame: 0
        }), this._cleared = !1, this._stopped = !1
    }

    function a(e) {
        for (var t = 0, i = [], n = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)], o = 0; o < e.length; o += 1) {
            var a = e[o];
            if (a.isMaskTag) {
                if (a.isMaskDef && (i.push(n), n = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)]), a.isMaskUse && (i.push(n), n = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)]), a.isMaskStop) {
                    var r = n,
                        s = i.pop();
                    n = i.pop(),
                        n[0] = Math.min(n[0], Math.max(r[0], s[0])), n[1] = Math.max(n[1], Math.min(r[1], s[1])), n[2] = Math.min(n[2], Math.max(r[2], s[2])), n[3] = Math.max(n[3], Math.min(r[3], s[3]))
                }
            } else {
                var c = a.vertexPos;
                n[0] = Math.min(n[0], c[0], c[2], c[4], c[6]), n[1] = Math.max(n[1], c[0], c[2], c[4], c[6]), n[2] = Math.min(n[2], c[1], c[3], c[5], c[7]), n[3] = Math.max(n[3], c[1], c[3], c[5], c[7]), t += 1
            }
        }
        return {
            bbox: n,
            nbSprites: t,
            spriteBatch: e
        }
    }

    function r(e, t, i, n) {
        if (!(e.length <= 0))
            for (var o = z(), a = o.actorManager.userActor || {
                    x: u.MAP_SCENE_WIDTH / 2,
                    y: u.MAP_SCENE_HEIGHT / 2
                }, r = {
                    x: a.x,
                    y: a.y
                }, s = v.getDistance({
                    x: i,
                    y: n
                }, r), c = Math.max(-1, Math.min(1, i / C - 1)), l = 0; l < e.length; l++) p.playSoundGroup("sfx", e[l], t, s, c)
    }

    function s(e) {
        return {
            base: e.base,
            type: 0,
            param: null,
            direction: e.direction
        }
    }

    function c(e) {
        return {
            base: "AnimAttaque",
            type: 0,
            param: null,
            direction: e.direction
        }
    }
    var l = i(56)
        .inherits,
        d = i(430)
        .Tween,
        u = i(13),
        p = i(91),
        h = i(698),
        f = i(695),
        b = i(707),
        m = i(34)
        .logger,
        M = i(709),
        g = i(97),
        _ = i(130),
        A = i(12),
        O = new M(m, _, p, A),
        v = new g(m),
        y = i(714),
        z = i(14),
        w = u.ANIM_SYMBOLS,
        T = u.ANIM_SYMETRY,
        C = u.MAP_SCENE_WIDTH / 2,
        I = [4, 3, 2, 3, 4, 7, 6, 7],
        S = {
            5352: !0
        };
    l(o, f), e.exports = o, Object.defineProperty(o.prototype, "frame", {
        get: function() {
            return this._frame
        },
        set: function(e) {
            e = e < this.nbFrames ? Math.floor(e) : this.nbFrames - 1, this._frame !== e && (this._frame = e, this.sprite.forceRefresh())
        }
    }), o.prototype.switchAnimationManager = function() {}, o.prototype.isTemporary = !1, o.prototype._computeSymbolDirection = function(e) {
        return e.direction === -1 ? -1 : this.isFx && 0 === e.direction ? 0 : this.only4Directions && 0 === (1 & e.direction) ? e.direction + 1 : e.direction
    }, o.prototype._getSymbolId = function(e) {
        e = this.applyAnimationModifier(e);
        var t = e.type || 0 === e.type ? e.type.toString() : "",
            i = e.param || 0 === e.param ? "_" + e.param.toString() : "",
            n = e.base + t + i,
            o = this._computeSymbolDirection(e);
        return o !== -1 && (n += "_" + w[o]), b.isMissingTemplates(this.bonesId + "/" + n) && "AnimTacle" === e.base && (e.base = "AnimHit", n = e.base + t + i, o !== -1 && (n += "_" + w[o])), n
    }, o.prototype._getSymbolModelId = function(e) {
        return this.bonesId + "/" + this._getSymbolId(e)
    }, o.prototype.isMissingTemplates = function(e) {
        return b.isMissingTemplates(this._getSymbolModelId(e))
    }, o.prototype.addAnimation = function(e, t) {
        function i() {
            if (n += 1, n === o) return t && t()
        }
        var n = 0,
            o = 1;
        if (!this.hasSubentities) return this._addAnimation(this._getSymbolModelId(e), i);
        for (var a = this.subentities, r = !0, s = 0; s < a.length; s++) {
            var c = a[s],
                l = c.symbolModifier(e, this.bonesId, c.animManager.bonesId);
            if (l.parent) {
                var d = l.parent;
                o += 1, r = r && this._addAnimation(this._getSymbolModelId(d), i)
            }
            l.child && (o += 1, r = r && c.animManager.addAnimation(l.child, i))
        }
        return i(), r
    }, o.prototype._addAnimation = function(e, t) {
        if (!this.bonesId) return console.warn("Incorrect bones id:", this.bonesId), t(), !1;
        if (this.loadedAnimations[e]) return t(), !0;
        var i = this;
        return h.loadTemplate("bone", e, "", function(n) {
            i.template.merge(n, !1), i.loadedAnimations[e] = n, t()
        }, this.sprite.renderer), !0
    }, o.prototype.applyAnimationModifier = function(e) {
        var t = this.animationModifiers[e.base];
        if (!t) return e;
        switch (typeof t) {
            case "string":
                return {
                    base: t, type: e.type, param: e.param, direction: e.direction
                };
            case "function":
                return t(e);
            default:
                return console.error("Wrong animation modifier type"), e
        }
    }, o.prototype.cleanupAnimations = function() {
        var e = this.template;
        for (var t in this.loadedAnimations)
            if (this.loadedAnimations.hasOwnProperty(t)) {
                var i = this.loadedAnimations[t];
                e.unmerge(i)
            } this.loadedAnimations = {}, this.stop();
        for (var n = 0; n < this.subentities.length; n++) {
            var o = this.subentities[n];
            o && o.animManager && (o.animManager.stop(), o.animManager.cleanupAnimations())
        }
    }, o.prototype.cleanupAnimationsAndRemoveSubentities = function() {
        this.cleanupAnimations(), this.subentities = [], this.hasSubentities = !1
    }, o.prototype.clear = function() {
        return this._cleared ? void console.warn("[AnimationManager.clear] Trying to clear an already cleared animation manager") : (this.cleanupAnimationsAndRemoveSubentities(), this.template.clear(), this.sprite.renderer.unlockBuffer(this.frameData.id), this.frameData.id = "", void(this._cleared = !0))
    }, o.prototype._setTints = function(e) {
        e || (e = []);
        for (var t, i = [], n = this.tints.length !== e.length, o = 0; o < e.length; o += 1) {
            var a = e[o];
            if (t = a ? {
                    r: a.r / 128,
                    g: a.g / 128,
                    b: a.b / 128
                } : {
                    r: 1,
                    g: 1,
                    b: 1
                }, i[o] = t, !n) {
                var r = this.tints[o];
                n = r.r !== t.r || r.g !== t.g || r.b !== t.b
            }
        }
        if (this.tints = i, n)
            for (this.tintsString = "#", o = 0; o < i.length; o += 1) t = i[o], this.tintsString += Math.round(255 * t.r)
                .toString(16) + Math.round(255 * t.g)
                .toString(16) + Math.round(255 * t.b)
                .toString(16);
        return n
    }, o.prototype.setTints = function(e) {
        this._setTints(e) && this.releaseBuffer()
    }, o.prototype.prepareCurrentAnimationFrame = function() {
        var e = this._frame * this._frameSpeed % this.nbFrames;
        return this.template.prepareAnimationFrame(this.animationName, e, this.tints, this.scaleX, this.scaleY, this.subentityRefs)
    }, o.prototype.getSymbolDuration = function(e) {
        var t = this.template.exposedSymbols[e];
        return t ? t.duration : 0
    }, o.prototype.releaseBuffer = function() {
        this.sprite.renderer.releaseBuffer(this.frameData.id), this.frameData.id = "", this.sprite.forceRefresh()
    }, o.prototype.generateCurrentFrameData = function() {
        if (null === this.animationId) return [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)];
        var e = this.sprite.renderer,
            t = this.frameData.id;
        this.frameData.id = "", this._generateCurrentFrameId(this.frameData);
        var i = e.getBufferData(this.frameData.id);
        return void 0 === i && (i = a(this.prepareCurrentAnimationFrame()), e.prepareBatchFromSpriteList(this.frameData.id, i)), this.frameData.id !== t && (e.unlockBuffer(t), e.lockBuffer(this.frameData.id)), i.bbox
    }, o.prototype._generateCurrentFrameId = function(e) {
        var t = this._frame;
        e.id += this.animationId + t.toString(), this._prevFrame !== t && (this._prevFrame = t);
        for (var i = 0; i < this.subentities.length; i += 1) this.subentities[i].animManager._generateCurrentFrameId(e)
    }, o.prototype.draw = function(e) {
        e.drawSpriteBatch(this.frameData.id)
    }, o.prototype._setMirroring = function(e, t) {
        S[this.bonesId] || (e !== -1 && T[e] ^ t ? this.scaleX > 0 && (this.mirrored = !0, this.scaleX *= -1) : this.scaleX < 0 && (this.mirrored = !1, this.scaleX *= -1))
    }, o.prototype.getFrameSpeed = function(e) {
        var t = this.template.getAnimationFrameRate(e);
        return 60 === t ? 2 : 1
    }, o.prototype.assignSymbol = function(e, t, i) {
        function n() {
            if (a++, o === a) return i && i()
        }
        this.subentityRefs = {};
        var o = 1,
            a = 0;
        if (this.hasSubentities) {
            for (var s = null, c = {
                    base: "AnimStatique",
                    direction: e.direction
                }, l = 0; l < this.subentities.length; l++) {
                var d = this.subentities[l],
                    u = d.animManager,
                    p = d.symbolModifier(e, this.bonesId, u.bonesId);
                s = p.parent || s, p.child ? (o++, u.assignSymbol(p.child, t, n)) : u.assignSymbol(c, !1), this.subentityRefs[d.bindingPoint] = u, u.mirrored = !1
            }
            e = s || c
        }(this.tween.playing || this.tween.starting) && this.tween.stop();
        var h = this._getSymbolId(e),
            f = this._computeSymbolDirection(e);
        if (this.template.hasAnimation(h)) this._setMirroring(f);
        else {
            e = this.applyAnimationModifier(e);
            var b = e.type || 0 === e.type ? e.type : "",
                M = e.param || 0 === e.param ? "_" + e.param : "";
            if (h = e.base + b + M + "_" + I[f], this.template.hasAnimation(h)) this._setMirroring(f, !0);
            else {
                for (var g = !1, _ = 0; _ < 8; _++)
                    if (h = e.base + b + M + "_" + _, this.template.hasAnimation(h)) {
                        this._setMirroring(_), g = !0;
                        break
                    } if (!g) return console.warn("Could not find any Animation " + e.base + " in template", this.template.id), n()
            }
        }
        var A = this;
        this.animationName = h;
        var v = this.template.id + "#" + h;
        if (this.animationId = v + "#" + this.scaleY + this.tintsString + (this.mirrored ? "M#" : "#"), this._frameSpeed = this.getFrameSpeed(h), this.nbFrames = Math.floor(this.template.getAnimationNbFrames(h)), this._prevFrame = -1, this._frame = -1, this.frame = 0, 0 === this.nbFrames) return n();
        "AnimStatique" === e.base && this.nbFrames > 1 && (t = !0), "AnimStatique_to_AnimMarche" !== e.base && "AnimStatique_to_AnimCourse" !== e.base || (t = !1), this._stopped = !1;
        var y = this.skinIds;
        O.getAudio(parseInt(A.bonesId, 10), A.animationName, y, function(e, o) {
            if (A._stopped) return n();
            e && m.error(new Error("regAudio: " + e)), A.tween.reset()
                .to({
                    frame: A.nbFrames
                }, A.nbFrames)
                .start(t);
            var a = -1;
            if (A.tween.onUpdate(function() {
                    if (A._stopped) return A.tween.stop();
                    if (a !== A._frame) {
                        var e = null;
                        o && o.isSoundAnimationsPerFrame && (e = o, e.hasSoundForFrame(A.frame) && r(e.getIds(A.frame, y), A.audioVol, A.sprite._x, A.sprite._y)), a = A._frame
                    }
                }), i) {
                if (t) return n();
                A.tween.onceFinish(n)
            }
        })
    }, 
    o.prototype.stop = function() {
        this._stopped = !0, (this.tween.playing || this.tween.starting) && this.tween.stop()
    }, 
    o.prototype.applyCarryAnimationModifier = function() {
        window.actorManager.isCreatureModeOn || (this.addAnimationModifier("AnimStatique", "AnimStatiqueCarrying"),
                                                 this.addAnimationModifier("AnimMarche", "AnimMarcheCarrying"),
                                                 this.addAnimationModifier("AnimCourse", "AnimCourseCarrying"),
                                                 this.addAnimationModifier("AnimHit", "AnimHitCarrying"),
                                                 this.addAnimationModifier("AnimTacle", "AnimTacleCarrying"))
    }, 
    o.prototype.applyBones1AnimationModifier = function(e) {
        if (e) {
            if (y.CUSTOM_ANIM_MOVE[e]) {
                var t = y.CUSTOM_ANIM_STATIC[e] || e;
                this.addAnimationModifier("AnimStatique", "AnimStatique" + t),
                this.addAnimationModifier("AnimMarche", "AnimMarche_" + e),
                this.addAnimationModifier("AnimCourse", "AnimCourse_" + e)
            }
            var i = y.CUSTOM_ANIM_DEATH[e];
            i && this.addAnimationModifier("AnimMort", "AnimMort_" + i)
        }
    }, 
    o.prototype.applyCreatureAnimationModifier = function() {
        this.addAnimationModifier("AnimArme", s),
        this.addAnimationModifier("AnimAttaque", s),
        this.addAnimationModifier("AnimTacle", "AnimHit"),
        this.addAnimationModifier("AnimEmote", c),
        this.addAnimationModifier("AnimConsulter", "AnimAttaque0"),
        this.addAnimationModifier("AnimCueillir0", "AnimAttaque0"),
        this.addAnimationModifier("AnimCueillirSol0", "AnimAttaque0"),
        this.addAnimationModifier("AnimDrop", "AnimAttaque0"),
        this.addAnimationModifier("AnimFaucher", "AnimAttaque0"),
        this.addAnimationModifier("AnimHache", "AnimAttaque0"), 
        this.addAnimationModifier("AnimPeche", "AnimAttaque0"), 
        this.addAnimationModifier("AnimPickup", "AnimAttaque0"), 
        this.addAnimationModifier("AnimPioche",  "AnimAttaque0"), 
        this.addAnimationModifier("AnimPuiser","AnimAttaque0"),
        this.addAnimationModifier("AnimThrow", "AnimAttaque0")
    }
}
