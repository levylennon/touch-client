function(e, t, i) {
    function n(e, t) {
        this.start = e, this.nBytes = t, this.update = 0, this.prevChunk = null, this.nextChunk = null, this.id = null, this.obj = null, this.ref = null, this.nLocks = 0
    }

    function o(e, t) {
        this.memoryChunksFree = new a(function(e, t) {
            return e.nBytes - t.nBytes;
        }), this.memoryChunksUsed = new r(function(e, t) {
            return e.update - t.update
        }), this.memoryChunksLocked = new r(function() {
            return 1
        });
        var i = t - e,
            o = new n(e, i);
        o.ref = this.memoryChunksFree.add(o), this.firstByte = e, this.nBytes = i, this.update = 0, this.chunksById = {}
    }
    var a = i(723),
        r = i(93);
    n.prototype.set = function(e, t, i) {
        this.start = e, this.nBytes = t, this.update = i
    }, e.exports = o, o.prototype.touch = function(e) {
        var t = this.chunksById[e];
        if (void 0 !== t) return 0 === t.nLocks && (t.update = this.update++, this.memoryChunksUsed.moveToTheEnd(t.ref)), t.obj
    }, o.prototype.getChunk = function(e) {
        return this.chunksById[e]
    }, o.prototype.addLock = function(e) {
        var t = this.chunksById[e];
        if (void 0 !== t) return 0 === t.nLocks && (this.memoryChunksUsed.removeByRef(t.ref) || console.warn("[SuperFastMemoryPartitioner.lock] Trying to lock an already locked chunk", e), t.ref = this.memoryChunksLocked.add(t), t.update = 1 / 0), t.nLocks += 1, t.obj
    }, o.prototype.removeLock = function(e) {
        var t = this.chunksById[e];
        void 0 !== t && (t.nLocks -= 1, 0 === t.nLocks && (this.memoryChunksLocked.removeByRef(t.ref), t.ref = this.memoryChunksUsed.add(t), t.update = this.update++), t.nLocks < 0 && console.warn("[SuperFastMemoryPartitioner.unlock] Trying to unlock a non-locked chunk", e))
    }, o.prototype.possess = function(e) {
        return Boolean(this.chunksById[e])
    }, o.prototype.release = function(e) {
        var t = this.chunksById[e];
        if (void 0 !== t) {
            if (t.ref.container === this.memoryChunksLocked ? this.memoryChunksLocked.removeByRef(t.ref) : this.memoryChunksUsed.removeByRef(t.ref), t.prevChunk && t.prevChunk.ref.container === this.memoryChunksFree) {
                var i = t.prevChunk;
                t.start = i.start, t.nBytes += i.nBytes, t.prevChunk = i.prevChunk, i.prevChunk && (i.prevChunk.nextChunk = t), this.memoryChunksFree.removeByReference(i.ref)
            }
            if (t.nextChunk && t.nextChunk.ref.container === this.memoryChunksFree) {
                var n = t.nextChunk;
                t.nBytes += n.nBytes, t.nextChunk = n.nextChunk, n.nextChunk && (n.nextChunk.prevChunk = t), this.memoryChunksFree.removeByReference(n.ref)
            }
            t.ref = this.memoryChunksFree.add(t), t.nLocks = 0, t.update = 0, delete this.chunksById[e]
        }
    }, o.prototype.bindObject = function(e, t) {
        var i = this.chunksById[e];
        return void 0 !== i && (i.obj = t, !0)
    }, o.prototype._selectChunks = function(e) {
        var t = this.memoryChunksFree.getSmallestAbove({
            nBytes: e
        });
        if (t) return [t];
        if (0 === this.memoryChunksUsed.count) throw new Error("No available chunk can hold " + e + " Bytes.Make sure that enough space is allocated (currently " + this.nBytes + ") or that locked chunks are correctly unlocked.");
        var i = this.memoryChunksUsed.first;
        if (i.object.nBytes >= e) return [i.object];
        for (var n, o = 0, a = 7, r = 1 / 0;
            (o < a || r === 1 / 0) && null !== i;) {
            for (var s = i.object, c = [s], l = s.nBytes, d = s.prevChunk, u = s.nextChunk, p = s.update; l < e;) null === d || null !== u && u.update <= d.update ? (p < u.update && (p = u.update), c.push(u), l += u.nBytes, u = u.nextChunk) : (p < d.update && (p = d.update), c.unshift(d), l += d.nBytes, d = d.prevChunk);
            p < r && (r = p, n = c), i = i.next, o += 1
        }
        if (r === 1 / 0) throw new Error("No available chunk can hold " + e + " Bytes.Make sure that enough space is allocated (currently " + this.nBytes + ") or that locked chunks are correctly unlocked.");
        return n
    }, o.prototype.reserve = function(e, t) {
        for (var i = this._selectChunks(t), o = 0; o < i.length; o += 1) {
            var a = i[o];
            a.ref.container === this.memoryChunksUsed ? (this.memoryChunksUsed.removeByRef(a.ref), delete this.chunksById[a.id]) : this.memoryChunksFree.removeByReference(a.ref)
        }
        var r = i[0],
            s = i[i.length - 1],
            c = r.start,
            l = s.start + s.nBytes;
        r.set(c, t, this.update), r.ref = this.memoryChunksUsed.add(r), r.id = e, this.chunksById[e] = r;
        var d = l - c;
        if (d === t) r.nextChunk = s.nextChunk, null !== r.nextChunk && (r.nextChunk.prevChunk = r);
        else {
            var u;
            if (r === s ? (u = new n(c + t, d - t), u.nextChunk = s.nextChunk, null !== u.nextChunk && (u.nextChunk.prevChunk = u)) : (u = s, u.set(c + t, d - t, 0)), u.prevChunk = r, r.nextChunk = u, u.nextChunk && u.nextChunk.ref.container === this.memoryChunksFree) {
                var p = u.nextChunk;
                u.nBytes += p.nBytes, u.nextChunk = p.nextChunk, p.nextChunk && (p.nextChunk.prevChunk = u), this.memoryChunksFree.removeByReference(p.ref)
            }
            u.ref = this.memoryChunksFree.add(u)
        }
        return this.update += 1, r
    }, o.prototype.debug = function() {
        console.log("***** SFMP *****"), console.log(" FREE CHUNKS"), this.memoryChunksFree.forEach(function(e) {
            console.log(e)
        }), console.log(" USED CHUNKS"), this.memoryChunksUsed.forEach(function(e) {
            console.log(e)
        }), console.log(" LOCKED CHUNKS"), this.memoryChunksLocked.forEach(function(e) {
            console.log(e)
        })
    }
}
