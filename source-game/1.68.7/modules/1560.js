function(e, t, i) {
    function n() {}
    var o = i(1489),
        a = i(1533),
        r = i(1539),
        s = i(691),
        c = i(91).playUiSound,
        l = i(13),
        d = i(1509),
        u = i(1542),
        p = i(430),
        h = i(130),
        f = p.Tween,
        b = p.easing,
        m = {};
    o.prototype.checkAndConstructAnimType = function(e, t) {
        if (!this.actorManager.isCreatureModeOn && t) {
            if (0 === e.emoteId) return void t.staticAnim();
            var i = e._emote;
            if (i) {
                var n = i.defaultAnim;
                if (n = n.substring(0, 1)
                    .toUpperCase() + n.substring(1) + "_0", !i.eight_directions) {
                    var o = 2 * ~~(t.direction / 2) + 1;
                    o !== t.direction && t.setDisposition(null, o)
                }
                return n
            }
        }
    },
    o.prototype.playEmoteFromOption = function(e, t, i) {
        var n = this,
            o = t.emoteId || 0,
            a = this.actorManager.getActor(e);
        if (!a) return i();
        var r = m[o] || window.gui.playerData.emoteData.list[o];
        if (r) {
            if (r.aura) return i();
            this.playEmote({
                actorId: a.actorId,
                emoteId: o,
                _emote: r
            }, i)
        } else h.getDataMap("Emoticons", [o], null, function(a, r) {
            return a ? i(a) : r[o] ? (m[o] = r[o], n.playEmoteFromOption(e, t, i)) : i()
        })
    },
    o.prototype.playEmote = function(e, t) {
        t = t || n;
        var i = this.actorManager.getActor(e.actorId),
            o = this.checkAndConstructAnimType(e, i);
        return o ? (i.lastEmoteAnim = e._emote.persistancy ? o : null, void this.actorManager.addToFifo(i.actorId, function(e) {
            e(), i.loadAndPlayAnimation({
                base: "AnimEmote",
                type: o
            }, {
                loop: !1,
                isEmoteAnimated: !0
            }, t)
        })) : t()
    },
    o.prototype.playRelookedEmote = function(e) {
        var t = this;
        window.actorManager.setActorLook(e.actorId, e.look, {
            noSmokeAnimation: !0
        }, function() {
            t.playEmote(e)
        })
    },
    o.prototype.playLevelUpAnimation = function(e) {
        var t = this.actorManager.getActor(e);
        if (t) {
            var i, n = t.look;
            if (n && n.skins && n.skins[0]) {
                var o = n.skins[0];
                i = (1 & o)
                    .toString()
            } else i = Math.random() < .5 ? "0" : "1";
            var a;
            if (n && 1 === n.bonesId) a = "AnimEmoteInterface_" + i;
            else if (t.isRiding) {
                var r = s.getLookOfRider(n);
                r && 2 === r.bonesId && (a = "AnimLevelUpRiding")
            }
            a && t.loadAndPlayAnimation({
                base: a,
                direction: 1
            }, {
                loop: !1
            }), c("LEVEL_UP");
            var p = t.x,
                h = t.y,
                m = "LEVEL UP",
                M = this.bitmapFonts.characters,
                g = new u({
                    x: p,
                    y: h,
                    scene: this.mapScene,
                    text: m,
                    fallbackText: m,
                    layer: l.MAP_LAYER_POINT_LABELS,
                    bitmapFont: M,
                    color: [.3, .5, -.1, 0]
                });
            g.scaleX = .7, g.scaleY = .7, new f(g, ["y", "alpha"])
                .from({
                    y: h,
                    alpha: 0
                })
                .to({
                    y: h,
                    alpha: 0
                }, 9)
                .to({
                    y: h - 40,
                    alpha: 1
                }, 8, b.backOut, 2)
                .to({
                    y: h - 40,
                    alpha: 1
                }, 16)
                .to({
                    y: h - 90,
                    alpha: 0
                }, 12, b.backIn, 2)
                .onFinish(function() {
                    g.remove()
                })
                .start();
            var _ = new d(t.position, p, h);
            _.red = 1, _.green = 1, _.blue = .9, new f(_, ["scaleX", "scaleY", "alpha"])
                .from({
                    scaleX: .3,
                    scaleY: .3,
                    alpha: 0
                })
                .to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1.7
                }, 7, b.polyOut, 4)
                .to({
                    scaleX: .3,
                    scaleY: 1,
                    alpha: 1.7
                }, 20, b.polyOut, 2)
                .to({
                    scaleX: .3,
                    scaleY: 1,
                    alpha: 0
                }, 7, b.polyOut, 2)
                .onFinish(function() {
                    _.remove()
                })
                .start()
        }
    },
    o.prototype.playRoleplaySpellAnim = function(e, t) {
        var i = new a;
        i.runSequence([e], function() {
            r(e), window.isoEngine.fightSequence.animSequence.launchAnimation(function(e) {
                return e && console.error(e), t()
            })
        })
    }
}
