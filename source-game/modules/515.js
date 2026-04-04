function(e, t, i) {
    function n() {
        a.call(this), this.partyId = !1, this.isLoyal = !1, this.once("open", function() {
            this._setupDom()
        }), this.on("open", function(e, t) {
            this.partyId = e.partyId, this.isLoyal = e.isLoyal, this.loyalMsg.toggleClassName("ticked", e.isLoyal), this.dangerMsg.toggleClassName("ticked", window.gui.playerData.partyData.getDangerDisplay()), e.partyType === s.PARTY_TYPE_ARENA ? this.restrictedMsg.hide() : (this.restrictedMsg.show(), this.restrictedMsg.setEnable(e.isLeader), this.restrictedMsg.toggleClassName("ticked", e.isRestricted)), t()
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText,
        s = i(516),
        c = i(517);
    o(n, a), e.exports = n, n.prototype._setupDom = function() {
        var e = this;
        this.header.setText(r("ui.common.options")), this.restrictedMsg = this._addEntry(r("ui.party.lockFight"), function() {
            window.dofus.sendMessage("GameFightOptionToggleMessage", {
                option: c.FIGHT_OPTION_SET_TO_PARTY_ONLY
            })
        }), this.loyalMsg = this._addEntry(r("ui.party.refuseOtherInvitations"), function() {
            window.dofus.sendMessage("PartyPledgeLoyaltyRequestMessage", {
                partyId: e.partyId,
                loyal: !e.isLoyal
            })
        }), this.dangerMsg = this._addEntry(r("ui.party.toggleDangerDisplay"), function() {
            window.gui.playerData.partyData.toggleDangerDisplay()
        }), this._addCancel()
    }
}
