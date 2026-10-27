function(e, t, i) {
    function n(e, t, i, n) {
        switch (n) {
            case 2:
            case 4:
            case 7:
            case 8:
                c.getWindow("tradeWithNPC")
                    .prepareExchange(e.nameId);
                break;
            case 3:
                window.gui.npcDialogHandler.prepareDialog(e)
        }
        if (window.foreground.lock("npcActionRequest"), window.dofus.sendMessage("NpcGenericActionRequestMessage", {
                npcId: t,
                npcActionId: n,
                npcMapId: i
            }), 9 === n || 10 === n) {
            var o = window.foreground,
                a = 9 === n ? "HouseToSellListMessage" : "PaddockToSellListMessage",
                r = setTimeout(function() {
                    console.error(new Error(a + " not received: timeout triggered to unlock the character")), o.unlock("npcActionRequest"), window.dofus.connectionManager.removeListener(a, s)
                }, 5e3),
                s = function() {
                    o.unlock("npcActionRequest"), clearTimeout(r)
                };
            window.dofus.connectionManager.once(a, s)
        }
    }

    function o() {
        r.call(this);
        var e = this;
        this.once("open", function() {
            this._setupDom()
        }), this.on("open", function(t, i) {
            function o() {
                n(a, r, c, this.npcActionId), e.close()
            }
            var a = t.npcData,
                r = t.actorId,
                c = t.mapId;
            this.header.setText(a.nameId), this.actionsContainer.clearContent();
            for (var l = window.gui.playerData.isAlive(), d = 0, u = a.actions.length; d < u; d++) {
                var p = this.actionsContainer.appendChild(new s({
                    text: a.actionsName[d],
                    className: "cmButton",
                    disable: !l
                }, o));
                p.npcActionId = a.actions[d]
            }
            i()
        })
    }
    var a = i(56)
        .inherits,
        r = i(450),
        s = i(86),
        c = i(52);
    a(o, r), e.exports = o, o.npcActionRequest = n, o.prototype._setupDom = function() {
        var e = this.entryList.createChild("div");
        this.actionsContainer = e.createChild("div"), this._addCancel()
    }
}
