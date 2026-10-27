function(e, t, i) {
    function n() {
        var e = this,
            t = window.gui;
        this._isActive = !1, this._activePictoMap = {}, t.once("initialized", function() {
            var i = window.gui.gameGuiContainer;
            e._pingBtn = i.appendChild(new o), e._pingBox = i.appendChild(new a), e._emoteBox = i.appendChild(new r), e._setupEvents(t), e._emoteBox.refreshPosition(), e._emoteBox.hide()
        }), t.on("disconnect", function() {
            e._reset(), e._resetPicto()
        }), s.on("PingMessage", function(t) {
            function i(e, t) {
                return "ui.pingSystem.context" + e + ".hyperlink" + t
            }
            e.addPingPicto(t.cell, t.type, t.targetType);
            var n = t.cell,
                o = t.type,
                a = t.targetType,
                r = d(i(a, o)),
                s = window.actorManager.getActor(t.sender);
            if (s) {
                var c = s.data;
                window.gui.chat.logMsg("{player," + c.name + "," + c.playerId + "}" + d("ui.common.colon") + "{pingsystem," + n + "," + o + "," + a + "::[" + r + "]}")
            }
        }), t.fightManager.on("fightStart", function() {
            e._pingBtn.enterFightState()
        }), t.fightManager.on("fightEnd", function() {
            e._pingBtn.enterRolePlayState()
        })
    }
    var o = i(852),
        a = i(855),
        r = i(859),
        s = i(105),
        c = i(65),
        l = i(732),
        d = i(17)
        .getText,
        u = i(91)
        .playUiSound,
        p = 4e3;
    e.exports = n, n.prototype.PING_CELL_COLOR = {
        r: 240,
        g: 160,
        b: 65,
        a: .75
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui,
            i = this._pingBtn,
            n = this._pingBox;
        t.on("GameFightEndMessage", function() {
            e._reset(), e._resetPicto()
        }), i.on("selected", function() {
            t.playerData.isFighting && (c.setPriorityBehavior("TOUCH"), e._isActive = !0)
        }), i.on("unselected", function() {
            t.playerData.isFighting && (e._isActive = !1, e._pingBox.close())
        }), i.on("emoteBtnTap", function() {
            if (e._emoteBox.isOpen) u("WINDOW_CLOSE"), e._emoteBox.hide();
            else {
                if (t.playerData.isFighting) return;
                u("WINDOW_OPEN"), e._emoteBox.show(), e._emoteBox.refreshPosition()
            }
        }), n.on("actionSent", function() {
            e._reset()
        }), s.on("SpellInfoMessage", function(t) {
            e._displaySpellInfos(t)
        }), s.on("PointInfoMessage", function(t) {
            e._displayPingOnApMp(t)
        })
    }, n.prototype.cancelPingBox = function() {
        this._pingBox.close()
    }, n.prototype.openPingBox = function(e, t) {
        this._pingBox.open(e, t)
    }, n.prototype.isPingBoxOpen = function() {
        return this._pingBox.isOpen()
    }, n.prototype.addPingPicto = function(e, t, i) {
        function n(e) {
            return window.setTimeout(function() {
                window.isoEngine.mapRenderer.removePingPicto(e), delete o._activePictoMap[e]
            }, p)
        }
        if (window.gui.playerData.isFighting && e !== -1) {
            var o = this;
            this._activePictoMap[e] && (window.isoEngine.mapRenderer.removePingPicto(e), delete o._activePictoMap[e]), window.isoEngine.mapRenderer.addPingPictoOnCell(e, t, i), this._activePictoMap[e] = n(e)
        }
    }, n.prototype._removePingPicto = function() {
        for (var e in this._activePictoMap) this._activePictoMap.hasOwnProperty(e) && (window.clearTimeout(this._activePictoMap[e]), window.isoEngine.mapRenderer.removePingPicto(e), delete this._activePictoMap[e])
    }, n.prototype._reset = function() {
        this._isActive = !1, this._pingBtn && (this._pingBtn.unselect(), this._pingBox.close())
    }, n.prototype._resetPicto = function() {
        this._removePingPicto(), this._activePictoMap = {}
    }, n.prototype.isActive = function() {
        return this._isActive
    }, n.prototype.getChatIcons = function() {
        return this._emoteBox.getChatIcons()
    }, n.prototype.pingOnSpell = function(e) {
        window.dofus.sendMessage("PingSpellRequestMessage", {
            id: e.id,
            level: e.level
        })
    }, n.prototype.pingOnApMp = function(e) {
        window.dofus.sendMessage("PingPointRequestMessage", {
            type: e
        })
    }, n.prototype._displaySpellInfos = function(e) {
        this._reset();
        var t = window.actorManager.getActor(e.ownerId);
        if (t) {
            var i = "";
            l.createSpells(e.id, function(n, o) {
                if (!n) {
                    i = o[e.id].spell.nameId;
                    var a = t.data;
                    window.gui.chat.logMsg("{player," + a.name + "," + a.playerId + "}" + d("ui.common.colon") + d("ui.ping.spellInfos", i, e.level, e.actionPointCost, e.range, e.castNumber, e.maxCastPerTurn, e.maxCastPerTarget, e.cooldown))
                }
            })
        }
    }, n.prototype._displayPingOnApMp = function(e) {
        this._reset();
        var t = window.actorManager.getActor(e.ownerId);
        if (t) {
            var i = t.data,
                n = d(1 === e.type ? "ui.common.ap" : "ui.common.mp");
            window.gui.chat.logMsg("{player," + i.name + "," + i.playerId + "}" + d("ui.common.colon") + d("ui.ping.apMpLeft", e.remainingPoints, n))
        }
    }
}
