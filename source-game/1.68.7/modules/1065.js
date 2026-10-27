function(e, t, i) {
    function n() {
        function e(e) {
            return t._ornamentIdToSelect = ~~e.ornamentId, t._titleIdToSelect = ~~e.titleId, t._titlesAndOrnamentsListRequested ? void t._selectOnceReady() : (t._displayLoading(!0), t._titlesAndOrnamentsListRequested = !0, void window.dofus.sendMessage("TitlesAndOrnamentsListRequestMessage"))
        }
        b.call(this, "div", {
            className: "OrnamentsWindow",
            name: "ornaments"
        });
        var t = this;
        this._titlesAndOrnaments = null, this._currentTitleId = null, this._currentOrnamentId = null, this._titlesAndOrnamentsListRequested = !1, this.once("open", function(i) {
            t._createDom(), t._displayLoading(!0), t._loadContent(function() {
                t._setupEvents(), t.on("opened", e), e(i)
            });
            var n = window.gui.playerData.characterBaseInformations.entityLook;
            t._updateCharacter(n)
        })
    }
    i(1066);
    var o = i(12),
        a = i(86)
        .DofusButton,
        r = i(689),
        s = i(594),
        c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(433),
        u = i(1052)
        .SingleSelectionList,
        p = i(130),
        h = i(962),
        f = i(60),
        b = i(72);
    l(n, b), e.exports = n, n.prototype._selectOnceReady = function() {
        this._ornamentIdToSelect ? (this.tabs.openTab("ornaments"), this.ornamentList.selectItem(this._ornamentIdToSelect)) : this._titleIdToSelect ? (this.tabs.openTab("titles"), this.titleList.selectItem(this._titleIdToSelect)) : this._selectActiveTitleAndOrnament()
    }, n.prototype._setupEvents = function() {
        var e = this;
        window.gui.on("disconnect", function() {
            e._titlesAndOrnamentsListRequested = !1, e.tabs && e.tabs.openFirstTab()
        }), window.gui.on("TitlesAndOrnamentsListMessage", function(t) {
            e._titlesAndOrnaments = t, e._titlesAndOrnaments.titles.push(0), e._titlesAndOrnaments.ornaments.push(0), e._updateOrnamentList(), e._updateTitleList(), e._displayLoading(!1);
            var i = f.getValue("dofus_titleOrnaments_display_all", !1);
            e.showAllCheckbox.toggleActivation(i), e._selectOnceReady()
        }), window.gui.on("OrnamentSelectedMessage", function(t) {
            e._titlesAndOrnaments && (e._titlesAndOrnaments.activeOrnament = t.ornamentId)
        }), window.gui.on("TitleSelectedMessage", function(t) {
            e._titlesAndOrnaments && (e._titlesAndOrnaments.activeTitle = t.titleId)
        }), window.gui.on("OrnamentSelectErrorMessage", function() {}), window.gui.on("TitleSelectErrorMessage", function() {}), window.gui.on("TitleGainedMessage", function(t) {
            var i = t.titleId;
            e._titlesAndOrnaments.titles.push(i), e._updateTitleList(), e._displayObtainedTitles()
        }), window.gui.on("TitleLostMessage", function(t) {
            var i = t.titleId,
                n = e._titlesAndOrnaments.titles.indexOf(i);
            n !== -1 && e._titlesAndOrnaments.titles.splice(n, 1), e._updateTitleList(), e._displayObtainedTitles()
        }), window.gui.on("OrnamentGainedMessage", function(t) {
            var i = t.ornamentId;
            e._titlesAndOrnaments.ornaments.push(i), e._updateOrnamentList(), e._displayObtainedOrnaments()
        }), window.gui.playerData.on("lookUpdate", function(t) {
            e.character && e._updateCharacter(t)
        })
    }, n.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "col1"
            });
        this.col2 = this.createChild("div", {
            className: "col2"
        });
        var i = this.tabs = t.appendChild(new h);
        this.titleList = t.appendChild(new u({
            className: "titleList"
        }, {
            disableSelectionToggle: !0
        })), this.titleList.on("selected", function(t) {
            e._setCharacterTitle(t.data.id), this.showElement(t)
        }), this.ornamentList = t.appendChild(new u({
            className: "ornamentList"
        }, {
            disableSelectionToggle: !0
        })), this.ornamentList.on("selected", function(t) {
            e._setCharacterOrnament(t.data.id), this.showElement(t)
        });
        var n = i.addTab(c("ui.ornament.titles"), this.titleList, "titles"),
            o = i.getTabTarget(n);
        o.on("opened", function() {
            e.titleList.refresh()
        }), n = i.addTab(c("ui.ornament.ornaments"), this.ornamentList, "ornaments");
        var l = i.getTabTarget(n);
        l.on("opened", function() {
            e.ornamentList.refresh()
        }), i.openFirstTab(), this.showAllCheckbox = t.appendChild(new s(c("ui.ornament.displayAll"))), this.showAllCheckbox.on("change", function(t) {
            f.setValue("dofus_titleOrnaments_display_all", t), e._displayObtainedTitlesOrnaments()
        }), this.container = this.col2.createChild("div", {
            className: "container"
        }), this.character = this.container.appendChild(new r({
            scale: "cover",
            verticalAlign: "bottom"
        })), this.ornamentContainer = this.container.createChild("div", {
            className: "ornamentContainer"
        }), this.ornament = this.ornamentContainer.appendChild(new d), this.ornament.on("sizeChanged", function() {
            e.ornament.setStyle("marginTop", "0px");
            var t = e.ornamentContainer.rootElement.offsetHeight - this.getHeight();
            t < 0 && (t = 0), e.ornament.setStyle("marginTop", t + "px"), e.ornament.setStyle("marginLeft", "0px");
            var i = 0,
                n = "50%";
            e.ornament.getCanvasOffsetWidth() > e.ornamentContainer.rootElement.offsetWidth && (i = .5 * -(e.ornament.getCanvasOffsetWidth() - e.ornamentContainer.rootElement.offsetWidth), n = Math.round(e.ornament.getCanvasOffsetWidth() / 2) + "px"), e.ornament.alignmentWingsWrapper.setStyle("left", n), e.ornament.alignmentTailWrapper.setStyle("left", n), e.ornament.setStyle("marginLeft", i + "px")
        }), this.warningWings = this.col2.createChild("div", {
            className: "warningWings",
            text: c("ui.ornament.warningWings"),
            hidden: !0
        });
        var p = this.col2.createChild("div", {
                className: "buttons"
            }),
            b = p.appendChild(new a(c("ui.common.reset")));
        this.saveButton = p.appendChild(new a(c("ui.common.save"))), this.saveButton.disable(), b.on("tap", function() {
            e._selectActiveTitleAndOrnament(), e.saveButton.disable()
        }), this.saveButton.on("tap", function() {
            var t = e._getActiveTitleId(),
                i = e._getActiveOrnamentId();
            t !== e._currentTitleId && window.dofus.sendMessage("TitleSelectRequestMessage", {
                titleId: e._currentTitleId
            }), i !== e._currentOrnamentId && window.dofus.sendMessage("OrnamentSelectRequestMessage", {
                ornamentId: e._currentOrnamentId
            }), this.disable()
        })
    }, n.prototype._addTitleElement = function(e) {
        var t = this._getTitleText(e),
            i = new b("div", {
                className: "row",
                text: t || c("ui.common.none")
            });
        this.titleList.addItem({
            id: e.id,
            element: i,
            data: e
        }, {
            noRefresh: !0
        })
    }, n.prototype._getTitleText = function(e) {
        var t = window.gui.playerData.characterBaseInformations.sex;
        return t ? e.femaleText : e.maleText
    }, n.prototype._addOrnamentElement = function(e, t) {
        var i = new b("div", {
                className: "row"
            }),
            n = i.createChild("div", {
                className: "icon"
            });
        n.setStyle("backgroundImage", t), i.createChild("div", {
            text: e.nameId || c("ui.common.none"),
            className: "name"
        }), this.ornamentList.addItem({
            id: e.id,
            element: i,
            data: {
                id: e.id,
                assetId: e.assetId,
                visible: e.visible
            }
        }, {
            noRefresh: !0
        })
    }, n.prototype._loadContent = function(e) {
        var t = this;
        p.getAllDataTable(["Titles", "Ornaments"], function(i, n) {
            if (i) return console.error("Titles and Ornaments: failed getting data", i), e(i);
            for (var a = n.Titles, r = n.Ornaments, s = ["ui/slot.png", "gfx/illusUi/tx_bgTitleOrnament.png"], c = {}, l = 0; l < r.length; l++) {
                var d = r[l].iconId;
                void 0 === c[d] && (s.push("gfx/ornaments/" + d + ".png"), c[d] = s.length - 1)
            }
            o.preloadImages(s, function(i) {
                t.container.setStyle("backgroundImage", i[1]), t._addTitleElement({
                    id: 0
                }), t._addOrnamentElement({
                    id: 0
                }, i[0]);
                var n, o;
                for (n = 0; n < a.length; n += 1) o = a[n], t._addTitleElement({
                    id: o.id,
                    maleText: o.nameMaleId,
                    femaleText: o.nameFemaleId,
                    visible: o.visible
                });
                for (n = 0; n < r.length; n++) o = r[n], t._addOrnamentElement(o, i[c[o.iconId]]);
                e()
            })
        })
    }, n.prototype._displayLoading = function(e) {
        this.titleList.toggleClassName("spinner", e), this.ornamentList.toggleClassName("spinner", e), this.titleList.getContentElement()
            .toggleDisplay(!e), this.ornamentList.getContentElement()
            .toggleDisplay(!e)
    }, n.prototype._getActiveOrnamentId = function() {
        return this._titlesAndOrnaments && this._titlesAndOrnaments.activeOrnament
    }, n.prototype._getActiveTitleId = function() {
        return this._titlesAndOrnaments && this._titlesAndOrnaments.activeTitle
    }, n.prototype._getOwnedOrnaments = function() {
        return this._titlesAndOrnaments && this._titlesAndOrnaments.ornaments
    }, n.prototype._getOwnedTitles = function() {
        return this._titlesAndOrnaments && this._titlesAndOrnaments.titles
    }, n.prototype._updateCharacter = function(e) {
        console.log("Setting character's look", e);
        this.character.setLook(e, {
            riderOnly: !0,
            direction: 2,
            boneType: "characters/",
            skinType: "characters/"
        })
    }, n.prototype._selectActiveTitleAndOrnament = function() {
        if (this._titlesAndOrnaments) {
            var e = this._getActiveTitleId(),
                t = this._getActiveOrnamentId();
            this._currentTitleId = e, this._currentOrnamentId = t, this.titleList.deselectAll(), this.ornamentList.deselectAll(), this.titleList.selectItem(e, {
                noEvent: !0,
                noSound: !0
            }), this.ornamentList.selectItem(t, {
                noEvent: !0,
                noSound: !0
            }), this._setCharacterTitleAndOrnament(e, t)
        }
    }, n.prototype._displayObtainedTitles = function() {
        for (var e = f.getValue("dofus_titleOrnaments_display_all", !1), t = this.titleList.getItems(), i = 0, n = 0; n < t.length; n += 1) {
            var o = t[n],
                a = e && o.data.visible;
            o.toggleDisplay(a || o.data.isAvailable), o.isVisible() && (o.toggleClassName("odd", i % 2 === 0), i += 1)
        }
        if (this.titleList.refresh(), null !== this._currentTitleId) {
            var r = this.titleList.getItem(this._currentTitleId);
            r.data.isAvailable || this.titleList.selectItem(this._getActiveTitleId(), {
                noSound: !0
            })
        }
    }, n.prototype._displayObtainedOrnaments = function() {
        for (var e = f.getValue("dofus_titleOrnaments_display_all", !1), t = this.ornamentList.getItems(), i = 0, n = 0; n < t.length; n += 1) {
            var o = t[n],
                a = e && o.data.visible;
            o.toggleDisplay(a || o.data.isAvailable), o.isVisible() && (o.toggleClassName("odd", i % 2 === 0), i += 1)
        }
        if (this.ornamentList.refresh(), null !== this._currentOrnamentId) {
            var r = this.ornamentList.getItem(this._currentOrnamentId);
            r.data.isAvailable || this.ornamentList.selectItem(this._getActiveOrnamentId(), {
                noSound: !0
            })
        }
    }, n.prototype._displayObtainedTitlesOrnaments = function() {
        this._displayObtainedTitles(), this._displayObtainedOrnaments()
    }, n.prototype._updateTitleList = function() {
        for (var e = this._getOwnedTitles(), t = this.titleList.getItems(), i = 0; i < t.length; i += 1) {
            var n = t[i],
                o = n.data.id,
                a = this._getTitleText(n.data);
            if (a) {
                var r = n.getChildren();
                r[0].setText(a)
            }
            var s = e.indexOf(o) >= 0;
            n.data.isAvailable = s, n.toggleClassName("unavailable", !s)
        }
    }, n.prototype._updateOrnamentList = function() {
        for (var e = this._getOwnedOrnaments(), t = this.ornamentList.getItems(), i = 0; i < t.length; i += 1) {
            var n = t[i],
                o = n.data.id,
                a = e.indexOf(o) >= 0;
            n.data.isAvailable = a, n.toggleClassName("unavailable", !a)
        }
    }, n.prototype._isSavable = function(e, t) {
        var i = this._getOwnedTitles(),
            n = this._getOwnedOrnaments(),
            o = this._getActiveTitleId(),
            a = this._getActiveOrnamentId();
        return (o !== e || a !== t) && i.indexOf(e) >= 0 && n.indexOf(t) >= 0
    }, n.prototype._setCharacterTitle = function(e) {
        var t = this.titleList.getItem(e);
        this._currentTitleId = e;
        var i = this._isSavable(this._currentTitleId, this._currentOrnamentId);
        this.saveButton.setEnable(i), this.ornament.changeAttributes({
            title: this._getTitleText(t.data) || ""
        }), this.ornament.display()
    }, n.prototype._setCharacterOrnament = function(e) {
        var t = this.ornamentList.getItem(e);
        this._currentOrnamentId = e;
        var i = this._isSavable(this._currentTitleId, this._currentOrnamentId);
        this.saveButton.setEnable(i), this.ornament.changeAttributes({
            ornamentAssetId: t.data.assetId
        }), this.ornament.display()
    }, n.prototype._setCharacterTitleAndOrnament = function(e, t) {
        var i, n = window.gui.playerData,
            o = this.titleList.getItem(e),
            a = this.ornamentList.getItem(t);
        o && (i = this._getTitleText(o.data)), this.ornament.setAttributes({
            charName: window.gui.playerData.characterBaseInformations.name,
            title: i,
            ornamentAssetId: a && a.data && a.data.assetId,
            guild: n.guild && n.guild.current,
            alliance: n.alliance && n.alliance.current,
            alignmentInfos: window.gui.playerData.alignment.alignmentInfos
        }), this.ornament.display(), 0 !== window.gui.playerData.alignment.alignmentInfos.alignmentGrade ? this.warningWings.show() : this.warningWings.hide()
    }
}
