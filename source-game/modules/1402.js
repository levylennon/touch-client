function(e, t, i) {
    function n() {
        function e() {
            var e = {
                breedId: n._breedId,
                sex: n._sex,
                cosmeticId: n._headId
            };
            n._relookingParams && (e.relookingParams = n._relookingParams), l.open("characterCreation", e), l.close("breedHighlightWindow")
        }

        function t() {
            n._sex !== this._sex && (n._sex = this._sex, n._updateSprite(!0))
        }

        function i() {
            n.orientation = g, n._updateSprite(!0)
        }
        a.call(this, {
            className: "breedHighlightWindow",
            noTitle: !0,
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: "100%",
                height: "100%",
                isFullScreen: !0
            }
        });
        var n = this;
        this._loadedHeads = {}, this._sex = Math.random() > .45 ? m : b, this.headContainers = [], this._setupCharacterOnCheckerboard(), this._god = this.windowBody.createChild("div", {
            className: "god"
        });
        var o = this.windowBody.createChild("div", {
            className: "header"
        });
        this._title = o.createChild("div", {
            className: "title"
        });
        var r = this.windowBody.createChild("div", {
            className: "bottom"
        });
        r.createChild("div", {
            className: "effect"
        });
        var d = r.createChild("div", {
            className: "contentWrapper"
        });
        this.roles = d.appendChild(new p), this.roles.init();
        var u = d.createChild("div", {
            className: "texts"
        });
        this._breedTitle = u.createChild("div", {
            className: "title"
        }), this._breedDescription = u.createChild("div", {
            className: "breedDescription"
        });
        var h = r.createChild("div", {
                className: "background"
            }),
            f = h.createChild("div", {
                className: "buttonWrapper"
            });
        this._buttonM = f.appendChild(new s({
            className: ["sexBtn", "sexM"]
        }, t)), this._buttonM._sex = b, this._buttonF = f.appendChild(new s({
            className: ["sexBtn", "sexF"]
        }, t)), this._buttonF._sex = m, this._continue = f.appendChild(new s({
            className: "greenButtonV2"
        }, e)), this._continue.createChild("div", {
            className: "text",
            text: c("ui.classHighlight.continue")
        }), this.on("open", function(e) {
            e.relookingParams && (n._relookingParams = e.relookingParams), n._breedId = e.breedId, n.headsMap = window.gui.databases.Heads, this._init(), i()
        }), this.on("close", function() {
            n._reset()
        })
    }
    i(1403);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(1404),
        s = i(86),
        c = i(17)
        .getText,
        l = i(52),
        d = i(34)
        .logger,
        u = i(689),
        p = i(1256),
        h = i(16),
        f = i(16)
        .showProgressively,
        b = 0,
        m = 1,
        M = 8,
        g = 3;
    o(n, a), e.exports = n, n.prototype._init = function() {
        this.spriteStatus = {};
        var e = r.getBreedData(this._breedId),
            t = r.getBgClass(this._breedId),
            i = r.getGodClass(this._breedId),
            n = r.getTitle(this._breedId);
        this.windowBody.toggleClassName(t, !0), this._god.toggleClassName(i, !0), this._title.setText(n), this._breedTitle.setText(e.longNameId), this._breedDescription.setText(e.gameplayDescriptionId), this.roles.updateRoles(this._breedId)
    }, n.prototype._reset = function() {
        this.spriteStatus = {}, this.windowBody.setClassNames("windowBody"), this._god.setClassNames("god")
    }, n.prototype._setupCharacterOnCheckerboard = function() {
        this.characterOnCheckerboard = this.windowBody.createChild("div", {
            className: "characterOnCheckerboard"
        }), this.CheckerboardImage = this.characterOnCheckerboard.createChild("div", {
            className: "checkerboardImage"
        }), this.characterDisplay = this.characterOnCheckerboard.appendChild(new u({
            scale: 3
        }))
    }, n.prototype._updateSprite = function(e) {
        function t(e, t, i) {
            var n = [];
            return Object.keys(i)
                .forEach(function(o) {
                    var a = i[o];
                    a.breed === e && a.gender === t && n.push(o)
                }), n
        }
        var i = r.getBreedData(this._breedId),
            n = h.parseLook(d, i[(this._sex === m ? "female" : "male") + "Look"], "Breed: " + this._breedId + " sex: " + this._sex);
        this._buttonM.toggleClassName("on", this._buttonM._sex === this._sex), this._buttonF.toggleClassName("on", this._buttonF._sex === this._sex);
        var o = n.skin,
            a = n.scale,
            s = t(this._breedId, this._sex, this.headsMap),
            c = s[Math.floor(Math.random() * M)];
        this._headId = c;
        var l = this.headsMap[c].skins,
            u = r.getBreedColors(this._breedId, this._sex);
        this.spriteStatus.bodySkin === o && this.spriteStatus.headSkin === l && this.spriteStatus.colorsHash === u && this.spriteStatus.orientation === this.orientation && this.spriteStatus.scale === a || (this.spriteStatus.bodySkin = o, this.spriteStatus.headSkin = l, this.spriteStatus.colorsHash = u, this.spriteStatus.orientation = this.orientation, this.spriteStatus.scale = a, this._drawCharacter(e))
    }, n.prototype._buildEntityLook = function() {
        return {
            bonesId: 1,
            indexedColors: this.spriteStatus.colorsHash,
            scales: [this.spriteStatus.scale],
            skins: [this.spriteStatus.bodySkin, this.spriteStatus.headSkin],
            subentities: []
        }
    }, n.prototype._drawCharacter = function(e) {
        this.lastRendering = Date.now();
        var t = this;
        this.characterDisplay.setLook(this._buildEntityLook(), {
            boneType: "characters/",
            skinType: "characters/",
            direction: this.orientation
        }, function() {
            e && f(t.characterDisplay, 300, 50)
        })
    }
}
