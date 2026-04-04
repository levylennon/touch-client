function(e, t) {
    function i(e) {
        this.sprite = e, this._red = 1, this._green = 1, this._blue = 1, this._alpha = 1
    }

    function n(e) {
        this.id = e.id, this._position = e.position || 0, this.bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)], this.renderer = null, this._highlight = new i(this), this._hue = e.hue || [1, 1, 1, 1], this.tint = this.hue.slice(), this._alpha = 1, this.alpha = void 0 === e.alpha ? 1 : e.alpha, this.isOutdated = !1
    }
    Object.defineProperty(i.prototype, "red", {
        get: function() {
            return this._red
        },
        set: function(e) {
            this._red = e;
            var t = this.sprite;
            t.tint[0] = t.hue[0] * e, t.forceRefresh()
        }
    }), Object.defineProperty(i.prototype, "green", {
        get: function() {
            return this._green
        },
        set: function(e) {
            this._green = e;
            var t = this.sprite;
            t.tint[1] = t.hue[1] * e, t.forceRefresh()
        }
    }), Object.defineProperty(i.prototype, "blue", {
        get: function() {
            return this._blue
        },
        set: function(e) {
            this._blue = e;
            var t = this.sprite;
            t.tint[2] = t.hue[2] * e, t.forceRefresh()
        }
    }), Object.defineProperty(i.prototype, "alpha", {
        get: function() {
            return this._alpha
        },
        set: function(e) {
            this._alpha = e;
            var t = this.sprite;
            t.tint[3] = t.hue[3] * e, t.forceRefresh()
        }
    }), e.exports = n, Object.defineProperty(n.prototype, "position", {
        get: function() {
            return this._position
        },
        set: function(e) {
            e !== this._position && (this._position = e, this.isDisplayed && this._show(), this.forceRefresh())
        }
    }), Object.defineProperty(n.prototype, "hue", {
        get: function() {
            return this._hue
        },
        set: function(e) {
            e !== this._hue && (this._hue = e, this.tint[0] = this.hue[0] * this._highlight.red, this.tint[1] = this.hue[1] * this._highlight.green, this.tint[2] = this.hue[2] * this._highlight.blue, this.tint[3] = this.hue[3] * this._highlight.alpha * this._alpha, this.isDisplayed && this._show(), this.forceRefresh())
        }
    }), Object.defineProperty(n.prototype, "highlight", {
        get: function() {
            return this._highlight
        },
        set: function(e) {
            this.setHighlight(e)
        }
    }), Object.defineProperty(n.prototype, "alpha", {
        get: function() {
            return this._alpha
        },
        set: function(e) {
            e !== this._alpha && (this._alpha = e, this.tint[3] = this.hue[3] * this._highlight.alpha * this._alpha, this.forceRefresh())
        }
    }), n.prototype.setHighlight = function(e) {
        return null === e ? void this.removeHighlight() : (this._highlight._red = e.red, this._highlight._green = e.green, this._highlight._blue = e.blue, this._highlight._alpha = e.alpha, this.tint[0] = this.hue[0] * e.red, this.tint[1] = this.hue[1] * e.green, this.tint[2] = this.hue[2] * e.blue, this.tint[3] = this.hue[3] * e.alpha * this._alpha, void this.forceRefresh())
    }, n.prototype.setHueAlpha = function(e) {
        this.hue = [this.hue[0], this.hue[1], this.hue[2], e]
    }, n.prototype.removeHighlight = function() {
        this._highlight._red = 1, this._highlight._green = 1, this._highlight._blue = 1, this._highlight._alpha = 1, this.tint[0] = this.hue[0], this.tint[1] = this.hue[1], this.tint[2] = this.hue[2], this.tint[3] = this.hue[3] * this._alpha, this.forceRefresh()
    }, n.prototype.forceRefresh = function() {}
}
