function(e, t, i) {
    function n() {
        window.navigationbar && window.navigationbar.hideNavigationBar()
    }

    function o(e) {
        if (e) {
            var t = window.innerHeight,
                i = window.outerHeight;
            g = e.keyboardHeight * (t / i)
        }
    }

    function a() {
        _ = !0, h.refreshResizableBody(), h.emit("show", g)
    }
    var r = i(7),
        s = i(36),
        c = window.cordova,
        l = i(23),
        d = l.events,
        u = i(72),
        p = i(54)
        .dimensions,
        h = new s;
    e.exports = h;
    var f = !0,
        b = !1,
        m = !1,
        M = new u(document.getElementById("resizableBody")),
        g = 0,
        _ = !1;
    h.show = function() {
        r.isPhoneGap && c.plugins.Keyboard.show()
    }, h.hide = function() {
        "INPUT" === document.activeElement.tagName && document.activeElement.blur(), r.isPhoneGap && (c.plugins.Keyboard.close(), r.isAndroid && M.setStyle("height", "")), n()
    }, h.disableFocusOnInput = function(e) {
        r.isPhoneGap && (m = e)
    }, h.disableNativeScroll = function(e) {
        c.plugins.Keyboard.disableScroll(e)
    }, h.disableScroll = function(e) {
        this.disableNativeScroll(e), this.pauseScrollAndroid(e), this.resetScrollAndroid(), b = e, M.setStyle("height", ""), this.refreshResizableBody()
    }, h.pauseVirtualScroll = function(e) {
        r.isPhoneGap && M.setStyle("overflowY", e ? "hidden" : "auto")
    }, h.pauseScrollAndroid = function(e) {
        r.isAndroid && this.pauseVirtualScroll(e)
    }, h.resetScrollAndroid = function() {
        r.isPhoneGap && r.isAndroid && (M.rootElement.scrollLeft = 0, M.rootElement.scrollTop = 0)
    }, h.hideKeyboardAccessoryBar = function(e) {
        r.isPhoneGap && c.plugins.Keyboard.hideKeyboardAccessoryBar(e)
    }, h.isOpened = function() {
        return _
    }, h.getHeight = function() {
        return g || .6 * p.screenHeight
    }, h.setAutomaticHide = function(e) {
        f = Boolean(e)
    }, h.refreshResizableBody = function() {
        if (r.isAndroid && !b) {
            if (!_) return void M.setStyle("height", "");
            var e = window.innerHeight,
                t = e - g;
            M.setStyle("height", t + "px");
            var i = document.activeElement;
            if ("INPUT" === i.tagName) {
                M.rootElement.scrollLeft = 0;
                var n = i.getBoundingClientRect()
                    .bottom + M.rootElement.scrollTop,
                    o = M.rootElement.getBoundingClientRect()
                    .height;
                m || M.rootElement.scrollTo(0, n - o)
            }
        }
    }, document.body.addEventListener(d.end, function(e) {
        "INPUT" === document.activeElement.tagName && "INPUT" !== e.target.tagName && f && h.hide()
    }, !1), r.isPhoneGap && (window.addEventListener("native.keyboardshow", function(e) {
        o(e), a()
    }), window.addEventListener("orientationchange", function() {
        _ = !1
    }), window.addEventListener("native.keyboardhide", function() {
        _ = !1, h.refreshResizableBody();
        var e = "INPUT" === document.activeElement.tagName && document.activeElement;
        setTimeout(function() {
            n();
            var t = "INPUT" === document.activeElement.tagName;
            t && e !== document.activeElement || (h.emit("hide"), e && document.activeElement.blur())
        }, 0)
    }))
}
