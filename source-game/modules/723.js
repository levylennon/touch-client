function(e, t) {
    function i(e, t) {
        this.object = e, this.height = 1, this.left = null, this.right = null, this.parent = null, this.container = t
    }

    function n(e) {
        this.length = 0, this.root = null, this.cmpFunc = e
    }
    n.prototype._addLeft = function(e, t) {
        e.parent = t, t.left = e
    }, n.prototype._addRight = function(e, t) {
        e.parent = t, t.right = e
    }, n.prototype.popSmallest = function() {
        for (var e = this.root; null !== e.left;) e = e.left;
        return this.removeByReference(e), e.object
    }, n.prototype.popGreatest = function() {
        for (var e = this.root; null !== e.right;) e = e.right;
        return this.removeByReference(e), e.object
    }, n.prototype.add = function(e) {
        this.length += 1;
        var t = new i(e, this);
        if (null === this.root) return this.root = t, t;
        for (var n = this.root;;) {
            var o = this.cmpFunc(e, n.object);
            if (o < 0) {
                if (null === n.left) {
                    this._addLeft(t, n);
                    break
                }
                n = n.left
            } else if (o > 0) {
                if (null === n.right) {
                    this._addRight(t, n);
                    break
                }
                n = n.right
            } else {
                if (null === n.left) {
                    this._addLeft(t, n);
                    break
                }
                if (null === n.right) {
                    this._addRight(t, n);
                    break
                }
                n = n.right.height < n.left.height ? n.right : n.left
            }
        }
        return 1 === n.height && this._balance(t.parent, !1), t
    }, n.prototype._balanceLeftRight = function(e) {
        var t = e.left,
            i = t.right,
            n = t.left,
            o = i.left;
        i.left = t, e.left = i, i.parent = e, t.parent = i, t.left = n, t.right = o;
        var a = 0;
        null !== n && (a = n.height, n.parent = t);
        var r = 0;
        null !== o && (r = o.height, o.parent = t);
        var s = (a > r ? a : r) + 1;
        t.height = s;
        var c = null === i.right ? 0 : i.right.height;
        i.height = (s > c ? s : c) + 1
    }, n.prototype._balanceLeftLeft = function(e) {
        var t = e.left,
            i = t.right,
            n = e.parent;
        e === this.root ? this.root = t : n.right === e ? n.right = t : n.left = t, t.right = e, t.parent = n, e.parent = t, e.left = i;
        var o;
        null === i ? o = 0 : (i.parent = e, o = i.height);
        var a = null === e.right ? 0 : e.right.height;
        e.height = (o > a ? o : a) + 1
    }, n.prototype._balanceRightLeft = function(e) {
        var t = e.right,
            i = t.left,
            n = t.right,
            o = i.right;
        i.right = t, e.right = i, i.parent = e, t.parent = i, t.right = n, t.left = o;
        var a = 0;
        null !== n && (a = n.height, n.parent = t);
        var r = 0;
        null !== o && (r = o.height, o.parent = t);
        var s = (a > r ? a : r) + 1;
        t.height = s;
        var c = null === i.left ? 0 : i.left.height;
        i.height = (c > s ? c : s) + 1
    }, n.prototype._balanceRightRight = function(e) {
        var t = e.right,
            i = t.left;
        e === this.root ? this.root = t : e.parent.left === e ? e.parent.left = t : e.parent.right = t, t.left = e, t.parent = e.parent, e.parent = t, e.right = i;
        var n;
        null === i ? n = 0 : (i.parent = e, n = i.height);
        var o = null === e.left ? 0 : e.left.height;
        e.height = (o > n ? o : n) + 1
    }, n.prototype._balance = function(e, t) {
        for (var i = e; null !== i;) {
            var n = i.left,
                o = i.right,
                a = null === n ? 0 : n.height,
                r = null === o ? 0 : o.height;
            if (a - r > 1) null !== n.right && (null === n.left || n.left.height < n.right.height) && this._balanceLeftRight(i), this._balanceLeftLeft(i);
            else if (r - a > 1) null !== o.left && (null === o.right || o.right.height < o.left.height) && this._balanceRightLeft(i), this._balanceRightRight(i);
            else {
                var s = (a > r ? a : r) + 1;
                if (!t && s === i.height) break;
                i.height = s
            }
            i = i.parent
        }
    }, n.prototype.removeByReference = function(e) {
        if (e.container !== this) return e;
        this.length -= 1;
        var t = e.parent,
            i = e.left,
            n = e.right;
        if (null === e.right) return null !== i && (i.parent = t), null === t ? this.root = i : (t.right === e ? t.right = i : t.left = i, null === i ? this._balance(t, !0) : i.height + 3 <= t.height && this._balance(t, !0)), !0;
        var o = e.right;
        if (null === o.left) return null !== i && (i.parent = o), o.left = i, null === t ? this.root = o : t.right === e ? t.right = o : t.left = o, o.parent = t, this._balance(o, !0), !0;
        for (o = o.left; null !== o.left;) o = o.left;
        null !== o.right && (o.right.parent = o.parent), o.parent.left = o.right, null !== n && (n.parent = o), o.right = n, null !== i && (i.parent = o), o.left = i, null === t ? this.root = o : t.right === e ? t.right = o : t.left = o;
        var a = o.parent;
        return o.parent = t, this._balance(a, !0), e.left = null, e.right = null, e.parent = null, e.container = null, null
    }, n.prototype.getSmallestAbove = function(e) {
        if (null === this.root) return null;
        for (var t = null, i = this.root; null !== i;) {
            var n = this.cmpFunc(e, i.object);
            if (n < 0) t = i.object, i = i.left;
            else {
                if (!(n > 0)) return i.object;
                i = i.right
            }
        }
        return t
    }, n.prototype.getGreatestBelow = function(e) {
        if (null === this.root) return null;
        for (var t = null, i = this.root; null !== i;) {
            var n = this.cmpFunc(e, i.object);
            if (n < 0) i = i.left;
            else {
                if (!(n > 0)) return i.object;
                t = i.object, i = i.right
            }
        }
        return t
    }, n.prototype._forEach = function(e, t, i) {
        null !== e && (this._forEach(e.left, t, i), t(e.object, i), this._forEach(e.right, t, i))
    }, n.prototype.forEach = function(e, t) {
        this._forEach(this.root, e, t)
    }, n.prototype._forEachReverse = function(e, t, i) {
        null !== e && (this._forEachReverse(e.right, t, i), t(e.object, i), this._forEachReverse(e.left, t, i))
    }, n.prototype.forEachReverse = function(e, t) {
        this._forEachReverse(this.root, e, t)
    }, n.prototype.clear = function() {
        this._clearEachNode(this.root), this.length = 0, this.root = null
    }, n.prototype._clearEachNode = function(e) {
        null !== e && (this._clearEachNode(e.left), this._clearEachNode(e.right), e.left = null, e.right = null, e.parent = null, e.container = null)
    }, n.prototype._toArray = function(e, t) {
        null !== e && (this._toArray(e.left, t), t.push(e.object), this._toArray(e.right, t))
    }, n.prototype.toArray = function() {
        var e = [];
        return this._toArray(this.root, e), e
    }, e.exports = n
}
