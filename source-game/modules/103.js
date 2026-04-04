function(e, t, i) {
    function n() {
        a.call(this),
        this._context = r.ROLE_PLAY,
        this._setMode(),
        s.on("GameContextCreateMessage", this.changeGameContext.bind(this))
    }
    var o = i(56).inherits,
        a = i(59).EventEmitter,
        r = i(104),
        s = i(105);
    o(n, a), 
    n.prototype.changeGameContext = function(e) {
        this._context = e.context,
        this._setMode(),
        this.emit("gameContextChanged", this._context)
    },
    n.prototype._setMode = function() {
        this.isRoleplayMode = this._context === r.ROLE_PLAY,
        this.isFightMode = this._context === r.FIGHT
    },
    e.exports = new n
}
