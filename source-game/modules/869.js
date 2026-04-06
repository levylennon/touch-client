function(e, t) {
    // Shortcut
    function i(e) {
        if (!e) return console.error(new Error("Shortcut: cannot create a new shortcut without data"));
        if (!e._type || !n[e._type]) return console.error(new Error("Shortcut: type " + e._type + " is invalid"));
        if (void 0 === e.slot || null === e.slot) return console.error(new Error("Shortcut: invalid slot " + e.slot));
        this._type = e._type, this.slotIndex = e.slot;
        for (var t = n[e._type], i = 0; i < t.length; i++) {
            if (void 0 === e[t[i]] || null === e[t[i]]) return console.error(new Error("Shortcut (" + e._type + "): invalid " + t[i] + " :" + e[t[i]]));
            this[t[i]] = e[t[i]]
        }
    }
    var n = {
        ShortcutSpell: ["spellId"],
        ShortcutObjectItem: ["itemGID", "itemUID"],
        ShortcutObjectPreset: ["presetId"],
        ShortcutEmote: ["emoteId"],
        ShortcutSmiley: ["smileyId"]
    };
    e.exports = i,
    i.prototype.serialize = function() {
        var e = {};
        e._type = this._type, e.slot = this.slotIndex;
        for (var t = n[this._type], i = 0; i < t.length; i++) e[t[i]] = this[t[i]];
        return e
    }, 
    i.prototype.getHash = function() {
        switch (this._type) {
            case "ShortcutSpell":
                return "spell" + this.spellId;
            case "ShortcutObjectItem":
                return "item" + this.itemUID;
            case "ShortcutObjectPreset":
                return "preset" + this.presetId;
            case "ShortcutEmote":
                return "emote" + this.emoteId;
            case "ShortcutSmiley":
                return "smiley" + this.smileyId;
            default:
                return null
        }
    }, 
    i.prototype.isPreset = function() {
        return "ShortcutObjectPreset" === this._type
    }, 
    i.prototype.isHandled = function() {
        return null !== this.getHash()
    }, 
    i.prototype.getShortcutBarPanelType = function() {
        switch (this._type) {
            case "ShortcutSpell":
                return "spell";
            case "ShortcutObjectItem":
            case "ShortcutObjectPreset":
            case "ShortcutEmote":
            case "ShortcutSmiley":
                return "item";
            default:
                return null
        }
    }
}
