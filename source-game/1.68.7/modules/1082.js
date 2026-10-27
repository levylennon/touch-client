function(e, t, i) {
    function n(e) {
        function t(e, t) {
            this.deltaX = e.x - t.left - this.picker.x, this.deltaY = e.y - t.top - this.picker.y, this.box = t
        }

        function i() {
            f.emit("colorChanged", f.getCurrentColor())
        }

        function n(e) {
            var t = e.x - this.box.left,
                n = e.y - this.box.top,
                o = "x: " + e.x + ", y: " + e.y;
            return o += ", boxLeft: " + this.box.left + ", boxTop: " + this.box.top, isNaN(t) ? void console.error(new Error("select: x is nan with " + o)) : isNaN(n) ? void console.error(new Error("select: y is nan with " + o)) : (f._cursorMove({
                x: t,
                y: n
            }, this.box, this.panelType), void i())
        }

        function r(e) {
            var t = e.x - this.box.left - this.deltaX,
                i = e.y - this.box.top - this.deltaY,
                n = "x: " + e.x + ", y: " + e.y;
            return n += ", boxLeft: " + this.box.left + ", boxTop: " + this.box.top, n += ", deltaX: " + this.deltaX + ", deltaY: " + this.deltaY, isNaN(t) ? void console.error(new Error("move: x is nan with " + n)) : isNaN(i) ? void console.error(new Error("move: y is nan with " + n)) : void f._cursorMove({
                x: t,
                y: i
            }, this.box, this.panelType)
        }
        var p = void 0 === e;
        e = e || {};
        var f = this;
        l.call(this, "div", {
            className: "ColorPicker"
        }), this.hexSelector = this.appendChild(new d), this.hexSelector.on("confirm", function(e) {
            var t = u.hexToRgb(e);
            t && (f.setCurrentColor([t.r, t.g, t.b]), i())
        }), this.params = {
            tintWidth: e.tintWidth || 162,
            tintHeight: e.tintHeight || 110,
            lumWidth: e.lumWidth || 16,
            lumHeight: e.lumHeight || 110,
            showHexButton: Boolean(e.showHexButton)
        }, this.currentTint = [255, 0, 0],
        this.currentColor = [255, 0, 0],
        this.tintWrapper = this.createChild("div", {  className: "tintWrapper" }), 
        this.tintCanvas = this.tintWrapper.createChild("canvas", { className: "tintCanvas"  }), 
        this.tintCanvas.rootElement.width = this.params.tintWidth,
        this.tintCanvas.rootElement.height = this.params.tintHeight,
        o(this.tintCanvas),
        a(this.tintCanvas),
        this.tintCanvas.panelType = "tint",
        this.tintCanvas.on("slideStart", t),
        this.tintCanvas.on("slide", r),
        this.tintCanvas.on("slideEnd", i),
        this.tintCanvas.on("tapstart", t),
        this.tintCanvas.on("tap", n),
        this.tintCanvas.on("doubletap", this.openHexInput.bind(this)),
        this.tintPicker = this.tintWrapper.createChild("div", {
            className: "tintPicker"
        }),
        this.tintCanvas.picker = this.tintPicker, this.lumWrapper = this.createChild("div", {
            className: "lumWrapper"
        }),
        this.lumCanvas = this.lumWrapper.createChild("canvas", {
            className: "lumCanvas"
        }),
        this.lumCanvas.rootElement.width = 1,
        this.lumCanvas.rootElement.height = this.params.lumHeight,
        o(this.lumCanvas),
        a(this.lumCanvas),
        this.lumCanvas.panelType = "lum",
        this.lumCanvas.on("slideStart", t),
        this.lumCanvas.on("slide", r),
        this.lumCanvas.on("slideEnd", i),
        this.lumCanvas.on("tapstart", t),
        this.lumCanvas.on("tap", n);
        var b = this.lumPicker = this.lumWrapper.createChild("div", { className: "lumPicker" });
        if (this.lumCanvas.picker = b, b.dark = b.createChild("div", {
                className: ["triangle", "black"]
            }), b.bright = b.createChild("div", {
                className: ["triangle", "white"]
            }), this.lumWrapper.toggleClassName("lumWrapperWithHexButton", this.params.showHexButton), this.params.showHexButton) {
            var m = new s({
                className: ["button", "hexColorBtn"],
                text: "#",
                tooltip: c("ui.charcrea.hexColorTip")
            }, function() {
                f.openHexInput()
            });
            this.lumWrapper.appendChild(m)
        }
        p || this.updateDimensions(this.params.tintWidth + this.params.lumWidth + h, this.params.tintHeight, this.params.lumWidth)
    }
    i(1083);
    var o = i(69),
        a = i(63),
        r = i(56)
        .inherits,
        s = i(86),
        c = i(17)
        .getText,
        l = i(72),
        d = i(1084),
        u = i(475),
        p = 40,
        h = 10,
        f = 40,
        b = 20,
        m = 1e-5,
        M = 127.5,
        g = [
            [255, 0, 0],
            [255, 255, 0],
            [0, 255, 0],
            [0, 255, 255],
            [0, 0, 255],
            [255, 0, 255],
            [255, 0, 0]
        ];
    r(n, l), e.exports = n, n.prototype.updateDimensions = function(e, t, i) {
        this.params.lumWidth = ~~i || ~~Math.min(e / 5, p);
        var n = this.params.showHexButton ? b : 0,
            o = ~~e - this.params.lumWidth - h - n;
        o = o > 0 ? o : this.params.tintWidth, this.params.tintWidth = o;
        var a = ~~t;
        this.params.tintHeight = a,
        this.tintCanvas.rootElement.width = o,
        this.tintCanvas.rootElement.height = a,
        this.tintCanvas.setStyles({
            width: o + "px",
            height: a + "px"
        }), this.params.lumHeight = this.params.showHexButton ? a - f : a, this.lumCanvas.rootElement.height = this.params.lumHeight, this.lumCanvas.setStyles({
            width: this.params.lumWidth + "px",
            height: this.params.lumHeight + "px"
        }), this.lumPicker.setStyle("width", this.params.lumWidth + "px"), this.fillTint(), this.updateLuminosity(), this.setCurrentColor(this.currentColor)
    }, n.prototype._lumCoordinatesToColor = function(e) {
        var t = e / (this.params.lumHeight / 2),
            i = t < 1 ? [255, 255, 255] : this.currentTint,
            n = t < 1 ? this.currentTint : [0, 0, 0],
            o = t % 1;
        return [i[0] * (1 - o) + n[0] * o, i[1] * (1 - o) + n[1] * o, i[2] * (1 - o) + n[2] * o]
    }, n.prototype._tintCoordinatesToColor = function(e, t) {
        var i = this.params.tintWidth / (g.length - 1),
            n = Math.floor(e / i),
            o = g[n],
            a = g[n + 1];
        if (void 0 === o || null === o) return console.error(new Error("CP: topColor is missing with x: " + e + ", y: " + t + ", tintWidth: " + this.params.tintWidth)), [255, 0, 0];
        if (void 0 === a || null === a) return console.error(new Error("CP: topColorNext is missing with x: " + e + ", y: " + t + ", tintWidth: " + this.params.tintWidth)), [255, 0, 0];
        var r = o[0],
            s = a[0],
            c = o[1],
            l = a[1],
            d = o[2],
            u = a[2],
            p = e / i % 1,
            h = r * (1 - p) + s * p,
            f = c * (1 - p) + l * p,
            b = d * (1 - p) + u * p,
            m = t / this.params.tintHeight,
            _ = h * (1 - m) + M * m,
            A = f * (1 - m) + M * m,
            O = b * (1 - m) + M * m;
        return [_, A, O]
    }, n.prototype._colorToTintAndLum = function(e) {
        var t = this.params.tintWidth,
            i = this.params.tintHeight,
            n = this.params.lumHeight,
            o = n / 2,
            a = Math.min.apply(Math, e),
            r = Math.max.apply(Math, e),
            s = e.indexOf(a),
            c = e.indexOf(r);
        if (s === c) {
            var l = (1 - a / 255) * n - m;
            return [0, i - m, l]
        }
        var d;
        d = 0 !== s && 0 !== c ? 0 : 1 !== s && 1 !== c ? 1 : 2;
        var u, p = e[c],
            h = e[d],
            f = e[s],
            b = [
                [null, 3, 2],
                [4, null, 5],
                [1, 0, null]
            ],
            _ = b[s][d],
            A = (h - f) / (p - f),
            O = _ % 2 ? 1 - A : A,
            v = t / (g.length - 1),
            y = v * (_ + O) % t,
            z = (f + p) / 255;
        u = z <= 1 ? 255 * f / M / (p + f) : (255 * p - 65025) / (M * (p + f) - 65025);
        var w = u * i,
            T = o + (1 - z) / 2 * n;
        return [y, w, T]
    }, n.prototype.setCurrentColor = function(e) {
        var t = this._colorToTintAndLum(e);
        this.cursorMoveTo(t[0], t[1], "tint", !0), this.cursorMoveTo(0, t[2], "lum", !0)
    }, n.prototype.updateLuminosity = function() {
        for (var e = this.lumCanvas.rootElement, t = e.getContext("2d"), i = t.getImageData(0, 0, e.width, e.height), n = 0; n < this.params.lumHeight; n++) {
            var o = this._lumCoordinatesToColor(n),
                a = 4 * n;
            i.data[a] = Math.round(o[0]), i.data[a + 1] = Math.round(o[1]), i.data[a + 2] = Math.round(o[2]), i.data[a + 3] = 255
        }
        t.putImageData(i, 0, 0)
    }, n.prototype.cursorMoveTo = function(e, t, i, n) {
        this._setPickerPosition(this[i + "Picker"], e, t), "tint" === i && (this.currentTint = this._tintCoordinatesToColor(e, t), this.updateLuminosity()), this.currentColor = this._lumCoordinatesToColor(this.lumPicker.y), this.hexSelector.updateValue(this.getCurrentColor()
            .hex.slice(1)), n || this.emit("newColor", this.getCurrentColor())
    }, n.prototype.randomize = function(e, t) {
        var i = this[e + "Canvas"].rootElement,
            n = Math.random() * i.width,
            o = Math.random() * i.height;
        this.cursorMoveTo(n, o, e, t)
    }, n.prototype.generateRandomColor = function(e) {
        this.randomize("tint", e), this.randomize("lum", e)
    }, n.prototype._cursorMove = function(e, t, i) {
        var n = this[i + "Canvas"].rootElement,
            o = "x: " + e.x + ", y: " + e.y + ", panel: " + i;
        o += "width: " + t.width + ", height: " + t.height, o += "panelW: " + n.width + ", panelH: " + n.height;
        var a = e.x,
            r = e.y,
            s = n.width / t.width,
            c = n.height / t.height;
        return a = Math.round(a * s), r = Math.round(r * c), a = Math.max(0, Math.min(a, n.width - 1)), r = Math.max(0, Math.min(r, n.height - 1)), isNaN(a) ? void console.error(new Error("posX is nan with " + o)) : isNaN(r) ? void console.error(new Error("posY is nan with " + o)) : void this.cursorMoveTo(a, r, i)
    }, n.prototype.fillTint = function() {
        for (var e = this.tintCanvas.rootElement, t = e.getContext("2d"), i = t.getImageData(0, 0, e.width, e.height), n = 0; n < this.params.tintWidth; n++)
            for (var o = 0; o < this.params.tintHeight; o++) {
                var a = this._tintCoordinatesToColor(n, o),
                    r = 4 * (o * this.params.tintWidth + n);
                i.data[r] = Math.round(a[0]), i.data[r + 1] = Math.round(a[1]), i.data[r + 2] = Math.round(a[2]), i.data[r + 3] = 255
            }
        t.putImageData(i, 0, 0)
    }, n.prototype.getCurrentColor = function() {
        var e = this.currentColor,
            t = [Math.round(e[0]), Math.round(e[1]), Math.round(e[2])];
        return {
            rgb: t,
            hex: u.colorArrayToHexa(t)
        }
    }, n.prototype._setPickerPosition = function(e, t, i) {
        if (e.setStyle("webkitTransform", "translate3d(" + t + "px," + i + "px,0)"), e.x = t, e.y = i, e === this.lumPicker) {
            var n = i / this.params.lumHeight > .5 ? 1 : 0;
            e.bright.setStyle("opacity", n), e.dark.setStyle("opacity", 1 - n)
        }
    }, n.prototype.reset = function() {
        this._setPickerPosition(this.tintPicker, 0, 0), this.currentTint = this._tintCoordinatesToColor(0, 0), this.updateLuminosity(), this._setPickerPosition(this.lumPicker, 0, this.params.lumHeight / 2), this.currentColor = this._lumCoordinatesToColor(this.lumPicker.y)
    }, n.prototype.getCursorPosition = function(e) {
        var t = this[e + "Picker"];
        return {
            x: t.x,
            y: t.y
        }
    }, n.prototype.openHexInput = function() {
        var e = this.getCurrentColor()
            .hex.slice(1);
        this.hexSelector.open({
            x: 0,
            y: 0,
            defaultValue: e
        })
    }
}
