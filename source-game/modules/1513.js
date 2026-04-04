function(e, t, i) {
    function n() {}
    var o = i(1514),
        a = i(13),
        r = i(55),
        s = a.ANIM_SYMBOLS,
        c = {
            IDLE: 0,
            PLAYING_ANIMATION: 1,
            WAITING_FOR_NEXT_ANIMATION: 2
        },
        l = 1e4,
        d = 5e3;
    o.prototype.getAnimSymbol = function(e, t) {
        return t || 0 === t || (t = this.direction), {
            id: e + "_" + s[t],
            base: e,
            direction: t
        }
    }, o.prototype.finalizeAnimationSymbol = function(e) {
        e.direction || 0 === e.direction || (e.direction = this.direction)
    }, o.prototype.loadAndPlayAnimation = function(e, t, i) {
        function n() {
            t.loop ? o.loopAnim(e, i) : o.oneShootAnim(e, {
                backToStatic: !1,
                isEmoteAnimated: t.isEmoteAnimated
            }, i)
        }
        var o = this;
        t = t || {}, this.finalizeAnimationSymbol(e), this.animManager.addAnimation(e, n)
    }, o.prototype.staticAnim = function(e) {
        var t = e || n;
        this.animSymbol = this.getAnimSymbol("AnimStatique"), this.animManager.assignSymbol(this.animSymbol, !1, t), this.animated = !1, this.emoteAnimated = !1
    }, o.prototype.loopAnim = function(e, t) {
        this.animSymbol = e, this.animated = !0, this.emoteAnimated = !1, this.animManager.assignSymbol(e, !0, t)
    }, o.prototype.oneShootAnim = function(e, t, i) {
        var n = this;
        t = t || {}, this.finalizeAnimationSymbol(e), this.animSymbol = e, this.animated = !0, this.animManager.assignSymbol(e, !1, function() {
            return t.backToStatic && n.staticAnim(), n.animated = !1, n.emoteAnimated = Boolean(t.isEmoteAnimated), i && i()
        })
    }, o.prototype.cleanupAnimations = function() {
        this.animManager.cleanupAnimations()
    }, o.prototype.death = function(e) {
        function t() {
            return i.isDead ? (i.animated = !1, i.emoteAnimated = !1, i.fighterIndicator && i.fighterIndicator.remove(), i.removeTeamCircle(), i.actorManager.removeActor(i.actorId), void(i.actorManager.userActor.isDead || !window.gui.fightManager.isFightersTurn(i.actorManager.userActor.actorId) || window.gui.fightManager.getIsTurnEndRequestPending() || window.isoEngine.displayUserMovementZone())) : void i.staticAnim()
        }
        var i = this;
        return this.moving && (console.warn("kill a moving actor"), this.pathTween.stop()), this.animated && console.warn("kill an animated actor"), r.allowSpellEffects ? void this.animManager.addAnimation({
            base: "AnimMort",
            direction: this.direction
        }, function() {
            if (i.isDead) return e && e();
            var n = i.getAnimSymbol("AnimMort");
            i.animSymbol = n, i.animated = !0, i.actorManager.userActor === this && i.animManager.cleanupAnimationsAndRemoveSubentities(), i.isDead = !0, i.animManager.assignSymbol(n, !1, function() {
                return t(), e && e()
            })
        }) : (i.isDead = !0, t(), e && e())
    }, o.prototype.testAnimation = function(e, t) {
        var i = e.animationString,
            n = e.direction,
            o = this.getAnimSymbol(i, n);
        this.animSymbol = o;
        var r = this;
        return this.animManager.addAnimation(o, function() {
            return r.animated = !0, r.animManager.addAnimation(o, function() {
                return r.animManager.assignSymbol(o, !0), t(r.animManager.template.hasAnimation(o.id) ? "playing: " + o.id : r.animManager.isMissingTemplates(o) ? "animation " + o.id + " inside " + a.MISSING_ANIM_PATH + ". Skipping..." : "animation not found: " + o.id)
            })
        })
    }, o.prototype.removeCustomAnimTimeout = function() {
        this.customAnimTimeout && (this.actorState = c.IDLE, clearTimeout(this.customAnimTimeout), this.customAnimTimeout = null)
    }, o.prototype.playCustomAnimation = function(e, t) {
        t = t || n;
        var i = this,
            o = this.getAnimSymbol(e.animationName, e.direction);
        this.animated = !0, this.removeCustomAnimTimeout(), this.actorState = c.PLAYING_ANIMATION, this.customAnimTimeout = setTimeout(function() {
            return i ? void i.animManager.addAnimation(o, function() {
                i.animManager.assignSymbol(o, e.loop, function() {
                    i.customAnimTimeout && clearTimeout(i.customAnimTimeout), i.customAnimTimeout = setTimeout(function() {
                        return i ? (i.actorState = c.IDLE, i.staticAnim(), i.animated = !1, t()) : t(new Error("Actor has been removed while customAnimTimeout is still active"))
                    }, e.duration)
                })
            }) : t(new Error("Actor has been removed while customAnimTimeout is still active"))
        }, e.delay)
    }, o.prototype.startAnimBehaviour = function() {
        function e() {
            return l + Math.floor(Math.random() * d)
        }

        function t() {
            var e = 0;
            for (u = 0; u < a.length; u++) e += a[u].animWeight;
            var t = Math.floor(Math.random() * e) + 1,
                i = 0;
            for (u = 0; u < a.length; u++)
                if (i += a[u].animWeight, a[u].animWeight > 0 && t <= i || u >= a.length) return a[u].animName;
            return s || "AnimStatique"
        }

        function i() {
            if (o !== n.animManager && (o = n.animManager, n.actorState = c.IDLE, r = 0), n.actorState !== c.PLAYING_ANIMATION) {
                if (n.actorState === c.IDLE && Date.now() >= r) {
                    var i = e();
                    r = Date.now() + i, s ? n.playCustomAnimation({
                        animationName: s,
                        direction: n.direction,
                        loop: !0,
                        duration: i,
                        delay: 0
                    }, function() {
                        n.actorState = c.WAITING_FOR_NEXT_ANIMATION
                    }) : n.actorState = c.WAITING_FOR_NEXT_ANIMATION
                }
                n.actorState === c.WAITING_FOR_NEXT_ANIMATION && Date.now() >= r && n.playCustomAnimation({
                    animationName: t(),
                    direction: n.direction,
                    loop: !1,
                    duration: 0,
                    delay: 0
                })
            }
        }
        if (this.data.npcData && !(this.data.npcData.animFunList.length <= 0)) {
            var n = this,
                o = this.animManager,
                a = n.data.npcData.animFunList,
                r = 0,
                s = null;
            this.actorState = c.IDLE;
            var u;
            for (u = 0; u < a.length; u++)
                if (0 === a[u].animWeight) {
                    s = a[u].animName;
                    break
                } window.actorManager.addAnimBehaviourToActor(this.actorId, i)
        }
    }
}
