function(e, t, i) {
    function n() {
        a.call(this);
        var e = this,
            t = window.gui;
        this._characterList = [],
            this._charaListMinusDeadPeople = [], this._giftList = [], this._assigningGifts = {}, this._autoAssign = !1, this._toaRetryPending = [], t.once("initialized", function() {
                e._setupEvents()
            }), t.on("disconnect", function() {
                e._reset()
            })
    }
    var o = i(56)
        .inherits,
        a = i(36)
        .EventEmitter,
        r = i(469),
        s = i(52),
        c = i(563),
        l = i(13),
        d = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype._setupEvents = function() {
        function e(e) {
            for (var t = [], n = 0; n < e.length; n += 1) {
                for (var o = e[n], a = o.uid, r = o.items || [], s = null, c = 0; c < r.length; c += 1)
                    if (r[c].objectGID === l.TOA_RETRY_ITEM_ID) {
                        s = r[c];
                        break
                    } s ? i._autoAssign ? (i.assignGift(a, window.gui.playerData.id), i._autoAssign = !1) : i._toaRetryPending.push(a) : t.push(o)
            }
            return t
        }

        function t(t) {
            var o = e(t);
            o.length && (s.getWindow("giftSelection")
                .openState || n || i._reset(), n = !0, i.setCharacterList(c.getCharacterList()), i._createGiftList(o, function(e) {
                    return e ? console.error(new Error("Gifts module: " + e)) : i._giftList.length ? void(i.getCharaListMinusDeadPeople()
                        .length && (s.open("giftSelection", i._giftList), n = !1)) : console.error(new Error("Gifts module: _giftList is empty"))
                }))
        }
        var i = this,
            n = !1;
        window.dofus.connectionManager.on("StartupActionsListMessage", function(e) {
            t(e.actions)
        }), window.dofus.connectionManager.on("StartupActionAddMessage", function(e) {
            t([e.newAction])
        }), window.dofus.connectionManager.on("StartupActionFinishedMessage", function(e) {
            return e.success ? void(i._assigningGifts[e.actionId] ? (i._assigningGifts[e.actionId] = !1, i.emit("giftAssigned", e)) : (i._assigningGifts[e.actionId] = e.success, i.emit("giftAssignRequestResult", e))) : (window.gui.openSimplePopup(d("tablet.gift.unableToAssign"), d("tablet.gift.unableToAssignTitle")), void i.emit("giftAssignFailed", e))
        })
    }, n.prototype._createGiftList = function(e, t) {
        for (var i = this, n = [], o = 0, a = e.length; o < a; o += 1)
            for (var s = e[o], c = s.items, l = 0, d = c.length; l < d; l += 1) {
                var u = c[l];
                u && n.push(u)
            }
        r.createItemInstances(n, function(n, o) {
            if (n) return t(n);
            for (var a = 0, r = 0, s = e.length; r < s; r += 1) {
                for (var c = e[r], l = [], d = c.items, u = 0, p = d.length; u < p; u += 1) {
                    var h = o.array[a] || null;
                    a += 1, h && l.push(h)
                }
                l.length && i._giftList.push({
                    uid: c.uid,
                    title: c.title,
                    text: c.text,
                    items: l
                })
            }
            t()
        })
    }, n.prototype._reset = function() {
        this._characterList = [], this._charaListMinusDeadPeople = [], this._giftList = [], this._assigningGifts = {}, this._autoAssign = !1, this._toaRetryPending = []
    }, n.prototype.getCharacterList = function() {
        return this._characterList
    }, n.prototype.getCharaListMinusDeadPeople = function() {
        return this._charaListMinusDeadPeople
    }, n.prototype.setCharacterList = function(e) {
        this._characterList = e, this._charaListMinusDeadPeople = [];
        var t = window.gui.playerData.characterBaseInformations;
        if (t.id)
            for (var i = 0, n = e.length; i < n; i += 1) {
                var o = e[i];
                t.id === o.id && (o.deathState && 0 !== o.deathState || this._charaListMinusDeadPeople.push(o))
            }
    }, n.prototype.assignGift = function(e, t) {
        window.dofus.sendMessage("StartupActionsObjetAttributionMessage", {
            actionId: e,
            characterId: t
        })
    }, n.prototype.setAutoAssign = function(e) {
        this._autoAssign = e
    }, n.prototype.getToaRetryPendingUid = function() {
        return this._toaRetryPending
    }, n.prototype.assignPendingToaRetry = function(e) {
        if (!this._toaRetryPending.length) return console.error(new Error("Pending retry are empty " + e)), !1;
        var t = this._toaRetryPending.indexOf(e);
        return t === -1 ? (console.error(new Error("No pending retry " + e)), !1) : (this.assignGift(e, window.gui.playerData.id), this._toaRetryPending.splice(t, 1), !0)
    }
}
