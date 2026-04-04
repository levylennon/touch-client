function(e, t) {
    var i = !1;
    t.start = function() {
        if (window.powerManagement) return i ? console.warn("PowerManager already active") : void window.powerManagement.dim(function() {
            i = !0
        }, function(e) {
            console.warn("PowerManager failed to acquire wakelock", e)
        })
    }, t.stop = function() {
        if (window.powerManagement) return i ? void window.powerManagement.release(function() {
            i = !1
        }, function(e) {
            console.warn("PowerManager failed to release wakelock", e)
        }) : console.warn("PowerManager was not active")
    }
}
