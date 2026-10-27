function(e, t, i) {
    function n() {
        s.call(this, {
            className: "SocialGroupCreationWindow",
            title: "",
            positionInfo: {
                left: "c",
                top: "c",
                width: "80%",
                height: "90%"
            }
        });
        var e = this;
        this._isModeratorOrMore = !1, this.once("open", function() {
            e.addClassNames("spinner"), e.windowBody.hide(), e._createDom(), O.preloadImage("ui/slot.png", function(t) {
                e.slotIconImage = t
            }), b.getAllDataTable(["EmblemSymbolCategories", "EmblemSymbols", "EmblemBackgrounds"], function(t, i) {
                return t ? console.error("SocialGroupCreationWindow: Failed to retrieve emblem data", t) : (e.emblemBackgrounds = i.EmblemBackgrounds, e.emblemSymbols = i.EmblemSymbols, e.emblemSymbolCategories = i.EmblemSymbolCategories, e._generateSelectorOptions(), e._displayEmblemBackgrounds(i.EmblemBackgrounds), e._displayEmblemSymbols(i.EmblemSymbols), e._setupUI(), e.delClassNames("spinner"), e.windowBody.show(), e._updateUISize(), e.on("open", function() {
                    e.addClassNames("spinner"), e._generateSelectorOptions(), e.windowBody.hide(), e.tabs.openTab("background"), e._setupUI(), e.delClassNames("spinner"), e.windowBody.show()
                }), void e.on("opened", function() {
                    e._updateUISize()
                }))
            })
        });
        var t = window.gui;
        t.on("GuildCreationStartedMessage", function() {
            e.mode = "guild", e.modification = !1, d.openDialog(e.id)
        }), t.on("GuildModificationStartedMessage", function(t) {
            e.mode = "guild", t.canChangeName && t.canChangeEmblem ? e.modification = "all" : t.canChangeName ? e.modification = "name" : e.modification = "emblem", d.openDialog(e.id)
        }), t.on("AllianceCreationStartedMessage", function() {
            e.mode = "alliance", e.modification = !1, d.openDialog(e.id)
        }), t.on("AllianceModificationStartedMessage", function(t) {
            e.mode = "alliance", t.canChangeName && t.canChangeEmblem && t.canChangeTag ? e.modification = "all" : t.canChangeName ? e.modification = "name" : e.modification = "emblem", d.openDialog(e.id)
        })
    }

    function o(e, t, i, n) {
        var o = e.length;
        return !(o < t || o > i) || (window.gui.openSimplePopup(l(n, t, i)), !1)
    }
    i(1081);
    var a = i(88)
        .addTooltip,
        r = i(56)
        .inherits,
        s = i(70),
        c = i(17)
        .getText,
        l = i(17)
        .processText,
        d = i(52),
        u = i(945),
        p = i(86)
        .DofusButton,
        h = i(1082),
        f = i(581),
        b = i(130),
        m = i(86),
        M = i(453),
        g = i(496),
        _ = i(437),
        A = i(112),
        O = i(12),
        v = i(72),
        y = 250,
        z = 110,
        w = 20;
    r(n, s), e.exports = n, n.prototype._setupUI = function() {
        if ("alliance" === this.mode ? (this.tagNameBox.show(), this.tagInput.show(), this.nameLabel.setText(c("ui.alliance.name") + c("ui.common.colon")), this.setTitle(c("ui.alliance.creation"))) : (this.tagNameBox.hide(), this.tagInput.hide(), this.nameLabel.setText(c("ui.social.guildName") + c("ui.common.colon")), this.setTitle(c("ui.social.guildCreation"))), !this.modification) return this._generateRandomEmblem(), this.nameInput.enable(), this.nameInput.setValue(""), this.tagInput.enable(), this.tagInput.setValue(""), void this.cover.hide();
        var e = window.gui.playerData[this.mode].current;
        switch ("alliance" === this.mode ? (this.nameInput.setValue(e.allianceName), this.tagInput.setValue(e.allianceTag), this._setEmblem(e.allianceEmblem)) : (this.nameInput.setValue(e.guildName), this._setEmblem(e.guildEmblem)), this.modification) {
            case "all":
                this.nameInput.enable(), this.tagInput.enable(), this.cover.hide();
                break;
            case "name":
                this.nameInput.enable(), this.tagInput.enable(), this.cover.show();
                break;
            case "emblem":
                this.nameInput.disable(), this.tagInput.disable(), this.cover.hide()
        }
    }, n.prototype._setEmblem = function(e) {
        this.emblem.setValue(e, !0), this.bgColor = e.backgroundColor, this.bgId = e.backgroundShape, this.symbolColor = e.symbolColor, this.symbolId = e.symbolShape;
        for (var t = null, i = 0; i < this.emblemSymbols.length; i += 1) {
            var n = this.emblemSymbols[i];
            if (n.id === this.symbolId) {
                t = n;
                break
            }
        }
        t ? this.selector.select(t.categoryId) : console.error("SocialGroupCreationWindow._setEmblem: emblemSymbol is null for symbolId", this.symbolId)
    }, n.prototype._generateSelectorOptions = function() {
        if (this.emblemSymbolCategories) {
            this.selector.clearContent(), this._isModeratorOrMore = window.gui.playerData.isModeratorOrMore();
            for (var e = 0; e < this.emblemSymbolCategories.length; e++) {
                var t = this.emblemSymbolCategories[e];
                (this._isModeratorOrMore || 13 !== t.id) && this.selector.addOption(t.nameId, t.id)
            }
            this.selector.select(1)
        }
    }, n.prototype._generateRandomEmblem = function() {
        this.bgColorPicker.generateRandomColor(), this.motifColorPicker.generateRandomColor();
        var e = Math.round(Math.random() * (this.emblemBackgrounds.length - 1)),
            t = Math.round(Math.random() * (this.emblemSymbols.length - (this._isModeratorOrMore ? 2 : 1)));
        this._setBackgroundShape(this.emblemBackgrounds[e].id), this._setSymbolShape(this.emblemSymbols[t].iconId)
    }, n.prototype._setBackgroundShape = function(e) {
        this.emblem.setValue({
            backgroundShape: e
        }), this.bgId = e
    }, n.prototype._setSymbolShape = function(e) {
        this.emblem.setValue({
            symbolShape: e
        }), this.symbolId = e
    }, n.prototype._displayEmblemBackgrounds = function(e) {
        function t() {
            i._setBackgroundShape(this.id)
        }
        for (var i = this, n = [], o = 0; o < e.length; o++) n.push("gfx/emblems/icons/back/" + e[o].id + ".png");
        O.preloadImages(n, function(n) {
            for (var o = 0; o < n.length; o++) {
                var a = i.backgroundScroller.content.appendChild(new m({
                    className: "icon"
                }, t));
                a.setStyle("backgroundImage", n[o] + ", " + i.slotIconImage), a.id = e[o].id
            }
            i.backgroundScroller.refresh()
        })
    }, n.prototype._displayEmblemSymbols = function(e) {
        function t() {
            i._setSymbolShape(this.id)
        }
        var i = this,
            n = [];
        i.notColorizable = [];
        for (var o = 0; o < e.length; o++) n.push("gfx/emblems/icons/up/" + e[o].iconId + ".png"), e[o].colorizable || i.notColorizable.push(e[o].id);
        O.preloadImages(n, function(n) {
            for (var o = 0; o < n.length; o++) {
                var a = i.symbolScroller.content.appendChild(new m({
                    className: ["icon", "white"]
                }, t));
                a.setStyle("backgroundImage", n[o] + ", " + i.slotIconImage), a.categoryId = e[o].categoryId, a.id = e[o].id
            }
            i.selector.select(1)
        })
    }, n.prototype._createDom = function() {
        function e(e) {
            i.bgColor !== e.hex.substr(1) && (i.bgColor = parseInt(e.hex.substr(1), 16), i.emblem.setValue({
                backgroundColor: e.rgb
            }))
        }

        function t(e) {
            i.symbolColor !== e.hex.substr(1) && (i.symbolColor = parseInt(e.hex.substr(1), 16), i.notColorizable.indexOf(i.symbolId) === -1 && i.emblem.setValue({
                symbolColor: e.rgb
            }))
        }
        var i = this,
            n = this.windowBody.createChild("div", {
                className: "guildNameBox"
            });
        this.nameLabel = n.createChild("div", {
            className: "label"
        });
        var r = n.createChild("div", {
            className: "info"
        });
        a(r, c("ui.social.nameRules"), {
            openOnTap: !0
        });
        var s = this.nameInput = this.windowBody.appendChild(new f({
                className: "socialInputBox",
                attr: {
                    type: "text",
                    maxlength: 30
                }
            })),
            l = this.tagNameBox = this.windowBody.createChild("div", {
                className: "tagNameBox"
            });
        l.createChild("div", {
            className: "label",
            text: c("ui.alliance.tagInfo") + c("ui.common.colon")
        }), r = l.createChild("div", {
            className: "info"
        }), a(r, c("ui.alliance.tagRules"), {
            openOnTap: !0
        });
        var d = this.tagInput = this.windowBody.appendChild(new f({
            className: "socialInputBox",
            attr: {
                type: "text",
                maxlength: 30
            }
        }));
        this.emblem = this.windowBody.appendChild(new _), this.windowBody.createChild("div", {
            className: "text",
            text: c("ui.social.createEmblem") + c("ui.common.colon")
        });
        var b = this.tabs = this.windowBody.appendChild(new g);
        this.cover = b.content.createChild("div", {
            className: "cover"
        });
        var m = new v("div", {
                className: "backgroundTab"
            }),
            O = new v("div", {
                className: "motifTab"
            });
        b.addTab(c("ui.social.emblemBack"), m, "background"), b.addTab(c("ui.social.emblemUp"), O, "motif"), b.openTab("background"), this.backgroundScroller = m.appendChild(new M({
            className: "iconScroller"
        })), this.bgColorPicker = m.appendChild(new h({
            tintWidth: y,
            tintHeight: z,
            lumWidth: w,
            showHexButton: !0
        })), this.bgColorPicker.on("colorChanged", e), this.bgColorPicker.on("newColor", e);
        var T = O.createChild("div", {
            className: "motifContainer"
        });
        this.selector = T.appendChild(new u), this.selector.on("change", function(e) {
            var t = i.symbolScroller.content.getChildren();
            e = parseInt(e, 10);
            for (var n = 0; n < t.length; n++) e !== t[n].categoryId ? t[n].hide() : t[n].show();
            i.symbolScroller.refresh()
        }), this.symbolScroller = T.appendChild(new M({
            className: "iconScroller"
        })), O.once("opened", function() {
            i.symbolScroller.refresh()
        }), this.motifColorPicker = O.appendChild(new h({
            tintWidth: y,
            tintHeight: z,
            lumWidth: w,
            showHexButton: !0
        })), this.motifColorPicker.on("colorChanged", t), this.motifColorPicker.on("newColor", t);
        var C = this.windowBody.createChild("div", {
                className: "buttonContainer"
            }),
            I = C.appendChild(new p(c("ui.common.validation")));
        I.on("tap", function() {
            var e = s.getValue(),
                t = {
                    symbolShape: i.symbolId,
                    symbolColor: i.symbolColor,
                    backgroundShape: i.bgId,
                    backgroundColor: i.bgColor
                };
            if ("alliance" === i.mode) {
                if (!o(e, A.MIN_ALLIANCENAME_LEN, A.MAX_ALLIANCENAME_LEN, c("ui.alliance.invalidLengthName"))) return;
                var n = d.getValue();
                if (!o(n, A.MIN_ALLIANCETAG_LEN, A.MAX_ALLIANCETAG_LEN, c("ui.alliance.invalidLengthTag"))) return;
                if (!i.modification) return window.dofus.sendMessage("AllianceCreationValidMessage", {
                    allianceName: e,
                    allianceTag: n,
                    allianceEmblem: t
                });
                switch (i.modification) {
                    case "all":
                        window.dofus.sendMessage("AllianceModificationValidMessage", {
                            allianceName: e,
                            allianceTag: n,
                            Alliancemblem: t
                        });
                        break;
                    case "emblem":
                        window.dofus.sendMessage("AllianceModificationEmblemValidMessage", {
                            Alliancemblem: t
                        });
                        break;
                    case "name":
                        window.dofus.sendMessage("AllianceModificationNameAndTagValidMessage", {
                            allianceName: e,
                            allianceTag: n
                        })
                }
            } else {
                if (!o(e, A.MIN_GUILDNAME_LEN, A.MAX_GUILDNAME_LEN, c("ui.alliance.invalidLengthName"))) return;
                if (!i.modification) return window.dofus.sendMessage("GuildCreationValidMessage", {
                    guildName: e,
                    guildEmblem: t
                });
                switch (i.modification) {
                    case "all":
                        window.dofus.sendMessage("GuildModificationValidMessage", {
                            guildName: e,
                            guildEmblem: t
                        });
                        break;
                    case "emblem":
                        window.dofus.sendMessage("GuildModificationEmblemValidMessage", {
                            guildEmblem: t
                        });
                        break;
                    case "name":
                        window.dofus.sendMessage("GuildModificationNameValidMessage", {
                            guildName: e
                        })
                }
            }
        })
    }, n.prototype._updateUISize = function() {
        var e = this.bgColorPicker.rootElement.clientHeight,
            t = this.bgColorPicker.rootElement.clientWidth;
        0 !== e && 0 !== t && (this.bgColorPicker.updateDimensions(t, e, w), this.motifColorPicker.updateDimensions(t, e, w))
    }
}
