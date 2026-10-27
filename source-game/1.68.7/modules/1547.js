function(e, t, i) {
    function n() {
        this._queue = [], this._actionMap = {}, this._isActive = !1, this._currentActionId = null, this._endOfQueueOnly = !1
    }
    var o = i(13)
        .ELEMENT_TYPE_ID,
        a = i(130),
        r = null;
    e.exports = n, n.prototype.initialize = function() {
        r || a.getAllDataMap("Interactives", function(e, t) {
            if (e) return void console.error(new Error("ActionQueue.staticContent.getAllDataMap: " + e));
            r = {};
            for (var i in t) 1 !== t[i].actionId && (r[i] = !0);
            r[o.UNSPECIFIED] = !0
        })
    }, n.prototype.enqueue = function(e, t, i) {
        return !!this.canQueueMore() && (this._isActive ? !!this._actionMap[e] || (this._queue.push({
            actionId: e,
            action: i,
            endOfQueueOnly: t
        }), this._actionMap[e] = !0, !0) : (this._isActive = !0, this._actionMap[e] = !0, this._currentActionId = e, this._endOfQueueOnly = t, i(), !0))
    }, n.prototype.enqueueInteractive = function(e, t, i) {
        var n = r && r[t] || !1;
        return this.enqueue(e, n, i)
    }, n.prototype.dequeue = function(e) {
        if (this._isActive) {
            delete this._actionMap[e];
            var t = this._queue.shift();
            if (!t) return void this.clear();
            this._currentActionId = t.actionId, this._endOfQueueOnly = t.endOfQueueOnly, t.action()
        }
    }, n.prototype.canQueueMore = function() {
        if (!this._isActive) return !0;
        var e;
        return e = this._queue.length > 0 ? !this._queue[this._queue.length - 1].endOfQueueOnly : !this._endOfQueueOnly
    }, n.prototype.isActive = function() {
        return this._isActive
    }, n.prototype._isCurrentAction = function(e) {
        return this._currentActionId === e
    }, n.prototype.clear = function() {
        this._queue = [], this._actionMap = {}, this._isActive = !1, this._currentActionId = null, this._endOfQueueOnly = !1
    }, n.prototype.isActionQueued = function(e) {
        return Boolean(this._actionMap[e])
    }
}
