function(e, t, i) {
    function n(e) {
        r.call(this, "div", {
            className: "RewardBoxes"
        }), e = e || {}, this._NB_REWARDS = e.nbRewards || 6, this._slotList = [], this._rewardNextSlot = 0, this._content = this.createChild("div", {
            className: "rewardContent"
        }), this.reset()
    }
    i(1009);
    var o = i(873),
        a = i(70),
        r = i(72),
        s = i(56)
        .inherits,
        c = i(871);
    s(n, a), e.exports = n, n.prototype.reset = function() {
        this._slotList = [], this._rewardNextSlot = 0, this._content.clearContent();
        for (var e = 0; e < this._NB_REWARDS; e += 1) this._slotList.push(this._content.appendChild(new o))
    }, n.prototype.addItemInstance = function(e) {
        var t = this;
        if (!(this._rewardNextSlot >= this._NB_REWARDS)) {
            var i = this._slotList[this._rewardNextSlot];
            i.addClassNames("spinner"), this._rewardNextSlot += 1;
            var n = new c({
                itemData: e,
                quantity: e.quantity
            });
            n.on("tap", function() {
                t.emit("tapSlot", e)
            }), n.insertBefore(i), i.destroy()
        }
    }
}
