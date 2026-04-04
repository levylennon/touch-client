function(e, t) {
    function i() {
        a = Date.now()
    }

    function n() {
        a = 0
    }

    function o() {
        return 0 !== a && Date.now() - a < r
    }
    var a = 0,
        r = 500,
        s = "dom";
    t["new"] = function(e) {
        var t = this,
            r = e.split(".");
        if (r[0] === s) {
            var c = r[1];
            if (c && !this.domListeners[c]) switch (c) {
                case "touchstart":
                    var l = function(e) {
                            o() || 1 !== e.which || t.emit("dom.touchstart", e)
                        },
                        d = function(e) {
                            i(), t.emit("dom.touchstart", e)
                        };
                    this.domListeners.touchstart = {
                        mousedown: l,
                        touchstart: d
                    }, this.rootElement.addEventListener("mousedown", l), this.rootElement.addEventListener("touchstart", d);
                    break;
                case "touchmove":
                    var u = function(e) {
                            a || 1 !== e.which || t.emit("dom.touchmove", e)
                        },
                        p = function(e) {
                            t.emit("dom.touchmove", e)
                        };
                    this.domListeners.touchmove = {
                        mousemove: u,
                        touchmove: p
                    }, this.rootElement.addEventListener("mousemove", u), this.rootElement.addEventListener("touchmove", p);
                    break;
                case "touchend":
                    var h = function(e) {
                            return o() || 1 !== e.which ? void n() : void t.emit("dom.touchend", e)
                        },
                        f = function(e) {
                            i(), t.emit("dom.touchend", e), e.preventDefault()
                        };
                    this.domListeners.touchend = {
                        mouseup: h,
                        touchend: f
                    }, this.rootElement.addEventListener("mouseup", h), this.rootElement.addEventListener("touchend", f);
                    break;
                default:
                    var b = function(i) {
                        t.emit(e, i)
                    };
                    this.domListeners[c] = b, this.rootElement.addEventListener(c, b)
            }
        }
    }, t.remove = function(e) {
        if (0 === this.listeners(e)
            .length) {
            var t = e.split(".");
            if (t[0] === s) {
                var i = t[1],
                    n = this.domListeners[i];
                if (n) {
                    if (null !== n && "object" == typeof n) {
                        for (var o in n) {
                            var a = n[o];
                            this.rootElement.removeEventListener(o, a)
                        }
                        return void delete this.domListeners[i]
                    }
                    this.rootElement.removeEventListener(i, n), delete this.domListeners[i]
                }
            }
        }
    }, t.destroy = function() {
        for (var e in this.domListeners) {
            var t = this.domListeners[e];
            if (null === t || "object" != typeof t) this.rootElement.removeEventListener(e, t);
            else
                for (var i in t) {
                    var n = t[i];
                    this.rootElement.removeEventListener(i, n)
                }
        }
        this.domListeners = {}
    }
}
