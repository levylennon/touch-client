function(e, t, i) {
    function n() {
        this.inDialog = !1, this.npcData = null, this.npcActorId = null, this.uiReplyHandler = this._uiReplyHandler.bind(this), this._setListeners()
    }

    function o(e, t) {
        for (var i = 0; i < t.length; i++) e = e.replace("#" + (i + 1), t[i]);
        return e
    }
    var a = i(130),
        r = i(116),
        s = i(792),
        c = i(17)
        .processText,
        l = i(502);
    e.exports = n, n.prototype._setListeners = function() {
        var e = window.dofus.connectionManager,
            t = this;
        e.on("NpcGenericActionFailureMessage", function() {
            window.foreground.unlock("npcActionRequest")
        }), e.on("NpcDialogCreationMessage", function(e) {
            t.npcActorId = e.npcId, window.foreground.lock("npcActionRequest")
        }), e.on("GameContextCreateMessage", function() {
            window.foreground.unlock("npcActionRequest")
        }), window.isoEngine.on("mapLoaded", function() {
            window.foreground.unlock("npcActionRequest")
        }), e.on("NpcDialogQuestionMessage", function(e) {
            if (!t.npcData) {
                var i = window.actorManager.getActor(t.npcActorId)
                    .data.npcData;
                t.prepareDialog(i)
            }
            r.log("Game_Action.Talk_To_NPC", {
                message_id: e.messageId,
                npc_id: t.npcData.id
            }), window.gui.playerData.setDialogState(!0), t.nextQuestionAsync(e.messageId, e.visibleReplies, e.dialogParams)
        }), e.on("LeaveDialogMessage", function() {
            window.foreground.unlock("npcActionRequest"), window.gui.playerData.setDialogState(!1), t.inDialog && (window.gui.npcDialogUi.leaveDialog(), t.inDialog = !1)
        }), e.on("ExchangeLeaveMessage", function() {
            window.foreground.unlock("npcActionRequest"), window.gui.playerData.setDialogState(!1)
        }), e.on("ExchangeErrorMessage", function(e) {
            e.errorType === s.REQUEST_IMPOSSIBLE && (window.foreground.unlock("npcActionRequest"), window.gui.playerData.setDialogState(!1))
        })
    }, n.prototype.prepareDialog = function(e) {
        this.npcData = e;
        var t, i, n = this.msgTextIds = {};
        for (i = 0; i < e.dialogMessages.length; i++) t = e.dialogMessages[i], n[t[0]] = t[1];
        for (n = this.replyTextIds = {}, i = 0; i < e.dialogReplies.length; i++) t = e.dialogReplies[i], n[t[0]] = t[1]
    }, n.prototype.nextQuestionAsync = function(e, t, i) {
        this.inDialog = !0, this.replyIds = t, window.gui.npcDialogUi.prepareForNextQuestion(this.npcData, t.length);
        var n = this.msgTextIds[e];
        if (!n) {
            var r = " curr " + Object.keys(this.msgTextIds);
            return console.error(new Error("Missing message text for messageId " + e + " npc id " + this.npcData.id + r)), this._closeDialog()
        }
        for (var s = [n], d = 0; d < t.length; d++) s.push(this.replyTextIds[t[d]]);
        var u = this;
        a.getText(s, function(r, d) {
            if (r) return console.error("Failed to get texts for NPC. textIds:", s, "error:", r), u._closeDialog();
            if (!d[n]) return console.error(new Error("Missing text for messageTextId " + n + " (getText) npc id " + u.npcData.id)), u._closeDialog();
            for (var p = window.gui.playerData.characterBaseInformations, h = p && p.sex ? 1 : 0, f = c(o(d[n], i), h), b = [], m = 0; m < t.length; m++) b.push(c(d[u.replyTextIds[t[m]]], h));
            f ? a.getDataMap("NpcMessages", [e], null, function(t, i) {
                return t ? console.error("Unable to get NPC messages for NPC. messageId: " + e) : (u._showUi(f, b), void("" !== i[e].npcAnimations && l.process(i[e].npcAnimations)))
            }) : console.error(new Error("msg is empty for message text id " + n))
        })
    }, n.prototype._uiReplyHandler = function(e) {
        (null !== e || null === e && this.replyIds.length > 0) && r.log("Game_Action.Player_Answer_To_NPC", {
            answer_id: this.replyIds[e],
            npc_id: this.npcData.id
        }), null !== e ? window.dofus.sendMessage("NpcDialogReplyMessage", {
            replyId: this.replyIds[e]
        }) : this._closeDialog()
    }, n.prototype._closeDialog = function() {
        window.dofus.sendMessage("LeaveDialogRequestMessage", null), this.npcData = null, this.npcActorId = null
    }, n.prototype._showUi = function(e, t) {
        var i = {
            npcData: this.npcData,
            actor: window.actorManager.getActor(this.npcActorId)
        };
        window.gui.npcDialogUi.showNpcQuestion(e, t, this.uiReplyHandler, i)
    }
}
