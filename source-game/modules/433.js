function(e, t, i) {
    function n(e, t) {
        t = t || {}, d.call(this, "div", e), this.addClassNames("Ornament"), this._charName = null, this._title = null, this._titleId = null, this._ornamentId = null, this._ornamentAssetId = null, this._guild = null, this._gender = null, this._alliance = null, this._alignment = null, this._scaleFactor = (t.scaleFactor || 1) * h.PIXEL_RATIO, this.alignmentWingsWrapper = this.createChild("div", {
            className: "alignmentWingsWrapper"
        }), this._wingsTopCanvas = this.alignmentWingsWrapper.appendChild(new a), this._wingsTopCtx = this._wingsTopCanvas.getContext(), this.alignmentTailWrapper = this.createChild("div", {
            className: "alignmentTailWrapper"
        }), this._wingsBottomCanvas = this.alignmentTailWrapper.appendChild(new a), this._wingsBottomCtx = this._wingsBottomCanvas.getContext(), this._canvas = this.appendChild(new a), this._ctx = this._canvas.getContext(), this._width = this._canvas.width = 400, this._height = this._canvas.height = 400, this._guildEmblem = new r({
            width: 40,
            height: 40
        }), this._allianceEmblem = new r({
            width: 40,
            height: 40
        })
    }
    i(434);
    var o = i(18),
        a = i(435),
        r = i(437),
        s = i(56)
        .inherits,
        c = i(439),
        l = i(130),
        d = i(72),
        u = i(440),
        p = i(12),
        h = i(13),
        f = 160,
        b = 40,
        m = 16,
        M = 16,
        g = 19,
        _ = m + "px Arial",
        A = M + "px Arial",
        O = g + "px Arial",
        v = 10,
        y = 5,
        z = 40,
        w = 10,
        T = z + w;
    s(n, d), e.exports = n, n.prototype.setAttributes = function(e) {
        e = e || {}, this._charName = e.hasOwnProperty("charName") ? e.charName : null, this._guild = e.hasOwnProperty("guild") ? e.guild : null, this._alliance = e.hasOwnProperty("alliance") ? e.alliance : null, this._alignment = e.hasOwnProperty("alignmentInfos") ? e.alignmentInfos : null, this._levelDiff = e.levelDiff, this._ornamentId = e.hasOwnProperty("ornamentId") ? e.ornamentId : null, this._ornamentAssetId = e.hasOwnProperty("ornamentAssetId") ? e.ornamentAssetId : null, this._title = e.hasOwnProperty("title") ? e.title : null, this._titleId = e.hasOwnProperty("titleId") ? e.titleId : null, this._gender = e.hasOwnProperty("gender") ? e.gender : null
    }, n.prototype.changeAttributes = function(e) {
        e = e || {};
        for (var t in e) this.hasOwnProperty("_" + t) && (this["_" + t] = e[t])
    }, n.prototype.display = function() {
        var e = this,
            t = this._ctx;
        t.clearRect(0, 0, this._width, this._height), this._preload(function(t) {
            return t ? console.error(t) : (e._calculateDimension(), !e._ornamentAssetId || e._alignment && 0 !== e._alignment.alignmentGrade ? (e._resizeCanvas(e._textWidth, e._textHeight, 0, 0), e._displayText(), void e.emit("rendered")) : (e._displayTextAndOrnament(), void e.emit("rendered")))
        })
    }, n.prototype._loadOrnament = function(e) {
        var t = this;
        o.series([function(e) {
            var i = t._ornamentId;
            return i ? void l.getDataMap("Ornaments", [i], null, function(n, o) {
                if (n) return e(n);
                var a = o[i];
                return a ? (t._ornamentAssetId = a.assetId, void e()) : e(new Error("staticContent.getData Ornaments - ornamentData is null for ornament id " + i))
            }) : e()
        }, function(e) {
            return t._ornamentAssetId ? void c.loadModel("ornaments", "ornament_" + t._ornamentAssetId, function(i, n) {
                t._jsonObj = i, t._image = n, e()
            }) : e()
        }], e)
    }, n.prototype._preload = function(e) {
        var t = this;
        this._guildEmblem = new r({
            width: 40,
            height: 40
        }), this._allianceEmblem = new r({
            width: 40,
            height: 40
        }), o.parallel([function(e) {
            t._loadOrnament(e)
        }, function(e) {
            return t._titleId ? void l.getDataMap("Titles", [t._titleId], null, function(i, n) {
                if (i) return e(i);
                var o = n[t._titleId];
                return o ? (t._title = t._gender ? o.nameFemaleId : o.nameMaleId, void e()) : e(new Error("staticContent.getData Titles - titleData is null for title id " + t._titleId))
            }) : e()
        }, function(e) {
            return t._guild && t._guild.guildEmblem ? void t._guildEmblem.setValue(t._guild.guildEmblem, !0, e) : e()
        }, function(e) {
            return t._alliance && t._alliance.allianceEmblem ? void t._allianceEmblem.setValue(t._alliance.allianceEmblem, !0, e) : e()
        }], e)
    }, n.prototype._calculateDimension = function() {
        var e = this._ctx,
            t = [],
            i = 0,
            n = 0;
        if (e.font = A, this._nameWidth = e.measureText(this._charName)
            .width, t.push(this._nameWidth), n = M, this._guild) {
            var o = this._guild.guildName;
            e.font = _, this._guildNameWidth = e.measureText(o)
                .width, t.push(this._guildNameWidth + 2 * T), t.push(this._nameWidth + 2 * T), n += y + m
        }
        if (this._title) {
            e.font = O;
            var a = this._title,
                r = e.measureText(a)
                .width;
            t.push(r), n += y + g
        }
        i = Math.max.apply(null, t) + 2 * v, n += 2 * v, i = Math.round(i), n = Math.round(n), this._textWidth = Math.max(i, f), this._textHeight = Math.max(n, b), this._diffWidth = this._textWidth - f, this._diffHeight = this._textHeight - b
    }, n.prototype._displayText = function() {
        var e = this,
            t = this._ctx,
            i = this._textWidth,
            n = this._textHeight;
        t.fillStyle = "rgba(0, 0, 0, 0.8)";
        var o = 5;
        t.beginPath(), t.moveTo(o, 0), t.lineTo(i - o, 0), t.quadraticCurveTo(i, 0, i, o), t.lineTo(i, n - o), t.quadraticCurveTo(i, n, i - o, n), t.lineTo(o, n), t.quadraticCurveTo(0, n, 0, n - o), t.lineTo(0, o), t.quadraticCurveTo(0, 0, o, 0), t.closePath(), t.fill(), t.textAlign = "center";
        var a = Math.max(this._guildNameWidth || 0, this._nameWidth),
            r = a + (this._guild ? 2 * T : 0),
            s = Math.round(a / 2),
            c = Math.round((i - r) / 2) + (this._guild ? T : 0),
            l = v;
        if (this._guild) {
            var d = this._guild.guildName;
            t.font = _, t.fillStyle = "#ffffff", l += m, t.fillText(d, c + s, l), l += y
        }
        if (this._charName && (t.font = A, t.fillStyle = "#ffffff", l += M, t.fillText(this._charName, c + s, l), l += y), this._title) {
            t.font = O, t.fillStyle = "#00B346";
            var h = this._title;
            l += g, t.fillText(h, Math.round(i / 2), l)
        }
        if (this._guild && (t.drawImage(this._guildEmblem.getContext()
                .canvas, c - T, v, 40, 40), t.drawImage(this._allianceEmblem.getContext()
                .canvas, c + a + w, v, 40, 40)), this._alignment && this._alignment.alignmentSide !== u.ALIGNMENT_NEUTRAL && 0 !== this._alignment.alignmentGrade) {
            var f = window.gui.playerData.alignment,
                b = 20,
                z = this._levelDiff === -1 ? .6 : 1,
                C = 1 === this._levelDiff ? b : 0,
                I = this._alignment.alignmentSide === u.ALIGNMENT_ANGEL ? "#ffffff" : "#ff0018",
                S = function(e, t, i, n, o) {
                    var a = t.width + 2 * b,
                        r = t.height + 2 * b,
                        s = t.left - b,
                        c = t.top;
                    c += o ? -b : b, i.width = a, i.height = r, i.setStyles({
                        left: s + "px",
                        top: c + "px",
                        width: a + "px",
                        height: r + "px",
                        opacity: z
                    }), n.shadowBlur = C, n.shadowColor = I, n.drawImage(e, b, b)
                };
            f.getTopWings(this._alignment, function(t) {
                p.loadImage(t.imagePath, function(i) {
                    S(i, t, e._wingsTopCanvas, e._wingsTopCtx, !0), e._wingsTopCanvas.show()
                })
            }), f.getBottomWings(this._alignment, function(t) {
                t ? p.loadImage(t.imagePath, function(i) {
                    S(i, t, e._wingsBottomCanvas, e._wingsBottomCtx, !1), e._wingsBottomCanvas.show()
                }) : e._wingsBottomCanvas.hide()
            })
        } else e._wingsTopCanvas.hide(), e._wingsBottomCanvas.hide()
    }, n.prototype._displayTextAndOrnament = function() {
        var e = this._ctx,
            t = this._diffWidth,
            i = this._diffHeight,
            n = this._jsonObj,
            o = this._image,
            a = Math.round(t / 2),
            r = Math.round(i / 2);
        for (var s in n.symbols) {
            var c = n.symbols[s];
            if (c.className && c.className.indexOf("ornament_") !== -1) {
                this._resizeOrnament(c);
                for (var l = c.children.length - 1; l >= 0; l--) {
                    var d = c.children[l],
                        u = d.id,
                        p = n.symbols[u],
                        h = d.matrices[0],
                        m = n.matrices[h],
                        M = m[0],
                        g = m[1],
                        _ = m[2],
                        A = m[3],
                        O = m[4],
                        v = m[5];
                    switch (d.name) {
                        case "left":
                            v += r;
                            break;
                        case "right":
                            O += t, v += r;
                            break;
                        case "picto":
                            O += a;
                            break;
                        case "top":
                            O += a;
                            break;
                        case "bottom":
                            O += a, v += i;
                            break;
                        case "topRight":
                            O += t;
                            break;
                        case "bottomLeft":
                            v += i;
                            break;
                        case "bottomRight":
                            O += t, v += i
                    }
                    e.save(), e.transform(M, g, _, A, O, v);
                    var y = isNaN(parseInt(p.sx, 10)) || isNaN(parseInt(p.sy, 10)) || isNaN(parseInt(p.sw, 10)) || isNaN(parseInt(p.sh, 10)) || isNaN(parseInt(p.x, 10)) || isNaN(parseInt(p.y, 10)) || isNaN(parseInt(p.w, 10)) || isNaN(parseInt(p.h, 10));
                    if (y);
                    else if ("bg" === d.name) {
                        this._displayText();
                        var z = p.sw / p.w,
                            w = p.sh / p.h,
                            T = .5 * f - p.x,
                            C = .5 * b - p.y,
                            I = p.w + p.x - .5 * f,
                            S = p.h + p.y - .5 * b;
                        e.drawImage(o, p.sx, p.sy, T * z, C * w, p.x, p.y, T, C), e.drawImage(o, p.sx + T * z, p.sy, I * z, C * w, p.x + T + t, p.y, I, C), e.drawImage(o, p.sx, p.sy + C * w, T * z, S * w, p.x, p.y + C + i, T, S), e.drawImage(o, p.sx + T * z, p.sy + C * w, I * z, S * w, p.x + T + t, p.y + C + i, I, S), e.drawImage(o, p.sx + T * z, p.sy, Number(z), C * w, p.x + T, p.y, t, C), e.drawImage(o, p.sx + T * z, p.sy + C * w, Number(z), S * w, p.x + T, p.y + C + i, t, S), e.drawImage(o, p.sx, p.sy + C * w, T * z, Number(w), p.x, p.y + C, T, i), e.drawImage(o, p.sx + T * z, p.sy + C * w, T * z, Number(w), p.x + T + t, p.y + C, T, i)
                    } else e.drawImage(o, p.sx, p.sy, p.sw, p.sh, p.x, p.y, p.w, p.h);
                    e.restore()
                }
            }
        }
    }, n.prototype._resizeCanvas = function(e, t, i, n) {
        var o = this._ctx;
        this._width = e * this._scaleFactor, this._height = t * this._scaleFactor, this._canvas.width = this._width, this._canvas.height = this._height, this._cssWidth = this._width / h.PIXEL_RATIO, this._cssHeight = this._height / h.PIXEL_RATIO, this._canvas.setStyles({
            width: this._cssWidth + "px",
            height: this._cssHeight + "px"
        }), o.clearRect(0, 0, this._width, this._height), o.scale(this._scaleFactor, this._scaleFactor), o.translate(i, n), this.emit("sizeChanged")
    }, n.prototype._resizeOrnament = function(e) {
        var t = 1 / 0,
            i = 1 / 0,
            n = -(1 / 0),
            o = -(1 / 0);
        if (e.children.length) {
            for (var a = e.children.length - 1; a >= 0; a--) {
                var r = e.children[a],
                    s = r.id,
                    c = this._jsonObj.symbols[s];
                if (c.isGraphic) {
                    var l = r.matrices[0],
                        d = this._jsonObj.matrices[l],
                        u = d[4] + c.x || 0,
                        p = d[5] + c.y || 0;
                    t = Math.min(t, p), i = Math.min(i, u), n = Math.max(n, u + c.w), o = Math.max(o, p + c.h)
                }
            }
            var h = Math.round(n - i + this._diffWidth),
                f = Math.round(o - t + this._diffHeight);
            this._resizeCanvas(h, f, -i, -t)
        }
    }, n.prototype.getHeight = function() {
        return this._cssHeight
    }, n.prototype.getCanvasOffsetWidth = function() {
        return this._canvas.rootElement.offsetWidth
    }
}
