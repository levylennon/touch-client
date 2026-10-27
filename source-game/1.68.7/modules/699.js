function(e, t, i) {
    function n(e, t, i, n, o) {
        this.id = n, this.cache = e, this.element = t, this.memorySize = i, this.type = r[o], this.nLocks = 0, this.reference = null, this.attachment = null
    }

    function o(e, t) {
        this.elementsById = {},
        this.actives = new a,
        this.archives = new a,
        this.memoryUsed = 0,
        this.memoryAllocated = e,
        this.onElementRemoved = t || null,
        this.unidentifiedElementsCount = 0,
        this.addCount = 0,
        this.removeCount = 0
    }
    var a = i(432),
        r = {
            permanent: 0,
            archivable: 1,
            throwable: 2
        };
    n.prototype.isPermanent = function() {
        return this.type === r.permanent
    }, n.prototype._hold = function() {
        return this.type === r.permanent ? this : (this.nLocks += 1, this.cache._holdElement(this), this)
    }, n.prototype.release = function() {
        return this.type === r.permanent ? this : (this.nLocks -= 1, void(0 === this.nLocks ? this.cache._releaseElement(this) : this.nLocks < 0 && console.error(new Error("[ElementHandle.release] Number of locks is negative: " + this.id))))
    }, n.prototype.isFree = function() {
        return 0 === this.nLocks
    }, e.exports = o, o.prototype._clean = function() {
        for (var e = this.archives.first; null !== e && this.memoryUsed > this.memoryAllocated;) {
            var t = e.object;
            e = e.next, t.nLocks <= 0 && this._removeElement(t)
        }
    }, 
    o.prototype.log = function() {
        console.log("***** Cache Stats *****"), console.log("  Actives", this.actives.length), console.log("  Archives", this.archives.length), console.log("  Total", Object.keys(this.elementsById)
            .length), console.log("  Usage (units)", this.memoryUsed), console.log("  Usage (percentage)", (100 * this.memoryUsed / this.memoryAllocated)
            .toFixed(0), "%"), console.log("  Elements", this.elementsById)
    },
    o.prototype.getMemoryInformation = function() {
        return {
            actives: this.actives.length,
            archives: this.archives.length,
            total: Object.keys(this.elementsById)
                .length,
            memoryUsed: this.memoryUsed,
            memoryAllocated: this.memoryAllocated,
            percentage: Math.round(100 * this.memoryUsed / this.memoryAllocated)
        }
    },
    o.prototype._holdElement = function(e) {
        e.type !== r.permanent && (e.reference.container === this.actives ? this.actives.moveToTheEnd(e.reference) : (this.archives.removeByReference(e.reference), e.reference = this.actives.addBack(e)))
    },
    o.prototype._releaseElement = function(e) {
        this._archiveElement(e)
    },
    o.prototype._archiveElement = function(e) {
        return e.reference.container !== this.actives ? void console.warn("[Cache3State.archiveElement] The element cannot be archived:", e.id) : void(e.type === r.throwable ? this._removeElement(e) : (this.actives.removeByReference(e.reference), e.reference = this.archives.addBack(e), this._clean()))
    },
    o.prototype._addElement = function(e) {
        this.elementsById[e.id] = e,
        this.memoryUsed += e.memorySize,
        this._clean(),
        e.type !== r.permanent && (e.reference = this.actives.addBack(e)),
        this.addCount += 1
    },
    o.prototype.addAndHoldElement = function(e, t, i, o, a) {
        var s = Boolean(i);
        s === !1 && (i = "unidentified" + String(this.unidentifiedElementsCount++)), void 0 !== o && null !== o || (o = s ? "archivable" : "throwable");
        var c = this.elementsById[i];
        if (void 0 !== c) {
            if (!a) return c.type !== r[o] && console.warn("[Cache3State.addElement] Trying to change type of an exisiting element", i), c._hold();
            if (c.isFree() === !1) return console.warn("[Cache3State.addElement] Trying to replace a locked element", i), c._hold();
            this._removeElement(c)
        }
        return c = new n(this, e, t, i, o), this._addElement(c), c._hold()
    },
    o.prototype.holdElement = function(e) {
        var t = this.elementsById[e];
        if (void 0 !== t) return t._hold()
    },
    o.prototype.useElement = function(e) {
        var t = this.elementsById[e];
        if (void 0 !== t) return t
    },
    o.prototype._removeElement = function(e) {
        delete this.elementsById[e.id],
        this.memoryUsed -= e.memorySize,
        e.type !== r.permanent && (e.reference.container === this.actives ? e.reference = this.actives.removeByReference(e.reference) : e.reference = this.archives.removeByReference(e.reference)),
        null !== this.onElementRemoved && this.onElementRemoved(e.element), 
        this.removeCount += 1
    }
}
