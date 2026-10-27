function(e, t) {
    function i(e) {
        this.count = 0, this.first = null, this.last = null, this.cmpFunc = e
    }

    function n(e, t, i, n) {
        this.object = e, this.previous = t, this.next = i, this.container = n
    }
    i.prototype.add = function(e) {
        var t = new n(e, null, null, this);
        if (this.count += 1, null === this.first) return this.first = t, this.last = t, t;
        var i = this.cmpFunc(e, this.first.object);
        if (i < 0) return t.next = this.first, this.first.previous = t, this.first = t, t;
        var o = this.cmpFunc(e, this.last.object);
        if (o >= 0) return t.previous = this.last, this.last.next = t, this.last = t, t;
        var a;
        if (i + o < 0) {
            for (a = this.first.next; this.cmpFunc(e, a.object) >= 0;) a = a.next;
            t.next = a, t.previous = a.previous, t.previous.next = t, a.previous = t
        } else {
            for (a = this.last.previous; this.cmpFunc(e, a.object) < 0;) a = a.previous;
            t.previous = a, t.next = a.next, t.next.previous = t, a.next = t
        }
        return t
    }, i.prototype.removeByRef = function(e) {
        return !(!e || e.container !== this) && (this.count -= 1, null === e.previous ? this.first = e.next : e.previous.next = e.next, null === e.next ? this.last = e.previous : e.next.previous = e.previous, e.previous = null, e.next = null, e.container = null, !0)
    }, i.prototype.moveToTheBeginning = function(e) {
        return !(!e || e.container !== this) && (null === e.previous || (e.previous.next = e.next, this.last === e ? this.last = e.previous : e.next.previous = e.previous, e.previous = null, e.next = this.first, e.next.previous = e, this.first = e, !0))
    }, i.prototype.moveToTheEnd = function(e) {
        return !(!e || e.container !== this) && (null === e.next || (e.next.previous = e.previous, this.first === e ? this.first = e.next : e.previous.next = e.next, e.next = null, e.previous = this.last, e.previous.next = e, this.last = e, !0))
    }, i.prototype.possess = function(e) {
        return e && e.container === this
    }, i.prototype.popFirst = function() {
        var e = this.first;
        if (!e) return null;
        this.count -= 1;
        var t = e.object;
        return this.first = e.next, null !== this.first && (this.first.previous = null), e.next = null, e.container = null, t
    }, i.prototype.popLast = function() {
        var e = this.last;
        if (!e) return null;
        this.count -= 1;
        var t = e.object;
        return this.last = e.previous, null !== this.last && (this.last.next = null), e.previous = null, e.container = null, t
    }, i.prototype.getFirst = function() {
        return this.first && this.first.object
    }, i.prototype.getLast = function() {
        return this.last && this.last.object
    }, i.prototype.clear = function() {
        for (var e = this.first; e; e = e.next) e.container = null;
        this.count = 0, this.first = null, this.last = null
    }, i.prototype.getCount = function() {
        return this.count
    }, i.prototype.toArray = function() {
        for (var e = [], t = this.first; t; t = t.next) e.push(t.object);
        return e
    }, i.prototype.forEach = function(e, t) {
        for (var i = this.first; i; i = i.next) e(i.object, t)
    }, i.prototype.forEachReverse = function(e, t) {
        for (var i = this.last; i; i = i.previous) e(i.object, t)
    }, i.prototype.reposition = function(e) {
        if (e.container !== this) return this.add(e.object);
        var t = e.previous,
            i = e.next,
            n = e.object;
        for (null === i ? this.last = t : i.previous = t, null === t ? this.first = i : t.next = i; null !== t && this.cmpFunc(n, t.object) < 0;) i = t, t = t.previous;
        for (; null !== i && this.cmpFunc(n, i.object) >= 0;) t = i, i = i.next;
        return e.next = i, null === i ? this.last = e : i.previous = e, e.previous = t, null === t ? this.first = e : t.next = e, e
    }, e.exports = i
}
