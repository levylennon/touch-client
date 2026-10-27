function(e, t, i) {
    function n() {
        var e = {
            x: 300,
            y: 300,
            id: "nicknameLabelCount" + C++,
            scene: window.isoEngine.mapScene,
            layer: r.MAP_LAYER_FOREGROUND,
            position: 2
        };
        a.call(this, e, e.scene.renderer.getEmptyTexture()), this._charName = null, this._title = null, this._titleId = null, this._ornamentId = null, this._ornamentAssetId = null, this._guild = null, this._gender = null, this._alliance = null, this._alignment = null, this._nicknameLabelCanvas = new h, this._textCanvas = this._nicknameLabelCanvas.getTextCanvas(), this._canvas = this._nicknameLabelCanvas.getCanvas(), this._guildEmblem = new c({
            width: 40,
            height: 40
        }), this._allianceEmblem = new c({
            width: 40,
            height: 40
        }), this._textureId = "none"
    }
    var o = i(56)
        .inherits,
        a = i(1174),
        r = i(13),
        s = i(18),
        c = i(437),
        l = i(439),
        d = i(130),
        u = i(440),
        p = i(12),
        h = i(1519),
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
        T = z + w,
        C = 0;
    o(n, a), e.exports = n, n.hasFullNicknameLabelData = function(e) {
        var t = e.data;
        if (!t.humanoidInfo) return !1;
        for (var i = t.humanoidInfo.options || [], n = !1, o = 0; o < i.length; o++) {
            var a = i[o];
            if ("HumanOptionOrnament" === a._type || "HumanOptionTitle" === a._type) {
                n = !0;
                break
            }
        }
        var r = t.alignmentInfos && 0 !== t.alignmentInfos.alignmentGrade;
        return n || r
    }, n.prototype.getType = function() {
        return this._type
    }, n.prototype.set = function(e, t) {
        this._nicknameLabelCanvas.clearAll(), this._type = t, this.hasOrnament = !1, this.hasGuild = !1, this.hasAlliance = !1, this.hasTitle = !1, this.hasWings = !1;
        var i = e.data,
            n = {};
        if (n.name = i.name, "full" === t) {
            for (var o, a, r, s, c = i.humanoidInfo.options || [], l = 0; l < c.length; l += 1) {
                var d = c[l];
                "HumanOptionGuild" === d._type ? (r = d.guildInformations, this.hasGuild = !0) : "HumanOptionAlliance" === d._type ? (s = d.allianceInformations, this.hasAlliance = !0) : "HumanOptionOrnament" === d._type ? (a = d.ornamentId, this.hasOrnament = !0) : "HumanOptionTitle" === d._type && (o = d.titleId, this.hasTitle = !0)
            }
            i.alignmentInfos && 0 !== i.alignmentInfos.alignmentGrade && (this.hasWings = !0);
            var u = i.alignmentInfos.characterPower - i.actorId,
                p = window.gui.playerData.getLevelDiff(u);
            this.setAttributes({
                charName: i.name,
                titleId: o,
                ornamentId: a,
                guild: r,
                alliance: s,
                gender: i.humanoidInfo.sex,
                alignmentInfos: i.alignmentInfos,
                levelDiff: p
            }), this.hasNameOnly = !1, n.gender = i.humanoidInfo.sex, n.guild = r, n.alliance = s, n.alignment = i.alignmentInfos, n.titleId = o, n.ornamentId = a
        } else this.setAttributes({
            charName: i.name
        }), this.hasNameOnly = !0;
        this._setTextureId(n), this.displayOnActor(e)
    }, n.prototype._setTextureId = function(e) {
        this._textureId = e.name, this.hasNameOnly || (this.hasGuild && (this._textureId += ".g" + e.guild.guildId), this.hasAlliance && (this._textureId += ".a" + e.alliance.allianceId), this.hasTitle && (this._textureId += ".t" + e.titleId), this.hasWings ? this._textureId += ".w" + e.alignment.alignmentSide + "." + e.alignment.alignmentGrade : this.hasOrnament && (this._textureId += ".o" + e.ornamentId), this._textureId += ".s" + e.gender)
    }, n.prototype.setAttributes = function(e) {
        e = e || {}, this._charName = e.hasOwnProperty("charName") ? e.charName : null, this._guild = e.hasOwnProperty("guild") ? e.guild : null, this._alliance = e.hasOwnProperty("alliance") ? e.alliance : null, this._alignment = e.hasOwnProperty("alignmentInfos") ? e.alignmentInfos : null, this._levelDiff = e.levelDiff, this._ornamentId = e.hasOwnProperty("ornamentId") ? e.ornamentId : null, this._ornamentAssetId = e.hasOwnProperty("ornamentAssetId") ? e.ornamentAssetId : null, this._title = e.hasOwnProperty("title") ? e.title : null, this._titleId = e.hasOwnProperty("titleId") ? e.titleId : null, this._gender = e.hasOwnProperty("gender") ? e.gender : null
    }, n.prototype.changeAttributes = function(e) {
        e = e || {};
        for (var t in e) this.hasOwnProperty("_" + t) && (this["_" + t] = e[t])
    }, n.prototype.displayOnActor = function(e) {
        var t = this,
            i = function(i) {
                if (window.actorManager.getActor(e.actorId)) {
                    if (i) return console.error(i);
                    t.hasWings ? t._nicknameLabelCanvas.updateWithWings() : t._nicknameLabelCanvas.update(), t.setTexture(t._canvas);
                    var n = e.bbox,
                        o = n[0] + (n[1] - n[0]) / 2,
                        a = n[2];
                    t.x = o - t.w / 2, t.y = a - t.h, t.show()
                }
            };
        this.display(i)
    }, n.prototype.display = function(e) {
        var t = this;
        t.hide(), this._preload(function(i) {
            return i ? e(i) : (t._calculateDimension(), !t._ornamentAssetId || t._alignment && 0 !== t._alignment.alignmentGrade ? (t._resizeTextCanvas(t._textWidth, t._textHeight, 0, 0), t._displayText(), t._alignment && 0 !== t._alignment.alignmentGrade ? t._displayWings(e) : e()) : (1 === t._textCanvas.width && t._displayTextAndOrnament(), e()))
        })
    }, n.prototype._loadOrnament = function(e) {
        var t = this;
        s.series([function(e) {
            var i = t._ornamentId;
            return i ? void d.getDataMap("Ornaments", [i], null, function(n, o) {
                if (n) return e(n);
                var a = o[i];
                return a ? (t._ornamentAssetId = a.assetId, void e()) : e(new Error("staticContent.getData Ornaments - ornamentData is null for ornament id: " + i))
            }) : e()
        }, function(e) {
            return t._ornamentAssetId ? void l.loadModel("ornaments", "ornament_" + t._ornamentAssetId, function(i, n) {
                t._jsonObj = i, t._image = n, e()
            }) : e()
        }], e)
    }, n.prototype._preload = function(e) {
        var t = this;
        s.parallel([function(e) {
            t._loadOrnament(e)
        }, function(e) {
            var i = t._titleId;
            return i ? void d.getDataMap("Titles", [i], null, function(n, o) {
                if (n) return e(n);
                var a = o[i];
                return a ? (t._title = t._gender ? a.nameFemaleId : a.nameMaleId, void e()) : e(new Error("staticContent.getData Titles - titleData is null for title id " + i))
            }) : e()
        }, function(e) {
            return t._guild && t._guild.guildEmblem ? void t._guildEmblem.setValue(t._guild.guildEmblem, !0, e) : e()
        }, function(e) {
            return t._alliance && t._alliance.allianceEmblem ? void t._allianceEmblem.setValue(t._alliance.allianceEmblem, !0, e) : e()
        }, function(e) {
            if (!t._alignment || 0 === t._alignment.alignmentGrade) return e();
            var i = window.gui.playerData.alignment;
            i.getTopWings(t._alignment, function(i) {
                i && (t._topWingsInfo = i), e()
            })
        }, function(e) {
            if (!t._alignment || 0 === t._alignment.alignmentGrade) return e();
            var i = window.gui.playerData.alignment;
            i.getBottomWings(t._alignment, function(i) {
                i && (t._bottomWingsInfo = i), e()
            })
        }], e)
    }, n.prototype._calculateDimension = function() {
        var e = this._textCanvas.getContext("2d"),
            t = [],
            i = 0,
            n = 0;
        if (e.font = A, this._nameWidth = e.measureText(this._charName)
            .width, t.push(this._nameWidth), n = M, this.hasNameOnly ? (f = 0, b = 0, v = 3, y = 0) : (f = 160, b = 40, v = 10, y = 5), this.hasGuild) {
            var o = this._guild.guildName;
            e.font = _, this._guildNameWidth = e.measureText(o)
                .width, t.push(this._guildNameWidth + T), t.push(this._nameWidth + T), n += y + m
        }
        if (this.hasAlliance && (t.push(this._guildNameWidth + 2 * T), t.push(this._nameWidth + 2 * T)), this.hasTitle) {
            e.font = O;
            var a = this._title,
                r = e.measureText(a)
                .width;
            t.push(r), n += y + g
        }
        i = Math.max.apply(null, t) + 2 * v, n += 2 * v, i = Math.round(i), n = Math.round(n), this._textWidth = Math.max(i, f), this._textHeight = Math.max(n, b), this._diffWidth = this._textWidth - f, this._diffHeight = this._textHeight - b
    }, n.prototype._displayText = function() {
        var e = this._textWidth,
            t = this._textHeight;
        this._nicknameLabelCanvas.displayTextBackground(e, t);
        var i = Math.max(this._guildNameWidth || 0, this._nameWidth),
            n = i + (this.hasGuild ? T : 0) + (this.hasAlliance ? T : 0),
            o = Math.round(i / 2),
            a = Math.round((e - n) / 2) + (this._guild ? T : 0),
            r = v;
        if (this.hasNameOnly && (r = 0), this.hasGuild && (r += m, this._nicknameLabelCanvas.displayText(this._guild.guildName, a + o, r, _, "#ffffff"), r += y), this._charName && (r += M, this._nicknameLabelCanvas.displayText(this._charName, a + o, r, A, "#ffffff"), r += y), this.hasTitle) {
            r += g;
            var s = this._title;
            this._nicknameLabelCanvas.displayText(s, Math.round(e / 2), r, O, "#00B346")
        }
        this.hasGuild && this._nicknameLabelCanvas.displayImage(this._guildEmblem.getContext()
            .canvas, a - T, v, 40, 40), this.hasAlliance && this._nicknameLabelCanvas.displayImage(this._allianceEmblem.getContext()
            .canvas, a + i + w, v, 40, 40)
    }, n.prototype._displayWings = function(e) {
        this._alignment && this._alignment.alignmentSide !== u.ALIGNMENT_NEUTRAL && 0 !== this._alignment.alignmentGrade && (this._glowMargin = 20, this._opacity = this._levelDiff === -1 ? .6 : 1, this._shadowBlur = 1 === this._levelDiff ? this._glowMargin : 0, this._shadowColor = this._alignment.alignmentSide === u.ALIGNMENT_ANGEL ? "#ffffff" : "#ff0018", this._getWingsImages(e))
    }, n.prototype._getWingsImages = function(e) {
        var t = this;
        s.parallel([function(e) {
            p.loadImage(t._topWingsInfo.imagePath, function(i) {
                t._nicknameLabelCanvas.displayWingPart(i, t._topWingsInfo, !0), e()
            })
        }, function(e) {
            return t._bottomWingsInfo ? void p.loadImage(t._bottomWingsInfo.imagePath, function(i) {
                t._nicknameLabelCanvas.displayWingPart(i, t._bottomWingsInfo, !1), e()
            }) : e()
        }], e)
    }, n.prototype._displayTextAndOrnament = function() {
        var e = this._diffWidth,
            t = this._diffHeight,
            i = this._jsonObj;
        if (i) {
            var n = this._image,
                o = Math.round(e / 2),
                a = Math.round(t / 2);
            for (var r in i.symbols) {
                var s = i.symbols[r];
                if (s.className && s.className.indexOf("ornament_") !== -1) {
                    this._resizeOrnament(s);
                    for (var c = s.children.length - 1; c >= 0; c--) {
                        var l = s.children[c],
                            d = l.id,
                            u = i.symbols[d],
                            p = l.matrices[0],
                            h = i.matrices[p],
                            m = h[0],
                            M = h[1],
                            g = h[2],
                            _ = h[3],
                            A = h[4],
                            O = h[5];
                        switch (l.name) {
                            case "left":
                                O += a;
                                break;
                            case "right":
                                A += e, O += a;
                                break;
                            case "picto":
                                A += o;
                                break;
                            case "top":
                                A += o;
                                break;
                            case "bottom":
                                A += o, O += t;
                                break;
                            case "topRight":
                                A += e;
                                break;
                            case "bottomLeft":
                                O += t;
                                break;
                            case "bottomRight":
                                A += e, O += t
                        }
                        this._nicknameLabelCanvas.saveAndTransform(m, M, g, _, A, O), this._nicknameLabelCanvas.displayTextAndOrnament(l.name, n, u, e, t, f, b), "bg" === l.name && this._displayText(), this._nicknameLabelCanvas.restore()
                    }
                }
            }
        }
    }, n.prototype._resizeTextCanvas = function(e, t, i, n) {
        var o = this._textCanvas.getContext("2d");
        this._textCanvas.width = e, this._textCanvas.height = t, o.clearRect(0, 0, e, t), o.translate(i, n)
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
            this._resizeTextCanvas(h, f, -i, -t)
        }
    }
}
