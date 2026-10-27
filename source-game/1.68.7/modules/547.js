function(e, t, i) {
    function n() {
        function e() {
            t.close();
            var e = this.interactiveData;
            e._selectedIntanceId = this.instanceId;
            for (var i = [], n = 0; n < this.interactiveData.enabledSkills.length; n++) this.interactiveData.enabledSkills[n].parameters === this.instanceId.toString() && i.push(this.interactiveData.enabledSkills[n]);
            return 1 === i.length ? window.isoEngine.useInteractive(e.elementId, i[0].skillInstanceUid) : void window.gui.openContextualMenu("interactive", e, {
                x: t._position.x,
                y: t._position.y
            })
        }
        a.call(this);
        var t = this;
        this.once("open", function() {
            this._setupDom()
        }), this.on("open", function(t, i) {
            function n(t, i) {
                var n = "?" === t._displayedName ? c("ui.common.houseWithNoOwner") : t._displayedName,
                    a = o.instanceContainer.appendChild(new s({
                        text: n,
                        className: "cmButton"
                    }, e));
                a.instanceId = t.houseId, a.interactiveData = i
            }
            var o = this,
                a = t || {};
            if (a.housesData) {
                var r = a.housesData[0];
                this.banner.setContent({
                    house: {
                        houseName: r._name,
                        houseId: r.houseId
                    }
                }), this._displayHeader(!0)
            } else this._displayHeader(!1);
            this.instanceContainer.clearContent();
            for (var l = 0; l < a.housesData.length; l++) n(a.housesData[l], a.interactiveData);
            i()
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(464),
        s = i(86),
        c = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype._setupDom = function() {
        this.banner = this.header.appendChild(new r);
        var e = this.entryList;
        this.instanceContainer = e.createChild("div"), this._addCancel()
    }
}
