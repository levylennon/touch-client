function(e, t, i) {
    function n(e, t, i) {
        a.call(this, e, t);
        var n = this;
        this._highLightsListCb = null, this._gondolaListCb = null, i.on("shopHighLightsListSuccess", function(e) {
            n._highLightsListCb(null, e.popups), n._highLightsListCb = null
        }), i.on("shopHighLightsListError", function() {
            n._highLightsListCb(new Error("shopHighLightsListError")), n._highLightsListCb = null
        }), i.on("articlesListByGondolaHeadSuccess", function(e) {
            n._gondolaListCb(null, e.gondolaHead), n._gondolaLightsListCb = null
        }), i.on("articlesListByGondolaHeadError", function() {
            n._gondolaListCb(new Error("articlesListByGondolaHeadError")), n._gondolaListCb = null
        })
    }
    var o = i(56)
        .inherits,
        a = i(165),
        r = i(14),
        s = r();
    e.exports = n, o(n, a), n.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Shop", {})
    }, n.prototype.type = {
        IMAGE: "IMAGE",
        CAROUSEL: "CAROUSEL",
        POPUP: "POPUP"
    }, n.prototype.getHighLightsList = function(e, t) {
        if (!this._highLightsListCb) {
            var i = "shopHighLightsListRequest";
            this._highLightsListCb = t;
            var n = {
                type: e
            };
            s.dofus.send(i, n)
        }
    }, n.prototype.getGondolaList = function(e, t) {
        if (!this._gondolaListCb) {
            var i = "articlesListByGondolaHeadRequest";
            this._gondolaListCb = t;
            var n = {
                gondolaHeadId: e,
                size: 2,
                page: 1
            };
            s.dofus.send(i, n)
        }
    }
}
