function(e, t, i) {
    function n() {
        window.dofus.connectionManager.send("bakSoftToHardCurrentRateRequest"), window.dofus.connectionManager.send("bakHardToSoftCurrentRateRequest")
    }

    function o() {
        var e = window.dofus.connectionManager,
            i = window.gui;
        i.on("connected", function() {
            window.gui.playerData.isShopDisabled() || (n(), r.setInterval(n, l))
        }), e.on("bakSoftToHardCurrentRateSuccess", function(e) {
            null !== s && s === e.rate || (s = e.rate, t.emit("computedSoftPricesChange"))
        }), e.on("bakHardToSoftCurrentRateSuccess", function(e) {
            null !== c && c === e.rate || (c = e.rate, t.emit("computedHardPricesChange"))
        }), e.on("bakSoftToHardCurrentRateError", function() {
            s = null, t.emit("canNotComputeSoftPrices")
        }), e.on("bakHardToSoftCurrentRateError", function() {
            c = null, t.emit("canNotComputeHardPrices")
        })
    }
    var a = i(36)
        .EventEmitter,
        r = i(30),
        s = null,
        c = null,
        t = e.exports = new a,
        l = 29e4;
    t.initialize = function() {
        o()
    }, t.isRateAvailable = function() {
        return null !== s && null !== c
    }, t.computeHardPrice = function(e) {
        return c || 0 === c ? Math.ceil(e / c) : null
    }, t.computeSoftPrice = function(e) {
        return s || 0 === s ? Math.ceil(e * s) : null
    }
}
