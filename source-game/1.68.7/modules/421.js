function(e, t, i) {
    function n() {
        var e = this;
        p.call(this, "div", {
            className: "minMaxSelector",
            hidden: !0
        });
        var t = this.createChild("div", {
                className: "topRow"
            }),
            i = this.createChild("div", {
                className: "botRow"
            });
        this.decrButton = t.appendChild(new s({
            className: ["simpleButton", "arrow", "decrButton"],
            repeatDelay: f
        })), this.numberInput = t.appendChild(new l({
            className: "numberInput"
        })), this.incrButton = t.appendChild(new s({
            className: ["simpleButton", "arrow", "incrButton"],
            repeatDelay: f
        })), this.minButton = i.appendChild(new c(a("ui.common.minWord"), {
            className: "minButton"
        })), this.maxButton = i.appendChild(new c(a("ui.common.maxWord"), {
            className: "maxButton"
        })), this.close = i.appendChild(new s({
            className: ["simpleButton", "closeBtn"]
        })), this.confirm = i.appendChild(new s({
            className: ["simpleButton", "confirmBtn"]
        })), this.currentValue = 0, this.minButton.on("tap", function() {
            e.currentValue = e.min, e.numberInput.setValue(e.currentValue)
        }), this.maxButton.on("tap", function() {
            e.currentValue = e.max, e.numberInput.setValue(e.currentValue)
        }), this.decrButton.on("tap", function() {
            e.currentValue <= e.min || (e.currentValue--, e.numberInput.setValue(e.currentValue))
        }), this.incrButton.on("tap", function() {
            e.currentValue >= e.max || (e.currentValue++, e.numberInput.setValue(e.currentValue))
        }), this.confirm.on("tap", function() {
            e.confirm.disable(), e.closeMinMax(), e.emit("confirm", e.currentValue)
        }), this.close.on("tap", function() {
            e.closeMinMax()
        }), this.numberInput.on("change", function(t) {
            e.currentValue = t
        })
    }
    i(422);
    var o = i(67)
        .getElementPositionAt,
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(86),
        c = s.DofusButton,
        l = i(423),
        d = i(13),
        u = i(22),
        p = i(72),
        h = d.MAX_NUMBER,
        f = 100,
        b = {
            opacity: 0,
            webkitTransform: "scale(0.8)"
        },
        m = {
            opacity: 1,
            webkitTransform: "scale(1)"
        };
    r(n, p), e.exports = n, n.prototype.position = function(e, t) {
        var i = o(this, e, t);
        this.setStyles({
            left: i.x + "px",
            top: i.y + "px"
        })
    }, n.prototype.open = function(e) {
        function t() {
            delete i.openTweener, i.emit("opened")
        }
        var i = this;
        e = e || {}, this.min = e.min || 0, this.max = e.max || h, this.confirm.enable();
        var n;
        return n = void 0 !== e.defaultValue ? Math.max(this.min, Math.min(this.max, e.defaultValue)) : this.min, void 0 !== e.placeholder && void 0 === e.defaultValue ? (this.numberInput.setPlaceholder(e.placeholder), this.currentValue = "") : this.currentValue = n, this.numberInput.setValue(this.currentValue), this.numberInput.minValue = this.min, this.numberInput.maxValue = this.max, this.show(), e.hasOwnProperty("x") && e.hasOwnProperty("y") && this.position(e.x, e.y), this.setStyles(b), this.openTweener ? (this.openTweener.cancel(), t()) : void(this.openTweener = u.tween(this, m, {
            time: 150,
            delay: 0,
            easing: "ease-out"
        }, t))
    }, n.prototype.openAround = function(e, t) {
        var i = e.rootElement.getBoundingClientRect();
        t.x = i.left, t.y = i.top, this.open(t)
    }, n.prototype.closeMinMax = function() {
        function e() {
            delete t.closeTweener, t.hide(), t.emit("closed"), t.numberInput.rootElement.blur()
        }
        var t = this;
        return this.closeTweener ? (this.closeTweener.cancel(), e()) : void(this.closeTweener = u.tween(this, b, {
            time: 150,
            delay: 0,
            easing: "ease-out"
        }, e))
    }
}
