function(e, t, i) {
    function n() {
        var e = this;
        s.call(this, "div", {
            className: "ChatIcons"
        }), this.openPanel = null;
        var t = this.createChild("div", {
            className: "buttons"
        });
        this.smileysButton = t.createChild("div", {
            className: "smileysButton",
            tooltip: a("ui.chat.smilies")
        }), this.attitudesButton = t.createChild("div", {
            className: "attitudesButton",
            tooltip: a("ui.common.emotes")
        }), o(this.smileysButton, a("ui.chat.smilies")), o(this.attitudesButton, a("ui.common.emotes"));
        var i = this.createChild("div");
        this.smileysPanel = i.createChild("div", {
            className: "smileysPanel"
        }), this.attitudesPanel = i.createChild("div", {
            className: "attitudesPanel"
        }), this.smileysPanel.hide(), this.attitudesPanel.hide(), this.smileysButton.on("tap", function() {
            u.hide(), h("GEN_BUTTON"), "smileys" === e.openPanel ? (h("WINDOW_CLOSE"), e.closePanels()) : (h("WINDOW_OPEN"), e.openSmileys(), e.emit("activated"))
        }), this.attitudesButton.on("tap", function() {
            u.hide(), h("GEN_BUTTON"), "attitudes" === e.openPanel ? (h("WINDOW_CLOSE"), e.closePanels()) : (h("WINDOW_OPEN"), e.openAttitudes(), e.emit("activated"))
        }), u.on("show", function() {
            "smileys" !== e.openPanel && "attitudes" !== e.openPanel || e.closePanels()
        }), this.once("open", this.loadIcons), this.attitudeList = {}, this.currentMood = null, this.previousMood = -1, this.setMessageHandlers()
    }
    i(862);
    var o = i(88)
        .addTooltip,
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(72),
        c = i(63),
        l = i(12),
        d = i(67)
        .getElementPositionAround,
        u = i(452),
        p = i(418),
        h = i(91)
        .playUiSound,
        f = i(811);
    r(n, s), e.exports = n, n.prototype.setMessageHandlers = function() {
        var e = this,
            t = window.gui;
        t.on("MoodSmileyResultMessage", function(i) {
            var n = i.resultCode;
            return n === f.MOOD_ERROR_UNKNOWN ? (e.setCurrentMood(e.previousMood), t.openSimplePopup(a("ui.smiley.errorMood"))) : n === f.MOOD_ERROR_FLOOD ? (e.setCurrentMood(e.previousMood), t.openSimplePopup(a("ui.smiley.errorFloodMood"))) : (e.setCurrentMood(i.smileyId), void(e.previousMood = i.smileyId))
        }), t.on("disconnect", function() {
            e.setCurrentMood(-1), e.previousMood = -1
        })
    }, n.prototype.bindToPlayerEmoteData = function() {
        var e = this,
            t = window.gui.playerData.emoteData;
        t.on("emoteAdded", function(t) {
            l.preloadImage("gfx/emotes/" + t.id + ".png", function(i) {
                e.addAttitudeIcon(t, i)
            })
        }), t.on("emoteRemoved", function(t) {
            e.removeAttitudeIcon(t)
        }), t.on("emoteListUpdated", function(t) {
            e.loadEmotes(t)
        })
    }, n.prototype.loadIcons = function() {
        var e = this;
        this.loadEmotes(window.gui.playerData.emoteData.list), this.smileysPanel.addClassNames("spinner");
        for (var t = window.gui.databases.Smileys, i = Object.keys(t), n = [], o = 0; o < i.length; o++) n.push("gfx/smilies/" + t[i[o]].gfxId + ".png");
        l.preloadImages(n, function(n) {
            for (var o = 0; o < n.length; o++) e.addSmileyIcon(t[i[o]], n[o]);
            e.smileysPanel.delClassNames("spinner")
        }), this.bindToPlayerEmoteData()
    }, n.prototype.loadEmotes = function(e) {
        var t = this;
        this.attitudesPanel.clearContent(), this.attitudeList = {}, this.attitudesPanel.addClassNames("spinner");
        var i = Object.keys(e);
        i = i.map(function(e) {
            return parseInt(e, 10)
        }), i = i.sort(function(e, t) {
            return e - t
        });
        for (var n = [], o = 0; o < i.length; o++) n.push("gfx/emotes/" + i[o] + ".png");
        l.preloadImages(n, function(n) {
            for (var o = 0; o < n.length; o++) t.addAttitudeIcon(e[i[o]], n[o]);
            t.attitudesPanel.delClassNames("spinner")
        })
    }, n.prototype._addDraggableBehaviourTo = function(e, t, i) {
        var n = {
                prepareForDrag: function(t, i) {
                    return i.setStyle("backgroundImage", e.getStyle("backgroundImage")), e.once("dragEnd", function() {
                        i.setStyle("backgroundImage", null)
                    }), !0
                }
            },
            o = {
                id: i
            },
            a = {
                dragOnTouchstart: !1,
                dragElement: !1,
                noHover: !1
            };
        p.setDraggable(e, n, t, o, a)
    }, n.prototype.addAttitudeIcon = function(e, t) {
        function i() {
            window.dofus.sendMessage("EmotePlayRequestMessage", {
                emoteId: this.id
            }), n.closePanels()
        }
        var n = this,
            o = this.attitudesPanel.createChild("div", {
                className: ["chatIcon", "attitudeIcon"]
            });
        o.id = e.id, o.setStyle("backgroundImage", t), this.attitudeList[e.id] = o, this._addDraggableBehaviourTo(o, "attitude", o.id), c(o), o.on("tap", i)
    }, n.prototype.removeAttitudeIcon = function(e) {
        var t = this.attitudeList[e];
        t && (t.destroy(), delete this.attitudeList[e])
    }, n.prototype.setCurrentMood = function(e) {
        var t = this.smileysPanel.getChild(e);
        this.currentMood !== t && (this.currentMood && this.currentMood.delClassNames("mood"), t && t.addClassNames("mood"), this.currentMood = t)
    }, n.prototype.addSmileyIcon = function(e, t) {
        function i() {
            window.dofus.sendMessage("ChatSmileyRequestMessage", {
                smileyId: this.id
            }), o.closePanels()
        }

        function n() {
            var e = o.currentMood === this ? -1 : this.id;
            o.setCurrentMood(e), window.dofus.sendMessage("MoodSmileyRequestMessage", {
                smileyId: e
            })
        }
        if (e.forPlayers) {
            var o = this,
                a = new s("div", {
                    name: e.id,
                    className: ["chatIcon", "smileyIcon"]
                });
            a.id = e.id, a.setStyle("backgroundImage", t), c(a), a.on("tap", i), a.on("longtap", n), this.smileysPanel.appendChild(a), this._addDraggableBehaviourTo(a, "smiley", a.id)
        }
    }, n.prototype.openSmileys = function() {
        this.emit("open"), this.attitudesPanel.hide(), this.smileysPanel.show(), this.openPanel = "smileys"
    }, n.prototype.openAttitudes = function() {
        this.emit("open"), this.smileysPanel.hide(), this.attitudesPanel.show(), this.openPanel = "attitudes"
    }, n.prototype.closePanels = function() {
        this.emit("closing"), this.smileysPanel.hide(), this.attitudesPanel.hide(), this.openPanel = null
    }, n.prototype.setPanelsStyle = function(e, t) {
        this.smileysPanel.setStyle(e, t), this.attitudesPanel.setStyle(e, t)
    }, n.prototype.positionPanel = function() {
        function e(e, t) {
            var i = d(e, t);
            e.setStyles({
                left: i.x + "px",
                top: i.y + "px"
            })
        }
        e(this.smileysPanel, this.smileysButton), e(this.attitudesPanel, this.attitudesButton)
    }
}
