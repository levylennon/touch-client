function(e, t) {
    function i(e, t, i, n) {
        this.object = e, this.previous = t, this.next = i, this.container = n
    }

    function n() {
        this.first = null, this.last = null, this.length = 0
    }
    e.exports = n, n.prototype.addFront = function(e) {
        var t = new i(e, null, this.first, this);
        return null === this.first ? (this.first = t, this.last = t) : (this.first.previous = t, this.first = t), this.length += 1, t
    }, n.prototype.add = n.prototype.addFront, n.prototype.addBack = function(e) {
        var t = new i(e, this.last, null, this);
        return null === this.first ? (this.first = t, this.last = t) : (this.last.next = t, this.last = t), this.length += 1, t
    }, n.prototype.popFront = function() {
        var e = this.first.object;
        return this.removeByReference(this.first), e
    }, n.prototype.pop = n.prototype.popFront, n.prototype.popBack = function() {
        var e = this.last.object;
        return this.removeByReference(this.last), e
    }, n.prototype.addBefore = function(e, t) {
        var n = new i(t, e.previous, e, this);
        return null !== e.previous && (e.previous.next = n), e.previous = n, this.first === e && (this.first = n), this.length += 1, n
    }, n.prototype.addAfter = function(e, t) {
        var n = new i(t, e, e.next, this);
        return null !== e.next && (e.next.previous = n), e.next = n, this.last === e && (this.last = n), this.length += 1, n
    }, n.prototype.moveToTheBeginning = function(e) {
        return !(!e || e.container !== this) && (null === e.previous || (e.previous.next = e.next, this.last === e ? this.last = e.previous : e.next.previous = e.previous, e.previous = null, e.next = this.first, e.next.previous = e, this.first = e, !0))
    }, n.prototype.moveToTheEnd = function(e) {
        return !(!e || e.container !== this) && (null === e.next || (e.next.previous = e.previous, this.first === e ? this.first = e.next : e.previous.next = e.next, e.next = null, e.previous = this.last, e.previous.next = e, this.last = e, !0))
    }, n.prototype.removeByReference = function(e) {
        return e.container !== this ? (console.warn("[DoublyList.removeByReference] Trying to remove a node that does not belong to the list"), e) : (null === e.next ? this.last = e.previous : e.next.previous = e.previous, null === e.previous ? this.first = e.next : e.previous.next = e.next, e.container = null, this.length -= 1, null)
    }, n.prototype.remove = function(e) {
        for (var t = this.first; null !== t; t = t.next)
            if (t.object === e) return this.removeByReference(t), !0;
        return !1
    }, n.prototype.clear = function() {
        for (var e = this.first; null !== e; e = e.next) e.container = null;
        this.first = null, this.last = null, this.length = 0
    }, n.prototype.forEach = function(e, t) {
        for (var i = this.first; i; i = i.next) e(i.object, t)
    }, n.prototype.toArray = function() {
        for (var e = [], t = this.first; null !== t; t = t.next) e.push(t.object);
        return e
    }
}
