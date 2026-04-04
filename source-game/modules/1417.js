function(e, t, i) {
    function n() {
        function e() {
            return window.isoEngine.mapRenderer.isCurrentMapPaddockInstance(t._currentValue) ? void window.dofus.sendMessage("FarmSelectionMessageRequest", {
                farmInstanceId: t._currentValue
            }) : l.close(this.id)
        }
        a.call(this, {
            className: "SwitchFarmInstanceWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 350,
                height: 170
            }
        });
        var t = this;
        this._currentValue = 0, this._instanceSelector = this.windowBody.appendChild(new c({
            className: "instanceSelector"
        })), this._instanceSelector.on("change", t._selectorChangeHandler.bind(this));
        var i = this.windowBody.createChild("div", {
                className: "buttonContainer"
            }),
            n = i.appendChild(new r(s("ui.common.ok")));
        n.on("tap", e), this.on("open", function() {
            var e = window.isoEngine.mapRenderer.getPaddocksInstanceProperties(),
                i = window.isoEngine.mapRenderer.getCurrentPaddockInstanceProperties(),
                n = i.guildInfo ? i.guildInfo.guildName : "?",
                o = window.gui.playerData.isAbleToSeeId();
            o && (n += " (" + i.farmId + ")"), t._instanceSelector.addOption(n, i.farmId), t._currentValue = e[0].farmId;
            for (var a = 0; a < e.length; a++) {
                var r = e[a];
                if (i.farmId !== r.farmId) {
                    var s = r.guildInfo ? r.guildInfo.guildName : "?";
                    o && (s += " (" + r.farmId + ")"), t._instanceSelector.addOption(s, r.farmId)
                }
            }
        }), this.on("close", function() {
            t._instanceSelector.clearContent(), t._currentValue = 0
        }), window.connectionManager.on("FarmSelectionMessage", function() {
            t.close()
        })
    }
    i(1418);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(86)
        .DofusButton,
        s = i(17)
        .getText,
        c = i(945),
        l = i(52);
    o(n, a), e.exports = n, n.prototype._selectorChangeHandler = function(e) {
        this._currentValue = e
    }
}
