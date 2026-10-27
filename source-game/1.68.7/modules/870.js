function(e, t, i) {
    function n(e, t) {
        s.call(this, {
            scaleOnPress: !0
        }), this.type = "item", c.constructor.call(this, e, t), this.on("doubletap", this._doubleTapHandler)
    }
    var o = i(12),
        a = i(56)
        .inherits,
        r = i(469),
        s = i(871),
        c = i(881);
    a(n, s), e.exports = n, n.prototype.setShortcut = function(e) {
        var t = this;
        if (!this._isShortcutValid(e)) return !this.isEmpty() && this.unset();
        var i = window.gui.playerData.inventory;
        this.shortcut = e;
        var n = !1;
        if (e.hasOwnProperty("presetId")) {
            n = !1, this.setQuantity(1);
            var a = i.presets[e.presetId];
            if (!a) return void console.error("Preset " + e.presetId + " does not exist");
            o.preloadImage("gfx/presets/icon_" + a.symbolId + ".png", function(e) {
                t.setImage(e)
            }), this.setData(a), this.setContextMenu("preset", {
                presetId: e.presetId,
                canRemove: !0,
                onClose: this._onContextualMenuClosed.bind(this)
            })
        } else if (e.hasOwnProperty("emoteId")) n = !1, this.setQuantity(1), this.setData({
            emoteId: e.emoteId
        }), this.setContextMenu("emote", {
            emoteId: e.emoteId,
            canRemove: !0,
            onClose: this._onContextualMenuClosed.bind(this)
        }), o.preloadImage("gfx/emotes/" + e.emoteId + ".png", function(e) {
            t.setImage(e)
        });
        else if (e.hasOwnProperty("smileyId")) {
            n = !1, this.setQuantity(1), this.setData({
                smileyId: e.smileyId
            }), this.setContextMenu("smiley", {
                smileyId: e.smileyId,
                canRemove: !0,
                onClose: this._onContextualMenuClosed.bind(this)
            });
            var s = window.gui.databases.Smileys;
            o.preloadImage("gfx/smilies/" + s[e.smileyId].gfxId + ".png", function(e) {
                t.setImage(e)
            })
        } else {
            var c = i.objects[e.itemUID];
            if (c) {
                if (!c.isInitialised) return c.once("initialised", function() {
                    t.setShortcut(e)
                });
                n = !1, this.setContextMenu("item", {
                    item: c,
                    onClose: this._onContextualMenuClosed.bind(this),
                    remove: !0,
                    enableActions: !0,
                    enableDestroy: !0
                }), this.setItem(c)
            } else n = !0, r.getItems([e.itemGID], function(e, i) {
                if (e) return console.error(e);
                var n = i[0];
                t.setContextMenu("item", {
                    item: n,
                    onClose: t._onContextualMenuClosed.bind(t),
                    remove: !0,
                    enableActions: !0,
                    enableDestroy: !0
                }), t.setItem(n)
            })
        }
        this.setDisable(n)
    }, n.prototype._doubleTapHandler = function() {
        if (this.shortcut) switch (this.shortcut._type) {
            case "ShortcutObjectItem":
                var e = this.getItem();
                e.isItemInstance && e.doDefaultAction();
                break;
            case "ShortcutEmote":
                window.dofus.sendMessage("EmotePlayRequestMessage", {
                    emoteId: this.shortcut.emoteId
                });
                break;
            case "ShortcutSmiley":
                window.dofus.sendMessage("ChatSmileyRequestMessage", {
                    smileyId: this.shortcut.smileyId
                });
                break;
            case "ShortcutObjectPreset":
                window.gui.playerData.inventory.usePreset(this.shortcut.presetId)
        }
    }, c.appendPrototypeTo(n)
}
