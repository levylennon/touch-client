function(e, t) {
    function i() {
        this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), this._topCanvas = document.createElement("canvas"), this._topCtx = this._topCanvas.getContext("2d"), this._bottomCanvas = document.createElement("canvas"), this._bottomCtx = this._bottomCanvas.getContext("2d"), this._textCanvas = document.createElement("canvas"), this._textCtx = this._textCanvas.getContext("2d"), this._canvas.width = 1, this._canvas.height = 1, this._topCanvas.width = 1, this._topCanvas.height = 1, this._bottomCanvas.width = 1, this._bottomCanvas.height = 1, this._bottomOffset = 0, this._textCanvas.width = 1, this._textCanvas.height = 1, this._textOffset = 0, this._top = !1, this._bottom = !1, this._text = !1, this._canvasHasContents = !1
    }

    function n(e) {
        e.width = 1, e.height = 1
    }
    e.exports = i, i.prototype.displayTextBackground = function(e, t) {
        var i = this._textCtx;
        i.fillStyle = "rgba(0, 0, 0, 0.8)";
        var n = 5;
        i.beginPath(), i.moveTo(n, 0), i.lineTo(e - n, 0), i.quadraticCurveTo(e, 0, e, n), i.lineTo(e, t - n), i.quadraticCurveTo(e, t, e - n, t), i.lineTo(n, t), i.quadraticCurveTo(0, t, 0, t - n), i.lineTo(0, n), i.quadraticCurveTo(0, 0, n, 0), i.closePath(), i.fill(), i.textAlign = "center"
    }, i.prototype.displayText = function(e, t, i, n, o) {
        var a = this._textCtx;
        a.font = n, a.fillStyle = o, a.fillText(e, t, i)
    }, i.prototype.displayImage = function(e, t, i, n, o) {
        this._textCtx.drawImage(e, t, i, n, o)
    }, i.prototype._syncCanvas = function(e, t, i) {
        var n = document.createElement("canvas"),
            o = n.getContext("2d");
        n.width = Math.max(this._canvas.width, t.width);
        var a = 0;
        t.width > this._canvas.width && (a = t.width / 2 - this._canvas.width / 2);
        var r = n.width / 2 - t.width / 2;
        e ? (n.height = this._canvas.height + t.height + i, o.drawImage(t, r, 0), this._canvasHasContents && o.drawImage(this._canvas, a, t.height + i)) : (n.height = this._canvas.height + t.height + i, o.drawImage(t, r, this._canvas.height + i), this._canvasHasContents && o.drawImage(this._canvas, 0, 0)), this._canvas.width = n.width, this._canvas.height = n.height, this._ctx.drawImage(n, 0, 0)
    }, i.prototype.updateWithWings = function() {
        n(this._canvas), this._top ? (this._canvasHasContents = !0, this._syncCanvas(!1, this._textCanvas, 0), this._syncCanvas(!0, this._topCanvas, this._textOffset)) : this._syncCanvas(!1, this._textCanvas, 0), this._bottom && this._syncCanvas(!1, this._bottomCanvas, this._bottomOffset)
    }, i.prototype.update = function() {
        n(this._canvas), this._syncCanvas(!1, this._textCanvas, 0)
    }, i.prototype.clearAll = function() {
        n(this._canvas), this._canvasHasContents = !1, n(this._topCanvas), this._top = !1, this._textOffset = 0, n(this._bottomCanvas), this._bottom = !1, this._bottomOffset = 0, n(this._textCanvas), this._text = !1
    }, i.prototype.displayWingPart = function(e, t, i) {
        var o = document.createElement("canvas"),
            a = o.getContext("2d");
        o.height = e.height, o.width = e.width, a.drawImage(e, 0, 0), i ? (n(this._topCanvas), this._textOffset = -(t.top + o.height), this._topCanvas.width = o.width, this._topCanvas.height = o.height, this._topCtx.drawImage(o, 0, 0), this._top = !0) : (n(this._bottomCanvas), this._bottomOffset = t.top - o.height, this._bottomCanvas.width = o.width, this._bottomCanvas.height = o.height, this._bottomCtx.drawImage(o, 0, 0), this._bottom = !0)
    }, i.prototype.saveAndTransform = function(e, t, i, n, o, a) {
        var r = this._textCtx;
        r.save(), r.transform(e, t, i, n, o, a), this._isTransformed = !0
    }, i.prototype.restore = function() {
        var e = this._textCtx;
        this._isTransformed && (this._isTransformed = !1, e.restore())
    }, i.prototype.displayTextAndOrnament = function(e, t, i, n, o, a, r) {
        var s = this._textCtx;
        if ("bg" === e) {
            var c = i.sw / i.w,
                l = i.sh / i.h,
                d = .5 * a - i.x,
                u = .5 * r - i.y,
                p = i.w + i.x - .5 * a,
                h = i.h + i.y - .5 * r;
            s.drawImage(t, i.sx, i.sy, d * c, u * l, i.x, i.y, d, u), s.drawImage(t, i.sx + d * c, i.sy, p * c, u * l, i.x + d + n, i.y, p, u), s.drawImage(t, i.sx, i.sy + u * l, d * c, h * l, i.x, i.y + u + o, d, h), s.drawImage(t, i.sx + d * c, i.sy + u * l, p * c, h * l, i.x + d + n, i.y + u + o, p, h), s.drawImage(t, i.sx + d * c, i.sy, Number(c), u * l, i.x + d, i.y, n, u), s.drawImage(t, i.sx + d * c, i.sy + u * l, Number(c), h * l, i.x + d, i.y + u + o, n, h), s.drawImage(t, i.sx, i.sy + u * l, d * c, Number(l), i.x, i.y + u, d, o), s.drawImage(t, i.sx + d * c, i.sy + u * l, d * c, Number(l), i.x + d + n, i.y + u, d, o)
        } else s.drawImage(t, i.sx, i.sy, i.sw, i.sh, i.x, i.y, i.w, i.h)
    }, i.prototype.getCanvas = function() {
        return this._canvas
    }, i.prototype.getTextCanvas = function() {
        return this._textCanvas
    }
}
