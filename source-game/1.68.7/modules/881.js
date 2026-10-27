function(e, t, i) {
    var n = i(418),
        o = i(869),
        a = {
            prototype: {}
        };
    a.appendPrototypeTo = function(e) {
        for (var t in a.prototype) {
            if (e.prototype[t]) return console.error("ShortcutBarSlot: class " + e.name + ' already has a method called "' + t + '"');
            e.prototype[t] = a.prototype[t]
        }
    };
    var r = {
        item: ["shortcutBar", "equipment", "presets", "characterBox", "attitude", "smiley"],
        spell: ["shortcutBar", "spellsWindow"]
    };
    e.exports = a, a.constructor = function(e, t) {
        var i = this;
        this.slotIndex = t, this.shortcutBar = e, this.shortcut = null, this.isDisabled = !1, this._addDraggableBehaviour(), this._addDroppableBehaviour(), this.addClassNames("empty", "ShortcutSlot", "vibrate", "anim" + Math.round(9 * Math.random())), this.on("unset", function() {
            i.shortcut = null, i.setDisable(!1), n.disableDrag(i), i.addClassNames("empty"), e._selectedSlot === i && e._unSelectSlot(i)
        }), this.on("setData", function() {
            i.delClassNames("empty"), e._selectedSlot === i && e._unSelectSlot(i)
        }), this.on("dragStart", function() {
            e._dragStartPage = e._pagination.current, e.isOrganizing && e.showTrash(), i.enabledBehaviour && "spell" === i.type && window.gui.fightManager.isInBattle() && !e.isOrganizing && (i.selected || e._selectSlot(i, !1), i.customScale = 1, i.customXOffset = 0, i.customYOffset = -24, i.customRotation = 45)
        }), this.on("dragEnd", function(t, n) {
            e.hideTrash(), "spell" === i.type && window.gui.fightManager.isInBattle() && !e.isOrganizing && (window.background.dragCellRelease(t, n, i), window.foreground.confirmBox.isOpen || e._unSelectSlot(i), i.customScale = null, i.customXOffset = null, i.customYOffset = null, i.customRotation = null)
        }), this.on("drop", function(t, n, o) {
            e._onDropOnSlot(i, t, n, o)
        }), this.on("tap", function() {
            if (("spell" !== i.type || i.enabledBehaviour) && ("item" !== i.type || !window.gui.fightManager.isInBattle())) {
                var t = !0;
                e._selectSlot(i, t)
            }
        })
    }, a.prototype._addDraggableBehaviour = function() {
        var e = null,
            t = "shortcutBar",
            i = null,
            o = {
                dragOnTouchstart: !1,
                dragElement: !0,
                noHover: !0
            };
        n.setDraggable(this, e, t, i, o), n.setDragEnable(this, !1)
    }, a.prototype._addDroppableBehaviour = function() {
        var e = r[this.type],
            t = {
                matchPositionOnDrop: !0,
                isDropAllowed: this._isDropAllowed.bind(this)
            };
        n.setDroppable(this, e, t)
    }, a.prototype._isDropAllowed = function(e, t, i) {
        return !window.gui.fightManager.isInBattle() || (!!this.shortcutBar.isOrganizing || ("shortcutBar" !== i || !t || "spell" !== t.type))
    }, a.prototype._onContextualMenuClosed = function(e) {
        this.shortcutBar._unSelectSlot(this), "remove" === e && this.shortcutBar._removeShortcutFromSlotRequestWith2Animations(this)
    }, a.prototype.enableDrag = function() {
        this.setDraggability(!0)
    }, a.prototype.disableDrag = function() {
        this.setDraggability(!1)
    }, a.prototype.setDraggability = function(e) {
        this.isEmpty() ? e = !1 : !e && "spell" === this.type && window.gui.fightManager.isInBattle() && (e = !0), n.setDragEnable(this, e)
    }, a.prototype._isShortcutValid = function(e) {
        return e && e instanceof o && e.isHandled()
    }, a.prototype.isEmpty = function() {
        return !this.shortcut
    }, a.prototype.getShortcutHash = function() {
        return this.shortcut ? this.shortcut.getHash() : null
    }, a.prototype.refreshShortcut = function() {
        this.setShortcut(this.shortcut)
    }
}
