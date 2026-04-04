function(e, t, i) {
    function n() {
        return null
    }

    function o() {
        return b = document.createElement("canvas"), b.id = "characterDisplayCanvas", b.width = g, b.height = _, m = new u(b, g, _, d.MAX_SPRITES_BUFFER_CHARACTER_DISPLAY, d.MAX_TEXTURE_MEMORY_CHARACTER_DISPLAY, d.PRERENDER_RATIO_CHARACTER_DISPLAY, (!0)), M = {
            renderer: m,
            updateList: {
                push: n
            },
            displayList: {
                add: n,
                removeByRef: n
            }
        }
    }

    function a(e) {
        s.call(this, "div", e),
        this.addClassNames("CharacterDisplay"),
        e = e || {},
        this.canvas = this.appendChild(new c),
        this.ctx = this.canvas.getContext("2d"),
        this.entity = null,
        this.scale = void 0 !== e.scale ? e.scale : 1,
        this._scale = 1 / 0,
        this.only4Directions = !1,
        "fitin" === this.scale ? (this.horizontalAlign = e.horizontalAlign || "left",
            this.verticalAlign = e.verticalAlign || "bottom") : (this.horizontalAlign = e.horizontalAlign || "none",
            this.verticalAlign = e.verticalAlign || "none"),
        this.canvasInitialized = !1,
        this.renderingRequired = !1;
        var t = this;
        window.setTimeout(function() {
            t.rootElement && (t.canvasInitialized = !0, t.resize())
        }, 0)
    }
    i(690);
    var r = i(56)
        .inherits,
        s = i(72),
        c = i(435),
        l = i(691),
        d = i(13),
        u = i(719),
        p = i(430)
        .Delay,
        h = i(16)
        .isConnectedToDom,
        f = i(91)
        .playUiSound,
        b = null,
        m = null,
        M = null,
        g = Math.ceil(512 * d.PIXEL_RATIO),
        _ = Math.ceil(512 * d.PIXEL_RATIO),
        A = 2.5;
    r(a, s),
    e.exports = a,
    window.CharacterDisplay = a,
    a.prototype.setLook = function(e, t, i) {
        var n = this;
        if (t = t || {}, t.noSmokeAnimation = !0, null === this.entity) {
            this.entity = new l({
                scene: M || o()
            });
            var a = t.showSubentities;
            this.entity.showSubentities = null === a || void 0 === a || a
        }
        var r = void 0 !== t.direction ? t.direction : 1;
        t.keepDirection || (this.entity.direction = r), t.naked ? e = t.withoutPet || t.riderOnly ? l.getLookWithoutStuffAndSub(e) : l.getLookWithoutStuff(e) : t.withoutPet ? e = l.getLookWithoutPet(e) : t.riderOnly && (e = l.getLookWithoutMount(e));
        var s = !1,
            c = !1,
            d = new p(30, function() {
                c || n.rootElement && (n.addClassNames("spinner"), s = !0)
            });
        d.start(!1),
        this.entity.setLook(e, t, function() {
            return c = !0,
                   s && n.rootElement && n.delClassNames("spinner"),
                   null !== n.entity && n.rootElement ? (e && 1 === e.bonesId && e.skins[0] && n.entity.animManager.applyBones1AnimationModifier(e.skins[0]), n.only4Directions = n.entity.animManager.only4Directions, t.animation && (n.entity.animSymbol.base = t.animation), n._scale = 1 / 0, n._render(), i && i()) : i && i()
        })
    }, a.prototype.release = function() {
        m && (null !== this.entity && (this.entity.remove(), this.entity = null), this._scale = 1 / 0, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height))
    }, a.prototype.clear = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }, a.prototype.rotateCharacter = function(e) {
        if (this.canvasInitialized && this.entity) {
            var t = this.entity.direction;
            return this.only4Directions ? (0 === (1 & t) && (t += 1), t += e ? 2 : -2, t > 7 && (t = 1), t < 0 && (t = 7)) : (t += e ? 1 : -1, t > 7 && (t = 0), t < 0 && (t = 7)), this.entity.direction = t, f("ROTATE_CHARACTER"), this._render(), t
        }
    }, a.prototype.resize = function() {
        if (this.rootElement && h(this)) {
            var e = this.canvas,
                t = parseInt(this.getComputedStyle("width"), 10),
                i = parseInt(this.getComputedStyle("height"), 10),
                n = e.width,
                o = e.height,
                a = t * d.PIXEL_RATIO,
                r = i * d.PIXEL_RATIO;
            0 !== a && 0 !== r && (this.renderingRequired || a !== n || r !== o) && (e.width = a, e.height = r, e.style.width = t + "px", e.style.height = i + "px", this._render())
        }
    }, a.prototype.setScale = function(e) {
        e !== this.scale && (this.scale = e, this._render())
    }, a.prototype._computeScale = function(e, t, i, n, o, a) {
        var r;
        if ("cover" === e) r = this._scale = Math.min(this._scale, n / Math.abs(a[0]), n / Math.abs(a[1]), o / Math.abs(a[2]), o / Math.abs(a[3]));
        else if ("width" === e) r = this._scale = Math.min(this._scale, t / (a[1] - a[0]));
        else if ("height" === e) r = this._scale = Math.min(this._scale, i / (a[2] - a[3]));
        else if ("fitin" === e) r = this._scale = Math.min(this._scale, t / (a[1] - a[0]), i / (a[2] - a[3])), r = Math.min(r, A);
        else if ("%" === e[e.length - 1]) {
            var s = parseFloat(e);
            isNaN(s) ? s = this._scale : s *= .01;
            var c = t / (a[1] - a[0]),
                l = i / (a[2] - a[3]),
                d = c > l ? l : c;
            r = this._scale = s * d, r = Math.min(r, A)
        }
        return r || this._scale
    }, a.prototype._render = function() {
        if (!this.canvasInitialized) return void(this.renderingRequired = !0);
        if (m && this.entity) {
            var e = this.canvas,
                t = e.width,
                i = e.height,
                n = m.gl,
                o = this.entity,
                a = this.scale;
            if (0 === t || 0 === i) {
                var r = this;
                return void window.setTimeout(function() {
                    if (r.resize(), !e.rootElement || 0 === e.width || 0 === e.height) return console.warn("[CharacterDisplay._render] Character display size must be greater than zero.")
                }, 0)
            }
            m.clear(), o.x = 0, o.y = 0, o.scaleX = d.PIXEL_RATIO, o.scaleY = -d.PIXEL_RATIO, o.updateAnimation(), o.refreshAnimation();
            var s = o.bbox;
            if (s[1] < s[0] || s[2] < s[3]) {
                var c = o.animManager.template.id,
                    l = o.animSymbol.base;
                if ("761/motion" === c) return;
                return void console.error(new Error("Entity animation frame is empty, template:" + c + ", animation:" + l))
            }
            var u = .5 * t,
                p = .85 * i;
            "string" == typeof a && (a = this._computeScale(a, t, i, u, p, s)), o.scaleX *= a, o.scaleY *= a;
            var h = Math.floor(s[0] * a),
                f = Math.ceil(s[1] * a),
                b = -Math.floor(s[2] * a),
                M = -Math.ceil(s[3] * a),
                g = f - h,
                A = M - b;
            if (g < 0 && (g = 0), A < 0 && (A = 0), 0 === g || 0 === A) return console.warn("[CharacterDisplay._render] Character to render is of size 0.");
            o.x = -h, o.y = M, o.render(), o.animManager.releaseBuffer();
            var O = new window.Uint8Array(g * A * 4);
            n.readPixels(0, _ - A, g, A, n.RGBA, n.UNSIGNED_BYTE, O);
            for (var v = this.ctx.createImageData(g, A), y = v.data, z = 0; z < O.length; z++) y[z] = O[z];
            var w, T;
            switch (this.horizontalAlign) {
                case "left":
                    w = 0;
                    break;
                case "center":
                    w = (t - g) / 2;
                    break;
                case "right":
                    w = t - g;
                    break;
                default:
                    w = u + h
            }
            switch (this.verticalAlign) {
                case "top":
                    T = 0;
                    break;
                case "center":
                    T = (i - A) / 2;
                    break;
                case "bottom":
                    T = i - A;
                    break;
                default:
                    T = p + b
            }
            this.ctx.clearRect(0, 0, t, i), this.ctx.putImageData(v, w, T)
        }
    }
}
