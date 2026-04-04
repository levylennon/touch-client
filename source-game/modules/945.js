function(e, t, i) {
    function n(e) {
        function t(e) {
            i._setValue(e, !1)
        }
        e = e || {}, c.call(this, "div", {
            className: "Selector"
        }), this.addClassNames(e.className), this.removeWords = e.removeWords ? e.removeWords.split("|") : null;
        var i = this;
        this._valuePairs = [], this._currentValue = null, this._isEnabled = !0, this._dropDownSelector = this.appendChild(new l({
            className: ["selectorContent"],
            scaleOnPress: !1,
            text: " "
        })), r(this._dropDownSelector, o), this.buttonOpen = this.createChild("div", {
            className: "buttonOpen"
        }), this._dropDownSelector.on("tap", function() {
            if (null !== i._currentValue) {
                var e = i._getValueIndex(i._currentValue);
                window.gui.dropDown.setupDropDown(this, i._getValuePairs(), e, t)
            }
        })
    }

    function o() {
        return this._tooltipText
    }

    function a(e, t) {
        return e.text.localeCompare(t.text)
    }
    i(946);
    var r = i(88)
        .addTooltip,
        s = i(56)
        .inherits,
        c = i(72),
        l = i(86);
    s(n, c), e.exports = n, n.prototype._getValueIndex = function(e) {
        for (var t = this._getValuePairs(), i = 0; i < t.length; i++)
            if (t[i].value === e) return i;
        return -1
    }, n.prototype.addOption = function(e, t) {
        t || 0 === t || (t = ""), null === this._currentValue && (this._currentValue = t, this._setCurrentText(e, 0), this.setEnable(!0)), this._pushToValuePairs({
            text: e,
            value: t
        })
    }, n.prototype.changeTexts = function(e) {
        for (var t = 0; t < Math.min(e.length, this._getValuePairs()
                .length); t++) this._getValuePairs()[t].text = e[t]
    }, n.prototype.insertOptionAtTop = function(e, t) {
        t || 0 === t || (t = ""), this._unshiftValuePairs({
            text: e,
            value: t
        })
    }, n.prototype.sortValue = function() {
        this._getValuePairs()
            .sort(a)
    }, n.prototype.setEnable = function(e) {
        e = Boolean(e) && null !== this._currentValue, e !== this._isEnabled && (this._isEnabled = e, this._dropDownSelector.setEnable(e), this.toggleClassName("disabled", !e))
    }, n.prototype.hasValue = function(e) {
        return this._getValueIndex(e) !== -1
    }, n.prototype.select = function(e, t) {
        this._setValue(e, t)
    }, n.prototype.selectFirst = function(e) {
        if (this._getValuePairs()
            .length) {
            var t = this._getValuePairs()[0].value;
            return this._setValue(t, e), t
        }
    }, n.prototype._setValue = function(e, t) {
        var i = this._getValueIndex(e);
        if (i === -1) return console.error(new Error("Selecting invalid value: " + e));
        var n = this._currentValue;
        this._currentValue = e, window.gui.dropDown.select(i);
        var o = this._getValuePairs()[i],
            a = this._setCurrentText(o.text, i);
        t || this.emit("change", e, n, a)
    }, n.prototype._setCurrentText = function(e, t) {
        if (this._dropDownSelector._tooltipText = e, this.removeWords && 0 !== t) {
            for (var i = 0; i < this.removeWords.length; i++) e = e.replace(this.removeWords[i], "");
            e = e[0].toLocaleUpperCase() + e.substr(1)
        }
        return this._dropDownSelector.setText(e), e
    }, n.prototype.getCurrentText = function() {
        return this._dropDownSelector.getText()
    }, n.prototype.setValue = function(e) {
        this._setValue(e, !0)
    }, n.prototype.clearContent = function() {
        this._valuePairs = [], this._currentValue = null, this._dropDownSelector.setText(""), window.gui.dropDown.clearContent(), this.setEnable(!1)
    }, n.prototype.toggleOption = function(e, t) {
        if (e || 0 === e) {
            var i = this._getValuePairs()[e];
            i && (t = void 0 === t ? i.disabled : t,
                i.disabled = !t)
        }
    }, n.prototype.setOptionHidden = function(e, t) {
        var i = this._getValuePairs()[e];
        return i ? void(i.hidden = Boolean(t)) : console.warn("Invalid selector option", e)
    }, n.prototype._getValuePairs = function() {
        return this._valuePairs
    }, n.prototype._pushToValuePairs = function(e) {
        this._valuePairs.push(e)
    }, n.prototype._unshiftValuePairs = function(e) {
        this._valuePairs.unshift(e)
    }
}
