function(e, t, i) {
    function n() {
        this._panels = null, this._currentPanelType = null, this._selectedSlot = null, this._panelLoadingCb = {}, this._currentCharacterId = null, this.isOrganizing = !1, this.isShortcutLoaded = !1, M.call(this, {
            backDrawerSize: d.SHORTCUT_GAUGE_SIZE,
            swipeBlockedInFight: !0
        }), this._createDom(), this._setupEvents(), this.openPanel("item")
    }

    function o(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enableContextMenu(t)
        }
    }

    function a(e, t) {
        var i = e.getShortcutHash(),
            n = t[i];
        if (n) {
            if (n.indexOf(e) !== -1) return
        } else n = t[i] = [];
        e.exclusiveSelector = T("shortcutSlots"), e.exclusiveSelector.register(e), n.push(e)
    }

    function r(e, t) {
        var i = e.getShortcutHash(),
            n = t[i];
        if (n) {
            var o = n.indexOf(e);
            o !== -1 && n.splice(o, 1)
        }
        e.exclusiveSelector && (e.exclusiveSelector.unregister(e), delete e.exclusiveSelector)
    }

    function s(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.exclusiveSelector && (i.exclusiveSelector.unregister(i), delete i.exclusiveSelector)
        }
    }
    i(865);
    var c = i(866),
        l = i(86),
        d = i(13),
        u = i(54)
        .dimensions,
        p = i(16),
        h = i(418),
        f = i(55),
        b = i(17)
        .getText,
        m = i(56)
        .inherits,
        M = i(777),
        g = i(867),
        _ = i(496),
        A = i(732),
        O = i(88),
        v = i(588),
        y = i(22),
        z = i(72),
        w = i(105),
        T = i(854)
        .getExclusiveSelectorByGroup,
        Shortcut = i(869),
        I = i(870),
        S = i(882),
        E = i(129),
        L = i(103),
        N = {};
    N[c.GENERAL_SHORTCUT_BAR] = "item", N[c.SPELL_SHORTCUT_BAR] = "spell";
    var R = {
            item: c.GENERAL_SHORTCUT_BAR,
            spell: c.SPELL_SHORTCUT_BAR
        },
        q = d.SHORTCUT_ICON_SIZE,
        x = 30,
        B = 3,
        D = d.WEAPON_SPELL_ID;
    m(n, M), e.exports = n, n.prototype._createDom = function() {
        function e(e) {
            t._pagination.setCurrent(e)
        }
        var t = this;
        this.addClassNames("ShortcutBar"), this._panelBox = this.content.createChild("div", {
            className: "panelBox"
        }), this._panels = {
            spell: this._panelBox.appendChild(this._createPanel("spell")),
            item: this._panelBox.appendChild(this._createPanel("item"))
        }, this._buttonBox = this.content.createChild("div", {
            className: "buttonBox"
        }), this.spellBtn = this._buttonBox.appendChild(new l({
            className: "spellBtn",
            tooltip: b("ui.charcrea.spells"),
            sound: "BANNER_SPELL_TAB"
        }, function() {
            t.openPanel("spell")
        })), this.itemBtn = this._buttonBox.appendChild(new l({
            className: "itemBtn",
            tooltip: b("ui.common.objects"),
            sound: "BANNER_SPELL_TAB"
        }, function() {
            t.openPanel("item")
        })), this._pagination = this._buttonBox.appendChild(new g({
            disableInput: !0,
            btnAlwaysEnabled: !0,
            soundPrev: "SCROLL_DOWN",
            soundNext: "SCROLL_UP"
        })), this._pagination.setPageCount(B), this._pagination.setCurrent(0), this._pagination.on("next", function() {
            t._panels[t._currentPanelType].openTab((this.current + 1) % B)
        }), this._pagination.on("previous", function() {
            t._panels[t._currentPanelType].openTab(p.mod(this.current - 1, B))
        }), this._panels.spell.on("openTab", e), this._panels.item.on("openTab", e), this._organizeBtn = this._buttonBox.appendChild(new l({
            className: "lockBtn",
            scaleOnPress: !0
        }, function() {
            t._setOrganizeMode(!t.isOrganizing)
        })), this._trashZone = this.createChild("div", {
            className: "trashZone"
        }), this._trashZone.createChild("div", {
            className: "trashBin",
            text: b("ui.common.remove")
        }), h.setDroppable(this._trashZone, ["shortcutBar"], {
            isDropAllowed: function() {
                return t.isOrganizing
            }
        }), this._trashZone.on("drop", function(e) {
            t._removeShortcutFromSlotRequestWith1Animation(e)
        }), this.on("close", function() {
            this.isOrganizing && this._setOrganizeMode(!1)
        })
    }, n.prototype._createPanel = function(e) {
        var t = new _({
            noHeader: !0
        });
        t.slotList = new Array(x * B), t.slotMap = {};
        for (var i = "spell" === e ? S : I, n = 0; n < B; n++) {
            var o = new z("div", {
                className: "page"
            });
            t.addTab("", o, n);
            for (var a = 0; a < x; a++) {
                var r = n * x + a,
                    s = new i(this, r);
                t.slotList[r] = s, o.appendChild(s), this._positionSlot(s)
            }
        }
        return t.openTab(0), t
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui,
            i = t.playerData.characters,
            n = t.playerData.inventory,
            o = window.gui.scenarioManager;
        t.on("disconnect", function() {
            e.close(), e.delClassNames("dragging"), e._selectedSlot = null, e._emptyPanel("spell"), e._emptyPanel("item"), e._currentCharacterId = null, e.isShortcutLoaded = !1, w.removeAllListeners("ShortcutBarAddErrorMessage"), w.removeAllListeners("ShortcutBarRemoveErrorMessage"), w.removeAllListeners("ShortcutBarSwapErrorMessage")
        }), 
        w.on("ShortcutBarContentMessage", function(t) {
            if (0 !== t.characterId || !window.gui.playerData.isSpectator) {
                for (var n = N[t.barType], o = [], a = 0; a < t.shortcuts.length; a++) o.push(new Shortcut(t.shortcuts[a]));
                "spell" === n && i.getControlledCharacter()
                    .setSpellShortcuts(o), e._setPanelContentRequest(n, o), e.isShortcutLoaded = !0
            }
        }), 
        w.on("ShortcutBarRefreshMessage", function(t) {
            if (e.isShortcutLoaded) {
                var n = N[t.barType],
                    o = new Shortcut(t.shortcut);
                e._isSlotIndexValid(o.slotIndex) && ("spell" === n && i.getControlledCharacter()
                    .updateSpellShortcut(o), e._setShortcutClient(o))
            }
        }), w.on("ShortcutBarRemovedMessage", function(t) {
            var i = N[t.barType];
            e._removeShortcutClient(i, t.slot)
        }), i.on("switchControlledCharacter", function() {
            var t = i.getControlledCharacter();
            t.spellShortcuts.length > 0 ? e._setPanelContentRequest("spell", t.spellShortcuts) : e._emptyPanel("spell")
        }), i.on("weaponChanged", function() {
            e._currentCharacterId === this.mainCharacter.spellData.characterId && e._updateWeaponSpell()
        }), n.on("itemsDeleted", this._disableItems.bind(this)), n.on("itemDeleted", this._disableItem.bind(this)), n.on("itemsQuantity", this._updateItemsQuantity.bind(this)), n.on("itemQuantity", this._updateItemQuantity.bind(this)), n.on("itemModified", this._updateModifiedItem.bind(this)), n.on("presetBlock", this._blockPresets.bind(this)), t.fightManager.on("fightEnterPreparation", this._fightPreparation.bind(this)), t.fightManager.on("fightEnterBattle", this._fightEntered.bind(this)), t.fightManager.on("fightEnd", this._fightExited.bind(this)), o.on("stepChanged", function() {
            e.setAvailability(!o.isBehaviourEnabled(E.DISABLE_SHORTCUT_BAR)), o.isBehaviourEnabled(E.DISABLE_ORGANIZE_BTN) ? e._organizeBtn.disable() : e._organizeBtn.enable()
        }), w.on("CurrentMapMessage", function() {
            o.isBehaviourEnabled(E.DISABLE_SHORTCUT_BAR) || e.setAvailability(!1)
        }), window.isoEngine.on("mapLoaded", function() {
            o.isBehaviourEnabled(E.DISABLE_SHORTCUT_BAR) || e.setAvailability(!0)
        }), t.playerData.characters.on("spellList", function() {
            e.updateSpellsAvailability()
        }), t.fightManager.on("UpdatePreFightersList", this.updateSpellsAvailability.bind(this)), t.fightManager.on("updateSpellsAvailability", this.updateSpellsAvailability.bind(this)), t.on("GameFightTurnStartMessage", this.updateSpellsAvailability.bind(this)), t.on("GameFightShowFighterMessage", this.updateSpellsAvailability.bind(this)), L.on("gameContextChanged", this.updateSpellsAvailability.bind(this));
        var a = T("shortcutSlots");
        a.on("selectionChanged", function(t) {
            t instanceof S || t instanceof I ? e._selectedSlot = t : null === t && (e._selectedSlot = null)
        })
    }, n.prototype._isSlotIndexValid = function(e) {
        return e < x * B
    }, n.prototype._isShortcutValid = function(e) {
        return e instanceof Shortcut && this._isSlotIndexValid(e.slotIndex)
    }, n.prototype.getSpellSlotByIndex = function(e) {
        var t = this._panels.spell.slotList;
        return t[e]
    }, n.prototype.getSpellSlotBySpellId = function(e) {
        for (var t = this._panels.spell.slotList, i = 0; i < t.length; i++) {
            var n = t[i];
            if (n.data && n.data.id === e) return n
        }
        return null
    }, n.prototype.forceDisableSpellSlots = function(e) {
        for (var t = this._panels.spell.slotList, i = 0; i < t.length; i++) {
            var n = t[i];
            n.forceDisable(e)
        }
    }, n.prototype._updateItemQuantity = function(e, t) {
        var i = this._panels.item.slotMap["item" + e];
        if (i)
            for (var n = 0; n < i.length; n++) i[n].setQuantity(t)
    }, n.prototype._updateItemsQuantity = function(e) {
        for (var t in e) this._updateItemQuantity(t, e[t])
    }, n.prototype._disableItem = function(e) {
        var t = this._panels.item.slotMap["item" + e];
        if (t)
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.setDisable(!0)
            }
    }, n.prototype._disableItems = function(e) {
        for (var t = 0; t < e.length; t++) this._disableItem(e[t])
    }, n.prototype._blockPresets = function(e) {
        for (var t = this._panels.item.slotList, i = 0; i < t.length; i++) {
            var n = t[i];
            n.shortcut && n.shortcut.isPreset() && n.setDisable(e)
        }
    }, n.prototype._updateModifiedItem = function(e) {
        var t = this._panels.item.slotMap["item" + e.objectUID];
        if (t)
            for (var i = 0; i < t.length; i++) t[i].refreshShortcut()
    }, n.prototype._updateSpellSlotAvailability = function(e) {
        e.updateAvaibility(), "spell" === e.type && (e.enabledBehaviour || this._unSelectSlot(e))
    }, n.prototype.updateSpellAvailability = function(e) {
        if (this._currentCharacterId === window.gui.playerData.characters.controlledCharacterId) {
            var t = this._panels.spell.slotMap["spell" + e];
            if (t)
                for (var i = 0; i < t.length; i++) this._updateSpellSlotAvailability(t[i])
        }
    }, n.prototype.updateSpellsAvailability = function() {
        if (this._currentCharacterId === window.gui.playerData.characters.controlledCharacterId)
            for (var e = this._panels.spell.slotList, t = 0; t < e.length; t++) {
                var i = e[t];
                i.isEmpty() || this._updateSpellSlotAvailability(i)
            }
    }, n.prototype.setAvailability = function(e) {
        this.overlay ? this.overlay.toggleDisplay(!e) : this.overlay = this.content.createChild("div", {
            className: "overlay",
            hidden: e
        }), this.lockDrawer(!e)
    }, n.prototype.computeBestSize = function(e, t) {
        var i;
        return "narrow" === t ? (i = d.ICONBAR_TAB_WIDTH + d.ICONBAR_CORNER_WIDTH, this._iconsVisiblePerLine = ~~((e - i) / q), this._iconsVisiblePerLine * q + i) : (i = d.ICONBAR_TAB_HEIGHT, this._iconsVisiblePerColumn = ~~((e - i) / q), this._iconsVisiblePerColumn * q + i)
    }, n.prototype._setPlaceHolder = function(e, t) {
        for (var i = this._panels[e], n = i.slotList, o = 0, a = t.length; o < a; o += 1) {
            var r = t[o];
            this._isSlotIndexValid(r.slotIndex) && (n[r.slotIndex].isEmpty() ? n[r.slotIndex].setImage(A.placeHolder) : console.error(new Error("ShortcutBar._setPlaceHolder: cannot change image of non empty slot")))
        }
    }, n.prototype._resize = function() {
        var e, t, i = this._panels.spell,
            n = this._panels.item;
        window.gui.ipadRatio ? (this.setStyles({
            top: "",
            right: "",
            left: u.posShortcutBar + "px",
            bottom: "0px",
            width: u.shortcutBarSize + "px",
            height: u.bottomBarHeight + "px"
        }), e = u.shortcutBarSize - 75, this._columns = Math.floor(e / q), this._lines = Math.ceil(x / this._columns), t = this._lines * q + 8, this.setOpeningSide("top"), i.setSwipeDirection("horizontal"), n.setSwipeDirection("horizontal"), this._trashZone.setStyle("width", e + "px"), this._buttonBox.appendChild(this._organizeBtn), this._buttonBox.appendChild(this._pagination), this._pagination.setDirection("horizontal")) : (this.setStyles({
            bottom: "",
            left: "",
            right: "0px",
            top: u.posShortcutBar + "px",
            width: u.sideBarWidth + "px",
            height: u.shortcutBarSize + "px"
        }), t = u.shortcutBarSize - 29, this._lines = Math.floor(t / q), this._columns = Math.ceil(x / this._lines), e = Math.max(this._columns, 3) * q + 13 + 30, this.setOpeningSide("left"), i.setSwipeDirection("vertical"), n.setSwipeDirection("vertical"), this._trashZone.setStyle("height", t + "px"), this._panelBox.appendChild(this._organizeBtn), this._panelBox.appendChild(this._pagination), this._pagination.setDirection("vertical")), this._panelBox.setStyles({
            width: e + "px",
            height: t + "px"
        });
        for (var o = i.slotList, a = n.slotList, r = 0; r < o.length; r++) this._positionSlot(o[r]), this._positionSlot(a[r])
    }, n.prototype._positionSlot = function(e) {
        var t, i, n, o, a = e.slotIndex,
            r = a % x;
        window.gui.ipadRatio ? (t = r % this._columns, i = Math.floor(r / this._columns), n = t * q, o = i * q) : (t = r % this._lines, i = Math.floor(r / this._lines), n = i * q, o = t * q), e.x = n, e.y = o, e.setStyles({
            left: n + "px",
            top: o + "px",
            webkitTransform: ""
        })
    }, n.prototype._enableSlotContextMenus = function(e) {
        o(this._panels.item.slotList, e), o(this._panels.spell.slotList, e)
    }, n.prototype.showTrash = function() {
        this.addClassNames("dragging")
    }, n.prototype.hideTrash = function() {
        this.delClassNames("dragging")
    }, n.prototype._setShortcutRequest = function(e) {
        if (!this._isShortcutValid(e)) return void console.error(new Error("ShortcutBar._setShortcutRequest: invalid shortcut"));
        var t = this,
            i = e.getShortcutBarPanelType(),
            n = this._panels[i],
            o = e.slotIndex,
            a = n.slotList[o],
            r = a.shortcut;
        this._setShortcutClient(e), w.removeAllListeners("ShortcutBarAddErrorMessage"), w.once("ShortcutBarAddErrorMessage", function() {
            r ? t._setShortcutClient(r) : t._removeShortcutClient(i, o)
        }), window.dofus.sendMessage("ShortcutBarAddRequestMessage", {
            barType: R[a.type],
            shortcut: e.serialize()
        })
    }, n.prototype._setShortcutClient = function(e) {
        if (!this._isShortcutValid(e)) return console.error(new Error("ShortcutBar._setShortcutClient: invalid shortcut"));
        var t = e.getShortcutBarPanelType(),
            i = this._panels[t],
            n = i.slotList[e.slotIndex];
        n.setStyles({
            webkitTransform: "scale(1)",
            opacity: 1
        }), n.getShortcutHash() !== e.getHash() && (this._selectedSlot === n && this._unSelectSlot(n), r(n, i.slotMap), n.setShortcut(e), a(n, i.slotMap), O.enableTooltip(n, !n.isEmpty() && !this.isOrganizing), this.isOrganizing ? n.enableDrag() : n.disableDrag())
    }, n.prototype._removeShortcutFromSlotRequestWith1Animation = function(e) {
        this._removeShortcutRequest(e.type, e.slotIndex), e.setStyles({
            webkitTransform: "scale(0)",
            opacity: 1
        }), p.forceReflow(e), y.tween(e, {
            webkitTransform: "scale(1)"
        }, {
            time: 100,
            easing: "ease-out"
        })
    }, n.prototype._removeShortcutFromSlotRequestWith2Animations = function(e) {
        var t = this;
        p.forceReflow(e), y.tween(e, {
            opacity: 0
        }, {
            time: 100,
            easing: "ease-out"
        }, function() {
            t._removeShortcutFromSlotRequestWith1Animation(e)
        })
    }, n.prototype._removeShortcutRequest = function(e, t) {
        var i = this,
            n = this._panels[e],
            o = n.slotList[t],
            a = o.shortcut,
            r = R[o.type];
        this._removeShortcutClient(e, t), w.removeAllListeners("ShortcutBarRemoveErrorMessage"), w.once("ShortcutBarRemoveErrorMessage", function() {
            i._setShortcutClient(a)
        }), window.dofus.sendMessage("ShortcutBarRemoveRequestMessage", {
            barType: r,
            slot: t
        })
    }, n.prototype._removeShortcutClient = function(e, t) {
        if (this._isSlotIndexValid(t)) {
            var i = this._panels[e],
                n = i.slotList[t];
            if (r(n, i.slotMap), this._selectedSlot === n && this._unSelectSlot(n), n.unset(), n.disableDrag(), "spell" === e) {
                var o = window.gui.playerData.characters.getControlledCharacter(),
                    a = window.gui.playerData.characters.isMainCharacterControlled();
                o && a && o.removeFromSpellShortcut(n)
            }
        }
    }, n.prototype._enableDragOnSpell = function() {
        this._enableSlotContextMenus(!1), this._setSpellsSlotsDraggability(!0)
    }, n.prototype._fightPreparation = function() {
        this.openPanel("item")
    }, n.prototype._fightEntered = function() {
        this.openPanel("spell"), this._enableDragOnSpell()
    }, n.prototype._fightExited = function() {
        this.openPanel("item"), this._enableSlotContextMenus(!0), this._setSpellsSlotsDraggability(this.isOrganizing), this._unSelectSlot(this._selectedSlot)
    }, n.prototype.openPanel = function(e, t) {
        var i = "spell" === e ? "item" : "spell";
        this._currentPanelType = e;
        var n = this._panels[e];
        n.show(), this._panels[i].hide(), this.replaceClassNames([i], [e]), this._pagination.setCurrent(n.currentTab.id), Number.isInteger(t) && this._panels[this._currentPanelType].openTab(t % B)
    }, n.prototype._emptyPanel = function(e) {
        var t = this._panels[e],
            i = t.slotList;
        s(i), t.slotMap = {};
        for (var n = 0; n < i.length; n++) {
            var o = i[n];
            o.isEmpty() ? o.image && o.setImage() : o.unset()
        }
        this._cancelPanelLoadingCb(e)
    }, n.prototype._setPanelContent = function(e, t) {
        var i = this,
            n = window.gui.playerData.characters.getControlledCharacter();
        this._cancelPanelLoadingCb(e);
        var o = i._panels[e],
            c = o.slotList;
        s(c);
        var l, d, u = o.slotMap = {},
            p = new Array(c.length);
        for (l = 0; l < t.length; l++) d = t[l], this._isSlotIndexValid(d.slotIndex) && (p[d.slotIndex] = d);
        for (l = 0; l < c.length; l++) {
            d = p[l];
            var h = c[l];
            d ? (h.isEmpty() || h.getShortcutHash() !== d.getHash()) && (h.setShortcut(d), a(h, u)) : h.isEmpty() || (h.unset(), r(h, u))
        }
        "spell" === e && (this._currentCharacterId = n.spellData.characterId, this.updateSpellsAvailability(), window.gui.fightManager.isInBattle() && this._enableDragOnSpell())
    }, n.prototype._setPanelContentRequest = function(e, t) {
        var i, n = window.gui.playerData.characters.getControlledCharacter();
        if (this._emptyPanel(e), "spell" === e ? (this._currentCharacterId = null, i = n.spellData) : i = window.gui.playerData.inventory, i.isLoaded) this._setPanelContent(e, t);
        else {
            this._setPlaceHolder(e, t);
            var o = this._setPanelContent.bind(this, e, t);
            this._panelLoadingCb[e] = o, i.once("loaded", o)
        }
    }, n.prototype._cancelPanelLoadingCb = function(e) {
        if (this._panelLoadingCb[e]) {
            var t = window.gui.playerData.characters.getControlledCharacter(),
                i = "spell" === e ? t.spellData : window.gui.playerData.inventory;
            i.removeListener("loaded", this._panelLoadingCb[e]), delete this._panelLoadingCb[e]
        }
    }, n.prototype._setItemsSlotsDraggability = function(e) {
        for (var t = this._panels.item.slotList, i = 0; i < t.length; i++) t[i].setDraggability(e && !t[i].isEmpty())
    }, n.prototype._setSpellsSlotsDraggability = function(e) {
        for (var t = this._panels.spell.slotList, i = 0; i < t.length; i++) t[i].setDraggability(e && !t[i].isEmpty())
    }, n.prototype._selectSlot = function(e, t) {
        if (!this.isOrganizing) {
            if (t && window.isoEngine.clearSpellDisplay(), this._selectedSlot === e) return this._unSelectSlot(e);
            if (this._selectedSlot && this._selectedSlot.unselect(), e.isEmpty()) return void(this._selectedSlot = null);
            this._selectedSlot = e, e.select(), window.gui.fightManager.isInBattle() && this._close(!0)
        }
    }, n.prototype._unSelectSlot = function(e) {
        e && this._selectedSlot === e && (this._selectedSlot.unselect(), this._selectedSlot = null)
    }, n.prototype.deselectCurrentSlot = function() {
        this._unSelectSlot(this._selectedSlot)
    }, n.prototype.getIdOfSelectedSpellIfAny = function() {
        var e = this._selectedSlot;
        return !e || "spell" !== e.type || e.isEmpty() ? null : e.shortcut.spellId
    }, n.prototype._updateWeaponSpell = function() {
        var e = window.gui.playerData.characters.mainCharacter.spellData.spells[D];
        if (!e) return console.warn("the player weapon spell has not been created yet");
        var t = this._panels.spell.slotMap["spell" + D];
        if (t)
            for (var i = 0; i < t.length; i++) t[i].setSpell(e)
    }, n.prototype._swapSlots = function(e, t) {
        var i = this;
        if (e.type !== t.type) return console.error(new Error("Impossible to swap a slot from panel " + e.type + " and panel " + t.type));
        var n = this._panels[e.type];
        if ((!window.gui.fightManager.isInBattle() || this.isOrganizing) && this._dragStartPage === this._pagination.current) {
            if (e.slotIndex === t.slotIndex) return t.setStyle("webkitTransform", "translate3d(0,0,0)");
            w.removeAllListeners("ShortcutBarSwapErrorMessage");
            var o = t.slotIndex,
                a = t.getParent(),
                r = t.x - e.x,
                s = t.y - e.y;
            t.slotIndex = e.slotIndex, n.slotList[t.slotIndex] = e.getParent()
                .appendChild(t), this._positionSlot(t), e.slotIndex = o, n.slotList[e.slotIndex] = a.appendChild(e), y.tween(e, {
                    webkitTransform: "translate3d(" + r + "px," + s + "px,0)"
                }, {
                    time: 100,
                    easing: "ease-out"
                }, function() {
                    i._positionSlot(e), window.dofus.sendMessage("ShortcutBarSwapRequestMessage", {
                        barType: R[t.type],
                        firstSlot: t.slotIndex,
                        secondSlot: e.slotIndex
                    })
                }), w.once("ShortcutBarSwapErrorMessage", function() {
                    var n = t.slotIndex;
                    t.slotIndex = e.slotIndex, e.slotIndex = n, i._positionSlot(t), i._positionSlot(e)
                })
        }
    }, n.prototype._onDropOnSlot = function(e, t, i, n) {
        switch (i) {
            case "shortcutBar":
                this._swapSlots(e, t);
                break;
            case "characterBox":
            case "equipment":
                var o = t.itemInstance;
                this._setShortcutRequest(new Shortcut({
                    _type: "ShortcutObjectItem",
                    slot: e.slotIndex,
                    itemUID: o.objectUID,
                    itemGID: o.objectGID
                }));
                break;
            case "presets":
                this._setShortcutRequest(new Shortcut({
                    _type: "ShortcutObjectPreset",
                    slot: e.slotIndex,
                    presetId: t.preset.presetId
                }));
                break;
            case "spellsWindow":
                this._setShortcutRequest(new Shortcut({
                    _type: "ShortcutSpell",
                    slot: e.slotIndex,
                    spellId: n.spellId
                }));
                break;
            case "attitude":
                this._setShortcutRequest(new Shortcut({
                    _type: "ShortcutEmote",
                    slot: e.slotIndex,
                    emoteId: n.id
                }));
                break;
            case "smiley":
                this._setShortcutRequest(new Shortcut({
                    _type: "ShortcutSmiley",
                    slot: e.slotIndex,
                    smileyId: n.id
                }))
        }
    }, n.prototype._setOrganizeMode = function(e) {
        var t = window.gui.playerData.characters.isMainCharacterControlled();
        if (!e || "spell" !== this._currentPanelType || t)
            if (this._tempToolbarResize || (this._tempToolbarResize = {
                    active: !1,
                    previousPanel: null
                }), this.isOrganizing = e, this.toggleClassName("draggable", this.isOrganizing), this._setItemsSlotsDraggability(this.isOrganizing), this._setSpellsSlotsDraggability(this.isOrganizing), this.isOrganizing) {
                this.spellBtn.disable(), this.itemBtn.disable();
                var i = "spell" === this._currentPanelType,
                    n = f.menubarSizeInFight !== f.menubarSize,
                    o = i !== window.gui.playerData.isFighting;
                if (n && o) {
                    this._tempToolbarResize.active = !0, this._tempToolbarResize.previousPanel = i ? "spell" : "item", this.shouldKeepOpen = !0;
                    var a = i ? "tablet.nowShowingFightToolbar" : "tablet.nowShowingRpToolbar";
                    v.showNotification(b(a), this), window.gui.showFightingToolbar(i)
                }
            } else this.spellBtn.enable(), this.itemBtn.enable(), this._tempToolbarResize.active ? (this.shouldKeepOpen = !1, "spell" === this._tempToolbarResize.previousPanel ? window.gui.resizeToolbarForRoleplay() : window.gui.resizeToolbarForFight(), this._tempToolbarResize.active = !1, this._tempToolbarResize.previousPanel = null) : this.close()
    }
}
