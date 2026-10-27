function(e, t, i) {
    function n() {
        M.call(this, "div", {
            className: "numberInputPad",
            hidden: !0
        }), this.digits = [], this.overlay = window.gui.gameGuiContainer.createChild("div", {
            className: "numberPadOverlay",
            hidden: !0
        })
    }

    function o() {
        this.numberInput._tapOnKey(this.id)
    }

    function a() {
        this.numberInput._tapOnDisplay(this.id)
    }
    i(796);
    var r, s = i(86),
        c = i(86)
        .DofusButton,
        l = i(54)
        .dimensions,
        d = i(17)
        .getText,
        u = i(570),
        p = i(16),
        h = i(56)
        .inherits,
        f = i(13),
        b = i(63),
        m = i(588),
        M = i(72),
        g = i(66),
        _ = f.MAX_NUMBER,
        A = _.toString()
        .length,
        O = {
            DISPLAY: 0,
            INSERT: 1,
            EDIT: 2
        },
        v = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "BS", "0", "000", "CLR", "ENTER"],
        y = {
            BS: "@",
            ENTER: "@ENTER",
            CLR: "CLR"
        },
        z = 10;
    h(n, M), e.exports = n, n.prototype.open = function(e, t, i, n) {
        t = t || "", this.keyboard || this._createContent(), this.inputBox = e, this.title.setText(t), this.minValue = void 0 !== i ? i : 0, this.maxValue = void 0 !== n ? n : _, this.setValue(e.getValue()), this._switchMode(O.DISPLAY), this._show()
    }, n.prototype._show = function() {
        if (this.overlay.show(), this.setStyle("opacity", 0), this.show(), !r) {
            var e = this.digitBoxes[0].rootElement;
            r = e.offsetTop + e.offsetHeight / 2
        }
        var t = g(this.inputBox.rootElement),
            i = g(this.rootElement),
            n = t.right - i.width,
            o = t.top + t.height / 2 - r;
        n = Math.min(Math.max(n, z), l.screenWidth - z - i.width), o = Math.min(Math.max(o, z), l.screenHeight - z - i.height), this.setStyles({
            left: n + "px",
            top: o + "px"
        }), this.setStyle("opacity", 1), this.rootElement.focus()
    }, n.prototype._createContent = function() {
        var e = this;
        window.gui.on("disconnect", function() {
            e.hide()
        }), this.on("hide", function() {
            e.overlay.hide()
        });
        var t = this.createChild("div", {
            className: "titleBar"
        });
        u(this, {
            grip: t,
            isFullScreen: !0
        }), this.title = t.createChild("div", {
            className: "title"
        });
        var i = t.appendChild(new s({
            className: "closeButton",
            scaleOnPress: !0
        }));
        i.on("tap", function() {
            e.hide()
        }), this.digitBoxes = [], this.digitElements = [], this.separators = [];
        for (var n = this.createChild("div", {
                className: "displayContainer"
            }), r = d("ui.common.numberSeparator") || ".", l = 0; l < A; l++) {
            var p = A - 1 - l,
                h = p % 3 === 2;
            h && (this.separators[p + 1] = n.createChild("div", {
                className: "separator",
                text: r
            }));
            var f = this.digitBoxes[p] = n.createChild("div", {
                className: "digitBox"
            });
            h && f.addClassNames("groupStart"), f.id = p, f.numberInput = this, b(f), f.on("tap", a), this.digitElements[p] = f.createChild("div", {
                className: "digit"
            })
        }
        this.keyMap = {};
        var m = this.createChild("div", {
                className: "keyboardContainer"
            }),
            M = this.keyboard = m.createChild("div", {
                className: "keyboard"
            });
        for (l = 0; l < v.length; l++) {
            var g = v[l],
                _ = y[g] || g,
                O = this.keyMap[g] = new c(_, {
                    className: ["keyboardKey", "key" + g]
                });
            "@" === _[0] && (_.length > 1 && O.createChild("div", {
                text: _.substr(1)
            }), O.createChild("div", {
                className: "keyIcon"
            })), M.appendChild(O), O.id = g, O.numberInput = this, O.on("tap", o)
        }
    };
    var w = /[^0-9]/g;
    n.prototype.setValue = function(e) {
        "string" == typeof e ? (e = e.replace(w, "")
            .toString(), e || (e = "0")) : e = e.toFixed(), e.length >= A && (e = e.substr(0, A));
        for (var t = A - 1; t >= e.length; t--) this._setDigit(t, "");
        for (var i = 0; i < e.length; i++) this._setDigit(t, e[i]), t--;
        "0" === e && this._switchMode(O.DISPLAY)
    }, n.prototype._getValue = function() {
        for (var e = "", t = A - 1; t >= 0; t--) e += this.digits[t];
        return parseInt(e, 10)
    }, n.prototype._enableKey = function(e, t) {
        t ? this.keyMap[e].enable() : this.keyMap[e].disable()
    }, n.prototype._switchMode = function(e) {
        e !== this.mode && (this.mode === O.EDIT && e !== O.EDIT && this._setCursor(-1), this.mode = e, this._enableKey("BS", this.mode === O.INSERT), this._enableKey("0", this.mode !== O.DISPLAY), this._enableKey("000", this.mode !== O.DISPLAY))
    }, n.prototype._setCursor = function(e) {
        this.cursor >= 0 && this.digitBoxes[this.cursor].delClassNames("highlight"), this.cursor = e, this.cursor >= 0 && this.digitBoxes[e].addClassNames("highlight")
    }, n.prototype._tapOnDisplay = function(e) {
        this.mode !== O.EDIT && this._switchMode(O.EDIT), this._setCursor(e)
    }, n.prototype._tapOnKey = function(e) {
        switch (e) {
            case "ENTER":
                return this._doEnter();
            case "CLR":
                return this._doClear();
            case "000":
                return this._do000();
            case "BS":
                return this._doBackspace();
            default:
                return this._doDigit(e)
        }
    }, n.prototype._doEnter = function() {
        this._switchMode(O.DISPLAY);
        var e = this._getValue();
        return e > this.maxValue ? m.showNotification(d("tablet.common.maxValue", p.intToString(this.maxValue)), this.keyMap.ENTER) : e < this.minValue ? m.showNotification(d("tablet.common.minValue", p.intToString(this.minValue)), this.keyMap.ENTER) : (this.inputBox.setValue(e, !0), void this.hide())
    }, n.prototype._doClear = function() {
        this.setValue("0")
    }, n.prototype._doBackspace = function() {
        if (this.mode === O.INSERT) {
            var e = Math.floor(this._getValue() / 10);
            this.setValue(e)
        }
    }, n.prototype._do000 = function() {
        for (var e = 0; e < 3; e++) this._doDigit("0")
    }, n.prototype._doDigit = function(e) {
        switch (this.mode) {
            case O.DISPLAY:
                if ("0" === e && 0 === this._getValue()) return;
                return this.setValue(e), this._switchMode(O.INSERT);
            case O.INSERT:
                if ("" !== this.digits[A - 1]) return;
                return this.setValue(10 * this._getValue() + ~~e);
            case O.EDIT:
                return this._setDigit(this.cursor, e), this._fixZeroes(this.cursor, e), 0 === this.cursor ? this._switchMode(O.INSERT) : this._setCursor(this.cursor - 1)
        }
    }, n.prototype._setDigit = function(e, t) {
        this.digitElements[e].setText(t), this.digits[e] = t, this.separators[e] && this.separators[e].toggleDisplay("" !== t)
    }, n.prototype._fixZeroes = function(e, t) {
        if (0 !== e) {
            for (var i = A - 1; i >= e; i--) {
                var n = this.digits[i];
                if ("0" !== n && "" !== n) break;
                "0" === n && this._setDigit(i, "")
            }
            if ("0" !== t)
                for (i = e - 1; i >= 0 && "" === this.digits[i]; i--) this._setDigit(i, "0")
        }
    }
}
