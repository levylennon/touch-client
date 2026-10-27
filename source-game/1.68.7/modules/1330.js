function(e, t, i) {
    function n(e, t) {
        a.call(this, {
            window: {
                className: "MarketWindow",
                positionInfo: {
                    top: "c",
                    left: "c",
                    width: "100%",
                    height: "100%"
                }
            }
        }), this.addTab("shop", new r(e, t)), this.on("open", function(e) {
            window.gui.playerData.characters.mainCharacterId && this.tabs.openTab(e.tabId, e.tabParams, {
                delayOpenedEvent: !0,
                forceOpen: !0
            })
        })
    }
    i(1331);
    var o = i(56)
        .inherits,
        a = i(1045),
        r = i(1332);
    o(n, a), e.exports = n
}
