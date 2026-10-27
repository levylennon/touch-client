function(e, t, i) {
    function n() {
        s.call(this, {
            title: o("ui.common.feed"),
            className: "FeedWindow",
            positionInfo: {
                right: 315,
                bottom: 30,
                width: 400,
                height: 510
            }
        }), this.feedingBox = new r(this), this.once("open", function() {
            this._createDom()
        }), this.on("open", function(e) {
            this.feedingBox.update(e)
        }), this.on("close", function() {
            this.feedingBox.removeFilter()
        }), this.on("closed", function() {
            this.feedingBox.unloadContent()
        }), this.on("slot-tap", function(e) {
            this.feedingBox.selectItem(e.itemInstance)
        }), this.on("itemQuantity", function(e) {
            this.feedingBox.selectItem(e)
        }), this.on("itemRemoved", function() {
            this.feedingBox.reset()
        })
    }
    i(1243);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(1244),
        s = i(70);
    a(n, s), n.prototype._createDom = function() {
        this.feedingBox.init(this.windowBody)
    }, e.exports = n
}
