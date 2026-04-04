function(e, t, i) {
    function n() {}

    function o(e, t, i) {
        if (!e) throw new Error("Need the logger!");
        this._wuidom = i, this._id = -1, this._content = "", this._channelMap = t || {}, this._dom = null, this._contentDom = null, this._isRemoved = !1
    }
    var a = i(578);
    e.exports = o, o.prototype._createMessageContent = function(e) {
        return e()
    }, o.prototype.getId = function() {
        return this._id
    }, o.prototype.getDom = function(e) {
        var t = this;
        return e = e || n, this._dom ? (e(this._dom), this._dom) : (this._dom = new this._wuidom("div", {
            className: "messageWrapper"
        }), this._createMessageContent(function(i) {
            return t._contentDom = i, t._dom.appendChild(t._contentDom), e(t._dom)
        }), this._dom)
    }, o.prototype.updateContent = function(e, t) {
        var i = this;
        t = t || n, this._content = e;
        var o = this.getDom(function() {
            i.deleteContent(), i._createMessageContent(function(e) {
                return i._contentDom = e, i._dom.appendChild(i._contentDom), t()
            })
        });
        return o
    }, o.prototype.updateMessage = function(e) {
        e === a.MARK_REMOVED && (this._isRemoved = !0), this.updateContent(this._content)
    }, o.prototype.deleteContent = function() {
        this._dom && this._dom.clearContent()
    }
}
